"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, X } from "lucide-react";

const messages = [
  { name: "Adaobi", from: "Abuja", action: "booked the Suite", room: "Suite", time: "4 minutes ago" },
  { name: "Ibrahim", from: "Kano", action: "reserved the Conference Hall", room: "Conference Hall", time: "11 minutes ago" },
  { name: "Temitope", from: "Lagos", action: "booked the Penthouse", room: "Penthouse", time: "26 minutes ago" },
  { name: "Chiamaka", from: "Enugu", action: "booked the Executive Deluxe", room: "Executive Deluxe", time: "38 minutes ago" },
  { name: "James", from: "London", action: "requested airport pickup", room: "Airport Pickup", time: "1 hour ago" },
  { name: "Ngozi", from: "Abuja", action: "reserved a table at the restaurant", room: "Restaurant", time: "2 hours ago" },
];

export function RecentActivity() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const first = setTimeout(() => setVisible(true), 8000);
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 600);
    }, 12000);
    return () => {
      clearTimeout(first);
      clearInterval(cycle);
    };
  }, []);

  const dismiss = () => setVisible(false);
  const msg = messages[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-24 left-5 z-30 hidden max-w-[290px] items-start gap-3 rounded-xl border border-charcoal/10 bg-white p-4 shadow-2xl sm:flex"
        >
          <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
          <div className="text-xs leading-relaxed text-charcoal">
            <p>
              <strong className="text-charcoal-dark">{msg.name}</strong> from {msg.from}{" "}
              just <strong className="text-gold-dark">{msg.action}</strong> —{" "}
              {msg.time}.
            </p>
            <p className="mt-1 text-[11px] text-charcoal/50">
              Join hundreds of guests enjoying The DEN in Wuse 2, Abuja.
            </p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="ml-auto shrink-0 text-charcoal/30 transition-colors hover:text-charcoal"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}