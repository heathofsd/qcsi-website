# Brand tooling

Regenerates the QCSI logo lockups and the app icon set. You only need this when
the mark itself changes — the outputs are committed, so normal work never runs it.

```bash
cd scripts/brand
npm install      # first time only
npm run build
```

## What it produces

| Output | From |
|---|---|
| `public/brand/qcsi-logo-horizontal.svg` | crown paths + outlined wordmark |
| `public/brand/qcsi-logo-stacked.svg` | ” |
| `public/brand/qcsi-mark.svg` | crown alone |
| `src/app/icon.svg` | crown in ink on spike-tape orange |
| `src/app/apple-icon.png` | 180 × 180 |
| `src/app/favicon.ico` | 16 / 32 / 48 |

`src/components/Logo.tsx` is **not** generated — it was derived from these SVGs
by hand. If the mark changes, update it to match.

## Why the font is committed

`Archivo.ttf` is the variable font from Google Fonts (OFL). `build-logo.mjs`
instances it at `wght 800 / wdth 88` — the same axis values the site's own
display type uses — and converts the wordmark to **outlines**. That is the whole
point of the redraw: the logo depends on no font being installed anywhere.

opentype.js can't shape this font (`substFormat 2` in a ccmp lookup throws), so
glyphs are composed directly by `charToGlyph` and advance widths. Fine for
uppercase Latin; it would not be for anything needing real shaping.

## Two things that will bite you

**The ICO frames are hand-encoded to RGBA.** Chromium writes colour-type 2 (no
alpha) for fully opaque captures, and Turbopack's ICO decoder rejects that with
`Format error decoding Ico: The PNG is not in RGBA format!` — a build failure,
not a warning. `png.mjs` exists solely to encode true RGBA. Don't replace it
with a plain screenshot.

**Output is not byte-reproducible.** The SVGs are; the ICO is not. Canvas
antialiasing varies slightly between runs, so `favicon.ico` changes by a few
dozen bytes each time even with identical input. Visually identical, but don't
expect a clean `git diff` after a no-op rebuild.

## Isolated on purpose

This directory has its own `package.json` so `playwright-core` never lands in
the site's dependency tree, where Vercel would install it on every build.
