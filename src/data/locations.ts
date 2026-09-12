export interface LocationPage {
  slug: string;
  name: string;
  title: string;
  heading: string;
  distance: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  attractions: string[];
  tips: string[];
}

export const locations: LocationPage[] = [
  {
    slug: "wuse",
    name: "Wuse",
    title: "Hotel in Wuse, Abuja",
    heading: "Luxury & Business Hotel in Wuse, Abuja",
    distance: "In the heart of Wuse",
    intro:
      "Looking for a hotel in Wuse, Abuja? The DEN by Da Golden Chimney is a premium boutique hotel and restaurant set at 20 Agadez Crescent, Wuse 2 — right at the commercial and diplomatic heart of the Federal Capital Territory. With refined rooms, a celebrated restaurant, conference halls and a swimming pool hall, it is the choice of executives, diplomats and discerning travellers who want five-star service without leaving Wuse.",
    sections: [
      {
        title: "Why Stay in Wuse, Abuja",
        body: "Wuse is Abuja's most prized central district — home to banks, corporate headquarters, embassies, the US Embassy, Wuse Market and a concentration of the city's best restaurants and cafés. Staying in Wuse puts you minutes from boardroom meetings on Aminu Kano Crescent, shopping at Banex Plaza and the serenity of Millennium Park. The DEN anchors this vibrant neighbourhood with the calm, luxurious retreat you need after a busy Abuja day.",
      },
      {
        title: "Accommodation in Wuse",
        body: "Choose from the Studio Room, Executive Deluxe, Suite or Penthouse — each designed with premium bedding, free high-speed WiFi, air conditioning, smart TVs and en-suite bathrooms. All rates include complimentary breakfast. Weekday and weekend rates make The DEN one of the best-value luxury hotels in Wuse, Abuja, whether you are visiting for a night or a month.",
      },
      {
        title: "Meetings, Events & Dining in Wuse",
        body: "Beyond luxury rooms, The DEN is a full hospitality destination. Host board meetings in our Meeting Room for up to 50 guests, seminars in the Conference Hall, or glamorous occasions in the Swimming Pool Hall. Then dine at our restaurant, where Nigerian classics meet continental favourites, and unwind at the bar with premium wines, spirits and cocktails.",
      },
    ],
    faqs: [
      {
        question: "Is The DEN a good hotel in Wuse, Abuja for business trips?",
        answer:
          "Yes. We are centrally located in Wuse with executive rooms, high-speed WiFi, meeting rooms and airport pickup — a complete package for business travellers.",
      },
      {
        question: "How far is the hotel from Wuse Market?",
        answer:
          "Wuse Market and Wuse 2's commercial streets are just minutes away from 20 Agadez Crescent, making The DEN extremely convenient for shopping and meetings.",
      },
    ],
    attractions: ["Wuse Market", "US Embassy", "Millennium Park", "Banex Plaza", "Central Bank District"],
    tips: [
      "Book direct on our Book Now page for the best Wuse hotel rates",
      "Request airport pickup when you arrive",
      "Visit the restaurant for our signature Nigerian weekend dishes",
    ],
  },
  {
    slug: "wuse-2",
    name: "Wuse 2",
    title: "Hotel near Wuse 2, Abuja",
    heading: "Best Boutique Hotel near Wuse 2, Abuja",
    distance: "20 Agadez Crescent, Wuse 2",
    intro:
      "You have found it — The DEN by Da Golden Chimney sits right at 20 Agadez Crescent, Wuse 2, Abuja. Few hotels near Wuse 2 combine boutique luxury, authentic Nigerian hospitality, fine dining, conferencing and event venues under one roof. Whether you need a weekend escape, a corporate stay or a venue for your next major event, The DEN is your address in Wuse 2.",
    sections: [
      {
        title: "The Wuse 2 Advantage",
        body: "Wuse 2 is the beating heart of Abuja's commercial and social life. From sunrise meetings at embassies and banks to sunset dinners at the city's favourite restaurants, everything happens here. The DEN places you steps away from all of it, then welcomes you home to a quiet, beautifully designed room, a gourmet restaurant and a bar made for unwinding.",
      },
      {
        title: "Luxury Rooms Steps From Wuse 2",
        body: "Our Studio, Executive Deluxe, Suite and Penthouse rooms are just minutes from Wuse 2's corporate towers. Expect plush king bedding, rainfall showers, fibre-fast WiFi, smart TVs, secure parking and 24/7 room service — plus complimentary breakfast with every stay. Weekend rates start at ₦40,000, making luxury genuinely accessible.",
      },
      {
        title: "Events, Dining & The Pool Hall",
        body: "The DEN is more than a hotel near Wuse 2 — it is an event destination. Book the Conference Hall for summits, the Meeting Room for board sessions, or the Swimming Pool Hall for weddings and birthdays. Our restaurant and bar complete the experience with celebrated Nigerian and continental cuisine.",
      },
    ],
    faqs: [
      {
        question: "Which hotels near Wuse 2 offer conference facilities?",
        answer:
          "The DEN provides a Meeting Room, Conference Hall and Swimming Pool Hall right in Wuse 2, with full AV, décor and catering support.",
      },
      {
        question: "Is there parking at the hotel in Wuse 2?",
        answer:
          "Yes, we offer secure on-site parking, 24/7 reception and room service at our Wuse 2 location.",
      },
    ],
    attractions: ["Agadez Crescent", "Wuse 2 Corporate District", "Banex Plaza", "Nicon Luxury District", "Central Area"],
    tips: [
      "Use our sticky booking bar for same-day Wuse 2 stays",
      "Ask about the Weekend Escape package",
      "Book the Pool Hall early for Saturday events",
    ],
  },
  {
    slug: "maitama",
    name: "Maitama",
    title: "Hotel in Maitama Area, Abuja",
    heading: "A Luxury Hotel Minutes from Maitama, Abuja",
    distance: "Minutes from Maitama District",
    intro:
      "Maitama is Abuja's diplomatic enclave — and The DEN by Da Golden Chimney is just minutes away. For guests visiting Maitama's embassies, NGOs and executive residences, our Wuse 2 boutique hotel offers a superior alternative to generic hotels in the Maitama area: elegant rooms, a celebrated restaurant, secure parking and premium conference facilities, all at honest prices.",
    sections: [
      {
        title: "Staying Near Maitama, Abuja",
        body: "Maitama is home to the State House-related offices, numerous high commissions and upscale residential quarters. Visitors to Maitama need secure, professional accommodation close by. The DEN's location on Agadez Crescent gives you seamless access to the Maitama district while offering more space, more amenities and better value than most hotels around Maitama.",
      },
      {
        title: "Executive Comfort for Maitama Clients",
        body: "Diplomats, NGO staff and executives staying with us enjoy the Executive Deluxe and Suite rooms, high-speed WiFi for remote work, airport pickup from Nnamdi Azikiwe International Airport, and the discretion and service culture international guests expect.",
      },
      {
        title: "Dine & Host Between Wuse and Maitama",
        body: "Few hotels connect Wuse and Maitama as conveniently. After meetings, host clients in our Meeting Room or Conference Hall, relax by the pool hall, or treat them to Nigerian and continental cuisine in our restaurant and bar.",
      },
    ],
    faqs: [
      {
        question: "How far is The DEN from Maitama?",
        answer:
          "The DEN is minutes from the Maitama district, with quick drives to embassies and residential Maitama. We can arrange transport on request.",
      },
      {
        question: "Do you serve international guests well in Maitama?",
        answer:
          "Absolutely. Our team serves diplomats and international visitors daily with airport pickup, international menu options and multilingual-friendly service.",
      },
    ],
    attractions: ["Maitama District", "State House Area", "Diplomatic Quarter", "Nike Art Gallery", "Transcorp Hilton"],
    tips: [
      "Arrange airport pickup — we meet you at arrivals",
      "Try the continental menu if you miss home flavours",
      "Ask for a quiet Executive Deluxe for deep-focus work",
    ],
  },
  {
    slug: "asokoro",
    name: "Asokoro",
    title: "Hotel near Asokoro, Abuja",
    heading: "Elegant Hotel near Asokoro, Abuja",
    distance: "Minutes from Asokoro",
    intro:
      "Asokoro is one of Abuja's most prestigious residential districts. The DEN by Da Golden Chimney, set in Wuse 2, is the ideal boutique hotel near Asokoro — combining the tranquillity and security you value with the dining, conference and event facilities of a full luxury hotel.",
    sections: [
      {
        title: "The Asokoro Connection",
        body: "Asokoro hosts senior government officials, diplomats and some of Abuja's finest restaurants. Booking The DEN near Asokoro gives you access to this elite world while enjoying honest, transparent pricing and the warmth of genuine Nigerian hospitality — a combination rarely found elsewhere.",
      },
      {
        title: "Rooms, Dining & Events Near Asokoro",
        body: "Our four room categories, restaurant, bar, Meeting Room, Conference Hall and Swimming Pool Hall mean you rarely need to leave the property. It is the perfect staging point for Asokoro events, government engagements and weekend family stays.",
      },
      {
        title: "Security and Convenience",
        body: "Guests repeatedly tell us they choose The DEN for the secure parking, 24/7 reception and attentive staff. Combined with the calm atmosphere of our pool hall and restaurant, it makes for a genuinely relaxing stay near Asokoro.",
      },
    ],
    faqs: [
      {
        question: "Is The DEN a secure hotel near Asokoro?",
        answer:
          "Yes — secure on-site parking, CCTV and 24/7 reception make The DEN a trusted choice for guests visiting Asokoro.",
      },
      {
        question: "Do you offer suites suitable for families visiting Asokoro?",
        answer:
          "Yes, our Suite and Executive Deluxe rooms comfortably accommodate families, with complimentary breakfast and pool hall access.",
      },
    ],
    attractions: ["Asokoro District", "Tribunal Area", "Millennium Park", "Netherlands Embassy", "Apo Channel"],
    tips: [
      "Book the Suite for family stays near Asokoro",
      "Enjoy pool hall evenings — a favourite of our guests",
      "Plan weekend check-ins for the best rates",
    ],
  },
  {
    slug: "garki",
    name: "Garki",
    title: "Hotel in Garki Area, Abuja",
    heading: "Premium Hotel Minutes from Garki, Abuja",
    distance: "Minutes from Garki",
    intro:
      "Garki is Abuja's original central business district — a busy professional world of ministries, banks and corporate offices. The DEN by Da Golden Chimney in Wuse 2 is the perfect hotel for the Garki professional: refined rooms, reliable WiFi, meeting spaces and a restaurant that works as hard as you do.",
    sections: [
      {
        title: "Working Between Garki & Wuse 2",
        body: "Professionals who work in Garki know that requirements extend beyond a bed: dependable internet for video calls, quiet rooms for rest, meeting rooms for clients and quality food. The DEN delivers all of this minutes from Garki's ministries and business towers, with airport pickup for visiting partners.",
      },
      {
        title: "The Ultimate Business Hotel Near Garki",
        body: "The Executive Deluxe and Suite rooms come with executive work desks and lounge areas. Our Meeting Room seats up to 50 delegates and the Conference Hall hosts full-day seminars with catering. After hours, our restaurant and bar are the best business-social venue in Wuse 2.",
      },
      {
        title: "Value Without Compromise",
        body: "Weekday and weekend rates across our four room categories make The DEN one of the smartest choices for accommodation in the Garki–Wuse corridor. Compare our pricing and amenities — then come and see the difference true hospitality makes.",
      },
    ],
    faqs: [
      {
        question: "Is The DEN suitable for conferences from Garki ministries?",
        answer:
          "Yes, our Conference Hall and Meeting Room host government and corporate events from across Garki regularly, with full AV and catering.",
      },
      {
        question: "Do you have monthly rates for Garki professionals?",
        answer:
          "Yes, our Long Stay Privilege gives preferred rates on stays of 7+ nights — perfect for professionals working between Garki and Wuse 2.",
      },
    ],
    attractions: ["Garki Business District", "Old Secretariat", "Federal Secretariat", "National Mosque", "Unity Fountain"],
    tips: [
      "Ask about corporate weekday venue rates for Garki events",
      "Book via WhatsApp for the fastest confirmation",
      "Request late checkout to match long Garki workdays",
    ],
  },
  {
    slug: "central-business-district",
    name: "Central Business District",
    title: "Hotel Near Abuja CBD",
    heading: "Luxury Hotel Near Abuja's Central Business District",
    distance: "Minutes from the CBD",
    intro:
      "Abuja's Central Business District is where the country's decisions are made. The DEN by Da Golden Chimney, located minutes away in Wuse 2, is the boutique hotel of choice for visitors to the CBD who want executive comfort, refined dining and impeccable service within easy reach of every landmark.",
    sections: [
      {
        title: "The CBD Traveller's Home",
        body: "Whether you are at the Central Bank, a ministry or a financial institution, The DEN keeps you connected to the CBD while offering the calm, space and luxury that a day of meetings demands. Free high-speed WiFi, quiet Premium rooms and 24/7 reception make it the natural base for CBD business travel.",
      },
      {
        title: "Restaurant, Bar & Conferencing",
        body: "Our restaurant serves Nigerian and continental dishes all day, the bar is ideal for post-meeting drinks, and our Meeting Room and Conference Hall are equipped for client presentations and workshops without leaving the hotel.",
      },
      {
        title: "Smart Rates for CBD Visitors",
        body: "Weekday rates from ₦50,000 and weekend rates from ₦40,000 ensure that CBD visitors enjoy genuine luxury at transparent prices. Booking directly on this site guarantees the best available rate plus exclusive offers.",
      },
    ],
    faqs: [
      {
        question: "How close is the hotel to Abuja's CBD?",
        answer:
          "The DEN is minutes from the CBD by car. Our Wuse 2 location on Agadez Crescent keeps you near every central landmark.",
      },
      {
        question: "Can I hold a client meeting at the hotel near the CBD?",
        answer:
          "Yes — use the Meeting Room for up to 50 guests or the Conference Hall for larger engagements, with projector, sound and catering support.",
      },
    ],
    attractions: ["Central Bank of Nigeria", "National Assembly", "Federal Secretariat", "NNPC Towers", "Unity Fountain"],
    tips: [
      "Lock in weekday rates by booking direct",
      "Use our airport pickup on international arrivals",
      "Reserve the Meeting Room for client visits",
    ],
  },
  {
    slug: "jabi",
    name: "Jabi",
    title: "Hotel near Jabi, Abuja",
    heading: "Boutique Hotel Minutes from Jabi, Abuja",
    distance: "Minutes from Jabi Lake",
    intro:
      "Jabi is Abuja's lifestyle and entertainment district — home to Jabi Lake Mall, vibrant nightlife and lakeside dining. The DEN by Da Golden Chimney is a short drive away, giving you the best of Jabi's energy with the comfort of a luxury boutique hotel in Wuse 2.",
    sections: [
      {
        title: "Jabi Living, Wuse Comfort",
        body: "Spend your day at Jabi Lake Mall, catch a film, or enjoy lakeside restaurants — then retreat to The DEN for premium sleep, secure parking and a gourmet supper in our own restaurant and bar. It is the perfect combination for weekenders and young professionals.",
      },
      {
        title: "Weekend Stays from ₦40,000",
        body: "Our Weekend Escape package offers rates from ₦40,000 for the Studio and ₦120,000 for the Suite and Penthouse — the most attractive weekend hotel offer near Jabi. Breakfast is always included.",
      },
      {
        title: "More Than a Hotel Near Jabi",
        body: "Celebrate birthdays and weddings in the Swimming Pool Hall, host team retreats in the Conference Hall, or simply enjoy the poolside vibe. The DEN gives Jabi visitors a complete luxury experience.",
      },
    ],
    faqs: [
      {
        question: "How far is The DEN from Jabi Lake Mall?",
        answer:
          "Jabi Lake Mall is a short drive from our Wuse 2 location — convenient any time of day.",
      },
      {
        question: "Is The DEN good for weekend stays near Jabi?",
        answer:
          "Yes, many guests pair Jabi entertainment with our Weekend Escape rates and pool hall evenings for the perfect Abuja weekend.",
      },
    ],
    attractions: ["Jabi Lake Mall", "Jabi Lake", "Central Area", "Filmhouse Cinemas", "Graceland Event Centre"],
    tips: [
      "Combine a Jabi Lake day with a pool hall evening",
      "Try our weekend breakfast spread before heading out",
      "Ask for a late checkout on Sundays",
    ],
  },
  {
    slug: "utako",
    name: "Utako",
    title: "Hotel near Utako, Abuja",
    heading: "Comfortable Hotel near Utako, Abuja",
    distance: "Minutes from Utako District",
    intro:
      "Utako is a fast-growing commercial district on Abuja's arterial corridor. The DEN by Da Golden Chimney is conveniently placed minutes from Utako, offering professionals and families refined accommodation, dependable dining and full conferencing without the CBD price tag.",
    sections: [
      {
        title: "Staying Connected in Utako",
        body: "Businesses moving to Utako's new offices need hotels that match their pace. Our Wuse 2 location is perfectly positioned on the Wuse–Utako corridor with executive rooms, fibre-fast WiFi, secure parking and a restaurant that serves from morning to night.",
      },
      {
        title: "Corporate & Family Rooms",
        body: "The Executive Deluxe is a favourite for Utako professionals, while the Suite comfortably hosts families. Complimentary breakfast, 24/7 room service and daily housekeeping come with every stay.",
      },
      {
        title: "Events Near Utako",
        body: "From corporate trainings to family celebrations, our Meeting Room, Conference Hall and Swimming Pool Hall bring professional event infrastructure a short drive from Utako.",
      },
    ],
    faqs: [
      {
        question: "Is parking available for Utako visitors at The DEN?",
        answer:
          "Yes, we provide secure on-site parking free for guests and event visitors.",
      },
      {
        question: "Do you host corporate trainings for Utako companies?",
        answer:
          "Certainly — our Meeting Room and Conference Hall are regularly used for trainings, and we provide catering and AV as part of corporate packages.",
      },
    ],
    attractions: ["Utako Market", "Abuja National Stadium", "City Centre", "APEC Area", "University of Abuja Teaching Hospital"],
    tips: [
      "Book corporate days with refreshments included",
      "Use the stadium for evening walks",
      "Consider the Long Stay privilege for extended projects",
    ],
  },
  {
    slug: "gwarinpa",
    name: "Gwarinpa",
    title: "Hotel near Gwarinpa, Abuja",
    heading: "Luxury Stay a Short Drive From Gwarinpa, Abuja",
    distance: "Short drive from Gwarinpa",
    intro:
      "Gwarinpa is Nigeria's largest planned neighbourhood — home to thousands of professionals commuting into Abuja daily. The DEN by Da Golden Chimney offers Gwarinpa residents and visitors the luxury hotel experience close to home: elegant rooms, a celebrated restaurant, event venues and the hospitality that makes Wuse 2 special.",
    sections: [
      {
        title: "A Stay-Over for Gwarinpa",
        body: "Whether you're hosting visiting family, enjoying a staycation, or holding your wedding reception, The DEN is the refined escape minutes from Gwarinpa. Secure parking, 24/7 reception and a restaurant that never disappoints make every visit effortless.",
      },
      {
        title: "Celebrations in the Pool Hall",
        body: "The Swimming Pool Hall is one of the most requested event venues by Gwarinpa families — weddings, birthdays and cocktails in a glamorous, private setting. Our event team handles décor, catering, lighting and sound end-to-end.",
      },
      {
        title: "Weekend Getaways from Gwarinpa",
        body: "Take a night or two away without leaving the city. Weekend rates start at ₦40,000 with breakfast included, and the pool, bar and restaurant create a true mini-vacation just minutes from Gwarinpa.",
      },
    ],
    faqs: [
      {
        question: "Is The DEN a good venue for a Gwarinpa wedding?",
        answer:
          "Yes, our Swimming Pool Hall is a top choice for Gwarinpa families hosting weddings and parties. Visit us to see the setup.",
      },
      {
        question: "Are staycations available for Gwarinpa residents?",
        answer:
          "Absolutely. Weekend stays from ₦40,000 with breakfast make The DEN a favourite staycation for nearby Gwarinpa residents.",
      },
    ],
    attractions: ["Gwarinpa Estate", "Jabi Lake Mall", "Area 2 Shopping", "National Stadium", "Wuse Market"],
    tips: [
      "Host your next birthday in the Pool Hall",
      "Try the Sunday brunch at our restaurant",
      "Reserve early for public holidays and December",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}