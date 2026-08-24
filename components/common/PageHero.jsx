"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * Shared inner-page hero: dark image banner + eyebrow + title + breadcrumb.
 * Mirrors the home Hero's overlay treatment so inner pages feel consistent
 * with the homepage instead of introducing a new visual language.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image = "/assets/images/home/hero-slide-1.png",
}) {
  return (
    <section className="relative flex h-[60vh] min-h-90 w-full items-end overflow-hidden bg-neutral-950 pt-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-14 lg:px-0">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-1.5 text-xs text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white/85">{breadcrumb}</span>
          </motion.div>
        )}

        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-500"
          >
            <span className="h-0.5 w-6 bg-red-500" />
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-2xl text-3xl font-normal leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
