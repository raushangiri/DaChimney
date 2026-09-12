"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Sparkles, Clock } from "lucide-react";

export function SocialProof() {
  const badges = [
    { icon: ShieldCheck, title: "Secure Booking", text: "Direct & protected reservations" },
    { icon: BadgeCheck, title: "Verified Hotel", text: "Business verified in Wuse 2, Abuja" },
    { icon: Sparkles, title: "Premium Service", text: "Luxury boutique hospitality" },
    { icon: Clock, title: "24/7 Support", text: "Real humans, always available" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {badges.map((b, i) => (
        <motion.div
          key={b.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl border border-cream/10 bg-white/5 p-5 backdrop-blur-sm"
        >
          <b.icon className="mb-3 h-8 w-8 text-gold" />
          <p className="font-semibold text-cream">{b.title}</p>
          <p className="text-sm text-cream/65">{b.text}</p>
        </motion.div>
      ))}
    </div>
  );
}