"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Handshake } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Engineering First",
    description:
      "Application-based design, material selection and manufacturing engineering behind every tank, insulation and lining system we deliver.",
  },
  {
    icon: Handshake,
    title: "Documented Quality",
    description:
      "Inspection, traceability and service records at every stage, from receiving to final handover and after-service support.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-360 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex h-7 items-center rounded-full border border-neutral-300 px-4 dark:border-white/15"
            >
              <span className="whitespace-nowrap text-[11px] font-medium leading-none tracking-[0.02em] text-neutral-900 dark:text-white sm:text-[12px]">
                ABOUT OUR COMPANY
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-4xl text-[34px] font-normal leading-[1.08] tracking-[-0.045em] text-neutral-800 dark:text-white sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[56px]"
            >
              Industrial Solutions Built Around{" "}
              <span className="whitespace-nowrap">Engineering & Trust</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mt-7 max-w-3xl"
            >
              <p className="text-[15px] leading-[1.65] tracking-[-0.01em] text-neutral-600 dark:text-white/60 sm:text-[16px] lg:text-[17px]">
                Falcon Technologies provides engineered industrial solutions
                spanning tank systems, manufacturing, supply, installation,
                inspection, restoration, rehabilitation, thermal insulation,
                tank lining, chiller installation and maintenance, and selected
                industrial support services.
              </p>

              <p className="mt-4 text-[15px] leading-[1.65] tracking-[-0.01em] text-neutral-600 dark:text-white/60 sm:text-[16px] lg:text-[17px]">
                Our approach combines practical engineering, controlled
                execution and technical documentation to support customers
                across Saudi Arabia and the GCC.
              </p>
            </motion.div>

            {/* FEATURES */}
            <div className="mt-10 max-w-2xl sm:mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.12,
                    }}
                    className={`flex gap-5 sm:gap-6 ${
                      index === 0
                        ? "border-b border-neutral-200 pb-6 dark:border-white/10"
                        : "pt-6"
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex w-11 shrink-0 justify-start pt-1 sm:w-12">
                      <Icon
                        size={42}
                        strokeWidth={1.25}
                        className="text-neutral-800 dark:text-white sm:h-11 sm:w-11"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-[20px] font-normal leading-[1.2] tracking-[-0.02em] text-neutral-900 dark:text-white sm:text-[22px]">
                        {feature.title}
                      </h3>

                      <p className="mt-2.5 max-w-xl text-[14px] leading-[1.55] tracking-[-0.005em] text-neutral-500 dark:text-white/55 sm:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.5,
              }}
              className="mt-8"
            >
              <Link
                href="/about-us"
                className="group inline-flex h-14 items-center rounded-4xl bg-brand pl-6 pr-2 text-[13px] font-medium uppercase tracking-[0.01em] text-white transition-colors duration-300 hover:bg-brand-dark sm:h-15 sm:pl-7"
              >
                <span>Discover More</span>

                <span className="ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45 sm:h-11 sm:w-11">
                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.7}
                    className="text-white"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-105 w-full sm:h-130 lg:col-span-5 lg:h-155 xl:h-170"
          >
            <Image
              src="/assets/images/home/falcon-tech-ksa-about.webp"
              alt="Falcon engineers on an industrial site"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
