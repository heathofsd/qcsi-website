import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Audiences",
  description:
    "What to expect at the Queen City Songwriters Invitational — a guide for music lovers attending songwriter rounds and headliner showcases in Spearfish, SD.",
};

export default function ForAudiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/venue-gallery-audience.jpg"
          alt="Audience enjoying a songwriter performance at a downtown Spearfish venue"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              For Music Lovers
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Experience Music the Way It Was Meant to Be Heard
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              Forget arenas and algorithms. This is original music, up close, in
              the places where songs were meant to live — coffee shops, bars,
              wine bars, and a 110-year-old opera house.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Songwriter Rounds */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                What Are Songwriter Rounds?
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
                A songwriter round is an intimate performance format where three
                artists sit together and take turns playing original songs. After
                each song, the writer shares the story behind it — where it came
                from, what it means, the line that almost didn&apos;t make the
                cut.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
                It&apos;s the Nashville tradition brought to the Black Hills. No
                drum kits, no light shows — just a guitar, a voice, and a story.
                You hear music the way it was written: raw, honest, and right in
                front of you.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Most people who attend their first round say the same thing:
                &ldquo;I had no idea music could feel like this.&rdquo;
              </p>
            </div>
            <div className="bg-sand rounded-2xl p-10">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Your Invitational Day
              </h3>
              <div className="space-y-6">
                {[
                  {
                    time: "11:30 AM",
                    event: "Grab a coffee at Blackbird Espresso",
                    desc: "Settle in before the first round.",
                  },
                  {
                    time: "12:00 PM",
                    event: "First songwriter round begins",
                    desc: "Three songwriters, one intimate venue. Pull up a chair.",
                  },
                  {
                    time: "12:30 - 5:00 PM",
                    event: "Walk between venues",
                    desc: "New rounds start every 30 minutes at different downtown spots. Wander at your own pace.",
                  },
                  {
                    time: "5:00 PM",
                    event: "Break for dinner",
                    desc: "Downtown Spearfish has you covered. Grab a bite before the evening show.",
                  },
                  {
                    time: "7:00 PM",
                    event: "Evening showcase at The Matthews",
                    desc: "Every songwriter performs one song, then the headliner takes the stage.",
                  },
                ].map((item) => (
                  <div key={item.time} className="flex gap-4">
                    <div className="w-28 flex-shrink-0">
                      <p className="text-sm font-bold text-denim">{item.time}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{item.event}</p>
                      <p className="text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Spearfish */}
      <section className="bg-charcoal text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
                Why Spearfish?
              </h2>
              <p className="text-lg text-cream/70 leading-relaxed mb-6">
                Spearfish sits at the northern edge of the Black Hills — a small
                town with big creative energy. Every venue in the Invitational is
                within walking distance downtown. You can spend a September
                afternoon wandering from coffee shop to wine bar to brewpub,
                catching original music at every stop.
              </p>
              <p className="text-lg text-cream/70 leading-relaxed">
                It&apos;s the kind of town where the bartender knows the songwriter
                and the songwriter knows your name by the second verse. That&apos;s
                not marketing — that&apos;s just Spearfish.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photos/community-downtown.jpg"
                alt="Downtown Spearfish community during the Invitational"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
            Good to Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tickets",
                desc: "Daytime rounds are typically free or low-cost. Evening headliner shows at The Matthews require tickets, available through Eventbrite when announced.",
              },
              {
                title: "Walkable",
                desc: "Every venue is within a few blocks in downtown Spearfish. No car needed once you're here.",
              },
              {
                title: "All Ages Welcome",
                desc: "Daytime rounds at coffee shops and most venues are all-ages. Evening shows at bar venues may be 21+. The Matthews is all-ages.",
              },
              {
                title: "Listening Room Etiquette",
                desc: "Songwriter rounds are intimate. Keep conversation low, phones on silent, and give the artists your attention. They're sharing something personal.",
              },
              {
                title: "Lodging",
                desc: "Spearfish has hotels, motels, and vacation rentals. September is beautiful in the Black Hills — book early.",
              },
              {
                title: "Bring Friends",
                desc: "The best way to experience the Invitational is with people you love. It's a weekend you'll talk about.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-xl p-6">
                <h3 className="font-display font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-4">
            September 25-26, 2026
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Be the first to know when tickets go on sale and the lineup drops.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-amber px-8 py-4 font-bold text-cream hover:bg-amber-light transition-colors"
          >
            Stay Connected
          </Link>
        </div>
      </section>
    </>
  );
}
