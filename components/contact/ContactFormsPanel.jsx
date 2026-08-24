"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import RfqForm from "./RfqForm";

const TABS = [
  {
    id: "general",
    label: "General Enquiry",
    heading: "Send Us a Message",
    description:
      "Questions, feedback or anything that doesn't need a formal quotation — this goes straight to our front desk.",
  },
  {
    id: "rfq",
    label: "Request a Quote",
    heading: "Tell Us What You Need",
    description:
      "Engineers and consultants can share technical details below — standards, drawings and data sheets can follow by email.",
  },
];

export default function ContactFormsPanel({ defaultTab = "general" }) {
  const [tab, setTab] = useState(
    TABS.some((t) => t.id === defaultTab) ? defaultTab : "general",
  );
  const active = TABS.find((t) => t.id === tab);

  return (
    <div>
      <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
        <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
          {active.label}
        </span>
      </div>
      <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
        {active.heading}
      </h2>
      <p className="mt-3 mb-14 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
        {active.description}
      </p>

      {/* Tab switcher — the two forms are never rendered together, so the
          general enquiry and the RFQ stay fully independent submissions. */}
      {/* <div className="mt-6 inline-flex rounded-full border border-neutral-200 p-1 dark:border-white/10">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              tab === t.id
                ? "bg-brand text-white"
                : "text-neutral-500 hover:text-brand dark:text-white/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div> */}

      <ContactForm />
    </div>
  );
}
