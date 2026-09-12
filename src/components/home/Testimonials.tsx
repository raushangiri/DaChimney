"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials, aggregateRating } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const perView = 3;

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % Math.max(1, testimonials.length - perView + 1));
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const clamp = (i: number) => Math.min(Math.max(i, 0), testimonials.length - perView);

  return (
    <section className="section-gold-border bg-night py-16 text-cream md:py-24">
      <div className="lux-container">
        <SectionHeading
          dark
          eyebrow="Guest Reviews"
          title="Loved by Travellers & Businesses"
          description={`Rated ${aggregateRating.ratingValue}/5 from ${aggregateRating.reviewCount}+ verified guest experiences across Google and booking platforms.`}
        />

        <div className="mb-6 flex items-center justify-center gap-2 text-center">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-sm text-cream/70">
            {aggregateRating.ratingValue} · {aggregateRating.reviewCount}+ reviews
          </span>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${index * (100 / perView)}%` }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-[100%] md:min-w-[calc((100%-3rem)/3)]">
                <div className="relative h-full rounded-2xl border border-cream/10 bg-charcoal-dark/60 p-6">
                  <Quote className="mb-3 h-6 w-6 text-gold/60" />
                  <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-cream/85">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 border-t border-cream/10 pt-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-cream">{t.name}</p>
                      <p className="text-xs text-cream/60">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIndex(clamp(index - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {Array.from({ length: testimonials.length - perView + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                index === i ? "w-6 bg-gold" : "w-2 bg-cream/30"
              }`}
              aria-label={`Go to review group ${i + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={() => setIndex(clamp(index + 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}