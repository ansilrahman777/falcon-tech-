"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fuel,
  FlaskConical,
  Droplets,
  Zap,
  Factory,
  Building2,
  HardHat,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";
import industriesData from "@/data/industriesData";

const ICONS = {
  Fuel,
  FlaskConical,
  Droplets,
  Zap,
  Factory,
  Building2,
  HardHat,
  UtensilsCrossed,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function IndustriesList() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
              Sectors We Serve
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[40px]"
          >
            Solutions Engineered Per Sector
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-white/55"
          >
            Every sector has different storage, temperature and operating
            requirements. Our engineering team selects materials and design
            around what your facility actually needs.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industriesData.map((ind) => {
            const Icon = ICONS[ind.icon];
            return (
              <motion.div key={ind.slug} variants={item}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col rounded-sm border border-neutral-200 bg-white p-7 transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-neutral-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <Icon size={22} strokeWidth={1.5} className="text-brand" />
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand dark:text-white/25"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    {ind.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {ind.solutions.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-neutral-200 px-2.5 py-1 text-[11px] font-medium text-neutral-500 dark:border-white/10 dark:text-white/45"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
