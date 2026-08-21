import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { LEVEL_RANK, sponsorTiers, sponsorsByLevel } from "@/data/sponsors";
import {
  groupMarksByLevel,
  partitionSponsors,
  type SponsorMark,
} from "@/lib/sponsor-logo";
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

// Frames take the section rhythm, not leftover stamp sizes. Band (72) and
// act (120) are the system's large steps — the same ones that pad paper
// blocks and separate acts. Premium is two acts on desktop so a Troubadour
// outreads the footer mark (`h-24`) the way display type outreads a title.
// Width is the column (Full Measure Rule), not a rem cap that shrinks a
// wide lockup back into a stamp beside its caption.
const LOGO_FRAME: Record<
  "premium" | "prominent" | "standard",
  string
> = {
  premium:
    "h-[var(--spacing-act)] md:h-[calc(var(--spacing-act)*2)] w-full",
  prominent:
    "h-[var(--spacing-band)] md:h-[calc(var(--spacing-act)+var(--spacing-band))] w-full",
  standard:
    "h-[var(--spacing-band)] md:h-[var(--spacing-act)] w-full",
};

function nameRowsWithGroupedFans(
  rows: { name: string; tier?: string }[],
  fanNames: string[],
): ReactNode[] {
  const items: ReactNode[] = [];
  let insertedFan = false;
  const fanRow =
    fanNames.length > 0 ? (
      <RunRow key="fan-group" cue="Fan">
        <span className="t-title text-chalk">{fanNames.join(" · ")}</span>
      </RunRow>
    ) : null;

  for (const sponsor of rows) {
    const rank = LEVEL_RANK[sponsor.tier ?? "Sponsor"] ?? LEVEL_RANK.Sponsor;
    if (fanRow && !insertedFan && rank > LEVEL_RANK.Fan) {
      items.push(fanRow);
      insertedFan = true;
    }
    items.push(
      <RunRow key={sponsor.name} cue={sponsor.tier ?? "Sponsor"}>
        <span className="t-title text-chalk">{sponsor.name}</span>
      </RunRow>,
    );
  }
  if (fanRow && !insertedFan) items.push(fanRow);
  return items;
}

function SponsorNameList({
  rows,
  fanNames,
}: {
  rows: { name: string; tier?: string }[];
  fanNames: string[];
}) {
  if (rows.length === 0 && fanNames.length === 0) return null;

  return (
    <div className="border-t border-floor-line">
      {/* No location line. This used to stamp "Spearfish, SD" under every sponsor
          without a descriptor, which asserted something nobody had verified — and
          stopped being true outright once individual Fan-tier sponsors joined the
          list (Devon Sants is Pueblo, Colorado). If locations are wanted back, they
          belong as an optional per-sponsor field with real values, not a default. */}
      {nameRowsWithGroupedFans(rows, fanNames)}
    </div>
  );
}

function SponsorMarkFigure({
  sponsor,
  prominence,
}: {
  sponsor: SponsorMark;
  prominence: "premium" | "prominent" | "standard";
}) {
  return (
    <figure className="min-w-0 w-full">
      <div
        className={`flex items-center justify-start ${LOGO_FRAME[prominence]}`}
      >
        {/* Mixed SVG / raster marks — img keeps SVG unprocessed and
            object-contain holds the paper field without a card chrome. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sponsor.logoSrc}
          alt=""
          className="max-h-full max-w-full object-contain object-left"
        />
      </div>
      <figcaption className="t-run-sm text-pencil mt-4">
        {sponsor.name}
      </figcaption>
    </figure>
  );
}

export default function PartnersPage() {
  const { withLogo, nameOnly } = partitionSponsors(sponsorsByLevel);
  const logoGroups = groupMarksByLevel(withLogo);
  const fanNames = nameOnly
    .filter((sponsor) => sponsor.tier === "Fan" && sponsor.person)
    .map((sponsor) => sponsor.name);
  const namedRows = nameOnly.filter(
    (sponsor) => !(sponsor.tier === "Fan" && sponsor.person),
  );

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
      <section
        className={`shell pt-20 md:pt-[var(--spacing-act)] ${
          logoGroups.length > 0 ? "pb-10 md:pb-14" : "pb-20 md:pb-[var(--spacing-act)]"
        }`}
      >
        <Slug cue="With thanks" title="Our sponsors & partners">
          These businesses and organizations make the Invitational possible.
        </Slug>
        {logoGroups.length === 0 ? (
          <SponsorNameList rows={namedRows} fanNames={fanNames} />
        ) : null}
      </section>

      {logoGroups.length > 0 ? (
        <section className="bg-paper">
          <div className="shell py-20 md:py-[var(--spacing-act)]">
            {logoGroups.map((group) => (
              <div
                key={group.cue}
                className="border-t border-paper-edge py-[var(--spacing-band)] first:pt-0 first:border-t-0"
              >
                <p className="t-run text-tape-ink mb-8">{group.cue}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-[var(--spacing-band)] items-end">
                  {group.marks.map((sponsor) => (
                    <SponsorMarkFigure
                      key={sponsor.name}
                      sponsor={sponsor}
                      prominence={group.prominence}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {logoGroups.length > 0 ? (
        <section className="shell py-20 md:py-[var(--spacing-act)]">
          <SponsorNameList rows={namedRows} fanNames={fanNames} />
        </section>
      ) : null}

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
