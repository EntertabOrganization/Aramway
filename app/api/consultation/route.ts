import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, date, time, company_website, ...rest } = body;

  // Honeypot field — bots fill hidden fields, humans don't.
  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !date || !time) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const res = await backendFetch("/consultations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, date, time, ...rest }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    return NextResponse.json(
      { ok: false, error: error?.error ?? "Failed to submit booking" },
      { status: res.status }
    );
  }

  return NextResponse.json({ ok: true });
}
