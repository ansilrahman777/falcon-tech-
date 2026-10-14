import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Flame,
  ShieldCheck,
  Wrench,
  ScanLine,
  Plus,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "FRP, Polyethylene & Steel Tank Manufacturer in Saudi Arabia",
  description:
    "Falcon Technologies designs and fabricates FRP/GRP, polyethylene and steel storage tanks for water, diesel, fuel and chemical applications across Saudi Arabia and the GCC.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* ------------------------------------------------------------------ */

const IMG = "/assets/images/tank-solutions";

// First item is the large feature tile.
const ranges = [
  {
    name: "FRP / GRP Tanks",
    href: "/services/tank-solutions/frp-grp-tanks",
    image: `${IMG}/saudi_industrial_frp_tank_system.png`,
    alt: "FRP GRP fibreglass storage tank system manufactured by Falcon Technologies in Saudi Arabia",
    meta: "6 tank types",
    desc: "Fibreglass tanks made in Falcon's own FRP production — for potable water, wastewater, chemicals and diesel, fabricated by hand lay-up and filament winding.",
  },
  {
    name: "Polyethylene Tanks",
    href: "/services/tank-solutions/polyethylene-tanks",
    image: `${IMG}/heavy-duty_polyethylene_tanks_in_gulf_facility.png`,
    alt: "Rotomolded LLDPE HDPE polyethylene storage tanks in a Gulf facility",
    meta: "4 tank types",
    desc: "Seamless rotomolded LLDPE / HDPE tanks for small to medium water and chemical storage.",
  },
  {
    name: "Steel Tank Systems",
    href: "/services/tank-solutions/steel-tank-systems",
    image: `${IMG}/industrial_steel_tank_systems_showcase.png`,
    alt: "Fabricated steel tank systems with supports and skids",
    meta: "4 tank types",
    desc: "Fabricated steel tanks, skids and process vessels for fuel and industrial duty.",
  },
  {
    name: "Water Tanks",
    href: "/services/tank-solutions/water-tanks",
    image: `${IMG}/modern_uae_water_storage_facility.png`,
    alt: "Water storage tanks for potable, process and fire water",
    meta: "5 tank types",
    desc: "Potable, utility, process, fire and irrigation water storage.",
  },
  {
    name: "Chemical Tanks",
    href: "/services/tank-solutions/chemical-tanks",
    image: `${IMG}/chemical_tanks_category.png`,
    alt: "Chemical-resistant storage tanks",
    meta: "Selected per chemical",
    desc: "Construction chosen from your chemical, concentration and temperature.",
  },
  {
    name: "Diesel / Fuel Tanks",
    href: "/services/tank-solutions/diesel-fuel-tanks",
    image: `${IMG}/fuel_storage_solutions_industrial_yard.png`,
    alt: "Diesel and fuel storage tanks in an industrial yard",
    meta: "4 tank types",
    desc: "Generator day tanks, underground diesel tanks and bulk fuel storage.",
  },
  {
    name: "Underground Tanks",
    href: "/services/tank-solutions/underground-tanks",
    image: `${IMG}/underground_tank_installation_cutaway.png`,
    alt: "Underground storage tank installation cutaway",
    meta: "3 tank types",
    desc: "Burial-rated FRP, polyethylene and steel tanks, engineered for soil and groundwater.",
  },
];

const materials = [
  {
    name: "FRP / GRP",
    href: "/services/tank-solutions/frp-grp-tanks",
  },
  {
    name: "Polyethylene",
    href: "/services/tank-solutions/polyethylene-tanks",
  },
  {
    name: "Steel",
    href: "/services/tank-solutions/steel-tank-systems",
  },
];

// One row per question a buyer asks; one cell per material (same order as `materials`).
const comparison = [
  [
    "Best suited to",
    "Water, wastewater, chemicals and diesel",
    "Small to medium water and compatible chemicals",
    "Fuel, larger industrial and process duty",
  ],
  [
    "Corrosion",
    "Does not rust — resin chosen for the stored liquid",
    "Does not rust — compatibility checked per model",
    "Needs a coating or lining, specified per service",
  ],
  [
    "Sizing",
    "Fabricated to the project",
    "Model-based, small to medium volumes",
    "Fabricated to the project",
  ],
  [
    "Shapes",
    "Vertical, horizontal, rectangular and custom",
    "Vertical, horizontal and multi-layer",
    "Vertical, horizontal and skid-mounted",
  ],
  [
    "Underground",
    "Burial-rated designs",
    "Only models documented for burial",
    "With corrosion protection and listing where required",
  ],
];

