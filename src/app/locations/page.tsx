import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { locations } from "@/data/locations";
import { site, whatsappLinks } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Hotels in Abuja by Area",
  description:
    "Discover The DEN by Da Golden Chimney's boutique hotel guides across Abuja — from Wuse and Wuse 2 to Maitama, Asokoro, Garki, the CBD, Jabi, Utako and Gwarinpa. Luxury rooms, dining and event venues in every corner of the capital.",
  alternates: { canonical: `${site.domain}/locations` },
  keywords: [
    "hotels in Abuja",
    "hotel in Wuse Abuja",
    "boutique hotel Abuja",
    "luxury hotel Abuja",
    "accommodation Abuja",
    "hotel booking Abuja",
  ],
};

export default function LocationsPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />

      <PageHero
        title="Hotels in Every Corner of Abuja"
        subtitle="A boutique hotel guide to Abuja's finest districts. The DEN by Da Golden Chimney sits at 20 Agadez Crescent, Wuse 2 — a short drive from every corner of the capital."
        image="/images/raw/bg-hero.jpg"
        crumbs={[{ name: "Locations", path: "/locations" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Location Guides"
            title="Find Your Perfect Abuja District"
            description="Choose the district that suits your plans — every guide covers what to see, where to stay and how to make the most of your time near The DEN."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, i) => (
              <Card key={location.slug} className="flex flex-col">
                <Link
                  href={`/locations/${location.slug}`}
                  className="group relative block h-56 overflow-hidden"
                >
                  <img
                    src={i % 2 === 0 ? "/images/raw/bedroom_1.jpeg" : "/images/raw/room_2.jpeg"}
                    alt={`${location.name} hotel — ${site.brand}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                  <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-sm font-semibold text-cream">
                    <MapPin className="h-4 w-4 text-gold" />
                    {location.distance}
                  </span>
                </Link>
                <CardContent className="flex flex-1 flex-col pt-5">
                  <CardTitle>{location.name}</CardTitle>
                  <CardDescription className="mt-2 flex-1 line-clamp-3">
                    {location.intro}
                  </CardDescription>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-all hover:gap-2"
                  >
                    View Guide <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-dark py-16 md:py-24">
        <div className="lux-container">
          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Book Your Stay
            </p>
            <h2 className="font-display text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
              Book a Stay at The DEN, Abuja
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70">
              Whatever part of Abuja brings you here, The DEN is your luxurious home base — with
              premium rooms, a celebrated restaurant, event halls and complimentary breakfast.
              Book direct for the best rates.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link href="/booking" className="btn-gold">
                Book Your Stay
              </Link>
              <a
                href={whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                WhatsApp Us
              </a>
              <Link href="/rooms" className="btn-outline-gold">
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}