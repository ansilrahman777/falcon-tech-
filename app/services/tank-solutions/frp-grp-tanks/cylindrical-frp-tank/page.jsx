import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Cylindrical FRP Tank | FRP / GRP Tanks",
  "description": "The most structurally efficient FRP shape, used across vertical and horizontal configurations."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Product", "name": "Cylindrical FRP Tank", "description": "The most structurally efficient FRP shape, used across vertical and horizontal configurations.", "category": "FRP / GRP Tanks", "brand": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is cylindrical the default FRP shape?", "acceptedAnswer": {"@type": "Answer", "text": "It's the most common and material-efficient shell geometry, selected for most standard storage unless a project needs a rectangular or custom footprint."}}, {"@type": "Question", "name": "Can a cylindrical tank be horizontal?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 \u201ccylindrical\u201d refers to the shell, which can be built vertical or horizontal depending on the installation."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Tank Solutions — FRP / GRP Tanks"
        title="Cylindrical FRP Tank"
        description="The most structurally efficient FRP shape, used across vertical and horizontal configurations."
        breadcrumb="Cylindrical FRP Tank"
        image="/assets/images/tank-solutions/saudi_industrial_frp_tank_system.png"
        imageAlt="Cylindrical FRP Tank by Falcon Technologies in Saudi Arabia"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/services/tank-solutions/frp-grp-tanks"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowLeft size={13} />
                FRP / GRP Tanks
              </a>
              <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                Cylindrical FRP Tank
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                “Cylindrical” describes the shell geometry and can be vertical or horizontal — the efficient, commonly-selected shape for liquid storage.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Capacity, diameter, length or height, bottom and head geometry, wall schedule, stiffeners, supports and openings are all set by design, and the complete tank is checked for hydrostatic, external and site loads.
              </p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="/request-a-quote"
                className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </a>
              <a
                href="/services/tank-solutions/frp-grp-tanks"
                className="inline-block border-b border-neutral-300 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/75"
              >
                See all FRP / GRP Tanks
              </a>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900">
              <Image loading="eager" src="/assets/images/tank-solutions/saudi_industrial_frp_tank_system.png" alt="Cylindrical FRP Tank by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                FRP / GRP Tanks
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Specification</h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Geometry</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Cylindrical shell, vertical or horizontal</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Set by design</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Diameter, length/height, head/bottom geometry, wall schedule, stiffeners, supports, openings</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Checks</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Hydrostatic, external and site loads on the complete tank</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Resin systems</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Selected for the actual liquid, concentration and temperature</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">To confirm per project</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Working volume, dimensions, SG, temperature and site loads</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Efficient liquid storage</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Water treatment</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Chemical storage</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Process storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Is cylindrical the default FRP shape?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">It's the most common and material-efficient shell geometry, selected for most standard storage unless a project needs a rectangular or custom footprint.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can a cylindrical tank be horizontal?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes — “cylindrical” refers to the shell, which can be built vertical or horizontal depending on the installation.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Other FRP / GRP Tanks Types</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a href="/services/tank-solutions/frp-grp-tanks/vertical-frp-tank" className="group flex items-center justify-between border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950">
              <span className="text-sm font-medium text-neutral-800 dark:text-white/80">Vertical FRP Tank</span>
              <ArrowUpRight size={16} className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25" />
            </a>
            <a href="/services/tank-solutions/frp-grp-tanks/horizontal-frp-tank" className="group flex items-center justify-between border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950">
              <span className="text-sm font-medium text-neutral-800 dark:text-white/80">Horizontal FRP Tank</span>
              <ArrowUpRight size={16} className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25" />
            </a>
            <a href="/services/tank-solutions/frp-grp-tanks/underground-frp-tank" className="group flex items-center justify-between border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950">
              <span className="text-sm font-medium text-neutral-800 dark:text-white/80">Underground FRP Tank</span>
              <ArrowUpRight size={16} className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
