import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import stream from "stream";
import nodemailer from "nodemailer";

// Initialize Google Auth securely from environment variables
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: privateKey,
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

const sheets = google.sheets({ version: "v4", auth });
const drive = google.drive({ version: "v3", auth });

// Basic rate limiting (volatile on serverless — acceptable for low-traffic forms)
const submissions = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // max submissions per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = submissions.get(ip);

  if (!record || now - record.lastReset > RATE_WINDOW) {
    submissions.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

// Server-side validation for tax form fields
function validateTaxFormData(data: Record<string, unknown>): string | null {
  const str = (key: string): string => {
    const val = data[key];
    return typeof val === "string" ? val.trim() : "";
  };

  if (!str("name") || str("name").length < 2 || str("name").length > 200) {
    return "Full name is required (2-200 characters).";
  }
  if (!str("tfn") || !/^\d{3}\s?\d{3}\s?\d{3}$/.test(str("tfn"))) {
    return "A valid 9-digit Tax File Number is required.";
  }
  // Add other required validations as needed...

  return null;
}

export async function POST(request: NextRequest) {
  try {
    // Body size guard: reject payloads larger than 5MB
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 5_000_000) {
      return NextResponse.json(
        { result: "error", error: "Request payload too large." },
        { status: 413 }
      );
    }

    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { result: "error", error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate required fields
    const validationError = validateTaxFormData(body);
    if (validationError) {
      return NextResponse.json(
        { result: "error", error: validationError },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!sheetId || !folderId) {
      console.error("Missing Google IDs in .env.local");
      return NextResponse.json(
        { result: "error", error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 1. Upload PDF to Google Drive directly (to get the link)
    let pdfLink = "";
    let driveFileId = ""; // Track for potential rollback
    if (body.pdfBase64) {
      const base64Data = body.pdfBase64.split(',')[1] || body.pdfBase64;
      const buffer = Buffer.from(base64Data, 'base64');
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);

      const sanitizedName = (body.name || "Unknown").replace(/[^a-zA-Z0-9]/g, "_");
      const fileName = `TaxReturn_${sanitizedName}_${Date.now()}.pdf`;

      const fileRes = await drive.files.create({
        requestBody: {
          name: fileName,
          parents: [folderId],
          mimeType: "application/pdf",
        },
        media: {
          mimeType: "application/pdf",
          body: bufferStream,
        },
        supportsAllDrives: true,
        fields: "id, webViewLink", // Request the viewable link
      });
      pdfLink = fileRes.data.webViewLink || "";
      driveFileId = fileRes.data.id || "";
      body.PDF_Link = pdfLink; // Attach to body so it maps to the sheet
    }

    // 2. Dynamically map data to sheet headers
    const headerRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!1:1", // Get the first row (headers)
    });
    
    const headers = headerRes.data.values?.[0] || [];
    const rowData = headers.map(header => {
      if (header === "Date") return new Date().toISOString();
      if (header === "RawData") return JSON.stringify(body);
      
      // Match the header name to the body key
      const value = body[header];
      
      // Handle boolean conversions for checkboxes
      if (typeof value === "boolean") return value ? "Yes" : "No";
      
      return value !== undefined ? value : "";
    });

    // 3. Append to Google Sheets directly
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "Sheet1!A1", // Google automatically finds the next empty row
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [rowData],
        },
      });
    } catch (sheetErr) {
      // ROLLBACK: If Sheets fails, delete the orphaned PDF from Drive
      if (driveFileId) {
        console.warn(`Sheets append failed. Rolling back Drive upload: ${driveFileId}`);
        await drive.files.delete({ fileId: driveFileId, supportsAllDrives: true }).catch(err => 
          console.error("Failed to rollback Drive file:", err)
        );
      }
      throw sheetErr; // Rethrow to return 500
    }

    // 4. Send Email via Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail", // Use gmail or whatever service you have
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const adminEmail = process.env.ADMIN_EMAIL || "admin@eevsgroup.com";
        const taxEmail = process.env.NEXT_PUBLIC_TAX_EMAIL || "tax.everest@yahoo.com";

        const mailOptions = {
          from: `"Everest Tax System" <${process.env.EMAIL_USER}>`,
          to: `${taxEmail}, ${adminEmail}`, // Sends to both addresses
          subject: `New Tax Return Submitted: ${body.name || "Client"}`,
          text: `A new tax return has been submitted by ${body.name}.\n\nPhone: ${body.phone}\nEmail: ${body.email}\n\nYou can view the uploaded PDF in Google Drive here:\n${pdfLink}\n\nA copy of the PDF is also attached to this email.`,
          attachments: body.pdfBase64 ? [
            {
              filename: `TaxReturn_${(body.name || "Unknown").replace(/[^a-zA-Z0-9]/g, "_")}.pdf`,
              content: body.pdfBase64.split(',')[1] || body.pdfBase64,
              encoding: 'base64'
            }
          ] : [],
        };

        // Send asynchronously (don't await) to make UI response instant
        transporter.sendMail(mailOptions)
          .then(() => console.log("Email sent successfully!"))
          .catch((emailErr) => console.error("Failed to send email:", emailErr));

      } catch (emailErr) {
        console.error("Failed to initialize email transporter:", emailErr);
      }
    }

    return NextResponse.json({ result: "success" });
  } catch (err) {
    console.error("Tax form submission error:", err);
    return NextResponse.json(
      { result: "error", error: "Failed to save tax return data." },
      { status: 500 }
    );
  }
}
