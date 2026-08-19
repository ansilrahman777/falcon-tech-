"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Handshake } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "Cutting-edge tools and software streamline processes, enabling teams to deliver with precision.",
  },
  {
    icon: Handshake,
    title: "Experienced Engineers",
    description:
      "Knowledge and practical skills enable them to tackle challenges from start to finish.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950 lg:min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-20">
        <div className="relative">
          {/* ABOUT LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 inline-flex h-[30px] items-center rounded-full border border-neutral-300 px-[17px] dark:border-white/15"
          >
            <span className="whitespace-nowrap text-[12px] font-medium leading-none tracking-[-0.02em] text-neutral-900 dark:text-white">
              ABOUT OUR COMPANY
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-5 max-w-[680px] text-[42px] font-normal leading-[1.08] tracking-[-0.045em] text-neutral-800 dark:text-white sm:text-[50px] lg:text-[56px] xl:text-[58px]"
          >
            Innovative Solutions for <br /> Complex Projects
          </motion.h2>

          {/* SMALL LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12 h-[337px] w-full overflow-hidden sm:w-[237px] lg:absolute lg:left-0 lg:top-56 lg:mt-0"
          >
            <Image
              src="/assets/images/about/about-small.png"
              alt="Engineers working on site"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* CENTER FEATURE CONTENT */}
          <div className="mt-10 w-full sm:max-w-[460px] lg:absolute lg:left-[299px] lg:top-[224px] lg:mt-0 lg:w-[460px]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                  className={`flex items-start gap-[25px] ${
                    index === 0
                      ? "border-b border-neutral-200 pb-[23px] dark:border-white/10"
                      : "pt-[23px]"
                  }`}
                >
                  <div className="flex w-[60px] shrink-0 justify-center pt-[2px]">
                    <Icon size={48} strokeWidth={1.25} className="text-neutral-800 dark:text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[22px] font-normal leading-[1.2] tracking-[-0.025em] text-neutral-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-[10px] max-w-[380px] text-[16px] font-normal leading-[1.45] tracking-[-0.01em] text-neutral-500 dark:text-white/55">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.5 }}
            >
              <Link
                href="/about-us"
                className="group mt-[27px] inline-flex h-[60px] items-center rounded-full bg-brand pl-[30px] pr-[7px] text-[14px] font-medium uppercase tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-brand-dark"
              >
                <span>Discover More</span>
                <span className="ml-[23px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={22} strokeWidth={1.7} className="text-white" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* LARGE RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12 h-[430px] w-full overflow-hidden sm:h-[499px] lg:absolute lg:left-[868px] lg:top-[62px] lg:mt-0 lg:h-[499px] lg:w-[453px]"
          >
            <Image
              src="/assets/images/about/about-large.png"
              alt="Surveying engineers on a construction project"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
