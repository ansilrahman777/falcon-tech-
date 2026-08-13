"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const quickLinks = [
  { label: "Our Services", href: "/services" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Get a Quote", href: "/contact-us" },
];

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-white">
      {/* Background image with slow Ken Burns zoom */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/images/hero-bg.jpg"
          alt="Falcon Technologies engineering site"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlays for text legibility */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" /> */}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-red-500"
          >
            Engineering · Precision · Performance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Built for Long-Term
            <br />
            Industrial Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Falcon Technologies delivers calibration, survey, and geospatial
            solutions that keep the Kingdom&apos;s critical industries
            running safely and accurately.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Explore Our Services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Talk to Our Team
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-white/60 sm:bottom-28"
      >
        <ChevronDown size={22} />
      </motion.div>

      {/* Bottom quick-links strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-black/30 backdrop-blur-sm sm:block">
        <div className="mx-auto flex max-w-6xl divide-x divide-white/10">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex-1 px-6 py-5 text-center text-sm font-medium tracking-wide text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
