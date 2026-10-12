"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/*
  Gallery with category filtering + lightbox. Self-contained: all styling is
  inline here. Swap each item's `image` for a real photo when available — the
  shared placeholder follows the same convention as the rest of the site.
  To add a photo: add an object to GALLERY with a `category` from CATEGORIES.
*/

const CATEGORIES = [
  "FRP Tanks",
  "Polyethylene Tanks",
  "Underground Tanks",
  // "Chemical Tanks",
  // "Tank Restoration",
  // "Tank Lining",
  // "Thermal Insulation",
  // "Industrial Services",
  // "Chiller Installation & Maintenance",
  // "Installation",
  // "Manufacturing",
];

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Two items per category. Each has its own descriptive file name under
// /public/assets/images/gallery/ — drop a real .png in at that exact path
// and it shows up automatically. Alt text is descriptive for SEO/a11y.
const GALLERY = CATEGORIES.flatMap((category) => {
  const s = slug(category);
  return [
    {
      id: `${s}-1`,
      category,
      title: category,
      image: `/assets/images/gallery/${s}-1.png`,
      alt: `${category} by Falcon Technologies — Saudi Arabia`,
    },
    {
      id: `${s}-2`,
      category,
      title: `${category} — on site`,
      image: `/assets/images/gallery/${s}-2.png`,
      alt: `${category} on site by Falcon Technologies — Saudi Arabia`,
    },
  ];
});

export default function GalleryExplorer() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index within `filtered`

  const filtered = useMemo(
    () =>
      active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active),
    [active],
  );

  const openAt = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : filtered.length - 1));
  const next = () => setLightbox((i) => (i < filtered.length - 1 ? i + 1 : 0));

  return (
    <section className="w-full bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
        {/* Category filter bar */}
        <div className="flex flex-wrap gap-2">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              type="button"
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
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => openAt(i)}
                className="group relative aspect-4/3 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 text-left dark:border-white/10 dark:bg-neutral-800"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-sm bg-black/35 px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white/90 backdrop-blur-sm">
                  {item.category}
                </span>
                <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <span className="text-sm font-medium leading-snug text-white">
                    {item.title}
                  </span>
                  <ZoomIn
                    size={16}
                    className="shrink-0 text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-neutral-500 dark:text-white/50">
            No photos in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={filtered[lightbox].id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-neutral-900">
                <Image
                  src={filtered[lightbox].image}
                  alt={filtered[lightbox].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    {filtered[lightbox].title}
                  </p>
                  <p className="text-xs text-white/50">
                    {filtered[lightbox].category}
                  </p>
                </div>
                <p className="text-xs text-white/40">
                  {lightbox + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
