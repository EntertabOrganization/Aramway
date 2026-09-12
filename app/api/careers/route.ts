import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = form.get("email");
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");

  if (!email || !firstName || !lastName) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const res = await backendFetch("/careers", { method: "POST", body: form });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    return NextResponse.json(
      { ok: false, error: error?.error ?? "Failed to submit application" },
      { status: res.status }
    );
  }

  return NextResponse.json({ ok: true });
}
