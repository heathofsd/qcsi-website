import { ticketUrl } from "@/data/tickets";

/* The honest version of an arrival popup: a strip of spike tape across the
   top of the sheet. Every visitor sees it on every page, nothing is blocked,
   and Google's interstitial penalty never enters the picture. Static, not
   sticky — it says its piece and scrolls away with the top of the page. */
export function AnnouncementBar() {
  return (
    <a
      href={ticketUrl("site-bar")}
      className="block bg-tape text-ink hover:bg-tape-press transition-colors"
    >
      <p className="shell t-run font-bold py-2.5 flex items-baseline justify-between gap-4">
        <span>
          Tickets are live &mdash; Jeffrey Foucault &middot; Sat Sept 26 &middot;
          The Matthews
        </span>
        <span aria-hidden="true" className="shrink-0">
          Get tickets &rarr;
        </span>
      </p>
    </a>
  );
}
