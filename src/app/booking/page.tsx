import type { Metadata } from "next";
import { Suspense } from "react";

import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { BookingForm } from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book Now | Hotel Booking in Wuse 2, Abuja",
  description:
    "Book your stay at The DEN by Da Golden Chimney — luxury boutique hotel rooms in Wuse 2, Abuja from ₦40,000/night. Instant confirmation via WhatsApp, complimentary breakfast included.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Book Your Stay at The DEN",
          url: "https://dachimney.netlify.app/booking",
        }}
      />
      <PageHero
        title="Book Your Stay"
        subtitle="Fill in your dates and we'll confirm availability in minutes via WhatsApp. Best rates when you book direct."
        image="/images/raw/bedroom_1.jpeg"
        crumbs={[{ name: "Book Now", path: "/booking" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Suspense>
              <BookingForm />
            </Suspense>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl bg-charcoal-dark p-6 text-cream">
              <h2 className="mb-3 text-lg font-bold font-display">Why Book Direct?</h2>
              <ul className="space-y-2.5 text-sm text-cream/80">
                {[
                  "Best available rate guaranteed",
                  "Exclusive special offers",
                  "Instant WhatsApp confirmation",
                  "Free airport pickup arrangement",
                  "Flexible special requests",
                  "No third-party commission",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
              <h3 className="mb-3 font-bold text-charcoal-dark">Popular Choices</h3>
              <div className="space-y-3 text-sm">
                {[
                  ["Studio Room", "₦40,000 avg/night"],
                  ["Executive Deluxe", "₦60,000 avg/night"],
                  ["Suite", "₦120,000 avg/night"],
                  ["Penthouse", "₦120,000 avg/night"],
                ].map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between border-b border-charcoal/5 pb-2">
                    <span className="font-medium text-charcoal">{name}</span>
                    <span className="font-semibold text-gold-dark">{price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-charcoal-light">Weekend rates shown · breakfast included</p>
            </div>
            <div className="rounded-2xl border border-gold/25 bg-cream p-6 text-center">
              <p className="mb-2 text-sm font-semibold text-charcoal-dark">Prefer to talk?</p>
              <a href="tel:+2348050779933" className="font-display text-xl font-bold gold-text">
                +234 805 077 9933
              </a>
              <p className="mt-1 text-xs text-charcoal-light">Reservations · 24/7</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}