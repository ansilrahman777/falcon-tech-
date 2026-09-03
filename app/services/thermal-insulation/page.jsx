import Link from "next/link";
import {
  Flame,
  ArrowUpRight,
  Factory,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Thermal Insulation | Falcon Technologies - Saudi Arabia",
  description:
    "Insulation systems, including aerogel, that reduce heat loss, solar gain and product temperature fluctuation across tanks, pipes and buildings.",
};

const specs = [
  [
    "Storage tank insulation",
    "Steel tanks, FRP/GRP tanks where applicable, process, chemical and fuel tanks",
  ],
  [
    "Pipe & equipment insulation",
    "Pipes, ducts, process equipment, vessels and suitable industrial surfaces",
  ],
  [
    "Building & roof insulation",
    "Factory roofs, warehouses, industrial buildings and external walls",
  ],
  [
    "Aerogel insulation",
    "Low thermal conductivity, lightweight, moisture-resistant and fire-retardant formulations",
  ],
];

const children = [
  {
    label: "Storage Tank Insulation",
    href: "/services/thermal-insulation/storage-tank-insulation",
  },
  {
    label: "Pipe & Equipment Insulation",
    href: "/services/thermal-insulation/pipe-equipment-insulation",
  },
  {
    label: "Building & Roof Insulation",
    href: "/services/thermal-insulation/building-roof-insulation",
  },
  {
    label: "Equipment Room Insulation",
    href: "/services/thermal-insulation/equipment-room-insulation",
  },
  {
    label: "Aerogel Thermal Insulation",
    href: "/services/thermal-insulation/aerogel-thermal-insulation",
  },
];

const applications = [
  "Oil & Gas",
  "Petrochemical & Chemical",
  "Power & Utilities",
  "Manufacturing",
  "Commercial & Industrial Buildings",
  "Construction & Infrastructure",
];

const standards = [
  "SASO Requirements",
  "Applicable ISO Standards",
  "Client & Project Specifications",
];

const process = [
  {
    step: "01",
    title: "Site & Substrate Review",
    desc: "Tank, pipe, roof or equipment surface assessed against target performance.",
  },
  {
    step: "02",
    title: "System Selection",
    desc: "Conventional or aerogel system selected for thickness, weight and fire rating.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    desc: "Cleaning and preparation of the substrate ahead of application.",
  },
  {
    step: "04",
    title: "Application",
    desc: "Insulation applied per approved method statement and manufacturer guidance.",
  },
  {
    step: "05",
    title: "Inspection & Handover",
    desc: "Thickness and finish checked, then documented for handover.",
  },
];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  {
    label: "Tank Restoration & Lining",
    icon: ShieldCheck,
    href: "/services/tank-restoration-lining",
  },
  {
    label: "Industrial Services",
    icon: Wrench,
    href: "/services/industrial-services",
  },
];

export default function ThermalInsulationPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Service — TI"
        title="Thermal Insulation"
        description="Insulation systems that reduce heat loss, solar gain and product temperature fluctuation across tanks, pipes and buildings."
        breadcrumb="Thermal Insulation"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:px-0 lg:py-24">
          <div>
            <Flame size={32} strokeWidth={1.3} className="text-brand" />
            <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
              Capability Overview
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Thermal insulation is a major Falcon division in its own right,
              not a tank accessory — covering storage tanks, pipes and process
              equipment, factory roofs and buildings, and enclosed equipment
              rooms, including a dedicated aerogel product line for thin,
              lightweight, fire-retardant applications.
            </p>

            <dl className="mt-10 max-w-xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              {specs.map(([term, detail]) => (
                <div
                  key={term}
                  className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.6fr] sm:gap-4"
                >
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    {term}
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/50">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-xl text-xs leading-relaxed text-neutral-400 dark:text-white/35">
              Actual insulation performance depends on product grade, substrate,
              thickness, ambient conditions, surface preparation and application
              conditions. Final performance shall be based on approved technical
              data and project requirements.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-block border-b border-brand text-sm font-semibold text-brand transition-colors hover:border-brand-dark hover:text-brand-dark"
            >
              Request a Quote for Thermal Insulation
            </Link>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-xs font-semibold text-white">
              TI
            </span>
            <h3 className="mt-5 text-xl font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
              What's Included
            </h3>
            <ul className="mt-6 divide-y divide-neutral-200 dark:divide-white/10">
              {children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="group flex items-center justify-between gap-4 py-3.5 text-sm text-neutral-700 transition-colors hover:text-brand dark:text-white/70"
                  >
                    {child.label}
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand dark:text-white/25"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            Where It's Used
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {applications.map((a) => (
              <div
                key={a}
                className="border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 dark:border-white/10 dark:bg-neutral-950 dark:text-white/70"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            How We Apply Insulation
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((p) => (
              <li
                key={p.step}
                className="border-t border-neutral-200 pt-4 dark:border-white/10"
              >
                <span className="text-sm font-semibold text-brand">
                  {p.step}
                </span>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                  {p.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-0">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-white/40">
            Referenced Standards
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {standards.map((s) => (
              <span
                key={s}
                className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            Related Services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between border border-neutral-200 p-6 transition-colors hover:border-brand dark:border-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-steel dark:text-white/40"
                    />
                    <span className="text-sm font-medium text-neutral-800 dark:text-white/80">
                      {r.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand dark:text-white/25"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <StandardsBar />
      <CTASection />
    </div>
  );
}
