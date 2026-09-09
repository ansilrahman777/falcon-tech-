"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Material Control",
    desc: "Raw material receiving inspection before any layer is laid down.",
  },
  {
    title: "Layer Construction & Thickness",
    desc: "Reinforcement and thickness controlled at every stage of fabrication.",
  },
  {
    title: "In-Process Inspection",
    desc: "Checked as work progresses, not only at final handover.",
  },
  {
    title: "Traceability",
    desc: "Material batch and process records kept against each unit produced.",
  },
];

export default function ManufacturingSection() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-17.5 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-0 lg:py-23">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="max-w-md text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
            Built Under Control, Not Just Built
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            Every tank passes through documented manufacturing engineering —
            from material receiving to final inspection — before it reaches
            site.
          </p>

          <ul className="mt-8 space-y-5">
            {capabilities.map((c) => (
              <li key={c.title} className="flex gap-3">
                <CheckCircle2 size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {c.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    {c.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[4/3] overflow-hidden rounded-sm border border-neutral-200 dark:border-white/10"
        >
          <Image
            src="/assets/images/home/hero-slide-1.png"
            alt="Falcon Technologies manufacturing facility"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-ink/90 px-6 py-4 backdrop-blur-sm">
            <span className="text-sm text-white/70">Inspected before dispatch</span>
            <span className="text-lg font-semibold text-white">100%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
