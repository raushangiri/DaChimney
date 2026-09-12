export interface Offer {
  slug: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
  image: string;
  code?: string;
}

export const offers: Offer[] = [
  {
    slug: "weekend-escape",
    title: "Weekend Escape Package",
    badge: "Most Popular",
    description:
      "Unwind in Wuse 2 with exclusive weekend rates across all room categories — from ₦40,000 for the Studio to ₦120,000 for our Suites and Penthouse.",
    details: [
      "Weekend room rates from ₦40,000",
      "Complimentary breakfast included",
      "Late checkout on request",
      "Free access to hotel facilities",
    ],
    image: "/images/raw/bedroom_1.jpeg",
    code: "WEEKEND",
  },
  {
    slug: "airport-pickup-combo",
    title: "Airport Pickup + Stay Bundle",
    badge: "Travel Smart",
    description:
      "Arrive seamlessly — combine your room reservation with a chauffeured airport pickup and enjoy one complimentary pickup per stay.",
    details: [
      "Chauffeured pickup from Nnamdi Azikiwe International Airport",
      "Meet & greet at arrivals",
      "Apply to stays of 2 nights or more",
      "Complete your details at booking",
    ],
    image: "/images/raw/landing_page_1.jpeg",
  },
  {
    slug: "event-weekday",
    title: "Corporate Event Weekday Rates",
    badge: "Business",
    description:
      "Host smarter. Book the Meeting Room, Conference Hall or Pool Hall on weekdays and enjoy discounted venue rates plus free projector and WiFi.",
    details: [
      "Discounted weekday venue rates",
      "Free projector & sound system",
      "Complimentary refreshments for 10+ guests",
      "Dedicated event coordinator",
    ],
    image: "/images/raw/conference_room_1.jpeg",
  },
  {
    slug: "long-stay",
    title: "Long Stay Privilege",
    badge: "Best Value",
    description:
      "Staying a week or more? Enjoy preferred rates on Executive Deluxe and Suite rooms with weekly housekeeping, laundry and breakfast included.",
    details: [
      "Preferred rates on stays of 7+ nights",
      "Complimentary breakfast daily",
      "Laundry service twice weekly",
      "Priority room upgrades when available",
    ],
    image: "/images/raw/room_2.jpeg",
  },
];