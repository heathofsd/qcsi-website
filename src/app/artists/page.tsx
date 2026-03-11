import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { artists2025, artists2024Only, headliners } from "@/data/artists";
import ArtistCard from "@/components/ArtistCard";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Meet the songwriters who have been part of the Queen City Songwriters Invitational — original voices from across the region.",
};

export default function ArtistsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/artists-backstage-jam.jpg"
          alt="Songwriters jamming backstage at the Queen City Songwriters Invitational"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              The Artists
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Original Voices of the Invitational
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              Every year, we invite a curated group of songwriters to share
              their original music across downtown Spearfish. These are the
              artists who have answered the call.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Teaser */}
      <section className="bg-amber py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-cream text-lg font-semibold">
            The 2026 Invitational lineup will be announced soon.{" "}
            <Link href="/contact" className="underline underline-offset-4 hover:text-cream/80">
              Get notified
            </Link>
          </p>
        </div>
      </section>

      {/* Headliners */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
              Headliners
            </h2>
            <p className="text-charcoal/60">
              The artists who have headlined our evening showcases at The
              Matthews Opera House.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {headliners.map((artist) => (
              <div key={artist.name} className="bg-charcoal rounded-xl overflow-hidden">
                <div className="relative aspect-square">
                  {artist.photo ? (
                    <Image
                      src={artist.photo}
                      alt={`${artist.name}, headliner at the Queen City Songwriters Invitational`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-cream/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-cream">{artist.name}</h3>
                  <p className="text-amber text-sm">
                    {artist.year.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Artists */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
              2025 Invitational Artists
            </h2>
            <p className="text-charcoal/60">
              The songwriters who performed at the second annual Invitational.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {artists2025.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Alumni */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
              2024 Inaugural Artists
            </h2>
            <p className="text-charcoal/60">
              The original lineup who launched the Invitational. Artists who also
              performed in 2025 are listed above.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {artists2024Only.map((artist) => (
              <div key={artist.slug} className="bg-sand rounded-lg p-4">
                <h3 className="font-display font-bold text-charcoal text-sm">
                  {artist.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-4">
            Are You a Songwriter?
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            We&apos;re always looking for original voices. Learn how to get
            involved with QCSI.
          </p>
          <Link
            href="/for-songwriters"
            className="inline-block rounded-full bg-amber px-8 py-4 font-bold text-cream hover:bg-amber-light transition-colors"
          >
            For Songwriters
          </Link>
        </div>
      </section>
    </>
  );
}
