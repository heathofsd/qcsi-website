import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  pageArtists,
  getArtistBySlug,
  artists2026,
  editionsByYear,
  type Artist,
} from "@/data/artists";
import { Tape, RunRow, Slug, Action } from "@/components/run";
import { TicketCheckout } from "@/components/TicketCheckout";
import { CopyButton } from "@/components/CopyButton";

/* Every artist with a written record gets a page, plus the whole 2026 bill.
   The page is the artist's entry in the running order blown up to a full
   sheet — and it doubles as their press kit, which is why they link it. */

export function generateStaticParams() {
  return pageArtists.map((a) => ({ slug: a.slug }));
}

function hasRecord(a: Artist) {
  return !!(a.fullBio || a.bio);
}

/** The tape carries a fact. Years on the bill is the most personal one. */
function tapeFact(a: Artist): string {
  if (a.headliner) {
    return a.year.includes(2026)
      ? "2026 headliner · Sept 26"
      : `Invitational headliner · ${Math.max(...a.year)}`;
  }
  if (!a.year.includes(2026)) {
    return `Invitational alum · ${a.year.join(" · ")}`;
  }
  const n = a.year.length;
  if (n >= 3) return "Third year in the round";
  if (n === 2) return "Back for another round";
  return "On the 2026 bill";
}

