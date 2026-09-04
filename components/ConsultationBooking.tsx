"use client";

import { useEffect, useMemo, useState } from "react";
import { services } from "@/lib/services";
import { countries, timeSlots, toDateKey, isSampleDateAvailable, isSampleSlotBooked } from "@/lib/consultation";

type Status = "idle" | "submitting" | "success" | "error";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export default function ConsultationBooking() {
  const [ready, setReady] = useState(false);
  const [today, setToday] = useState<Date | null>(null);
  const [viewMonth, setViewMonth] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedKeys, setBookedKeys] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const now = startOfDay(new Date());
    setToday(now);
    setViewMonth(new Date(now.getFullYear(), now.getMonth(), 1));
    setReady(true);
  }, []);

  const canGoPrevMonth = useMemo(() => {
    if (!viewMonth || !today) return false;
    return (
      viewMonth.getFullYear() > today.getFullYear() ||
      (viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() > today.getMonth())
    );
  }, [viewMonth, today]);

  function changeMonth(delta: number) {
    setViewMonth((prev) => (prev ? new Date(prev.getFullYear(), prev.getMonth() + delta, 1) : prev));
  }

  function selectDate(date: Date) {
    setSelectedDate(date);
    setSelectedSlot(null);
    setError("");
  }

  const calendarCells = useMemo(() => {
    if (!viewMonth) return [];
    const firstWeekday = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1).getDay();
    const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d));
    return cells;
  }, [viewMonth]);

  const slotsForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];
    return timeSlots.map((slot) => {
      const key = `${toDateKey(selectedDate)}__${slot}`;
      const booked = isSampleSlotBooked(selectedDate, slot) || bookedKeys.has(key);
      return { slot, booked };
    });
  }, [selectedDate, bookedKeys]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      setError("Please select a date and time for your consultation.");
      return;
    }
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const dateKey = toDateKey(selectedDate);
    const payload = { ...data, date: dateKey, time: selectedSlot };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit booking");
      setBookedKeys((prev) => new Set(prev).add(`${dateKey}__${selectedSlot}`));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or reach out to us directly.");
    }
  }

  if (status === "success" && selectedDate && selectedSlot) {
    return (
      <div className="rounded-2xl border border-border bg-cream-soft p-8 text-center sm:p-10">
        <p className="text-lg font-semibold text-ink">Your consultation is booked!</p>
        <p className="mt-2 text-sm font-semibold text-primary">
          {MONTH_LABELS[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()} at{" "}
          {selectedSlot}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          A confirmation email is on its way, and your meeting link will be added automatically once the booking is
          confirmed. Our team has also been notified of your request.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSelectedDate(null);
            setSelectedSlot(null);
          }}
          className="btn-outline mt-6"
        >
          Book Another Consultation
        </button>
      </div>
    );
  }

  if (!ready || !viewMonth || !today) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-5 w-40 rounded bg-cream-deep" />
        <div className="h-72 rounded-xl bg-cream-deep" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-muted">Step 1 · Select a Date</p>
        <div className="mt-3 rounded-xl border border-border p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              disabled={!canGoPrevMonth}
              aria-label="Previous month"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary disabled:opacity-30"
            >
              ‹
            </button>
            <p className="font-heading text-base font-bold text-ink">
              {MONTH_LABELS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
            </p>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label="Next month"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary"
            >
              ›
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted">
            {WEEKDAY_LABELS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {calendarCells.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} />;
              const isPast = date < today;
              const available = !isPast && isSampleDateAvailable(date);
              const isSelected = selectedDate && toDateKey(date) === toDateKey(selectedDate);
              return (
                <button
                  key={toDateKey(date)}
                  type="button"
                  disabled={!available}
                  onClick={() => selectDate(date)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-primary text-white"
                      : available
                      ? "text-ink hover:bg-cream-soft"
                      : "text-muted/40 line-through"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted">
            Consultations are available Monday–Friday. Unavailable dates are shown crossed out.
          </p>
        </div>
      </div>

      {selectedDate && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Step 2 · Select a Time (ET)</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {slotsForSelectedDate.map(({ slot, booked }) => (
              <button
                key={slot}
                type="button"
                disabled={booked}
                onClick={() => setSelectedSlot(slot)}
                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  selectedSlot === slot
                    ? "border-primary bg-primary text-white"
                    : booked
                    ? "border-border text-muted/40 line-through"
                    : "border-border text-ink hover:border-primary"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedSlot && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Step 3 · Your Details</p>
          <div className="mt-3 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Full Name *</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Company Name</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Email Address *</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Phone Number *</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Country *</label>
                <select
                  required
                  name="country"
                  defaultValue=""
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Service of Interest</label>
                <select
                  name="service"
                  defaultValue=""
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Additional Notes</label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Anything you'd like us to know before the call..."
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
              {status === "submitting" ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
