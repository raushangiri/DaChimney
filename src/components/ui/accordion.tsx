"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface AccordionItem {
  value: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string;
}

export function Accordion({ items, className, defaultOpen }: AccordionProps) {
  const [open, setOpen] = React.useState<string | null>(defaultOpen ?? null);

  return (
    <div className={cn("divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-white", className)}>
      {items.map((item) => {
        const isOpen = open === item.value;
        return (
          <div key={item.value}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.value)}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors",
                isOpen ? "text-gold-dark" : "text-charcoal hover:text-gold-dark"
              )}
              aria-expanded={isOpen}
            >
              <span className="font-semibold">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180 text-gold"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal-light">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}