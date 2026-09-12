"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { offers } from "@/data/offers";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function OffersPreview() {
  return (
    <section className="lux-container py-16 md:py-20">
      <SectionHeading
        eyebrow="Special Offers"
        title="Exclusive Rates, Unforgettable Stays"
        description="Hand-crafted offers for weekend escapes, business travel and long stays — book direct to unlock them."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {offers.slice(0, 4).map((offer, i) => (
          <motion.div
            key={offer.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={offer.image}
              alt={offer.title}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-night">
              {offer.badge}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="mb-1 text-lg font-bold text-cream">{offer.title}</h3>
              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-cream/75">
                {offer.description}
              </p>
              <Link
                href="/special-offers"
                className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:gap-2 transition-all"
              >
                View Offer <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}