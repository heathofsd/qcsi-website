import type { Metadata } from "next";
import Image from "next/image";
import { Tape, RunRow, MarginNote, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "501(c)(3) · EIN 99-3218012",
  alternates: { canonical: "/support" },
  description:
    "Support Queen City Songwriters Inc. — a 501(c)(3) nonprofit fostering the art of songwriting in Spearfish, South Dakota. Your donation funds artists, venues, and community programming.",
};

const split = [
  {
    cue: "67%",
    title: "Artist fees & support",
    desc: "Headliner contracts, participating songwriter compensation, travel support, and sound production. We pay artists because their work has value.",
  },
  {
    cue: "22%",
    title: "Production & venues",
    desc: "Venue rental at The Matthews Opera House, sound equipment, stage setup, and event production across all downtown locations.",
  },
  {
    cue: "11%",
    title: "Marketing & community",
    desc: "Printed materials, artist booklets, digital marketing, and community outreach to grow awareness of original music in the Black Hills.",
  },
];

const impact = [
  {
    amount: "$25",
    impact:
      "Covers printed materials for one songwriter — their artist card, booklet entry, and event signage.",
  },
  {
    amount: "$100",
    impact:
      "Funds a full songwriter round at a downtown venue — sound setup, promotion, and artist support.",
  },
  {
    amount: "$500",
    impact:
      "Sponsors an entire venue for the Invitational — two days of rounds, sound, and production.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="b" className="mb-10">
          Support QCSI
        </Tape>
        <h1 className="t-display text-chalk max-w-[14ch]">
          Keep original music alive
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          Your donation directly supports songwriters, funds community events,
          and helps build Spearfish into a destination for original music. Every
          dollar matters.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="https://app.getpulley.app/donate/qcsi" external>
            Donate now
          </Action>
          <Action href="/partners" variant="ghost">
            Become a sponsor
          </Action>
        </div>
        <p className="t-run-sm text-chalk-dim mt-6">
          Give once or monthly &middot; secure checkout powered by Stripe
        </p>
      </section>

      <figure>
        <div className="relative aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/photos/venue-patio-crowd.jpg"
            alt="Community enjoying live music on a Spearfish patio during the Invitational"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          A downtown patio, mid-afternoon &middot; this is what the money buys
        </figcaption>
      </figure>

      {/* --------------------------------------------------------- the split */}
      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Slug cue="The model" title="Where your donation goes" />
            <div className="border-t border-floor-line">
              {split.map((row) => (
                <RunRow key={row.title} cue={row.cue} cueLarge>
                  <span className="t-title text-chalk block mb-2">
                    {row.title}
                  </span>
                  <span className="t-body text-chalk-dim block">
                    {row.desc}
                  </span>
                </RunRow>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-paper text-ink p-6 md:p-8">
              <p className="t-run text-tape-ink mb-4">Make a donation</p>
              <p className="t-body text-pencil text-[0.9375rem]">
                Queen City Songwriters Inc. is a 501(c)(3) tax-exempt nonprofit.
                EIN 99-3218012. All donations are tax-deductible.
              </p>
              <div className="mt-8">
                <Action href="https://app.getpulley.app/donate/qcsi" external>
                  Donate now
                </Action>
              </div>
              <p className="t-run-sm text-pencil mt-6">
                A receipt and thank-you follow every gift.
              </p>
              <p className="t-run-sm text-pencil mt-3">
                Prefer to mail a check?{" "}
                <a
                  href="https://app.getpulley.app/donate/qcsi/by-check"
                  className="text-ballpoint underline underline-offset-4 hover:text-tape-ink"
                >
                  Get mailing details
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* -------------------------------------------------------- your impact */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="In real terms" title="Your impact" paper />
          <div className="space-y-12">
            {impact.map((item) => (
              <MarginNote
                key={item.amount}
                note={
                  <span className="block text-ink font-bold text-2xl tracking-normal">
                    {item.amount}
                  </span>
                }
              >
                <p className="text-ink text-xl md:text-2xl leading-snug max-w-[42ch]">
                  {item.impact}
                </p>
              </MarginNote>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <Slug cue="Not just money" title="Other ways to help">
          Not in a position to donate? You can still make a huge difference.
          Attend events and bring friends. Share our posts on social media. Tell
          a songwriter about us. Volunteer during the Invitational. Word of
          mouth is our most powerful tool.
        </Slug>
        <div className="flex flex-wrap gap-4">
          <Action href="/partners">Become a sponsor</Action>
          <Action href="/contact" variant="ghost">
            Volunteer
          </Action>
        </div>
      </section>
    </>
  );
}
