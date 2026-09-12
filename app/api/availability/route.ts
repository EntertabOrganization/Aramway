import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export async function GET() {
  const res = await backendFetch("/availability");
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    return NextResponse.json({ error: body?.error ?? "Failed to load availability" }, { status: res.status });
  }
  return NextResponse.json(body?.data ?? []);
}
