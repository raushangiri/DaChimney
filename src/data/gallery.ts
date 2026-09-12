export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

export const galleryCategories = [
  "Rooms",
  "Restaurant",
  "Events",
  "Hotel Exterior",
  "Hotel Interior",
  "Facilities",
  "Conference Hall",
  "Swimming Pool",
] as const;

export const gallery: GalleryItem[] = [
  { src: "/images/raw/bg-hero.jpg", alt: "Da Chimney Boutique Hotel exterior at dusk", category: "Hotel Exterior" },
  { src: "/images/raw/landingpage.jpeg", alt: "The DEN hotel entrance and reception view", category: "Hotel Exterior" },
  { src: "/images/raw/landing_page_1.jpeg", alt: "Luxury hotel lounge and lobby", category: "Hotel Interior" },
  { src: "/images/raw/landing_page_2.jpeg", alt: "Penthouse suite living space", category: "Rooms" },
  { src: "/images/raw/bedroom_1.jpeg", alt: "Studio room with king bed", category: "Rooms" },
  { src: "/images/raw/room_1.jpeg", alt: "Executive room with elegant bedding", category: "Rooms" },
  { src: "/images/raw/room_2.jpeg", alt: "Executive Deluxe room seating area", category: "Rooms" },
  { src: "/images/raw/room_3.jpeg", alt: "Luxury suite bedroom", category: "Rooms" },
  { src: "/images/raw/Room_3.jpeg", alt: "Suite with premium furnishings", category: "Rooms" },
  { src: "/images/raw/pool_1.jpeg", alt: "Swimming pool hall venue", category: "Swimming Pool" },
  { src: "/images/raw/pool_2.jpeg", alt: "Poolside event space at night", category: "Swimming Pool" },
  { src: "/images/raw/conference_room_1.jpeg", alt: "Conference hall in Abuja", category: "Conference Hall" },
  { src: "/images/raw/conference_room_2.jpeg", alt: "Conference hall seating setup", category: "Conference Hall" },
  { src: "/images/raw/meeting_room_1.jpeg", alt: "Corporate meeting room", category: "Events" },
  { src: "/images/raw/meeting_room_2.jpeg", alt: "Meeting room executive setup", category: "Events" },
  { src: "/images/raw/meeting_room_3.jpeg", alt: "Board meeting venue", category: "Events" },
  { src: "/images/raw/daining_table_1.jpeg", alt: "Restaurant dining table setting", category: "Restaurant" },
  { src: "/images/raw/menu-1.jpg", alt: "Continental dish at the restaurant", category: "Restaurant" },
  { src: "/images/raw/food_1.jpeg", alt: "Nigerian cuisine platter", category: "Restaurant" },
  { src: "/images/raw/food_2.jpeg", alt: "Grilled delicacy served fresh", category: "Restaurant" },
  { src: "/images/raw/food_3.jpeg", alt: "Chef's special meal presentation", category: "Restaurant" },
  { src: "/images/raw/food_4.jpeg", alt: "Seafood dish at The DEN", category: "Restaurant" },
  { src: "/images/raw/food_5.jpeg", alt: "Signature restaurant starter", category: "Restaurant" },
  { src: "/images/raw/food_6.jpeg", alt: "Continental breakfast spread", category: "Restaurant" },
  { src: "/images/raw/bar_1.jpeg", alt: "Hotel bar and lounge", category: "Hotel Interior" },
  { src: "/images/raw/bar_2.jpeg", alt: "Premium bar counter", category: "Hotel Interior" },
  { src: "/images/raw/bar_3.jpeg", alt: "Bar lounge seating", category: "Hotel Interior" },
  { src: "/images/raw/gallary_1.jpeg", alt: "Hotel ambiance gallery", category: "Hotel Interior" },
  { src: "/images/raw/gallary_2.jpeg", alt: "Interior lounge corners", category: "Hotel Interior" },
  { src: "/images/raw/gallary_3.jpeg", alt: "Reception and service area", category: "Hotel Interior" },
];