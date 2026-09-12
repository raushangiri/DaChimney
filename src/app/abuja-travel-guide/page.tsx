import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Map as MapIcon, UtensilsCrossed, Building2, Plane, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Abuja Travel Guide | Landmarks, Restaurants & Hotels",
  description:
    "The essential Abuja travel guide — top landmarks, best restaurants, business districts, neighbourhoods and hotel recommendations from The DEN by Da Golden Chimney.",
  keywords: ["Abuja travel guide", "things to do in Abuja", "tourism Nigeria", "Abuja hotels", "Abuja landmarks"],
  alternates: { canonical: "/abuja-travel-guide" },
};

const sections = [
  {
    icon: Landmark,
    title: "Landmarks You Can't Miss",
    body: [
      "Aso Rock — the iconic 400-metre monolith that anchors Abuja's skyline, visible from across the city.",
      "Zuma Rock — the 'Gateway to Abuja', a towering monolith on the Kaduna road, best photographed at sunrise.",
      "Millennium Park — Abuja's green sanctuary along Maitama, perfect for evening walks and picnics.",
      "Nigerian National Mosque and National Christian Centre — architectural landmarks representing Nigeria's shared faiths.",
      "National Assembly — the seat of Nigerian democracy, with guided tours from the public gallery.",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Where to Eat in Abuja",
    body: [
      "Start with The DEN restaurant in Wuse 2 — Nigerian classics and continental favourites served all day.",
      "Wuse and Maitama are home to Abuja's most celebrated restaurants, from street suya to fine dining.",
      "Banex Plaza's food courts buzz with local and international street food.",
      "Weekend brunch culture is strong — Sunday brunches at boutique hotels are a local institution.",
    ],
  },
  {
    icon: Building2,
    title: "Business Districts Made Simple",
    body: [
      "Central Business District — ministries, financial institutions and the Central Bank of Nigeria.",
      "Wuse 2 — corporate offices, embassies and the best boutique hotels (like The DEN).",
      "Garki — the original CBD with government secretariats and bustling markets.",
      "Maitama — diplomatic quarter and luxe residential enclave.",
      "Station your stay in Wuse 2 for the fastest access to all of them.",
    ],
  },
  {
    icon: MapIcon,
    title: "Getting Around",
    body: [
      "Airport: Nnamdi Azikiwe International Airport is a 40–60 minute drive from the city. Pre-book hotel transfers for the smoothest arrival.",
      "Taxis & ride-hailing: Bolt and Uber operate across Abuja with reliable service.",
      "Abuja Rail Mass Transit and plentiful yellow cabs serve the central areas.",
      "Most landmarks cluster within 15–20 minutes of Wuse, making a Wuse 2 hotel the ideal base.",
    ],
  },
  {
    icon: Plane,
    title: "When to Visit",
    body: [
      "Best weather: November to February — the harmattan brings dry, golden days ideal for sightseeing.",
      "March to May: hot season — plan outdoor activities for early mornings and evenings.",
      "June to October: rainy season — lush and green; pack an umbrella for sudden showers.",
      "December is festive season in Abuja — hotel rooms and event halls book out early.",
    ],
  },
];

export default function TravelGuidePage() {
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelGuide",
          name: "Abuja Travel Guide",
          about: "Tourism and travel in Abuja, Nigeria",
          url: "https://dachimney.netlify.app/abuja-travel-guide",
        }}
      />
      <PageHero
        title="Abuja Travel Guide"
        subtitle="Everything you need to experience Nigeria's capital — landmarks, food, business districts and the best places to stay."
        image="/images/raw/landing_page_1.jpeg"
        crumbs={[{ name: "Abuja Travel Guide", path: "/abuja-travel-guide" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Explore the Capital"
              title="Welcome to Abuja"
              description=""
            />
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.title} className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <s.icon className="h-7 w-7 text-gold" />
                    <h2 className="text-2xl font-bold text-charcoal-dark font-display">{s.title}</h2>
                  </div>
                  <ul className="grid gap-3 text-charcoal-light">
                    {s.body.map((line) => (
                      <li key={line} className="flex items-start gap-2 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-cream p-6">
              <SectionHeading align="left" eyebrow="Explore by Neighbourhood" title="Where to Stay in Abuja" description="Detailed guides for every district." />
              <div className="grid gap-3 sm:grid-cols-3">
                {["Wuse 2", "Maitama", "Garki", "Asokoro", "Jabi", "Gwarinpa"].map((n) => (
                  <Link
                    key={n}
                    href={`/locations/${slugify(n)}`}
                    className="flex items-center justify-between rounded-xl border border-charcoal/15 px-4 py-3 text-sm font-semibold text-charcoal-dark transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    Hotels in {n} <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-charcoal-dark p-6 text-cream">
              <h3 className="mb-3 text-lg font-bold font-display">Make The DEN Your Base</h3>
              <p className="mb-4 text-sm text-cream/75">
                Centrally located at 20 Agadez Crescent, Wuse 2 — minutes from every district in this guide.
              </p>
              <Link href="/booking" className="btn-gold w-full">Book Your Stay</Link>
              <Link href="/contact" className="btn-outline-gold mt-3 w-full !border-gold !text-cream">Plan My Trip</Link>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-5">
              <Plane className="h-8 w-8 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-bold text-charcoal-dark">Arriving by air?</p>
                <p className="text-xs text-charcoal-light">Skip the taxi queue — pre-book airport pickup.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}