import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  MessageCircle,
  CalendarCheck,
  Check,
  CalendarHeart,
  Presentation,
  PartyPopper,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { venues } from "@/data/venues";
import { site, whatsappLinks, formatNaira } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events & Conferencing | Conference Hall, Meeting Room & Pool Hall in Abuja",
  description:
    "Host meetings, conferences and celebrations at The DEN in Wuse 2, Abuja. Meeting Room (50 pax), Conference Hall and Swimming Pool Hall from ₦800,000. Request a quote today.",
  keywords: [
    "conference hall Abuja",
    "event venue Abuja",
    "meeting room Abuja",
    "wedding venue Abuja",
    "pool hall Abuja",
    "event center Abuja",
  ],
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "EventVenue" as const,
            name: site.brand,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.area,
              addressRegion: site.address.state,
              postalCode: site.address.postcode,
              addressCountry: "NG",
            },
            telephone: site.phoneIntl,
            priceRange: "₦800,000 – ₦1,000,000",
          } as object,
        ]}
      />
      <PageHero
        title="Events & Conferences"
        subtitle="Thoughtfully equipped venues for board meetings, seminars, weddings and celebrations — with a dedicated events team that handles every detail."
        image="/images/raw/conference_room_1.jpeg"
        crumbs={[{ name: "Events", path: "/events" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Our Venues"
          title="Spaces Designed to Impress"
          description="Three versatile venues, each with professional AV, catering support and event coordination. Enquire today — weekends book out fast."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {venues.map((venue) => (
            <article key={venue.slug} className="lux-card group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={`${venue.name} at ${site.brand}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs text-cream/80">
                      <Users className="h-3.5 w-3.5 text-gold" /> {venue.capacity}
                    </p>
                    <h3 className="text-xl font-bold text-cream">{venue.name}</h3>
                  </div>
                  <span className="rounded bg-night/70 px-2.5 py-1 text-sm font-bold text-gold backdrop-blur">
                    {formatNaira(venue.rate)}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 text-sm leading-relaxed text-charcoal-light">{venue.description}</p>
                <ul className="mb-6 grid gap-2 text-sm text-charcoal">
                  {venue.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-2.5">
                  <Link href="/booking" className="btn-gold w-full">
                    <CalendarCheck className="h-4 w-4" /> Book This Venue
                  </Link>
                  <a
                    href={sendVenueMessage(venue.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gold-border bg-night py-14 text-cream md:py-20">
        <div className="lux-container">
          <SectionHeading
            dark
            eyebrow="Plan Your Event"
            title="Let's Plan It Together"
            description="Tell us about your event — guest count, date and preferences — and our events team will respond within hours with availability, menus and a custom quote."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-cream/10 bg-white/5 p-6 text-center">
              <Presentation className="mx-auto mb-3 h-8 w-8 text-gold" />
              <h3 className="mb-2 text-lg font-bold">Corporate</h3>
              <p className="text-sm text-cream/70">
                Board meetings, trainings, town halls and product launches with full AV and catering.
              </p>
            </div>
            <div className="rounded-2xl border border-cream/10 bg-white/5 p-6 text-center">
              <PartyPopper className="mx-auto mb-3 h-8 w-8 text-gold" />
              <h3 className="mb-2 text-lg font-bold">Celebrations</h3>
              <p className="text-sm text-cream/70">
                Weddings, birthdays, anniversaries and receptions in the glamorous Pool Hall.
              </p>
            </div>
            <div className="rounded-2xl border border-cream/10 bg-white/5 p-6 text-center">
              <CalendarHeart className="mx-auto mb-3 h-8 w-8 text-gold" />
              <h3 className="mb-2 text-lg font-bold">Private Occasions</h3>
              <p className="text-sm text-cream/70">
                Intimate dinners, baby showers and milestone moments handled with care.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={whatsappLinks.events} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Request a Quote on WhatsApp
            </a>
            <a href={`tel:${site.phoneIntl}`} className="btn-outline-gold !border-gold !text-cream">
              Call {site.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-cream/10">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function sendVenueMessage(name: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello The DEN by Da Golden Chimney. I would like to inquire about booking the ${name} for an event.`
  )}`;
}