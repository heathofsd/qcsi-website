---
version: 1
slug: "src-app-invitational-page-tsx"
primary_target: "src/app/invitational/page.tsx"
related_targets: []
---

# Surface: /invitational

**Scope.** The Invitational event page. Visitor mode: **Persuade**.

**Audience & job.** Two audiences arrive here at once. A Black Hills music-lover deciding whether to give a September weekend to walking a downtown circuit of small rooms, and a prospective sponsor sizing up whether this is real and well-run. Both need to grasp the *format* fast — the round, not "a festival."

**Action.** There is **no ticketing** for 2026 (confirmed 2026-08-03) and the lineup is unannounced. The real primary action is **Get notified** (→ `/contact`, a Notion form), with **Support the 2026 Invitational** (→ Pulley campaign `qcsi2026`) as the secondary. When tickets exist, the ticket CTA replaces "Get notified" as primary in the hero action row and in the closing block; nothing else needs to move.

**Proof on hand.** Jeffrey Foucault confirmed for Saturday Sept 26 with photo (credit: Joe Navas) and press quotes. Two past editions with real counts (2024: 27 songwriters, 18 rounds, 6 venues, two sold-out evenings · 2025: 20+ songwriters, 6 venues, von Kampen and Fullbright). Venue records in `src/data/artists.ts`. Documentary photography of actual rounds.

**Constraints.**
- Never invent times. The only published times are **rounds from noon** and **evening showcases at 19:00**; the run sheet uses exactly those and nothing more precise.
- Never invent ticket prices, links, or the 2026 lineup.
- The page borrows The Matthews stage; it must not adopt that institution's civic-building framing.

**Chosen direction.** The page opens as a literal two-day **run sheet** — day headers, ruled rows of time / subject / venue with a right-aligned mono note, and the Foucault line flagged in the margin the way a headliner is flagged on a real run sheet. This is the surface where the site's whole conceit is most literally true, so it commits hardest.

**Memorable moment.** The margin flag on the Foucault row — a mono `← Headliner` annotation sitting beside the line rather than a badge on top of it. (Hidden below `md`, where there is no margin to annotate into.)

**Unresolved.**
- Ticket URL and on-sale date — blocks the primary-action swap.
- 2026 lineup — when announced, the roster belongs on `/artists` as a new call sheet section, and the run sheet gains per-venue round detail.
- Whether daytime rounds run at three venues or six in 2026; the venue section currently states three from `venues` data while the record cites six.
