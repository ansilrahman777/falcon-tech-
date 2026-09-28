"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ScanLine,
  Building2,
  Boxes,
  Layers3,
  Cog,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    slug: "3d-laser-scanning",
    icon: ScanLine,
    label: "3D Laser Scanning",
    line: "Millions of measured points per setup — the whole space recorded, not just the dimensions someone remembered to take.",
    points: [
      "Full-coverage scan planning",
      "Registered point cloud",
      "Non-intrusive, live-site capture",
      "RCP, E57, DWG handover",
    ],
    image: "/assets/images/services/3d-laser-scanning.jpg",
  },
  {
    slug: "as-built-survey",
    icon: Building2,
    label: "As-Built Survey",
    line: "Plans, sections and elevations of buildings and structures as they stand today — including every modification nobody recorded.",
    points: [
      "Coordinated 2D drawing set",
      "Field modifications captured",
      "Your CAD standard and title block",
      "DWG, DXF, PDF",
    ],
    image: "/assets/images/services/as-built-survey.jpg",
  },
  {
    slug: "scan-to-bim",
    icon: Boxes,
    label: "Scan to BIM",
    line: "Point cloud converted into an intelligent parametric model at an LOD agreed element by element, not applied across the board.",
    points: [
      "Defined LOD per discipline",
      "Real parametric objects",
      "Deviation checked to the cloud",
      "RVT, IFC, NWC",
    ],
    image: "/assets/images/services/scan-to-bim.jpg",
  },
  {
    slug: "bim-modelling",
    icon: Layers3,
    label: "BIM Modelling",
    line: "Models built from drawings, design intent, vendor data or scan data — then coordinated so clashes surface in the model, not on site.",
    points: [
      "Architectural, structural, MEP",
      "Federated clash detection",
      "Built to your BEP",
      "Schedules and drawings from the model",
    ],
    image: "/assets/images/services/bim-modelling.jpg",
  },
  {
    slug: "reverse-engineering-scanning",
    icon: Cog,
    label: "Reverse Engineering",
    line: "Obsolete or undocumented components scanned and rebuilt as editable CAD — the fastest route back to a manufacturable replacement.",
    points: [
      "Obsolete spare recovery",
      "Parametric solid, not a mesh",
      "Modification-ready geometry",
      "STEP, IGES, STL, DWG",
    ],
    image: "/assets/images/services/reverse-engineering-scanning.jpg",
  },
];

export default function SurveyScanningSection() {
  const [active, setActive] = useState(capabilities[0].slug);

  const current =
    capabilities.find((c) => c.slug === active) ?? capabilities[0];

  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Blueprint ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 25% 10%, black 20%, transparent 78%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex h-7.5 items-center rounded-full border border-white/20 px-4.25"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-white">
              Survey Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-5 max-w-2xl text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:text-[34px]"
          >
            Surveying & 3D Scanning Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-white/60"
          >
            Retrofit work fails on bad dimensions. We scan existing plants,
            buildings and components, then deliver as-built drawings, BIM models
            or CAD solids from the same captured reality.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Capability list */}
          <ul className="border-t border-white/12">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isActive = cap.slug === active;

              return (
                <li key={cap.slug} className="border-b border-white/12">
                  <button
                    onMouseEnter={() => setActive(cap.slug)}
                    onFocus={() => setActive(cap.slug)}
                    onClick={() => setActive(cap.slug)}
                    aria-pressed={isActive}
                    className="flex w-full items-center gap-5 py-5 text-left"
                  >
                    <span
                      className={`font-mono text-[11px] tracking-[0.18em] transition-colors ${
                        isActive ? "text-brand" : "text-white/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className={`shrink-0 transition-colors ${
                        isActive ? "text-brand" : "text-white/40"
                      }`}
                    />

                    <span
                      className={`flex-1 text-[17px] leading-snug transition-colors sm:text-[19px] ${
                        isActive ? "text-white" : "text-white/55"
                      }`}
                    >
                      {cap.label}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-brand opacity-100"
                          : "-translate-x-1 text-white/30 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-sm border border-white/12 bg-white/3"
            >
              <div className="relative aspect-16/10 bg-white/5">
                <Image
                  src={current.image}
                  alt={`${current.label} — Falcon Technologies Saudi Arabia`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent" /> */}
              </div>

              {/* <div className="p-7 sm:p-8">
                <p className="text-sm leading-relaxed text-white/60">
                  {current.line}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {current.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm leading-snug text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/survey-scanning/${current.slug}`}
                  className="mt-7 inline-block border-b border-brand pb-0.5 text-sm font-semibold text-brand transition-colors hover:border-white hover:text-white"
                >
                  {current.label} in detail
                </Link>
              </div> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
