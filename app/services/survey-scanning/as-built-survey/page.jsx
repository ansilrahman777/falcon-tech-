import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "As-Built Survey & Drawings in Saudi Arabia",
  description: "As-built surveys in Saudi Arabia — plans, sections and elevations of plants, buildings and structures drafted from a registered 3D scan, including every unrecorded modification.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these values.          */
/* ------------------------------------------------------------------ */

const HUB = "/services/survey-scanning";

const page = {
  "num": "02",
  "name": "As-Built Survey",
  "heading": "As-built drawings of what is actually there",
  "tagline": "Plans, sections and elevations of what is actually there — including every modification nobody recorded.",
  "image": "/assets/images/services/as-built-survey.jpg",
  "alt": "As-built survey drawings produced from a 3D scan of an existing facility"
};

const intro = [
  "Existing drawings rarely match the site. Equipment gets moved, pipework rerouted and walls changed, and none of it makes it back onto paper. An as-built survey records the facility as it stands today.",
  "We draft plans, sections and elevations directly from the registered point cloud, so every dimension is measured rather than assumed — and deliver them in your CAD standard and title block."
];

const offerings = [
  [
    "Plans, sections and elevations",
    "A coordinated 2D drawing set of buildings, structures and plant areas."
  ],
  [
    "Equipment and piping layouts",
    "General arrangements showing equipment positions, routing and clearances as built."
  ],
  [
    "Field modifications captured",
    "Changes made on site but never recorded are picked up from the scan."
  ],
  [
    "Your CAD standard",
    "Layers, line types, title block and naming to your standard."
  ],
  [
    "Update existing drawings",
    "Legacy drawings checked and corrected against the cloud instead of redrawn from scratch."
  ],
  [
    "Traceable to the scan",
    "Every dimension comes from measured geometry you can go back and verify."
  ]
];

const steps = [
  [
    "Agree the drawing list",
    "Areas, drawing types, scale and CAD standard confirmed."
  ],
  [
    "Scan the site",
    "A registered point cloud captured to the accuracy the drawings need."
  ],
  [
    "Draft from the cloud",
    "Drawings produced directly from the measured geometry."
  ],
  [
    "Check and issue",
    "Drawings checked against the cloud and issued in your formats."
  ]
];

const formats = [
  [
    "Drawings",
    "DWG, DXF"
  ],
  [
    "Issue set",
    "PDF"
  ],
  [
    "Source data",
    "Point cloud on request (E57, RCP)"
  ],
  [
    "Standard",
    "Your CAD standard and title block"
  ]
];

const uses = [
  "Plant modifications",
  "Building refurbishment",
  "Facility management records",
  "Permit and authority submissions",
  "Tank and equipment replacement",
  "Design basis for new work"
];

const faqs = [
  {
    "q": "Do you work to our CAD standard?",
    "a": "Yes. Send us your CAD standard, template and title block and the drawings are produced to it."
  },
  {
    "q": "Can you update our existing drawings instead of redrawing them?",
    "a": "Yes. Existing drawings can be checked against the point cloud and corrected, which is often faster than starting from scratch."
  },
  {
    "q": "Why not measure by hand?",
    "a": "Hand measurement captures only the dimensions someone thinks to take, and missed ones mean revisits. A scan records everything once, so later questions are answered from the cloud."
  },
  {
    "q": "Can we also get a 3D model later?",
    "a": "Yes. The same point cloud can be used for Scan to BIM or BIM modelling later, often without returning to site."
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

export default function AsBuiltSurveyPage() {
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
