import { RunRow } from "@/components/run";

/** The weekend's digital booklet, as one more line in the running order.
 *  It links with a plain <a> (`external`): next/link would prefetch the whole
 *  1.9 MB booklet on every page that shows this row. */
export function BookletRow({ index }: { index: number }) {
  return (
    <RunRow
      cue="All weekend"
      meta="What's on now"
      href="/booklet"
      external
      enter="load"
      index={index}
    >
      <span className="t-title text-chalk">The digital booklet</span>
      <span className="t-run text-chalk-dim block mt-1.5">
        Every round, room and writer, on your phone
      </span>
    </RunRow>
  );
}
