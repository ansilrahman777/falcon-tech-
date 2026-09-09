"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const divisions = [
  {
    id: "tank-solutions",
    label: "Tank Solutions",
    children: [
      {
        title: "FRP / GRP Tanks",
        desc: "Fiberglass tanks for potable water, wastewater, chemicals and diesel — built vertical, horizontal, underground or custom, using hand lay-up and filament winding.",
        image: "/assets/images/services/frp-grp-tanks.png",
        alt: "FRP GRP fiberglass storage tank manufactured by Falcon Technologies in Saudi Arabia",
      },
      {
        title: "Polyethylene Tanks",
        desc: "Rotomolded LLDPE/HDPE tanks for water and chemical storage, available vertical, horizontal or underground.",
        image: "/assets/images/services/polyethylene-tanks.png",
        alt: "Polyethylene LLDPE HDPE water storage tank",
      },
      {
        title: "Steel Tank Systems",
        desc: "Fabricated steel tanks with supports and skids, engineered for diesel, fuel and general industrial storage.",
        image: "/assets/images/services/steel-tank-systems.png",
        alt: "Fabricated steel storage tank system with support skids",
      },
    ],
  },
  {
    id: "thermal-insulation",
    label: "Thermal Insulation Division",
    children: [
      {
        title: "Storage Tank Insulation",
        desc: "Insulation for steel and FRP tanks that cuts solar heat gain and stabilizes stored product temperature.",
        image: "/assets/images/services/storage-tank-insulation.png",
        alt: "Thermal insulation applied to an industrial storage tank",
      },
      {
        title: "Pipe & Equipment Insulation",
        desc: "Insulation for pipes, ducts and process equipment across the plant.",
        image: "/assets/images/services/pipe-equipment-insulation.png",
        alt: "Insulated industrial pipework and process equipment",
      },
      {
        title: "Building & Roof Insulation",
        desc: "Insulation for factory roofs, warehouses and industrial buildings.",
        image: "/assets/images/services/building-roof-insulation.png",
        alt: "Industrial factory roof insulation installation",
      },
      {
        title: "Equipment Room Insulation",
        desc: "Insulation for electrical rooms, control rooms and enclosed machinery areas.",
        image: "/assets/images/services/equipment-room-insulation.png",
        alt: "Insulated electrical and control equipment room",
      },
    ],
  },
  {
    id: "aerogel",
    label: "Aerogel Thermal Insulation",
    single: {
      image: "/assets/images/services/aerogel-insulation.png",
      alt: "Aerogel thermal insulation blanket installed on industrial equipment",
      paragraph:
        "Aerogel is a highly porous insulation material that delivers low thermal conductivity in a comparatively thin, lightweight system — a strong fit where space or weight is limited.",
      features: [
        "Low thermal conductivity",
        "Lightweight construction",
        "Moisture resistance",
        "Fire-retardant formulations",
        "Noise reduction",
        "Space saving",
      ],
      applications: [
        "Storage tanks",
        "Industrial buildings",
        "Equipment cabinets",
        "Roofs",
        "Selected process equipment",
      ],
      disclaimer:
        "Actual insulation performance depends on product grade, substrate, thickness, ambient conditions, surface preparation and application conditions. Final performance is confirmed against approved technical data and project requirements.",
    },
  },
  {
    id: "tank-restoration",
    label: "Tank Restoration & Rehabilitation",
    children: [
      {
        title: "FRP Tank Restoration",
        desc: "Crack and leak repair, structural reinforcement and nozzle or manhole restoration for FRP tanks.",
        image: "/assets/images/services/frp-tank-restoration.png",
        alt: "FRP tank crack and leak restoration work",
      },
      {
        title: "Other Restoration & Rehabilitation",
        desc: "Restoration support for polyethylene and steel tanks, plus concrete tank rehabilitation including waterproofing and lining.",
        image: "/assets/images/services/tank-rehabilitation.png",
        alt: "Concrete tank rehabilitation and waterproofing",
      },
    ],
  },
  {
    id: "tank-lining",
    label: "Tank Lining",
    children: [
      {
        title: "FRP / GRP Lining",
        desc: "Fiberglass lining for corrosion and chemical resistance in tanks and vessels.",
        image: "/assets/images/services/frp-lining.png",
        alt: "FRP GRP tank lining application",
      },
      {
        title: "Chemical-Resistant Lining",
        desc: "Resin systems matched to the specific chemical, concentration and operating temperature.",
        image: "/assets/images/services/chemical-resistant-lining.png",
        alt: "Chemical-resistant tank lining system",
      },
      {
        title: "Concrete Tank Lining",
        desc: "Lining for concrete tanks and reservoirs, including crack sealing and waterproofing.",
        image: "/assets/images/services/concrete-tank-lining.png",
        alt: "Concrete water tank lining and waterproofing",
      },
      {
        title: "Steel Tank Lining",
        desc: "Internal lining that protects steel tanks from corrosion and preserves product quality.",
        image: "/assets/images/services/steel-tank-lining.png",
        alt: "Steel tank internal lining application",
      },
      {
        title: "Waterproof Lining",
        desc: "Membrane and coating systems that stop leaks and moisture ingress.",
        image: "/assets/images/services/waterproof-lining.png",
        alt: "Waterproof lining membrane installation",
      },
      {
        title: "Corrosion Protection",
        desc: "Surface preparation and protective coating for long-term asset protection.",
        image: "/assets/images/services/corrosion-protection.png",
        alt: "Industrial corrosion protection coating",
      },
    ],
  },
  {
    id: "industrial-services",
    label: "Industrial Services",
    children: [
      {
        title: "Tank Inspection",
        desc: "Visual, dimensional and thickness inspection to assess tank condition.",
        image: "/assets/images/services/tank-inspection.png",
        alt: "Industrial tank inspection in progress",
      },
      {
        title: "Tank Restoration & Rehabilitation",
        desc: "Repair and reinforcement support for ageing tank assets.",
        image: "/assets/images/services/industrial-tank-restoration.png",
        alt: "Tank restoration and rehabilitation work",
      },
      {
        title: "Thermal Insulation",
        desc: "Insulation support delivered alongside other industrial site work.",
        image: "/assets/images/services/industrial-insulation.png",
        alt: "Industrial thermal insulation support",
      },
      {
        title: "FRP Lining & Waterproofing",
        desc: "Protective lining for tanks and containment structures.",
        image: "/assets/images/services/frp-lining-waterproofing.png",
        alt: "FRP lining and waterproofing service",
      },
      {
        title: "Industrial Coating",
        desc: "Corrosion-resistant coating for industrial equipment and structures.",
        image: "/assets/images/services/industrial-coating.png",
        alt: "Industrial protective coating application",
      },
      {
        title: "Survey & Scanning",
        desc: "3D scanning and survey support for existing assets and sites.",
        image: "/assets/images/services/survey-scanning.png",
        alt: "3D survey and scanning of industrial site",
      },
      {
        title: "Mechanical Maintenance",
        desc: "Mechanical maintenance and equipment support across site utilities.",
        image: "/assets/images/services/mechanical-maintenance.png",
        alt: "Mechanical maintenance of industrial equipment",
      },
      {
        title: "Equipment Support",
        desc: "General equipment support for ongoing industrial operations.",
        image: "/assets/images/services/equipment-support.png",
        alt: "Industrial equipment support service",
      },
      {
        title: "Chiller Installation & Maintenance",
        desc: "New installation, commissioning and preventive maintenance for chillers.",
        image: "/assets/images/services/chiller-installation.png",
        alt: "Chiller installation and maintenance in Saudi Arabia",
      },
    ],
  },
];

