import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The DEN by Da Golden Chimney collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SchemaJsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Privacy Policy" }} />
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains what we collect and how we protect it."
        image="/images/raw/about-1.jpg"
        crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
      />
      <div className="lux-container py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <Section title="1. Who We Are">
            <p>
              Da Chimney Boutique Hotel &amp; Restaurant ("The DEN by Da Golden Chimney") is a
              boutique hotel located at 20 Agadez Crescent, Wuse 2, Abuja, Nigeria. We are committed
              to protecting the privacy of all guests and visitors to our website.
            </p>
          </Section>
          <Section title="2. Information We Collect">
            <p>We collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 text-sm leading-relaxed text-charcoal-light">
              <li>Your name, email address and phone number</li>
              <li>Booking details such as check-in/check-out dates, room preferences and guest count</li>
              <li>Special requests and messages submitted through our contact forms</li>
              <li>Flight and arrival details for airport pickup services</li>
            </ul>
          </Section>
          <Section title="3. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 text-sm leading-relaxed text-charcoal-light">
              <li>Process and confirm bookings and reservations</li>
              <li>Respond to enquiries and provide customer support</li>
              <li>Send booking confirmations and service updates</li>
              <li>Improve our website, services and guest experience</li>
              <li>Send promotional offers only if you have opted in</li>
            </ul>
          </Section>
          <Section title="4. WhatsApp & Communication">
            <p>
              When you contact us via WhatsApp, your messages are subject to WhatsApp's privacy
              policy. We use your phone number solely to respond to your enquiry and manage your
              reservation.
            </p>
          </Section>
          <Section title="5. Cookies & Analytics">
            <p>
              Our website may use cookies and analytics tools (such as Google Analytics and Microsoft
              Clarity) to understand how visitors use the site. This data is aggregated and does not
              personally identify you. You can disable cookies in your browser settings at any time.
            </p>
          </Section>
          <Section title="6. Data Security">
            <p>
              We take reasonable technical and organisational measures to protect your personal data
              against loss, misuse and unauthorised access.
            </p>
          </Section>
          <Section title="7. Your Rights">
            <p>
              You may request access to, correction of, or deletion of your personal information at any
              time by contacting us at the details below. We will respond within 30 days.
            </p>
          </Section>
          <Section title="8. Contact Us">
            <p>For privacy questions, contact us at: +234 805 077 9933 or anita_ansh2002@yahoo.com</p>
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