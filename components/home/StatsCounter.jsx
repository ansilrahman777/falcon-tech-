"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Award, Users, Briefcase, Building2 } from "lucide-react";

const stats = [
  { icon: Building2, value: 15, suffix: "+", label: "Years of Experience" },
  { icon: Briefcase, value: 480, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 120, suffix: "+", label: "Certified Engineers" },
  { icon: Award, value: 30, suffix: "+", label: "Industry Awards" },
];

function Counter({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();

    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-neutral-900 py-16 sm:py-20"
    >
      {/* subtle red glow accents */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 px-6 sm:px-8 lg:grid-cols-4 lg:px-0">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center opacity-0"
              style={{
                animation: inView
                  ? `fadeUp 0.6s ${0.1 + i * 0.1}s ease-out forwards`
                  : "none",
              }}
            >
              <Icon size={32} strokeWidth={1.5} className="text-brand" />
              <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-sm uppercase tracking-widest text-white/50">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
