"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BedDouble, Users, Ruler, ArrowRight } from "lucide-react";

import { rooms } from "@/data/rooms";
import { whatsappLinks } from "@/lib/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { site } from "@/lib/site";

export function FeaturedRooms() {
  return (
    <section id="rooms" className="lux-container py-16 md:py-24">
      <SectionHeading
        eyebrow="Rooms & Suites"
        title="Sanctuaries of Comfort & Luxury"
        description="Four distinct room categories, each designed with premium bedding, modern amenities and the unmistakable warmth of The DEN."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {rooms.map((room, i) => (
          <motion.div
            key={room.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="lux-card group flex flex-col"
          >
            <Link href={`/rooms/${room.slug}`} className="relative block h-64 overflow-hidden">
              <img
                src={room.image}
                alt={`${room.name} — ${site.brand}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
              {room.popular && (
                <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-night">
                  Most Requested
                </span>
              )}
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <span className="text-lg font-bold text-cream">{room.name}</span>
                <span className="rounded bg-night/70 px-2 py-1 text-sm font-semibold text-gold backdrop-blur">
                  ₦{room.weekendRate.toLocaleString("en-NG")}
                </span>
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <p className="mb-4 text-sm font-medium text-charcoal/70">{room.tagline}</p>
              <div className="mb-4 grid grid-cols-3 gap-2 text-xs text-charcoal-light">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-gold" /> {room.capacity} Guests
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="h-3.5 w-3.5 text-gold" /> {room.bed.split(" ")[0]}
                </span>
                <span className="flex items-center gap-1">
                  <Ruler className="h-3.5 w-3.5 text-gold" /> {room.size}
                </span>
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <Link
                  href={`/rooms/${room.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:gap-2 transition-all"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex gap-2">
                  <Link
                    href={`/booking?room=${room.slug}`}
                    className="rounded border border-charcoal/15 px-3 py-1.5 text-xs font-semibold transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    Book
                  </Link>
                  <a
                    href={whatsappLinks.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-charcoal px-3 py-1.5 text-xs font-semibold text-cream transition-colors hover:bg-[#25D366] hover:text-white"
                    aria-label={`WhatsApp about ${room.name}`}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-sm text-charcoal-light">
          Weekday rates from <strong className="text-charcoal-dark">₦{(50000).toLocaleString("en-NG")}</strong>
          {" "}· Weekend rates from <strong className="text-gold-dark">₦{(40000).toLocaleString("en-NG")}</strong> · Breakfast included
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/rooms" className="btn-gold">
            View All Rooms & Suites
          </Link>
          <Link href="/booking" className="btn-outline-gold">
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}