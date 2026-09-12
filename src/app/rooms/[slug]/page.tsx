import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Users,
  BedDouble,
  Ruler,
  Check,
  CalendarCheck,
  MessageCircle,
  ArrowRight,
  Wifi,
  Coffee,
  Star,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { rooms, getRoom } from "@/data/rooms";
import { site, whatsappLinks, formatNaira } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { BookingWidget } from "@/components/layout/BookingWidget";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return {
    title: `${room.name} in Wuse 2, Abuja`,
    description: room.description,
    keywords: [`${room.name} Abuja`, "hotel rooms in Wuse 2 Abuja", "luxury hotel room Abuja"],
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${site.brand}`,
      description: room.description,
      images: [room.image],
    },
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const related = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);
  const isWeekend = true;

  return (
    <>
      <SchemaJsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "HotelRoom",
            name: room.name,
            description: room.description,
            occupancy: { "@type": "QuantitativeValue", maxValue: room.capacity },
            bed: { "@type": "BedDetails", typeOfBed: "Bed" },
            image: room.images.map((img) => `https://dachimney.netlify.app${img}`),
            offers: {
              "@type": "Offer",
              priceCurrency: "NGN",
              price: room.weekdayRate,
              name: "Weekday Rate",
              availability: "https://schema.org/InStock",
            },
            hotel: { "@id": "https://dachimney.netlify.app/#hotel" },
          } as object,
        ]}
      />
      <PageHero
        title={room.name}
        subtitle={`${room.tagline} · ${formatNaira(room.weekdayRate)} weekday / ${formatNaira(room.weekendRate)} weekend · breakfast included`}
        image={room.image}
        crumbs={[
          { name: "Rooms & Suites", path: "/rooms" },
          { name: room.name, path: `/rooms/${room.slug}` },
        ]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {room.images.map((img, i) => (
                <img
                  key={img + i}
                  src={img}
                  alt={`${room.name} photo ${i + 1}`}
                  loading="lazy"
                  className={`w-full rounded-xl object-cover ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[3/2]" : "aspect-[4/3]"}`}
                />
              ))}
            </div>

            <SectionHeading
              align="left"
              eyebrow="About This Room"
              title={room.name}
              description={room.longDescription}
            />

            <div id="availability" className="mb-10">
              <h3 className="mb-4 text-2xl font-bold text-charcoal-dark">Check Availability</h3>
              <BookingWidget className="!rounded-xl" />
              <p className="mt-3 text-xs text-charcoal-light">
                Use the availability widget above or send us your dates on WhatsApp for instant confirmation.
              </p>
            </div>

            <SectionHeading align="left" eyebrow="Experience" title="Room Features & Amenities" />
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {room.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm text-charcoal">
                  <Check className="h-4 w-4 shrink-0 text-gold" /> {a}
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-gold/20 bg-cream p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                <Star className="h-4 w-4 fill-gold text-gold" /> Room Pricing
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                  <span className="text-sm text-charcoal-light">Weekday Rate</span>
                  <span className="text-lg font-bold text-charcoal-dark">{formatNaira(room.weekdayRate)}</span>
                </div>
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                  <span className="text-sm text-charcoal-light">Weekend Rate</span>
                  <span className="text-lg font-bold text-gold-dark">{formatNaira(room.weekendRate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-charcoal-light">Inclusions</span>
                  <span className="text-xs font-semibold text-charcoal">Breakfast + WiFi</span>
                </div>
              </div>
              <Link href={`/booking?room=${room.slug}`} className="btn-gold mt-5 w-full">
                <CalendarCheck className="h-4 w-4" /> Book This Room
              </Link>
              <a
                href={whatsappLinks.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold mt-3 w-full"
              >
                <MessageCircle className="h-4 w-4" /> Book via WhatsApp
              </a>
            </div>

            <div className="space-y-4 rounded-2xl border border-charcoal/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Sleeps</p>
                  <p className="text-sm font-semibold">{room.capacity} Guests</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BedDouble className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Bedding</p>
                  <p className="text-sm font-semibold">{room.bed}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ruler className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Size</p>
                  <p className="text-sm font-semibold">{room.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Internet</p>
                  <p className="text-sm font-semibold">Free High-Speed WiFi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Coffee className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Breakfast</p>
                  <p className="text-sm font-semibold">Complimentary Daily</p>
                </div>
              </div>
              <p className="border-t border-charcoal/10 pt-4 text-xs text-charcoal-light">
                {site.checkIn} check-in · {site.checkOut} check-out · secures on WhatsApp.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Explore" title="Rooms You Might Also Love" />
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} className="lux-card group block">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={r.image}
                    alt={`${r.name} at ${site.brand}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-1 text-lg font-bold text-charcoal-dark">{r.name}</p>
                  <p className="mb-3 text-sm text-charcoal-light">
                    From {formatNaira(r.weekendRate)}/night
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}