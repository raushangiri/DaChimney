export interface Faq {
  category: "Booking" | "Rooms" | "Events" | "Restaurant" | "Staying";
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    category: "Booking",
    question: "How do I book a room at The DEN in Abuja?",
    answer:
      "You can book directly through our Book Now page, call or WhatsApp us on +234 805 077 9933, or email anita_ansh2002@yahoo.com. Direct bookings give you the best rates and exclusive offers.",
  },
  {
    category: "Booking",
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 12:00 PM. Early check-in and late check-out are available on request, subject to availability.",
  },
  {
    category: "Booking",
    question: "Do you require a deposit to confirm a booking?",
    answer:
      "A deposit or valid card details may be required to confirm high-demand periods and event bookings. Our reservations team will confirm the exact terms when you book.",
  },
  {
    category: "Rooms",
    question: "Which rooms are available at the hotel?",
    answer:
      "We offer the Studio Room (₦50,000 weekday / ₦40,000 weekend), Executive Deluxe (₦80,000 / ₦60,000), Suite (₦150,000 / ₦120,000) and Penthouse (₦150,000 / ₦120,000). All rates include complimentary breakfast.",
  },
  {
    category: "Rooms",
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes. Every room reservation includes a complimentary breakfast served in our restaurant. You can also order from our full menu 24/7 through room service.",
  },
  {
    category: "Rooms",
    question: "Do the rooms have WiFi and air conditioning?",
    answer:
      "Absolutely. All rooms feature free high-speed WiFi, air conditioning, smart TVs, premium bedding, en-suite bathrooms and daily housekeeping.",
  },
  {
    category: "Events",
    question: "Which event venues do you have and what do they cost?",
    answer:
      "We have a Meeting Room (up to 50 persons, ₦800,000), a Conference Hall (₦1,000,000) and a Swimming Pool Hall (₦800,000). Contact us for custom packages and weekday corporate rates.",
  },
  {
    category: "Events",
    question: "Can I host a wedding or party at the hotel?",
    answer:
      "Yes — the Swimming Pool Hall is perfect for weddings, birthdays and cocktail receptions, while the Conference Hall handles bigger corporate occasions. Our event team handles décor, catering, lighting and sound.",
  },
  {
    category: "Restaurant",
    question: "Do you offer Nigerian and continental dishes?",
    answer:
      "Yes. Our restaurant serves authentic Nigerian cuisine alongside a rich continental and international menu, plus a bar with premium wines, spirits and cocktails.",
  },
  {
    category: "Restaurant",
    question: "Can I make a restaurant reservation or private dining booking?",
    answer:
      "Certainly. Book a table by phone, WhatsApp, or our Restaurant page. We also arrange private dining experiences for special occasions.",
  },
  {
    category: "Staying",
    question: "Do you offer airport pickup?",
    answer:
      "Yes. We provide chauffeured airport pickup from Nnamdi Azikiwe International Airport. Share your flight details on our Airport Pickup page and we'll handle the rest.",
  },
  {
    category: "Staying",
    question: "Is there secure parking and 24/7 reception?",
    answer:
      "Yes. We offer secure on-site parking, a 24/7 reception and round-the-clock room service for your peace of mind.",
  },
  {
    category: "Staying",
    question: "Where exactly is the hotel located?",
    answer:
      "We are at 20 Agadez Crescent, Wuse 2, Abuja — minutes from Central Business District landmarks, banks, embassies and the best restaurants in Abuja.",
  },
];

export function faqsByCategory() {
  const categories = ["Booking", "Rooms", "Events", "Restaurant", "Staying"] as const;
  return categories.map((c) => ({
    category: c,
    items: faqs.filter((f) => f.category === c),
  }));
}