import type { Metadata } from "next";
import Link from "next/link";
import { Users, BedDouble, Ruler, ArrowRight, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { rooms } from "@/data/rooms";
import { site, whatsappLinks, formatNaira } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Rooms & Suites | Luxury Accommodation in Wuse 2, Abuja",
  description:
    "Explore luxury rooms & suites at The DEN by Da Golden Chimney — Studio, Executive Deluxe, Suite and Penthouse. Rates from ₦40,000 with complimentary breakfast, free WiFi and 24/7 room service in Wuse 2, Abuja.",
  keywords: [
    "rooms in Abuja",
    "suites in Abuja",
    "hotel rooms Abuja",
    "luxury rooms Abuja",
    "penthouse Abuja",
    "hotel near Wuse 2 Abuja",
  ],
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Rooms & Suites", path: "/rooms" },
        ])}
      />
      <PageHero
        title="Rooms & Suites"
        subtitle="Four distinct room categories crafted for comfort, style and rest — in the heart of Wuse 2, Abuja. Breakfast always included."
        image="/images/raw/landing_page_2.jpeg"
        crumbs={[{ name: "Rooms & Suites", path: "/rooms" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="mb-10 rounded-xl border border-gold/20 bg-cream p-6 text-center">
          <p className="mb-2 text-sm font-semibold text-charcoal-dark">
            Transparent Rates · Complimentary Breakfast · Free WiFi · {site.checkIn} Check-in
          </p>
          <p className="text-xs text-charcoal-light">
            Weekend rates apply Friday – Sunday. Corporate and long-stay rates available on request.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {rooms.map((room, i) => (
            <article
              key={room.slug}
              id={room.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={room.image}
                  alt={`${room.name} at ${site.brand}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {room.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-night">
                    Most Requested
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-cream/80">Weekday</p>
                    <p className="text-xl font-bold text-cream">{formatNaira(room.weekdayRate)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-gold">Weekend</p>
                    <p className="text-xl font-bold text-gold">{formatNaira(room.weekendRate)}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-1 text-3xl font-bold text-charcoal-dark">{room.name}</h2>
                <p className="mb-3 text-sm font-medium text-gold-dark">{room.tagline}</p>
                <p className="mb-4 leading-relaxed text-charcoal-light">{room.description}</p>

                <div className="mb-5 flex flex-wrap gap-3 text-sm text-charcoal">
                  <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                    <Users className="h-4 w-4 text-gold" /> {room.capacity} Guests
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                    <BedDouble className="h-4 w-4 text-gold" /> {room.bed}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                    <Ruler className="h-4 w-4 text-gold" /> {room.size}
                  </span>
                </div>

                <ul className="mb-6 grid grid-cols-1 gap-2 text-sm text-charcoal-light sm:grid-cols-2">
                  {room.amenities.slice(0, 8).map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link href={`/booking?room=${room.slug}`} className="btn-gold">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappLinks.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Booking
                  </a>
                  <Link href={`/rooms/${room.slug}`} className="btn-outline-gold !border-charcoal/20 !text-charcoal">
                    View Details
                  </Link>
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
            eyebrow="Included with Every Stay"
            title="Luxury Details We Don't Compromise On"
            description="From 200-thread-count bedding to fibre-fast WiFi — the small things that make a big difference."
          />
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              "Complimentary Breakfast",
              "Free High-Speed WiFi",
              "24/7 Room Service",
              "Daily Housekeeping",
              "Air Conditioning",
              "Smart TVs",
              "Secure Parking",
              "Concierge Assistance",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-cream/10 p-5">
                <span className="font-semibold text-cream">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}