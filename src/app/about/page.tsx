import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Tape, RunRow, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "About QCSI — A Nonprofit for Original Music in the Black Hills",
  alternates: { canonical: "/about" },
  description:
    "Queen City Songwriters is a 501(c)(3) founded in Spearfish, SD in 2024 to build a year-round home for original music — the Invitational each September, songwriter rounds all year, and a network of 100+ writers.",
};

/* The cue is the date, because the sequence is chronological and the date is
   the information the reader actually wants. */
const chapters = [
  {
    cue: "May 2024",
    title: "Founded on a mission",
    body: "Founded by Heath Johnson and Jason Guthmiller, QCSI was incorporated as a 501(c)(3) nonprofit on May 24, 2024 with a clear mission: provide songwriters a vibrant platform to present their work, engage the community, and inspire a lasting appreciation for original music.",
  },
  {
    cue: "Sept 2024",
    title: "The Invitational",
    body: "Our flagship event, the Queen City Songwriters Invitational, debuted that September — transforming downtown Spearfish into a two-day celebration of original voices. Songwriter rounds in intimate venues by day, main-stage showcases at The Matthews Opera House by night. No covers. No backing tracks. Just artists and their songs.",
  },
  {
    cue: "Now",
    title: "More than an event",
    body: "What started as an ambitious idea has grown into something with real momentum. With 100+ songwriters in our network, partnerships with venues and businesses across Spearfish, and year-round programming including Lucky's Rounds and Summer Rounds, QCSI is building a creative ecosystem — not just an event.",
  },
];

const details = [
  ["Founded", "May 24, 2024"],
  ["Type", "501(c)(3) tax-exempt nonprofit"],
  ["EIN", "99-3218012"],
  ["Location", "Spearfish, SD"],
];

const values = [
  {
    cue: "01",
    title: "Original Music",
    desc: "We celebrate songs that come from real life — not trend-chasing, not algorithm-optimized. Authentic storytelling through music.",
  },
  {
    cue: "02",
    title: "Community First",
    desc: "We're building bridges between artists, venues, businesses, and audiences. When one thrives, we all do.",
  },
  {
    cue: "03",
    title: "Accessible & Inclusive",
    desc: "QCSI welcomes songwriters of all backgrounds, genres, and experience levels. If you have a song, you have a seat at the table.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="b" className="mb-10">
          Founded May 24, 2024
        </Tape>
        <h1 className="t-display text-chalk max-w-[18ch]">
          A place for original voices to rise
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          The Black Hills is full of songwriters. What has been missing is a
          room built for their original work &mdash; so we started building one.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="/invitational">The 2026 Invitational</Action>
          <Action href="/support" variant="ghost">
            Support QCSI
          </Action>
        </div>
      </section>

      <figure>
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/about-hero-round.jpg"
            alt="Packed crowd watching a songwriter round during the Queen City Songwriters Invitational"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          A round in a downtown room &middot; the format the whole weekend is
          built on
        </figcaption>
      </figure>

      {/* ----------------------------------------------------------- our story */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="t-run text-tape mb-6">Our story</p>
            <p className="text-2xl md:text-[1.75rem] leading-snug text-chalk max-w-[40ch]">
              Queen City Songwriters Incorporated was born in 2024 from
              kitchen-table conversations between songwriters who believed
              Spearfish, South Dakota could be more than a dot on the map
              &mdash; it could be a destination for original music.
            </p>
            <p className="t-body text-chalk-dim mt-6 max-w-[46ch]">
              <Link
                href="/gordy-pratt"
                className="font-bold hover:text-tape transition-colors"
              >
                Gordy Pratt
              </Link>{" "}
              was in those kitchen-table conversations. He was a founding
              director. He helped with the ideas and the connections when we
              were getting started.
            </p>

            <div className="mt-14 border-t border-floor-line">
              {chapters.map((ch) => (
                <div key={ch.cue} className="run-row rule-in">
                  <span className="run-cue t-run">{ch.cue}</span>
                  <span className="min-w-0">
                    <span className="t-title text-chalk block mb-3">
                      {ch.title}
                    </span>
                    <span className="t-body text-chalk-dim block">
                      {ch.body}
                    </span>
                  </span>
                  <span className="hidden md:block" />
                </div>
              ))}
            </div>

            <blockquote className="mt-14">
              <p className="t-headline text-tape max-w-[24ch]">
                When artists are supported, entire communities are enriched.
              </p>
              <p className="t-body text-chalk-dim mt-5">
                That&apos;s what we&apos;re building here.
              </p>
            </blockquote>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-paper text-ink p-6 md:p-8">
              <p className="t-run text-tape-ink mb-4">Our mission</p>
              <p className="t-body text-ink">
                To foster the art of songwriting by providing a vibrant platform
                for songwriters to present their work, engage the community, and
                inspire a lasting appreciation for original music.
              </p>

              <p className="t-run text-tape-ink mb-4 mt-10">Our vision</p>
              <p className="t-body text-ink">
                To make Spearfish a beacon for original music in the Black Hills
                &mdash; a place where artists feel seen, heard, and supported.
              </p>

              <p className="t-run text-tape-ink mb-1 mt-10">
                Organization details
              </p>
              <dl className="border-t border-paper-edge">
                {details.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 py-3 border-b border-paper-edge"
                  >
                    <dt className="t-run text-pencil">{label}</dt>
                    <dd className="t-run text-ink font-bold text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* overflow-hidden contains the 150% crop, which otherwise pushes
                the page wider than the viewport on narrow screens */}
            <div className="relative aspect-[4/3] mt-8 overflow-hidden">
              <Image
                src="/photos/about-team-matthews.jpg"
                alt="The QCSI team at The Matthews Opera House"
                fill
                className="object-cover object-bottom scale-150 origin-bottom"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* -------------------------------------------------------------- values */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="What we stand for" title="Three values" paper />
          <div className="border-t border-paper-edge">
            {values.map((v) => (
              <RunRow key={v.title} paper cue={v.cue}>
                <span className="t-title text-ink block mb-2">{v.title}</span>
                <span className="t-body text-pencil block">{v.desc}</span>
              </RunRow>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <h2 className="t-headline text-chalk">Ready to get involved?</h2>
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="/for-songwriters">For songwriters</Action>
          <Action href="/support" variant="ghost">
            Support QCSI
          </Action>
        </div>
      </section>
    </>
  );
}