// Single row of cards that auto-scrolls right and can be dragged (mouse,
// touch or pen) to browse manually. Content is duplicated once so the
// auto-scroll can loop seamlessly instead of snapping back to the start.
function AutoScrollRow({ items, renderItem, speed = 0.5 }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const movedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;

    const tick = () => {
      if (el && !pausedRef.current && !draggingRef.current) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [items, speed]);

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    draggingRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    startScrollRef.current = el.scrollLeft;
    el.style.userSelect = "none";
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current || !trackRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 3) movedRef.current = true;
    trackRef.current.scrollLeft = startScrollRef.current - dx;
  };

  const endDrag = () => {
    draggingRef.current = false;
    if (trackRef.current) trackRef.current.style.userSelect = "";
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      className="flex cursor-grab gap-5 overflow-x-hidden active:cursor-grabbing"
    >
      {[...items, ...items].map((item, i) =>
        renderItem(item, i, () => movedRef.current),
      )}
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const division = divisions[active];

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-17.5 sm:px-8 sm:py-20 lg:px-0 lg:py-23">
        <h2 className="max-w-lg text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
          The full range, one contractor
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
          Tank manufacturing, thermal insulation, restoration and lining, and
          industrial services — backed by inspection and quality assurance on
          every job across Saudi Arabia.
        </p>

        {/* TAB BAR — moving indicator */}
        <div className="relative mt-10 flex gap-1 overflow-x-auto border-b border-neutral-200 dark:border-white/10">
          {divisions.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(i)}
              className="relative shrink-0 whitespace-nowrap px-4 py-3.5 text-sm font-medium transition-colors sm:px-5"
            >
              <span
                className={
                  active === i
                    ? "relative z-10 text-white"
                    : "relative z-10 text-neutral-500 dark:text-white/50"
                }
              >
                {d.label}
              </span>
              {active === i && (
                <motion.span
                  layoutId="service-tab-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-x-1 top-1.5 bottom-1.5 rounded-sm bg-ink"
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative mt-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="sr-only">{division.label}</h3>

              {division.children ? (
                <AutoScrollRow
                  items={division.children}
                  renderItem={(child, i, wasDragged) => (
                    <div
                      key={`${child.title}-${i}`}
                      onClickCapture={(e) => {
                        if (wasDragged()) e.preventDefault();
                      }}
                      className="group w-100 shrink-0 overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
                    >
                      <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <Image
                          src={child.image}
                          alt={child.alt}
                          fill
                          draggable={false}
                          className="pointer-events-none object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
                      </div>
                      <div className="p-5">
                        <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                          {child.title}
                        </h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                          {child.desc}
                        </p>
                      </div>
                    </div>
                  )}
                />
              ) : (
                <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-neutral-200 dark:border-white/10 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 lg:aspect-auto">
                    <Image
                      src={division.single.image}
                      alt={division.single.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-neutral-50 p-8 dark:bg-neutral-900 sm:p-10">
                    <p className="max-w-lg text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                      {division.single.paragraph}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-white/40">
                          Feature Areas
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {division.single.features.map((f) => (
                            <span
                              key={f}
                              className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-white/40">
                          Applications
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {division.single.applications.map((a) => (
                            <span
                              key={a}
                              className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 max-w-lg text-xs leading-relaxed text-neutral-400 dark:text-white/35">
                      {division.single.disclaimer}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
