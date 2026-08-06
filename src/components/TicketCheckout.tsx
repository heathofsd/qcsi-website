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

/* Eventbrite's embedded checkout as progressive enhancement: this renders a
   plain tape-button link that always works, and if EB's widget script loads,
   clicking it opens checkout in-page instead of leaving the site. The script
   is loaded here — only pages that render this component pay for it. */
export function TicketCheckout({
  aff,
  children,
}: {
  aff: TicketPlacement;
  children: React.ReactNode;
}) {
  const id = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const triggerId = `eb-checkout-${id}`;
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const attach = () => {
      if (!window.EBWidgets) return false;
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: TICKETS_EVENT_ID,
        modal: true,
        modalTriggerElementId: triggerId,
      });
      setEnhanced(true);
      return true;
    };
    if (attach()) return;
    const s = document.createElement("script");
    s.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    s.async = true;
    s.onload = () => attach();
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, [triggerId]);

  return (
    <a
      id={triggerId}
      href={ticketUrl(aff)}
      // once the widget owns the click, the href is only the no-js fallback
      onClick={enhanced ? (e) => e.preventDefault() : undefined}
      className="btn btn-tape font-bold"
    >
      {children}
    </a>
  );
}
