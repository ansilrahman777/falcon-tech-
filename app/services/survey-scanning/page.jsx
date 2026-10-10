import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Surveying & 3D Scanning Services in Saudi Arabia",
  description:
    "3D laser scanning, as-built surveys, Scan to BIM, BIM modelling and reverse engineering in Saudi Arabia — existing plants, buildings and components captured once and delivered as drawings, BIM models or CAD.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these lists.           */
/* ------------------------------------------------------------------ */

const IMG = "/assets/images/services";
const HUB = "/services/survey-scanning";

// 01 is the capture; 02–05 are the deliverables built from that capture.
const capture = {
  num: "01",
  name: "3D Laser Scanning",
  href: `${HUB}/3d-laser-scanning`,
  image: `${IMG}/3d-laser-scanning.jpg`,
  alt: "3D laser scanner capturing an industrial plant in Saudi Arabia",
  line: "Millions of measured points per setup — the whole space recorded, not just the dimensions someone remembered to take.",
};

const deliverables = [
  {
    num: "02",
    name: "As-Built Survey",
    href: `${HUB}/as-built-survey`,
    image: `${IMG}/as-built-survey.jpg`,
    alt: "As-built survey drawings produced from a 3D scan",
    line: "Plans, sections and elevations of what is actually there — including every modification nobody recorded.",
  },
  {
    num: "03",
    name: "Scan to BIM",
    href: `${HUB}/scan-to-bim`,
    image: `${IMG}/scan-to-bim.jpg`,
    alt: "Point cloud converted into a parametric BIM model",
    line: "Point cloud converted into an intelligent parametric model, at a level of detail agreed element by element.",
  },
  {
    num: "04",
    name: "BIM Modelling",
    href: `${HUB}/bim-modelling`,
    image: `${IMG}/bim-modelling.jpg`,
    alt: "Coordinated BIM model with architectural, structural and MEP disciplines",
    line: "Models from drawings, design intent, vendor data or scans — coordinated so clashes surface in the model, not on site.",
  },
  {
    num: "05",
    name: "Reverse Engineering",
    href: `${HUB}/reverse-engineering`,
    image: `${IMG}/reverse-engineering-scanning.jpg`,
    alt: "Industrial component scanned and rebuilt as an editable CAD model",
    line: "Obsolete or undocumented components scanned and rebuilt as editable CAD — the fastest route back to a replacement part.",
  },
];

// [service, what you receive, formats, href]
const receive = [
  ["3D Laser Scanning", "Registered point cloud, imagery and registration report", "E57, RCP / RCS, DWG", `${HUB}/3d-laser-scanning`],
  ["As-Built Survey", "Coordinated 2D drawing set to your CAD standard", "DWG, DXF, PDF", `${HUB}/as-built-survey`],
  ["Scan to BIM", "Parametric BIM model, deviation-checked to the cloud", "RVT, IFC, NWC", `${HUB}/scan-to-bim`],
  ["BIM Modelling", "Coordinated discipline models, clash reports and drawings", "RVT, IFC, NWD, DWG", `${HUB}/bim-modelling`],
  ["Reverse Engineering", "Editable parametric CAD, drawings and deviation report", "STEP, IGES, STL, DWG", `${HUB}/reverse-engineering`],
];

const steps = [
  { title: "Scope and scan plan", desc: "Area, purpose, accuracy and deliverables agreed before anyone goes to site." },
  { title: "Site capture", desc: "Scanning carried out under your permits, with minimal disruption to operations." },
  { title: "Registration and QA", desc: "Setups registered into one point cloud and checked against the agreed tolerance." },
  { title: "Drafting or modelling", desc: "Drawings, BIM models or CAD built directly from the measured geometry." },
  { title: "Delivery and support", desc: "Files issued in the agreed formats, with the cloud kept for later questions." },
];

