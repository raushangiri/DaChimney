export const site = {
  name: "Da Chimney Boutique Hotel & Restaurant",
  brand: "The DEN by Da Golden Chimney",
  brandShort: "The DEN",
  tagline: "Luxury Boutique Hotel & Restaurant in Abuja",
  legalName: "Da Chimney Boutique Hotel & Restaurant",
  description:
    "The DEN by Da Golden Chimney is a luxury boutique hotel in Wuse 2, Abuja offering premium rooms & suites, fine dining, conference halls, event venues and airport pickup — with warm Nigerian hospitality.",
  domain: "https://dachimney.netlify.app",
  address: {
    street: "20 Agadez Crescent",
    area: "Wuse 2",
    city: "Abuja",
    state: "Federal Capital Territory",
    postcode: "904101",
    country: "Nigeria",
  },
  geo: { lat: 9.0824, lng: 7.4771 },
  phone: "+234 805 077 9933",
  phoneIntl: "+2348050779933",
  whatsapp: "2348050779933",
  email: "anita_ansh2002@yahoo.com",
  instagram: "https://www.instagram.com/chimneyhotel",
  instagramHandle: "@chimneyhotel",
  facebook:
    "https://www.facebook.com/share/p/1Btfyh25kF/?mibextid=wwXIfr",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Da+Chimney+Boutique+Hotel+%26+Restaurant+20+Agadez+Crescent+Wuse+2+Abuja",
  mapsEmbed:
    "https://www.google.com/maps?q=Da+Chimney+Boutique+Hotel+20+Agadez+Crescent+Wuse+2+Abuja&output=embed",
  hours: "24/7 Reception · Restaurant: 7:00 AM – 11:00 PM",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  adminPasscode: "den2026",
} as const;

export const socials = {
  instagram: site.instagram,
  facebook: site.facebook,
  whatsapp: `https://wa.me/${site.whatsapp}`,
  whatsappMessage: (msg: string) =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`,
};

export const whatsappLinks = {
  general: socials.whatsappMessage(
    "Hello The DEN by Da Golden Chimney. I would like to inquire about room availability and pricing."
  ),
  booking: socials.whatsappMessage(
    "Hello The DEN by Da Golden Chimney. I would like to make a room booking. Please share availability and pricing."
  ),
  events: socials.whatsappMessage(
    "Hello The DEN by Da Golden Chimney. I would like to inquire about your event halls and conference facilities."
  ),
  restaurant: socials.whatsappMessage(
    "Hello The DEN by Da Golden Chimney. I would like to make a restaurant reservation."
  ),
  airport: socials.whatsappMessage(
    "Hello The DEN by Da Golden Chimney. I would like to request an airport pickup."
  ),
};

export function formatNaira(amount: number) {
  return `₦${Number(amount).toLocaleString("en-NG")}`;
}

export function fullAddress() {
  return `${site.address.street}, ${site.address.area}, ${site.address.city} ${site.address.postcode}, ${site.address.state}, Nigeria`;
}