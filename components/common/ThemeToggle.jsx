"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Theme toggle button.
 * `onLightSurface` — pass true when the button sits on a light-colored
 * background (so its border/icon flip to dark) e.g. header once scrolled
 * in light theme. Defaults to false (dark surface / light icon).
 */
export default function ThemeToggle({ onLightSurface = false, className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Reserve the same footprint before mount to avoid layout shift/hydration mismatch
  if (!mounted) {
    return <div className={`h-9 w-9 ${className}`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border transition-colors duration-300 ${
        onLightSurface
          ? "border-black/15 text-black hover:border-black/30 hover:bg-black/5"
          : "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
