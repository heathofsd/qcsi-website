---
name: Queen City Songwriters
description: The running order — a stage-floor working document for a listening room in the Black Hills.
colors:
  floor: "#0F0F11"
  floor-raised: "#1A1A1E"
  floor-line: "#2E2E34"
  chalk: "#E9E9E5"
  chalk-dim: "#9C9C98"
  paper: "#F4F5F2"
  paper-edge: "#D8D9D3"
  ink: "#17171A"
  pencil: "#6C6C66"
  ballpoint: "#2B3A8F"
  tape: "#FF5A26"
  tape-press: "#D8410F"
  tape-ink: "#C63C0C"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 70"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 78"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0em"
  lead:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body-dense:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  cue-lg:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.01em"
  label:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
  label-sm:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.09em"
rounded:
  none: "0px"
spacing:
  hair: "4px"
  tight: "8px"
  snug: "16px"
  step: "24px"
  gap: "40px"
  band: "72px"
  act: "120px"
components:
  button-primary:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 34px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.tape-press}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "18px 34px"
    typography: "{typography.label}"
  button-ghost-hover:
    backgroundColor: "{colors.floor-raised}"
    textColor: "{colors.tape}"
  run-row:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "22px 0"
  run-row-hover:
    backgroundColor: "{colors.floor-raised}"
    textColor: "{colors.tape}"
  paper-block:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "40px"
---

# Design System: Queen City Songwriters

## Overview

**Creative North Star: "The Running Order"**

A round is a running order: three writers, play a song, tell the story behind it, pass. The artifact that has always held that is the setlist — paper taped to a monitor wedge twenty minutes before doors, titles in hard caps so they read from six feet away in the dark, the story pencilled in the margin beside the title. QCSI's entire product is the note beside the title, so the site is built as the document that holds it.

The physical scene that decides everything: a songwriter kneeling on a dark stage floor under work light, taping a paper running order to a wedge. That forces the material stack — a matte black floor as the ground, bright copier-white paper where dense content lives, and hand-torn fluorescent gaff tape doing the structure and wayfinding, because spike tape is loud on purpose so it reads under stage light. Nothing here is cream, nothing is a serif, nothing is an arts brochure.

The system is a working document, not an editorial layout. Information arrives as ruled full-measure rows carrying a time, a place, and a subject. Photography is documentary evidence stapled to the page, not atmosphere behind a scrim. The register is warm and craft-reverent in its words and utilitarian in its surfaces — the warmth comes from the photographs and the writing, never from softening the material.

**Key Characteristics:**
- Matte stage-floor black ground with bright paper blocks cut into it
- Hand-torn fluorescent orange tape as the only structural accent
- Condensed grotesque caps for the running order; typewriter mono for all working data
- Zero corner radius anywhere — paper is cut, tape is torn, the floor is flat
- Ruled rows, not cards, as the universal content container
- Photographs at full strength, never behind a decorative scrim

## Colors

A stage floor under work light: near-black ground, harsh white paper, one fluorescent tape that has to be seen from the back of the room.

### Primary
- **Spike Tape Orange** (`#FF5A26`): The structure and wayfinding system. Every primary action, every active state, every torn strip that marks a boundary or a heading. Fluorescent by intent — real spike tape is this loud so it reads under stage light. Carries black text, never white.
- **Tape Pressed** (`#D8410F`): The pressed-down state — hover and active on tape surfaces only. It is a *background*, never small text: on copier paper it measures 4.10:1 and fails.
- **Tape Ink** (`#C63C0C`): The same orange, darkened only so it can carry small text on paper — section cues, tier names, video labels. Measures 4.73:1 on `#F4F5F2`. On the floor, tape orange itself is used (6.0:1) and this token is not needed.

### Secondary
- **Ballpoint Blue** (`#2B3A8F`): The margin-note ink. Links and annotations inside paper blocks only; it never appears on the floor.

