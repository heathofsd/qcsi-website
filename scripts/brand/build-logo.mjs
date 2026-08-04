import ot from "opentype.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const here = (f) => path.join(HERE, f);

const buf = fs.readFileSync(here("Archivo.ttf"));
const font = ot.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
const UPM = font.unitsPerEm;

function outline(text, { size, wght, wdth, tracking = 0, x = 0, y = 0 }) {
  font.variation.set({ wght, wdth });
  let cx = x;
  const parts = [];
  for (const ch of text) {
    const g = font.charToGlyph(ch);
    const d = g.getPath(cx, y, size).toPathData(3);
    if (d) parts.push(d);
    cx += (g.advanceWidth / UPM) * size + tracking;
  }
  return { d: parts.join(" "), width: cx - tracking - x };
}
const widthOf = (t, o) => outline(t, { ...o, x: 0, y: 0 }).width;

/* solve the tracking that makes `text` hit a target width at a given size */
function trackTo(text, target, o) {
  const base = widthOf(text, { ...o, tracking: 0 });
  return (target - base) / (text.length - 1);
}

const CROWN = `M 19 90 L 10 42 C 17 55, 27 58, 36 58 C 46 57, 53 40, 59 21
  L 71 21 C 77 40, 84 57, 94 58 C 103 58, 113 55, 120 42 L 111 90 Q 65 78, 19 90 Z`;
const crownGroup = (scale, dx, dy) => `  <g transform="translate(${dx} ${dy}) scale(${scale})">
    <path d="${CROWN.replace(/\s+/g, " ").trim()}"/>
    <circle cx="10" cy="42" r="10"/><circle cx="120" cy="42" r="10"/>
    <circle cx="65" cy="12" r="12"/>
    <path d="M 21 106 Q 65 98 109 106" fill="none" stroke="currentColor"
      stroke-width="12" stroke-linecap="round"/>
  </g>`;

const CAP = 0.73; // Archivo cap height as a fraction of em

/* ---------------------------------------------------------------- stacked --- */
{
  const W = 440, PAD = 20;
  const inner = W - PAD * 2;
  const qSize = inner / (widthOf("QUEEN CITY", { size: 100, wght: 800, wdth: 88 }) / 100);
  const sSize = qSize * 0.30;
  const sTrack = trackTo("SONGWRITERS", inner, { size: sSize, wght: 500, wdth: 100 });

  const crownScale = (inner * 0.50) / 130;
  const crownH = 116 * crownScale;
  const crownX = PAD + (inner - 130 * crownScale) / 2;

  const qBase = crownH + 26 + qSize * CAP;
  const sBase = qBase + 20 + sSize * CAP;
  const H = sBase + 6;

  const q = outline("QUEEN CITY", { size: qSize, wght: 800, wdth: 88, x: PAD, y: qBase });
  const s = outline("SONGWRITERS", { size: sSize, wght: 500, wdth: 100, tracking: sTrack, x: PAD, y: sBase });

  fs.writeFileSync(here("logo-stacked.svg"),
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${Math.round(H)}" fill="currentColor">
  <title>Queen City Songwriters</title>
${crownGroup(crownScale.toFixed(4), crownX.toFixed(1), 0)}
  <path d="${q.d}"/>
  <path d="${s.d}"/>
</svg>
`);
  console.log("logo-stacked.svg   ", W + "x" + Math.round(H));
}

/* ------------------------------------------------------------- horizontal --- */
{
  const H = 100, PAD = 4;
  const crownScale = (H - PAD * 2) / 116;
  const crownW = 130 * crownScale;
  const gap = 22;
  const textX = PAD + crownW + gap;

  const qSize = 40;
  const q = outline("QUEEN CITY", { size: qSize, wght: 800, wdth: 88, x: textX, y: 0 });
  const sSize = qSize * 0.34;
  const sTrack = trackTo("SONGWRITERS", q.width, { size: sSize, wght: 500, wdth: 100 });

  const qBase = H / 2 + 2;            // optical centre
  const sBase = qBase + 16 + sSize * CAP;
  const block = qSize * CAP + 16 + sSize * CAP;
  const top = (H - block) / 2;
  const qb = top + qSize * CAP, sb = sBase - (sBase - qb) + 16 + sSize * CAP;

  const qq = outline("QUEEN CITY", { size: qSize, wght: 800, wdth: 88, x: textX, y: qb });
  const ss = outline("SONGWRITERS", { size: sSize, wght: 500, wdth: 100, tracking: sTrack, x: textX, y: sb });
  const W = textX + qq.width + PAD;

  fs.writeFileSync(here("logo-horizontal.svg"),
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.round(W)} ${H}" fill="currentColor">
  <title>Queen City Songwriters</title>
${crownGroup(crownScale.toFixed(4), PAD, PAD)}
  <path d="${qq.d}"/>
  <path d="${ss.d}"/>
</svg>
`);
  console.log("logo-horizontal.svg", Math.round(W) + "x" + H);
}

/* -------------------------------------------------------------------- mark --- */
fs.writeFileSync(here("mark.svg"),
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 116" fill="currentColor">
  <title>Queen City Songwriters</title>
${crownGroup(1, 0, 0)}
</svg>
`);
console.log("mark.svg            130x116");
