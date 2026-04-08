import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

// Basic rate limiting: track submissions per IP
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

// Input validation
function validateFormData(data: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}): string | null {
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    return "Name must be between 2 and 100 characters.";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Please provide a valid email address.";
  }
  if (data.email.length > 254) {
    return "Email address is too long.";
  }
  if (!data.phone || !/^[+\d\s()-]{7,20}$/.test(data.phone)) {
    return "Please provide a valid phone number.";
  }
  if (!data.message || data.message.trim().length < 10 || data.message.length > 2000) {
    return "Message must be between 10 and 2000 characters.";
  }
  return null;
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
    const validationError = validateFormData(body);

    if (validationError) {
      return NextResponse.json(
        { result: "error", error: validationError },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: body.name.trim().slice(0, 100),
      email: body.email.trim().slice(0, 254),
      phone: body.phone.trim().slice(0, 20),
      message: body.message.trim().slice(0, 2000),
    };

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
    console.error("Contact form submission error:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { result: "error", error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
