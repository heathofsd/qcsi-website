export interface SponsorTier {
  name: string;
  tagline: string;
  amount: string;
  benefits: string[];
}

// Canonical sponsorship packages — source of truth is Pulley campaign `qcsi2026`
// (app.getpulley.app/donate/qcsi/c/qcsi2026). Keep names, amounts, and benefits
// in sync with the campaign_tiers there and with ventures/qcsi/fundraising/sponsor-pitch-kit.md.
export const sponsorTiers: SponsorTier[] = [
  {
    name: "Legend",
    tagline: "Presenting Sponsor",
    amount: "$5,000",
    benefits: [
      '"Invitational presented by [Your Business]" on all event materials',
      "Prime logo placement and acknowledgment across all promotion",
      "8 VIP passes with reserved front-row seating at The Matthews",
      "Welcome speech from the stage at the main events",
      "Networking with artists and community leaders",
      "Named in thank-yous, newsletters, media releases, and press",
      "Social media features",
    ],
  },
  {
    name: "Troubadour",
    tagline: "The main-stage evenings",
    amount: "$1,000",
    benefits: [
      "Joint sponsor of the evening events at The Matthews",
      "Premium logo placement plus main-stage banners",
      "Special acknowledgment during the main events",
      "6 passes with VIP seating",
      "Social media mention",
    ],
  },
  {
    name: "Songsmith",
    tagline: "Own a venue",
    amount: "$500",
    benefits: [
      "Sponsor a round venue and festival HQ",
      "Prominent branding at your sponsored venue",
      "Venue-specific promotional materials",
      "Recognition in the program and on the website",
      "4 passes with VIP seating",
      "Social media mention",
    ],
  },
  {
    name: "Busker",
    tagline: "Sponsor the rounds",
    amount: "$300",
    benefits: [
      "Joint sponsor of the songwriter rounds across 6 venues",
      "Round-sponsor recognition in programs and promotion",
      "2 passes with VIP seating",
      "Social media mention",
    ],
  },
  {
    name: "Fan",
    tagline: "Businesses & individuals",
    amount: "$50",
    benefits: [
      "For businesses or individuals",
      "Recognition in the program and on the website",
      "Included in a group thank-you social post",
    ],
  },
];

export interface Sponsor {
  name: string;
  // Optional descriptor. Sponsorship-package levels are intentionally omitted here
  // (they change year to year); only durable descriptors like grant/in-kind remain.
  tier?: string;
}

export const currentSponsors: Sponsor[] = [
  { name: "Munro Earthmoving" },
  { name: "Edward Jones — Chris Mitchell" },
  { name: "Legacy Financial" },
  { name: "Sundance State Bank" },
  { name: "Local Black Hills" },
  { name: "Lori DeVries — Real Estate Center" },
  { name: "Century 21" },
  { name: "White's Queen City Motors" },
  { name: "Coeur Wharf" },
  { name: "Spearfish Creek Wine Bar" },
  { name: "South Dakota Arts Council", tier: "Grant" },
  { name: "Visit Spearfish", tier: "Grant" },
  { name: "Riverfront Broadcasting", tier: "In-Kind" },
];
