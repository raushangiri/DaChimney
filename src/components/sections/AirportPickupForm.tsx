"use client";

import { useState } from "react";
import { PlaneLanding, Car, ShieldCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { site } from "@/lib/site";

export function AirportPickupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    flightNumber: "",
    airline: "",
    arrivalTime: "",
    guests: "1",
    vehicle: "Sedan",
    guestDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello The DEN by Da Golden Chimney. I would like to request an airport pickup.\n\nName: ${form.name}\nPhone: ${form.phone}\nFlight: ${form.airline} ${form.flightNumber}\nArrival: ${form.arrivalTime}\nGuests: ${form.guests}\nVehicle: ${form.vehicle}\nNotes: ${form.guestDetails}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    const leads = JSON.parse(localStorage.getItem("den_admin_leads") || "[]");
    leads.unshift({ type: "airport-pickup", date: new Date().toISOString(), ...form });
    localStorage.setItem("den_admin_leads", JSON.stringify(leads.slice(0, 200)));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-cream p-10 text-center">
        <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-gold" />
        <h2 className="mb-2 text-xl font-bold text-charcoal-dark">Pickup Request Sent</h2>
        <p className="text-sm text-charcoal-light">
          Your request has been logged and your WhatsApp is opening with your details — just press
          send and our team will confirm your transfer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
      <h2 className="mb-5 text-xl font-bold text-charcoal-dark font-display">Pickup Details</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label className="mb-1.5 block">Full Name</Label>
          <Input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <Label className="mb-1.5 block">Phone (WhatsApp)</Label>
          <Input required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+234..." />
        </div>
        <div>
          <Label className="mb-1.5 block">Airline</Label>
          <Input value={form.airline} onChange={(e) => setForm((f) => ({ ...f, airline: e.target.value }))} placeholder="e.g. Air Peace" />
        </div>
        <div>
          <Label className="mb-1.5 block">Flight Number</Label>
          <Input value={form.flightNumber} onChange={(e) => setForm((f) => ({ ...f, flightNumber: e.target.value }))} placeholder="e.g. P47401" />
        </div>
        <div>
          <Label className="mb-1.5 block">Arrival Date &amp; Time</Label>
          <Input required type="datetime-local" value={form.arrivalTime} onChange={(e) => setForm((f) => ({ ...f, arrivalTime: e.target.value }))} />
        </div>
        <div>
          <Label className="mb-1.5 block">Number of Guests</Label>
          <Select value={form.guests} onValueChange={(v) => setForm((f) => ({ ...f, guests: v }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2">
          <Label className="mb-1.5 block">Vehicle Preference</Label>
          <div className="grid grid-cols-2 gap-2">
            {["Sedan", "SUV", "Executive Van"].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setForm((f) => ({ ...f, vehicle: v }))}
                className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                  form.vehicle === v ? "border-gold bg-gold/10 text-gold-dark" : "border-charcoal/15 text-charcoal"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Car className="h-4 w-4" /> {v}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <Label className="mb-1.5 block">Additional Notes</Label>
          <Textarea rows={3} value={form.guestDetails} onChange={(e) => setForm((f) => ({ ...f, guestDetails: e.target.value }))} placeholder="Luggage, connecting needs, or special instructions..." />
        </div>
      </div>
      <Button type="submit" className="mt-5 w-full">
        <PlaneLanding className="h-4 w-4" /> Confirm Pickup Request
      </Button>
    </form>
  );
}