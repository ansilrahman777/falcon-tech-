import { NextResponse } from "next/server";

// General enquiry endpoint — kept separate from /api/contact (RFQ) since the
// two forms serve different purposes and require different fields. Wire
// this up to Resend (or your provider of choice) to actually deliver
// messages — this stub validates the payload and logs it so the form is
// fully functional end-to-end during development.
export async function POST(request) {
  try {
    const data = await request.json();

    const required = ["name", "email", "message"];
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

    console.log("[GENERAL ENQUIRY]", JSON.stringify(data, null, 2));

    // TODO: send via Resend, e.g.:
    // await resend.emails.send({
    //   from: "enquiries@falcontechksa.com",
    //   to: "info@falcontecksa.com",
    //   subject: `New Enquiry — ${data.subject || "General"}`,
    //   html: renderEnquiryEmail(data),
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
