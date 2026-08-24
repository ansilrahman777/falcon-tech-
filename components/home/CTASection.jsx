"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/avatar.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/60" />
      </div>

      <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-0 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Let&apos;s Work Together
          </span>
          <h2 className="mt-4 text-[32px] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:text-[42px]">
            Ready to Start Your Next Project?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
            Get in touch with our engineering team for a free consultation and a
            tailored proposal for your site.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex shrink-0 flex-wrap items-center gap-4"
        >
          <Link
            href="/contact-us"
            className="group inline-flex h-14 items-center rounded-full bg-brand pl-8 pr-2 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:bg-brand-dark"
          >
            <span>Get a Quote</span>
            <span className="ml-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} strokeWidth={1.7} />
            </span>
          </Link>
          <Link
            href="tel:+966"
            className="inline-flex h-14 items-center rounded-full border border-white/20 px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Call Us Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
