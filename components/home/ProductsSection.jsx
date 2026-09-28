"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "FRP / GRP Tanks",
    href: "/services/tank-solutions/frp-grp-tanks",
    image: "/assets/images/home/frp-grp-tanks.webp",
    alt: "FRP GRP fiberglass tank",
  },
  {
    id: 2,
    title: "Polyethylene Tanks",
    href: "/services/tank-solutions/polyethylene-tanks",
    image: "/assets/images/home/polyethylene-tanks.webp",
    alt: "Polyethylene LLDPE HDPE tank",
  },
  {
    id: 3,
    title: "Underground Tanks",
    href: "/services/tank-solutions/underground-tanks",
    image: "/assets/images/home/underground-tanks.webp",
    alt: "Underground storage tank",
  },
  {
    id: 4,
    title: "Steel Tank Systems",
    href: "/services/tank-solutions/steel-tank-systems",
    image: "/assets/images/home/steel-tank-systems.webp",
    alt: "Fabricated steel tank system",
  },
  {
    id: 5,
    title: "Chemical Tanks",
    href: "/services/tank-solutions/chemical-tanks",
    image: "/assets/images/home/chemical-tanks.webp",
    alt: "Chemical storage tank",
  },
  {
    id: 6,
    title: "Diesel / Fuel Tanks",
    href: "/services/tank-solutions/diesel-fuel-tanks",
    image: "/assets/images/home/diesel-fuel-tanks.webp",
    alt: "Diesel and fuel storage tank",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
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
              Storage tanks for water, fuel and chemicals, engineered by
              application rather than picked off a fixed size chart.
            </p>
          </div>
          <Link
            href="/services/tank-solutions"
            className="inline-block border-b border-brand text-sm font-semibold text-brand transition-colors hover:border-brand-dark hover:text-brand-dark"
          >
            View all tank solutions
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={grid}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div key={p.id} variants={item}>
              <Link
                href={p.href}
                className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
              >
                <div className="relative aspect-square overflow-hidden bg-mist dark:bg-neutral-800">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-5 py-4 sm:px-6 sm:py-5">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white sm:text-base">
                    {p.title}
                  </h3>
                </div>

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
