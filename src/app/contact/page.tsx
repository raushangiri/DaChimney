import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, AlarmClock } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { site, whatsappLinks, fullAddress } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Da Chimney Boutique Hotel & Restaurant, Abuja",
  description:
    "Contact The DEN by Da Golden Chimney — 20 Agadez Crescent, Wuse 2, Abuja. Call +234 805 077 9933, WhatsApp us, or send a message for bookings, events and dining reservations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd data={localBusinessSchema()} />
      <PageHero
        title="Contact Us"
        subtitle="We're here 24/7 — for bookings, events, dining reservations and everything in between."
        image="/images/raw/gallary_3.jpeg"
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            {[
              {
                icon: Phone,
                title: "Phone & WhatsApp",
                lines: [site.phone, "Instant response during business hours"],
                href: `tel:${site.phoneIntl}`,
              },
              {
                icon: Mail,
                title: "Email",
                lines: [site.email],
                href: `mailto:${site.email}`,
              },
              {
                icon: MapPin,
                title: "Visit Us",
                lines: [fullAddress()],
                href: site.mapsLink,
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: ["Reception: 24/7", "Restaurant: 7 AM – 11 PM"],
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-charcoal/10 bg-white p-5">
                <div className="flex items-start gap-4">
                  <c.icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="mb-1 font-semibold text-charcoal-dark">{c.title}</h3>
                    {c.lines.map((line, i) => (
                      <p key={i} className={i === 0 ? "text-sm font-medium text-charcoal" : "text-xs text-charcoal-light"}>
                        {line}
                      </p>
                    ))}
                    {c.href && (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-gold-dark hover:text-gold"
                      >
                        Open →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 w-full"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp Now
            </a>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <AlarmClock className="h-6 w-6 text-gold" />
              <h2 className="text-2xl font-bold text-charcoal-dark">Emergency Contact</h2>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-charcoal-light">
              Guests staying with us can reach the front desk at any hour. For urgent matters
              outside hotel hours, our duty manager is available on the same line.
            </p>
            <div className="inline-flex items-center gap-3 rounded-xl bg-cream p-4">
              <span className="text-sm text-charcoal-light">24/7 Duty Desk:</span>
              <a href={`tel:${site.phoneIntl}`} className="font-bold text-charcoal-dark hover:text-gold-dark">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-charcoal-light">
              Prefer to book directly? Use our online booking engine for instant confirmation and the best available rate.
            </p>
            <Link href="/booking" className="btn-gold">Book Your Stay Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}