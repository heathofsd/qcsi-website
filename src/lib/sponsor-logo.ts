import { existsSync } from "node:fs";
import path from "node:path";
import { LEVEL_RANK, type Sponsor } from "@/data/sponsors";

export type SponsorMark = Sponsor & { logoSrc: string };

function publicFileExists(publicPath: string): boolean {
  const rel = publicPath.replace(/^\/+/, "");
  return existsSync(path.join(process.cwd(), "public", rel));
}

/** People never get a logo. A path without a file on disk is name-only. */
export function resolveSponsorLogo(sponsor: Sponsor): string | undefined {
  if (sponsor.person || !sponsor.logo) return undefined;
  return publicFileExists(sponsor.logo) ? sponsor.logo : undefined;
}

export function partitionSponsors(sponsors: Sponsor[]): {
  withLogo: SponsorMark[];
  nameOnly: Sponsor[];
} {
  const withLogo: SponsorMark[] = [];
  const nameOnly: Sponsor[] = [];

  for (const sponsor of sponsors) {
    const logoSrc = resolveSponsorLogo(sponsor);
    if (logoSrc) withLogo.push({ ...sponsor, logoSrc });
    else nameOnly.push(sponsor);
  }

  return { withLogo, nameOnly };
}

export function logoProminence(
  tier?: string,
): "premium" | "prominent" | "standard" {
  if (tier === "Legend" || tier === "Troubadour") return "premium";
  if (tier === "Songsmith") return "prominent";
  return "standard";
}

export function groupMarksByLevel(marks: SponsorMark[]): {
  cue: string;
  prominence: ReturnType<typeof logoProminence>;
  marks: SponsorMark[];
}[] {
  const groups = new Map<string, SponsorMark[]>();
  for (const mark of marks) {
    const cue = mark.tier ?? "Sponsor";
    const list = groups.get(cue) ?? [];
    list.push(mark);
    groups.set(cue, list);
  }

  return [...groups.entries()]
    .sort(
      ([a], [b]) =>
        (LEVEL_RANK[a] ?? LEVEL_RANK.Sponsor) -
        (LEVEL_RANK[b] ?? LEVEL_RANK.Sponsor),
    )
    .map(([cue, groupMarks]) => ({
      cue,
      prominence: logoProminence(cue),
      marks: groupMarks,
    }));
}
