import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Luxury Hotel, Restaurant & Events in Abuja",
  description:
    "Browse photos of The DEN by Da Golden Chimney — luxury rooms, restaurant, conference halls, the swimming pool hall and hotel interior in Wuse 2, Abuja.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          about: "The DEN by Da Golden Chimney — boutique hotel in Wuse 2, Abuja",
          url: "https://dachimney.netlify.app/gallery",
        }}
      />
      <PageHero
        title="Gallery"
        subtitle="A visual tour of The DEN — elegant rooms, celebrated dining and event spaces in Wuse 2, Abuja."
        image="/images/raw/landingpage.jpeg"
        crumbs={[{ name: "Gallery", path: "/gallery" }]}
      />
      <GalleryGrid />
    </>
  );
}