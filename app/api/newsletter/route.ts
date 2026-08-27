import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
  }

  // Wire this up to a mailing list provider (Mailchimp, MailPoet, etc.) when credentials are available.
  console.log("New newsletter subscription:", email);

  return NextResponse.json({ ok: true });
}
