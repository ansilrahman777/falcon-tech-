"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/*
  Floating quick-contact — fixed to the LEFT bottom corner, two separate
  round buttons stacked one above the other (WhatsApp on top, Call below).
  Each reveals its label on hover (desktop). Site-wide via the root layout.
*/

const WHATSAPP_URL =
  "https://wa.me/966592767326?text=Hello%20Falcon%20Technologies%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.";
const PHONE_URL = "tel:+966592767326";

function Bubble({ href, label, external, bg, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group/btn flex items-center"
    >
      <span
        className={`flex h-13 w-13 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition-transform duration-300 hover:scale-105 ${bg}`}
      >
        {children}
      </span>
      {/* label pill — slides out on hover (desktop only) */}
      <span className="pointer-events-none ml-2 hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-ink px-0 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover/btn:max-w-40 group-hover/btn:px-3 group-hover/btn:opacity-100 lg:block">
        {label}
      </span>
    </a>
  );
}

export default function QuickContact() {
  return (
    <div className="fixed bottom-5 left-4 z-50 flex flex-col gap-3 sm:bottom-7 sm:left-6">
      <Bubble
        href={WHATSAPP_URL}
        label="Chat on WhatsApp"
        external
        bg="bg-[#25D366] hover:bg-[#1ebe5a]"
      >
        <FaWhatsapp size={26} />
      </Bubble>
      <Bubble href={PHONE_URL} label="Call us" bg="bg-brand hover:bg-brand-dark">
        <Phone size={22} strokeWidth={2} />
      </Bubble>
    </div>
  );
}
