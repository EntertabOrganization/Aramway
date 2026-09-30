export type DayAvailability = {
  dayOfWeek: number;
  timeSlots: string[];
};

export function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/** The admin's recurring weekly schedule, set from AramwayDashboard. */
export async function getWeeklyAvailability(): Promise<DayAvailability[]> {
  try {
    const res = await fetch("/api/availability");
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

/** Time slots already booked by someone else on this specific date. */
export async function getBookedTimes(date: Date): Promise<string[]> {
  try {
    const res = await fetch(`/api/consultation/booked?date=${toDateKey(date)}`);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

/** Consultation slots are published and booked in US Eastern Time. */
export const CONSULTATION_TIME_ZONE = "America/New_York";

const easternFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: CONSULTATION_TIME_ZONE,
  hourCycle: "h23",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

/** The current Eastern-Time wall clock, independent of the visitor's own time zone. */
export function easternNow(now = new Date()) {
  const parts = Object.fromEntries(easternFormatter.formatToParts(now).map((p) => [p.type, p.value]));
  return {
    dateKey: `${parts.year}-${parts.month}-${parts.day}`,
    /** Local-midnight Date for the Eastern calendar day, comparable with the calendar's cells. */
    today: new Date(Number(parts.year), Number(parts.month) - 1, Number(parts.day)),
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

/** "09:00 AM" / "2:30 PM" / "14:30" -> minutes after midnight, or null if unparseable. */
export function slotMinutes(label: string): number | null {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s?(AM|PM)?$/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  if (match[3]) {
    hours %= 12;
    if (match[3].toUpperCase() === "PM") hours += 12;
  }
  return hours * 60 + parseInt(match[2], 10);
}

/** Whether an Eastern-Time slot on `date` has already started. */
export function isSlotPast(date: Date, slot: string, now = easternNow()): boolean {
  const key = toDateKey(date);
  if (key !== now.dateKey) return key < now.dateKey;
  const minutes = slotMinutes(slot);
  return minutes !== null && minutes <= now.minutes;
}
