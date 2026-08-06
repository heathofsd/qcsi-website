import Link from "next/link";
import Image from "next/image";
import type { Artist } from "@/data/artists";
import { getArtistBySlug } from "@/data/artists";
import { RunRow } from "@/components/run";

/* Roster rows and headliner cards link to the artist's own page at
   /artists/<slug>. The old in-page overlay is gone: a page is shareable,
   indexable for the artist's name, and doubles as their press kit — an
   overlay is none of those. Server components now; no client state left. */

function pageFor(artist: Artist): string | undefined {
  return getArtistBySlug(artist.slug) ? `/artists/${artist.slug}` : undefined;
}

/* --------------------------------------------------------------- roster row --- */

export function ArtistRow({
  artist,
  index,
  paper = false,
}: {
  artist: Artist;
  index: number;
  paper?: boolean;
}) {
  const href = pageFor(artist);
  const meta = artist.instrument || artist.signatureSong || "";
  const cue = String(index + 1).padStart(2, "0");

  return (
    <RunRow cue={cue} meta={href ? meta || "Read record" : meta} href={href} paper={paper}>
      <span className="t-title run-subject">{artist.name}</span>
      {artist.hometown && (
        <span
          className={`t-run block mt-1.5 ${
            paper ? "text-pencil" : "text-chalk-dim"
          }`}
        >
          {artist.hometown}
        </span>
      )}
    </RunRow>
  );
}

/* ---------------------------------------------------------- headliner card --- */

export function HeadlinerCard({ artist }: { artist: Artist }) {
  const href = pageFor(artist);

  const inner = (
    <>
      <div className="relative aspect-[3/4]">
        {artist.photo ? (
          <Image
            src={artist.photo}
            alt={`${artist.name}, Queen City Songwriters Invitational headliner`}
            fill
            className="object-cover"
            style={
              artist.photoPosition
                ? { objectPosition: artist.photoPosition }
                : undefined
            }
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-floor-raised" />
        )}
      </div>
      <div className="pt-3 mt-3 border-t border-floor-line flex items-baseline justify-between gap-3">
        <span className="t-title text-chalk group-hover:text-tape transition-colors">
          {artist.name}
        </span>
        <span className="t-run text-chalk-dim">{artist.year.join(", ")}</span>
      </div>
    </>
  );

  return href ? (
    <Link href={href} className="group block">
      {inner}
    </Link>
  ) : (
    <div className="group">{inner}</div>
  );
}

export default ArtistRow;
