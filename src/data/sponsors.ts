export interface SponsorTier {
  name: string;
  amount: string;
  benefits: string[];
  color: string;
}

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Title Sponsor",
    amount: "$2,500+",
    benefits: [
      "Top billing on all materials and signage",
      "Stage mentions at every performance",
      "VIP access for two to all events",
      "Featured logo on website and social media",
      "Dedicated social media spotlight post",
    ],
    color: "amber",
  },
  {
    name: "Gold Sponsor",
    amount: "$1,000",
    benefits: [
      "Logo on all printed materials",
      "Social media features throughout the event",
      "Reserved seating at headliner shows",
      "Logo on website sponsor page",
    ],
    color: "amber-light",
  },
  {
    name: "Silver Sponsor",
    amount: "$500",
    benefits: [
      "Logo on printed materials",
      "Social media mention",
      "Name on website sponsor page",
    ],
    color: "denim",
  },
  {
    name: "Bronze Sponsor",
    amount: "$250",
    benefits: [
      "Name listed on printed materials",
      "Name on website sponsor page",
    ],
    color: "denim-light",
  },
  {
    name: "In-Kind Sponsor",
    amount: "Goods & Services",
    benefits: [
      "Sound, food, lodging, printing, or other services",
      "Recognition on website and at events",
      "Name on printed materials",
    ],
    color: "sage",
  },
];

export const currentSponsors = [
  { name: "Munro Earthmoving", tier: "Title" },
  { name: "Edward Jones — Chris Mitchell", tier: "Gold" },
  { name: "Legacy Financial", tier: "Gold" },
  { name: "Sundance State Bank", tier: "Gold" },
  { name: "Local Black Hills", tier: "Silver" },
  { name: "Lori DeVries — Real Estate Center", tier: "Silver" },
  { name: "Century 21", tier: "Silver" },
  { name: "White's Queen City Motors", tier: "Silver" },
  { name: "Coeur Wharf", tier: "Silver" },
  { name: "Spearfish Creek Wine Bar", tier: "Silver" },
  { name: "South Dakota Arts Council", tier: "Grant" },
  { name: "Visit Spearfish", tier: "Grant" },
  { name: "Riverfront Broadcasting", tier: "In-Kind" },
];
