"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Factory, Flame, ShieldCheck, Wrench } from "lucide-react";

const categories = [
  {
    icon: Factory,
    title: "Tank Solutions",
    href: "/services/tank-solutions",
    description:
      "Engineered tank systems built around your stored liquid, capacity, temperature and site conditions.",
    features: [
      "FRP / GRP tanks — potable, process, wastewater, chemical, diesel",
      "Polyethylene tanks — LLDPE / HDPE, vertical, horizontal, underground",
      "Steel tank systems, supports, skids and custom fabrication",
      "Vertical, horizontal, underground, aboveground and custom shapes",
    ],
  },
  {
    icon: Flame,
    title: "Thermal Insulation",
    href: "/services/thermal-insulation",
    description:
      "Insulation systems that reduce heat loss, solar gain and product temperature fluctuation across tanks, pipes and buildings.",
    features: [
      "Storage tank insulation — steel, FRP, process and fuel tanks",
      "Pipe, duct and process equipment insulation",
      "Factory roof, warehouse and building insulation",
      "Aerogel insulation — lightweight, thin-profile, fire-retardant options",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Tank Restoration & Lining",
    href: "/services/tank-restoration-lining",
    description:
      "Crack rectification, structural reinforcement and lining systems that extend the service life of existing assets.",
    features: [
      "FRP tank restoration — cracks, leaks, nozzle & manhole repair",
      "Concrete tank rehabilitation and waterproofing",
      "FRP, chemical-resistant and steel tank lining",
      "Corrosion protection and surface preparation",
    ],
  },
  {
    icon: Wrench,
    title: "Industrial Services & Chiller Support",
    href: "/services/industrial-services",
    description:
      "Inspection, mechanical maintenance and chiller installation & maintenance delivered by a single accountable team.",
    features: [
      "Tank inspection, coating and mechanical maintenance",
      "New chiller installation, commissioning and start-up support",
      "Scheduled preventive maintenance and troubleshooting",
      "Leak inspection, corrective maintenance and service reports",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl divide-y divide-neutral-200 px-5 dark:divide-white/10 sm:px-8 lg:px-0">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <Icon size={26} strokeWidth={1.4} className="text-brand" />
                </div>
                <h2 className="mt-6 text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
                  {cat.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {cat.description}
                </p>
                <Link
                  href={cat.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              <ul className="space-y-3 rounded-sm border border-neutral-200 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900 sm:p-8">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700 dark:text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
