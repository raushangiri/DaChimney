export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Adaeze O.",
    role: "Business Traveller",
    rating: 5,
    text: "The DEN exceeded my expectations completely. Beautiful room, delicious Nigerian and continental breakfast, and a team that never stops smiling. Easily one of the best hotels in Wuse 2, Abuja.",
    date: "2026-08-14",
    avatar: "/images/raw/user_1.jpg",
  },
  {
    name: "Ibrahim M.",
    role: "Conference Host",
    rating: 5,
    text: "We hosted a two-day leadership conference at the Conference Hall. The AV, the lighting and the catering were flawless. Our delegates kept asking where this place was — it's a gem.",
    date: "2026-07-22",
    avatar: "/images/raw/user_2.jpg",
  },
  {
    name: "Temitope A.",
    role: "Wedding Guest",
    rating: 5,
    text: "Attended a poolside wedding at the Swimming Pool Hall and it was absolutely stunning. The service, the ambience at night, the food — everything was five-star.",
    date: "2026-06-30",
    avatar: "/images/raw/user_3.jpg",
  },
  {
    name: "Chiamaka E.",
    role: "Digital Nomad",
    rating: 5,
    text: "Reliable WiFi, a proper work desk, and the executive bar after hours. I extended my stay twice. The Executive Deluxe is now my home base in Abuja.",
    date: "2026-06-08",
    avatar: "/images/raw/testimonial-1.jpg",
  },
  {
    name: "James B.",
    role: "International Guest",
    rating: 5,
    text: "From airport pickup to check-out, everything was smooth. The staff remembered my name and my coffee order. That is the definition of hospitality.",
    date: "2026-05-19",
    avatar: "/images/raw/testimonial-2.jpg",
  },
  {
    name: "Ngozi F.",
    role: "Family Traveller",
    rating: 5,
    text: "The Suite gave our family so much space. The kids loved the pool hall and the restaurant's continental menu. Secure, calm and truly luxurious.",
    date: "2026-04-27",
    avatar: "/images/raw/testimonial-3.jpg",
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 127,
};