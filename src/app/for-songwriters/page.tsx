import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Songwriters",
  description:
    "Learn how to get involved with Queen City Songwriters — from the annual Invitational to year-round rounds and community events.",
};

export default function ForSongwritersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/performer-matthews-edge.jpg"
          alt="Songwriter performing on the edge of The Matthews Opera House stage"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              For Songwriters
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Songs Deserve to Be Heard
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              QCSI exists because we believe original music matters. Whether
              you&apos;ve been writing for decades or just finished your first
              song, there&apos;s a place for you here.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-16 text-center">
            What QCSI Offers Songwriters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sand rounded-xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber/20 text-amber mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                The Invitational
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our flagship event each September. Invited songwriters perform
                in intimate rounds across downtown Spearfish, then share the
                Matthews stage with nationally recognized headliners. It&apos;s
                curated, not competitive — every artist gets their moment.
              </p>
            </div>
            <div className="bg-sand rounded-xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-denim/20 text-denim mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                Year-Round Rounds
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Lucky&apos;s Rounds, Summer Rounds, and other recurring
                songwriter showcases throughout the year. Low-pressure, welcoming
                environments to share your music and connect with other writers.
              </p>
            </div>
            <div className="bg-sand rounded-xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage/20 text-sage mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                Community & Network
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Join a network of 96+ songwriters across the region. Share the
                stage with artists you admire, build relationships with venue
                owners, and become part of a creative community that has your
                back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-charcoal text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-12 text-center">
              What to Expect at the Invitational
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How does the songwriter round format work?",
                  a: "Three songwriters take turns performing original songs in an intimate venue setting. You play a song, share the story behind it, then pass to the next writer. It's conversational, collaborative, and audience-focused. Rounds last about 45 minutes.",
                },
                {
                  q: "What about the evening showcase?",
                  a: "Every invited songwriter gets to perform one original song on the Matthews Opera House stage before the headliner. It's your moment in front of the full audience — the community hears your voice alongside nationally touring artists.",
                },
                {
                  q: "Is it competitive?",
                  a: "Not at all. The Invitational is curated, not competitive. We select artists who bring unique voices and authentic stories. The goal is mutual support, not ranking.",
                },
                {
                  q: "What genres are welcome?",
                  a: "If you write original songs, you're welcome. Our community leans Americana, folk, and country, but we've featured rock, indie, and everything in between. The common thread is original music and honest storytelling.",
                },
                {
                  q: "How do I get involved?",
                  a: "Reach out to us. If you're a songwriter in the Black Hills region (or beyond), we want to hear from you. The Invitational is curated by invitation, but our year-round rounds are open to all skill levels.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-cream/10 pb-8">
                  <h3 className="font-display text-lg font-bold text-amber mb-3">
                    {item.q}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-4">
            Ready to Share Your Music?
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Drop us a line. Tell us about yourself and your music. We&apos;d
            love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-amber px-8 py-4 font-bold text-cream hover:bg-amber-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
