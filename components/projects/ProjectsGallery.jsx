"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { MapPin, Building2, Calendar, X } from "lucide-react";
import projectsData, { projectCategories } from "@/data/projectsData";

export default function ProjectsGallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === active),
    [active],
  );

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                active === cat
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelected(p)}
                  className="group relative flex flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white text-left dark:border-white/10 dark:bg-neutral-900"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur">
                      {p.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold leading-snug text-neutral-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-white/45">
                      {p.client}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-neutral-400 dark:text-white/40">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {p.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {p.completion}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-neutral-500 dark:text-white/50">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-white dark:bg-neutral-900"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white"
              >
                <X size={16} />
              </button>
              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {selected.category}
                </span>
                <h3 className="mt-2 text-2xl font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
                  {selected.title}
                </h3>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 text-sm dark:border-white/10">
                  <Detail
                    icon={Building2}
                    label="Client"
                    value={selected.client}
                  />
                  <Detail
                    icon={MapPin}
                    label="Location"
                    value={selected.location}
                  />
                  <Detail
                    icon={Building2}
                    label="Industry"
                    value={selected.industry}
                  />
                  <Detail
                    icon={Calendar}
                    label="Completion"
                    value={selected.completion}
                  />
                </dl>
                <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {selected.scope}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-white/40">
        <Icon size={13} /> {label}
      </dt>
      <dd className="mt-1 text-neutral-800 dark:text-white/85">{value}</dd>
    </div>
  );
}
