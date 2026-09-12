import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
  }

  const res = await backendFetch("/subscribers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok && res.status !== 409) {
    const error = await res.json().catch(() => null);
    return NextResponse.json(
      { ok: false, error: error?.error ?? "Failed to subscribe" },
      { status: res.status }
    );
  }

  return NextResponse.json({ ok: true });
}
