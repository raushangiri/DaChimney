"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlaneLanding, Map, Star } from "lucide-react";

import { SocialProof } from "./SocialProof";

export function TravelGuidePreview() {
  return (
    <section className="section-gold-border bg-charcoal-dark py-16 text-cream md:py-24">
      <div className="lux-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Abuja Travel Guide
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-3xl font-bold md:text-4xl"
          >
            Make the Most of Your Visit to Abuja
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 max-w-lg leading-relaxed text-cream/75"
          >
            Landmarks, restaurants, business tips and hidden gems — everything you need
            to experience Abuja like a local, curated by our concierge team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/abuja-travel-guide" className="btn-gold">
              Read the Travel Guide <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/airport-pickup" className="btn-outline-gold !border-gold !text-cream">
              <PlaneLanding className="h-4 w-4" /> Airport Pickup
            </Link>
          </motion.div>
          <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-cream/10 p-3">
              <Map className="h-8 w-8 text-gold" />
              <div>
                <p className="text-lg font-bold">9+</p>
                <p className="text-xs text-cream/60">Neighbourhood Guides</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-cream/10 p-3">
              <Star className="h-8 w-8 text-gold" />
              <div>
                <p className="text-lg font-bold">4.9/5</p>
                <p className="text-xs text-cream/60">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>

        <SocialProof />
      </div>
    </section>
  );
}