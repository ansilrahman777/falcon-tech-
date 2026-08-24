"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Flame,
  ShieldCheck,
  Wrench,
  Snowflake,
  ClipboardCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Engineering, Manufacturing & Supply",
    body: "FRP/GRP, polyethylene and steel tank systems designed and fabricated around your stored liquid and site conditions.",
  },
  {
    icon: Flame,
    title: "Thermal Insulation",
    body: "Storage tank, pipe, building and equipment room insulation, including aerogel systems where space or weight is constrained.",
  },
  {
    icon: ShieldCheck,
    title: "Restoration & Rehabilitation",
    body: "Crack repair, structural reinforcement, and lining systems that extend the service life of existing tanks and structures.",
  },
  {
    icon: Snowflake,
    title: "Chiller Installation & Maintenance",
    body: "New chiller installation, commissioning, preventive maintenance and troubleshooting within our approved technical scope.",
  },
  {
    icon: Wrench,
    title: "Industrial Services",
    body: "Tank inspection, mechanical maintenance, industrial coating, and equipment support for plants and facilities.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & QA/QC",
    body: "Documented inspection and testing at every stage — receiving, in-process, final release and handover.",
  },
];

export default function CapabilitiesOverview() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-7 items-center rounded-full border border-neutral-300 px-4 dark:border-white/15"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
              What We Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[34px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[42px]"
          >
            Full-Scope Industrial Capability
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-8 dark:bg-neutral-950"
              >
                <Icon size={30} strokeWidth={1.4} className="text-brand" />
                <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {c.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
