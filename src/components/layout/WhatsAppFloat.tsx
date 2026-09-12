"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import { whatsappLinks } from "@/lib/site";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[300px] overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-2xl"
          >
            <div className="bg-[#075E54] px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Chat with us</p>
                  <p className="text-xs text-cream/80">
                    Response within minutes
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-cream/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <p className="mb-3 text-sm text-charcoal">
                Hello! 👋<br />
                How can we assist you today? Tap below to start a WhatsApp conversation with our reservations team.
              </p>
              <a
                href={whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1da851]"
              >
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-transform hover:scale-110"
        aria-label="Open WhatsApp chat"
      >
        {open ? (
          <X className="h-7 w-7 text-white" />
        ) : (
          <MessageCircle className="h-7 w-7 text-white" />
        )}
      </button>
    </div>
  );
}