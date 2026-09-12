"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronDown,
  CalendarCheck,
} from "lucide-react";

import { site, whatsappLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms & Suites", href: "/rooms", children: [
    { label: "All Rooms", href: "/rooms" },
    { label: "Studio Room", href: "/rooms/studio-room" },
    { label: "Executive Deluxe", href: "/rooms/executive-deluxe" },
    { label: "Suite", href: "/rooms/suite" },
    { label: "Penthouse", href: "/rooms/penthouse" },
  ]},
  { label: "Restaurant", href: "/restaurant" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/special-offers" },
  { label: "Locations", href: "/rooms", children: [
    { label: "Hotels in Wuse", href: "/locations/wuse" },
    { label: "Hotels in Wuse 2", href: "/locations/wuse-2" },
    { label: "Hotels in Maitama", href: "/locations/maitama" },
    { label: "Hotels in Asokoro", href: "/locations/asokoro" },
    { label: "Hotels in Garki", href: "/locations/garki" },
    { label: "Hotels near CBD", href: "/locations/central-business-district" },
    { label: "Hotels in Jabi", href: "/locations/jabi" },
    { label: "Hotels in Utako", href: "/locations/utako" },
    { label: "Hotels in Gwarinpa", href: "/locations/gwarinpa" },
  ]},
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "hidden border-b border-gold/20 bg-night text-cream/90 transition-all lg:block",
          scrolled && "lg:hidden"
        )}
      >
        <div className="lux-container flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span className="text-gold">20 Agadez Crescent, Wuse 2, Abuja</span>
            <span aria-hidden>•</span>
            <a href={`tel:${site.phoneIntl}`} className="hover:text-gold">
              {site.phone}
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span>{site.hours}</span>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gold"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-night/95 shadow-xl backdrop-blur-md"
            : "bg-gradient-to-b from-night/80 to-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="lux-container flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex flex-col leading-none" aria-label={site.brand}>
            <span className="font-display text-xl font-bold tracking-wide text-cream md:text-2xl">
              <span className="text-gold">The DEN</span>
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-cream/70">
              Da Golden Chimney · Abuja
            </span>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                      isActive(item.href)
                        ? "text-gold"
                        : "text-cream/90 hover:text-gold"
                    )}
                    type="button"
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-60 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-md border border-gold/20 bg-night p-2 shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded px-3 py-2.5 text-sm text-cream/85 transition-colors hover:bg-gold/10 hover:text-gold",
                            pathname === child.href && "text-gold"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                    isActive(item.href)
                      ? "text-gold"
                      : "text-cream/90 hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/booking"
              className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Now
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cream xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-night/98 backdrop-blur-sm xl:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-display text-lg font-bold text-cream">
                <span className="text-gold">The DEN</span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cream"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 pb-16">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-cream/10">
                  {item.children ? (
                    <>
                      <p className="py-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 pl-4 text-sm text-cream/85 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                      <div className="h-3" />
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 font-semibold",
                        isActive(item.href) ? "text-gold" : "text-cream"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/booking" onClick={() => setMobileOpen(false)} className="btn-gold">
                  Book Your Stay
                </Link>
                <a
                  href={whatsappLinks.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex items-center justify-center gap-2 text-sm text-cream/80"
                >
                  <Phone className="h-4 w-4 text-gold" /> {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-cream/80"
                >
                  <Mail className="h-4 w-4 text-gold" /> {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}