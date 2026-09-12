import { Instagram } from "lucide-react";

import { site } from "@/lib/site";
import { SectionHeading } from "@/components/shared/SectionHeading";

const posts = [
  { src: "/images/raw/cert_2.png", alt: "The DEN Instagram post" },
  { src: "/images/raw/food_1.jpeg", alt: "Nigerian cuisine at The DEN restaurant" },
  { src: "/images/raw/pool_1.jpeg", alt: "Swimming pool hall at night" },
  { src: "/images/raw/room_2.jpeg", alt: "Executive Deluxe bedroom" },
  { src: "/images/raw/meeting_room_3.jpeg", alt: "Meeting room setup" },
  { src: "/images/raw/bar_3.jpeg", alt: "Hotel bar lounge" },
];

export function InstagramFeed() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="lux-container">
        <SectionHeading
          eyebrow={site.instagramHandle}
          title="Follow Our Story"
          description="Daily moments from The DEN — rooms, food, events and life in Wuse 2, Abuja."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.src + post.alt}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-night/0 transition-colors duration-300 group-hover:bg-night/50">
                <Instagram className="h-8 w-8 text-transparent transition-colors duration-300 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold"
          >
            <Instagram className="h-4 w-4" />
            Follow {site.instagramHandle} on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}