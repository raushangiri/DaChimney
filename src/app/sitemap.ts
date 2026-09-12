import type { MetadataRoute } from "next";

import { site } from "@/lib/site";
import { rooms } from "@/data/rooms";
import { venues } from "@/data/venues";
import { posts } from "@/data/blog";
import { locations } from "@/data/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
    { path: "/restaurant", priority: 0.8, changeFrequency: "weekly" },
    { path: "/events", priority: 0.8, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.5, changeFrequency: "monthly" },
    { path: "/special-offers", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/booking", priority: 0.9, changeFrequency: "monthly" },
    { path: "/airport-pickup", priority: 0.6, changeFrequency: "monthly" },
    { path: "/abuja-travel-guide", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
    { path: "/locations", priority: 0.7, changeFrequency: "monthly" },
  ];

  const roomPages = rooms.map((r) => ({
    url: `${base}/rooms/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const eventPages = venues.map((v) => ({
    url: `${base}/events#${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const locationPages = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...roomPages,
    ...eventPages,
    ...blogPages,
    ...locationPages,
  ];
}