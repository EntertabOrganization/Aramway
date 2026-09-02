import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = form.get("email");
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");

  if (!email || !firstName || !lastName) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const resume = form.get("resume") as File | null;
  const coverLetter = form.get("coverLetter") as File | null;

  // Wire this up to an ATS or email provider once available.
  console.log("New career application:", {
    firstName,
    lastName,
    email,
    phone: form.get("phone"),
    address: form.get("address"),
    city: form.get("city"),
    country: form.get("country"),
    expectedSalary: form.get("expectedSalary"),
    position: form.get("position"),
    startDate: form.get("startDate"),
    resume: resume ? { name: resume.name, size: resume.size } : null,
    coverLetter: coverLetter ? { name: coverLetter.name, size: coverLetter.size } : null,
  });

  return NextResponse.json({ ok: true });
}
