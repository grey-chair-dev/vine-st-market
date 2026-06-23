
import React from 'react';
import { Coffee, Sandwich, ShoppingBag, Utensils } from 'lucide-react';
import { BusinessHours, MenuSection, WeeklySpecial } from './types';

export const BUSINESS_NAME = "Vine St Market";
export const NEIGHBORHOOD = "Over-the-Rhine";
export const ADDRESS = "1427 Vine St, Cincinnati, OH 45202";
export const PHONE = "(513) 555-0142";
export const EMAIL = "hello@vinestmarket.com";
export const COFFEE_ROASTER = "Riverbend Roasters";
export const TAGLINE = "A neighborhood market and café in Over-the-Rhine. Coffee, lunch, and groceries — all under one roof.";
export const LOCATION_DESCRIPTION = "Over-the-Rhine, steps from Findlay Market and Washington Park.";

export const ANNOUNCEMENT = {
  show: true,
  title: "A Note from the Market",
  message: "Our spring harvest has arrived. Join us this week for locally sourced greens and our signature wild-garlic pesto, bottled in small batches for a limited time.",
  date: "Updated Weekly"
};

/**
 * WEEKLY LUNCH SPECIALS (11:30 - 2:30)
 * Data from the provided flyers
 */
export const LUNCH_SPECIALS: WeeklySpecial[] = [
  {
    day: "Tuesday",
    name: "Wild Caught Tuna Bowl",
    description: "Albacore tuna, kale slaw, organic edamame, avocado, side of wicked aioli.",
    tags: ["GF"]
  },
  {
    day: "Wednesday",
    name: "Mediterranean Quinoa Salad",
    description: "Served with house-made hummus and pita (or corn chips for gluten-free).",
    tags: ["V"]
  },
  {
    day: "Thursday",
    name: "Thai Basil Ground Beef Bowl",
    description: "Over basmati rice with steamed carrots and sweet red peppers.",
    tags: ["GF"]
  },
  {
    day: "Friday",
    name: "Chicken Tacos",
    description: "Organic chicken breast, chopped romaine, pepper jack cheese, avocado, and creamy cilantro sauce. Flour or GF tortilla.",
    tags: ["Organic"]
  }
];

export const HOURS: BusinessHours[] = [
  { day: "Monday", open: "7:00 AM", close: "4:00 PM" },
  { day: "Tuesday", open: "7:00 AM", close: "4:00 PM" },
  { day: "Wednesday", open: "7:00 AM", close: "4:00 PM" },
  { day: "Thursday", open: "7:00 AM", close: "4:00 PM" },
  { day: "Friday", open: "7:00 AM", close: "6:00 PM" },
  { day: "Saturday", open: "8:00 AM", close: "4:00 PM" },
  { day: "Sunday", open: "8:00 AM", close: "2:00 PM" },
];

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: "Filter Coffee",
    items: [
      { name: "House Brew", price: "3 / 3.5", description: `${COFFEE_ROASTER} artisan coffee` },
      { name: "Red Eye", price: "5 / 5.5", description: "Coffee + espresso" },
      { name: "Café au Lait", price: "3.5 / 4", description: "House brew + steamed milk" },
      { name: "Cold Brew", price: "4.5", description: "Slow-steeped for 24 hours" },
      { name: "With Milk", price: "5", description: "Cold brew with milk" },
      { name: "CBD-Infused Nitro Cold Brew", price: "7 / 8", description: "Nitro cold brew with CBD extract", tags: ["CBD"] }
    ]
  },
  {
    title: "Espresso",
    items: [
      { name: "Espresso", description: "Single shot" },
      { name: "Espresso Double Shot", price: "3", description: "Double shot" },
      { name: "Americano", price: "3.5", description: "Espresso + 10 oz hot water" },
      { name: "Macchiato", price: "4", description: "Espresso + 1 oz steamed milk" },
      { name: "Cortado", price: "4", description: "Espresso + 2 oz steamed milk" },
      { name: "Cortadito", price: "4", description: "Espresso + sugar + 2 oz steamed milk" },
      { name: "Cappuccino", price: "5", description: "Espresso + 8 oz steamed milk" },
      { name: "Latte", price: "5.5 / 6", description: "Espresso + 10 oz steamed milk" },
      { name: "Mocha Latte", price: "6 / 6.5", description: "Espresso + milk + cacao + sugar" },
      { name: "Maple Latte", price: "6 / 6.5", description: "Espresso + milk + maple" }
    ]
  },
  {
    title: "Not Coffee",
    items: [
      { name: "Hot Tea", price: "3 / 3.5", description: "Selection of premium teas" },
      { name: "Chai Latte", price: "4.5 / 5", description: "Spiced tea latte" },
      { name: "Matcha Latte", price: "4.5 / 5", description: "Japanese green tea latte" },
      { name: "Hot Chocolate", price: "4 / 4.5", description: "Rich cocoa with steamed milk" },
      { name: "Golden Milk", price: "4.5 / 5", description: "Turmeric spiced latte" },
      { name: "Dandelion Latte", price: "4 / 4.5", description: "Herbal dandelion tea latte" },
      { name: "Daily Iced Tea", price: "3.5", description: "Fresh brewed daily" },
      { name: "Daily Pressed Juice", price: "8", description: "Fresh pressed, rotating selection" },
      { name: "Kombucha on Tap", price: "6", description: "Fermented tea, rotating flavors" }
    ]
  },
  {
    title: "Milk Options & Add-ons",
    items: [
      { name: "Milk Options", description: "Whole, 1%, Oat, Coconut, or Almond" },
      { name: "Mushroom Elixers", price: "+2", description: "Add functional mushrooms" },
      { name: "CBD Extract", price: "+2", description: "Add CBD extract", tags: ["CBD"] },
      { name: "Flavored Syrups", price: "+.50", description: "Add house-made syrups" }
    ]
  },
  {
    title: "Grab-n-Go & Sandwiches",
    items: [
      { name: "The Vine St Club", description: "Turkey, thick-cut bacon, avocado, and garlic aioli." },
      { name: "Market Veggie", description: "Seasonal roasted vegetables with local feta." },
      { name: "Artisanal Panini", description: "Fresh mozzarella and pesto on sourdough." },
      { name: "Breakfast Provisions", description: "Handheld burritos with local eggs and chorizo." }
    ]
  },
  {
    title: "Prepared Counter",
    items: [
      { name: "Daily Batch Soup", description: "Chef-prepared seasonal comfort." },
      { name: "Market Grain Bowls", description: "High-protein bases with seasonal produce." },
      { name: "Quiche of the Day", description: "Flaky crust, farm-fresh eggs and herbs." }
    ]
  },
  {
    title: "Local Goods & Pantry",
    items: [
      { name: "Local Dairy & Eggs", description: "Fresh from regional family farms." },
      { name: "Ohio Valley Produce", description: "The best of what's in season locally." },
      { name: "Specialty Provisions", description: "Curated oils, honey, and local pantry goods." },
      { name: "Artisan Breads", description: "Small-batch sourdough and seasonal loaves." }
    ]
  }
];

export const CATEGORIES = [
  { name: "Riverbend Coffee", icon: <Coffee className="w-5 h-5" />, description: "Small-batch roasts from our Cincinnati partner." },
  { name: "Fresh Breakfast & Lunch", icon: <Utensils className="w-5 h-5" />, description: "Chef-led snacks and grab-n-go meals." },
  { name: "Market Grocery", icon: <ShoppingBag className="w-5 h-5" />, description: "Local produce, dairy, eggs, and goods." }
];
