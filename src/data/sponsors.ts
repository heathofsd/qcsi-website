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
   * Filename in `public/sponsors/`. Absent means the sponsor renders as type,
   * which is the correct rendering for individuals — they have no mark and never
   * will — and the honest one for a business whose logo we do not have.
   */
  logo?: string;
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
// STILL OPEN: Local Black Hills gave in 2025 and has no 2026 tier in Pulley — same pattern
// as the removals, but not yet confirmed, and the recognition doc's rule is that nobody gets
// dropped without cause. Left in deliberately.
// RESOLVED 2026-09-01: White's Queen City Motors renewed at $500 Songsmith (Pulley, under
// Cody Brown), so it now carries a tier and sorts up out of the untiered group.
// PRINT NAMES RULED 2026-09-01 (Heath), and corrected in Pulley the same day so the source of
// truth and this list agree: "Luke May" (was "Lucius May"), "Russ & Diana Gillett" (was
// "Gillette" — his own email spells it Gillett), and "Sundance State Bank" with no branch
// suffix, which overrides Melissa's 2026-08-15 "Sundance State Bank Spearfish Branch" note.
// Sundance was already right here. Alphabetical order is unchanged: Lucius and Luke both sort
// between "Lori" and "Russ".
// EXCEPTION 2026-09-01 (Heath): Gary Lattin is listed at **Busker**, one level above what
// his gift alone buys. Pulley has him at $250 against a $300 Busker floor and Pulley is
// right — this is not drift to reconcile away. He turns up at every gig and tips the players
// constantly, and the bump is how we say thank you for that. Deliberate. Leave it: this is
// the one row in the list that does not derive from the Pulley amount.
// Package levels mirror Pulley's 2026 campaign tier assignments. Kept alphabetical here
// for scanning; the page renders `sponsorsByLevel` below, which does the ordering.
// 2026-09-07 — RECONCILED AGAINST THE PRINT COLLATERAL, which had moved ahead of
// this file. Five sponsors were on the poster and the sponsor sign and missing
// here entirely: Crow Peak Brewery, Holiday Inn / Lucky's 13 Pub, Pit 14 Barbecue,
// Quik Signs, Schlimgen Law Firm. Four of the five are in-kind, and the money.md
// precedent (Quik Signs: recognised at tier, not counted in the campaign total) is
// that in-kind is recognised like any other gift. This file's own rule is that a
// name here is a promised benefit and the ladder promises website recognition at
// every tier — so being absent was five undelivered benefits, not a formatting gap.
//
// THREE PRINT NAMES were also out of step and are now aligned to what the poster
// and sign actually print:
//   · "Grant St. Liquor"  -> "Grant Street Liquor"          (spelled out)
//   · "Legacy Financial"  -> "Legacy Financial — Jon Pochop"
//   · "Century 21"        -> "Century 21 Spearfish Realty"
// ⚠️ The Century 21 line had an UNCOMMITTED local edit to "Jason Tysdal — Century
// 21", saved 2026-09-03, the same day Heath ruled the print name. It is overridden
// here rather than silently kept, because the poster, the sign and the logo file
// itself all read "Century 21 Spearfish Realty" — a caption reading one thing
// beside a logo reading another is worse than either. If the person's name is
// wanted, change all four surfaces together.
export const currentSponsors: Sponsor[] = [
  { name: "Century 21 Spearfish Realty", tier: "Songsmith", logo: "century_21.png" },
  { name: "Coeur Wharf", tier: "Songsmith", logo: "coeur_wharf.png" },
  { name: "Crow Peak Brewery", tier: "Busker", logo: "crow_peak_brewery.png" },
  { name: "Devon Sants", tier: "Fan" },
  { name: "Gary Lattin", tier: "Busker" },
  // Deliberately no logo: the only mark that exists is one WE drew from a photo of
  // their sign, and they have not seen it. Publishing an invented mark as a
  // business's own is not ours to do. They render as type until they approve it.
  { name: "Grant Street Liquor", tier: "Songsmith" },
  { name: "Holiday Inn / Lucky's 13 Pub", tier: "Songsmith", logo: "holiday_inn_luckys_13.png" },
  { name: "Legacy Financial — Jon Pochop", tier: "Troubadour", logo: "legacy_financial.png" },
  { name: "Local Black Hills" },
  { name: "Lori DeVries — Real Estate Center", tier: "Songsmith", logo: "real-estate-center-lori-devries.png" },
  { name: "Luke May", tier: "Fan" },
  { name: "Pit 14 Barbecue", tier: "Busker", logo: "pit_14_bbq.png" },
  { name: "Quik Signs", tier: "Busker", logo: "quik_signs.png" },
  { name: "Russ & Diana Gillett", tier: "Busker" },
  { name: "Sara May", tier: "Fan" },
  { name: "Schlimgen Law Firm", tier: "Songsmith", logo: "schlimgen_law_firm.png" },
  { name: "Sundance State Bank", tier: "Troubadour", logo: "sundance_state_bank.png" },
  { name: "White's Queen City Motors", tier: "Songsmith", logo: "whites_queen_city_motors.png" },
  { name: "South Dakota Arts Council", tier: "Grant", logo: "sd_arts_council.png" },
  { name: "Visit Spearfish", tier: "Grant", logo: "visit_spearfish.png" },
];

// Down the ladder, then alphabetical inside each level. Derived rather than hand-ordered
// so a name appended to the list above still lands in the right place — the same reason
// artists.ts derives its per-year rosters instead of keeping parallel arrays.
const LEVEL_RANK: Record<string, number> = {
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
