"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subs = JSON.parse(localStorage.getItem("den_admin_newsletter") || "[]");
    subs.unshift({ email, date: new Date().toISOString() });
    localStorage.setItem("den_admin_newsletter", JSON.stringify(subs.slice(0, 500)));
    setDone(true);
  };

  return (
    <section className="section-gold-border border-b border-gold/30 bg-charcoal-dark py-12">
      <div className="lux-container flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="mb-1 font-display text-2xl font-bold text-cream md:text-3xl">
            <span className="text-gold">The DEN</span> Insider
          </h2>
          <p className="text-sm text-cream/70">
            Exclusive offers, Abuja travel tips and early access to event dates — straight to your inbox. No spam, ever.
          </p>
        </div>
        {done ? (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-5 py-4 text-sm font-semibold text-emerald-400">
            <CheckCircle2 className="h-5 w-5" /> Welcome to The DEN Insider!
          </div>
        ) : (
          <form onSubmit={subscribe} className="flex w-full max-w-md items-center gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="!bg-white pl-9"
                aria-label="Email address"
              />
            </div>
            <Button type="submit" className="shrink-0">
              <Send className="h-4 w-4" /> Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}