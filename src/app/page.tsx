import { Hero } from "@/components/home/Hero";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { OffersPreview } from "@/components/home/OffersPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { TravelGuidePreview } from "@/components/home/TravelGuidePreview";
import { HomeFaq } from "@/components/home/HomeFaq";
import { MapSection } from "@/components/home/MapSection";
import { ImpactBar } from "@/components/home/ImpactBar";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { reviewSchema } from "@/lib/schema";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <>
      <SchemaJsonLd
        data={reviewSchema(
          "Da Chimney Boutique Hotel & Restaurant",
          4.9,
          testimonials.map((t) => ({
            author: t.name,
            rating: t.rating,
            text: t.text,
            date: t.date,
          }))
        )}
      />
      <Hero />
      <ImpactBar />
      <FeaturedRooms />
      <WhyChooseUs />
      <OffersPreview />
      <Testimonials />
      <GalleryPreview />
      <InstagramFeed />
      <TravelGuidePreview />
      <HomeFaq />
      <MapSection />
    </>
  );
}