import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { offers } from "@/data/offers";
import { whatsappLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Special Offers | Exclusive Hotel Deals in Abuja",
  description:
    "Save on your Abuja stay — weekend escapes from ₦40,000, airport pickup bundles, corporate event rates and long-stay privileges at The DEN by Da Golden Chimney.",
  alternates: { canonical: "/special-offers" },
};

export default function OffersPage() {
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "The DEN by Da Golden Chimney — Special Offers",
          url: "https://dachimney.netlify.app/special-offers",
          itemListElement: offers.map((o) => ({
            "@type": "Offer",
            name: o.title,
            description: o.description,
            priceCurrency: "NGN",
          })),
        }}
      />
      <PageHero
        title="Special Offers"
        subtitle="Exclusive packages and seasonal deals — book directly to unlock the best rates in Wuse 2, Abuja."
        image="/images/raw/landing_page_1.jpeg"
        crumbs={[{ name: "Special Offers", path: "/special-offers" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Save on Your Stay"
          title="Hand-Crafted Packages"
          description="From weekend escapes to corporate rates — there's an offer for every kind of visit."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.slug} className="lux-card group grid overflow-hidden sm:grid-cols-2">
              <div className="relative h-56 overflow-hidden sm:h-full">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase text-night">
                  {offer.badge}
                </span>
              </div>
              <div className="flex flex-col p-6">
                <h2 className="mb-2 text-xl font-bold text-charcoal-dark">{offer.title}</h2>
                <p className="mb-4 text-sm leading-relaxed text-charcoal-light">{offer.description}</p>
                {offer.code && (
                  <p className="mb-3 text-xs text-charcoal-light">
                    Promo code: <span className="font-bold uppercase text-gold-dark">{offer.code}</span>
                  </p>
                )}
                <ul className="mb-5 grid gap-2 text-sm text-charcoal">
                  {offer.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-2.5">
                  <Link href="/booking" className="btn-gold w-full">Claim This Offer</Link>
                  <a href={whatsappLinks.booking} target="_blank" rel="noopener noreferrer" className="btn-outline-gold w-full">
                    <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-charcoal-dark p-8 text-center text-cream">
          <h2 className="mb-2 text-2xl font-bold font-display">Looking for something custom?</h2>
          <p className="mx-auto mb-5 max-w-xl text-sm text-cream/75">
            Corporate accounts, group bookings and long-stay rates are available on request. Talk to
            our team at {site.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${site.phoneIntl}`} className="btn-gold">Call Reservations</a>
            <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="btn-outline-gold !border-gold !text-cream">
              <MessageCircle className="h-4 w-4" /> WhatsApp for Custom Rates
            </a>
          </div>
        </div>
      </section>
    </>
  );
}