const process = [
  {
    title: "Requirement review",
    desc: "We start with what you're storing — liquid, concentration, temperature and installation site.",
  },
  {
    title: "Material selection",
    desc: "FRP/GRP, polyethylene or steel, matched to the application and expected service life.",
  },
  {
    title: "Design and drawings",
    desc: "GA drawings, nozzle placement, supports and foundation requirements confirmed before fabrication.",
  },
  {
    title: "Manufacturing and inspection",
    desc: "Built under controlled conditions with checks at every production stage.",
  },
  {
    title: "Testing and handover",
    desc: "Hydrostatic or dimensional testing as required, followed by documented handover.",
  },
];

const industries = [
  "Oil & Gas",
  "Petrochemical & Chemical",
  "Water & Wastewater",
  "Power & Utilities",
  "Manufacturing",
  "Construction & Infrastructure",
];

const standards = [
  "ASTM D3299",
  "ASTM D4097",
  "ASTM D1998",
  "AS/NZS 4766",
  "SASO requirements",
];

const related = [
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Tank Restoration & Lining", icon: ShieldCheck, href: "/services/tank-restoration-lining" },
  { label: "Industrial Services", icon: Wrench, href: "/services/industrial-services" },
  { label: "Surveying & 3D Scanning", icon: ScanLine, href: "/services/survey-scanning" },
];

const faqs = [
  {
    q: "What size tanks does Falcon Technologies manufacture?",
    a: "Falcon fabricates tanks from a few hundred litres up to large industrial capacities in FRP/GRP, polyethylene and steel, sized to your site and application rather than a fixed catalogue range.",
  },
  {
    q: "Which tank material is best for chemical storage?",
    a: "FRP/GRP is the most common choice for chemical storage because the resin system can be matched to the chemical, concentration and operating temperature. Our engineers confirm the exact specification before fabrication.",
  },
  {
    q: "Can tanks be installed underground?",
    a: "Yes. Falcon supplies underground tanks in FRP/GRP, polyethylene and steel, with foundation and installation guidance provided as part of the design package. Only burial-rated designs are used underground.",
  },
  {
    q: "Do you supply tanks for diesel and fuel storage?",
    a: "Yes — Falcon fabricates aboveground and underground diesel and fuel tanks in steel or FRP/GRP, including generator day tanks and industrial fuel storage.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Tank Manufacturing",
      name: "Tank Solutions",
      description:
        "FRP/GRP, polyethylene and steel tank manufacturing for water, diesel, fuel and chemical storage.",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tank ranges",
        itemListElement: ranges.map((r) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: r.name, description: r.desc },
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

export default function TankSolutionsPage() {
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
        title="Tank Solutions"
        description="FRP/GRP, polyethylene and steel tanks engineered around what you store, not a fixed catalogue size."
        breadcrumb="Tank Solutions"
        image={`${IMG}/engineered_frp_tanks_in_saudi_facility.png`}
        imageAlt="Engineered FRP storage tanks in a Saudi industrial facility"
      />

      {/* ============ TANK RANGES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              FRP, polyethylene and steel tanks, built for your application
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              As an FRP tank manufacturer serving Saudi Arabia and the wider
              GCC, Falcon reviews the liquid being stored, its concentration and
              temperature, and the installation site before recommending a
              material and configuration — rather than starting from a size
              chart.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature tile — FRP/GRP, the flagship range */}
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
                  View the FRP / GRP range
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>

            {/* The other six ranges */}
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

            {/* Help tile — fills the last row with something useful */}
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-2 lg:col-span-2">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  Not sure which tank you need?
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  Tell us what you&rsquo;re storing, roughly how much, and where
                  the tank will sit. Our engineers recommend the material and
                  configuration before anything is fabricated.
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

      {/* ============ MATERIAL COMPARISON ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            FRP, polyethylene or steel?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            A starting point, not a specification. The final material is
            confirmed against your stored liquid, temperature and site.
          </p>

          {/* Phones: one stacked block per material */}
          <div className="mt-10 space-y-8 md:hidden">
            {materials.map((m, mi) => (
              <div key={m.name} className="border-t-2 border-ink pt-4 dark:border-white/40">
                <Link
                  href={m.href}
                  className="inline-flex items-center gap-1.5 text-xl font-normal tracking-tight text-neutral-900 dark:text-white"
                >
                  {m.name}
                  <ArrowUpRight size={16} className="text-neutral-400" />
                </Link>
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
                    <span className="sr-only">Property</span>
                  </th>
                  {materials.map((m) => (
                    <th key={m.name} scope="col" className="py-4 pr-6 align-bottom">
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
            From requirement to handover
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((p, i) => (
              <li key={p.title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {p.desc}
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
              Industries that rely on Falcon tanks
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
              {standards.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              Applied as applicable to the product, governing standard and
              project specification. A standard reference is not a
              certification claim — see each tank range for detail.
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
