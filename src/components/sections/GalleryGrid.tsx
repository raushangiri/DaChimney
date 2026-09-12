"use client";

import { useState } from "react";

import { gallery, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All");
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="lux-container py-14 md:py-20">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {["All", ...galleryCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              filter === cat ? "bg-gold text-night" : "bg-cream text-charcoal hover:bg-gold/15"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative block w-full overflow-hidden rounded-xl"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-night/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-left text-xs font-semibold text-cream">{item.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-night/95 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-cream/80">
            {items[lightbox].alt}
          </p>
        </div>
      )}
    </section>
  );
}