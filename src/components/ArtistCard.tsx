"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Artist } from "@/data/artists";

function SocialLinks({ artist }: { artist: Artist }) {
  if (!artist.instagram && !artist.facebook) return null;
  return (
    <div className="flex gap-4 mt-4">
      {artist.instagram && (
        <a
          href={`https://instagram.com/${artist.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-denim hover:text-denim-light transition-colors text-sm font-semibold"
          onClick={(e) => e.stopPropagation()}
        >
          Instagram
        </a>
      )}
      {artist.facebook && (
        <a
          href={`https://facebook.com/${artist.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-denim hover:text-denim-light transition-colors text-sm font-semibold"
          onClick={(e) => e.stopPropagation()}
        >
          Facebook
        </a>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="mb-2">
      <span className="text-charcoal/50 text-xs font-semibold uppercase tracking-wider">{label}: </span>
      <span className="text-charcoal/80 text-sm">{value}</span>
    </div>
  );
}

export default function ArtistCard({ artist, variant = "default" }: { artist: Artist; variant?: "default" | "headliner" }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasBack = !!(artist.fullBio || artist.bio);

  const close = useCallback(() => setFlipped(false), []);

  useEffect(() => {
    if (!flipped) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [flipped, close]);

  return (
    <>
      {/* Grid placeholder — the card in the grid */}
      <div
        ref={cardRef}
        className="cursor-pointer"
        onClick={() => hasBack && setFlipped(true)}
      >
        <div className={`${variant === "headliner" ? "bg-charcoal" : "bg-sand"} rounded-xl overflow-hidden hover:shadow-lg transition-shadow`}>
          <div className="relative aspect-square bg-charcoal/5">
            {artist.photo ? (
              <Image
                src={artist.photo}
                alt={`${artist.name}, Queen City Songwriters Invitational artist`}
                fill
                className="object-cover"
                style={artist.photoPosition ? { objectPosition: artist.photoPosition } : undefined}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className={`w-16 h-16 ${variant === "headliner" ? "text-cream/10" : "text-charcoal/20"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d={variant === "headliner" ? "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" : "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"} />
                </svg>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className={`font-display font-bold ${variant === "headliner" ? "text-cream" : "text-charcoal"}`}>{artist.name}</h3>
            {variant === "headliner" ? (
              <p className="text-amber text-sm">{artist.year.join(", ")}</p>
            ) : (
              <>
                {artist.hometown && (
                  <p className="text-xs text-charcoal/50">{artist.hometown}</p>
                )}
                {!artist.hometown && artist.instagram && (
                  <p className="text-sm text-denim">@{artist.instagram}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Expanded flipped card — modal overlay */}
      {flipped && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal/60 animate-fade-in" />

          {/* Card */}
          <div
            className="relative w-full max-w-lg animate-flip-in [perspective:1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="[transform:rotateY(180deg)] [transform-style:preserve-3d]">
              {/* Back face (visible after flip) */}
              <div className="[backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="bg-sand rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col">
                  {/* Header */}
                  <div className="bg-charcoal px-6 py-4 flex items-center justify-between shrink-0">
                    <div>
                      <h3 className="font-display font-bold text-cream text-xl">{artist.name}</h3>
                      {artist.hometown && (
                        <p className="text-amber text-sm">{artist.hometown}</p>
                      )}
                    </div>
                    <button
                      onClick={close}
                      className="text-cream/60 hover:text-cream transition-colors ml-4"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Scrollable body */}
                  <div className="p-6 overflow-y-auto">
                    {(artist.fullBio || artist.bio) && (
                      <p className="text-charcoal/80 text-sm leading-relaxed mb-5">
                        {artist.fullBio || artist.bio}
                      </p>
                    )}

                    <div className="border-t border-charcoal/10 pt-4">
                      <DetailRow label="Instrument" value={artist.instrument} />
                      <DetailRow label="Influences" value={artist.influences} />
                      <DetailRow label="Signature Song" value={artist.signatureSong} />
                      <DetailRow label="First Performance" value={artist.firstPerformance} />
                      <DetailRow label="Biggest Achievement" value={artist.biggestAchievement} />
                      <DetailRow label="Dream Collab" value={artist.dreamCollaboration} />
                      {artist.favoriteLyric && (
                        <div className="mb-2">
                          <span className="text-charcoal/50 text-xs font-semibold uppercase tracking-wider">Favorite Lyric: </span>
                          <span className="text-charcoal/80 text-sm italic">&ldquo;{artist.favoriteLyric}&rdquo;</span>
                        </div>
                      )}
                      <DetailRow label="Fun Fact" value={artist.funFact} />
                    </div>

                    <SocialLinks artist={artist} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
