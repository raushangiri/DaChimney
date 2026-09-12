"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

import { site } from "@/lib/site";

export function StickyBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 bg-charcoal-dark/95 shadow-2xl backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="lux-container flex h-14 items-center justify-between gap-4">
        <div className="hidden items-center gap-4 text-sm text-cream/80 sm:flex">
          <span>
            <strong className="text-gold">The DEN</strong> · Wuse 2, Abuja
          </span>
          <span className="text-cream/30">|</span>
          <a href={`tel:${site.phoneIntl}`} className="hover:text-gold">
            {site.phone}
          </a>
        </div>
        <Link
          href="/booking"
          className="btn-gold ml-auto !px-4 !py-2.5 !text-xs"
        >
          <CalendarCheck className="h-4 w-4" /> Book Your Stay
        </Link>
      </div>
    </div>
  );
}