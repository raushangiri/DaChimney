import type { Metadata } from "next";
import { Clock, Wine, UtensilsCrossed, Soup, MessageCircle, CalendarCheck } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { menu } from "@/data/menu";
import { gallery } from "@/data/gallery";
import { site, whatsappLinks } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant & Bar | Fine Dining in Wuse 2, Abuja",
  description:
    "Dine at The DEN Restaurant in Wuse 2, Abuja — authentic Nigerian cuisine, continental favourites and premium drinks. Book a table or reserve private dining today.",
  keywords: ["restaurant Abuja", "restaurant Wuse 2", "Nigerian food Abuja", "fine dining Abuja"],
  alternates: { canonical: "/restaurant" },
};

export default function RestaurantPage() {
  const foodImages = gallery.filter((g) => g.category === "Restaurant").slice(0, 6);

  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbs(),
          {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "The DEN Restaurant",
            servesCuisine: ["Nigerian", "Continental", "International"],
            priceRange: "₦₦",
            telephone: site.phoneIntl,
            address: { ...localBusinessSchema().address },
            acceptsReservations: "True",
          } as object,
        ]}
      />
      <PageHero
        title="Restaurant & Bar"
        subtitle="Authentic Nigerian cuisine, continental favourites and a bar made for unwinding — in the heart of Wuse 2, Abuja."
        image="/images/raw/daining_table_1.jpeg"
        crumbs={[{ name: "Restaurant", path: "/restaurant" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Dining Experience"
              title="Where Nigerian Flavour Meets World-Class Service"
              description=""
            />
            <div className="space-y-4 text-charcoal-light">
              <p>
                At The DEN restaurant, every meal is an occasion. Our chefs blend the bold,
                smoky flavours of Nigerian cooking with refined continental and international
                techniques — from party-style jollof rice to pan-seared salmon.
              </p>
              <p>
                The bar pours premium wines, spirits and signature cocktails in a warm,
                elegant lounge. Perfect for business dinners, romantic evenings and
                family celebrations.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-cream p-4">
                <Clock className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Open Daily</p>
                  <p className="text-sm font-semibold">7AM – 11PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-cream p-4">
                <Wine className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">Bar & Lounge</p>
                  <p className="text-sm font-semibold">Premium Selection</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-cream p-4">
                <Soup className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-xs text-charcoal-light">In-Room Dining</p>
                  <p className="text-sm font-semibold">24/7 Room Service</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLinks.restaurant} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <MessageCircle className="h-4 w-4" /> Reserve a Table
              </a>
              <a href={whatsappLinks.restaurant} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                <CalendarCheck className="h-4 w-4" /> Private Dining Inquiry
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {foodImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full rounded-xl object-cover ${i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-gold-border bg-cream py-14 md:py-20">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Menu Showcase"
            title="A Taste of The DEN"
            description="A curated selection from our kitchen. Our full menu changes with the seasons and is available for both dine-in and room service."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {menu.map((cat) => (
              <div key={cat.name} className="rounded-2xl border border-charcoal/10 bg-white p-6">
                <div className="mb-1 flex items-center gap-2">
                  <UtensilsCrossed className="h-5 w-5 text-gold" />
                  <h3 className="text-xl font-bold text-charcoal-dark">{cat.name}</h3>
                </div>
                <p className="mb-5 text-xs text-charcoal-light">{cat.description}</p>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between gap-3 border-b border-dashed border-charcoal/10 pb-3">
                      <div>
                        <p className="text-sm font-semibold text-charcoal-dark">{item.name}</p>
                        <p className="text-xs text-charcoal-light">{item.description}</p>
                      </div>
                      <span className="whitespace-nowrap text-sm font-bold text-gold-dark">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-charcoal-light">
            Menu prices indicative and subject to change. Please confirm with our team on WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}

function breadcrumbs() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dachimney.netlify.app/" },
      { "@type": "ListItem", position: 2, name: "Restaurant", item: "https://dachimney.netlify.app/restaurant" },
    ],
  };
}