import type { Metadata } from "next";
import { Tape, RunRow, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "810 State St, Spearfish SD",
  alternates: { canonical: "/contact" },
  description:
    "Get in touch with Queen City Songwriters — whether you're a songwriter, sponsor, or music lover.",
};

export default function ContactPage() {
  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="a" className="mb-10">
          Contact
        </Tape>
        <h1 className="t-display text-chalk max-w-[12ch]">Let&apos;s connect</h1>
        <p className="t-lead text-chalk-dim mt-8">
          Whether you&apos;re a songwriter looking to get involved, a business
          interested in sponsoring, or a music lover with a question &mdash; we
          want to hear from you.
        </p>
        {/* a real action outside the embed, so the page is never a dead end
            if the iframe is slow or blocked */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="mailto:contact@qcsongwriters.com" external>
            Email us directly
          </Action>
        </div>
      </section>

      <section className="shell pb-20 md:pb-[var(--spacing-act)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
              <p className="t-run text-tape">Send a note</p>
              <p className="t-run-sm text-chalk-dim">Form hosted by Notion</p>
            </div>
            <div className="bg-paper">
              <iframe
                src="https://heathjohnson.notion.site/ebd//320f6ac441bb80709bfdce9af7094e60"
                width="100%"
                height="620"
                title="Contact Queen City Songwriters"
                allow="fullscreen"
                className="block w-full border-0"
              />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="t-run text-tape mb-1">Direct</p>
            <div className="border-t border-floor-line">
              <RunRow
                cue="Email"
                href="mailto:contact@qcsongwriters.com"
                external
                enter="none"
              >
                <span className="t-title text-chalk break-words">
                  contact@qcsongwriters.com
                </span>
              </RunRow>
              <RunRow cue="Where" enter="none">
                <span className="t-title text-chalk">Spearfish, SD</span>
              </RunRow>
            </div>

            <p className="t-run text-tape mb-1 mt-12">Follow</p>
            <div className="border-t border-floor-line">
              <RunRow
                cue="Instagram"
                href="https://www.instagram.com/qcsongwriters"
                external
                enter="none"
              >
                <span className="t-title text-chalk">@qcsongwriters</span>
              </RunRow>
              <RunRow
                cue="Facebook"
                href="https://www.facebook.com/qcsongwriters"
                external
                enter="none"
              >
                <span className="t-title text-chalk">@qcsongwriters</span>
              </RunRow>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
