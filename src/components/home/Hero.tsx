"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { BookingWidget } from "@/components/layout/BookingWidget";
import { whatsappLinks } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night">
      <div className="absolute inset-0">
        <img
          src="/images/raw/bg-hero.jpg"
          alt="The DEN by Da Golden Chimney — luxury boutique hotel in Wuse 2, Abuja"
          className="animate-kenburns h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      <div className="lux-container relative z-10 pb-36 pt-40 md:pb-44">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold"
          >
            Wuse 2 · Abuja · Nigeria
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance text-4xl font-bold leading-tight text-cream text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Experience Luxury, Comfort &amp; Exceptional Hospitality in{" "}
            <span className="gold-text italic">Abuja</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg"
          >
            Discover premium accommodation, fine dining, event spaces and
            personalized hospitality in the heart of Abuja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/booking" className="btn-gold">
              Book Your Stay
            </Link>
            <Link href="/events" className="btn-outline-gold !text-cream !border-gold">
              Reserve a Hall
            </Link>
            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors rounded border border-cream/40 text-cream hover:bg-cream/10"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-12"
        >
          <BookingWidget />
        </motion.div>
      </div>

      <motion.a
        href="#why-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-cream/60 md:block"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}