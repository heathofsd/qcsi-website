import type { Metadata } from "next";
import Image from "next/image";
import { Tape, RunRow, MarginNote, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "For Songwriters — Play a Round, Join the Network",
  alternates: { canonical: "/for-songwriters" },
  description:
    "How songwriters get involved with Queen City Songwriters in the Black Hills: the September Invitational, year-round rounds at Lucky's and Summer Rounds, and a network of 100+ writers. Every background, genre and experience level welcome.",
};

const offers = [
  {
    cue: "September",
    title: "The Invitational",
    desc: "Our flagship event each September. Invited songwriters perform in intimate rounds across downtown Spearfish, then share the Matthews stage with nationally recognized headliners. It's curated, not competitive — every artist gets their moment.",
  },
  {
    cue: "Year-round",
    title: "Year-round rounds",
    desc: "Lucky's Rounds, Summer Rounds, and other recurring songwriter showcases throughout the year. Low-pressure, welcoming environments to share your music and connect with other writers.",
  },
  {
    cue: "100+ writers",
    title: "Community & network",
    desc: "Join a network of 100+ songwriters across the region. Share the stage with artists you admire, build relationships with venue owners, and become part of a creative community that has your back.",
  },
];

const faq = [
  {
    q: "How does the songwriter round format work?",
    a: "Three songwriters take turns performing original songs in an intimate venue setting. You play a song, share the story behind it, then pass to the next writer. It's conversational, collaborative, and audience-focused. Rounds run an hour, and there are six a day, on the hour from 11 until five.",
    note: "The format",
  },
  {
    q: "What about the evening showcases?",
    a: "Friday night is the Songwriters Showcase at The Matthews Opera House — every invited songwriter takes the historic stage, opening the weekend alongside the community and the touring artists. Saturday night, the headliner closes things out on that same stage.",
    note: "The evenings",
  },
  {
    q: "Is it competitive?",
    a: "Not at all. The Invitational is curated, not competitive. We select artists who bring unique voices and authentic stories. The goal is mutual support, not ranking.",
    note: "The stance",
  },
  {
    q: "What genres are welcome?",
    a: "If you write original songs, you're welcome. Our community leans Americana, folk, and country, but we've featured rock, indie, and everything in between. The common thread is original music and honest storytelling.",
    note: "The room",
  },
  {
    q: "How do I get involved?",
    a: "Reach out to us. If you're a songwriter in the Black Hills region (or beyond), we want to hear from you. The Invitational is curated by invitation, but our year-round rounds are open to all skill levels.",
    note: "The way in",
  },
];

export default function ForSongwritersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="a" className="mb-10">
          By invitation · rounds open to all
        </Tape>
        <h1 className="t-display text-chalk max-w-[16ch]">
          Your songs deserve to be heard
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          QCSI exists because we believe original music matters. Whether
          you&apos;ve been writing for decades or just finished your first song,
          there&apos;s a place for you here.
        </p>
        <div className="mt-10">
          <Action href="/contact">Get in touch</Action>
        </div>
      </section>

      <figure>
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/performer-matthews-edge.jpg"
            alt="Songwriter performing on the edge of The Matthews Opera House stage"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          The Matthews stage &middot; Friday night&apos;s Songwriters Showcase
        </figcaption>
      </figure>

      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="What you get" title="What QCSI offers songwriters" />
        <div className="border-t border-floor-line">
          {offers.map((o) => (
            <RunRow key={o.title} cue={o.cue}>
              <span className="t-title text-chalk block mb-2">{o.title}</span>
              <span className="t-body text-chalk-dim block">{o.desc}</span>
            </RunRow>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug
            cue="Before you ask"
            title="What to expect at the Invitational"
            paper
          />
          <div className="space-y-12 md:space-y-14">
            {faq.map((item) => (
              <MarginNote key={item.q} note={item.note}>
                <h3 className="t-title text-ink text-xl md:text-2xl mb-4">
                  {item.q}
                </h3>
                <p className="t-body text-pencil">{item.a}</p>
              </MarginNote>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <h2 className="t-headline text-chalk">Ready to share your music?</h2>
        <p className="t-body text-chalk-dim mt-6">
          Drop us a line. Tell us about yourself and your music. We&apos;d love
          to hear from you.
        </p>
        <div className="mt-10">
          <Action href="/contact">Get in touch</Action>
        </div>
      </section>
    </>
  );
}
