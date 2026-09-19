import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

// Basic rate limiting
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

export async function POST(request: NextRequest) {
  try {
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

    // Forward the data to Google Apps Script. 
    // We add a formType identifier so the script can branch logic if needed.
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...body,
        formType: "TaxReturnForm"
      }),
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
