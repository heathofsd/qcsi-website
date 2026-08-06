"use client";

import { useState } from "react";

/* Copies text it does not display. The old CopyBlock repeated the bio on the
   page under a "Copy-ready" memo header — the utility survives as a quiet
   button on the record's service row; the duplicate display does not. */
export function CopyButton({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  return (
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
      className="t-run border border-paper-edge px-4 py-2.5 text-pencil hover:text-tape-ink hover:border-tape transition-colors"
    >
      {/* role=status so the swap is announced — a focused button's own name
          change is not reliably re-read by screen readers */}
      <span role="status">
        {state === "copied"
          ? "Copied"
          : state === "failed"
            ? "Select & copy"
            : children}
      </span>
    </button>
  );
}
