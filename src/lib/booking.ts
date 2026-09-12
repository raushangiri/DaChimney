export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomSlug: string;
  promoCode?: string;
  specialRequests?: string;
  nights?: number;
  total?: number;
  reference?: string;
}

const STORAGE_KEY = "den_bookings";

export function generateReference() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `DEN-${code}`;
}

export function nightsBetween(checkIn: string, checkOut: string) {
  const a = new Date(checkIn);
  const b = new Date(checkOut);
  const ms = b.getTime() - a.getTime();
  return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)));
}

export function saveBooking(booking: BookingRequest) {
  const existing = listBookings();
  existing.unshift(booking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 100)));
}

export function listBookings(): BookingRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BookingRequest[]) : [];
  } catch {
    return [];
  }
}

export function getBooking(reference: string) {
  return listBookings().find((b) => b.reference === reference);
}

export function daysUntil(date: string) {
  const a = new Date();
  const b = new Date(date);
  return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}