### Neutral
- **Stage Floor** (`#0F0F11`): The primary ground for the entire site. Matte, faintly cool, the color of masonite under work light.
- **Floor Raised** (`#1A1A1E`): Rows and panels resting on the floor — hover beds, header, table stripes.
- **Floor Line** (`#2E2E34`): Rules and dividers on the floor.
- **Chalk** (`#E9E9E5`): Primary text on the floor.
- **Chalk Dim** (`#9C9C98`): Secondary text on the floor. Verified 6.9:1.
- **Copier Paper** (`#F4F5F2`): The field for dense content — bios, tiers, forms, FAQ. Bright and faintly cool, with optical-brightener whiteness. Explicitly not cream.
- **Paper Edge** (`#D8D9D3`): Cut edges and rules inside paper blocks.
- **Sharpie Ink** (`#17171A`): Primary text on paper.
- **Pencil** (`#6C6C66`): Secondary text on paper. Verified 4.7:1.

### Named Rules
**The One Roll Rule.** There is exactly one accent on this site and it is tape orange. No second accent color is ever introduced for variety — if something needs to stand apart, it changes field (floor to paper) or it changes type register, never hue. `tape-press` and `tape-ink` are the same roll at different pressures, not additional colors. The incumbent denim, sage, and leather are retired.

**The Field Rule.** Every region belongs to either the floor or the paper. Text colors are drawn from that field's own pair and are never mixed across: chalk never sits on paper, ink never sits on the floor, ballpoint blue exists only on paper.

**The Black-On-Tape Rule.** Tape orange always carries `#17171A` text (5.8:1), never white. White on fluorescent orange fails contrast and reads as a warning label.

## Typography

**Display Font:** Archivo (variable, `wdth` 62–125 / `wght` 100–900), fallback Arial Narrow, sans-serif
**Body Font:** Archivo at normal width
**Label/Mono Font:** Courier Prime (400/700, roman and italic), fallback ui-monospace

