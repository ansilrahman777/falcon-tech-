"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LIQUIDS = ["Water", "Diesel / Fuel", "Chemical", "Wastewater"];

function recommend(liquid, capacity) {
  const cap = Number(capacity) || 0;

  if (liquid === "Chemical") {
    return {
      material: "FRP / GRP (Chemical-Resistant)",
      note: "Exact resin system depends on the chemical, concentration and temperature.",
    };
  }
  if (liquid === "Diesel / Fuel") {
    return cap > 20000
      ? { material: "Steel Tank System", note: "Larger fuel storage is typically fabricated in steel with supports and skids." }
      : { material: "Steel or FRP/GRP Tank", note: "Either construction can suit this size — site conditions decide the final choice." };
  }
  if (liquid === "Wastewater") {
    return { material: "FRP / GRP Tank", note: "FRP handles wastewater and process liquids well across most capacities." };
  }
  // Water
  if (cap > 0 && cap <= 5000) {
    return { material: "Polyethylene Tank", note: "LLDPE/HDPE is a cost-effective fit at this capacity." };
  }
  if (cap > 5000 && cap <= 50000) {
    return { material: "Polyethylene or FRP/GRP Tank", note: "Both are viable — layout and site access often decide." };
  }
  return { material: "FRP / GRP or Steel Tank", note: "Larger water storage is usually FRP/GRP or steel, sized to your site." };
}

export default function CapacityEstimator() {
  const [liquid, setLiquid] = useState("Water");
  const [capacity, setCapacity] = useState("10000");

  const result = useMemo(() => recommend(liquid, capacity), [liquid, capacity]);

  return (
    <section className="w-full overflow-hidden bg-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-17.5 sm:px-8 sm:py-20 lg:px-0 lg:py-23">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="max-w-md text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:text-[34px]">
              Not Sure What Tank You Need?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Tell us what you&rsquo;re storing and roughly how much — we&rsquo;ll
              point you to a starting material. Our engineers confirm the
              final specification.
            </p>
          </div>

          <div className="border border-white/15 bg-white/5 p-7 sm:p-9">
            <label className="block text-xs font-medium uppercase tracking-[0.08em] text-white/40">
              What are you storing?
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {LIQUIDS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLiquid(l)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    liquid === l
                      ? "border-brand bg-brand text-white"
                      : "border-white/20 text-white/60 hover:border-white/40"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <label htmlFor="capacity" className="mt-6 block text-xs font-medium uppercase tracking-[0.08em] text-white/40">
              Approximate capacity (liters)
            </label>
            <input
              id="capacity"
              type="range"
              min="500"
              max="200000"
              step="500"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="mt-4 w-full accent-brand"
            />
            <div className="mt-1 text-sm text-white/60">
              {Number(capacity).toLocaleString()} L
            </div>

            <div className="mt-7 border-t border-white/15 pt-6">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-white/40">
                Suggested Starting Point
              </span>
              <p className="mt-2 text-xl font-normal tracking-[-0.02em] text-white">
                {result.material}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/55">
                {result.note}
              </p>

              <Link
                href="/request-a-quote"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                Get an Exact Quote
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
