"use client";

import { motion } from "framer-motion";
import { ClipboardList, Cog, ShieldCheck, FileCheck2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Review",
    body: "We review stored liquid, capacity, temperature, site conditions and applicable standards for your sector.",
  },
  {
    icon: Cog,
    title: "Material & Design Selection",
    body: "Application engineering determines the right tank, insulation or lining system for the environment.",
  },
  {
    icon: ShieldCheck,
    title: "Manufacturing & Installation",
    body: "Controlled manufacturing or on-site installation with in-process inspection at every stage.",
  },
  {
    icon: FileCheck2,
    title: "Documentation & Handover",
    body: "Testing, final inspection and full documentation handed over with every project or service.",
  },
];

export default function SectorApproach() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex h-[30px] items-center rounded-full border border-neutral-300 px-[17px] dark:border-white/15"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
              How We Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[40px]"
          >
            The Same Process, Whatever the Sector
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative bg-white p-7 dark:bg-neutral-900"
              >
                <span className="text-xs font-semibold text-brand">
                  0{i + 1}
                </span>
                <Icon size={26} strokeWidth={1.4} className="mt-3 text-brand" />
                <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
