import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { venues } from "@/data/artists";

export const metadata: Metadata = {
  title: "The Invitational",
  description:
    "The Queen City Songwriters Invitational is a two-day celebration of original music across downtown Spearfish, SD. September 25-26, 2026.",
};

export default function InvitationalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/headliner-stage-pov.jpg"
          alt="View from the stage at The Matthews Opera House during the Invitational"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              Third Annual
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              The Queen City Songwriters Invitational
            </h1>
            <p className="text-3xl lg:text-4xl font-display text-amber mb-6">
              September 25 &ndash; 26, 2026
            </p>
            <p className="text-xl text-cream/80 leading-relaxed mb-8">
              Two days of original music. Intimate songwriter rounds by day.
              Headliner showcases at The Matthews Opera House by night. Downtown
              Spearfish, South Dakota.
            </p>
            <p className="text-cream/50 text-sm uppercase tracking-wide">
              Lineup &amp; tickets announced soon
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
              The Invitational is a curated experience designed for deep
              listening — not a typical festival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Daytime */}
            <div className="bg-sand rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/photos/venue-blackbird-wide.jpg"
                  alt="Intimate songwriter round at a downtown Spearfish venue"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/20 text-amber mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                Daytime Rounds
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Starting at noon, groups of three songwriters take turns sharing
                original songs and the stories behind them. Rounds stagger every
                30 minutes across downtown venues, so you can walk from one
                intimate listening room to the next.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                This is the heart of the Invitational — up close, acoustic, and
                personal. You&apos;ll hear the verse that almost didn&apos;t make the cut
                and the story that inspired it.
              </p>
              </div>
            </div>

            {/* Evening */}
            <div className="bg-sand rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/photos/matthews-exterior.jpg"
                  alt="The Matthews Opera House exterior in downtown Spearfish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-denim/20 text-denim mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                Evening Showcases
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                As the sun sets, everyone gathers at The Matthews Opera House &
                Arts Center. Every participating songwriter performs one original
                song on the historic stage before the evening&apos;s headliner takes
                over.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                It&apos;s the moment where the whole community comes together — local
                voices on the same stage as nationally recognized artists.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Editions */}
      <section className="bg-charcoal text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Past Invitationals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream/5 border border-cream/10 rounded-xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/photos/2024-matthews-closeup.jpg"
                  alt="Songwriter performing at The Matthews Opera House during the 2024 Invitational"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-2">
                  2024 — Inaugural
                </p>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Where It All Began
                </h3>
                <ul className="space-y-2 text-cream/70 text-sm">
                  <li>27 participating songwriters</li>
                  <li>18 rounds across 6 downtown venues</li>
                  <li>
                    Headliners: <span className="text-cream">Jonathan Byrd</span> &{" "}
                    <span className="text-cream">Jami Lynn</span>
                  </li>
                  <li>Two sold-out evenings at The Matthews</li>
                </ul>
              </div>
            </div>
            <div className="bg-cream/5 border border-cream/10 rounded-xl overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/photos/2025-raising-the-bar.jpg"
                  alt="2025 Queen City Songwriters Invitational"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-2">
                  2025 — Second Annual
                </p>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Raising the Bar
                </h3>
                <ul className="space-y-2 text-cream/70 text-sm">
                  <li>20+ participating songwriters</li>
                  <li>Rounds across 6 downtown venues</li>
                  <li>
                    Headliners: <span className="text-cream">Andrea von Kampen</span> &{" "}
                    <span className="text-cream">John Fullbright</span>
                  </li>
                  <li>Grammy-nominated talent meets Black Hills community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              The Venues
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              The Invitational transforms downtown Spearfish into a walkable
              music circuit. Every venue is within a few blocks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <div
                key={venue.name}
                className={`rounded-xl p-6 ${
                  venue.type === "headliner"
                    ? "bg-charcoal text-cream md:col-span-2 lg:col-span-3"
                    : "bg-sand"
                }`}
              >
                <div className="flex items-start gap-3">
                  {venue.type === "headliner" ? (
                    <svg className="w-6 h-6 text-amber mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-denim mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  )}
                  <div>
                    <h3 className={`font-display text-lg font-bold ${venue.type === "headliner" ? "text-amber" : "text-charcoal"}`}>
                      {venue.name}
                    </h3>
                    <p className={`text-sm mt-1 leading-relaxed ${venue.type === "headliner" ? "text-cream/70" : "text-charcoal/60"}`}>
                      {venue.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-4">
            Don&apos;t Miss the 2026 Invitational
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Sign up for updates and be the first to know when tickets and the
            lineup are announced.
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
