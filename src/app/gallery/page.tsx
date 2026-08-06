import type { Metadata } from "next";
import Image from "next/image";
import { Tape, Slug, Action } from "@/components/run";

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  alternates: { canonical: "/gallery" },
  description:
    "Photos and video from the Queen City Songwriters Invitational — songwriter rounds in downtown Spearfish and headliner nights at The Matthews Opera House, 2024 and 2025.",
};

const editions = [
  {
    year: "2025",
    label: "Second annual",
    blurb:
      "Andrea von Kampen, John Fullbright, and 20+ songwriters across downtown Spearfish.",
    photos: [
      {
        src: "/photos/headliner-matthews-wide.jpg",
        alt: "Headliner performing at The Matthews Opera House, 2025 Invitational",
        caption: "Headliner · The Matthews",
      },
      {
        src: "/photos/2025/converted/IMG_4473.jpg",
        alt: "Songwriter round at a downtown Spearfish venue",
        caption: "A round downtown",
      },
      {
        src: "/photos/2025/converted/IMG_4488.jpg",
        alt: "Intimate songwriter performance during the 2025 Invitational",
        caption: "Up close",
      },
      {
        src: "/photos/2025/converted/IMG_4514.jpg",
        alt: "Artists sharing songs at a daytime round",
        caption: "Daytime round",
      },
      {
        src: "/photos/2025/converted/IMG_4545.jpg",
        alt: "Audience enjoying original music at a downtown venue",
        caption: "The room, listening",
      },
      {
        src: "/photos/2025/converted/IMG_4601.jpg",
        alt: "Songwriter on stage at The Matthews Opera House",
        caption: "On the Matthews stage",
      },
      {
        src: "/photos/2025/converted/IMG_4602.jpg",
        alt: "Evening showcase crowd at The Matthews",
        caption: "Evening showcase",
      },
      {
        src: "/photos/2025/converted/IMG_4616.jpg",
        alt: "Performers at the 2025 Queen City Songwriters Invitational",
        caption: "Performers, 2025",
      },
    ],
  },
  {
    year: "2024",
    label: "Inaugural",
    blurb: "Jonathan Byrd, Jami Lynn, and 27 songwriters launched something special.",
    photos: [
      {
        src: "/photos/2024/converted/matthews-byrd-stage-crowd.jpg",
        alt: "Jonathan Byrd performing on The Matthews stage with crowd visible, 2024 Invitational",
        caption: "Jonathan Byrd · The Matthews",
      },
      {
        src: "/photos/2024/converted/venue-bar-crowd.jpg",
        alt: "Packed bar venue during a songwriter round at the 2024 Invitational",
        caption: "A packed bar",
      },
      {
        src: "/photos/2024/converted/traveler-stage-group.jpg",
        alt: "Songwriters on the Traveler Whiskey Stage at the 2024 Invitational",
        caption: "Traveler Whiskey Stage",
      },
      {
        src: "/photos/2024/converted/coffeeshop-round.jpg",
        alt: "Songwriter round in a downtown Spearfish coffee shop",
        caption: "Coffee shop round",
      },
      {
        src: "/photos/2024/converted/studio-621-round.jpg",
        alt: "Intimate songwriter round at Studio 621",
        caption: "Studio 621",
      },
      {
        src: "/photos/2024/converted/matthews-performer-portrait.jpg",
        alt: "Performer on The Matthews Opera House stage, 2024 Invitational",
        caption: "On stage",
      },
      {
        src: "/photos/2024/converted/matthews-performer-crowd.jpg",
        alt: "Songwriter performing to a full house at The Matthews",
        caption: "A full house",
      },
      {
        src: "/photos/2024/converted/bar-venue-round.jpg",
        alt: "Songwriter round at a downtown Spearfish bar venue",
        caption: "Bar venue round",
      },
    ],
  },
];

const videos = [
  {
    id: "ixqDpS2RXkc",
    title: "Clayton Ryan & Ryan LittleEagle at The Matthews",
    cue: "The Matthews",
  },
  {
    id: "HfreoKuUsa0",
    title: "Lacy Nelson at the 2024 Invitational",
    cue: "2024",
  },
  { id: "gugGfwwZe0k", title: "Heath Johnson live performance", cue: "Live" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="b" className="mb-10">
          Gallery
        </Tape>
        <h1 className="t-display text-chalk max-w-[14ch]">
          Moments worth remembering
        </h1>
        <p className="t-lead text-chalk-dim mt-8">
          Scenes from the Invitational &mdash; songwriter rounds in coffee
          shops, headliner nights at The Matthews, and the community that makes
          it all happen.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="/invitational">The 2026 Invitational</Action>
          <Action href="/for-songwriters" variant="ghost">
            Apply as a songwriter
          </Action>
        </div>
      </section>

      {editions.map((ed) => (
        <section key={ed.year} className="shell pb-20 md:pb-[var(--spacing-act)]">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="t-run text-tape">{ed.year}</span>
            <span className="t-run text-chalk-dim">{ed.label}</span>
          </div>
          <h2 className="t-headline text-chalk mb-4">
            {ed.year} Invitational
          </h2>
          <p className="t-body text-chalk-dim mb-10">{ed.blurb}</p>

          {/* a contact sheet: every frame numbered and named in the margin
              beneath it, because the story beside the picture is the point */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-4">
            {ed.photos.map((photo, i) => (
              <figure key={photo.src}>
                <div className="relative aspect-square">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
                <figcaption className="pt-2.5 mt-2.5 border-t border-floor-line flex items-baseline gap-3">
                  <span className="t-run-sm text-chalk-dim shrink-0">
                    {ed.year}.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-run-sm text-chalk-dim">
                    {photo.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-paper">
        <div className="shell py-20 md:py-[var(--spacing-act)]">
          <Slug cue="On tape" title="Video highlights" paper />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((v) => (
              <figure key={v.id}>
                <div className="aspect-video bg-floor">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <figcaption className="pt-3 mt-3 border-t border-paper-edge">
                  <span className="t-run text-tape-ink block mb-1.5">
                    {v.cue}
                  </span>
                  <span className="t-title text-ink">{v.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-[var(--spacing-act)]">
        <h2 className="t-headline text-chalk">
          Want to be in next year&apos;s gallery?
        </h2>
        <div className="flex flex-wrap gap-4 mt-10">
          <Action href="/for-songwriters">Apply as a songwriter</Action>
          <Action href="/invitational" variant="ghost">
            Attend the Invitational
          </Action>
        </div>
      </section>
    </>
  );
}
