import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { locations, getLocation, type LocationPage } from "@/data/locations";
import { site, whatsappLinks } from "@/lib/site";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { Accordion } from "@/components/ui/accordion";
import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const description =
    location.intro.length > 150 ? `${location.intro.slice(0, 150)}…` : location.intro;
  const canonical = `${site.domain}/locations/${location.slug}`;

  return {
    title: location.title,
    description,
    alternates: { canonical },
    keywords: [
      `hotel in ${location.name}`,
      `hotel near ${location.name}`,
      "hotels in Abuja",
      "boutique hotel Abuja",
      "luxury hotel Abuja",
      "conference hall Abuja",
    ],
    openGraph: {
      title: `${location.title} | ${site.brand}`,
      description,
      url: canonical,
      siteName: site.brand,
      images: ["/images/raw/bg-hero.jpg"],
    },
  };
}

function localBusinessForLocation(location: LocationPage) {
  return {
    ...localBusinessSchema(),
    name: `${site.name} — ${location.name}`,
    alternateName: site.brand,
    description: location.intro,
    areaServed: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: location.name,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsLink,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: "Free Wifi" },
      { "@type": "LocationFeatureSpecification", name: "Complimentary Breakfast", value: "Breakfast" },
      { "@type": "LocationFeatureSpecification", name: "24/7 Reception", value: "24-Hour Concierge" },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: "Parking" },
      { "@type": "LocationFeatureSpecification", name: "Restaurant & Bar", value: "Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "Conference Facilities", value: "Conference" },
      { "@type": "LocationFeatureSpecification", name: "Airport Transfer", value: "Transfer Service" },
    ],
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.name, path: `/locations/${location.slug}` },
          ]),
          localBusinessForLocation(location),
        ]}
      />

      <PageHero
        title={location.heading}
        subtitle={location.intro}
        image="/images/raw/bg-hero.jpg"
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.name, path: `/locations/${location.slug}` },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="lux-container max-w-4xl">
          <SectionHeading
            align="left"
            eyebrow="Your Guide"
            title={`Your Guide to Staying in ${location.name}, Abuja`}
          />
          <div className="space-y-10">
            {location.sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 font-display text-2xl font-bold text-charcoal-dark">
                  {section.title}
                </h3>
                <p className="text-base leading-relaxed text-charcoal-light md:text-lg">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-cream-dark/50 py-16 md:py-24">
        <div className="lux-container">
          <SectionHeading align="left" eyebrow="Highlights" title={`What To See Near ${location.name}`} />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-charcoal-dark">
                <MapPin className="h-5 w-5 text-gold" />
                Nearby Attractions
              </h3>
              <ul className="space-y-3">
                {location.attractions.map((attraction) => (
                  <li
                    key={attraction}
                    className="flex items-center gap-3 rounded-lg border border-charcoal/10 bg-white px-4 py-3.5"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-charcoal-light">{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-charcoal-dark">
                <Check className="h-5 w-5 text-gold" />
                Insider Tips
              </h3>
              <ul className="space-y-3">
                {location.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 rounded-lg border border-charcoal/10 bg-white px-4 py-3.5"
                  >
                    <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-charcoal-light">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              Book a Stay in {location.name}, Abuja
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70">
              Reserve your room at The DEN and enjoy complimentary breakfast, secure parking,
              high-speed WiFi and the warmth of genuine Nigerian hospitality — minutes from{" "}
              {location.name}.
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

      <section className="bg-cream-light py-16 md:py-24">
        <div className="lux-container max-w-4xl">
          <SectionHeading
            eyebrow="FAQs"
            title={`Frequently Asked Questions — ${location.name}`}
            description={`Answers to the questions guests most often ask about staying at The DEN near ${location.name}, Abuja.`}
          />
          <Accordion
            items={location.faqs.map((f) => ({
              value: f.question,
              question: f.question,
              answer: f.answer,
            }))}
            defaultOpen={location.faqs[0]?.question}
          />
          <SchemaJsonLd data={faqSchema(location.faqs)} />
        </div>
      </section>

      <section className="bg-night py-16 md:py-24">
        <div className="lux-container">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Keep Exploring
            </p>
            <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
              More Places We Serve Around Abuja
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-light" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="group flex items-center justify-between gap-3 rounded-lg border border-cream/10 bg-white/5 px-5 py-4 transition-colors hover:border-gold/50 hover:bg-white/10"
              >
                <span className="text-cream transition-colors group-hover:text-gold">
                  {other.name}
                </span>
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/rooms" className="btn-gold">
              Rooms & Suites
            </Link>
            <Link href="/restaurant" className="btn-outline-gold">
              Restaurant
            </Link>
            <Link href="/events" className="btn-outline-gold">
              Events & Venues
            </Link>
            <Link href="/airport-pickup" className="btn-outline-gold">
              Airport Pickup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}