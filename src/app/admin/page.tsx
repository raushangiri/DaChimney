"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  CalendarCheck,
  CircleHelp,
  FileText,
  Gift,
  Mail,
  MessageCircle,
  Plus,
  Star,
  Trash2,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { posts as blogSeed, type BlogPost } from "@/data/blog";
import { faqs as faqSeed, type Faq } from "@/data/faqs";
import { offers as offerSeed, type Offer } from "@/data/offers";
import { testimonials as testimonialSeed, type Testimonial } from "@/data/testimonials";
import { getRoom } from "@/data/rooms";
import {
  addItem,
  PASSCODE,
  getAuth,
  readCounter,
  readStore,
  removeItem,
  setAuth,
  writeCounter,
  writeStore,
} from "@/lib/admin";
import { listBookings, type BookingRequest } from "@/lib/booking";
import { formatNaira } from "@/lib/site";
import { cn } from "@/lib/utils";

const BOOKS_KEY = "den_bookings";
const TESTIMONIALS_KEY = "den_admin_testimonials";
const OFFERS_KEY = "den_admin_offers";
const FAQS_KEY = "den_admin_faqs";
const BLOG_KEY = "den_admin_blog";
const LEADS_KEY = "den_admin_leads";
const NEWSLETTER_KEY = "den_admin_newsletter";
const WA_COUNT_KEY = "den_admin_wa_ctas";

type TabKey = "bookings" | "leads" | "testimonials" | "offers" | "faqs" | "blog";

type ManagedTestimonial = Testimonial & { id: string };
type ManagedFaq = Faq & { id: string };
type ManagedOffer = Offer;
type ManagedLead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  note?: string;
  date: string;
};
type ManagedSubscriber = { id: string; email: string; date: string };

const faqCategories: Faq["category"][] = ["Booking", "Rooms", "Events", "Restaurant", "Staying"];

const testimonialSeedManaged: ManagedTestimonial[] = testimonialSeed.map((t, i) => ({
  ...t,
  id: `seed-${i + 1}`,
}));
const faqSeedManaged: ManagedFaq[] = faqSeed.map((f, i) => ({ ...f, id: `seed-${i + 1}` }));

function uniqueId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(value?: string) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function formatDateTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function usePersistedStore<T extends { id?: string; slug?: string }>(key: string, seed: T[]) {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(key);
    const initial = raw === null ? seed : readStore<T>(key, seed);
    if (raw === null) writeStore(key, initial);
    setItems(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [items, setItems] as const;
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-charcoal/20 bg-white p-10 text-center text-sm text-charcoal-light">
      {message}
    </div>
  );
}

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Delete item"
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-red-200 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={cn("h-4 w-4", n <= value ? "fill-gold text-gold" : "text-charcoal/25")}
        />
      ))}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  children,
}: {
  icon: LucideIcon;
  label: string;
  value: number;
  children?: ReactNode;
}) {
  return (
    <Card className="border border-gold/20 bg-night text-cream">
      <CardContent className="p-5 pt-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Icon className="h-5 w-5" />
          </span>
          {children}
        </div>
        <p className="font-display text-3xl font-bold text-gold">{value}</p>
        <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-cream/60">
          {label}
        </p>
      </CardContent>
    </Card>
  );
}

function TestimonialForm({ onAdd }: { onAdd: (item: ManagedTestimonial) => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onAdd({
      id: uniqueId(),
      name: name.trim(),
      role: role.trim() || "Guest",
      rating: Number(rating) || 5,
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
      avatar: "/images/raw/user_1.jpg",
    });
    setName("");
    setRole("");
    setRating("5");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input
          className="mt-1.5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Guest name"
          required
        />
      </div>
      <div>
        <Label>Role</Label>
        <Input
          className="mt-1.5"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Business Traveller"
        />
      </div>
      <div>
        <Label>Rating</Label>
        <Select value={rating} onValueChange={setRating}>
          <SelectTrigger className="mt-1.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[5, 4, 3, 2, 1].map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n} {n === 1 ? "star" : "stars"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Review</Label>
        <Textarea
          className="mt-1.5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What did your guest love?"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        <Plus className="h-4 w-4" />
        Add Testimonial
      </Button>
    </form>
  );
}

