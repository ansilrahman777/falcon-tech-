import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

/**
 * Shared layout for every sub-service page (/services/<division>/<service>).
 * Each page file owns its own content and passes it in as props — this file
 * only owns structure, styling, SEO markup and the sibling links.
 */

// Sibling map used only for the "back to division" link and "More in ..." row.
const DIVISIONS = {
  "tank-solutions": {
    label: "Tank Solutions",
    href: "/services/tank-solutions",
    items: [
      ["FRP / GRP Tanks", "frp-grp-tanks"],
      ["Polyethylene Tanks", "polyethylene-tanks"],
      ["Steel Tank Systems", "steel-tank-systems"],
      ["Water Tanks", "water-tanks"],
      ["Chemical Tanks", "chemical-tanks"],
      ["Diesel / Fuel Tanks", "diesel-fuel-tanks"],
      ["Underground Tanks", "underground-tanks"],
    ],
  },
  "thermal-insulation": {
    label: "Thermal Insulation",
    href: "/services/thermal-insulation",
    items: [
      ["Storage Tank Insulation", "storage-tank-insulation"],
      ["Pipe & Equipment Insulation", "pipe-equipment-insulation"],
      ["Building & Roof Insulation", "building-roof-insulation"],
      ["Equipment Room Insulation", "equipment-room-insulation"],
      ["Aerogel Thermal Insulation", "aerogel-thermal-insulation"],
    ],
  },
  "tank-restoration-lining": {
    label: "Tank Restoration & Lining",
    href: "/services/tank-restoration-lining",
    items: [
      ["Tank Restoration", "tank-restoration"],
      ["Tank Rehabilitation", "tank-rehabilitation"],
      ["FRP / GRP Lining", "frp-grp-lining"],
      ["Chemical-Resistant Lining", "chemical-resistant-lining"],
      ["Concrete Tank Lining", "concrete-tank-lining"],
      ["Steel Tank Lining", "steel-tank-lining"],
      ["Waterproof Lining", "waterproof-lining"],
      ["Corrosion Protection", "corrosion-protection"],
    ],
  },
  "industrial-services": {
    label: "Industrial Services",
    href: "/services/industrial-services",
    items: [
      ["Tank Inspection", "tank-inspection"],
      ["Industrial Coating", "industrial-coating"],
      ["Survey & Scanning", "survey-scanning"],
      ["Mechanical Maintenance", "mechanical-maintenance"],
      ["Equipment Support", "equipment-support"],
      ["Chiller Installation & Maintenance", "chiller-installation-maintenance"],
    ],
  },
};

const DUMMY_IMAGE = "/assets/images/home/hero-slide-1.png";

function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px] ${className}`}
    >
      {children}
    </h2>
  );
}

export default function ServiceDetail({
  division,
  slug,
  title,
  tagline,
  heading,
  intro,
  note,
  types,
  specsTitle = "Technical Snapshot",
  specs,
  offerings,
  applications,
  steps,
  stepsTitle = "How We Deliver",
  standards,
  faqs,
  image = DUMMY_IMAGE,
  imageAlt,
}) {
  const div = DIVISIONS[division];

  // Next three siblings (wrapping around), excluding the current page.
  const idx = div.items.findIndex(([, s]) => s === slug);
  const related = [];
  for (let i = 1; i < div.items.length && related.length < 3; i++) {
    related.push(div.items[(idx + i) % div.items.length]);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: title,
        description: tagline,
        serviceType: div.label,
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

  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={div.label}
        title={title}
        description={tagline}
        breadcrumb={title}
        image={image}
      />

      {/* OVERVIEW */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <div>
            <Link
              href={div.href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
            >
              <ArrowLeft size={13} />
              {div.label}
            </Link>

            <SectionHeading className="mt-6">{heading}</SectionHeading>

            <div className="mt-5 max-w-xl space-y-4">
              {intro.map((p) => (
                <p
                  key={p}
                  className="text-sm leading-relaxed text-neutral-500 dark:text-white/55"
                >
                  {p}
                </p>
              ))}
            </div>

            {note && (
              <p className="mt-6 max-w-xl border-l-2 border-brand pl-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
                {note}
              </p>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/request-a-quote"
                className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </Link>
              <Link
                href="/technical-library"
                className="inline-block border-b border-neutral-300 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/75"
              >
                Browse the Technical Library
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900">
            <Image
              src={image}
              alt={imageAlt || `${title} by Falcon Technologies in Saudi Arabia`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
              {div.label}
            </span>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <SectionHeading>What We Offer</SectionHeading>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950"
              >
                <span className="block h-0.5 w-8 bg-brand" />
                <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      {types && types.length > 0 && (
        <section className="w-full bg-white dark:bg-neutral-950">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
            <SectionHeading>
              {types.some((t) => t.slug) ? `Types of ${title}` : "Construction Options"}
            </SectionHeading>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              {types.some((t) => t.slug)
                ? "Each configuration has its own page with the detail relevant to that type."
                : "Candidate constructions for this category — the right one is selected per project from the service conditions."}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {types.map((t) => {
                const CardInner = (
                  <>
                    <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                      <Image
                        src={t.image || image}
                        alt={`${t.title} — ${title} by Falcon Technologies`}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className={`object-cover${t.slug ? " transition-transform duration-500 group-hover:scale-105" : ""}`}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                        {t.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                        {t.blurb}
                      </p>
                      {t.slug && (
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                          View type
                          <ArrowUpRight
                            size={14}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      )}
                    </div>
                  </>
                );

                return t.slug ? (
                  <Link
                    key={t.slug}
                    href={`/services/${division}/${slug}/${t.slug}`}
                    className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
                  >
                    {CardInner}
                  </Link>
                ) : (
                  <div
                    key={t.title}
                    className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
                  >
                    {CardInner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SPECS + APPLICATIONS */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8 xl:px-0">
          <div>
            <SectionHeading>{specsTitle}</SectionHeading>
            <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              {specs.map(([term, detail]) => (
                <div
                  key={term}
                  className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6"
                >
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    {term}
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
              Where It&rsquo;s Used
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {applications.map((a) => (
                <span
                  key={a}
                  className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60"
                >
                  {a}
                </span>
              ))}
            </div>

            {standards && standards.length > 0 && (
              <>
                <h2 className="mt-10 text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
                  Referenced Standards
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {standards.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-neutral-400 dark:text-white/35">
                  Applied as applicable to the product, governing standard and
                  project specification.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <SectionHeading>{stepsTitle}</SectionHeading>
          <ol
            className={`mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 ${
              steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
            } lg:gap-6`}
          >
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="border-t border-neutral-300 pt-4 dark:border-white/15"
              >
                <span className="text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                  {s.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-neutral-200 py-5 dark:border-white/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={16}
                    className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <SectionHeading>More in {div.label}</SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map(([label, s]) => (
              <Link
                key={s}
                href={`${div.href}/${s}`}
                className="group flex items-center justify-between border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
              >
                <span className="text-sm font-medium text-neutral-800 dark:text-white/80">
                  {label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
