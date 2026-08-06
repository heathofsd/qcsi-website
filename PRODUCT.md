# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Songwriters in the Black Hills region** — people who write original songs and play them, usually inside gigs where the originals sit alongside familiar material. They are looking for a room where the song and its story are the whole point, and for other writers to share a stage with. Experience ranges from first-time to nationally touring.

**Music-loving neighbors in Spearfish and the wider Black Hills** — they already believe original music matters and want somewhere local to hear it. They decide whether to spend a September weekend walking a downtown circuit of small rooms.

**Downtown business owners and venue partners** — bars, wine bars, breweries, and galleries who host daytime rounds and sponsor the event. They evaluate QCSI as a community-investment partnership, never as an ad buy.

**Small-town arts funders** — South Dakota Arts Council, Visit Spearfish, foundations, and individual patrons deciding whether Spearfish is a music destination worth funding.

## Product Purpose

Queen City Songwriters Incorporated is a 501(c)(3) nonprofit, founded in Spearfish, SD on May 24, 2024 by Heath Johnson and Jason Guthmiller, building a year-round home for original music in the Black Hills.

Published mission: "To foster the art of songwriting by providing a vibrant platform for songwriters to present their work, engage the community, and inspire a lasting appreciation for original music."

Published vision: "To make Spearfish a beacon for original music in the Black Hills — a place where artists feel seen, heard, and supported."

The website's job is to make the organization legible to four audiences at once (songwriters, audiences, sponsors, funders) and route each to its action: apply/participate, attend, sponsor, or give. Success is a filled September and a funded year.

## Positioning

**The listening room.** An original song gets *played* all the time; it rarely gets *heard*. A songwriter puts something true into a song and plays it in the third slot of a four-hour night while the room orders another round and talks over the bridge. The song is fine. The setting just was not built to listen.

QCSI's mechanism is building the setting: rounds of three songwriters who play a song, tell the story behind it, and pass; in rooms small enough that the story lands. Curated, not competitive — QCSI selects and welcomes, it never ranks or crowns.

This is the claim a neighboring arts nonprofit cannot truthfully copy: not "we put on a music festival" but "we built the room where an original song and its story are the whole point."

## Operating Context

- **The Invitational** — flagship, each September in downtown Spearfish. Two days. Daytime songwriter rounds staggered every 30 minutes across walkable downtown venues; Friday night Songwriters Showcase (every invited writer) and Saturday night headliner, both on the stage at The Matthews Opera House & Arts Center. 2026 edition is the third annual: **September 25–26, 2026**.
- **A round** — three songwriters take turns: play an original, tell the story behind it, pass. Roughly 45 minutes.
- **Year-round rounds** — Lucky's Rounds, Summer Rounds, and other recurring low-pressure showcases between Septembers.
- **The network** — 96+ songwriters across the region.
- QCSI borrows The Matthews Opera House stage for its evening events. It is not the Matthews and must never adopt that institution's civic-building framing.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. Deployed on Vercel; push to `main` deploys.
- Ten static routes (`/`, `/about`, `/invitational`, `/artists`, `/for-songwriters`, `/for-audiences`, `/partners`, `/support`, `/contact`, `/gallery`) plus per-artist pages at `/artists/[slug]` — one for every artist with a written record and for the whole 2026 bill, statically generated from `src/data/artists.ts`, each with its own auto-generated Open Graph image and Person schema. Added 2026-08-06; the pages double as artist press kits (copy-ready bios, photo download).
- Artist and venue records live in `src/data/artists.ts` (44 records; headliners plus roster, with `fullBio`, hometown, instrument, influences, signature song, favorite lyric, socials, photo, photo position). Sponsor tiers live in `src/data/sponsors.ts`.
- **Donations** run through Pulley: `app.getpulley.app/donate/qcsi`, campaign `qcsi2026`, plus a by-check path. Sponsorship packages are canonical **in Pulley**, not in this repo — Legend/Presenting $5,000 · Troubadour $1,000 · Songsmith $500 · Busker $300 · Fan $50.
- **Contact** is a Notion form embed (`heathjohnson.notion.site/ebd//320f6ac441bb80709bfdce9af7094e60`). There is no server-side mail route and no newsletter system.
- **No ticketing exists yet** for the 2026 Invitational (confirmed 2026-08-03). Lineup is unannounced. The real primary actions on event surfaces are *get notified* and *donate*; a ticket path must be able to drop in cleanly once it exists.
- 48 photographs in `public/photos/` — documentary images of real rounds, venues, performers, and audiences. This is the strongest asset the site owns.
- Three YouTube embeds are already in use on the site.

## Brand Commitments