function OfferForm({ onAdd }: { onAdd: (item: Offer) => void }) {
  const [title, setTitle] = useState("");
  const [badge, setBadge] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      slug: slugify(title) || uniqueId(),
      title: title.trim(),
      badge: badge.trim() || "New Offer",
      description: description.trim(),
      details: [],
      image: "/images/raw/bg-hero.jpg",
      ...(code.trim() ? { code: code.trim() } : {}),
    });
    setTitle("");
    setBadge("");
    setDescription("");
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Title</Label>
        <Input
          className="mt-1.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Weekend Escape Package"
          required
        />
      </div>
      <div>
        <Label>Badge</Label>
        <Input
          className="mt-1.5"
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          placeholder="Most Popular"
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          className="mt-1.5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short summary for the offer card."
        />
      </div>
      <div>
        <Label>Promo Code</Label>
        <Input
          className="mt-1.5"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="WEEKEND"
        />
      </div>
      <Button type="submit" className="w-full">
        <Plus className="h-4 w-4" />
        Add Offer
      </Button>
    </form>
  );
}

function FaqForm({ onAdd }: { onAdd: (item: ManagedFaq) => void }) {
  const [category, setCategory] = useState<Faq["category"]>("Booking");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    onAdd({
      id: uniqueId(),
      category,
      question: question.trim(),
      answer: answer.trim(),
    });
    setCategory("Booking");
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Category</Label>
        <Select value={category} onValueChange={(v) => setCategory(v as Faq["category"])}>
          <SelectTrigger className="mt-1.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {faqCategories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Question</Label>
        <Input
          className="mt-1.5"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="How do I book a room?"
          required
        />
      </div>
      <div>
        <Label>Answer</Label>
        <Textarea
          className="mt-1.5"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="A helpful, on-brand answer."
          required
        />
      </div>
      <Button type="submit" className="w-full">
        <Plus className="h-4 w-4" />
        Add FAQ
      </Button>
    </form>
  );
}

