import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { faqs } from "@/data/faqs";
import { faqSchema } from "@/lib/schema";

export function HomeFaq() {
  const items = faqs.slice(0, 6).map((f) => ({
    value: f.question,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="lux-container">
        <SchemaJsonLd data={faqSchema(faqs)} />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              description="Everything you need to know about staying, dining and hosting events at The DEN."
            />
            <Link href="/faq" className="btn-outline-gold">
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-3">
            <Accordion items={items} defaultOpen={items[0]?.value} />
          </div>
        </div>
      </div>
    </section>
  );
}