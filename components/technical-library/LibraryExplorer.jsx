"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, X } from "lucide-react";
import libraryDocuments, {
  libraryCategories,
} from "@/data/technicalLibraryData";
import DocumentCard from "./DocumentCard";

export default function LibraryExplorer({ initialCategory = "all" }) {
  const [active, setActive] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const categoryLabel = (id) =>
    libraryCategories.find((c) => c.id === id)?.label ?? "";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return libraryDocuments.filter((doc) => {
      const matchesCategory = active === "all" || doc.category === active;
      const matchesQuery = q === "" || doc.title.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <section
      id="library"
      className="w-full overflow-hidden bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              Documents & Downloads
            </span>
            <h2 className="mt-3 max-w-lg text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
              Browse the Library
            </h2>
          </div>

          <div className="relative w-full sm:w-72">
            <Search
              size={15}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-white/35"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documents…"
              className="h-11 w-full rounded-full border border-neutral-200 bg-white pl-10 pr-9 text-sm text-neutral-800 
              outline-none transition-colors placeholder:text-neutral-400 focus:border-brand dark:border-white/15 dark:bg-neutral-900 
              dark:text-white dark:placeholder:text-white/35"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:text-white/35 dark:hover:text-white/70"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              active === "all"
                ? "border-brand bg-brand text-white"
                : "border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/60"
            }`}
          >
            All Documents
          </button>
          {libraryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                active === cat.id
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  layout
                  exit={{ opacity: 0, scale: 0.96 }}
                >
                  <DocumentCard
                    doc={doc}
                    categoryLabel={categoryLabel(doc.category)}
                    index={i}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-neutral-500 dark:text-white/50">
            No documents match &ldquo;{query}&rdquo;. Try another term or browse
            a different category.
          </p>
        )}
      </div>
    </section>
  );
}
