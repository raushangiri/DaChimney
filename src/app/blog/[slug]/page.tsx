import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, MessageCircle, Share2 } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { posts, getPost } from "@/data/blog";
import { site, whatsappLinks } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "Abuja travel", "hotels in Abuja"],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({
            title: post.title,
            excerpt: post.excerpt,
            image: post.image,
            date: post.date,
            author: post.author,
            url: `/blog/${post.slug}`,
          }),
        ]}
      />
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${fmt(post.date)} · ${post.readTime}`}
        image={post.image}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.category, path: "/blog" },
        ]}
      />

      <article className="lux-container py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-charcoal-light">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-gold" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-gold" /> {fmt(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" /> {post.readTime}</span>
          </div>

          <div className="prose-narrow rounded-2xl border border-charcoal/10 bg-white p-6 md:p-10">
            <p className="mb-6 text-lg font-medium leading-relaxed text-charcoal-dark">{post.excerpt}</p>
            <div className="my-6 h-px bg-gradient-to-r from-gold/50 to-transparent" />
            <p className="leading-relaxed text-charcoal-light">{post.content}</p>

            <div className="mt-10 rounded-xl bg-cream p-6">
              <p className="mb-3 text-sm font-semibold text-charcoal-dark">
                Ready to experience Abuja at its finest?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/booking" className="btn-gold">Book Your Stay</Link>
                <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold">
              <ArrowLeft className="h-4 w-4" /> Back to Journal
            </Link>
            <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-light hover:text-gold-dark">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>

          <div className="mt-12">
            <h3 className="mb-5 text-xl font-bold text-charcoal-dark font-display">Related Reads</h3>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="lux-card group block">
                  <div className="h-36 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">{p.category}</p>
                    <p className="line-clamp-2 text-sm font-semibold text-charcoal-dark">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}