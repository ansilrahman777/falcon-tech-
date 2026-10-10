import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Factory,
  Flame,
  Plus,
  ScanLine,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Tank Restoration & FRP Lining Services in Saudi Arabia",
  description:
    "Falcon Technologies restores damaged tanks and applies FRP, chemical-resistant and waterproof lining systems that extend asset life across Saudi Arabia and the GCC.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// First item is the large feature tile.
const ranges = [
  {
    name: "Tank Restoration",
    href: "/services/tank-restoration-lining/tank-restoration",
    image: "/assets/images/services/industrial-tank-restoration.png",
    alt: "Industrial storage tank under restoration",
    meta: "FRP, steel and polyethylene tanks",
    desc: "Crack repair, leak rectification, delamination, nozzle and manhole repair to return damaged tanks to service.",
  },
  {
    name: "Tank Rehabilitation",
    href: "/services/tank-restoration-lining/tank-rehabilitation",
    image: "/assets/images/services/tank-rehabilitation.png",
    alt: "Structural rehabilitation of an ageing storage tank",
    meta: "Ageing and concrete tanks",
    desc: "Structural reinforcement and crack treatment for ageing tanks and concrete structures.",
  },
  {
    name: "FRP / GRP Lining",
    href: "/services/tank-restoration-lining/frp-grp-lining",
    image: "/assets/images/services/frp-lining.png",
    alt: "FRP lining applied inside a storage tank",
    meta: "Lining system",
    desc: "A new fibreglass barrier inside the existing tank shell.",
  },
  {
    name: "Chemical-Resistant Lining",
    href: "/services/tank-restoration-lining/chemical-resistant-lining",
    image: "/assets/images/services/chemical-resistant-lining.png",
    alt: "Chemical-resistant lining inside a process tank",
    meta: "Lining system",
    desc: "Lining selected for the stored chemical, concentration and temperature.",
  },
  {
    name: "Waterproof Lining",
    href: "/services/tank-restoration-lining/waterproof-lining",
    image: "/assets/images/services/waterproof-lining.png",
    alt: "Waterproof lining applied to a water tank",
    meta: "Water tanks and reservoirs",
    desc: "Stops leaks and seepage in water tanks and reservoirs.",
  },
  {
    name: "Steel Tank Lining",
    href: "/services/tank-restoration-lining/steel-tank-lining",
    image: "/assets/images/services/steel-tank-lining.png",
    alt: "Internal lining of a steel storage tank",
    meta: "Steel tanks",
    desc: "Internal lining that protects steel shells from corrosion.",
  },
  {
    name: "Concrete Tank Lining",
    href: "/services/tank-restoration-lining/concrete-tank-lining",
    image: "/assets/images/services/concrete-tank-lining.png",
    alt: "Lining and waterproofing of a concrete tank",
    meta: "Concrete tanks",
    desc: "Crack treatment, lining and waterproofing for concrete tanks and reservoirs.",
  },
  {
    name: "Corrosion Protection",
    href: "/services/tank-restoration-lining/corrosion-protection",
    image: "/assets/images/services/corrosion-protection.png",
    alt: "Corrosion protection coating on a steel tank",
    meta: "Coatings and linings",
    desc: "Surface preparation and protective coatings that extend asset life.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "Restoration",
    href: "/services/tank-restoration-lining/tank-restoration",
  },
  {
    name: "Lining",
    href: "/services/tank-restoration-lining/frp-grp-lining",
  },
  {
    name: "Replacement",
    href: "/services/tank-solutions",
  },
];

const comparison = [
  [
    "When it fits",
    "Local damage — cracks, leaks, delamination, failed nozzles or manholes",
    "Sound structure, but the inner surface is worn, leaking or attacked by the product",
    "The structure is no longer sound, or the tank no longer suits the duty",
  ],
  [
    "What's done",
    "Damaged areas repaired and reinforced",
    "A new FRP, chemical-resistant or waterproof barrier applied inside",
    "A new tank designed and fabricated for the application",
  ],
  [
    "Downtime",
    "Usually the shortest of the three",
    "Tank emptied, cleaned and prepared before lining",
    "Old tank removed and the new one installed",
  ],
  [
    "Cost",
    "Usually well below replacement",
    "Usually well below replacement",
    "The highest of the three",
  ],
  [
    "Checks",
    "Inspection after repair",
    "Hardness, holiday or leak testing as applicable",
    "Testing and documented handover",
  ],
];

const process = [
  {
    title: "Condition assessment",
    desc: "Visual and dimensional inspection establishes the extent of damage before any work begins.",
  },
  {
    title: "Repair method selection",
    desc: "Restoration, rehabilitation or lining is matched to the substrate and service conditions.",
  },
  {
    title: "Surface preparation",
    desc: "The substrate is cleaned and prepared ahead of repair or lining application.",
  },
  {
    title: "Repair or lining",
    desc: "Crack repair, reinforcement or lining is applied per the approved method statement.",
  },
  {
    title: "Inspection and testing",
    desc: "Barcol hardness, holiday or leak testing as applicable, followed by handover.",
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

const tags = ["ASTM D3299", "ASTM D4097", "ASTM D1998", "AS/NZS 4766", "SASO requirements"];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Industrial Services", icon: Wrench, href: "/services/industrial-services" },
  { label: "Surveying & 3D Scanning", icon: ScanLine, href: "/services/survey-scanning" },
];

const faqs = [
  {
    q: "Is it cheaper to restore a tank than replace it?",
    a: "In most cases restoration and lining cost significantly less than replacement, provided the structural condition allows it. A site inspection confirms whether restoration is the right route for your tank.",
  },
  {
    q: "What causes tank leaks and cracks?",
    a: "Common causes include age-related delamination, chemical attack, structural stress and nozzle or manhole seal failure. Our inspection identifies the root cause before recommending a repair method.",
  },
  {
    q: "How is the right lining system chosen?",
    a: "Lining selection depends on the stored product, substrate material, operating temperature and required service life — FRP, chemical-resistant, waterproof and steel lining are each suited to different conditions.",
  },
  {
    q: "Can concrete tanks be rehabilitated?",
    a: "Yes — Falcon rehabilitates concrete tanks through crack treatment, FRP lining, waterproofing and chemical-resistant lining, restoring them to service without full reconstruction.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Tank Restoration and Lining",
      name: "Tank Restoration & Lining",
      description:
        "FRP tank restoration, concrete rehabilitation and chemical-resistant lining systems.",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Restoration and lining services",
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

export default function TankRestorationLiningPage() {
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
        title="Tank Restoration & Lining"
        description="Crack rectification, structural reinforcement and lining systems that extend the service life of existing assets."
        breadcrumb="Tank Restoration & Lining"
        image="/assets/images/services/frp-tank-restoration.png"
        imageAlt="FRP storage tank being restored and relined in Saudi Arabia"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Restore and reline existing tanks instead of replacing them
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              Falcon inspects the tank first and finds the cause of the damage, then restores, rehabilitates or relines it to suit the stored product and the substrate — FRP, steel or concrete.
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
                priority
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
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-1 lg:col-span-1">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  Restore or replace?
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  Send photos, the tank material and what it stores. We&rsquo;ll advise whether restoration, lining or replacement makes sense, then confirm on site.
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
            Restore, reline or replace?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            The inspection decides. This is how the three options usually compare.
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
            From inspection to handover
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
              Industries we restore tanks for
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
              Applied as applicable to the substrate, lining system and project specification. A standard reference is not a certification claim.
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
