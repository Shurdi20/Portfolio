import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

// Best-effort, single-instance in-memory rate limit. This resets on deploy/restart
// and does not share state across serverless invocations — fine for a traditional
// Node server, but treat it as defense-in-depth rather than a hard guarantee. For
// serverless hosting, put a real rate limiter (e.g. Upstash Ratelimit) in front of this.
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Te veel aanvragen. Probeer het later opnieuw." },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { name, email, company, message, website } = body;

  // Honeypot: bots fill hidden fields. Pretend success without sending anything.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.trim().length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Vul een geldige naam in." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Vul een geldig e-mailadres in." }, { status: 400 });
  }
  if (!message || message.trim().length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Voeg een kort bericht toe (minimaal 10 tekens)." },
      { status: 400 }
    );
  }
  if (company && company.length > 200) {
    return NextResponse.json({ error: "Bedrijfsnaam is te lang." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not configured — cannot send email."
    );
    return NextResponse.json(
      { error: "Het contactformulier is nog niet volledig ingesteld. Mail ons rechtstreeks." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "SVO Digital <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `Nieuwe aanvraag voor een strategiegesprek van ${name}`,
    text: [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      company ? `Bedrijf: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("[contact] Resend send failed:", error);
    return NextResponse.json(
      { error: "Er ging iets mis bij het versturen van je bericht. Mail ons rechtstreeks." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
