import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Factory,
  Plus,
  ScanLine,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Thermal & Aerogel Insulation Services in Saudi Arabia",
  description:
    "Falcon Technologies applies thermal and aerogel insulation to tanks, pipes, buildings and equipment rooms across Saudi Arabia, cutting heat loss and solar gain in demanding industrial environments.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// Hero photo. If a service tile below uses the same file, that tile loads
// eagerly (otherwise Next flags the shared file as a lazy LCP image).
const heroImage = "/assets/images/services/industrial-insulation.png";

// First item is the large feature tile.
const ranges = [
  {
    name: "Storage Tank Insulation",
    href: "/services/thermal-insulation/storage-tank-insulation",
    image: "/assets/images/services/storage-tank-insulation.png",
    alt: "Insulation and cladding applied to an industrial storage tank",
    meta: "Steel and FRP/GRP tanks",
    desc: "Reduces solar gain and heat loss on process, chemical, fuel and water tanks — including tanks already in service.",
  },
  {
    name: "Pipe & Equipment Insulation",
    href: "/services/thermal-insulation/pipe-equipment-insulation",
    image: "/assets/images/services/pipe-equipment-insulation.png",
    alt: "Insulated process pipework and equipment",
    meta: "Pipes, ducts and vessels",
    desc: "Hot and cold process lines, ducts, valves and vessels across the site.",
  },
  {
    name: "Building & Roof Insulation",
    href: "/services/thermal-insulation/building-roof-insulation",
    image: "/assets/images/services/building-roof-insulation.png",
    alt: "Roof insulation applied to an industrial building",
    meta: "Roofs and external walls",
    desc: "Factory roofs, warehouses and external walls kept cooler in Gulf heat.",
  },
  {
    name: "Equipment Room Insulation",
    href: "/services/thermal-insulation/equipment-room-insulation",
    image: "/assets/images/services/equipment-room-insulation.png",
    alt: "Insulated plant and equipment room",
    meta: "Plant and electrical rooms",
    desc: "Steadier conditions for plant rooms, electrical rooms and enclosures.",
  },
  {
    name: "Aerogel Thermal Insulation",
    href: "/services/thermal-insulation/aerogel-thermal-insulation",
    image: "/assets/images/services/aerogel-insulation.png",
    alt: "Aerogel insulation blanket applied to equipment",
    meta: "Thin, lightweight systems",
    desc: "Low thermal conductivity in a thin profile, for tight spaces and existing structures.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "Conventional insulation",
    href: null,
  },
  {
    name: "Aerogel insulation",
    href: "/services/thermal-insulation/aerogel-thermal-insulation",
  },
];

const comparison = [
  [
    "Best suited to",
    "Tanks, pipework, roofs and walls where there is room for the required thickness",
    "Tight spaces, existing structures and equipment where thickness or weight is limited",
  ],
  [
    "Thickness",
    "Thicker build-up for the same performance",
    "Thin profile for a given performance",
  ],
  ["Weight", "Depends on the material and cladding", "Lightweight"],
  [
    "Fire performance",
    "Depends on the material grade selected",
    "Fire-retardant systems available",
  ],
  [
    "Final selection",
    "Material, thickness and cladding confirmed per project",
    "Product grade confirmed against approved technical data",
  ],
];

const process = [
  {
    title: "Site and substrate review",
    desc: "We assess the tank, pipe, roof or equipment surface against your target performance.",
  },
  {
    title: "System selection",
    desc: "Conventional or aerogel insulation chosen for thickness, weight and fire-rating requirements.",
  },
  {
    title: "Surface preparation",
    desc: "The substrate is cleaned and prepared ahead of application.",
  },
  {
    title: "Application",
    desc: "Insulation is applied following the approved method statement and manufacturer guidance.",
  },
  {
    title: "Inspection and handover",
    desc: "Thickness and finish are checked and documented before handover.",
  },
];

const industries = [
  "Oil & Gas",
  "Petrochemical & Chemical",
  "Power & Utilities",
  "Manufacturing",
  "Commercial & Industrial Buildings",
  "Construction & Infrastructure",
];

const tags = [
  "SASO requirements",
  "Applicable ISO standards",
  "Client and project specifications",
];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  { label: "Tank Restoration & Lining", icon: ShieldCheck, href: "/services/tank-restoration-lining" },
  { label: "Industrial Services", icon: Wrench, href: "/services/industrial-services" },
  { label: "Surveying & 3D Scanning", icon: ScanLine, href: "/services/survey-scanning" },
];

