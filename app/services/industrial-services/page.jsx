import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Factory,
  Flame,
  Plus,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Industrial Services & Chiller Installation in Saudi Arabia",
  description:
    "Falcon Technologies provides tank inspection, industrial coating, mechanical maintenance, equipment support and chiller installation and maintenance across Saudi Arabia, including Dammam.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// First item is the large feature tile.
const ranges = [
  {
    name: "Chiller Installation & Maintenance",
    href: "/services/industrial-services/chiller-installation-maintenance",
    image: "/assets/images/services/chiller-installation.png",
    alt: "Industrial chiller being installed and commissioned on site",
    meta: "3 service types",
    desc: "New installation and commissioning, preventive maintenance, and troubleshooting and repair — with a service report after every visit.",
  },
  {
    name: "Tank Inspection",
    href: "/services/industrial-services/tank-inspection",
    image: "/assets/images/services/tank-inspection.png",
    alt: "Technician inspecting an industrial storage tank",
    meta: "Visual, dimensional and thickness",
    desc: "Condition checks that show what a tank needs before repair, lining or a change of duty.",
  },
  {
    name: "Industrial Coating",
    href: "/services/industrial-services/industrial-coating",
    image: "/assets/images/services/industrial-coating.png",
    alt: "Protective industrial coating being applied",
    meta: "Coating and waterproofing",
    desc: "Protective coatings for tanks, steelwork and plant.",
  },
  {
    name: "Mechanical Maintenance",
    href: "/services/industrial-services/mechanical-maintenance",
    image: "/assets/images/services/mechanical-maintenance.png",
    alt: "Mechanical maintenance on industrial equipment",
    meta: "Site utilities and equipment",
    desc: "Mechanical maintenance that keeps site utilities and equipment running.",
  },
  {
    name: "Equipment Support",
    href: "/services/industrial-services/equipment-support",
    image: "/assets/images/services/equipment-support.png",
    alt: "Engineer supporting industrial equipment on site",
    meta: "Plant equipment",
    desc: "Support for plant equipment, from installation to ongoing service.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "Tank inspection",
    href: "/services/industrial-services/tank-inspection",
  },
  {
    name: "Coating & maintenance",
    href: "/services/industrial-services/mechanical-maintenance",
  },
  {
    name: "Chiller services",
    href: "/services/industrial-services/chiller-installation-maintenance",
  },
];

const comparison = [
  [
    "Call us when",
    "You need to know a tank's condition before repair, lining or a change of duty",
    "Steelwork, tanks or equipment need protecting or keeping in service",
    "You're installing a new chiller, or an existing one needs servicing or repair",
  ],
  [
    "What we do",
    "Visual, dimensional and thickness inspection",
    "Industrial coating, waterproofing, mechanical maintenance and equipment support",
    "Installation, commissioning, preventive maintenance and troubleshooting",
  ],
  [
    "Worked to",
    "Approved procedures and project specifications",
    "Approved method statements and project specifications",
    "Manufacturer service manuals and procedures",
  ],
  [
    "You receive",
    "An inspection report",
    "A documented handover",
    "A service report after each visit",
  ],
];

const process = [
  {
    title: "Scope review",
    desc: "Equipment make and model, capacity, operating condition and service history are reviewed first.",
  },
  {
    title: "Service plan",
    desc: "Installation, maintenance or inspection scope is confirmed against manufacturer requirements.",
  },
  {
    title: "Execution",
    desc: "Work is carried out within Falcon's approved and authorised scope.",
  },
  {
    title: "Inspection and testing",
    desc: "Operating parameters and performance are checked against requirements.",
  },
  {
    title: "Report and handover",
    desc: "A service or inspection report is issued, with after-service support available.",
  },
];

const industries = [
  "Manufacturing",
  "Commercial & Industrial Buildings",
  "Oil & Gas",
  "Power & Utilities",
  "Construction & Infrastructure",
  "Food & Beverage",
];

const tags = [
  "Manufacturer service manuals",
  "Approved service procedures",
  "Project specifications",
  "Relevant regulatory requirements",
];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Tank Restoration & Lining", icon: ShieldCheck, href: "/services/tank-restoration-lining" },
  { label: "Surveying & 3D Scanning", icon: ScanLine, href: "/services/survey-scanning" },
];

const faqs = [
  {
    q: "Do you handle chiller maintenance in Dammam and the Eastern Province?",
    a: "Yes — Falcon provides chiller installation, commissioning and preventive maintenance across the Eastern Province, including Dammam, within our approved and authorized scope.",
  },
  {
    q: "What's included in a preventive maintenance visit?",
    a: "A typical visit covers inspection of operating condition and key parameters, oil, filter and consumable checks, leak inspection, and a documented service report — scope varies by chiller model and manufacturer requirements.",
  },
  {
    q: "Can you inspect tanks without taking them out of service?",
    a: "Many inspection methods — visual, dimensional and thickness checks — can be carried out with minimal disruption. Where a tank must be taken offline, we plan the scope to minimize downtime.",
  },
  {
    q: "Do you only service equipment you're authorized to work on?",
    a: "Yes — Falcon only advertises and performs industrial and chiller services it is technically equipped, licensed and authorized to execute, and works to manufacturer procedures where applicable.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Industrial Services",
      name: "Industrial Services",
      description:
        "Tank inspection, industrial coating, mechanical maintenance, equipment support and chiller installation and maintenance.",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial services",
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

export default function IndustrialServicesPage() {
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
        title="Industrial Services"
        description="Inspection, mechanical maintenance and chiller installation & maintenance delivered by a single accountable team."
        breadcrumb="Industrial Services"
        image="/assets/images/services/tank-inspection.png"
        imageAlt="Industrial storage tank inspection by Falcon Technologies site team"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Inspection, maintenance and chiller services from one site team
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              Falcon reviews the equipment, its condition and service history first, then plans inspection, coating, maintenance or chiller work within its approved and authorised scope — with a report at the end of every job.
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
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  Not sure what your equipment needs?
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  Send the make, model and the problem you&rsquo;re seeing. We confirm the scope before anyone comes to site.
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
            Which service do you need?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            A quick guide. We confirm the scope after reviewing the equipment and its service history.
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
            From scope review to report
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
              Industries we support
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
              Work carried out to
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              Falcon only performs services it is technically equipped, licensed and authorised to carry out, working to manufacturer procedures where applicable.
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

      <CTASection />
    </div>
  );
}
