import type { Metadata } from "next";
import Link from "next/link";
import { Award, Wine, BedDouble, Presentation, Waves, Plane } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ImpactBar } from "@/components/home/ImpactBar";

export const metadata: Metadata = {
  title: "About Us | Da Chimney Boutique Hotel & Restaurant, Wuse 2 Abuja",
  description:
    "Discover the story of The DEN by Da Golden Chimney — a family-owned luxury boutique hotel & restaurant in Wuse 2, Abuja, offering premium rooms, fine dining and event spaces.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Wine, title: "Warm Hospitality", text: "Nigerian warmth meets world-class service — every guest is treated like family." },
  { icon: BedDouble, title: "Premium Comfort", text: "Thoughtfully designed rooms with premium bedding and modern amenities." },
  { icon: Presentation, title: "Considered Design", text: "An elegant, calming aesthetic created for rest, work and celebration." },
  { icon: Waves, title: "Total Care", text: "From airport pickup to late-night room service, we handle the details." },
  { icon: Plane, title: "Seamless Travel", text: "Airport transfers and concierge assistance make every arrival effortless." },
  { icon: Award, title: "Honest Excellence", text: "Transparent pricing, authentic food and standards we never compromise on." },
];

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About The DEN by Da Golden Chimney",
          url: "https://dachimney.netlify.app/about",
        }}
      />
      <PageHero
        title="About The DEN"
        subtitle="A family-owned boutique hotel & restaurant in the heart of Wuse 2, Abuja — built on genuine Nigerian hospitality and a relentless eye for detail."
        image="/images/raw/about_1.png"
        crumbs={[{ name: "About Us", path: "/about" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/raw/about-1.jpg" alt="The DEN hotel interior" loading="lazy" className="col-span-2 aspect-[2/1] w-full rounded-xl object-cover" />
            <img src="/images/raw/daining_table_1.jpeg" alt="The DEN restaurant" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
            <img src="/images/raw/pool_2.jpeg" alt="Swimming pool hall" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="The DEN: Where Every Detail Tells a Story"
              description=""
            />
            <div className="space-y-4 text-charcoal-light">
              <p>
                The DEN by Da Golden Chimney was born from a simple conviction: the Federal Capital
                deserves a hotel that feels personal. Not just a place to sleep — a place where
                your name is remembered, your coffee arrives before you ask, and every corner is
                designed to make you feel at home.
              </p>
              <p>
                Located at 20 Agadez Crescent, Wuse 2, our boutique hotel pairs the polish of a
                world-class property with the warmth only a family-run house can deliver. Four
                distinct room categories, a celebrated restaurant and bar, a professional conference
                hall and a glamorous swimming pool hall — all under one elegant roof.
              </p>
              <p>
                Whether you are in Abuja for business, a wedding weekend or a quiet escape, The DEN
                exists to make your stay extraordinary. That is our promise — and our pleasure.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/rooms" className="btn-gold">Explore Our Rooms</Link>
              <Link href="/gallery" className="btn-outline-gold">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <ImpactBar />

      <section className="bg-white py-14 md:py-20">
        <div className="lux-container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Values Behind Every Stay"
            description="Six commitments that shape how we serve our guests, day after day."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-charcoal/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <v.icon className="mb-4 h-8 w-8 text-gold" />
                <h3 className="mb-2 text-lg font-bold text-charcoal-dark">{v.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="lux-container pb-16 text-center md:pb-24">
        <SectionHeading
          eyebrow="Come & Experience"
          title="Your Abuja Address Awaits"
          description="Join the guests who call The DEN their home in Abuja. Book direct for the best rates."
        />
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/booking" className="btn-gold">Book Your Stay</Link>
          <Link href="/contact" className="btn-outline-gold">Contact Us</Link>
        </div>
      </section>
    </>
  );
}