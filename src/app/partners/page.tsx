import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sponsorTiers, currentSponsors } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description:
    "Support original music in Spearfish, SD. Become a sponsor of the Queen City Songwriters Invitational and invest in your community's creative culture.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/sponsor-board-2025.jpg"
          alt="Sponsor board at the 2025 Queen City Songwriters Invitational"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              Partners & Sponsors
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Invest in Original Music
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              The Invitational doesn&apos;t happen without community partners.
              Your sponsorship directly funds artist fees, venue production, and
              the infrastructure that makes this event possible.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Your Investment at Work
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
              Every dollar goes directly toward creating an experience that
              draws visitors, supports artists, and activates downtown.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "300+", label: "Attendees over two days" },
              { stat: "$20K", label: "Annual event budget" },
              { stat: "6+", label: "Downtown venues activated" },
              { stat: "30+", label: "Artists supported" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-display font-bold text-denim">{item.stat}</p>
                <p className="text-sm text-charcoal/60 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Sponsorship Tiers
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Choose the level that fits your business. Every tier makes a real
              difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-cream rounded-xl p-8 ${
                  tier.name === "Title Sponsor"
                    ? "md:col-span-2 lg:col-span-1 ring-2 ring-amber"
                    : ""
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-widest text-denim mb-1">
                  {tier.name}
                </p>
                <p className="text-3xl font-display font-bold text-charcoal mb-6">
                  {tier.amount}
                </p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <svg className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-denim px-8 py-4 font-bold text-cream hover:bg-denim-light transition-colors"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Sponsors & Partners
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              These businesses and organizations make the Invitational possible.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-sand rounded-lg p-6 text-center"
              >
                <p className="font-semibold text-charcoal text-sm">
                  {sponsor.name}
                </p>
                <p className="text-xs text-charcoal/50 mt-1">{sponsor.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Partners */}
      <section className="bg-charcoal text-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Venue Partners
          </h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto text-sm">
            The downtown businesses that open their doors to original music
            every September.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "The Matthews Opera House",
              "Blackbird Espresso",
              "Studio 621",
              "Spearfish Creek Wine Bar",
              "False Bottom Bar",
              "Spearfish Public House",
            ].map((venue) => (
              <span
                key={venue}
                className="bg-cream/10 border border-cream/10 rounded-full px-5 py-2 text-sm text-cream/70"
              >
                {venue}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
