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
  /**
   * What prints in the row's cue column: the sponsor's package level — Legend,
   * Troubadour, Songsmith, Busker, Fan — or a durable descriptor (Grant, In-Kind).
   * Omitted means "recognised, no 2026 package level assigned", which renders as the
   * generic "Sponsor" and is a flag that Pulley needs a tier for them.
   *
   * Package levels used to be deliberately left off here on the grounds that they
   * change year to year. Showing them is the better call: the recognition ladder sells
   * *differentiated prominence* — Legend gets "prime placement", Troubadour "premium" —
   * and a flat alphabetical list quietly under-delivers that, seating a $2,000
   * Troubadour between two $50 Fan sponsors. The year-to-year churn is handled by
   * treating this file as a mirror of Pulley rather than by hiding the levels.
   */
  tier?: string;
  /**
   * Path under `public/`, e.g. `/sponsors/coeur-wharf.svg`. Optional: a missing
   * file falls back to the name alone so we can ship partial and drop files later.
   * People (`person: true`) never get a logo treatment even if a path is set.
   */
  logo?: string;
  /** Individuals — Fan-tier people, named couples. Never a logo. */
  person?: boolean;
}

// PULLEY IS THE SOURCE OF TRUTH for who is a sponsor and at what level — the QCSI org's
// 2026 Invitational campaign tiers. This list is a mirror of it, so refresh it from there
// rather than editing from memory: a name here is a promised benefit, and the recognition
// doc's rule is that nobody on the website gets dropped from the program.
//
// Alphabetical, per ventures/qcsi/fundraising/donor-recognition-by-tier.md — then the
// durable descriptors (grant funders, in-kind) as their own trailing group.
//
// 2026-08-14, refreshed to 2026 against Pulley, with Heath's calls on the ambiguous ones:
//   · ADDED the six on Pulley's 2026 tiers that were missing here — being absent is an
//     undelivered benefit, since the ladder promises website recognition at every tier.
//   · Coeur Wharf is the name to print. Pulley carries the person (srose@coeur.com);
//     this is the same sponsorship, so it appears once, as the company.
//   · Grant St. Liquor and Spearfish Creek Wine Bar are ONE sponsor, and Grant St. is the
//     name they want recognised. The Wine Bar keeps its billing in `venuePartners` on the
//     partners page — that list is separate, so it is a venue here, not a sponsor.
//   · REMOVED as not-yet-renewed for 2026: Munro Earthmoving (expected, will return),
//     Edward Jones — Chris Mitchell, Riverfront Broadcasting.
// STILL OPEN: Local Black Hills and White's Queen City Motors both gave in 2025 and have
// no 2026 tier in Pulley — same pattern as the removals, but not yet confirmed, and the
// recognition doc's rule is that nobody gets dropped without cause. Left in deliberately.
// Package levels mirror Pulley's 2026 campaign tier assignments. Kept alphabetical here
// for scanning; the page renders `sponsorsByLevel` below, which does the ordering.
//
// Logo slots use the suggested public/sponsors/ filenames. The page only renders a
// mark when the file is on disk — drop a clean official SVG/PNG later and it appears.
// 2026-08-20 files on hand: Coeur Mining IR mark (Wharf is a Coeur operation),
// Quik Signs site SVG, Visit Spearfish site header mark. Others stay name-only
// until a clean official file lands (C21 brand kit 400'd; Sundance / SDAC sites
// challenged or portal-only; White's / Local BH / Legacy / Grant St. / Lori
// had no clean high-res official mark from their own sites).
export const currentSponsors: Sponsor[] = [
  { name: "Century 21", tier: "Songsmith", logo: "/sponsors/century-21.svg" },
  { name: "Coeur Wharf", tier: "Songsmith", logo: "/sponsors/coeur-wharf.svg" },
  { name: "Devon Sants", tier: "Fan", person: true },
  { name: "Gary Lattin", tier: "Fan", person: true },
  { name: "Grant St. Liquor", tier: "Songsmith", logo: "/sponsors/grant-st-liquor.svg" },
  { name: "Legacy Financial", tier: "Troubadour", logo: "/sponsors/legacy-financial.svg" },
  { name: "Local Black Hills", logo: "/sponsors/local-black-hills.svg" },
  {
    name: "Lori DeVries — Real Estate Center",
    tier: "Songsmith",
    logo: "/sponsors/lori-devries.svg",
  },
  { name: "Lucius May", tier: "Fan", person: true },
  { name: "Russ & Diana Gillette", tier: "Busker", person: true },
  { name: "Sara May", tier: "Fan", person: true },
  {
    name: "Sundance State Bank",
    tier: "Troubadour",
    logo: "/sponsors/sundance-state-bank.svg",
  },
  {
    name: "White's Queen City Motors",
    logo: "/sponsors/whites-queen-city-motors.svg",
  },
  {
    name: "South Dakota Arts Council",
    tier: "Grant",
    logo: "/sponsors/south-dakota-arts-council.svg",
  },
  { name: "Visit Spearfish", tier: "Grant", logo: "/sponsors/visit-spearfish.jpg" },
  { name: "Quik Signs", tier: "In-Kind", logo: "/sponsors/quik-signs.svg" },
];

// Down the ladder, then alphabetical inside each level. Derived rather than hand-ordered
// so a name appended to the list above still lands in the right place — the same reason
// artists.ts derives its per-year rosters instead of keeping parallel arrays.
export const LEVEL_RANK: Record<string, number> = {
  Legend: 0,
  Troubadour: 1,
  Songsmith: 2,
  Busker: 3,
  Fan: 4,
  Sponsor: 5, // recognised, no 2026 level assigned — sorts below the ladder
  Grant: 6,
  "In-Kind": 7,
};

export const sponsorsByLevel: Sponsor[] = [...currentSponsors].sort((a, b) => {
  const ra = LEVEL_RANK[a.tier ?? "Sponsor"] ?? LEVEL_RANK.Sponsor;
  const rb = LEVEL_RANK[b.tier ?? "Sponsor"] ?? LEVEL_RANK.Sponsor;
  return ra - rb || a.name.localeCompare(b.name);
});
