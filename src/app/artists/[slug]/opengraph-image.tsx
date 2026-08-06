import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { getArtistBySlug } from "@/data/artists";

/* One fixed silhouette for every artist — recognition wants sameness. The
   card is the running-order world flattened to what satori can draw: floor
   ground, chalk name in condensed Archivo, one straight strip of tape.
   Fonts are static TTFs instanced from the same Archivo variable font the
   site runs (wght 800 / wdth 70), committed in src/assets — satori reads
   neither Google Fonts links nor woff2. */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Queen City Songwriters Invitational artist";

const FLOOR = "#0F0F11";
const CHALK = "#E9E9E5";
const CHALK_DIM = "#9C9C98";
const TAPE = "#FF5A26";
const INK = "#17171A";

const CROWN =
  "M 19 90 L 10 42 C 17 55, 27 58, 36 58 C 46 57, 53 40, 59 21 L 71 21 C 77 40, 84 57, 94 58 C 103 58, 113 55, 120 42 L 111 90 Q 65 78, 19 90 Z";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  const name = (artist?.name ?? "Queen City Songwriters").toUpperCase();
  const on2026 = artist?.year.includes(2026) ?? false;
  const strip = artist?.headliner
    ? `${Math.max(...(artist?.year ?? [2026]))} INVITATIONAL HEADLINER`
    : on2026
      ? "2026 INVITATIONAL · SEPT 25–26"
      : "QUEEN CITY SONGWRITERS INVITATIONAL";
  /* one item per side — satori won't ellipsize, so truncate in JS */
  const home = (artist?.hometown ?? "Spearfish, S.D.").toUpperCase();
  const footerLeft = home.length > 44 ? home.slice(0, 41) + "…" : home;

  const assets = path.join(process.cwd(), "src/assets");
  const [archivo, courier] = await Promise.all([
    readFile(path.join(assets, "archivo-condensed-800.ttf")),
    readFile(path.join(assets, "courier-prime-400.ttf")),
  ]);

  /* no textLength in satori — size the name to the measure by character count */
  const fontSize = Math.min(150, Math.round(1980 / Math.max(name.length, 8)));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: FLOOR,
          padding: "56px 64px",
        }}
      >
        {/* presenter row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="52" height="46" viewBox="0 0 130 116">
            <path d={CROWN} fill={CHALK} />
            <circle cx="10" cy="42" r="10" fill={CHALK} />
            <circle cx="120" cy="42" r="10" fill={CHALK} />
            <circle cx="65" cy="12" r="12" fill={CHALK} />
            <path
              d="M 21 106 Q 65 98 109 106"
              fill="none"
              stroke={CHALK}
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              fontFamily: "Courier Prime",
              fontSize: 22,
              letterSpacing: 6,
              color: CHALK_DIM,
            }}
          >
            QUEEN CITY SONGWRITERS PRESENTS
          </div>
        </div>

        {/* the name fills the middle */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Archivo",
              fontSize,
              lineHeight: 0.95,
              letterSpacing: -1,
              color: CHALK,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              background: TAPE,
              color: INK,
              fontFamily: "Courier Prime",
              fontSize: 24,
              letterSpacing: 4,
              padding: "12px 22px",
              transform: "rotate(-0.6deg)",
              alignSelf: "flex-start",
            }}
          >
            {strip}
          </div>
        </div>

        {/* run data at the foot */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `3px solid #2E2E34`,
            paddingTop: 22,
            fontFamily: "Courier Prime",
            fontSize: 21,
            letterSpacing: 4,
            color: CHALK_DIM,
          }}
        >
          <div>{footerLeft}</div>
          <div style={{ color: TAPE }}>QCSONGWRITERS.COM</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo, style: "normal", weight: 800 },
        { name: "Courier Prime", data: courier, style: "normal", weight: 400 },
      ],
    }
  );
}
