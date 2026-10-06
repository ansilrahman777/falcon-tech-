import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";

/**
 * Shared layout for a "type" page — one level under a sub-service, e.g.
 * /services/tank-solutions/frp-grp-tanks/vertical-frp-tank. Lighter than
 * ServiceDetail (no "What We Offer" grid, shorter FAQ) since it's a more
 * specific page than its parent sub-service.
 */

function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`max-w-xl text-[24px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[28px] ${className}`}
    >
      {children}
    </h2>
  );
}

export default function TypeDetail({
  division,
  divisionLabel,
  serviceSlug,
  serviceTitle,
  title,
  tagline,
  intro,
  specs,
  applications,
  faqs,
  siblings, // [{title, slug}] — other types under the same sub-service
  image,
  imageAlt,
}) {
  const parentHref = `/services/${division}/${serviceSlug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: title,
        description: tagline,
        category: serviceTitle,
        brand: { "@type": "Organization", name: "Falcon Technologies" },
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
        eyebrow={`${divisionLabel} — ${serviceTitle}`}
        title={title}
        description={tagline}
        breadcrumb={title}
        image={image}
      />

      {/* OVERVIEW */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-0 lg:py-24">
          <div>
            <Link
              href={parentHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
            >
              <ArrowLeft size={13} />
              {serviceTitle}
            </Link>

            <SectionHeading className="mt-6">{title}</SectionHeading>

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

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/request-a-quote"
                className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </Link>
              <Link
                href={parentHref}
                className="inline-block border-b border-neutral-300 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/75"
              >
                See all {serviceTitle}
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
              {serviceTitle}
            </span>
          </div>
        </div>
      </section>

      {/* SPECS + APPLICATIONS */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-0">
          <div>
            <SectionHeading>Specification</SectionHeading>
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-8 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  {f.q}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER TYPES */}
      {siblings && siblings.length > 0 && (
        <section className="w-full bg-neutral-50 dark:bg-neutral-900">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
            <SectionHeading>Other {serviceTitle} Types</SectionHeading>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`${parentHref}/${s.slug}`}
                  className="group flex items-center justify-between border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
                >
                  <span className="text-sm font-medium text-neutral-800 dark:text-white/80">
                    {s.title}
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
      )}

      <CTASection />
    </div>
  );
}
