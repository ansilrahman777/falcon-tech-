"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";

const items = [
  {
    icon: MapPin,
    label: "Address",
    value: "Building 7850/3308, Street 9, Al Sinaiyyah, Zip Code 32624, Dammam, Saudi Arabia",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+966 59 276 7326",
    href: "tel:+966592767326",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@falcontecksa.com",
    href: "mailto:info@falcontecksa.com",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Monday – Friday, 08:00 AM – 06:00 PM",
  },
];

export default function ContactInfoSection() {
  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        const content = (
          <div className="flex items-start gap-4 rounded-sm border border-neutral-200 bg-white p-5 transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-neutral-900">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <Icon size={19} className="text-brand" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-white/40">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-800 dark:text-white/85">
                {item.value}
              </p>
            </div>
          </div>
        );

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            {item.href ? <Link href={item.href}>{content}</Link> : content}
          </motion.div>
        );
      })}

      <motion.a
        href="https://wa.me/966592767326"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="flex items-center justify-center gap-2 rounded-sm bg-[#25D366] py-4 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </motion.a>
    </div>
  );
}
