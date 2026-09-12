"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { whatsappLinks } from "@/lib/site";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-intent-dismissed")) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) setShow(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-intent-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="absolute right-3 top-3 z-10">
              <button
                type="button"
                onClick={dismiss}
                className="rounded-full bg-white/90 p-1.5 text-charcoal shadow transition-colors hover:bg-cream"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative h-40 overflow-hidden bg-charcoal-dark">
              <img
                src="/images/raw/bg-hero.jpg"
                alt="The DEN by Da Golden Chimney"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-night">
                  Special Offer
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-charcoal-dark font-display">
                Before you leave…
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-charcoal-light">
                Enjoy our <strong className="text-gold-dark">Weekend Escape</strong> — rates
                from <strong>₦40,000</strong> with complimentary breakfast. Book directly and
                save more.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/booking"
                  onClick={dismiss}
                  className="btn-gold text-center"
                >
                  Book Your Stay <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLinks.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="btn-outline-gold text-center"
                >
                  WhatsApp a Reservation
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}