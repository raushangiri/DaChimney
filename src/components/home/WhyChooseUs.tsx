import {
  MapPin,
  Wifi,
  Coffee,
  Headset,
  Car,
  ConciergeBell,
  UtensilsCrossed,
  Presentation,
  Plane,
  Briefcase,
  Landmark,
  Waves,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";

const features = [
  { icon: MapPin, title: "Prime Abuja Location", text: "20 Agadez Crescent, Wuse 2 — steps from Abuja's business and diplomatic heart." },
  { icon: Wifi, title: "Free High-Speed WiFi", text: "Fibre-fast internet in every room, lobby and event space." },
  { icon: Coffee, title: "Complimentary Breakfast", text: "Start each day with our celebrated breakfast spread, included in your stay." },
  { icon: Headset, title: "24/7 Reception", text: "Round-the-clock service — we're always awake when you need us." },
  { icon: Car, title: "Secure Parking", text: "Guarded, on-site parking for guests and event visitors." },
  { icon: ConciergeBell, title: "Room Service", text: "Dine in comfort with room service available around the clock." },
  { icon: UtensilsCrossed, title: "Restaurant & Bar", text: "Nigerian classics and continental favourites with premium drinks." },
  { icon: Presentation, title: "Conference Facilities", text: "A modern meeting room and full conference hall with AV support." },
  { icon: Plane, title: "Airport Transfer", text: "Chauffeured pickup from Nnamdi Azikiwe International Airport." },
  { icon: Briefcase, title: "Event Spaces", text: "Flexible venues for corporate, social and private occasions." },
  { icon: Landmark, title: "Meeting Room", text: "Executive boardroom setting for up to 50 guests." },
  { icon: Waves, title: "Swimming Pool Hall", text: "A glamorous poolside venue for weddings and celebrations." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-gold-border bg-cream py-16 md:py-24">
      <div className="lux-container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Perfect Address in Abuja"
          description="Everything you need for an unforgettable stay — under one elegant roof."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-charcoal/5 bg-white p-5 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              <feature.icon className="mb-3 h-7 w-7 text-gold transition-transform group-hover:scale-110" />
              <h3 className="mb-1 text-sm font-bold text-charcoal-dark">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-charcoal-light">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}