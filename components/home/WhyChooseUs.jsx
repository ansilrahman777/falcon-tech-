"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Globe2, HeadphonesIcon } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "ISO-Certified Quality",
    description:
      "Every service we deliver follows internationally recognized calibration and inspection standards.",
  },
  {
    icon: Gauge,
    title: "Rapid Turnaround",
    description:
      "Streamlined workflows and modern equipment mean faster results without cutting corners.",
  },
  {
    icon: Globe2,
    title: "Nationwide Coverage",
    description:
      "On-site and in-lab services available across the Kingdom, wherever your project is located.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "A single point of contact from first inquiry to final report — no runaround.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-0 lg:py-24">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] w-full overflow-hidden rounded-sm sm:h-[440px] lg:h-[520px]"
        >
          <Image
              src="/assets/images/about/about-large.png"
            alt="Precision calibration in progress"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* floating stat card */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-sm bg-white/95 p-5 backdrop-blur dark:bg-neutral-900/95 sm:right-auto sm:w-72">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <ShieldCheck size={22} className="text-brand" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                100% Certified Accuracy
              </p>
              <p className="text-xs text-neutral-500 dark:text-white/50">
                Traceable to national standards
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-[30px] items-center rounded-full border border-neutral-300 px-[17px] dark:border-white/15"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
              Why Choose Falcon
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 max-w-lg text-[38px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[44px]"
          >
            Engineering Precision You Can Rely On
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div key={point.title} variants={itemVariants} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
