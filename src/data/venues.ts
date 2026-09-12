export interface Venue {
  slug: string;
  name: string;
  rate: number;
  capacity: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
}

export const venues: Venue[] = [
  {
    slug: "meeting-room",
    name: "Meeting Room",
    rate: 800000,
    capacity: "Up to 50 Persons",
    description:
      "A focused, professional space for board meetings, interviews, trainings and corporate sessions, equipped with conferencing essentials and attentive service.",
    features: [
      "Seats up to 50 guests",
      "Conference seating arrangement",
      "Projector & presentation screen",
      "High-speed WiFi",
      "Whiteboard & flip chart",
      "Air conditioning",
      "Refreshment service on request",
      "Dedicated event staff",
    ],
    image: "/images/raw/meeting_room_1.jpeg",
    images: ["/images/raw/meeting_room_1.jpeg", "/images/raw/meeting_room_2.jpeg", "/images/raw/meeting_room_3.jpeg"],
  },
  {
    slug: "conference-hall",
    name: "Conference Hall",
    rate: 1000000,
    capacity: "Up to 150 Persons",
    description:
      "Our flagship conference hall for seminars, summits, corporate launches and large meetings — with AV support and versatile seating for a truly professional event.",
    features: [
      "Spacious hall configuration",
      "Stage & podium set-up",
      "Sound system & microphones",
      "Projector & large screens",
      "Flexible seating layouts",
      "High-speed WiFi",
      "Air conditioning",
      "Catering & refreshments available",
      "Event coordination team",
    ],
    image: "/images/raw/conference_room_1.jpeg",
    images: ["/images/raw/conference_room_1.jpeg", "/images/raw/conference_room_2.jpeg", "/images/raw/meeting_room_3.jpeg"],
  },
  {
    slug: "swimming-pool-hall",
    name: "Swimming Pool Hall",
    rate: 800000,
    capacity: "Up to 100 Persons",
    description:
      "A uniquely stylish venue for weddings, birthdays, cocktail receptions and poolside celebrations — combining glamour, ambience and a private pool setting.",
    features: [
      "Private poolside ambience",
      "Beautiful evening lighting",
      "Event decorations support",
      "High-quality sound system",
      "Catering & bar service",
      "Air conditioning indoor area",
      "Valet & event staff",
      "Photography-friendly setting",
    ],
    image: "/images/raw/pool_1.jpeg",
    images: ["/images/raw/pool_1.jpeg", "/images/raw/pool_2.jpeg", "/images/raw/landingpage.jpeg"],
  },
];

export function getVenue(slug: string) {
  return venues.find((v) => v.slug === slug);
}