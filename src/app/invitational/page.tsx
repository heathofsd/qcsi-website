import type { Metadata } from "next";
import Image from "next/image";
import { venues } from "@/data/artists";
import { Tape, RunRow, MarginNote, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "The Invitational — September 25–26, 2026",
  alternates: { canonical: "/invitational" },
  description:
    "The third annual Queen City Songwriters Invitational, September 25–26, 2026 in downtown Spearfish, SD. Six one-hour songwriter rounds a day across three venues, evening showcases at The Matthews Opera House, and headliner Jeffrey Foucault.",
};

/* Six rounds a day from 11, done by 5. Evening curtain is 7:30 — the
   figure in Foucault's contract, which supersedes the 7:00 published
   earlier. */
const runSheet = [
  {
    day: "Friday, September 25",
    rows: [
      {
        cue: "11:00 AM",
        subject: "Daytime rounds begin",
        where: "Downtown venues",
        meta: "Six rounds, on the hour",
      },
      {
        cue: "7:30 PM",
        subject: "Songwriters Showcase",
        where: "The Matthews Opera House",
        meta: "Every invited writer",
      },
    ],
  },
  {
    day: "Saturday, September 26",
    rows: [
      {
        cue: "11:00 AM",
        subject: "Daytime rounds",
        where: "Downtown venues",
        meta: "Three writers, one hour",
      },
      {
        cue: "7:30 PM",
        subject: "Jeffrey Foucault",
        where: "The Matthews Opera House",
        meta: "Main stage",
        flag: true,
      },
    ],
  },
];

const editions = [
  {
    year: "2024",
    label: "Inaugural",
    title: "Where it all began",
    photo: "/photos/2024-matthews-closeup.jpg",
    alt: "Songwriter performing at The Matthews Opera House during the 2024 Invitational",
    facts: [
      ["Songwriters", "27 participating"],
      ["Rounds", "18 across 6 downtown venues"],
      ["Headliners", "Jonathan Byrd & Jami Lynn"],
      ["The Matthews", "Two sold-out evenings"],
    ],
  },
  {
    year: "2025",
    label: "Second annual",
    title: "Raising the bar",
    photo: "/photos/2025-raising-the-bar.jpg",
    alt: "2025 Queen City Songwriters Invitational",
    facts: [
      ["Songwriters", "20+ participating"],
      ["Rounds", "Across 6 downtown venues"],
      ["Headliners", "Andrea von Kampen & John Fullbright"],
      ["The room", "Grammy-nominated talent meets Black Hills community"],
    ],
  },
];

