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

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) | 0;
  return Math.abs(hash);
}

export function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

// Sample availability only — swap for real availability once the internal
// calendar system is connected.
export function isSampleDateAvailable(date: Date) {
  const day = date.getDay();
  if (day === 0 || day === 6) return false;
  return hashString(toDateKey(date)) % 7 !== 0;
}

export function isSampleSlotBooked(date: Date, slot: string) {
  return hashString(`${toDateKey(date)}-${slot}`) % 3 === 0;
}
