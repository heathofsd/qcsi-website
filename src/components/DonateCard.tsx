"use client";

import { useState } from "react";

const PRESETS = [25, 50, 100, 250, 500, 1000];

export default function DonateCard() {
  const [preset, setPreset] = useState<number | null>(50);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amount = custom.trim() ? Number(custom) : preset;
  const valid = Number.isFinite(amount as number) && (amount as number) >= 1;

  function selectPreset(value: number) {
    setPreset(value);
    setCustom("");
    setError(null);
  }

  function changeCustom(value: string) {
    setCustom(value);
    setPreset(null);
    setError(null);
  }

  async function donate() {
    if (!valid || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-sand rounded-2xl p-10">
      <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
        Make a Donation
      </h3>
      <p className="text-charcoal/60 text-sm mb-8">
        Queen City Songwriters Inc. is a 501(c)(3) tax-exempt nonprofit. EIN:
        99-3218012. All donations are tax-deductible.
      </p>

      {/* Suggested amounts */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {PRESETS.map((value) => {
          const active = preset === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => selectPreset(value)}
              aria-pressed={active}
              className={`rounded-lg border-2 px-4 py-3 text-center font-bold transition-colors ${
                active
                  ? "border-denim bg-denim text-cream"
                  : "border-charcoal/10 bg-cream text-charcoal hover:border-denim hover:text-denim"
              }`}
            >
              ${value.toLocaleString()}
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <label htmlFor="custom-amount" className="sr-only">
        Other amount
      </label>
      <div className="relative mb-6">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-charcoal/50">
          $
        </span>
        <input
          id="custom-amount"
          type="number"
          inputMode="decimal"
          min="1"
          step="1"
          placeholder="Other amount"
          value={custom}
          onChange={(e) => changeCustom(e.target.value)}
          className="w-full rounded-lg border-2 border-charcoal/10 bg-cream py-3 pl-8 pr-4 font-bold text-charcoal placeholder:font-normal placeholder:text-charcoal/40 focus:border-denim focus:outline-none"
        />
      </div>

      {error && (
        <p className="mb-4 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={donate}
        disabled={!valid || loading}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-denim px-6 py-4 font-bold text-cream transition-colors hover:bg-denim-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "Redirecting to checkout…"
          : valid
            ? `Donate $${(amount as number).toLocaleString()}`
            : "Choose an amount"}
      </button>

      <p className="mt-4 text-center text-xs text-charcoal/40">
        Secure checkout powered by Stripe. A receipt will be emailed to you.
      </p>
      <p className="mt-2 text-center text-xs text-charcoal/40">
        Prefer to mail a check? Email contact@qcsongwriters.com for details.
      </p>
    </div>
  );
}
