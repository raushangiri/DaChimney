import { MapPin, Navigation } from "lucide-react";

import { site, fullAddress } from "@/lib/site";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function MapSection() {
  return (
    <section className="flex flex-col py-16 md:py-24">
      <div className="lux-container mb-10 flex flex-col items-center gap-6 text-center">
        <SectionHeading
          eyebrow="Find Us"
          title="In the Heart of Wuse 2, Abuja"
          description={fullAddress()}
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            <MapPin className="h-4 w-4" /> View on Google Maps
          </a>
        </div>
      </div>
      <iframe
        src={site.mapsEmbed}
        title="Da Chimney Boutique Hotel & Restaurant location map"
        className="h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}