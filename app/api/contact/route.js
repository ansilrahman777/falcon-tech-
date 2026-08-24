import { NextResponse } from "next/server";

// Minimal RFQ submission endpoint. Wire this up to Resend (or your provider
// of choice) to actually deliver enquiries — this stub validates the
// payload and logs it so the form is fully functional end-to-end during
// development.
export async function POST(request) {
  try {
    const data = await request.json();

    const required = ["need", "name", "mobile"];
    const missing = required.filter((field) => !data?.[field]);
    if (missing.length) {
      return NextResponse.json(
        { ok: false, error: `Missing required field(s): ${missing.join(", ")}` },
        { status: 400 },
      );
    }

    // Basic honeypot check — the form includes a hidden "company_website"
    // field that real users never fill in.
    if (data.company_website) {
      return NextResponse.json({ ok: true });
    }

    console.log("[RFQ SUBMISSION]", JSON.stringify(data, null, 2));

    // TODO: send via Resend, e.g.:
    // await resend.emails.send({
    //   from: "quotes@falcontechksa.com",
    //   to: "info@falcontecksa.com",
    //   subject: `New RFQ — ${data.need}`,
    //   html: renderRfqEmail(data),
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
