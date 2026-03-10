import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUBJECT_LABELS: Record<string, string> = {
  songwriter: "Songwriter",
  audience: "Music Lover / Attendee",
  sponsor: "Potential Sponsor",
  media: "Media / Press",
  volunteer: "Volunteer",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const subjectLabel = SUBJECT_LABELS[subject] || subject || "General";

    await resend.emails.send({
      from: "QCSI Website <noreply@qcsongwriters.com>",
      to: "contact@qcsongwriters.com",
      replyTo: email,
      subject: `Contact Form: ${subjectLabel} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Type: ${subjectLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT FORM] Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
