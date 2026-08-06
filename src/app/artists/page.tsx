import type { Metadata } from "next";
import Image from "next/image";
import {
  artists2026,
  artists2025,
  artists2024Unreturned,
  headliners,
} from "@/data/artists";
import { ArtistRow, HeadlinerCard } from "@/components/ArtistCard";
import { Tape, RunRow, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "Artists & Headliners",
  alternates: { canonical: "/artists" },
  description:
    "Meet the songwriters who have been part of the Queen City Songwriters Invitational — original voices from across the region.",
};

export default function ArtistsPage() {
  const sortedHeadliners = [...headliners].sort(
    (a, b) => Math.max(...b.year) - Math.max(...a.year)
  );

  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="a" className="mb-10">
          Curated, not competitive
        </Tape>
        <h1 className="t-display text-chalk max-w-[18ch]">
          Original voices of the Invitational
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          Every year, we invite a curated group of songwriters to share their
          original music across downtown Spearfish. These are the artists who
          have answered the call.
        </p>
        <div className="mt-10 border-t border-floor-line pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="t-run text-chalk-dim max-w-[52ch]">
            Jeffrey Foucault headlines the 2026 Invitational &mdash; Saturday,
            September 26.
          </p>
          <div className="flex flex-wrap gap-4">
            <Action href="/contact">Get notified</Action>
            <Action href="/invitational" variant="ghost">
              The Invitational
            </Action>
          </div>
        </div>
      </section>

      <figure>
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/artists-backstage-jam.jpg"
            alt="Songwriters jamming backstage at the Queen City Songwriters Invitational"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          Backstage, between rounds
        </figcaption>
      </figure>

      {/* ----------------------------------------------------------- headliners */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="Evening showcases" title="Headliners">
          The artists who have headlined our evening showcases at The Matthews
          Opera House. Open a name for the full record.
        </Slug>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {sortedHeadliners.map((artist) => (
            <HeadlinerCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- 2026 roster */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="2026 Invitational" title="The call sheet" paper>
            The {artists2026.length} songwriters playing the third annual
            Invitational, September 25&ndash;26. Open a name for the bio, the
            influences, and a favorite line.
          </Slug>
          <div className="border-t border-paper-edge">
            {artists2026.map((artist, i) => (
              <ArtistRow key={artist.slug} artist={artist} index={i} paper />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- 2025 roster */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="2025 Invitational" title="Second annual">
          The songwriters who performed in 2025. Many of them are back this
          year.
        </Slug>
        <div className="border-t border-floor-line">
          {artists2025.map((artist, i) => (
            <ArtistRow key={artist.slug} artist={artist} index={i} />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- 2024 alumni */}
      <section className="shell pb-20 md:pb-[var(--spacing-act)]">
        <Slug cue="2024 Inaugural" title="The original lineup">
          The artists who launched the Invitational. Those who have played a
          later edition are listed above.
        </Slug>
        <div className="border-t border-floor-line">
          {artists2024Unreturned.map((artist, i) => (
            <RunRow key={artist.slug} cue={String(i + 1).padStart(2, "0")}>
              <span className="t-title text-chalk">{artist.name}</span>
            </RunRow>
          ))}
        </div>
      </section>

      <section className="shell pb-20 md:pb-[var(--spacing-act)]">
        <h2 className="t-headline text-chalk">Are you a songwriter?</h2>
        <p className="t-body text-chalk-dim mt-6">
          We&apos;re always looking for original voices. Learn how to get
          involved with QCSI.
        </p>
        <div className="mt-10">
          <Action href="/for-songwriters">For songwriters</Action>
        </div>
      </section>
    </>
  );
}
