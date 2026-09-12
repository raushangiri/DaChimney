import type { Metadata } from "next";
import { PlaneLanding, Plane, Clock, Car, ShieldCheck, Check } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { AirportPickupForm } from "@/components/sections/AirportPickupForm";
import { site, whatsappLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Airport Pickup | Chauffeur Service from Abuja Airport",
  description:
    "Book a chauffeured airport pickup from Nnamdi Azikiwe International Airport to The DEN in Wuse 2, Abuja. Provide flight details and arrival time for a seamless arrival.",
  alternates: { canonical: "/airport-pickup" },
};

const steps = [
  { icon: Plane, title: "Share Flight Details", text: "Tell us airline, flight number, arrival time and terminal." },
  { icon: Clock, title: "Arrive Seamlessly", text: "Our driver meets you at arrivals with a name board." },
  { icon: Car, title: "Relax on the Ride", text: "Enjoy a comfortable chauffeured transfer to Wuse 2." },
  { icon: ShieldCheck, title: "Arrive in Safety", text: "Secure, monitored vehicles and professional drivers." },
];

export default function AirportPickupPage() {
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Airport Transfer",
          provider: { "@type": "Hotel", name: site.name, address: site.address.street },
          areaServed: "Nnamdi Azikiwe International Airport, Abuja",
        }}
      />
      <PageHero
        title="Airport Pickup"
        subtitle="Landed? We'll take it from there. Chauffeured pickup from Nnamdi Azikiwe International Airport to The DEN in Wuse 2, Abuja."
        image="/images/raw/landing_page_1.jpeg"
        crumbs={[{ name: "Airport Pickup", path: "/airport-pickup" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-charcoal/10 bg-white p-5">
              <span className="absolute -top-3 left-5 rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-night">
                {i + 1}
              </span>
              <s.icon className="mb-3 mt-2 h-7 w-7 text-gold" />
              <h3 className="mb-1 text-sm font-bold text-charcoal-dark">{s.title}</h3>
              <p className="text-xs leading-relaxed text-charcoal-light">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Transfer Service"
              title="Request Your Pickup"
              description="Complete the form and our team will confirm your transfer, driver details and meeting point on WhatsApp within minutes."
            />
            <ul className="mb-6 grid gap-2.5 text-sm text-charcoal">
              {[
                "Meet & greet at arrivals hall",
                "Name board with guest's name",
                "Comfortable, air-conditioned vehicles",
                "Direct transfer to Wuse 2 (approx. 60 minutes)",
                "Available 24/7 — including red-eye arrivals",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {f}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-cream p-5">
              <p className="mb-2 flex items-center gap-2 font-semibold text-charcoal-dark">
                <PlaneLanding className="h-5 w-5 text-gold" /> Nnamdi Azikiwe International Airport (ABV)
              </p>
              <p className="text-xs text-charcoal-light">
                Terminal 1 &amp; 2 covered. Transfers outside standard hours handled by our 24/7 duty desk.
              </p>
            </div>
            <a href={whatsappLinks.airport} target="_blank" rel="noopener noreferrer" className="btn-outline-gold mt-5">
              Request via WhatsApp Direct
            </a>
          </div>

          <AirportPickupForm />
        </div>
      </section>
    </>
  );
}