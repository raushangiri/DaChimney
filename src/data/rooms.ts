export interface Room {
  slug: string;
  name: string;
  tagline: string;
  weekdayRate: number;
  weekendRate: number;
  capacity: number;
  size: string;
  bed: string;
  image: string;
  images: string[];
  amenities: string[];
  features: string[];
  description: string;
  longDescription: string;
  popular?: boolean;
}

export const rooms: Room[] = [
  {
    slug: "studio-room",
    name: "Studio Room",
    tagline: "Thoughtful comfort for the modern traveller",
    weekdayRate: 50000,
    weekendRate: 40000,
    capacity: 2,
    size: "32 m²",
    bed: "King or Two Twin Beds",
    image: "/images/raw/bedroom_1.jpeg",
    images: ["/images/raw/bedroom_1.jpeg", "/images/raw/room_2.jpeg", "/images/raw/table_1.jpeg"],
    amenities: [
      "Free High-Speed WiFi",
      "Complimentary Breakfast",
      "Air Conditioning",
      "Smart TV",
      "City View",
      "En-suite Bathroom",
      "Daily Housekeeping",
      "Work Desk",
      "Tea & Coffee Station",
      "Blackout Curtains",
    ],
    features: [
      "Plush king bedding",
      "Rain shower",
      "Reading light",
      "In-room safe",
      "Room service 24/7",
      "Iron & ironing board on request",
    ],
    description:
      "Our Studio Room is an inviting retreat designed for business travellers and couples seeking genuine comfort in the heart of Wuse 2, Abuja.",
    longDescription:
      "The Studio Room balances refined design with every essential for a productive, restful stay. Wake up to complimentary breakfast, stay connected on fibre-fast WiFi, and unwind in premium cotton bedding before stepping into the vibrant heart of Abuja. Located minutes from banks, embassies and corporate offices in Wuse 2, it is the smart home base for both business and leisure.",
  },
  {
    slug: "executive-deluxe",
    name: "Executive Deluxe",
    tagline: "Space, light and executive comfort",
    weekdayRate: 80000,
    weekendRate: 60000,
    capacity: 3,
    size: "42 m²",
    bed: "King Bed + Sofa Bed",
    image: "/images/raw/room_2.jpeg",
    images: ["/images/raw/room_2.jpeg", "/images/raw/room_1.jpeg", "/images/raw/bedroom_1.jpeg"],
    amenities: [
      "Free High-Speed WiFi",
      "Complimentary Breakfast",
      "Air Conditioning",
      "Smart TV",
      "Seating Lounge Area",
      "En-suite Bathroom",
      "Daily Housekeeping",
      "Executive Work Desk",
      "Mini Bar",
      "Tea & Coffee Station",
      "Blackout Curtains",
      "Room Service",
    ],
    features: [
      "Separate lounge seating",
      "Rain shower",
      "In-room safe",
      "Luggage service",
      "Late checkout on request",
      "Newspaper on request",
    ],
    description:
      "The Executive Deluxe offers generous space, a private lounge area and elevated comfort — ideal for executives, families and longer stays in Abuja.",
    longDescription:
      "Step into a room that feels like a personal suite. The Executive Deluxe pairs a plush king bed with a stylish lounge seating area, a dedicated executive work desk and a mini bar — everything a discerning professional needs. With Wuse 2's commercial district on your doorstep and our restaurant, pool hall and conference facilities within the hotel, you never have to travel far to be productive, well-fed or truly relaxed.",
  },
  {
    slug: "suite",
    name: "Suite",
    tagline: "A private sanctuary of space and style",
    weekdayRate: 150000,
    weekendRate: 120000,
    capacity: 4,
    size: "58 m²",
    bed: "King Bed + Lounge",
    image: "/images/raw/room_3.jpeg",
    images: ["/images/raw/room_3.jpeg", "/images/raw/Room_3.jpeg", "/images/raw/landing_page_2.jpeg"],
    amenities: [
      "Free High-Speed WiFi",
      "Complimentary Breakfast",
      "Air Conditioning",
      "Separate Living Area",
      "Smart TV",
      "En-suite Bathroom",
      "Daily Housekeeping",
      "Personal Workstation",
      "Mini Bar",
      "Tea & Coffee Station",
      "Room Service",
      "Concierge Assistance",
    ],
    features: [
      "Separate living & bedroom",
      "Premium amenities",
      "Early check-in on request",
      "Late checkout on request",
      "Airport pickup arrangement",
      "Private dining option",
    ],
    description:
      "Our Suite is a spacious private sanctuary — a beautiful balance of living space, work space and serene luxury for families and VIP guests.",
    longDescription:
      "Designed for guests who want room to breathe, the Suite separates your sleeping quarters from a gracious living area, perfect for entertaining colleagues, hosting small meetings or simply stretching out in total comfort. Enjoy concierge assistance, generous bathrooms, and seamless access to the hotel's restaurant, bar, pool hall and event venues. It is the definitive premium stay in Wuse 2, Abuja.",
  },
  {
    slug: "penthouse",
    name: "Penthouse",
    tagline: "The crowning luxury of The DEN",
    weekdayRate: 150000,
    weekendRate: 120000,
    capacity: 4,
    size: "68 m²",
    bed: "King Bed + Private Lounge",
    image: "/images/raw/landing_page_2.jpeg",
    images: ["/images/raw/landing_page_2.jpeg", "/images/raw/room_1.jpeg", "/images/raw/pool_2.jpeg"],
    amenities: [
      "Free High-Speed WiFi",
      "Complimentary Breakfast",
      "Air Conditioning",
      "Private Lounge",
      "Smart TV",
      "En-suite Bathroom",
      "Daily Housekeeping",
      "Dedicated Workspace",
      "Mini Bar",
      "Concierge Service",
      "Room Service",
      "Priority Reservations",
    ],
    features: [
      "Top-floor privacy",
      "Private lounge & dining",
      "VIP welcome amenities",
      "Dedicated concierge",
      "Curated turndown service",
      "Priority restaurant & event bookings",
    ],
    description:
      "The Penthouse crowns The DEN — a top-floor hideaway of exceptional space, privacy and VIP attention for the most discerning guests.",
    longDescription:
      "For honeymoons, celebrity stays and distinguished guests, the Penthouse delivers a level of service that anticipates your every need. Spread across a generous floor plan with a private lounge, VIP amenities and dedicated concierge, it is the most exclusive address in our boutique hotel. From curated turndown service to priority access at the restaurant and event halls, every detail is orchestrated around you.",
  },
];

export function getRoom(slug: string) {
  return rooms.find((r) => r.slug === slug);
}

export const roomTypeOptions = rooms.map((r) => ({
  value: r.slug,
  label: r.name,
}));