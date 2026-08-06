"use client";

import { useEffect, useId, useState } from "react";
import { TICKETS_EVENT_ID, ticketUrl, type TicketPlacement } from "@/data/tickets";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (opts: {
        widgetType: "checkout";
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
      }) => void;
    };
  }
}

/* One shared loader — several triggers mount per page (the announcement bar
   plus in-page buttons), and each appending its own copy of EB's script was
   a race the first version would have lost. */
let loader: Promise<void> | null = null;
function loadEbWidgets(): Promise<void> {
  if (window.EBWidgets) return Promise.resolve();
  if (!loader) {
    loader = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => resolve(); // resolve either way — the href fallback stands
      document.body.appendChild(s);
    });
  }
  return loader;
}

/* Eventbrite's embedded checkout as progressive enhancement: renders a plain
   link that always works; when the widget script arrives, the same element
   opens checkout in-page instead of leaving the site. Every "Get tickets"
   on the site goes through this — leaving the site is the fallback, not
   the design. */
export function TicketCheckout({
  aff,
  children,
  className = "btn btn-tape font-bold",
}: {
  aff: TicketPlacement;
  children: React.ReactNode;
  className?: string;
}) {
  const id = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const triggerId = `eb-checkout-${id}`;
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    let alive = true;
    loadEbWidgets().then(() => {
      if (!alive || !window.EBWidgets) return;
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: TICKETS_EVENT_ID,
        modal: true,
        modalTriggerElementId: triggerId,
      });
      setEnhanced(true);
    });
    return () => {
      alive = false;
    };
  }, [triggerId]);

  return (
    <a
      id={triggerId}
      href={ticketUrl(aff)}
      // once the widget owns the click, the href is only the no-js fallback
      onClick={enhanced ? (e) => e.preventDefault() : undefined}
      className={className}
    >
      {children}
    </a>
  );
}
