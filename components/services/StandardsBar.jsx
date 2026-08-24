"use client";

import { motion } from "framer-motion";

const standards = [
  "ASTM D3299",
  "ASTM D4097",
  "ASTM D1998",
  "AS/NZS 4766",
  "Applicable ISO Standards",
  "SASO Requirements",
];

export default function StandardsBar() {
  return (
    <section className="w-full overflow-hidden bg-neutral-900 py-12 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40"
        >
          Engineered to Applicable Standards & Specifications
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {standards.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-sm font-medium tracking-wide text-white/70"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-white/35">
          Testing and checks are performed as applicable to the product,
          equipment, governing standard, manufacturer requirement and project
          specification. We display only certifications and service
          authorizations Falcon actually holds.
        </p>
      </div>
    </section>
  );
}
