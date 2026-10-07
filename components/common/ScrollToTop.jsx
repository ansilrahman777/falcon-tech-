"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/*
  Floating scroll-to-top — fixed to the RIGHT bottom corner. Fades in after
  the page has been scrolled a little, smooth-scrolls to the top on click.
  Site-wide via the root layout.
*/
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition-all duration-300 hover:bg-brand sm:bottom-7 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
}
