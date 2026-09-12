"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { gallery } from "@/data/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function GalleryPreview() {
  const preview = gallery.slice(0, 8);
  return (
    <section className="lux-container py-16 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="A Glimpse of The DEN"
        description="From elegant rooms to glamorous events, explore life at our boutique hotel in Wuse 2, Abuja."
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {preview.map((item, i) => (
          <motion.div
            key={item.src + i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="group relative aspect-square overflow-hidden rounded-lg md:even:mt-8"
          >
            <Link href="/gallery">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-night/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-semibold text-cream">{item.category}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/gallery" className="btn-outline-gold">
          View Full Gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}