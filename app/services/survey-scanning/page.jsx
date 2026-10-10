import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Factory,
  Flame,
  Plus,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Surveying & 3D Scanning Services in Saudi Arabia",
  description:
    "3D laser scanning, as-built surveys, Scan to BIM, BIM modelling and reverse engineering in Saudi Arabia \u2014 existing plants, buildings and components captured once and delivered as drawings, BIM models or CAD.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// First item is the large feature tile.
const ranges = [
  {
    name: "3D Laser Scanning",
    href: "/services/survey-scanning/3d-laser-scanning",
    image: "/assets/images/services/3d-laser-scanning.jpg",
    alt: "3D laser scanner capturing an industrial plant in Saudi Arabia",
    meta: "The capture",
    desc: "Millions of measured points per setup — the whole space recorded, not just the dimensions someone remembered to take.",
  },
  {
    name: "As-Built Survey",
    href: "/services/survey-scanning/as-built-survey",
    image: "/assets/images/services/as-built-survey.jpg",
    alt: "As-built survey drawings produced from a 3D scan",
    meta: "2D drawings",
    desc: "Plans, sections and elevations of what is actually there — including modifications nobody recorded.",
  },
  {
    name: "Scan to BIM",
    href: "/services/survey-scanning/scan-to-bim",
    image: "/assets/images/services/scan-to-bim.jpg",
    alt: "Point cloud converted into a parametric BIM model",
    meta: "BIM model from the scan",
    desc: "Point cloud converted into a parametric model, at a level of detail agreed element by element.",
  },
  {
    name: "BIM Modelling",
    href: "/services/survey-scanning/bim-modelling",
    image: "/assets/images/services/bim-modelling.jpg",
    alt: "Coordinated BIM model with architectural, structural and MEP disciplines",
    meta: "Coordinated models",
    desc: "Models from drawings, design intent, vendor data or scans — coordinated so clashes surface in the model, not on site.",
  },
  {
    name: "Reverse Engineering",
    href: "/services/survey-scanning/reverse-engineering",
    image: "/assets/images/services/reverse-engineering-scanning.jpg",
    alt: "Industrial component scanned and rebuilt as an editable CAD model",
    meta: "Editable CAD",
    desc: "Obsolete or undocumented components scanned and rebuilt as editable CAD.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "As-built drawings",
    href: "/services/survey-scanning/as-built-survey",
  },
  {
    name: "BIM model",
    href: "/services/survey-scanning/scan-to-bim",
  },
  {
    name: "CAD solids",
    href: "/services/survey-scanning/reverse-engineering",
  },
];

const comparison = [
  [
    "Best for",
    "Permits, maintenance records and 2D design work",
    "Design, coordination and facility management",
    "Replacement parts, modifications and manufacturing",
  ],
  [
    "You receive",
    "Coordinated 2D drawing set to your CAD standard",
    "Parametric BIM model, deviation-checked to the cloud",
    "Editable parametric CAD, drawings and deviation report",
  ],
  ["Typical formats", "DWG, DXF, PDF", "RVT, IFC, NWC", "STEP, IGES, STL, DWG"],
  ["Service", "As-Built Survey", "Scan to BIM or BIM Modelling", "Reverse Engineering"],
];

const process = [
  {
    title: "Scope and scan plan",
    desc: "Area, purpose, accuracy and deliverables agreed before anyone goes to site.",
  },
  {
    title: "Site capture",
    desc: "Scanning carried out under your permits, with minimal disruption to operations.",
  },
  {
    title: "Registration and QA",
    desc: "Setups registered into one point cloud and checked against the agreed tolerance.",
  },
  {
    title: "Drafting or modelling",
    desc: "Drawings, BIM models or CAD built directly from the measured geometry.",
  },
  {
    title: "Delivery and support",
    desc: "Files issued in the agreed formats, with the cloud kept for later questions.",
  },
];

const industries = [
  "Process plants and piping",
  "Tanks, vessels and equipment",
  "Buildings and facilities",
  "Plant modifications and retrofits",
  "Shutdown and turnaround planning",
  "Obsolete spare parts",
];

const tags = ["E57", "RCP / RCS", "DWG", "DXF", "PDF", "RVT", "IFC", "NWC / NWD", "STEP", "IGES", "STL"];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Tank Restoration & Lining", icon: ShieldCheck, href: "/services/tank-restoration-lining" },
  { label: "Industrial Services", icon: Wrench, href: "/services/industrial-services" },
];

const faqs = [
  {
    q: "Which surveying service do I need?",
    a: "Tell us what the information is for. If you need drawings, an as-built survey; a model for design or coordination, Scan to BIM or BIM modelling; a replacement part, reverse engineering. All of them start from a 3D laser scan of the existing asset.",
  },
  {
    q: "Can one scan be used for more than one deliverable?",
    a: "Yes. The registered point cloud is kept, so drawings, a BIM model or CAD can be produced from the same capture — often without returning to site, provided the original scan covered the area.",
  },
  {
    q: "Can you scan while the facility is operating?",
    a: "Usually, yes. Laser scanning is non-contact, so most areas can be captured while the site runs, subject to your permits, safety rules and access.",
  },
  {
    q: "How accurate are the results?",
    a: "The accuracy the project needs is agreed in the scan plan and confirmed in the registration report and, for models, a deviation check against the cloud. We don't quote one figure for every site.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Surveying & 3D Scanning",
      name: "Surveying & 3D Scanning Services",
      description:
        "3D laser scanning, as-built surveys, Scan to BIM, BIM modelling and reverse engineering.",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Surveying services",
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

export default function SurveyScanningPage() {
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
        title="Surveying & 3D Scanning Services"
        description="Retrofit work fails on bad dimensions. We scan existing plants, buildings and components, then deliver as-built drawings, BIM models or CAD solids from the same captured reality."
        breadcrumb="Surveying & 3D Scanning"
        image="/assets/images/services/survey-scanning.png"
        imageAlt="Surveying and 3D laser scanning of an existing industrial facility"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Captured once, delivered as drawings, BIM or CAD
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              Every project starts with a 3D laser scan of what is actually there. From that one registered point cloud we produce the deliverable the work needs — and another can be added later without going back to site, provided the scan covered the area.
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
                  Not sure which deliverable you need?
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  Tell us what the information is for and roughly how big the area is. We&rsquo;ll scope the scan and the deliverable together.
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
            Drawings, BIM model or CAD?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            All three come from the same scan. Choose by what the information is for; final formats are agreed in the scope.
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
            From site to deliverable
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
              Where it&rsquo;s used
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
              Typical file formats
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              Final formats are agreed in the scope to suit your software and standards.
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
