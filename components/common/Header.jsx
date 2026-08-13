"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ChevronDown, Menu, X, Globe } from "lucide-react";
import navData from "@/data/navData";

const LANGS = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

const LOGO_SRC = "/assets/logos/falcon-tech-ksa-white-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // index of open submenu
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const closeTimer = useRef(null);

  // Solid/blurred bg after scrolling past hero
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

  const isDark = scrolled || activeMenu !== null; // header visual state

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
          isDark
            ? "bg-black/70 backdrop-blur-md border-b border-white/10"
            : "bg-linear-to-b from-black/60 to-transparent"
        }`}
      >
        {/* Top row: lang | logo | search */}
        <div className="relative flex items-center justify-between px-6 lg:px-12 py-10">
          {/* Language switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors"
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

          {/* Logo — centered. Source PNG is dark/red on transparent bg,
              so it's forced to pure white via filter to stay visible on
              this dark/transparent header. Swap for a real white-logo
              asset later and drop the filter classes. */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={LOGO_SRC}
              alt="Falcon Technologies KSA"
              width={2400}
              height={417}
              priority
              className="h-8 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Search + mobile toggle */}
          <div className="flex items-center gap-4 ml-auto">
            <button className="hidden md:flex items-center gap-2 text-sm text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-4 py-2 transition-colors">
              <Search size={15} />
              Search
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white p-1"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* Main nav row */}
        <nav className="hidden md:flex items-center justify-center gap-10 border-t border-white/10 py-3">
          {navData.map((item, idx) => (
            <div
              key={item.label}
              onMouseEnter={() => item.submenu && openMenu(idx)}
            >
              <Link
                href={item.href}
                className={`relative text-sm font-medium tracking-wide text-white/85 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 ${
                  activeMenu === idx ? "after:w-full text-white" : "after:w-0"
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
              className="hidden md:block border-t border-white/10 bg-black/40 overflow-hidden"
            >
              <div className="flex justify-center gap-10 px-12 py-6">
                {navData[activeMenu].submenu.map((sub) =>
                  navData[activeMenu].variant === "cards" ? (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="group w-44"
                    >
                      <div className="relative h-28 w-full overflow-hidden rounded-lg bg-white/5">
                        <Image
                          src={sub.image}
                          alt={sub.label}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="mt-2 text-sm text-white/90 group-hover:text-white">
                        {sub.label}
                      </p>
                    </Link>
                  ) : (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Image
                src={LOGO_SRC}
                alt="Falcon Technologies KSA"
                width={2400}
                height={417}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              {navData.map((item, idx) => (
                <div key={item.label} className="border-b border-white/10">
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
                            className="block text-sm text-white/70 hover:text-white"
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

            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-4 text-sm text-white/70">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={lang === l.code ? "text-white" : ""}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 text-sm">
                <Search size={16} /> Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
