import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "Reverse Engineering & 3D Scanning to CAD in Saudi Arabia",
  description: "Reverse engineering in Saudi Arabia — obsolete or undocumented components 3D scanned and rebuilt as editable parametric CAD, the fastest route back to a manufacturable replacement.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these values.          */
/* ------------------------------------------------------------------ */

const HUB = "/services/survey-scanning";

const page = {
  "num": "05",
  "name": "Reverse Engineering",
  "heading": "Scan a part, get an editable CAD model",
  "tagline": "Obsolete or undocumented components scanned and rebuilt as editable CAD — the fastest route back to a replacement part.",
  "image": "/assets/images/services/reverse-engineering-scanning.jpg",
  "alt": "Industrial component scanned and rebuilt as an editable CAD model"
};

const intro = [
  "When a component is obsolete, undocumented or the original supplier is gone, reverse engineering recovers it. The part is 3D scanned and rebuilt as an editable parametric CAD model.",
  "You receive a parametric solid, not just a mesh — geometry you can modify, dimension and send for manufacture, with a deviation report comparing the model to the scan."
];

const offerings = [
  [
    "Obsolete spare recovery",
    "Replacement geometry for parts that can no longer be bought or have no drawings."
  ],
  [
    "Parametric solid, not a mesh",
    "An editable CAD model with features and dimensions you can work with."
  ],
  [
    "Ready to modify",
    "Geometry that can be improved or adapted, not just copied."
  ],
  [
    "Deviation report",
    "The CAD model compared against the scan so you know how closely it matches."
  ],
  [
    "Manufacturing drawings",
    "Dimensioned 2D drawings produced from the model where scoped."
  ],
  [
    "Worn parts handled",
    "Where a part is worn, the approach to recovering its design intent is agreed with you."
  ]
];

const steps = [
  [
    "Review the part",
    "Purpose, condition, critical features and the deliverable agreed."
  ],
  [
    "Scan the part",
    "The component captured on site or at our facility."
  ],
  [
    "Rebuild in CAD",
    "A parametric model created from the scan data."
  ],
  [
    "Compare and deliver",
    "Model checked against the scan; CAD, drawings and report issued."
  ]
];

const formats = [
  [
    "CAD solid",
    "STEP, IGES"
  ],
  [
    "Mesh",
    "STL"
  ],
  [
    "Drawings",
    "DWG, PDF"
  ],
  [
    "Quality record",
    "Deviation report against the scan"
  ]
];

const uses = [
  "Obsolete spare parts",
  "Pumps, impellers and valves",
  "Flanges, brackets and fittings",
  "Legacy equipment with no drawings",
  "Part improvement and redesign",
  "Fit-up of new to existing"
];

const faqs = [
  {
    "q": "What is the difference between a mesh and a parametric model?",
    "a": "A mesh (such as STL) is a surface of triangles — good for visualising or 3D printing but hard to edit. A parametric model is built from features and dimensions, so it can be changed and used for manufacturing drawings."
  },
  {
    "q": "Can you reproduce a worn or damaged part?",
    "a": "Yes. Where a part is worn, we agree with you how to recover the original design intent rather than copying the wear."
  },
  {
    "q": "Which formats will I receive?",
    "a": "Typically STEP and IGES for the CAD solid, STL for the mesh, and DWG / PDF for drawings. Native formats can be agreed in the scope."
  },
  {
    "q": "Do you manufacture the replacement part?",
    "a": "The deliverable is the CAD model, drawings and deviation report. Manufacturing can be arranged separately as your project requires."
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
    "num": "03",
    "name": "Scan to BIM",
    "href": "/services/survey-scanning/scan-to-bim",
    "image": "/assets/images/services/scan-to-bim.jpg",
    "alt": "Point cloud converted into a parametric BIM model"
  },
  {
    "num": "04",
    "name": "BIM Modelling",
    "href": "/services/survey-scanning/bim-modelling",
    "image": "/assets/images/services/bim-modelling.jpg",
    "alt": "Coordinated BIM model with architectural, structural and MEP disciplines"
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

export default function ReverseEngineeringPage() {
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
                priority
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
