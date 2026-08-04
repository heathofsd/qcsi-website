import Image from "next/image";
import { Tape, RunRow, MarginNote, Slug, Action } from "@/components/run";

const testimonials = [
  {
    quote:
      "This event is a great way to get them all in one area to be heard and experienced.",
    name: "Allison Moore",
    role: "Venue Owner",
  },
  {
    quote:
      "As a songwriter, it brought inspiration, camaraderie, and the overwhelmingly strange sense of being heard and understood among my peers and the incredible community that supports us.",
    name: "Jami Lynn",
    role: "Headliner, 2024 Invitational",
  },
  {
    quote:
      "The Invitational brought original music to life in a way Spearfish has never seen before.",
    name: "Joanna Mechaley",
    role: "The Matthews Opera House",
  },
];

/* The weekend's shape, drawn only from times QCSI already publishes:
   six one-hour rounds a day, on the hour from 11 until 5; evening
   shows at 7:30, per the headliner contract. */
const weekend = [
  {
    cue: "Fri 11:00 AM",
    subject: "Daytime rounds begin",
    where: "Downtown venues",
    meta: "Six rounds, on the hour",
  },
  {
    cue: "Fri 7:30 PM",
    subject: "Songwriters Showcase",
    where: "The Matthews Opera House",
    meta: "Every invited writer",
  },
  {
    cue: "Sat 11:00 AM",
    subject: "Daytime rounds",
    where: "Downtown venues",
    meta: "Three writers, one hour",
  },
  {
    cue: "Sat 7:30 PM",
    subject: "Jeffrey Foucault",
    where: "The Matthews Opera House",
    meta: "Main stage",
    flag: true,
  },
];

const record = [
  { cue: "96+", subject: "Songwriters in our network" },
  { cue: "6", subject: "Songwriter rounds a day, scattered around downtown" },
  { cue: "300+", subject: "Attendees annually" },
  { cue: "3", subject: "Years running" },
];

