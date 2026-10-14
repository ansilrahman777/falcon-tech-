import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Scan to BIM Services in Saudi Arabia",
  description: "Scan to BIM in Saudi Arabia — point clouds converted into intelligent parametric BIM models in Revit and IFC, at a level of detail agreed element by element and deviation-checked against the scan.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these values.          */
/* ------------------------------------------------------------------ */

const HUB = "/services/survey-scanning";

const page = {
  "num": "03",
  "name": "Scan to BIM",
  "heading": "From point cloud to an intelligent BIM model",
  "tagline": "Point cloud converted into an intelligent parametric model, at a level of detail agreed element by element.",
  "image": "/assets/images/services/scan-to-bim.jpg",
  "alt": "Point cloud converted into a parametric BIM model"
};

const intro = [
  "Scan to BIM turns a registered point cloud into a parametric model — real walls, floors, structure and MEP objects with data attached, not a heavy mesh that nobody can edit.",
  "Level of detail is agreed element by element rather than applied across the board, so effort goes where your project needs it. The finished model is checked for deviation against the cloud before it is issued."
];

const offerings = [
  [
    "Level of detail by element",
    "Detail agreed per element and discipline — structure modelled more precisely than finishes, for example."
  ],
  [
    "Real parametric objects",
    "Native walls, slabs, beams, columns, ducts and pipes you can edit, schedule and reuse."
  ],
  [
    "Architecture, structure, MEP",
    "Disciplines modelled as scoped, from a single building element to a whole facility."
  ],
  [
    "Deviation checking",
    "The model compared against the point cloud so you know how closely it follows reality."
  ],
  [
    "Built to your standards",
    "Naming, families and parameters set up to your BIM execution plan."
  ],
  [
    "Ready for coordination",
    "Models prepared for federation, clash detection and design work."
  ]
];

const steps = [
  [
    "Agree scope and detail",
    "Disciplines, areas and level of detail agreed per element."
  ],
  [
    "Scan the site",
    "A registered point cloud captured for modelling."
  ],
  [
    "Model from the cloud",
    "Parametric objects modelled against the measured geometry."
  ],
  [
    "Deviation check and issue",
    "Model checked against the cloud and issued in the agreed formats."
  ]
];

const formats = [
  [
    "Native model",
    "RVT (Revit)"
  ],
  [
    "Open BIM",
    "IFC"
  ],
  [
    "Coordination",
    "NWC / NWD (Navisworks)"
  ],
  [
    "Quality record",
    "Deviation check against the cloud"
  ]
];

const uses = [
  "Retrofit and renovation design",
  "MEP upgrades",
  "Facility and asset management",
  "Brownfield plant expansion",
  "Digital twin foundations",
  "Design coordination"
];

const faqs = [
  {
    "q": "What level of detail do you model to?",
    "a": "It is agreed element by element. Structural members might be modelled precisely while finishes are kept simple — so you get the detail you need without paying for detail you don't."
  },
  {
    "q": "Which software and formats do you deliver?",
    "a": "Models are typically delivered as Revit (RVT) with IFC for open BIM workflows and NWC / NWD for coordination. Other formats can be agreed in the scope."
  },
  {
    "q": "Can you model only part of a building or plant?",
    "a": "Yes. Scope can be a single plant room, one discipline or a whole facility."
  },
  {
    "q": "How do I know the model matches the site?",
    "a": "Each model is checked for deviation against the point cloud before it is issued, so you can see how closely it follows the measured geometry."
  }
];

// The other four surveying services (shown at the bottom of the page).
const otherServices = [
  {
    "num": "01",
    "name": "3D Laser Scanning",
    "href": "/services/survey-scanning/3d-laser-scanning",
    "image": "/assets/images/services/3d-laser-scanning.jpg",
    "alt": "3D laser scanner capturing an industrial plant in Saudi Arabia"
  },
  {
    "num": "02",
    "name": "As-Built Survey",
    "href": "/services/survey-scanning/as-built-survey",
    "image": "/assets/images/services/as-built-survey.jpg",
    "alt": "As-built survey drawings produced from a 3D scan of an existing facility"
  },
  {
    "num": "04",
    "name": "BIM Modelling",
    "href": "/services/survey-scanning/bim-modelling",
    "image": "/assets/images/services/bim-modelling.jpg",
    "alt": "Coordinated BIM model with architectural, structural and MEP disciplines"
  },
  {
    "num": "05",
    "name": "Reverse Engineering",
    "href": "/services/survey-scanning/reverse-engineering",
    "image": "/assets/images/services/reverse-engineering-scanning.jpg",
    "alt": "Industrial component scanned and rebuilt as an editable CAD model"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: page.name,
      description: page.tagline,
      serviceType: "Surveying & 3D Scanning",
      areaServed: "Saudi Arabia",
      provider: { "@type": "Organization", name: "Falcon Technologies" },
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

export default function ScanToBimPage() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Surveying & 3D Scanning"
        title={page.name}
        description={page.tagline}
        breadcrumb={page.name}
        image={page.image}
        imageAlt={page.alt}
      />

      {/* ============ OVERVIEW ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <div>
            <Link
              href={HUB}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
            >
              <ArrowLeft size={14} />
              All surveying services
            </Link>

            <h2 className="mt-6 max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              {page.heading}
            </h2>

            <div className="mt-6 max-w-xl space-y-4">
              {intro.map((p) => (
                <p key={p} className="text-base leading-relaxed text-neutral-600 dark:text-white/60">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/request-a-quote"
                className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact-us"
                className="border-b border-neutral-300 pb-0.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/80"
              >
                Talk to a survey engineer
              </Link>
            </div>
          </div>

          <div>
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-ink">
              <Image
                src={page.image}
                alt={page.alt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10">
              {formats.map(([label, value]) => (
                <div key={label} className="bg-white p-4 dark:bg-neutral-950">
                  <dt className="text-sm text-neutral-500 dark:text-white/45">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU GET ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            What you get
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(([title, desc]) => (
              <div key={title} className="bg-white p-7 dark:bg-neutral-950">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS (a real sequence, so numbered) ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            How it works
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(([title, desc], i) => (
              <li key={title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{desc}</p>
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

      {/* ============ OTHER SURVEYING SERVICES ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
            Other surveying services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-sm border border-neutral-200 bg-white transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
              >
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    <span className="mr-2 text-brand">{s.num}</span>
                    {s.name}
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
