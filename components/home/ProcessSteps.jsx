"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Wrench, FileCheck2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Initial Consultation",
    description: "We assess your project scope and requirements to recommend the right solution.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planning & Scheduling",
    description: "A tailored service plan is scheduled around your site and operational needs.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "On-Site Execution",
    description: "Certified engineers carry out the work using calibrated, industry-grade equipment.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Report & Certification",
    description: "You receive a fully traceable report with certification, ready for audit or use.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 dark:bg-neutral-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-[30px] items-center rounded-full border border-neutral-300 px-[17px] dark:border-white/15"
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
            className="mt-5 text-[36px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[44px]"
          >
            A Simple, Transparent Process
          </motion.h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line, desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-neutral-200 dark:bg-white/10 lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-brand bg-white dark:bg-neutral-950">
                  <Icon size={28} strokeWidth={1.5} className="text-brand" />
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                  Step {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
