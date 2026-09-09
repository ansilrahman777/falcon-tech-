"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, FlaskConical, Container } from "lucide-react";

const products = [
  {
    id: 1,
    title: "FRP / GRP Tanks",
    capacity: "500 – 500,000 L",
    use: "Potable water, process water, wastewater, chemical and diesel storage",
    icon: Droplets,
  },
  {
    id: 2,
    title: "Polyethylene Tanks",
    capacity: "100 – 50,000 L",
    use: "LLDPE / HDPE tanks for water, chemical and general storage",
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "Steel Tank Systems",
    capacity: "1,000 – 1,000,000 L",
    use: "Fabricated diesel, fuel and industrial storage with supports and skids",
    icon: Container,
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProductsSection() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-17.5 sm:px-8 sm:py-20 lg:px-0 lg:py-23">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-lg text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
              Our Product Range
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Three tank product families, engineered by application rather
              than picked off a fixed size chart.
            </p>
          </div>
          <Link
            href="/services/tank-solutions"
            className="inline-block border-b border-brand text-sm font-semibold text-brand transition-colors hover:border-brand-dark hover:text-brand-dark"
          >
            View Tank Solutions
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={grid}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                variants={item}
                className="group flex flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between bg-ink p-6 transition-colors duration-300 group-hover:bg-brand">
                  <Icon size={28} strokeWidth={1.3} className="text-white/80" />
                  <span className="text-right text-xs font-medium uppercase tracking-[0.06em] text-white/50">
                    Capacity
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="text-2xl font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
                    {p.capacity}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-neutral-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    {p.use}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-6 text-xs leading-relaxed text-neutral-400 dark:text-white/35">
          Capacity ranges shown are indicative — exact sizing is confirmed
          with our engineers against your application.
        </p>
      </div>
    </section>
  );
}