export default function InvitationalPage() {
  return (
    <>
      {/* -------------------------------------------------------------- the bill */}
      <section className="shell pt-14 pb-20 md:pt-20 md:pb-24">
        <Tape land tilt="a" className="mb-10">
          Third annual
        </Tape>

        <h1 className="t-display text-chalk max-w-[16ch]">
          The Queen City Songwriters Invitational
        </h1>

        <p className="t-headline text-tape mt-8">
          September 25 &ndash; 26, 2026
        </p>

        <p className="t-lead text-chalk-dim mt-8">
          Two days of original music. Intimate songwriter rounds by day, a
          Friday night Songwriters Showcase, and a Saturday headliner &mdash;
          both on the stage at The Matthews Opera House. Downtown Spearfish,
          South Dakota.
        </p>

        {/* the actions sit with the offer, not below the run sheet */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="/contact">Get notified</Action>
          <Action
            href="https://app.getpulley.app/donate/qcsi/c/qcsi2026"
            variant="ghost"
            external
          >
            Support the 2026 Invitational
          </Action>
        </div>

        {/* The run sheet, day by day. */}
        <div className="mt-14 md:mt-16 space-y-12">
          {runSheet.map((day, di) => (
            <div key={day.day}>
              <p className="t-run text-tape mb-1">{day.day}</p>
              <div className="border-t border-floor-line">
                {day.rows.map((row, ri) => (
                  <RunRow
                    key={row.cue + row.subject}
                    cue={row.cue}
                    meta={row.meta}
                    enter="load"
                    index={di * 2 + ri}
                  >
                    <span className="t-title text-chalk">{row.subject}</span>
                    <span className="t-run text-chalk-dim block mt-1.5">
                      {row.where}
                    </span>
                    {row.flag && (
                      <span className="t-run-sm text-tape block mt-2">
                        &larr; 2026 headliner
                      </span>
                    )}
                  </RunRow>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="t-run text-chalk-dim max-w-[52ch]">
            <span className="text-chalk">Confirmed:</span> dates, venues, the
            Saturday headliner, and the full songwriter lineup.{" "}
            <span className="text-chalk">Still to come:</span> tickets.
          </p>
          <Action href="/artists">See the lineup</Action>
        </div>
      </section>

      {/* ------------------------------------------------------------- headliner */}
      <section className="border-t border-floor-line">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/photos/jeffrey-foucault.jpg"
                  alt="Jeffrey Foucault, 2026 Queen City Songwriters Invitational headliner"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
              <p className="t-run-sm text-chalk-dim mt-3">Photo: Joe Navas</p>
            </div>
            <div className="lg:col-span-7">
              <p className="t-run text-tape mb-4">
                2026 headliner &middot; Saturday, September 26
              </p>
              <h2 className="t-display text-chalk">Jeffrey Foucault</h2>
              <div className="t-body text-chalk-dim mt-7 space-y-5">
                <p>
                  We&apos;re honored to welcome Jeffrey Foucault to The Matthews
                  Opera House stage for the third annual Invitational. In two
                  decades on the road, he&apos;s become one of the most
                  distinctive voices in American music &mdash; a sound instantly
                  recognizable for its simplicity and emotional power.
                </p>
                <p>
                  &ldquo;Stark, literate songs that are as wide open as the
                  landscape of his native Midwest,&rdquo; wrote The New Yorker.
                  &ldquo;Songwriting brilliance,&rdquo; said the Irish Times.
                  It&apos;s exactly the kind of voice the Invitational was built
                  to celebrate.
                </p>
              </div>
              <div className="mt-10">
                <Action href="/artists">Meet the artists</Action>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ the format */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="The format" title="How it works" paper>
            The Invitational is a curated experience designed for deep listening
            &mdash; not a typical festival.
          </Slug>

          <div className="space-y-16 md:space-y-20">
            <MarginNote
              note={
                <>
                  <span className="block text-ink font-bold">Daytime</span>
                  <span className="block mt-1">11 AM &ndash; 5 PM</span>
                  <span className="block mt-1">Six rounds</span>
                  <span className="block mt-1">Downtown venues</span>
                </>
              }
            >
              <h3 className="t-headline text-ink mb-5">Daytime rounds</h3>
              <div className="t-body text-ink space-y-5">
                <p>
                  Six rounds a day, on the hour from 11 in the morning until
                  five. Groups of three songwriters take turns sharing original
                  songs and the stories behind them, an hour at a time, at
                  venues a few blocks apart &mdash; so you can walk from one
                  intimate listening room to the next.
                </p>
                <p>
                  This is the heart of the Invitational &mdash; up close,
                  acoustic, and personal. You&apos;ll hear the verse that almost
                  didn&apos;t make the cut and the story that inspired it.
                </p>
              </div>
              <div className="relative aspect-[16/9] mt-8">
                <Image
                  src="/photos/venue-blackbird-wide.jpg"
                  alt="Intimate songwriter round at a downtown Spearfish venue"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            </MarginNote>

            <MarginNote
              note={
                <>
                  <span className="block text-ink font-bold">Evenings</span>
                  <span className="block mt-1">7:30 PM</span>
                  <span className="block mt-1">The Matthews</span>
                </>
              }
            >
              <h3 className="t-headline text-ink mb-5">Evening showcases</h3>
              <div className="t-body text-ink space-y-5">
                <p>
                  Friday night, every invited songwriter takes the stage at The
                  Matthews Opera House &amp; Arts Center for the Songwriters
                  Showcase &mdash; a chance to open the weekend on the historic
                  stage.
                </p>
                <p>
                  Saturday night, the community returns to The Matthews for the
                  headliner &mdash; the weekend&apos;s marquee performance on
                  that same stage.
                </p>
              </div>
              <div className="relative aspect-[16/9] mt-8">
                <Image
                  src="/photos/matthews-exterior.jpg"
                  alt="The Matthews Opera House exterior in downtown Spearfish"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            </MarginNote>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- past years */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="On the record" title="Past invitationals" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
          {editions.map((ed) => (
            <div key={ed.year}>
              <div className="relative aspect-[16/10]">
                <Image
                  src={ed.photo}
                  alt={ed.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex items-baseline gap-4 mt-6">
                <span className="t-run text-tape">{ed.year}</span>
                <span className="t-run text-chalk-dim">{ed.label}</span>
              </div>
              <h3 className="t-headline text-chalk mt-3 mb-5">{ed.title}</h3>
              <div className="border-t border-floor-line">
                {ed.facts.map(([label, value]) => (
                  <RunRow key={label} cue={label}>
                    <span className="text-chalk">{value}</span>
                  </RunRow>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------- the rooms */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="The circuit" title="The venues" paper>
            The Invitational transforms downtown Spearfish into a walkable music
            circuit &mdash; daytime rounds at three venues, two rounds each per
            day, all within a few blocks of The Matthews.
          </Slug>
          <div className="border-t border-paper-edge">
            {venues.map((venue) => (
              <RunRow
                key={venue.name}
                paper
                cue={venue.type === "headliner" ? "Evenings" : "Rounds"}
                meta={venue.type === "headliner" ? "Main stage" : "Downtown"}
              >
                <span className="t-title text-ink">{venue.name}</span>
                <span className="t-body text-pencil block mt-2 text-[0.9375rem]">
                  {venue.description}
                </span>
              </RunRow>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- cta */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <div className="max-w-[46ch]">
          <h2 className="t-headline text-chalk">
            Don&apos;t miss the 2026 Invitational
          </h2>
          <p className="t-body text-chalk-dim mt-6">
            The lineup is set. Sign up for updates and be the first to know when
            tickets go on sale.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Action href="/contact">Stay connected</Action>
            <Action href="/for-audiences" variant="ghost">
              Plan your weekend
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
