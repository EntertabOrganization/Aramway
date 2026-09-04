import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, date, time, company_website } = body;

  // Honeypot field — bots fill hidden fields, humans don't.
  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !date || !time) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Wire this up to Aramway's internal calendar system (booking confirmation,
  // meeting link, and team notification) once it's ready. For now, log the
  // request server-side so nothing is lost.
  console.log("New consultation booking request:", body);

  return NextResponse.json({ ok: true });
}