const uses = [
  "Process plants and piping",
  "Tanks, vessels and equipment",
  "Buildings and facilities",
  "Plant modifications and retrofits",
  "Shutdown and turnaround planning",
  "Obsolete spare parts",
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
      name: "Surveying & 3D Scanning",
      serviceType: "Surveying & 3D Scanning",
      description:
        "3D laser scanning, as-built surveys, Scan to BIM, BIM modelling and reverse engineering.",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Surveying & 3D Scanning",
        itemListElement: [capture, ...deliverables].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.line },
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
        image={capture.image}
        imageAlt={capture.alt}
      />

      {/* ============ CAPTURE → DELIVERABLES ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Captured once, delivered four ways
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              Every project starts from the same measured reality. One 3D laser
              scan feeds whichever deliverable the work needs — and another can
              be added later from the same cloud.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-5">
            {/* The capture */}
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-medium text-steel dark:text-white/50">
                The capture
              </p>
              <Link
                href={capture.href}
                className="group relative flex min-h-96 flex-col justify-end overflow-hidden rounded-sm bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:h-full"
              >
                <Image
                  src={capture.image}
                  alt={capture.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
                <div className="relative p-6 sm:p-8">
                  <span className="text-sm font-semibold text-brand">{capture.num}</span>
                  <h3 className="mt-2 text-3xl font-normal tracking-tight text-white">
                    {capture.name}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
                    {capture.line}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 border-b border-white/60 pb-0.5 text-sm font-semibold text-white transition-colors group-hover:border-brand">
                    View 3D laser scanning
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </div>

            {/* What it becomes */}
            <div className="lg:col-span-3">
              <p className="mb-3 text-sm font-medium text-steel dark:text-white/50">
                Delivered from the same scan
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="group flex flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-white/10 dark:bg-neutral-900"
                  >
                    <div className="relative aspect-video overflow-hidden bg-ink">
                      <Image
                        src={d.image}
                        alt={d.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="flex items-center justify-between gap-3 text-lg font-medium text-neutral-900 dark:text-white">
                        <span>
                          <span className="mr-2 text-sm font-semibold text-brand">{d.num}</span>
                          {d.name}
                        </span>
                        <ArrowUpRight size={17} className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/30" />
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                        {d.line}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU RECEIVE ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            What you receive
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            Typical deliverables and formats. Final formats are agreed in the
            scope to suit your software and standards.
          </p>

          {/* Phones: stacked */}
          <div className="mt-10 space-y-6 md:hidden">
            {receive.map(([name, what, formats, href]) => (
              <div key={name} className="border-t-2 border-ink pt-4 dark:border-white/40">
                <Link href={href} className="inline-flex items-center gap-1.5 text-lg font-medium text-neutral-900 dark:text-white">
                  {name}
                  <ArrowUpRight size={16} className="text-neutral-400" />
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{what}</p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">{formats}</p>
              </div>
            ))}
          </div>

          {/* Tablet and up: table */}
          <div className="mt-10 hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-ink dark:border-white/40">
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold text-neutral-900 dark:text-white">Service</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold text-neutral-900 dark:text-white">You receive</th>
                  <th scope="col" className="py-4 text-sm font-semibold text-neutral-900 dark:text-white">Typical formats</th>
                </tr>
              </thead>
              <tbody>
                {receive.map(([name, what, formats, href]) => (
                  <tr key={name} className="border-b border-neutral-200 dark:border-white/10">
                    <th scope="row" className="py-5 pr-6 align-top">
                      <Link href={href} className="group inline-flex items-center gap-1.5 text-base font-medium text-neutral-900 transition-colors hover:text-brand dark:text-white">
                        {name}
                        <ArrowUpRight size={15} className="text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                      </Link>
                    </th>
                    <td className="py-5 pr-6 align-top text-sm leading-relaxed text-neutral-600 dark:text-white/60">{what}</td>
                    <td className="py-5 align-top text-sm font-medium text-neutral-900 dark:text-white/85">{formats}</td>
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
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ WHERE IT'S USED ============ */}
      <section className="w-full bg-ink">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-16 lg:px-8 xl:px-0">
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
            Where it&rsquo;s used
          </h2>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-2">
            {uses.map((u) => (
              <li key={u} className="border-b border-white/15 py-4 text-base text-white/85">
                {u}
              </li>
            ))}
          </ul>
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
                  <Plus size={18} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
