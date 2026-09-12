import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": absoluteUrl("/#hotel"),
    name: site.name,
    alternateName: site.brand,
    description: site.description,
    url: site.domain,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "₦40,000 - ₦150,000",
    currency: "NGN",
    checkinTime: "14:00",
    checkoutTime: "12:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.area,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsLink,
    image: [absoluteUrl("/images/raw/bg-hero.jpg")],
    amenityFeature: [
      amenity("Free WiFi", "Free Wifi"),
      amenity("Complimentary Breakfast", "Breakfast"),
      amenity("24/7 Reception", "24-Hour Concierge"),
      amenity("Secure Parking", "Parking"),
      amenity("Restaurant & Bar", "Restaurant"),
      amenity("Conference Facilities", "Conference"),
      amenity("Airport Transfer", "Transfer Service"),
      amenity("Swimming Pool Hall", "Swimming Pool"),
    ],
    sameAs: [site.instagram, site.facebook],
    addressLocality: "Wuse 2",
  };
}

function amenity(name: string, value: string) {
  return {
    "@type": "LocationFeatureSpecification",
    name,
    value,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "FoodEstablishment", "LocalBusiness"],
    name: site.name,
    alternateName: site.brand,
    telephone: site.phoneIntl,
    email: site.email,
    url: site.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.area,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "NG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₦₦₦",
    image: absoluteUrl("/images/raw/bg-hero.jpg"),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: site.domain,
    name: site.brand,
    description: site.description,
    publisher: { "@id": absoluteUrl("/#hotel") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.domain}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: site.domain,
    logo: absoluteUrl("/favicon.ico"),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "reservations",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
    sameAs: [site.instagram, site.facebook],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function reviewSchema(
  name: string,
  rating: number,
  reviews: { author: string; rating: number; text: string; date: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    category: "Hotel",
    brand: { "@type": "Brand", name: site.brand },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      bestRating: 5,
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(post.url),
  };
}