- Name: **Queen City Songwriters Incorporated** (QCSI). Spearfish is "the Queen City."
- Logo mark: a crown over "QUEEN CITY SONGWRITERS." Redrawn as vector 2026-08-04, replacing the AI-generated raster original (which had no vector source and irregular letterforms). Lockups live in `public/brand/` — `qcsi-mark.svg` (crown alone), `qcsi-logo-stacked.svg`, `qcsi-logo-horizontal.svg`, plus `qcsi-logo-512.png` for consumers that cannot take SVG. In-app, use the inline components in `src/components/Logo.tsx` so `currentColor` inherits. The wordmark is Archivo outlined at `wght 800 / wdth 88`, matching the site's own type.
- 501(c)(3), **EIN 99-3218012**. 810 State St., Spearfish, SD 57783.
- Socials: `@qcsongwriters` on Instagram and Facebook.
- **Voice** is documented and binding: `ventures/qcsi/fundraising/qcsi-voice-profile.md`. Warm, plain-spoken, craft-reverent. Speaks as *songwriters about songs*. "We" and "our community," almost never "I."
- Established signature lines to reuse rather than overwrite: "Every song carries a story, and every story deserves to be heard." · "No covers. No backing tracks. Just artists and their songs." · "Curated, not competitive." · "If you have a song, you have a seat at the table." · "When artists are supported, entire communities are enriched." · "A beacon for original music in the Black Hills."
- **Hard voice avoids:** never make covers or familiar songs the enemy — the gap QCSI fills is the listening room for original work, "played but not *heard*," never "cover gigs are bad." No competitive or ranking language. No ad-buy framing for sponsors. No Matthews institutional framing. No consulting/SaaS jargon.
- **Palette and typography are open** for redesign as of 2026-08-03 (confirmed by owner). The incumbent palette (charcoal `#1C1612`, cream `#F5F0E8`, amber `#C4923A`, denim `#4A6D8C`) and type pair (Playfair Display / Source Sans 3) are mirrored in the promo art kit at `ventures/qcsi/invitational/2026/promo/brand.css`; that kit regenerates via `render.sh` and must be re-rendered to match whatever the site commits to.

## Evidence on Hand

**Real and usable:**
- 2026 headliner **Jeffrey Foucault**, Saturday September 26, 2026 — confirmed, with photo (credit: Joe Navas) and press quotes: "stark, literate songs that are as wide open as the landscape of his native Midwest" (The New Yorker), "contemporary and timeless" (The New York Times), "songwriting brilliance" (Irish Times).
- Past headliners: Jonathan Byrd and Jami Lynn (2024, inaugural — 27 songwriters, 18 rounds, 6 venues, two sold-out evenings at The Matthews); Andrea von Kampen and John Fullbright (2025, second annual — 20+ songwriters, 6 venues).
- Three real attributed testimonials: Allison Moore (venue owner), Jami Lynn (2024 headliner), Joanna Mechaley (The Matthews Opera House).
- Named sponsors and partners: Munro Earthmoving, Edward Jones (Chris Mitchell), Legacy Financial, Sundance State Bank, Coeur Wharf, Spearfish Creek Wine Bar. Grant support from South Dakota Arts Council and Visit Spearfish.
- Venue partners: The Matthews Opera House & Arts Center, Spearfish Creek Wine Bar, False Bottom Bar, Spearfish Public House, Spearfish Brewing Co.
- Full artist roster with bios in `src/data/artists.ts`.
- Published money model: 67% artist fees and support / 22% production and venues / 11% marketing and community. Anchors: $25 covers printed materials for one songwriter, $100 funds a full round, $500 sponsors a venue.
- Goal stack: $10,000 live 2026 campaign gap ⊂ $20,000 event budget ⊂ $50–65K year-one org goal ⊂ $100,000/year sustained ambition.

**Site headline figures — owner-confirmed accurate 2026-08-03:** 96+ songwriters in the network · 6 downtown venues · 300+ attendees annually · 3 years running.
Note: `ventures/qcsi/fundraising/case-statement.md` describes 300+/30+/6+ as 2026 *targets* and calls 2026 the "2nd year." That file is inconsistent with the site and with its own past-editions record; the site figures are the confirmed ones and the case statement needs correcting.

**Must not be fabricated:** ticket prices or ticket links (none exist), the 2026 lineup (unannounced), attendance or revenue figures beyond those above, board roster, any sponsor not named above.

## Product Principles

1. **The room is the product.** Every surface should make a visitor feel what it is like to sit close enough to hear the story behind a song. Scale, intimacy, and attention are the subject — not "event marketing."
2. **Curated, not competitive.** Never rank, crown, or grade artists. Presentation treats every writer on the roster as invited, not as competing for placement.
3. **Show the real room.** The photographs are of actual rounds in actual Spearfish venues. Real documentary evidence outranks decoration, illustration, or stock.
4. **Four audiences, one door each.** Songwriter, audience member, sponsor, and funder each need an obvious path. Serving all four on one page is the recurring design problem.
5. **Pay artists on purpose, and say so.** Where the money goes is public and specific; that transparency is part of the pitch, not fine print.

## Accessibility & Inclusion

"Accessible & Inclusive" is one of QCSI's three published values: all backgrounds, genres, and experience levels — "if you have a song, you have a seat at the table." No product-specific conformance standard has been established beyond meeting ordinary WCAG AA expectations for a public nonprofit site.
