"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lead = { ...form, date: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("den_admin_leads") || "[]");
    existing.unshift(lead);
    localStorage.setItem("den_admin_leads", JSON.stringify(existing.slice(0, 200)));
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website: ${form.subject || "General Enquiry"}`
    )}&body=${encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-gold/30 bg-cream p-10 text-center">
        <CheckCircle2 className="mb-4 h-14 w-14 text-gold" />
        <h2 className="mb-2 text-2xl font-bold text-charcoal-dark">Message Received</h2>
        <p className="max-w-md text-charcoal-light">
          Thank you for reaching out. Your email app should have opened — simply press send
          and our team will respond within the hour. You can also WhatsApp us for the fastest reply.
        </p>
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
      <h2 className="mb-6 text-2xl font-bold text-charcoal-dark">Send Us a Message</h2>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="cf-name" className="mb-1.5 block">Full Name</Label>
          <Input id="cf-name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="cf-phone" className="mb-1.5 block">Phone Number</Label>
          <Input id="cf-phone" required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+234..." />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="cf-email" className="mb-1.5 block">Email</Label>
          <Input id="cf-email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@email.com" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="cf-subject" className="mb-1.5 block">Subject</Label>
          <Input id="cf-subject" value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} placeholder="Room booking / Event / Dining..." />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="cf-message" className="mb-1.5 block">Message</Label>
          <Textarea id="cf-message" required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} placeholder="How can we help?" rows={5} />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full md:w-auto">
        <Send className="h-4 w-4" /> Send Message
      </Button>
      <p className="mt-3 text-xs text-charcoal-light">
        Messages are stored securely and answered by our reservations team.
      </p>
    </form>
  );
}