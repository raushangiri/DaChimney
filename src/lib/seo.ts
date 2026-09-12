import { site } from "@/lib/site";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.brand} | Luxury Boutique Hotel & Restaurant in Abuja`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "hotels in Abuja",
    "best hotel in Abuja",
    "boutique hotel Abuja",
    "luxury hotel Abuja",
    "hotel in Wuse Abuja",
    "hotel near Wuse 2",
    "affordable hotel Abuja",
    "conference hall Abuja",
    "event venue Abuja",
    "business hotel Abuja",
    "restaurant Abuja",
    "accommodation Abuja",
    "weekend stay Abuja",
    "hotel booking Abuja",
    "hotel near me Abuja",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.domain,
    siteName: site.brand,
    title: `${site.brand} | Luxury Boutique Hotel & Restaurant in Abuja`,
    description: site.description,
    images: ["/images/raw/bg-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | Luxury Boutique Hotel & Restaurant in Abuja`,
    description: site.description,
    images: ["/images/raw/bg-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};