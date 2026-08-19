"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import navData from "@/data/navData";
import ThemeToggle from "@/components/common/ThemeToggle";

const LANGS = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

const LOGO_BLACK = "/assets/logos/falcon-tech-ksa-black-logo.png";
const LOGO_WHITE = "/assets/logos/falcon-tech-ksa-white-logo.png";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => setMounted(true), []);

  // Solid bg once the hero has been scrolled past
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const openMenu = useCallback((idx) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(idx);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const solid = scrolled || activeMenu !== null;
  const lightSurface = mounted && solid && resolvedTheme === "light";

  const logoSrc = lightSurface ? LOGO_BLACK : LOGO_WHITE;
  const textClass = lightSurface
    ? "text-black hover:text-black"
    : "text-white hover:text-white";
  const underlineClass = lightSurface ? "after:bg-black" : "after:bg-white";

  return (
    <>
      {/* Backdrop dim/blur behind open submenu */}
      <AnimatePresence>
        {activeMenu !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      <header
        onMouseLeave={scheduleClose}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          solid
            ? lightSurface
              ? "bg-white/90 backdrop-blur-md border-b border-black/10"
              : "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-linear-to-b from-black/60 to-transparent"
        }`}
      >
        {/* Top row: lang | logo | theme toggle */}
        <div className="relative flex items-center justify-between px-6 lg:px-12 py-8">
          {/* Language switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={`flex items-center gap-1.5 text-sm transition-colors ${textClass}`}
            >
              <Globe size={15} />
              {LANGS.find((l) => l.code === lang)?.label}
              <ChevronDown
                size={14}
                className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-3 w-40 rounded-lg bg-white shadow-xl overflow-hidden"
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50"
                    >
                      {l.label}
                      {lang === l.code && <span className="text-xs">✓</span>}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Logo — centered, swaps black/white based on current header surface */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={logoSrc}
              alt="Falcon Technologies KSA"
              width={2400}
              height={417}
              priority
              className="h-12 md:h-20 w-auto object-contain transition-opacity duration-300"
            />
          </Link>

          {/* Theme toggle + mobile menu button */}
          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle onLightSurface={lightSurface} />
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-1 ${lightSurface ? "text-black" : "text-white"}`}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* Main nav row */}
        <nav
          className={`hidden md:flex items-center justify-center gap-10 border-t py-3 ${
            lightSurface ? "border-black/5" : "border-white/5"
          }`}
        >
          {navData.map((item, idx) => (
            <div
              key={item.label}
              onMouseEnter={() => item.submenu && openMenu(idx)}
            >
              <Link
                href={item.href}
                className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:transition-all after:duration-300 ${textClass} ${underlineClass} ${
                  activeMenu === idx ? "after:w-full" : "after:w-0"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Submenu (mega menu) row */}
        <AnimatePresence>
          {activeMenu !== null && navData[activeMenu]?.submenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseEnter={() => openMenu(activeMenu)}
              className={`hidden md:block border-t overflow-hidden ${
                lightSurface
                  ? "border-black/10 bg-white/70"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <div className="flex justify-center gap-10 px-12 py-6">
                {navData[activeMenu].submenu.map((sub) =>
                  navData[activeMenu].variant === "cards" ? (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="group w-44"
                    >
                      <div className="relative h-28 w-full overflow-hidden rounded-lg bg-black/5">
                        <Image
                          src={sub.image}
                          alt={sub.label}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className={`mt-2 text-sm ${textClass}`}>{sub.label}</p>
                    </Link>
                  ) : (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className={`text-sm transition-colors ${textClass}`}
                    >
                      {sub.label}
                    </Link>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile drawer — follows the site theme directly (not scroll state) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-60 flex flex-col md:hidden bg-white text-black dark:bg-black dark:text-white"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10">
              <Image
                src={resolvedTheme === "light" ? LOGO_BLACK : LOGO_WHITE}
                alt="Falcon Technologies KSA"
                width={2400}
                height={417}
                className="h-7 w-auto object-contain"
              />
              <div className="flex items-center gap-3">
                <ThemeToggle onLightSurface={resolvedTheme === "light"} />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              {navData.map((item, idx) => (
                <div
                  key={item.label}
                  className="border-b border-black/10 dark:border-white/10"
                >
                  <button
                    onClick={() =>
                      item.submenu
                        ? setMobileSubOpen(mobileSubOpen === idx ? null : idx)
                        : setMobileOpen(false)
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-base font-medium"
                  >
                    <Link
                      href={item.href}
                      onClick={() => !item.submenu && setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileSubOpen === idx ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.submenu && mobileSubOpen === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 pb-3 space-y-3"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-black/10 dark:border-white/10 flex items-center gap-4 text-sm text-black/60 dark:text-white/70">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={
                    lang === l.code ? "text-black dark:text-white" : ""
                  }
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
