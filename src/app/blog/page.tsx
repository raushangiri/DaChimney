import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { posts, blogCategories } from "@/data/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Hotels, Travel & Dining Insights for Abuja",
  description:
    "Expert guides and insider tips on hotel stays, business travel, things to do in Abuja and Nigerian cuisine — from the team at The DEN by Da Golden Chimney.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The DEN Blog — Hotels, Travel & Dining in Abuja",
          url: "https://dachimney.netlify.app/blog",
          blogPost: posts.map((p) => `https://dachimney.netlify.app/blog/${p.slug}`),
        }}
      />
      <PageHero
        title="The DEN Journal"
        subtitle="Guides, insights and stories on staying, dining and exploring Abuja like a local."
        image="/images/raw/blog_1.jpg"
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />

      <section className="lux-container py-14 md:py-20">
        <div className="mb-8 flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <span key={c} className="rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-charcoal">
              {c}
            </span>
          ))}
        </div>

        <Link href={`/blog/${featured.slug}`} className="lux-card group mb-10 grid overflow-hidden lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden lg:h-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">{featured.category}</p>
            <h2 className="mb-3 text-2xl font-bold text-charcoal-dark md:text-3xl">{featured.title}</h2>
            <p className="mb-5 leading-relaxed text-charcoal-light">{featured.excerpt}</p>
            <div className="mb-5 flex items-center gap-4 text-xs text-charcoal-light">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-gold" /> {fmt(featured.date)}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-gold" /> {featured.readTime}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark group-hover:gap-2 transition-all">
              Read Full Article <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <SectionHeading eyebrow="Editor's Picks" title="Latest Articles" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="lux-card group flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-night/70 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-bold text-charcoal-dark line-clamp-2 group-hover:text-gold-dark">
                  {p.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-charcoal-light">{p.excerpt}</p>
                <div className="mt-auto flex items-center justify-between border-t border-charcoal/10 pt-3 text-xs text-charcoal-light">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-gold" /> {fmt(p.date)}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-gold" /> {p.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-charcoal-dark p-8 text-center text-cream">
          <h3 className="mb-2 text-2xl font-bold font-display">Experience it yourself</h3>
          <p className="mb-5 text-sm text-cream/75">
            Reading about Abuja is nice — staying at {site.brand} is better.
          </p>
          <Link href="/booking" className="btn-gold">Book Your Stay</Link>
        </div>
      </section>
    </>
  );
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}