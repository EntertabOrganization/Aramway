export const countries = [
  "United States",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Other",
];

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
