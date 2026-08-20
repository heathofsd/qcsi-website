import type { Metadata } from "next";
import Image from "next/image";
import { Tape, RunRow } from "@/components/run";

const SPOTIFY = "https://open.spotify.com/artist/4aEoUklXzkBYXewDv0vNMZ";
const PHOTO = "/photos/people/gordy-pratt.png";

export const metadata: Metadata = {
  title: "Gordy Pratt",
  alternates: { canonical: "/gordy-pratt" },
  description:
    "Gordy Pratt was a founding director of Queen City Songwriters. He helped with the ideas and the connections when we were getting started.",
  openGraph: {
    title: "Gordy Pratt",
    description:
      "Founding director. Songwriter. Spearfish. Nov 21, 1952 – Nov 13, 2024.",
    images: [{ url: PHOTO, alt: "Gordy Pratt, studio portrait" }],
  },
};

export default function GordyPrattPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://qcsongwriters.com/gordy-pratt#person",
    name: "Gordy Pratt",
    alternateName: "Gordon Glen Pratt",
    url: "https://qcsongwriters.com/gordy-pratt",
    image: `https://qcsongwriters.com${PHOTO}`,
    description:
      "Gordy Pratt was a founding director of Queen City Songwriters. He helped with the ideas and the connections when we were getting started.",
    homeLocation: "Spearfish, SD",
    birthDate: "1952-11-21",
    deathDate: "2024-11-13",
    sameAs: [SPOTIFY],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
        <Tape land tilt="a" className="mb-10">
          Founding director
        </Tape>
        <h1 className="t-display text-chalk max-w-[12ch]">Gordy Pratt</h1>
        <p className="t-run text-chalk-dim mt-6">
          Founding director. Songwriter. Spearfish.
        </p>
        <p className="t-run text-chalk-dim mt-3">
          Nov 21, 1952 &ndash; Nov 13, 2024
        </p>
        <p className="t-run-sm text-chalk-dim mt-2">Gordon Glen Pratt</p>
        <p className="t-lead text-chalk-dim mt-8">
          Gordy Pratt was a founding director of Queen City Songwriters. He
          helped with the ideas and the connections when we were getting
          started.
        </p>
      </section>

      <figure>
        <div className="relative aspect-[4/5] md:aspect-[5/4]">
          <Image
            src={PHOTO}
            alt="Gordy Pratt, studio portrait with a red guitar"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="shell py-4 t-run-sm text-chalk-dim border-b border-floor-line">
          Gordy Pratt
        </figcaption>
      </figure>

      <section className="bg-paper">
        <div className="shell py-16 md:py-20">
          <div className="t-body text-ink space-y-5 max-w-[68ch]">
            <p>
              He was a classically trained guitarist, a songwriter, a lyricist,
              a playwright, and a producer. He picked up the guitar at ten.
              Summers at the Black Hills Playhouse, where his father worked,
              pointed him at this life. He studied at Ithaca College and spent a
              semester at the Royal Academy of Music in London. He lived all
              over. The Black Hills became his true home.
            </p>
            <p>
              In Deadwood he built Deadwood Production Company and put up more
              than a dozen musical comedies. The Desperate Damsels of Deadwood.
              Virtue, Villains and Vixens. Wild Bill Hiccup. He wrote them,
              produced them, and played them, often more than one a day, in a
              town that had just opened the tables. Winters, he took a one-man
              show on the road.
            </p>
            <p>
              His other one-man show was Seth Bullock: The Spirit of the West.
              He performed it more than a thousand times. ABC&apos;s Good
              Morning America had him on to sing &ldquo;The Days of
              &apos;76,&rdquo; a song from that show. As The Original Fabulous
              One Guy he carried a stand-up musical comedy of parodies and
              originals into rooms across the region. He opened for Kenny
              Chesney, the Nitty Gritty Dirt Band, and the Beach Boys.
            </p>
            <p>
              He wrote more than fifty original songs. Some poked fun at South
              Dakota life. Some did not. He played satirical revues at the
              Bullock Hotel and historical nights at the Adams Museum. He spent
              summers in Hill City at the Chuckwagon with Paul Larson. At home
              in Spearfish he kept a song circle and house concerts going. No
              microphones. Songs and the people who write them.
            </p>
            <p>South Dakota Country Music Hall of Fame, 2017.</p>
            <p>
              The records are still here. Seth Bullock: The Spirit of the West
              (2010). Rusty Old American Dream (2012). Son of a Gun (2014). Hear
              them on Spotify:{" "}
              <a
                href={SPOTIFY}
                className="text-ballpoint underline underline-offset-4 hover:text-tape-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SPOTIFY}
              </a>
            </p>
            <p>
              We remember him. If you have a song, you have a seat at the table.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-20">
        <div className="border-t border-floor-line">
          <RunRow cue="QCSI" href="/about">
            <span className="t-title text-chalk">About</span>
          </RunRow>
        </div>
      </section>
    </>
  );
}
