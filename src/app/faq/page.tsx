import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { Accordion } from "@/components/ui/accordion";
import { faqsByCategory } from "@/data/faqs";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Hotel Booking, Rooms, Events & Dining in Abuja",
  description:
    "Answers to the most common questions about staying at The DEN by Da Golden Chimney — booking, rooms, rates, events, restaurant and airport pickup in Wuse 2, Abuja.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const groups = faqsByCategory();
  const all = groups.flatMap((g) => g.items);

  return (
    <>
      <SchemaJsonLd data={faqSchema(all.map((f) => ({ question: f.question, answer: f.answer })))} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about booking, rooms, events, dining and your stay at The DEN."
        image="/images/raw/meeting_room_2.jpeg"
        crumbs={[{ name: "FAQ", path: "/faq" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {groups.map((group, gi) => (
            <div key={group.category}>
              <SectionHeading
                align="left"
                eyebrow={`Section ${gi + 1}`}
                title={group.category}
              />
              <Accordion
                items={group.items.map((f) => ({
                  value: f.question,
                  question: f.question,
                  answer: f.answer,
                }))}
                defaultOpen={gi === 0 ? group.items[0]?.question : undefined}
              />
            </div>
          ))}

          <div className="rounded-2xl border border-gold/30 bg-cream p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-charcoal-dark font-display">
              Still have a question?
            </h2>
            <p className="mb-5 text-sm text-charcoal-light">
              Our reservations team responds within minutes.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/contact" className="btn-gold">Contact Us</a>
              <a href="/booking" className="btn-outline-gold">Book a Stay</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}