const faqs = [
  {
    q: "What is aerogel insulation and how is it different?",
    a: "Aerogel is a highly porous insulation material that achieves low thermal conductivity in a comparatively thin, lightweight profile — useful where space or weight is limited, such as equipment cabinets or existing structures.",
  },
  {
    q: "Can insulation be applied to tanks that are already in service?",
    a: "In most cases, yes. Storage tank insulation can be retrofitted to reduce solar heat gain and product temperature fluctuation without taking the tank fully out of operation, subject to a site assessment.",
  },
  {
    q: "Does insulation performance depend on the surface it's applied to?",
    a: "Yes. Actual thermal performance depends on product grade, substrate condition, thickness, ambient conditions and surface preparation — final figures are always confirmed against approved technical data for the specific project.",
  },
  {
    q: "Do you insulate buildings as well as tanks?",
    a: "Yes — Falcon insulates factory roofs, warehouses, external walls and equipment rooms in addition to tanks, pipes and process equipment.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Thermal Insulation",
      name: "Thermal Insulation",
      description:
        "Thermal and aerogel insulation for storage tanks, pipes, equipment and buildings.",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Insulation services",
        itemListElement: ranges.map((r) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: r.name, description: r.desc },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ThermalInsulationPage() {
  const [feature, ...rest] = ranges;

  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Services"
        title="Thermal Insulation"
        description="Insulation systems, including aerogel, that reduce heat loss, solar gain and temperature fluctuation."
        breadcrumb="Thermal Insulation"
        image={heroImage}
        imageAlt="Industrial thermal insulation applied to tanks and pipework in Saudi Arabia"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Insulation for tanks, pipework, buildings and equipment rooms
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              Gulf heat drives solar gain into tanks, roofs and equipment. Falcon reviews the surface, its operating temperature and the space available, then applies conventional or aerogel insulation to suit — rather than one system for every job.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature tile */}
            <Link
              href={feature.href}
              className="group relative flex min-h-96 flex-col justify-end overflow-hidden rounded-sm bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:col-span-2 lg:row-span-2"
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative p-6 sm:p-10">
                <p className="text-sm text-white/70">{feature.meta}</p>
                <h3 className="mt-2 text-3xl font-normal tracking-tight text-white sm:text-4xl">
                  {feature.name}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80">
                  {feature.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 border-b border-white/60 pb-0.5 text-sm font-semibold text-white transition-colors group-hover:border-brand group-hover:text-white">
                  View {feature.name}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>

            {/* Other services */}
            {rest.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-sm bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  loading={r.image === heroImage ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-transparent" />
                <div className="relative p-6">
                  <p className="text-sm text-white/70">{r.meta}</p>
                  <h3 className="mt-1 flex items-center justify-between gap-3 text-xl font-normal tracking-tight text-white">
                    {r.name}
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {r.desc}
                  </p>
                </div>
              </Link>
            ))}

            {/* Help tile — fills the last row */}
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  Not sure which insulation you need?
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  Tell us the surface, its operating temperature and how much space there is. Our engineers recommend a system before anything is applied.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/request-a-quote"
                  className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="border-b border-ink/30 pb-0.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/30 dark:text-white"
                >
                  Talk to an engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Conventional or aerogel insulation?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            A starting point, not a specification. The system is confirmed against the surface, temperature and space on your site.
          </p>

          {/* Phones: one stacked block per option */}
          <div className="mt-10 space-y-8 md:hidden">
            {compareColumns.map((m, mi) => (
              <div key={m.name} className="border-t-2 border-ink pt-4 dark:border-white/40">
                {m.href ? (
                  <Link
                    href={m.href}
                    className="inline-flex items-center gap-1.5 text-xl font-normal tracking-tight text-neutral-900 dark:text-white"
                  >
                    {m.name}
                    <ArrowUpRight size={16} className="text-neutral-400" />
                  </Link>
                ) : (
                  <p className="text-xl font-normal tracking-tight text-neutral-900 dark:text-white">
                    {m.name}
                  </p>
                )}
                <dl className="mt-3 divide-y divide-neutral-200 dark:divide-white/10">
                  {comparison.map(([label, ...cells]) => (
                    <div key={label} className="py-3">
                      <dt className="text-sm font-semibold text-neutral-800 dark:text-white/85">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                        {cells[mi]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Tablet and up: side-by-side table */}
          <div className="mt-10 hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-ink dark:border-white/40">
                  <th scope="col" className="w-1/4 py-4 pr-6 text-sm font-medium text-steel dark:text-white/50">
                    <span className="sr-only">Question</span>
                  </th>
                  {compareColumns.map((m) => (
                    <th key={m.name} scope="col" className="py-4 pr-6 align-bottom">
                      {m.href ? (
                        <Link
                          href={m.href}
                          className="group inline-flex items-center gap-1.5 text-xl font-normal tracking-tight text-neutral-900 transition-colors hover:text-brand dark:text-white"
                        >
                          {m.name}
                          <ArrowUpRight
                            size={16}
                            className="text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                          />
                        </Link>
                      ) : (
                        <span className="text-xl font-normal tracking-tight text-neutral-900 dark:text-white">
                          {m.name}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-neutral-200 dark:border-white/10">
                    <th scope="row" className="py-5 pr-6 align-top text-sm font-semibold text-neutral-800 dark:text-white/85">
                      {label}
                    </th>
                    {cells.map((c, i) => (
                      <td key={i} className="py-5 pr-6 align-top text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ PROCESS (a real sequence, so numbered) ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            From site review to handover
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">
                  {s.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ INDUSTRIES + STANDARDS ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <div>
            <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
              Industries we insulate for
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
              {industries.map((a) => (
                <li key={a} className="bg-white px-5 py-4 text-sm font-medium text-neutral-800 dark:bg-neutral-950 dark:text-white/75">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
              Referenced standards
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              Applied as applicable to the product and project specification. Final thermal performance is confirmed against approved technical data for each project.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="border-t border-neutral-200 dark:border-white/10 lg:col-span-2">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-neutral-200 py-5 dark:border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RELATED ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
            Related services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between gap-3 border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} strokeWidth={1.4} className="text-steel dark:text-white/40" />
                    <span className="text-sm font-medium text-neutral-800 dark:text-white/80">
                      {r.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25"
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
