export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  description: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    name: "Breakfast",
    description: "Served daily with complimentary in-room breakfast",
    items: [
      { name: "Full Nigerian Breakfast", description: "Ewa, akara, fried plantain, egg, ogi", price: "₦6,500" },
      { name: "Continental Breakfast", description: "Scrambled eggs, bacon, croissants, fresh fruit", price: "₦8,500" },
      { name: "Pancakes & Smoothie Bowl", description: "Blueberry pancakes, acai smoothie bowl", price: "₦5,500" },
      { name: "Yam & Egg Sauce", description: "Boiled yam, garden egg sauce, peppered chicken", price: "₦6,000" },
      { name: "Mango & Avocado Toast", description: "Sourdough, smashed avocado, mango, poached egg", price: "₦7,000" },
    ],
  },
  {
    name: "Nigerian Classics",
    description: "Authentic flavours from home and across Nigeria",
    items: [
      { name: "Jollof Rice", description: "Smoky party-style jollof with grilled chicken", price: "₦12,000" },
      { name: "Pounded Yam & Egusi Soup", description: "Assorted meat and stockfish", price: "₦14,000" },
      { name: "Ofada Rice & Ayamase", description: "Local rice, spicy green pepper stew, assorted offals", price: "₦13,500" },
      { name: "Nkwobi", description: "Classic Igbo spicy cow foot, palm oil, potash", price: "₦10,000" },
      { name: "Peppered Goat Meat & Garri", description: "Suya-spiced goat meat, chilled garri side", price: "₦12,500" },
    ],
  },
  {
    name: "Continental & International",
    description: "Global favourites for the international palate",
    items: [
      { name: "Grilled Salmon & Saffron Rice", description: "Pan-seared Atlantic salmon, asparagus, beurre blanc", price: "₦22,000" },
      { name: "Ribeye Steak", description: "250g grain-fed ribeye, mashed potato, pepper sauce", price: "₦28,000" },
      { name: "Creamy Prawn Linguine", description: "Tiger prawns, linguine, white wine cream sauce", price: "₦19,000" },
      { name: "Caesar Salad", description: "Romaine, parmesan croutons, grilled chicken", price: "₦9,000" },
      { name: "Chicken Parmigiana", description: "Breaded chicken, marinara, melted mozzarella", price: "₦16,000" },
    ],
  },
  {
    name: "Bar & Drinks",
    description: "Premium wines, spirits and cocktails",
    items: [
      { name: "Chimney Signature Cocktail", description: "Rum, coconut, passion fruit, mint — our house special", price: "₦7,000" },
      { name: "Old Fashioned", description: "Bourbon, bitters, sugar, orange peel", price: "₦8,500" },
      { name: "Chapman", description: "Classic Nigerian cocktail, Angostura, Ribena, Fanta", price: "₦4,000" },
      { name: "House Wine (Red/White)", description: "South African Merlot or Chenin Blanc", price: "₦6,000" },
      { name: "Local Beer (Star/Harat)", description: "Ice-cold Nigerian lager", price: "₦2,500" },
    ],
  },
];