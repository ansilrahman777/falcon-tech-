"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "@/data/testimonials";

const AUTOPLAY_MS = 5500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full overflow-hidden bg-neutral-50 py-16 dark:bg-neutral-950 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex h-8 items-center rounded-full border border-neutral-300 px-[17px] dark:border-white/15"
        >
          <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
            Client Feedback
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-5 text-[34px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[40px]"
        >
          Trusted Across the Kingdom
        </motion.h2>

        <div className="relative mt-14">
          <Quote className="mx-auto mb-4 text-brand/30" size={40} strokeWidth={1.5} />

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl font-normal leading-relaxed text-neutral-700 dark:text-white/80 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/70"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand" : "w-2 bg-neutral-300 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/70"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
