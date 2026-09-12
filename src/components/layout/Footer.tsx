import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import { site, whatsappLinks, fullAddress } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Events & Conferencing", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Special Offers", href: "/special-offers" },
  { label: "Book Now", href: "/booking" },
];

const exploreLinks = [
  { label: "Airport Pickup", href: "/airport-pickup" },
  { label: "Abuja Travel Guide", href: "/abuja-travel-guide" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const roomLinks = [
  { label: "Studio Room", href: "/rooms/studio-room" },
  { label: "Executive Deluxe", href: "/rooms/executive-deluxe" },
  { label: "Suite", href: "/rooms/suite" },
  { label: "Penthouse", href: "/rooms/penthouse" },
];

export function Footer() {
  return (
    <footer className="bg-night text-cream/80">
      <div className="lux-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold tracking-wide text-cream">
              <span className="text-gold">The DEN</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/60">
              Da Golden Chimney · Abuja
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-cream/70">
            A luxury boutique hotel & restaurant in the heart of Wuse 2, Abuja —
            premium rooms, fine dining, conference halls and warm Nigerian
            hospitality.
          </p>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>
          <ul className="grid gap-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-gold"
                >
                  <ArrowUpRight className="h-3 w-3" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Rooms
          </h3>
          <ul className="grid gap-2.5 text-sm">
            {roomLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-gold"
                >
                  <ArrowUpRight className="h-3 w-3" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-5 mt-8 text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Useful Links
          </h3>
          <ul className="grid gap-2.5 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-gold"
                >
                  <ArrowUpRight className="h-3 w-3" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <ul className="grid gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <address className="not-italic leading-relaxed">{fullAddress()}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${site.phoneIntl}`} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="lux-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-center">
            Best boutique hotel in Wuse 2, Abuja · Boutique Hotel · Restaurant ·
            Conference Hall · Pool Hall
          </p>
        </div>
      </div>
    </footer>
  );
}