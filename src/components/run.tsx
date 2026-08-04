import Link from "next/link";
import type { ReactNode } from "react";

/* The shared vocabulary of the running order. Every page is built from these
   five pieces, which is what makes ten routes read as one document. */

/** A hand-torn strip of spike tape. Marks a boundary, a flag, or an action. */
export function Tape({
  children,
  tilt = "a",
  land = false,
  className = "",
}: {
  children: ReactNode;
  tilt?: "a" | "b";
  land?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`tape ${tilt === "a" ? "tape-tilt-a" : "tape-tilt-b"} ${
        land ? "tape-land" : ""
      } inline-block px-4 py-2 whitespace-nowrap max-w-full overflow-hidden ${className}`}
    >
      <span className="t-run font-bold">{children}</span>
    </div>
  );
}

/** The spine of the site: mono cue, subject, mono meta, ruled underneath. */
export function RunRow({
  cue,
  meta,
  href,
  external,
  paper = false,
  enter = "scroll",
  index = 0,
  cueLarge = false,
  children,
}: {
  cue?: ReactNode;
  meta?: ReactNode;
  href?: string;
  external?: boolean;
  paper?: boolean;
  /** "load" for rows above the fold, "scroll" for everything below it. */
  enter?: "scroll" | "load" | "none";
  index?: number;
  cueLarge?: boolean;
  children: ReactNode;
}) {
  const classes = [
    "run-row",
    paper ? "run-row--paper" : "",
    href ? "run-row--link" : "",
    enter === "scroll" ? "rule-in" : enter === "load" ? "rule-in-load" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span
        className={`run-cue t-run ${cueLarge ? "run-cue--lg" : ""} ${
          cue ? "" : "hidden md:block"
        }`}
      >
        {cue}
      </span>
      <span className="min-w-0">{children}</span>
      <span
        className={`run-meta md:max-w-[24ch] ${
          paper ? "text-pencil" : "text-chalk-dim"
        } ${meta || href ? "md:text-right" : "hidden md:block"}`}
      >
        {meta}
        {/* a line you can follow — the only rest-state cue that a row is a link */}
        {href && (
          <span
            className={`run-arrow inline-block ml-3 ${
              paper ? "text-tape-ink" : "text-tape"
            }`}
            aria-hidden="true"
          >
            &rarr;
          </span>
        )}
      </span>
    </>
  );

  const style =
    enter === "load"
      ? ({ "--row-index": index } as React.CSSProperties)
      : undefined;

  if (href) {
    return external ? (
      <a href={href} className={classes} style={style}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={classes} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={classes} style={style}>
      {inner}
    </div>
  );
}

/** The note beside the title — the system's most product-specific pattern. */
export function MarginNote({
  note,
  children,
}: {
  note: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="margin-note">
      <div className="margin-note__gutter t-run-sm text-pencil pt-1">
        {note}
      </div>
      <div>{children}</div>
    </div>
  );
}

/** Section heading: a mono slug over a condensed headline. */
export function Slug({
  cue,
  title,
  paper = false,
  children,
}: {
  cue: string;
  title: string;
  paper?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className={`t-run mb-4 ${paper ? "text-tape-ink" : "text-tape"}`}>
        {cue}
      </p>
      <h2 className={`t-headline ${paper ? "text-ink" : "text-chalk"}`}>
        {title}
      </h2>
      {children ? (
        <div
          className={`t-body mt-5 ${paper ? "text-pencil" : "text-chalk-dim"}`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

/** Actions. Tape is the primary; ghost is everything else. */
export function Action({
  href,
  children,
  variant = "tape",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "tape" | "ghost";
  external?: boolean;
}) {
  const cls = `btn btn-${variant} font-bold`;
  return external ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
