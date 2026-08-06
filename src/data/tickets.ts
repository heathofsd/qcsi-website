/* Ticketing for the 2026 Invitational — live as of 2026-08-06.
 *
 * The Eventbrite listing covers SATURDAY NIGHT ONLY: Jeffrey Foucault at The
 * Matthews, Sept 26, 7:30–9:30 PM (verified against the event page's own
 * metadata). Friday's Songwriters Showcase is not on this ticket — copy that
 * says "tickets" must say which night it means.
 *
 * Eventbrite reports any ?aff= value as a tracking link, so every placement
 * carries its own code and the EB dashboard shows which placement sells.
 */

export const TICKETS_EVENT_ID = "1996628646028";

const BASE = `https://www.eventbrite.com/e/queen-city-songwriters-invitational-jeffrey-foucault-tickets-${TICKETS_EVENT_ID}`;

export type TicketPlacement =
  | "site-bar"
  | "site-home"
  | "site-invitational"
  | "site-audiences"
  | "site-artist"
  | "site-schema";

export function ticketUrl(aff: TicketPlacement): string {
  return `${BASE}?aff=${aff}`;
}
