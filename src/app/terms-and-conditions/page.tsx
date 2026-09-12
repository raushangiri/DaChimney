import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing bookings and reservations at The DEN by Da Golden Chimney, Wuse 2, Abuja.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <SchemaJsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Terms & Conditions" }} />
      <PageHero
        title="Terms & Conditions"
        subtitle="Clear, fair terms for bookings, events and dining at The DEN."
        image="/images/raw/about-2.jpg"
        crumbs={[{ name: "Terms & Conditions", path: "/terms-and-conditions" }]}
      />
      <div className="lux-container py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <Section title="1. Bookings & Confirmation">
            <p>
              All room, venue and restaurant bookings are subject to availability. A booking is
              confirmed once you receive confirmation via WhatsApp, email or a booking reference.
              Rates published on this website are provisional and may change without notice.
            </p>
          </Section>
          <Section title="2. Rates & Payment">
            <p>
              Room rates are quoted in Nigerian Naira (₦) and include prevailing taxes unless stated
              otherwise. Complimentary breakfast and WiFi are included with all room bookings.
              Deposits or advance payments may be required for festive periods and large group
              bookings.
            </p>
          </Section>
          <Section title="3. Check-in & Check-out">
            <p>
              Standard check-in is from 2:00 PM and check-out is by 12:00 PM. Early check-in and late
              check-out are subject to availability and may attract an additional fee.
            </p>
          </Section>
          <Section title="4. Cancellations">
            <p>
              Cancellation policies depend on the rate and period. Please confirm your policy at the
              time of booking. No-shows are charged for the first night unless otherwise agreed.
            </p>
          </Section>
          <Section title="5. Events & Venues">
            <p>
              Event venue bookings require a signed agreement and deposit. Cancellation within 14 days
              of the event may forfeit the deposit. Additional hours, catering and décor are billed
              separately.
            </p>
          </Section>
          <Section title="6. Guest Conduct & Liability">
            <p>
              Guests are responsible for their conduct and the security of their belongings. The DEN
              is not liable for loss or damage to unattended property. Damages to rooms or facilities
              will be billed to the responsible guest.
            </p>
          </Section>
          <Section title="7. Use of Website">
            <p>
              Content on this website is provided for information only. Rates, offers and availability
              should always be confirmed with our reservations team before relying on them.
            </p>
          </Section>
          <Section title="8. Governing Law">
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes
              shall be subject to the jurisdiction of the courts of the Federal Capital Territory,
              Abuja.
            </p>
          </Section>
          <Section title="9. Contact">
            <p>
              Questions about these terms? Contact our reservations team at +234 805 077 9933 or
              anita_ansh2002@yahoo.com.
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-charcoal-dark font-display">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-charcoal-light">{children}</div>
    </section>
  );
}