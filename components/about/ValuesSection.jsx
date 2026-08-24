"use client";

import { motion } from "framer-motion";
import { Eye, Target, Compass, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    body: "To be the trusted industrial partner of choice across Saudi Arabia and the GCC for engineered tank systems, insulation, and industrial support services.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "To deliver engineered, documented and reliable solutions — from material selection through manufacturing, installation and maintenance — for every project we take on.",
  },
  {
    icon: Compass,
    title: "Values",
    body: "Engineering integrity, documented quality, safety, and straightforward customer support, whether the client is a plant manager or an EPC contractor.",
  },
  {
    icon: HeartHandshake,
    title: "HSE Commitment",
    body: "Health, safety and environmental practice is built into every stage of our work, from site survey to final handover.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ValuesSection() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50 dark:bg-neutral-950">
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
              Who We Are
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[34px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[42px]"
          >
            Vision, Mission & Values
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={item}
                className="rounded-sm border border-neutral-200 bg-white p-7 transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-neutral-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Icon size={22} className="text-brand" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {c.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
