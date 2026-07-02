import { NextResponse } from "next/server";
import Stripe from "stripe";

// One-time donation checkout for Queen City Songwriters Inc. (501(c)(3)).
// Stripe is instantiated lazily inside the handler so a missing key can never
// break `next build` (the class of failure the old Resend route hit).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_CENTS = 100; // $1
const MAX_CENTS = 5_000_000; // $50,000 sanity ceiling

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Donations aren't set up yet. Please email contact@qcsongwriters.com." },
      { status: 503 }
    );
  }

  let amountDollars: unknown;
  try {
    ({ amount: amountDollars } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const cents = Math.round(Number(amountDollars) * 100);
  if (!Number.isFinite(cents) || cents < MIN_CENTS || cents > MAX_CENTS) {
    return NextResponse.json(
      { error: "Please enter an amount between $1 and $50,000." },
      { status: 400 }
    );
  }

  const origin = req.headers.get("origin") ?? new URL(req.url).origin;
  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: cents,
            product_data: {
              name: "Donation to Queen City Songwriters",
              description: "Supporting songwriters and original music in Spearfish, SD.",
            },
          },
        },
      ],
      metadata: { source: "qcsongwriters.com" },
      payment_intent_data: { description: "QCSI donation" },
      success_url: `${origin}/support?donation=success`,
      cancel_url: `${origin}/support?donation=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 502 });
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[stripe] checkout session failed:", err);
    return NextResponse.json(
      { error: "Payment could not be started. Please try again." },
      { status: 502 }
    );
  }
}