**Character:** A condensed grotesque set hard in caps is what a setlist looks like when it has to be read from six feet away in the dark; a typewriter mono is what a run sheet looks like when it carries times and room codes. The pair says working document, not magazine. One family carries display and body via its width axis, which keeps the system disciplined — the change from headline to paragraph is a change of width and case, not a change of voice.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 9vw, 6rem)`, 0.92, `wdth 70`, uppercase): Page titles and the running-order headline. Set tight, filling the measure.
- **Headline** (800, `clamp(1.75rem, 4vw, 3rem)`, 0.98, `wdth 78`, uppercase): Section headings and artist names.
- **Title** (700, 1.125rem, 1.2, `wdth 92`): Row subjects, card names, question text.
- **Lead** (400, `clamp(1.125rem, 2vw, 1.375rem)`, 1.5, max 60ch): The one paragraph directly under a page title. Exactly one per page.
- **Body** (400, 1.0625rem, 1.6, max 68ch): Paragraphs, bios, descriptions.
- **Body Dense** (400, 0.9375rem, 1.6): Supporting prose inside a run row or a benefit list, where a full body step would crowd the row.
- **Cue Large** (Courier Prime 400, 1.5rem, `0.01em`): A count on a run sheet — the record figures, the money split, the sponsorship reach. Still mono, still a datum, just legible.
- **Label** (Courier Prime 400, 0.8125rem, `0.06em`, uppercase): Times, venue codes, round numbers, dates, credits, button text, form labels.
- **Label Small** (Courier Prime 400, 0.6875rem, `0.09em`, uppercase): Margin notes, photo captions, photo credits, legal lines.

### Named Rules
**The Run Sheet Rule.** Anything that is data on a run sheet — a time, a date, a room, a number, a credit, a tier price, an EIN — is set in Courier Prime. Anything that is a subject is set in Archivo. A designer choosing between them asks "would this be typed into a run sheet, or written on the setlist?" Mono is never used to make prose look technical.

**The Full Measure Rule.** Display type fills its measure. A headline that leaves a ragged third of the line empty gets its width axis or size adjusted until it fills, the way a wood-type band fills its slug.

## Layout

The universal container is a **ruled row**, not a card. A row is a three-part grid — mono cue on the left, subject in the middle, mono meta on the right — separated from its neighbors by a 1px rule and nothing else. The schedule, the venue list, the artist roster, the sponsor tiers, the record figures, and the nav all use it, which is what makes the whole site read as one continuous document. The footer is the exception: it is a four-column link list, because a credit block of twelve destinations reads faster as columns than as twelve full-measure rows.

Container is `max-width: 1200px` with 24px gutters (32px at `lg`). The row grid is `128px minmax(0, 1fr) auto` at `md` and up — the cue column is sized to hold a full 12-hour time cue ("SAT 12:00 PM") on one line, and cues never wrap at that breakpoint. Below that it stacks to a single column — cue, subject, then whatever the row carries — so times stay scannable at the top of each entry. Because the stack can run to four lines, the meta drops to the Label Small step at reduced opacity (`.run-meta`) so it never reads as a second venue line under the first.

Rhythm uses the spacing scale: 72px between bands inside a section, 120px between sections. More space above a heading than below it, always — the heading belongs to what follows it. Paper blocks are cut into the floor at full-bleed or at container width; they never float with a margin on all four sides like a card.

Breakpoints: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.

## Elevation & Depth

**No shadows.** This system is physically flat — paper lies on a floor, tape lies on paper. Depth comes from three devices only: field change (floor to paper is the strongest separation available), the 1px rule, and physical rotation on tape strips. Nothing glows, nothing lifts, nothing blurs.

The single exception is the artist detail overlay, which uses a plain `rgba(15,15,17,0.86)` backdrop to darken the page behind it. That is a scrim, not an elevation.

### Named Rules
**The Flat Floor Rule.** No `box-shadow` anywhere in the system. If an element needs to separate from its neighbor, it changes field or takes a rule. A shadow on this site is always a mistake.

## Shapes

**Zero radius, everywhere.** `border-radius: 0` is the system default and there are no exceptions — not on buttons, images, inputs, video embeds, or the artist overlay. Paper is cut with a blade, tape is torn by hand, and the floor has no corners.

The one irregular silhouette in the system is the **torn tape end**: a tape strip's left and right edges are ragged (hand-torn) while its top and bottom stay straight (cut by the roll width). This is produced with a deterministic `clip-path` polygon, never with a decorative image. Tape strips sit at a slight rotation between `-0.6deg` and `0.6deg` — enough to read as applied by hand, never enough to look playful.

## Components

### Buttons
- **Shape:** Square (0 radius). Text is Courier Prime uppercase with `0.06em` tracking.
- **Primary:** A torn tape strip — tape orange ground, sharpie-ink text (5.8:1), 18px/34px padding, slight rotation. This is the only place tape carries an action. The torn `clip-path` lives on a `::before` at `z-index: -1`, never on the button itself, because clipping the element would also clip its focus outline.
- **Hover / Focus:** The pseudo-element's ground shifts to tape-press and the rotation flattens to `0deg` over 160ms — the tape being pressed down. Focus-visible takes a 2px tape outline at 3px offset.
- **Ghost:** Transparent with a 1px floor-line border; on hover the bed fills to floor-raised and the label turns tape orange.
- **On paper:** The same primary tape button; the ghost variant swaps its border to paper-edge and its label to ink.

### Run Row (signature component)
The spine of the site. A full-measure row of `128px minmax(0, 1fr) auto`: a Courier Prime cue (a time, a year, a number, a tier price), an Archivo subject, and a Courier Prime meta value right-aligned. A 1px `floor-line` rule sits below. On hover the row's bed fills to floor-raised, the cue turns tape orange, and the row takes 12px of left padding — a line being followed with a finger. Rows that link also carry a tape-orange `→` at the far right that shifts 5px on hover; it is the only rest-state cue that a row is interactive, so it is required on every linking row. Rows are anchors, buttons, or plain content depending on context, and keyboard focus gets exactly the treatment hover does.

### Paper Block
- **Corner Style:** Square (0 radius).
- **Background:** Copier paper. Used wherever content is dense enough to need a reading field: bios, FAQ answers, sponsor tiers, forms, organization details.
- **Shadow Strategy:** None; see Elevation.
- **Border:** None by default. A `paper-edge` 1px rule divides content inside the block.
- **Internal Padding:** 40px (24px on mobile).

### Margin Note
A 164px left gutter divided by a vertical `paper-edge` rule, right-aligned, collapsing to a stacked label below `md`. The gutter holds a Courier Prime note — the story, the tier price, the attribution, the lyric — set in `pencil`. This is where "the note beside the title" literally lives, and it is the system's most product-specific pattern.

### Motion
One authored device, two triggers. Rows draw themselves in from the left (`clip-path: inset(0 100% 0 0)` → `inset(0)`, with a 14px slide) as they are read down the page. Below the fold this rides a `view()` scroll timeline whose range closes early (`entry 0%` → `entry 60%`) so a partly-visible row is never left half-drawn at rest; above the fold the same keyframes run on load with a 90ms per-row stagger. The lead tape strip lands once on load, rotating from `-2.6deg` to its rest tilt over 560ms. All of it sits inside `prefers-reduced-motion: no-preference` and the scroll variant inside `@supports (animation-timeline: view())`, so content is fully visible by default in every unsupported or reduced case.

### Tape Strip
A hand-torn fluorescent strip with jagged left and right ends and straight top and bottom, rotated between `-0.6deg` and `0.6deg`. Used to mark a section boundary, carry a primary action, or flag a headliner. Text on tape is Courier Prime uppercase in sharpie ink.

### Inputs / Fields
The site owns no form controls. The only form is the Notion embed on `/contact`, which renders in its own typeface inside its iframe and cannot be styled from here. No input tokens exist, deliberately — documenting a field style nothing uses would be fiction. If a native form is ever added, derive it from the paper field: copier-paper ground, 1px `pencil` border, 0 radius, a Courier Prime uppercase label above, and a 2px tape border on focus with no glow.

### Navigation
Courier Prime uppercase, `0.06em` tracking, chalk-dim on the floor, tape orange on hover. The active route is marked by a short tape strip beneath the label *and* `aria-current="page"`, never by color alone.

Below `xl` it collapses to a full-height floor panel (`min-height: calc(100vh - 74px)`) of the same run rows, with the tape Give strip pushed to the bottom by `mt-auto` so it closes the list rather than floating mid-panel. The panel marks its active route in tape orange with a mono "Here" in the meta column. It closes on Escape and locks body scroll while open — it is a real panel, not a dropdown. The toggle is a square button that morphs to an X, never a rounded pill.

### Skip Link
A tape strip fixed at the top left, translated off-screen until `:focus`. Required: the sticky header carries eight nav items on every route, so keyboard users would otherwise tab through all of them on every page.

### Contact Sheet
The gallery is a numbered contact sheet, not a tile wall: every frame carries a `2025.03`-style mono index and a short caption on a ruled line beneath it. In a system whose thesis is that the story lives in the margin beside the title, an uncaptioned photograph is the one thing that cannot ship.

### Artist Entry
The roster is rows, not a grid of portraits — a Courier Prime index number, the artist's name in Archivo, hometown and instrument as mono meta. Opening one reveals the full record in a square overlay whose left column is the photograph at full strength and whose right column is the bio plus a mono detail list. The favorite lyric sits in the margin-note gutter.

## Do's and Don'ts

### Do:
- **Do** build every list, schedule, roster, and tier table out of the run row. It is what makes ten pages read as one document.
- **Do** set every time, date, price, room name, number, and credit in Courier Prime, and every subject in Archivo.
- **Do** put dense reading content on a paper block and let it cut full-width into the floor.
- **Do** run photographs at full strength and full bleed. They are the evidence.
- **Do** keep tape rare enough to mean something — roughly one strip per viewport.
- **Do** give hover, focus-visible, and active the same treatment on run rows, so keyboard and mouse read identically.

### Don't:
- **Don't** introduce a second accent color. See The One Roll Rule.
- **Don't** use `border-radius` anywhere, including on images, iframes, and video embeds.
- **Don't** use `box-shadow` anywhere. See The Flat Floor Rule.
- **Don't** put white text on tape orange; it fails contrast. See The Black-On-Tape Rule.
- **Don't** lay a dark scrim over a photograph to make type legible — move the type onto the floor or onto tape instead.
- **Don't** revive the retired palette (denim `#4A6D8C`, sage `#7D8C6E`, leather `#6B4226`, cream `#F5F0E8`, sand `#E8DFD0`, amber `#C4923A`) or the retired type pair (Playfair Display, Source Sans 3).
- **Don't** wrap content in same-size cards with an icon, a heading, and a paragraph. Rows or paper blocks, never card grids.
- **Don't** use generic outline icons as section decoration. The retired sun/moon/star/people icons do not return.