function LeadForm({ onAdd }: { onAdd: (item: ManagedLead) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onAdd({
      id: uniqueId(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      note: note.trim() || undefined,
      date: new Date().toISOString(),
    });
    setName("");
    setEmail("");
    setPhone("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input
          className="mt-1.5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Guest name"
          required
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          className="mt-1.5"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="guest@example.com"
          required
        />
      </div>
      <div>
        <Label>Phone</Label>
        <Input
          className="mt-1.5"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+234 ..."
        />
      </div>
      <div>
        <Label>Note</Label>
        <Input
          className="mt-1.5"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Inquiry, request, source..."
        />
      </div>
      <Button type="submit" className="w-full">
        <Plus className="h-4 w-4" />
        Add Lead
      </Button>
    </form>
  );
}

function SubscriberForm({ onAdd }: { onAdd: (item: ManagedSubscriber) => void }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    onAdd({
      id: uniqueId(),
      email: email.trim(),
      date: new Date().toISOString(),
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="subscriber@example.com"
        required
      />
      <Button type="submit" size="sm">
        <Plus className="h-4 w-4" />
        Add
      </Button>
    </form>
  );
}

function BookingsTab({
  bookings,
  onDelete,
}: {
  bookings: BookingRequest[];
  onDelete: (index: number, booking: BookingRequest) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>Bookings</CardTitle>
          <p className="mt-1 text-sm text-charcoal-light">
            Requests stored locally in this browser.
          </p>
        </div>
        <Badge>{bookings.length}</Badge>
      </CardHeader>
      <CardContent>
        {bookings.length === 0 ? (
          <EmptyState message="No bookings yet. New requests recorded on the site will appear here." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[940px] text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 text-[0.7rem] uppercase tracking-wider text-charcoal-light">
                  <th className="pb-3 pr-3 font-semibold">Guest</th>
                  <th className="pb-3 pr-3 font-semibold">Phone</th>
                  <th className="pb-3 pr-3 font-semibold">Check-in</th>
                  <th className="pb-3 pr-3 font-semibold">Check-out</th>
                  <th className="pb-3 pr-3 font-semibold">Guests</th>
                  <th className="pb-3 pr-3 font-semibold">Room</th>
                  <th className="pb-3 pr-3 font-semibold">Reference</th>
                  <th className="pb-3 pr-3 font-semibold">Total</th>
                  <th className="pb-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={b.reference ?? `${b.name}-${i}`} className="border-b border-charcoal/5 align-top">
                    <td className="py-3 pr-3 font-semibold text-charcoal">
                      {b.name}
                      <span className="block text-xs font-normal text-charcoal-light/70">
                        {b.email}
                      </span>
                    </td>
                    <td className="py-3 pr-3">{b.phone}</td>
                    <td className="py-3 pr-3">{formatDate(b.checkIn)}</td>
                    <td className="py-3 pr-3">{formatDate(b.checkOut)}</td>
                    <td className="py-3 pr-3">{b.guests}</td>
                    <td className="py-3 pr-3">{getRoom(b.roomSlug)?.name ?? b.roomSlug}</td>
                    <td className="py-3 pr-3 font-mono text-xs text-charcoal-light">
                      {b.reference ?? "—"}
                    </td>
                    <td className="py-3 pr-3 font-semibold text-charcoal">
                      {b.total ? formatNaira(b.total) : "—"}
                    </td>
                    <td className="py-3 text-right">
                      <DeleteButton onClick={() => onDelete(i, b)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TestimonialsTab({
  items,
  onDelete,
  onAdd,
}: {
  items: ManagedTestimonial[];
  onDelete: (id: string) => void;
  onAdd: (item: ManagedTestimonial) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Testimonials</CardTitle>
            <p className="mt-1 text-sm text-charcoal-light">{items.length} guest reviews</p>
          </div>
          <Badge>{items.length}</Badge>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <EmptyState message="No testimonials yet. Add one from the form." />
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {items.map((t) => (
                <li key={t.id} className="flex items-start gap-4 py-4">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-charcoal">{t.name}</p>
                      <span className="text-xs text-charcoal-light/70">{t.role}</span>
                    </div>
                    <div className="mt-0.5">
                      <Stars value={t.rating} />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{t.text}</p>
                  </div>
                  <DeleteButton onClick={() => onDelete(t.id)} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Add Testimonial</CardTitle>
        </CardHeader>
        <CardContent>
          <TestimonialForm onAdd={onAdd} />
        </CardContent>
      </Card>
    </div>
  );
}

function OffersTab({
  items,
  onDelete,
  onAdd,
}: {
  items: ManagedOffer[];
  onDelete: (slug: string) => void;
  onAdd: (item: Offer) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Offers & Packages</CardTitle>
            <p className="mt-1 text-sm text-charcoal-light">{items.length} active offers</p>
          </div>
          <Badge>{items.length}</Badge>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <EmptyState message="No offers yet. Add one from the form." />
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {items.map((o) => (
                <li key={o.slug} className="flex items-start gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{o.badge}</Badge>
                      {o.code && <Badge variant="dark">{o.code}</Badge>}
                    </div>
                    <p className="mt-2 font-semibold text-charcoal">{o.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-light">
                      {o.description || "No description provided."}
                    </p>
                  </div>
                  <DeleteButton onClick={() => onDelete(o.slug)} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Add Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <OfferForm onAdd={onAdd} />
        </CardContent>
      </Card>
    </div>
  );
}

function FaqsTab({
  items,
  onDelete,
  onAdd,
}: {
  items: ManagedFaq[];
  onDelete: (id: string) => void;
  onAdd: (item: ManagedFaq) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>FAQs</CardTitle>
            <p className="mt-1 text-sm text-charcoal-light">{items.length} questions</p>
          </div>
          <Badge>{items.length}</Badge>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <EmptyState message="No FAQs yet. Add one from the form." />
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {items.map((f) => (
                <li key={f.id} className="flex items-start gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1">
                      <Badge variant="cream">{f.category}</Badge>
                    </div>
                    <p className="font-semibold text-charcoal">{f.question}</p>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{f.answer}</p>
                  </div>
                  <DeleteButton onClick={() => onDelete(f.id)} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Add FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <FaqForm onAdd={onAdd} />
        </CardContent>
      </Card>
    </div>
  );
}

function BlogTab({
  items,
  onDelete,
}: {
  items: BlogPost[];
  onDelete: (slug: string) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>Blog Posts</CardTitle>
          <p className="mt-1 text-sm text-charcoal-light">
            Read-only preview — site posts are static, deleting only hides them here.
          </p>
        </div>
        <Badge>{items.length}</Badge>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <EmptyState message="No blog posts in this store." />
        ) : (
          <ul className="divide-y divide-charcoal/5">
            {items.map((p) => (
              <li key={p.slug} className="flex items-start gap-4 py-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cream">{p.category}</Badge>
                    <span className="text-xs text-charcoal-light/70">
                      {formatDate(p.date)} · {p.readTime}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold text-charcoal">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{p.excerpt}</p>
                  <p className="mt-1 font-mono text-xs text-charcoal-light/60">{p.slug}</p>
                </div>
                <DeleteButton onClick={() => onDelete(p.slug)} />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function LeadsTab({
  leads,
  subscribers,
  onDeleteLead,
  onDeleteSubscriber,
  onAddLead,
  onAddSubscriber,
}: {
  leads: ManagedLead[];
  subscribers: ManagedSubscriber[];
  onDeleteLead: (id: string) => void;
  onDeleteSubscriber: (id: string) => void;
  onAddLead: (item: ManagedLead) => void;
  onAddSubscriber: (item: ManagedSubscriber) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Contact Leads</CardTitle>
            <p className="mt-1 text-sm text-charcoal-light">{leads.length} leads captured</p>
          </div>
          <Badge>{leads.length}</Badge>
        </CardHeader>
        <CardContent>
          <div className="mb-5 rounded-xl border border-gold/30 bg-gold/10 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
              Manually add lead
            </p>
            <LeadForm onAdd={onAddLead} />
          </div>
          {leads.length === 0 ? (
            <EmptyState message="No contact leads yet." />
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {leads.map((l) => (
                <li key={l.id} className="flex items-start gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-charcoal">{l.name}</p>
                      <span className="text-xs text-charcoal-light/70">{formatDateTime(l.date)}</span>
                    </div>
                    <p className="text-sm text-charcoal-light">{l.email}</p>
                    {l.phone && <p className="text-sm text-charcoal-light">{l.phone}</p>}
                    {l.note && (
                      <p className="mt-1 text-sm text-charcoal-light/80 italic">{l.note}</p>
                    )}
                  </div>
                  <DeleteButton onClick={() => onDeleteLead(l.id)} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Newsletter Subscribers</CardTitle>
            <p className="mt-1 text-sm text-charcoal-light">{subscribers.length} emails subscribed</p>
          </div>
          <Badge>{subscribers.length}</Badge>
        </CardHeader>
        <CardContent>
          <div className="mb-5 rounded-xl border border-gold/30 bg-gold/10 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
              Manually add subscriber
            </p>
            <SubscriberForm onAdd={onAddSubscriber} />
          </div>
          {subscribers.length === 0 ? (
            <EmptyState message="No newsletter subscribers yet." />
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {subscribers.map((s) => (
                <li key={s.id} className="flex items-center gap-4 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-charcoal">{s.email}</p>
                    <p className="text-xs text-charcoal-light/70">{formatDateTime(s.date)}</p>
                  </div>
                  <DeleteButton onClick={() => onDeleteSubscriber(s.id)} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

const TAB_DEFS: { key: TabKey; label: string; icon: LucideIcon }[] = [
  { key: "bookings", label: "Bookings", icon: CalendarCheck },
  { key: "leads", label: "Contact Leads", icon: UserRound },
  { key: "testimonials", label: "Testimonials", icon: Star },
  { key: "offers", label: "Offers", icon: Gift },
  { key: "faqs", label: "FAQs", icon: CircleHelp },
  { key: "blog", label: "Blog Posts", icon: FileText },
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<TabKey>("bookings");

  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [waCount, setWaCount] = useState(0);

  const [testimonials, setTestimonials] =
    usePersistedStore<ManagedTestimonial>(TESTIMONIALS_KEY, testimonialSeedManaged);
  const [offers, setOffers] = usePersistedStore<ManagedOffer>(OFFERS_KEY, offerSeed);
  const [faqs, setFaqs] = usePersistedStore<ManagedFaq>(FAQS_KEY, faqSeedManaged);
  const [blogPosts, setBlogPosts] = usePersistedStore<BlogPost>(BLOG_KEY, blogSeed);
  const [leads, setLeads] = usePersistedStore<ManagedLead>(LEADS_KEY, []);
  const [subscribers, setSubscribers] =
    usePersistedStore<ManagedSubscriber>(NEWSLETTER_KEY, []);

  useEffect(() => {
    setAuthed(getAuth());
    setBookings(listBookings());
    setWaCount(readCounter(WA_COUNT_KEY));
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (passcode === PASSCODE) {
      setAuth(true);
      setAuthed(true);
      setPasscode("");
      setError("");
    } else {
      setError("Incorrect passcode. Please try again.");
    }
  };

  const handleSignOut = () => {
    setAuth(false);
    setAuthed(false);
  };

  const handleDeleteBooking = (index: number, booking: BookingRequest) => {
    if (!window.confirm(`Delete booking for ${booking.name}?`)) return;
    const next = listBookings().filter((_, i) => i !== index);
    writeStore(BOOKS_KEY, next);
    setBookings(next);
  };

  const handleDeleteTestimonial = (id: string) => {
    if (!window.confirm("Delete this testimonial?")) return;
    setTestimonials(removeItem<ManagedTestimonial>(TESTIMONIALS_KEY, { id }));
  };

  const handleDeleteOffer = (slug: string) => {
    if (!window.confirm("Delete this offer?")) return;
    setOffers(removeItem<ManagedOffer>(OFFERS_KEY, { slug }));
  };

  const handleDeleteFaq = (id: string) => {
    if (!window.confirm("Delete this FAQ?")) return;
    setFaqs(removeItem<ManagedFaq>(FAQS_KEY, { id }));
  };

  const handleDeleteBlog = (slug: string) => {
    if (!window.confirm("Delete this blog post from the admin list?")) return;
    setBlogPosts(removeItem<BlogPost>(BLOG_KEY, { slug }));
  };

  const handleDeleteLead = (id: string) => {
    if (!window.confirm("Delete this contact lead?")) return;
    setLeads(removeItem<ManagedLead>(LEADS_KEY, { id }));
  };

  const handleDeleteSubscriber = (id: string) => {
    if (!window.confirm("Remove this subscriber?")) return;
    setSubscribers(removeItem<ManagedSubscriber>(NEWSLETTER_KEY, { id }));
  };

  const handleBumpWa = () => {
    setWaCount((c) => {
      const next = c + 1;
      writeCounter(WA_COUNT_KEY, next);
      return next;
    });
  };

  if (!authed) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-night px-4 py-16">
        <Card className="w-full max-w-md border border-gold/30 bg-charcoal-dark text-cream">
          <CardHeader className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              The DEN by Da Golden Chimney
            </p>
            <CardTitle className="mt-2 text-3xl text-cream">Admin Sign In</CardTitle>
            <p className="mt-2 text-sm text-cream/60">
              Enter your passcode to manage the portal.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label className="text-cream/80">Passcode</Label>
                <Input
                  type="password"
                  className="mt-1.5"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <Button type="submit" className="w-full">
                Enter Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-cream-light">
      <header className="border-b border-gold/30 bg-night px-4 py-5 text-cream sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Admin Portal
            </p>
            <h1 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              The DEN Admin
            </h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </header>

      <main className="lux-container py-10">
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={CalendarCheck} label="Total Bookings" value={bookings.length} />
          <StatCard icon={UserRound} label="Contact Leads" value={leads.length} />
          <StatCard icon={Mail} label="Newsletter Subscribers" value={subscribers.length} />
          <StatCard icon={MessageCircle} label="WhatsApp CTAs" value={waCount}>
            <button
              type="button"
              onClick={handleBumpWa}
              aria-label="Increment WhatsApp clicks"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-night"
            >
              <Plus className="h-4 w-4" />
            </button>
          </StatCard>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {TAB_DEFS.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors",
                  tab === t.key
                    ? "bg-night text-gold shadow-lg"
                    : "border border-charcoal/10 bg-white text-charcoal hover:bg-cream-dark"
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "bookings" && <BookingsTab bookings={bookings} onDelete={handleDeleteBooking} />}
        {tab === "leads" && (
          <LeadsTab
            leads={leads}
            subscribers={subscribers}
            onDeleteLead={handleDeleteLead}
            onDeleteSubscriber={handleDeleteSubscriber}
            onAddLead={(item) => setLeads(addItem(LEADS_KEY, item, []))}
            onAddSubscriber={(item) => setSubscribers(addItem(NEWSLETTER_KEY, item, []))}
          />
        )}
        {tab === "testimonials" && (
          <TestimonialsTab
            items={testimonials}
            onDelete={handleDeleteTestimonial}
            onAdd={(item) => setTestimonials(addItem(TESTIMONIALS_KEY, item, testimonialSeedManaged))}
          />
        )}
        {tab === "offers" && (
          <OffersTab
            items={offers}
            onDelete={handleDeleteOffer}
            onAdd={(item) => setOffers(addItem(OFFERS_KEY, item, offerSeed))}
          />
        )}
        {tab === "faqs" && (
          <FaqsTab
            items={faqs}
            onDelete={handleDeleteFaq}
            onAdd={(item) => setFaqs(addItem(FAQS_KEY, item, faqSeedManaged))}
          />
        )}
        {tab === "blog" && <BlogTab items={blogPosts} onDelete={handleDeleteBlog} />}
      </main>
    </div>
  );
}