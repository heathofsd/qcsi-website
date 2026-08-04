import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright-core";
import { encodeRGBA } from "./png.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

/** Chrome is looked up, not hardcoded — the playwright cache path moves. */
function findChrome() {
  const candidates = [
    process.env.CHROME,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`,
  ].filter(Boolean);
  for (const c of candidates) if (fs.existsSync(c)) return c;
  throw new Error("No Chrome found. Set CHROME=/path/to/chrome");
}

const REPO = path.resolve(HERE, "../..");
const BRAND = path.join(REPO, "public/brand");
const APP = path.join(REPO, "src/app");
fs.mkdirSync(BRAND, { recursive: true });

const TAPE = "#FF5A26", INK = "#17171A";
const read = (f) => fs.readFileSync(path.join(HERE, f), "utf8");

/* ---- 1. standalone SVGs for external use (print, sponsors, socials) ---- */
for (const [src, out] of [
  ["logo-horizontal.svg", "qcsi-logo-horizontal.svg"],
  ["logo-stacked.svg", "qcsi-logo-stacked.svg"],
  ["mark.svg", "qcsi-mark.svg"],
]) {
  // standalone files get a concrete fill so they render correctly as <img>
  fs.writeFileSync(path.join(BRAND, out), read(src).replace('fill="currentColor"', `fill="${INK}"`).replace(/stroke="currentColor"/g, `stroke="${INK}"`));
  console.log("public/brand/" + out);
}

/* ---- 2. app icon: the mark on tape orange, full bleed ---- */
const mark = read("mark.svg");
const inner = mark.replace(/<\/?svg[^>]*>/g, "").replace(/<title>.*?<\/title>/, "").trim();
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${TAPE}"/>
  <g transform="translate(76 138) scale(2.77)" fill="${INK}">
${inner.replace(/stroke="currentColor"/g, `stroke="${INK}"`)}
  </g>
</svg>
`;
fs.writeFileSync(path.join(APP, "icon.svg"), iconSvg);
fs.writeFileSync(path.join(HERE, "icon-preview.svg"), iconSvg);
console.log("src/app/icon.svg");

/* ---- 3. raster sizes from the same SVG ---- */
const browser = await chromium.launch({ executablePath: findChrome() });
const page = await browser.newPage();
const png = async (size) => {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<body style="margin:0">${iconSvg.replace("<svg", `<svg width="${size}" height="${size}"`)}</body>`);
  await page.waitForTimeout(140);
  // pull raw RGBA out of a canvas and encode it ourselves — Chromium writes
  // colour-type-2 (no alpha) for fully opaque captures, which the ICO decoder rejects
  const rgba = await page.evaluate(async (s) => {
    const svg = document.querySelector("svg");
    const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url; });
    const c = document.createElement("canvas"); c.width = s; c.height = s;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, s, s);
    URL.revokeObjectURL(url);
    return Array.from(ctx.getImageData(0, 0, s, s).data);
  }, size);
  return encodeRGBA(Buffer.from(rgba), size, size);
};
fs.writeFileSync(path.join(APP, "apple-icon.png"), await png(180));
console.log("src/app/apple-icon.png (180)");

/* ---- 4. favicon.ico — ICO container holding PNG frames ---- */
const sizes = [16, 32, 48];
const frames = [];
for (const s of sizes) frames.push({ s, buf: await png(s) });
await browser.close();

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(frames.length, 4);
const dir = Buffer.alloc(16 * frames.length);
let offset = 6 + dir.length;
frames.forEach((f, i) => {
  const o = i * 16;
  dir.writeUInt8(f.s === 256 ? 0 : f.s, o);
  dir.writeUInt8(f.s === 256 ? 0 : f.s, o + 1);
  dir.writeUInt8(0, o + 2); dir.writeUInt8(0, o + 3);
  dir.writeUInt16LE(1, o + 4); dir.writeUInt16LE(32, o + 6);
  dir.writeUInt32LE(f.buf.length, o + 8);
  dir.writeUInt32LE(offset, o + 12);
  offset += f.buf.length;
});
fs.writeFileSync(path.join(APP, "favicon.ico"), Buffer.concat([header, dir, ...frames.map(f => f.buf)]));
console.log("src/app/favicon.ico (16/32/48)");

/* ---- 5. keep a PNG of the stacked mark for anyone who needs raster ---- */
console.log("\nfavicon.ico bytes:", fs.statSync(path.join(APP, "favicon.ico")).size);
