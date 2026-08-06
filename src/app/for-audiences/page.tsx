import type { Metadata } from "next";
import Image from "next/image";
import { Tape, RunRow, Slug, Action } from "@/components/run";
import { ticketUrl } from "@/data/tickets";
import { TicketCheckout } from "@/components/TicketCheckout";

export const metadata: Metadata = {
  title: "Attending the Invitational — What to Expect",
  alternates: { canonical: "/for-audiences" },
  description:
    "A guide to the Queen City Songwriters Invitational in downtown Spearfish, SD: six one-hour songwriter rounds a day, evening showcases at The Matthews Opera House, and how to plan the weekend.",
};

const day = [
  {
    time: "10:30 AM",
    event: "Grab a coffee downtown",
    desc: "Settle in before the first round.",
  },
  {
    time: "11:00 AM",
    event: "First songwriter round begins",
    desc: "Three songwriters, one intimate venue, one hour. Pull up a chair.",
    meta: "Doors open",
  },
  {
    time: "11 AM – 5 PM",
    event: "Walk between venues",
    desc: "A new round starts on the hour, every hour, at venues a few blocks apart. Follow the whole circuit or settle in wherever you land.",
    meta: "Six rounds",
  },
  {
    time: "5:00 PM",
    event: "Break for dinner",
    desc: "Downtown Spearfish has you covered. Grab a bite before the evening show.",
  },
  {
    time: "7:30 PM",
    event: "Evening showcase at The Matthews",
    desc: "Friday it's the Songwriters Showcase; Saturday, the headliner takes the historic stage.",
    meta: "Main stage",
  },
];

const goodToKnow = [
  {
    cue: "Tickets",
    title: "Tickets",
    desc: "Daytime rounds are free to walk into. Saturday night\u2019s headliner show \u2014 Jeffrey Foucault at The Matthews \u2014 is ticketed on Eventbrite now.",
  },
  {
    cue: "On foot",
    title: "Walkable",
    desc: "Every venue is within a few blocks in downtown Spearfish. No car needed once you're here.",
  },
  {
    cue: "Ages",
    title: "All ages welcome",
    desc: "Daytime rounds at coffee shops and most venues are all-ages. Evening shows at bar venues may be 21+. The Matthews is all-ages.",
  },
  {
    cue: "Etiquette",
    title: "Listening room etiquette",
    desc: "Songwriter rounds are intimate. Keep conversation low, phones on silent, and give the artists your attention. They're sharing something personal.",
  },
  {
    cue: "Stay over",
    title: "Lodging",
    desc: "Spearfish has hotels, motels, and vacation rentals. September is beautiful in the Black Hills — book early.",
  },
  {
    cue: "Company",
    title: "Bring friends",
    desc: "The best way to experience the Invitational is with people you love. It's a weekend you'll talk about.",
  },
];

export default function ForAudiencesPage() {
  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="b" className="mb-10">
          Sep 25–26 2026 · downtown
        </Tape>
        <h1 className="t-display text-chalk max-w-[17ch]">
          Experience music the way it was meant to be heard
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          Forget arenas and algorithms. This is original music, up close, in the
          places where songs were meant to live &mdash; coffee shops, bars, wine
          bars, and a 110-year-old opera house.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <TicketCheckout aff="site-audiences">Get tickets</TicketCheckout>
          <Action href="/invitational" variant="ghost">
            September 25&ndash;26, 2026
          </Action>
        </div>
      </section>

      <figure>
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/venue-gallery-audience.jpg"
            alt="Audience enjoying a songwriter performance at a downtown Spearfish venue"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          Close enough to hear the story between the songs
        </figcaption>
      </figure>

      {/* ------------------------------------------------------------ the format */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Slug cue="The format" title="What are songwriter rounds?" />
            <div className="t-body text-chalk-dim space-y-5">
              <p>
                A songwriter round is an intimate performance format where three
                artists sit together and take turns playing original songs.
                After each song, the writer shares the story behind it &mdash;
                where it came from, what it means, the line that almost
                didn&apos;t make the cut.
              </p>
              <p>
                It&apos;s the Nashville tradition brought to the Black Hills. No
                drum kits, no light shows &mdash; just a guitar, a voice, and a
                story. You hear music the way it was written: raw, honest, and
                right in front of you.
              </p>
            </div>
            <p className="t-headline text-tape mt-10 max-w-[20ch]">
              &ldquo;I had no idea music could feel like this.&rdquo;
            </p>
            <p className="t-run text-chalk-dim mt-4">
              What most people say after their first round
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="t-run text-tape mb-1">Your Invitational day</p>
            <div className="border-t border-floor-line">
              {day.map((item) => (
                <RunRow key={item.time} cue={item.time} meta={item.meta}>
                  <span className="t-title text-chalk block">{item.event}</span>
                  <span className="t-body text-chalk-dim block mt-1.5 text-[0.9375rem]">
                    {item.desc}
                  </span>
                </RunRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- why spearfish */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Slug cue="The town" title="Why Spearfish?" paper />
              <div className="t-body text-ink space-y-5">
                <p>
                  Spearfish sits at the northern edge of the Black Hills &mdash;
                  a small town with big creative energy. Every venue in the
                  Invitational is within walking distance downtown. You can
                  spend a September afternoon wandering from coffee shop to wine
                  bar to brewpub, catching original music at every stop.
                </p>
                <p>
                  It&apos;s the kind of town where the bartender knows the
                  songwriter and the songwriter knows your name by the second
                  verse. That&apos;s not marketing &mdash; that&apos;s just
                  Spearfish.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/community-downtown.jpg"
                  alt="Downtown Spearfish community during the Invitational"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ practical */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="Practical" title="Good to know" />
        <div className="border-t border-floor-line">
          {goodToKnow.map((item) => (
            <RunRow key={item.title} cue={item.cue}>
              <span className="t-title text-chalk block mb-2">
                {item.title}
              </span>
              <span className="t-body text-chalk-dim block">{item.desc}</span>
            </RunRow>
          ))}
        </div>
      </section>

      <section className="shell pb-20 md:pb-[var(--spacing-act)]">
        <h2 className="t-display text-chalk">September 25&ndash;26, 2026</h2>
        <p className="t-body text-chalk-dim mt-6">
          The lineup is out and Saturday night is on sale &mdash; Jeffrey
          Foucault at The Matthews.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <TicketCheckout aff="site-audiences">Get tickets</TicketCheckout>
          <Action href="/invitational" variant="ghost">
            The Invitational
          </Action>
        </div>
      </section>
    </>
  );
}
