import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support QCSI",
  description:
    "Support Queen City Songwriters Inc. — a 501(c)(3) nonprofit fostering the art of songwriting in Spearfish, South Dakota. Your donation funds artists, venues, and community programming.",
};

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/venue-patio-crowd.jpg"
          alt="Community enjoying live music on a Spearfish patio during the Invitational"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              Support QCSI
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Keep Original Music Alive
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              Your donation directly supports songwriters, funds community
              events, and helps build Spearfish into a destination for original
              music. Every dollar matters.
            </p>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-8">
                Where Your Donation Goes
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Artist Fees & Support",
                    amount: "67%",
                    desc: "Headliner contracts, participating songwriter compensation, travel support, and sound production. We pay artists because their work has value.",
                  },
                  {
                    title: "Production & Venues",
                    amount: "22%",
                    desc: "Venue rental at The Matthews Opera House, sound equipment, stage setup, and event production across all downtown locations.",
                  },
                  {
                    title: "Marketing & Community",
                    amount: "11%",
                    desc: "Printed materials, artist booklets, digital marketing, and community outreach to grow awareness of original music in the Black Hills.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-denim/10 flex items-center justify-center">
                      <span className="font-display font-bold text-denim text-lg">
                        {item.amount}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donate Card */}
            <div className="bg-sand rounded-2xl p-10">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                Make a Donation
              </h3>
              <p className="text-charcoal/60 text-sm mb-8">
                Queen City Songwriters Inc. is a 501(c)(3) tax-exempt nonprofit.
                EIN: 99-3218012. All donations are tax-deductible.
              </p>

              {/* Suggested amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["$25", "$50", "$100", "$250", "$500", "$1,000"].map(
                  (amount) => (
                    <button
                      key={amount}
                      className="rounded-lg border-2 border-charcoal/10 bg-cream px-4 py-3 text-center font-bold text-charcoal hover:border-denim hover:text-denim transition-colors"
                    >
                      {amount}
                    </button>
                  )
                )}
              </div>

              <div className="space-y-4 mt-8">
                <a
                  href="https://venmo.com/HeathofSD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-denim px-6 py-4 font-bold text-cream hover:bg-denim-light transition-colors"
                >
                  Donate via Venmo
                </a>
                <a
                  href="mailto:contact@qcsongwriters.com?subject=Donation%20to%20QCSI"
                  className="flex items-center justify-center gap-2 w-full rounded-full border-2 border-charcoal/20 px-6 py-4 font-bold text-charcoal hover:border-charcoal/40 transition-colors"
                >
                  Contact Us to Donate
                </a>
              </div>

              <p className="text-xs text-charcoal/40 mt-6 text-center">
                For check donations, mail to: QCSI, 810 State St., Spearfish,
                SD 57783
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-charcoal text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Your Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                amount: "$25",
                impact: "Covers printed materials for one songwriter — their artist card, booklet entry, and event signage.",
              },
              {
                amount: "$100",
                impact: "Funds a full songwriter round at a downtown venue — sound setup, promotion, and artist support.",
              },
              {
                amount: "$500",
                impact: "Sponsors an entire venue for the Invitational — two days of rounds, sound, and production.",
              },
            ].map((item) => (
              <div key={item.amount} className="bg-cream/5 border border-cream/10 rounded-xl p-8 text-center">
                <p className="text-3xl font-display font-bold text-amber mb-4">
                  {item.amount}
                </p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
            Other Ways to Help
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-8">
            Not in a position to donate? You can still make a huge difference.
            Attend events and bring friends. Share our posts on social media.
            Tell a songwriter about us. Volunteer during the Invitational.
            Word of mouth is our most powerful tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partners"
              className="rounded-full bg-denim px-8 py-3 font-bold text-cream hover:bg-denim-light transition-colors"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-charcoal/20 px-8 py-3 font-bold text-charcoal hover:border-charcoal/40 transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
