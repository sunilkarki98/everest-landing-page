import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import stream from "stream";

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

    // Map data to match the 22 columns exactly
    const dateStr = new Date().toISOString();
    const rowData = [
      dateStr,
      body.name || "",
      body.phone || "",
      body.email || "",
      body.tfn || "",
      body.dob || "",
      body.occupation || "",
      body.residency || "",
      body.marital_status || "",
      body.taxFileNeeded || "",
      body.income_type || "",
      body.medicareExempt ? "Yes" : "No",
      body.deductions || "",
      body.bank_name || "",
      body.bsb || "",
      body.account_number || "",
      body.refund_acct_name || "",
      body.contactMethod || "",
      body.abn || "",
      body.ackCheck ? "Yes" : "No",
      body.sig_date || "",
      JSON.stringify(body) // RawData JSON dump
    ];

    // Append to Google Sheets directly
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A1", // Google automatically finds the next empty row
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    // Upload PDF to Google Drive directly
    if (body.pdfBase64) {
      const base64Data = body.pdfBase64.split(',')[1] || body.pdfBase64;
      const buffer = Buffer.from(base64Data, 'base64');
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);

      const sanitizedName = (body.name || "Unknown").replace(/[^a-zA-Z0-9]/g, "_");
      const fileName = `TaxReturn_${sanitizedName}_${Date.now()}.pdf`;

      await drive.files.create({
        requestBody: {
          name: fileName,
          parents: [folderId],
          mimeType: "application/pdf",
        },
        media: {
          mimeType: "application/pdf",
          body: bufferStream,
        },
      });
    }

    // TODO: Nodemailer setup if email sending is required from server
    // You will need an SMTP server (like SendGrid, Resend, or Google App Passwords)
    // to send emails from a Next.js server.

    return NextResponse.json({ result: "success" });
  } catch (err) {
    console.error("Tax form submission error:", err);
    return NextResponse.json(
      { result: "error", error: "Failed to save tax return data." },
      { status: 500 }
    );
  }
}
