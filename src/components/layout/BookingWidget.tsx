"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { roomTypeOptions } from "@/data/rooms";

interface BookingWidgetProps {
  compact?: boolean;
  className?: string;
}

export function BookingWidget({ compact = false, className }: BookingWidgetProps) {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    checkIn: today,
    checkOut: "",
    guests: "2",
    room: "",
    promoCode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      room: form.room,
      promo: form.promoCode,
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-md md:p-6 ${
        compact
          ? "flex flex-col gap-3 md:flex-row md:items-end md:flex-wrap"
          : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"
      } ${className}`}
    >
      <div className={compact ? "" : "md:col-span-1"}>
        <Label className="mb-1.5 block text-xs text-charcoal/60">Check-in</Label>
        <Input
          type="date"
          min={today}
          value={form.checkIn}
          onChange={(e) => setForm((f) => ({ ...f, checkIn: e.target.value }))}
          required
        />
      </div>
      <div className={compact ? "" : "md:col-span-1"}>
        <Label className="mb-1.5 block text-xs text-charcoal/60">Check-out</Label>
        <Input
          type="date"
          min={form.checkIn || today}
          value={form.checkOut}
          onChange={(e) => setForm((f) => ({ ...f, checkOut: e.target.value }))}
          required
        />
      </div>
      <div className={compact ? "" : "md:col-span-1"}>
        <Label className="mb-1.5 block text-xs text-charcoal/60">Guests</Label>
        <Select value={form.guests} onValueChange={(v) => setForm((f) => ({ ...f, guests: v }))}>
          <SelectTrigger>
            <SelectValue placeholder="Guests" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className={compact ? "" : "md:col-span-1"}>
        <Label className="mb-1.5 block text-xs text-charcoal/60">Room Type</Label>
        <Select value={form.room} onValueChange={(v) => setForm((f) => ({ ...f, room: v }))}>
          <SelectTrigger>
            <SelectValue placeholder="All Rooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Rooms</SelectItem>
            {roomTypeOptions.map((r) => (
              <SelectItem key={r.value} value={r.value}>
                {r.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {!compact && (
        <div className="hidden lg:block">
          <Label className="mb-1.5 block text-xs text-charcoal/60">Promo Code</Label>
          <Input
            placeholder="Optional"
            value={form.promoCode}
            onChange={(e) => setForm((f) => ({ ...f, promoCode: e.target.value }))}
          />
        </div>
      )}
      <div className={compact ? "md:w-auto" : "md:col-span-2 lg:col-span-1"}>
        <Button type="submit" className="w-full mt-1">
          <CalendarCheck className="h-4 w-4" />
          Check Availability
        </Button>
      </div>
    </form>
  );
}