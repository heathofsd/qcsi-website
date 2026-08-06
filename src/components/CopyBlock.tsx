"use client";

import { useState } from "react";

/* A copy-ready block on the paper field. The press-kit sections exist so a
   booker or reporter can lift the text verbatim — the button is the point. */
export function CopyBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  return (
    <div className="border-t border-paper-edge pt-5">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <p className="t-run text-pencil">{label}</p>
        <button
          type="button"
          onClick={() => {
            if (!navigator.clipboard) {
              setState("failed");
              return;
            }
            navigator.clipboard
              .writeText(text)
              .then(() => setState("copied"))
              .catch(() => setState("failed"))
              .finally(() => setTimeout(() => setState("idle"), 2000));
          }}
          className="t-run border border-paper-edge px-3 py-1.5 text-pencil hover:text-tape-ink hover:border-tape transition-colors shrink-0"
        >
          {/* role=status so the swap is announced — a focused button's own
              name change is not reliably re-read by screen readers */}
          <span role="status">
            {state === "copied"
              ? "Copied"
              : state === "failed"
                ? "Select & copy"
                : "Copy"}
          </span>
        </button>
      </div>
      <p className="t-body text-ink whitespace-pre-line">{text}</p>
    </div>
  );
}
