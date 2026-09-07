import type { Metadata } from "next";
import Image from "next/image";
import { sponsorTiers, sponsorsByLevel } from "@/data/sponsors";
import type { Sponsor } from "@/data/sponsors";
import { Tape, RunRow, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  alternates: { canonical: "/partners" },
  description:
    "Sponsor the Queen City Songwriters Invitational in Spearfish, SD. Packages from $50 to $5,000 put your business behind original music, 300+ attendees over two days, and a network of 100+ songwriters.",
};

const investment = [
  { cue: "300+", subject: "Attendees over two days" },
  { cue: "$20K", subject: "Annual event budget" },
  { cue: "4", subject: "Downtown venues activated" },
  { cue: "100+", subject: "Artists in our network" },
];

const venuePartners = [
  "The Matthews Opera House",
  "Spearfish Creek Wine Bar",
  "False Bottom Bar",
  "Spearfish Public House",
];

// Down the ladder. Mirrors LEVEL_RANK in the data file rather than re-deriving it,
// and anything with an unexpected level falls into "Sponsor" the same way.
const TIER_ORDER = [
  "Legend",
  "Troubadour",
  "Songsmith",
  "Busker",
  "Fan",
  "Sponsor",
  "Grant",
  "In-Kind",
];

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="bg-paper border border-paper-edge h-[128px] md:h-[148px] flex items-center justify-center p-5">
      {sponsor.logo ? (
        // Intrinsic size is unknown per file, so the image is constrained by the
        // card and left to find its own aspect. `unoptimized` because these are
        // already hand-quantised palette PNGs — 2.5MB of print files down to
        // 342KB — and Next's optimiser would re-encode them larger.
        <Image
          src={`/sponsors/${sponsor.logo}`}
          alt={sponsor.name}
          width={720}
          height={480}
          unoptimized
          // h-full w-full, NOT max-h-full w-auto. `w-auto` overrides the width
          // attribute Next sets, so before the file loads the box collapses to a
          // zero intrinsic width — no reserved space, layout shift on every card,
          // and a lazy image with no size to trigger against. Filling the card and
          // letting object-contain letterbox keeps the box stable from first paint.
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="t-run text-ink text-center leading-snug">
          {sponsor.name}
        </span>
      )}
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="a" className="mb-10">
          $20K event budget
        </Tape>
        <h1 className="t-display text-chalk max-w-[14ch]">
          Invest in original music
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          The Invitational doesn&apos;t happen without community partners. Your
          sponsorship directly funds artist fees, venue production, and the
          infrastructure that makes this event possible.
        </p>
        <div className="mt-10">
          <Action
            href="https://app.getpulley.app/donate/qcsi/c/qcsi2026"
            external
          >
            Become a sponsor
          </Action>
        </div>
      </section>

      <figure>
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/sponsor-board-2025.jpg"
            alt="Sponsor board at the 2025 Queen City Songwriters Invitational"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          The 2025 sponsor board &middot; every name on it made the weekend
          happen
        </figcaption>
      </figure>

      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Slug cue="The return" title="Your investment at work">
              Every dollar goes directly toward creating an experience that
              draws visitors, supports artists, and activates downtown.
            </Slug>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-floor-line">
              {investment.map((row) => (
                <RunRow key={row.subject} cue={row.cue} cueLarge>
                  <span className="t-title text-chalk">{row.subject}</span>
                </RunRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- tiers */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="The packages" title="Sponsorship tiers" paper>
            Choose the level that fits your business. Every tier makes a real
            difference.
          </Slug>

          <div className="space-y-14 md:space-y-16">
            {sponsorTiers.map((tier) => (
              <div key={tier.name} className="margin-note">
                <div className="margin-note__gutter">
                  <p className="t-run text-tape-ink">{tier.name}</p>
                  <p className="t-run text-ink font-bold text-2xl mt-2 tracking-normal">
                    {tier.amount}
                  </p>
                  <p className="t-run-sm text-pencil mt-2">{tier.tagline}</p>
                </div>
                <div>
                  <ul className="border-t border-paper-edge">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="grid grid-cols-[14px_minmax(0,1fr)] gap-4 py-3 border-b border-paper-edge text-ink text-[0.9375rem]"
                      >
                        {/* a marked-off line on a run sheet */}
                        <span
                          className="mt-[0.55em] h-[7px] w-[7px] bg-tape shrink-0"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="t-body text-pencil mt-14">
            Prefer to give in kind? Sound, lodging, printing, food, or a venue
            are welcome too &mdash; and recognized at the matching package
            level.
          </p>
          <div className="mt-10">
            <Action
              href="https://app.getpulley.app/donate/qcsi/c/qcsi2026"
              external
            >
              Become a sponsor
            </Action>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- the credits */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="With thanks" title="Our sponsors & partners">
          These businesses and organizations make the Invitational possible.
        </Slug>
        {/* No location line. This used to stamp "Spearfish, SD" under every sponsor
            without a descriptor, which asserted something nobody had verified — and
            stopped being true outright once individual Fan-tier sponsors joined the
            list (Devon Sants is Pueblo, Colorado). If locations are wanted back, they
            belong as an optional per-sponsor field with real values, not a default. */}

        {/* LOGOS ON PAPER CARDS, grouped by level — the same answer the 24 × 18
            sponsor sign arrived at, for the same reason. These marks come in every
            house style and aspect ratio from 0.97 to 4.46; loose on the dark floor
            each one's leftover space reads as a hole, and fourteen of them never
            compose with one another. On a card the identical gap reads as margin,
            and the page becomes a grid of cards rather than a scatter of logos.

            A sponsor with no logo still gets a card, with their name set in it. The
            individuals have no mark and never will, and a card keeps them peers of
            the businesses in their own tier rather than a lesser kind of row. */}
        <div className="space-y-12">
          {TIER_ORDER.map((level) => {
            const group = sponsorsByLevel.filter(
              (s) => (s.tier ?? "Sponsor") === level,
            );
            if (group.length === 0) return null;
            return (
              <div key={level}>
                <div className="flex items-baseline gap-4 border-t border-floor-line pt-4 mb-6">
                  <span className="t-run text-tape-ink">{level}</span>
                  <span className="t-run-sm text-pencil">
                    {group.length} {group.length === 1 ? "sponsor" : "sponsors"}
                  </span>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.map((sponsor) => (
                    <li key={sponsor.name}>
                      <SponsorCard sponsor={sponsor} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="shell pb-20 md:pb-[var(--spacing-act)]">
        <Slug cue="The rooms" title="Venue partners">
          The downtown businesses that open their doors to original music every
          September.
        </Slug>
        <div className="border-t border-floor-line">
          {venuePartners.map((venue) => (
            <RunRow key={venue} cue="Venue">
              <span className="t-title text-chalk">{venue}</span>
            </RunRow>
          ))}
        </div>
      </section>
    </>
  );
}
