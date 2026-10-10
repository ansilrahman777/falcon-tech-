import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  title: "3D Laser Scanning Services in Saudi Arabia",
  description: "Terrestrial 3D laser scanning of plants, buildings, tanks and components in Saudi Arabia — a registered point cloud of the whole space, captured non-intrusively on live sites.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these values.          */
/* ------------------------------------------------------------------ */

const HUB = "/services/survey-scanning";

const page = {
  "num": "01",
  "name": "3D Laser Scanning",
  "heading": "3D laser scanning that records the whole space",
  "tagline": "Millions of measured points per setup — the whole space recorded, not just the dimensions someone remembered to take.",
  "image": "/assets/images/services/3d-laser-scanning.jpg",
  "alt": "3D laser scanner capturing an industrial plant in Saudi Arabia"
};

const intro = [
  "A laser scanner measures millions of points from each setup position. The setups are registered into one point cloud — a measured record of the plant, building or component exactly as it stands today.",
  "Scanning is non-contact, so it works on live, operating sites with minimal disruption. The same cloud then feeds every downstream deliverable: as-built drawings, Scan to BIM, BIM models and reverse-engineered CAD."
];

const offerings = [
  [
    "Scan planning",
    "Setup positions and coverage planned around the deliverable you need, with the required accuracy agreed before anyone goes to site."
  ],
  [
    "Registered point cloud",
    "All setups registered into one coordinated cloud and checked, with a registration report you can audit."
  ],
  [
    "Live-site capture",
    "Non-contact measurement that works around operations, within your site permits and HSE requirements."
  ],
  [
    "Hard-to-reach areas",
    "High, congested or restricted areas measured from a safe distance instead of by hand."
  ],
  [
    "Colour and imagery",
    "Colourised clouds and panoramic imagery where the scope calls for it, for remote site walk-throughs."
  ],
  [
    "Ready for modelling",
    "A cloud prepared for drafting and modelling, so the next deliverable starts from verified geometry."
  ]
];

const steps = [
  [
    "Scope and scan plan",
    "Area, purpose, accuracy and deliverables agreed; setup positions planned."
  ],
  [
    "Site capture",
    "Scanning carried out under site permits, with minimal disruption to operations."
  ],
  [
    "Registration and QA",
    "Setups registered into one cloud and checked against the agreed tolerance."
  ],
  [
    "Delivery",
    "Point cloud, imagery and registration report issued in the agreed formats."
  ]
];

const formats = [
  [
    "Point cloud",
    "E57, RCP / RCS"
  ],
  [
    "CAD extracts",
    "DWG"
  ],
  [
    "Imagery",
    "Panoramic views, where specified"
  ],
  [
    "Quality record",
    "Registration report"
  ]
];

const uses = [
  "Process plants and piping",
  "Tanks and vessels",
  "Buildings and facilities",
  "Structural steel",
  "Retrofit and brownfield projects",
  "Shutdown planning"
];

const faqs = [
  {
    "q": "Can you scan while the plant is operating?",
    "a": "Usually, yes. Laser scanning is non-contact, so most areas can be captured while the facility runs, subject to your site permits, safety rules and access."
  },
  {
    "q": "How accurate is 3D laser scanning?",
    "a": "Accuracy depends on the scanner, range, surface and registration. The accuracy the project needs is agreed in the scan plan and reported in the registration report — we don't quote one figure for every site."
  },
  {
    "q": "Which file formats will I receive?",
    "a": "Point clouds are typically delivered as E57 (an open format) and RCP / RCS for Autodesk software, with DWG extracts where needed. Formats are agreed in the scope."
  },
  {
    "q": "What is the difference between a point cloud and a model?",
    "a": "A point cloud is the raw measured record — millions of points. A model or drawing is built from it: as-built drawings, a BIM model or CAD solids. One scan can produce several of these."
  }
];

// The other four surveying services (shown at the bottom of the page).
const otherServices = [
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

export default function Service3dLaserScanningPage() {
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
