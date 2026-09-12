import { TrendingUp, CalendarCheck, MapPin, Heart } from "lucide-react";

const stats = [
  { icon: Heart, value: "1,200+", label: "Happy Guests" },
  { icon: CalendarCheck, value: "300+", label: "Events Hosted" },
  { icon: TrendingUp, value: "4.9/5", label: "Average Rating" },
  { icon: MapPin, value: "24/7", label: "Reception & Room Service" },
];

export function ImpactBar() {
  return (
    <section className="bg-charcoal-dark py-10">
      <div className="lux-container grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 text-center">
            <s.icon className="mb-1 h-6 w-6 text-gold" />
            <p className="font-display text-2xl font-bold text-cream md:text-3xl">{s.value}</p>
            <p className="text-xs uppercase tracking-wide text-cream/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}