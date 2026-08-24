"use client";

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
} from "lucide-react";

const industries = [
  { icon: Fuel, title: "Oil & Gas" },
  { icon: FlaskConical, title: "Petrochemical & Chemical" },
  { icon: Droplets, title: "Water & Wastewater" },
  { icon: Zap, title: "Power & Utilities" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Building2, title: "Commercial & Industrial Buildings" },
  { icon: HardHat, title: "Construction & Infrastructure" },
  { icon: UtensilsCrossed, title: "Food & Beverage" },
];

export default function IndustriesGrid() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex h-8 items-center rounded-full border border-neutral-300 px-4 dark:border-white/15"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
              Industries Served
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[40px]"
          >
            Built for Demanding Industrial Sectors
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 rounded-sm border border-neutral-200 bg-white p-6 text-center transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-neutral-900"
              >
                <Icon size={26} strokeWidth={1.4} className="text-brand" />
                <p className="text-sm font-medium leading-snug text-neutral-800 dark:text-white/85">
                  {ind.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
