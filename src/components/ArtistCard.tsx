"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import type { Artist } from "@/data/artists";

function hasRecord(a: Artist) {
  return !!(a.fullBio || a.bio);
}

/* ------------------------------------------------------------------ overlay --- */

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function Record({ artist, onClose }: { artist: Artist; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // remember where focus came from so it can be handed back on close
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // keep Tab inside the panel — an aria-modal that leaks focus is not modal
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null || el === closeRef.current);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !panelRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      opener?.focus?.();
    };
  }, [onClose]);

  const details: [string, string | undefined][] = [
    ["Hometown", artist.hometown],
    ["Instrument", artist.instrument],
    ["Influences", artist.influences],
    ["Signature song", artist.signatureSong],
    ["First performance", artist.firstPerformance],
    ["Biggest achievement", artist.biggestAchievement],
    ["Dream collab", artist.dreamCollaboration],
    ["Fun fact", artist.funFact],
  ];
  const shown = details.filter(([, v]) => !!v);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${artist.name} — full record`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[rgba(15,15,17,0.86)]" />

      <div
        ref={panelRef}
        className="relative w-full max-w-4xl max-h-[88vh] bg-paper text-ink overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-paper border-b border-paper-edge px-6 py-4 md:px-8">
          <div>
            <h3 className="t-headline text-ink">{artist.name}</h3>
            <p className="t-run text-pencil mt-2">
              {artist.year.join(", ")}
              {artist.hometown ? ` · ${artist.hometown}` : ""}
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="t-run border border-paper-edge px-3 py-2 text-pencil hover:text-tape-ink hover:border-tape transition-colors shrink-0"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {artist.photo && (
            <div className="md:col-span-2 relative aspect-square md:aspect-auto md:min-h-[320px]">
              <Image
                src={artist.photo}
                alt={`${artist.name}, Queen City Songwriters Invitational artist`}
                fill
                className="object-cover"
                style={
                  artist.photoPosition
                    ? { objectPosition: artist.photoPosition }
                    : undefined
                }
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          )}

          <div
            className={`p-6 md:p-8 ${
              artist.photo ? "md:col-span-3" : "md:col-span-5"
            }`}
          >
            {(artist.fullBio || artist.bio) && (
              <p className="t-body text-ink">{artist.fullBio || artist.bio}</p>
            )}

            {artist.favoriteLyric && (
              <figure className="mt-8 border-t border-paper-edge pt-6">
                <p className="t-run-sm text-pencil mb-3">A favorite line</p>
                <blockquote className="text-xl leading-snug text-ink max-w-[36ch]">
                  &ldquo;{artist.favoriteLyric}&rdquo;
                </blockquote>
              </figure>
            )}

            {shown.length > 0 && (
              <dl className="mt-8 border-t border-paper-edge">
                {shown.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)] gap-1 md:gap-5 py-3 border-b border-paper-edge"
                  >
                    <dt className="t-run text-pencil">{label}</dt>
                    <dd className="text-ink text-[0.9375rem]">{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {(artist.instagram || artist.facebook) && (
              <div className="flex gap-3 mt-8">
                {artist.instagram && (
                  <a
                    href={`https://instagram.com/${artist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-run border border-paper-edge px-4 py-2.5 text-ballpoint hover:border-tape hover:text-tape-ink transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {artist.facebook && (
                  <a
                    href={`https://facebook.com/${artist.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-run border border-paper-edge px-4 py-2.5 text-ballpoint hover:border-tape hover:text-tape-ink transition-colors"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- roster row --- */

export function ArtistRow({
  artist,
  index,
  paper = false,
}: {
  artist: Artist;
  index: number;
  paper?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const openable = hasRecord(artist);
  const close = useCallback(() => setOpen(false), []);

  const meta = artist.instrument || artist.signatureSong || "";
  const cue = String(index + 1).padStart(2, "0");

  const body = (
    <>
      <span className="run-cue t-run" aria-hidden="true">
        {cue}
      </span>
      <span className="min-w-0">
        <span className="t-title run-subject">
          {artist.name}
        </span>
        {artist.hometown && (
          <span
            className={`t-run block mt-1.5 ${
              paper ? "text-pencil" : "text-chalk-dim"
            }`}
          >
            {artist.hometown}
          </span>
        )}
      </span>
      <span
        className={`run-meta md:text-right md:max-w-[24ch] ${
          paper ? "text-pencil" : "text-chalk-dim"
        }`}
      >
        {openable ? meta || "Read record" : meta}
      </span>
    </>
  );

  const cls = `run-row rule-in ${paper ? "run-row--paper" : ""} ${
    openable ? "run-row--link w-full text-left" : ""
  }`;

  return (
    <>
      {openable ? (
        <button type="button" className={cls} onClick={() => setOpen(true)}>
          {body}
        </button>
      ) : (
        <div className={cls}>{body}</div>
      )}
      {open && <Record artist={artist} onClose={close} />}
    </>
  );
}

/* ---------------------------------------------------------- headliner card --- */

export function HeadlinerCard({ artist }: { artist: Artist }) {
  const [open, setOpen] = useState(false);
  const openable = hasRecord(artist);
  const close = useCallback(() => setOpen(false), []);

  const inner = (
    <>
      <div className="relative aspect-[3/4]">
        {artist.photo ? (
          <Image
            src={artist.photo}
            alt={`${artist.name}, Queen City Songwriters Invitational headliner`}
            fill
            className="object-cover"
            style={
              artist.photoPosition
                ? { objectPosition: artist.photoPosition }
                : undefined
            }
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-floor-raised" />
        )}
      </div>
      <div className="pt-3 mt-3 border-t border-floor-line flex items-baseline justify-between gap-3">
        <span className="t-title text-chalk group-hover:text-tape transition-colors">
          {artist.name}
        </span>
        <span className="t-run text-chalk-dim">{artist.year.join(", ")}</span>
      </div>
    </>
  );

  return (
    <>
      {openable ? (
        <button
          type="button"
          className="group text-left w-full"
          onClick={() => setOpen(true)}
        >
          {inner}
        </button>
      ) : (
        <div className="group">{inner}</div>
      )}
      {open && <Record artist={artist} onClose={close} />}
    </>
  );
}

export default ArtistRow;
