import Link from "next/link";
import { Home, ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-night px-4 text-center text-cream">
      <p className="mb-3 font-display text-7xl font-bold text-gold md:text-9xl">404</p>
      <h1 className="mb-3 text-2xl font-bold md:text-3xl">Page Not Found</h1>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-cream/70">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
        back to the comfort of The DEN.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-gold">
          <Home className="h-4 w-4" /> Back to Home
        </Link>
        <Link href="/booking" className="btn-outline-gold !border-gold !text-cream">
          <ArrowLeft className="h-4 w-4" /> Book a Stay
        </Link>
        <a
          href="https://wa.me/2348050779933"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-cream/10"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>
    </section>
  );
}