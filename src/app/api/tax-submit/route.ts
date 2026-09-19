import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

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

  // Required personal fields
  if (!str("name") || str("name").length < 2 || str("name").length > 200) {
    return "Full name is required (2-200 characters).";
  }
  if (!str("tfn") || !/^\d{3}\s?\d{3}\s?\d{3}$/.test(str("tfn"))) {
    return "A valid 9-digit Tax File Number is required.";
  }
  if (!str("occupation") || str("occupation").length < 2) {
    return "Occupation is required.";
  }
  if (!str("dob")) {
    return "Date of birth is required.";
  }
  if (!str("marital_status")) {
    return "Marital status is required.";
  }

  // Required contact fields
  if (!str("address") || str("address").length < 5) {
    return "A valid address is required.";
  }
  if (!str("phone") || !/^[+\d\s()-]{7,20}$/.test(str("phone"))) {
    return "A valid phone number is required.";
  }
  if (!str("email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str("email"))) {
    return "A valid email address is required.";
  }

  // Required bank fields
  if (!str("bank_name") || str("bank_name").length < 2) {
    return "Bank name is required.";
  }
  if (!str("refund_acct_name") || str("refund_acct_name").length < 2) {
    return "Refund account name is required.";
  }
  if (!str("bsb") || !/^\d{3}-?\d{3}$/.test(str("bsb"))) {
    return "A valid 6-digit BSB is required.";
  }
  if (!str("account_number") || !/^\d{4,10}$/.test(str("account_number"))) {
    return "A valid account number is required (4-10 digits).";
  }

  return null;
}

// Sanitize all string values (trim + length cap)
function sanitizePayload(data: Record<string, unknown>): Record<string, string> {
  const MAX_FIELD_LENGTH = 500;
  const sanitized: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    if (key === "pdfBase64") continue; // Strip PDF from payload — it stays client-side only
    if (typeof value === "string") {
      sanitized[key] = value.trim().slice(0, MAX_FIELD_LENGTH);
    }
  }

  return sanitized;
}

export async function POST(request: NextRequest) {
  try {
    // Body size guard: reject payloads larger than 100KB
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 100_000) {
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

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL environment variable is not set");
      return NextResponse.json(
        { result: "error", error: "Server configuration error." },
        { status: 500 }
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

    // Sanitize and strip PDF
    const sanitized = sanitizePayload(body);
    sanitized.formType = "TaxReturnForm";

    // Forward to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(sanitized),
    });

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Tax form submission error:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { result: "error", error: "Failed to send data. Please try again." },
      { status: 500 }
    );
  }
}
