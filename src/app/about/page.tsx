import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Queen City Songwriters Inc. was founded in 2024 to foster the art of songwriting and establish Spearfish, South Dakota as a beacon for original music in the Black Hills.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/about-hero-round.jpg"
          alt="Packed crowd watching a songwriter round during the Queen City Songwriters Invitational"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              About QCSI
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              A Place for Original Voices to Rise
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              We started with a simple belief: that every song carries a story,
              and every story deserves to be heard.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Queen City Songwriters Incorporated was born in 2024 from
                kitchen-table conversations between songwriters who believed
                Spearfish, South Dakota could be more than a dot on the map — it
                could be a destination for original music.
              </p>
              <p>
                Founded by Heath Johnson and Jason Guthmiller, QCSI was
                incorporated as a 501(c)(3) nonprofit on May 24, 2024 with a
                clear mission: provide songwriters a vibrant platform to present
                their work, engage the community, and inspire a lasting
                appreciation for original music.
              </p>
              <p>
                Our flagship event, the Queen City Songwriters Invitational,
                debuted that September — transforming downtown Spearfish into a
                two-day celebration of original voices. Songwriter rounds in
                intimate venues by day. Headliner showcases at The Matthews
                Opera House by night. No covers. No backing tracks. Just artists
                and their songs.
              </p>
              <p>
                What started as an ambitious idea has grown into something with
                real momentum. With 96+ songwriters in our network, partnerships
                with venues and businesses across Spearfish, and year-round
                programming including Lucky&apos;s Rounds and Summer Rounds,
                QCSI is building a creative ecosystem — not just an event.
              </p>
              <p>
                We believe that when artists are supported, entire communities
                are enriched. That&apos;s what we&apos;re building here.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {/* Mission */}
              <div className="bg-sand rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  Our Mission
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  To foster the art of songwriting by providing a vibrant
                  platform for songwriters to present their work, engage the
                  community, and inspire a lasting appreciation for original
                  music.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-sand rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  Our Vision
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  To make Spearfish a beacon for original music in the Black
                  Hills — a place where artists feel seen, heard, and supported.
                </p>
              </div>
              {/* Details */}
              <div className="bg-sand rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  Organization Details
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-charcoal/50">Founded</dt>
                    <dd className="text-charcoal font-semibold">May 24, 2024</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50">Type</dt>
                    <dd className="text-charcoal font-semibold">
                      501(c)(3) Tax-Exempt Nonprofit
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50">EIN</dt>
                    <dd className="text-charcoal font-semibold">99-3218012</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50">Location</dt>
                    <dd className="text-charcoal font-semibold">
                      Spearfish, SD 57783
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Team Photo */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/photos/about-team-matthews.jpg"
                  alt="The QCSI team at The Matthews Opera House"
                  fill
                  className="object-cover object-bottom scale-150 origin-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-16">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Original Music",
                desc: "We celebrate songs that come from real life — not trend-chasing, not algorithm-optimized. Authentic storytelling through music.",
              },
              {
                title: "Community First",
                desc: "We're building bridges between artists, venues, businesses, and audiences. When one thrives, we all do.",
              },
              {
                title: "Accessible & Inclusive",
                desc: "QCSI welcomes songwriters of all backgrounds, genres, and experience levels. If you have a song, you have a seat at the table.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-cream/5 border border-cream/10 rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-amber mb-3">
                  {v.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-6">
            Ready to Get Involved?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/for-songwriters"
              className="rounded-full bg-amber px-8 py-3 font-bold text-cream hover:bg-amber-light transition-colors"
            >
              For Songwriters
            </Link>
            <Link
              href="/support"
              className="rounded-full bg-cream px-8 py-3 font-bold text-charcoal hover:bg-cream-dark transition-colors"
            >
              Support QCSI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
