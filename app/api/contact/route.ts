import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, company_website } = body;

  // Honeypot field — bots fill hidden fields, humans don't.
  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Wire this up to an email provider (e.g. Resend) via RESEND_API_KEY once available.
  // For now, log the submission server-side so nothing is lost.
  console.log("New contact form submission:", body);

  return NextResponse.json({ ok: true });
}
