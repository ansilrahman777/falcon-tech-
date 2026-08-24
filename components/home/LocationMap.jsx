"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Globe2 } from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148811.1285763692!2d50.13884759061953!3d26.36825098531458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361d32276b3403%3A0xefd901ec7a5e5676!2sDammam%20Saudi%20Arabia!5e1!3m2!1sen!2sae!4v1787386449302!5m2!1sen!2sae";

export default function LocationMap() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        {/* ==== SECTION HEADER ==== */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex h-8 items-center rounded-full border border-neutral-300 px-5 dark:border-white/15"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-900 dark:text-white">
                Find Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="mt-5 text-[38px] font-normal leading-[1.08] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[46px] lg:text-[52px]"
            >
              Visit Falcon
              <span className="block">Technologies</span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/50 sm:text-base"
          >
            Based in Dammam, we support clients across Saudi Arabia and the GCC
            with reliable engineering, industrial and technical solutions.
          </motion.p>
        </div>

        {/* ==== MAP + CONTACT ===== */}
        <div className="grid grid-cols-1 overflow-hidden bg-white shadow-sm dark:bg-neutral-950 lg:grid-cols-[1.55fr_0.75fr]">
          {/* ==== GOOGLE MAP ==== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-95 sm:min-h-112.5 lg:min-h-140"
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Falcon Technologies location in Dammam, Saudi Arabia"
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>

          {/* ==== CONTACT INFORMATION ==== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="flex flex-col justify-between p-7 sm:p-9 lg:p-10"
          >
            <div>
              {/* Small label */}
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
                Falcon Technologies
              </p>

              {/* Heading */}
              <h3 className="mt-4 text-2xl font-normal leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                Let's talk about
                <span className="block">your next project.</span>
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-neutral-500 dark:text-white/50">
                Have a project in mind? Get in touch with our team to discuss
                your requirements and find the right solution for your
                application.
              </p>
            </div>

            {/* ==== DETAILS ==== */}
            <div className="mt-10 space-y-7">
              {/* LOCATION */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <MapPin size={18} strokeWidth={1.7} className="text-brand" />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    Location
                  </p>

                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-700 dark:text-white/70">
                    Falcon Technologies
                    <span className="block">Dammam, Saudi Arabia</span>
                  </p>
                </div>
              </div>

              {/* REGION */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Globe2 size={18} strokeWidth={1.7} className="text-brand" />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    Coverage
                  </p>

                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-700 dark:text-white/70">
                    Saudi Arabia and GCC
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Phone size={18} strokeWidth={1.7} className="text-brand" />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    Phone
                  </p>

                  <a
                    href="tel:+966592767326"
                    className="mt-1.5 block text-sm text-neutral-700 transition-colors duration-300 hover:text-brand dark:text-white/70"
                  >
                    +966 59 276 7326
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Mail size={18} strokeWidth={1.7} className="text-brand" />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@falcontechksa.com"
                    className="mt-1.5 block break-all text-sm text-neutral-700 transition-colors duration-300 hover:text-brand dark:text-white/70"
                  >
                    info@falcontechksa.com
                  </a>
                </div>
              </div>
            </div>

            {/* ==== CTA ==== */}
            <a
              href="/contact"
              className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-neutral-900 pb-1.5 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-brand hover:text-brand dark:border-white dark:text-white"
            >
              Contact Our Team
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
