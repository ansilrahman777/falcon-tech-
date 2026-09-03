"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Flame,
  ShieldCheck,
  Layers,
  Snowflake,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Tank Solutions",
    tagline:
      "FRP, polyethylene and steel tanks engineered to your application.",
    icon: Factory,
    href: "/services/tank-solutions",
  },
  {
    id: 2,
    title: "Thermal Insulation",
    tagline: "Aerogel and conventional systems that cut heat loss and gain.",
    icon: Flame,
    href: "/services/thermal-insulation",
  },
  {
    id: 3,
    title: "Tank Restoration & Rehabilitation",
    tagline: "Structural repair and life-extension for ageing assets.",
    icon: ShieldCheck,
    href: "/services/tank-restoration-lining",
  },
  {
    id: 4,
    title: "Tank Lining",
    tagline: "FRP, chemical-resistant and waterproof lining systems.",
    icon: Layers,
    href: "/services/tank-lining",
  },
  {
    id: 5,
    title: "Chiller Installation & Maintenance",
    tagline: "New installations, servicing and fault diagnosis.",
    icon: Snowflake,
    href: "/services/chiller-installation-maintenance",
  },
  {
    id: 6,
    title: "Industrial Services",
    tagline: "Inspection, coating and mechanical maintenance support.",
    icon: Wrench,
    href: "/services/industrial-services",
  },
  {
    id: 7,
    title: "Inspection & Quality Assurance",
    tagline: "Testing, documentation and service records you can trust.",
    icon: ClipboardCheck,
    href: "/quality-standards",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-17.5 sm:px-8 sm:py-20 lg:px-0 lg:py-23">
        <h2 className="max-w-lg text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
          The full range, one contractor
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
          Seven disciplines covering tanks, insulation, lining and chiller work,
          backed by inspection and quality assurance on every job.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={grid}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.a
                key={service.id}
                href={service.href}
                variants={card}
                className="group flex aspect-square flex-col items-center justify-center gap-3 bg-mist p-6 text-center transition-colors duration-300 hover:bg-ink dark:bg-neutral-900 dark:hover:bg-ink"
              >
                <Icon
                  size={34}
                  strokeWidth={1.2}
                  className="text-ink transition-colors duration-300 group-hover:text-white dark:text-white/60"
                />
                <h3 className="text-base font-normal leading-snug tracking-[-0.01em] text-neutral-900 transition-colors duration-300 group-hover:text-white dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-white/60 dark:text-white/40">
                  {service.tagline}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
