"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarCheck, Lock, MessageCircle, Mail } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getRoom, roomTypeOptions } from "@/data/rooms";
import { site, formatNaira } from "@/lib/site";
import { generateReference, nightsBetween, saveBooking, type BookingRequest } from "@/lib/booking";

export function BookingForm() {
  const router = useRouter();
  const params = useSearchParams();

  const today = new Date().toISOString().split("T")[0];
  const initalRoom = params.get("room")?.toString() ?? "";
  const availableRoom = getRoom(initalRoom) ? initalRoom : "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: params.get("checkIn")?.toString() ?? today,
    checkOut: params.get("checkOut")?.toString() ?? "",
    guests: params.get("guests")?.toString() ?? "2",
    roomSlug: availableRoom,
    promoCode: params.get("promo")?.toString() ?? "",
    specialRequests: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const room = getRoom(form.roomSlug);

  const quote = useMemo(() => {
    if (!room || !form.checkIn || !form.checkOut) return null;
    const nights = nightsBetween(form.checkIn, form.checkOut);
    const day = new Date(form.checkIn).getDay();
    const isWeekend = day === 5 || day === 6 || day === 0;
    const rate = isWeekend ? room.weekendRate : room.weekdayRate;
    let total = rate * nights;
    const promo = form.promoCode.trim().toUpperCase();
    if (promo === "WEEKEND") total = Math.round(total * 0.9);
    return { nights, rate, total, isWeekend };
  }, [room, form.checkIn, form.checkOut, form.promoCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!room) {
      setError("Please select a room type.");
      return;
    }
    if (!form.checkIn || !form.checkOut) {
      setError("Please choose check-in and check-out dates.");
      return;
    }
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      setError("Check-out must be after check-in.");
      return;
    }

    setSubmitting(true);
    const reference = generateReference();

    const booking: BookingRequest = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: Number(form.guests),
      roomSlug: form.roomSlug,
      promoCode: form.promoCode,
      specialRequests: form.specialRequests,
      reference,
      nights: quote?.nights ?? 1,
      total: quote?.total ?? room.weekdayRate,
    };

    saveBooking(booking);
    try {
      sessionStorage.setItem("den_last_booking", JSON.stringify(booking));
    } catch {}

    const lines = [
      `New Booking Request — ${reference}`,
      `Hotel: ${site.brand}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Room: ${room.name}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      `Nights: ${quote?.nights}`,
      `Estimated total: ${quote ? formatNaira(quote.total) : ""}`,
      form.specialRequests ? `Notes: ${form.specialRequests}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines)}`, "_blank");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Room Booking Request ${reference}`
    )}&body=${encodeURIComponent(lines)}`;

    router.push(`/booking/confirmation/${reference}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-xl md:p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-charcoal-dark font-display">Book Your Stay</h2>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <Lock className="h-3.5 w-3.5" /> Secure
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label className="mb-1.5 block">Full Name</Label>
          <Input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your full name" />
        </div>
        <div>
          <Label className="mb-1.5 block">Phone (WhatsApp)</Label>
          <Input required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+234..." />
        </div>
        <div className="md:col-span-2">
          <Label className="mb-1.5 block">Email</Label>
          <Input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@email.com" />
        </div>

        <div>
          <Label className="mb-1.5 block">Check-in</Label>
          <Input required type="date" min={today} value={form.checkIn} onChange={(e) => setForm((f) => ({ ...f, checkIn: e.target.value }))} />
        </div>
        <div>
          <Label className="mb-1.5 block">Check-out</Label>
          <Input required type="date" min={form.checkIn || today} value={form.checkOut} onChange={(e) => setForm((f) => ({ ...f, checkOut: e.target.value }))} />
        </div>
        <div>
          <Label className="mb-1.5 block">Guests</Label>
          <Select value={form.guests} onValueChange={(v) => setForm((f) => ({ ...f, guests: v }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-1.5 block">Room Type</Label>
          <Select value={form.roomSlug} onValueChange={(v) => setForm((f) => ({ ...f, roomSlug: v }))}>
            <SelectTrigger><SelectValue placeholder="Select a room" /></SelectTrigger>
            <SelectContent>
              {roomTypeOptions.map((r) => (
                <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2">
          <Label className="mb-1.5 block">Promo Code</Label>
          <Input value={form.promoCode} onChange={(e) => setForm((f) => ({ ...f, promoCode: e.target.value }))} placeholder="e.g. WEEKEND" />
          {form.promoCode.trim().toUpperCase() === "WEEKEND" && (
            <p className="mt-1.5 text-xs font-medium text-emerald-600">WEEKEND code applied — 10% off your stay.</p>
          )}
        </div>
        <div className="md:col-span-2">
          <Label className="mb-1.5 block">Special Requests</Label>
          <Textarea rows={3} value={form.specialRequests} onChange={(e) => setForm((f) => ({ ...f, specialRequests: e.target.value }))} placeholder="Early check-in, airport pickup, celebration or accessibility needs..." />
        </div>
      </div>

      {quote && (
        <div className="mt-6 rounded-xl border border-gold/25 bg-cream p-5 text-sm">
          <div className="flex items-center justify-between py-1">
            <span className="text-charcoal-light">Room</span>
            <span className="font-semibold text-charcoal-dark">{room?.name}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-charcoal-light">Rate ({quote.isWeekend ? "weekend" : "weekday"})</span>
            <span className="font-semibold text-charcoal-dark">{formatNaira(quote.rate)}/night</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-charcoal-light">Nights</span>
            <span className="font-semibold text-charcoal-dark">{quote.nights}</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-gold/30 pt-3">
            <span className="font-bold text-charcoal-dark">Estimated Total</span>
            <span className="font-display text-xl font-bold gold-text">{formatNaira(quote.total)}</span>
          </div>
        </div>
      )}

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">{error}</p>
      )}

      <Button type="submit" disabled={submitting} className="mt-6 w-full" size="lg">
        <CalendarCheck className="h-5 w-5" /> {submitting ? "Confirming..." : "Confirm Booking"}
      </Button>

      <p className="mt-4 flex flex-col gap-1.5 text-xs text-charcoal-light">
        <span className="flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5 text-gold" /> Confirmation is sent via WhatsApp and email — no payment is taken online.</span>
        <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-gold" /> Our team confirms availability within minutes during business hours.</span>
      </p>
    </form>
  );
}