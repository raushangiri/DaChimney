"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Calendar, Users, Home, ArrowRight, Loader2 } from "lucide-react";

import { site, formatNaira } from "@/lib/site";
import { getRoom } from "@/data/rooms";
import { getBooking, type BookingRequest } from "@/lib/booking";

export default function ConfirmationPage() {
  const [booking, setBooking] = useState<BookingRequest | null>(null);
  const [ref, setRef] = useState<string | null>(null);
  const [found, setFound] = useState<boolean | null>(null);

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("ref") ?? "";
    setRef(r);
    let b = r ? getBooking(r) : null;
    if (!b) {
      try {
        const last = sessionStorage.getItem("den_last_booking");
        if (last) b = JSON.parse(last) as BookingRequest;
      } catch { /* ignore */ }
    }
    setBooking(b ?? null);
    setFound(!!b);
  }, []);

  if (found === false) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-cream px-4">
        <div className="max-w-md rounded-2xl border border-charcoal/10 bg-white p-10 text-center shadow-xl">
          <h1 className="mb-3 font-display text-2xl font-bold text-charcoal-dark">Booking not found</h1>
          <p className="mb-6 text-sm text-charcoal-light">
            We couldn&apos;t find reference {ref}. Your booking may be stored on this device only — or you
            may need to re-submit. Message us on WhatsApp and we&apos;ll check for you.
          </p>
          <div className="flex flex-col gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link href="/booking" className="btn-outline-gold">Make a New Booking</Link>
          </div>
        </div>
      </section>
    );
  }

  const room = booking ? getRoom(booking.roomSlug) : undefined;

  return (
    <section className="min-h-screen bg-night py-20 md:py-28">
      <div className="lux-container">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold/25 bg-white p-8 text-center shadow-2xl md:p-12">
          {!booking ? (
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-gold" />
          ) : (
            <>
              <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                Booking Request Received
              </p>
              <h1 className="mb-2 font-display text-3xl font-bold text-charcoal-dark">
                Thank you, {booking.name.split(" ")[0] || "Guest"}!
              </h1>
              <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-charcoal-light">
                Your request has been saved and our reservations team has been notified. Send the
                confirmation on WhatsApp for the fastest reply — we&apos;ll verify availability within minutes.
              </p>

              <div className="mx-auto mb-6 inline-block rounded-full bg-night px-6 py-3">
                <span className="font-display text-2xl font-bold tracking-wider text-gold">
                  {booking.reference}
                </span>
              </div>

              <div className="mb-6 grid gap-3 rounded-xl bg-cream p-5 text-left text-sm">
                <DetailRow icon={<Home className="h-4 w-4 text-gold" />} label="Room" value={room?.name ?? booking.roomSlug} />
                <DetailRow icon={<Calendar className="h-4 w-4 text-gold" />} label="Check-in" value={`${booking.checkIn} (${site.checkIn})`} />
                <DetailRow icon={<Calendar className="h-4 w-4 text-gold" />} label="Check-out" value={`${booking.checkOut} (${site.checkOut})`} />
                <DetailRow icon={<Users className="h-4 w-4 text-gold" />} label="Guests" value={String(booking.guests)} />
                <DetailRow icon={<Calendar className="h-4 w-4 text-gold" />} label="Nights" value={booking.nights ? String(booking.nights) : "—"} />
                {typeof booking.total === "number" && (
                  <DetailRow icon={<Calendar className="h-4 w-4 text-gold" />} label="Est. Total" value={formatNaira(booking.total)} />
                )}
              </div>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Hello The DEN. I just submitted booking ${booking.reference} for ${room?.name ?? ""} (${booking.checkIn} → ${booking.checkOut}). Please confirm availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full"
              >
                <MessageCircle className="h-5 w-5" /> Confirm on WhatsApp Now
              </a>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Link href="/" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-charcoal-light hover:text-gold-dark">
                  <ArrowRight className="h-4 w-4" /> Back to Home
                </Link>
                <Link href="/rooms" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-charcoal-light hover:text-gold-dark">
                  Explore More Rooms
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-charcoal-light">{icon} {label}</span>
      <span className="font-semibold text-charcoal-dark">{value}</span>
    </div>
  );
}