function shortDescription(a: Artist): string {
  const src = a.bio || a.fullBio;
  if (!src) {
    return `${a.name} plays the third annual Queen City Songwriters Invitational, September 25–26, 2026 in downtown Spearfish, SD.`;
  }
  if (src.length <= 158) return src;
  let cut = src.slice(0, 158);
  cut = cut.slice(0, cut.lastIndexOf(" ")).trimEnd().replace(/[,;:—–-]+$/, "");
  let out = /[.!?…]$/.test(cut) ? cut : cut + "…";
  // a bio that opens a quotation must not leave it hanging in a search snippet
  if (((out.match(/["\u201C\u201D]/g) ?? []).length % 2) === 1) out += '"';
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return {};
  const role = artist.headliner
    ? `${Math.max(...artist.year)} Invitational Headliner`
    : artist.year.includes(2026)
      ? "2026 Invitational"
      : "Invitational Artist";
  return {
    title: `${artist.name} — ${role}`,
    description: shortDescription(artist),
    alternates: { canonical: `/artists/${artist.slug}` },
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const rich = hasRecord(artist);
  const on2026 = artist.year.includes(2026);
  const years = [...artist.year].sort((a, b) => b - a);

  /* prev/next walk the 2026 call sheet in its rendered order */
  const idx = artists2026.findIndex((a) => a.slug === artist.slug);
  const prev = idx > 0 ? artists2026[idx - 1] : null;
  const next =
    idx >= 0 && idx < artists2026.length - 1 ? artists2026[idx + 1] : null;

  const details: [string, string | undefined][] = [
    ["Hometown", artist.hometown],
    ["Instrument", artist.instrument],
    ["Influences", artist.influences],
    ["Signature song", artist.signatureSong],
    ["First performance", artist.firstPerformance],
    ["Biggest achievement", artist.biggestAchievement],
    ["Dream collab", artist.dreamCollaboration],
    ["Fun fact", artist.funFact],
  ];
  const shown = details.filter(([, v]) => !!v);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://qcsongwriters.com/artists/${artist.slug}#person`,
    name: artist.name,
    url: `https://qcsongwriters.com/artists/${artist.slug}`,
    description: shortDescription(artist),
    ...(artist.photo
      ? { image: `https://qcsongwriters.com${artist.photo}` }
      : {}),
    ...(artist.hometown ? { homeLocation: artist.hometown } : {}),
    ...(artist.instagram || artist.facebook || artist.website
      ? {
          sameAs: [
            artist.website ?? null,
            artist.instagram
              ? `https://instagram.com/${artist.instagram}`
              : null,
            artist.facebook ? `https://facebook.com/${artist.facebook}` : null,
          ].filter(Boolean),
        }
      : {}),
    ...(on2026
      ? { performerIn: { "@id": "https://qcsongwriters.com/invitational#event" } }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      {/* ------------------------------------------------------- the billing */}
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt={idx % 2 === 0 ? "a" : "b"} className="mb-10">
          {tapeFact(artist)}
        </Tape>
        <h1 className="t-display text-chalk max-w-[14ch]">{artist.name}</h1>
        {(artist.hometown || artist.instrument) && (
          <p className="t-run text-chalk-dim mt-6">
            {[artist.hometown, artist.instrument].filter(Boolean).join(" · ")}
          </p>
        )}
        <div className="flex flex-wrap gap-4 mt-10">
          {on2026 ? (
            <TicketCheckout aff="site-artist">Get tickets</TicketCheckout>
          ) : (
            <Action href="/artists">The artists</Action>
          )}
          <Action href="/artists" variant="ghost">
            Full call sheet
          </Action>
        </div>
      </section>

      {rich ? (
        <>
          {/* --------------------------------------- the story and the proof */}
          <section className="border-t border-floor-line">
            <div className="shell py-16 md:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {artist.photo && (
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={artist.photo}
                        alt={`${artist.name}, Queen City Songwriters Invitational ${artist.headliner ? "headliner" : "artist"}`}
                        fill
                        className="object-cover"
                        style={
                          artist.photoPosition
                            ? { objectPosition: artist.photoPosition }
                            : undefined
                        }
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        priority
                      />
                    </div>
                    {artist.photoCredit && (
                      <p className="t-run-sm text-chalk-dim mt-3">
                        Photo: {artist.photoCredit}
                      </p>
                    )}
                  </div>
                )}
                <div
                  className={artist.photo ? "lg:col-span-7" : "lg:col-span-8"}
                >
                  {/* the story in the margin, at full size — the site's whole
                      thesis applied to one writer */}
                  {artist.favoriteLyric && (
                    <figure className="mb-10">
                      <blockquote className="t-headline text-tape max-w-[24ch]">
                        &ldquo;{artist.favoriteLyric}&rdquo;
                      </blockquote>
                      <figcaption className="t-run text-chalk-dim mt-4">
                        A favorite line
                      </figcaption>
                    </figure>
                  )}
                  <div className="t-body text-chalk-dim space-y-5">
                    {(artist.fullBio || artist.bio || "")
                      .split(/\n+/)
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                  </div>
                  {(artist.instagram || artist.facebook || artist.website) && (
                    <div className="flex flex-wrap gap-3 mt-8">
                      {artist.website && (
                        <a
                          href={artist.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="t-run border border-floor-line px-4 py-2.5 text-chalk-dim hover:text-tape hover:border-tape transition-colors"
                        >
                          Website
                        </a>
                      )}
                      {artist.instagram && (
                        <a
                          href={`https://instagram.com/${artist.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="t-run border border-floor-line px-4 py-2.5 text-chalk-dim hover:text-tape hover:border-tape transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {artist.facebook && (
                        <a
                          href={`https://facebook.com/${artist.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="t-run border border-floor-line px-4 py-2.5 text-chalk-dim hover:text-tape hover:border-tape transition-colors"
                        >
                          Facebook
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ the record */}
          {shown.length > 0 && (
            <section className="bg-paper">
              <div className="shell py-16 md:py-20">
                <Slug cue="The record" title="On file" paper />
                <dl className="border-t border-paper-edge max-w-3xl">
                  {shown.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-1 md:gap-6 py-4 border-b border-paper-edge"
                    >
                      <dt className="t-run text-pencil">{label}</dt>
                      <dd className="t-body text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                {/* one quiet service row — the bio is already on the page,
                    so nothing repeats; press and bookers get the buttons */}
                <div className="max-w-3xl mt-10 pt-5 border-t border-paper-edge flex flex-wrap items-center justify-between gap-4">
                  <p className="t-run text-pencil">For press &amp; bookers</p>
                  <div className="flex flex-wrap gap-3">
                    <CopyButton text={artist.fullBio || artist.bio || ""}>
                      Copy bio
                    </CopyButton>
                    {artist.photo && (
                      <a
                        href={artist.photo}
                        download
                        aria-label={`Download photo of ${artist.name}`}
                        className="t-run border border-paper-edge px-4 py-2.5 text-pencil hover:text-tape-ink hover:border-tape transition-colors"
                      >
                        Download photo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        /* ------------------------------- name-only: the page still exists */
        <section className="border-t border-floor-line">
          <div className="shell py-16 md:py-20">
            <p className="t-lead text-chalk-dim max-w-[52ch]">
              One of {artists2026.length} invited songwriters playing the third annual
              Invitational — six one-hour rounds a day across downtown
              Spearfish, and the Friday night Songwriters Showcase at The
              Matthews Opera House. Bio and photo to come.
            </p>
          </div>
        </section>
      )}

      {/* -------------------------------------------------- their invitational
          record — a credit that accrues year over year */}
      <section className={rich && shown.length > 0 ? "" : "border-t border-floor-line"}>
        <div className="shell py-16 md:py-20">
          <Slug cue="In the round" title="Invitational record" />
          <div className="border-t border-floor-line">
            {years.map((yr) => (
              <RunRow
                key={yr}
                cue={String(yr)}
                meta={editionsByYear[yr]?.note}
                href={yr === 2026 ? "/invitational" : undefined}
              >
                <span className="t-title text-chalk">
                  {editionsByYear[yr]?.ordinal ?? ""} Invitational
                </span>
                <span className="t-run text-chalk-dim block mt-1.5">
                  Downtown Spearfish
                </span>
              </RunRow>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- walk the call sheet */}
      {(prev || next) && (
        <section className="shell pb-20 md:pb-[var(--spacing-act)]">
          <p className="t-run text-tape mb-1">The call sheet</p>
          <div className="border-t border-floor-line">
            {prev && (
              <RunRow cue="Prev" href={`/artists/${prev.slug}`}>
                <span className="t-title run-subject">{prev.name}</span>
              </RunRow>
            )}
            {next && (
              <RunRow cue="Next" href={`/artists/${next.slug}`}>
                <span className="t-title run-subject">{next.name}</span>
              </RunRow>
            )}
          </div>
        </section>
      )}
    </>
  );
}
