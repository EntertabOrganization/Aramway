import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date");
  if (!date) {
    return NextResponse.json({ error: "date query parameter is required" }, { status: 400 });
  }

  const res = await backendFetch(`/consultations/booked?date=${encodeURIComponent(date)}`);
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    return NextResponse.json({ error: body?.error ?? "Failed to load booked times" }, { status: res.status });
  }
  return NextResponse.json(body?.data ?? []);
}