const pastHeadliners = [
  { name: "Jonathan Byrd", year: "2024", photo: "/photos/jonathan-byrd.jpg" },
  { name: "Jami Lynn", year: "2024", photo: "/photos/jami-lynn.webp" },
  { name: "Andrea von Kampen", year: "2025", photo: "/photos/andrea-von-kampen.webp" },
  {
    name: "John Fullbright",
    year: "2025",
    photo: "/photos/john-fullbright.jpg",
    position: "center 10%",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------- the running order */}
      <section className="shell pt-14 pb-20 md:pt-20 md:pb-28">
        {/* one line at every width — a wrapped strip stretches the torn edge
            into something that reads as a ticket perforation */}
        <Tape land tilt="a" className="mb-4">
          Sep 25&ndash;26 2026
        </Tape>
        <p className="t-run text-chalk-dim mb-10">Spearfish, South Dakota</p>

        <h1 className="t-display text-chalk max-w-[20ch]">
          Original Voices.
          <br />
          <span className="text-tape">Authentic Stories.</span>
        </h1>

        <p className="t-lead text-chalk-dim mt-8">
          Every song carries a story, and every story deserves to be heard. So
          we build the rooms where that actually happens &mdash; small, quiet,
          and close enough that the story lands.
        </p>

        {/* the actions sit with the offer, not below the proof */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="/invitational">The 2026 Invitational</Action>
          <Action href="/about" variant="ghost">
            Our story
          </Action>
        </div>

        <div className="mt-14 md:mt-16">
          <p className="t-run text-tape mb-1">The weekend</p>
          <div className="border-t border-floor-line">
            {weekend.map((row, i) => (
              <RunRow
                key={row.cue}
                cue={row.cue}
                meta={row.meta}
                enter="load"
                index={i}
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
          {/* What is settled, what is not, and the capture attached to it —
              rather than one dim line saying "soon". */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <p className="t-run text-chalk-dim max-w-[52ch]">
              <span className="text-chalk">Confirmed:</span> dates, venues, and
              the Saturday headliner. <span className="text-chalk">Still to come:</span>{" "}
              the full lineup and tickets.
            </p>
            <Action href="/contact">Get notified</Action>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ evidence, full */}
      <figure className="relative">
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/hero-matthews-stage.jpg"
            alt="Songwriter performing on The Matthews Opera House stage during the Queen City Songwriters Invitational"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          The Matthews Opera House &middot; Saturday night, the Invitational
        </figcaption>
      </figure>

      {/* ------------------------------------------------------------ the record */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Slug cue="What this is" title="Where songwriters come to be heard">
              Queen City Songwriters Inc. is a nonprofit dedicated to fostering
              the art of songwriting. Through our annual Invitational,
              year-round songwriter rounds, and community partnerships, we&apos;re
              building something real in the Black Hills &mdash; a place where
              artists are supported and entire communities are enriched.
            </Slug>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-run text-tape mb-1">The record</p>
            <div className="border-t border-floor-line">
              {record.map((row) => (
                <RunRow key={row.subject} cue={row.cue} cueLarge>
                  <span className="t-title text-chalk">{row.subject}</span>
                </RunRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ the invitational */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <Slug
                cue="September 25&ndash;26, 2026"
                title="A weekend unlike any other"
                paper
              />
              <div className="t-body text-ink space-y-5">
                <p>
                  The Queen City Songwriters Invitational is a two-day
                  celebration of original music across downtown Spearfish.
                  Intimate daytime songwriter rounds at local venues, plus a
                  Friday night Songwriters Showcase and a Saturday headliner
                  &mdash; both at The Matthews Opera House.
                </p>
                <p>
                  No covers. No setlists. Just original voices sharing the
                  stories behind their songs in the most intimate listening
                  rooms the Black Hills has to offer.
                </p>
              </div>
              <div className="mt-10">
                <Action href="/invitational">Learn more</Action>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/invitational-stage-crowd.jpg"
                  alt="Songwriters performing at the Queen City Songwriters Invitational with an engaged audience"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <p className="t-run-sm text-pencil mt-3">
                Rounds run every thirty minutes, venue to venue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- the headliner */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
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
              />
            </div>
            <p className="t-run-sm text-chalk-dim mt-3">Photo: Joe Navas</p>
          </div>
          <div className="lg:col-span-7">
            <p className="t-run text-tape mb-4">
              Announcing our 2026 headliner
            </p>
            <h2 className="t-display text-chalk">Jeffrey Foucault</h2>
            <p className="t-body text-chalk-dim mt-7">
              One of the most distinctive voices in American music &mdash;
              &ldquo;contemporary and timeless&rdquo; (The New York Times)
              &mdash; headlines The Matthews Opera House on Saturday, September
              26, 2026. Two decades on the road have refined a sound
              recognizable for its simplicity and emotional power.
            </p>
            <div className="mt-10">
              <Action href="/invitational">The 2026 Invitational</Action>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- past headliners */}
      <section className="shell pb-20 md:pb-[var(--spacing-act)]">
        <Slug
          cue="On that stage before"
          title="Past headliners"
        >
          Artists who have graced The Matthews stage for our evening showcases.
        </Slug>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {pastHeadliners.map((artist) => (
            <figure key={artist.name}>
              <div className="relative aspect-[3/4]">
                <Image
                  src={artist.photo}
                  alt={`${artist.name} at the Queen City Songwriters Invitational`}
                  fill
                  className="object-cover"
                  style={
                    artist.position
                      ? { objectPosition: artist.position }
                      : undefined
                  }
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <figcaption className="pt-3 border-t border-floor-line mt-3 flex items-baseline justify-between gap-3">
                <span className="t-title text-chalk">{artist.name}</span>
                <span className="t-run text-chalk-dim">{artist.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- what they said */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="From the room" title="What people are saying" paper />
          <div className="space-y-12 md:space-y-14">
            {testimonials.map((t) => (
              <MarginNote
                key={t.name}
                note={
                  <>
                    <span className="block text-ink font-bold">{t.name}</span>
                    <span className="block mt-1">{t.role}</span>
                  </>
                }
              >
                <p className="text-ink text-xl md:text-2xl leading-snug max-w-[46ch]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </MarginNote>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- three doors */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="Get involved" title="Be part of something real">
          Whether you write songs, love live music, or want to support the arts
          in your community &mdash; there&apos;s a place for you here.
        </Slug>
        <div className="border-t border-floor-line">
          <RunRow cue="01" href="/for-songwriters" meta="For songwriters">
            <span className="t-title text-chalk">I&apos;m a songwriter</span>
          </RunRow>
          <RunRow cue="02" href="/for-audiences" meta="For audiences">
            <span className="t-title text-chalk">I love live music</span>
          </RunRow>
          <RunRow cue="03" href="/partners" meta="Partners &amp; sponsors">
            <span className="t-title text-chalk">I want to sponsor</span>
          </RunRow>
        </div>
      </section>
    </>
  );
}
