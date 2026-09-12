export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  content: string;
}

export const blogCategories = [
  "Hotels in Abuja",
  "Luxury Hotels Abuja",
  "Travel Abuja",
  "Business Travel Abuja",
  "Things To Do in Abuja",
  "Restaurant Abuja",
  "Conference Halls Abuja",
  "Weekend Getaways Abuja",
  "Tourism Nigeria",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "best-hotels-in-wuse-2-abuja",
    title: "The 7 Best Hotels in Wuse 2, Abuja (2026 Guide)",
    excerpt:
      "Looking for the best hotels in Wuse 2, Abuja? Here are our top-rated options for business travellers, families and luxury seekers in the Federal Capital Territory.",
    category: "Hotels in Abuja",
    author: "The DEN Editorial",
    date: "2026-08-25",
    image: "/images/raw/bg-hero.jpg",
    readTime: "6 min read",
    content:
      "Wuse 2 has quietly become Abuja's most desirable hotel location. With embassies, corporate headquarters, premium restaurants and a walkable commercial district, it attracts a calibre of traveller who demands excellence. At The DEN by Da Golden Chimney, we see this transformation every day — and we believe we are part of what makes Wuse 2 the best place to stay in Abuja.",
  },
  {
    slug: "weekend-getaway-guide-abuja",
    title: "The Ultimate Weekend Getaway Guide to Abuja",
    excerpt:
      "From Saturday brunch at The DEN to sunset at Jabi Lake, here is how to spend a perfect weekend in Abuja — including where to stay, eat and explore.",
    category: "Weekend Getaways Abuja",
    author: "The DEN Editorial",
    date: "2026-08-12",
    image: "/images/raw/pool_1.jpeg",
    readTime: "7 min read",
    content:
      "Abuja rewards the curious weekend traveller. Start with a sleep-in at The DEN, fuel up on our complimentary breakfast spread, and spend the afternoon exploring Millennium Park, the Nigerian National Mosque or the vibrant stalls of Wuse Market. Evening belongs to the restaurants and bars.",
  },
  {
    slug: "business-travel-abuja-complete-guide",
    title: "A Complete Business Travel Guide to Abuja in 2026",
    excerpt:
      "From airport pickup to conference rooms, hotels and restaurants — everything the working traveller needs to know about Abuja's business landscape.",
    category: "Business Travel Abuja",
    author: "The DEN Editorial",
    date: "2026-07-30",
    image: "/images/raw/conference_room_1.jpeg",
    readTime: "8 min read",
    content:
      "Abuja's role as Nigeria's political capital makes it one of Africa's busiest business destinations. The key to a productive trip is the right hotel: one that understands the urgency of a tight schedule and the need to decompress after hours. That is exactly what The DEN delivers.",
  },
  {
    slug: "top-things-to-do-abuja-nigeria",
    title: "Top 15 Things To Do in Abuja, Nigeria (2026)",
    excerpt:
      "Abuja has more to offer than you think. Here are the best landmarks, experiences and hidden gems you should see during your next visit to the Federal Capital.",
    category: "Things To Do in Abuja",
    author: "The DEN Editorial",
    date: "2026-07-18",
    image: "/images/raw/milestones.jpg",
    readTime: "9 min read",
    content:
      "Aso Rock, Zuma Rock, Millennium Park, National Mosque — everyone knows the landmarks. But Abuja's real magic lives in its local restaurants, its Sunday markets, its parks filled with families, and the way sunlight hits the hills at dusk. Explore the city, then come home to The DEN.",
  },
  {
    slug: "best-conference-halls-abuja-wuse",
    title: "Best Conference Halls in Abuja: Where to Host Your Next Corporate Event",
    excerpt:
      "Find the best conference hall in Abuja for your seminar, workshop or corporate event — with catering, AV support and professional event coordination.",
    category: "Conference Halls Abuja",
    author: "The DEN Editorial",
    date: "2026-06-28",
    image: "/images/raw/meeting_room_1.jpeg",
    readTime: "6 min read",
    content:
      "Choosing a conference hall in Abuja can be overwhelming. Beyond capacity and rate, look at lighting, sound quality, catering and the calibre of staff. The DEN offers a Meeting Room for 50 guests and a Conference Hall for up to 150 — both equipped with professional-grade AV and supported by a dedicated events team.",
  },
  {
    slug: "nigerian-restaurant-abuja-guide",
    title: "The Best Nigerian Restaurant in Abuja: What to Eat at The DEN",
    excerpt:
      "A guide to the most authentic Nigerian and continental dishes at The DEN restaurant in Wuse 2, Abuja — from jollof rice to international favourites.",
    category: "Restaurant Abuja",
    author: "The DEN Editorial",
    date: "2026-06-10",
    image: "/images/raw/food_1.jpeg",
    readTime: "5 min read",
    content:
      "Nigerian food is one of the world's great cuisines — and The DEN restaurant in Wuse 2 does it justice. Our kitchen celebrates jollof rice, suya, pounded yam, egusi soup and jollof rice alongside continental and international favourites. Every plate is prepared with pride.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}