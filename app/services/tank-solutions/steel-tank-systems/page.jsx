import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Steel Storage Tanks, Diesel Tanks & Skid Systems in Saudi Arabia",
  "description": "Falcon Technologies fabricates steel storage tanks, diesel tanks, supports and skids for industrial and fuel storage across Saudi Arabia and the GCC."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Steel Tank Systems", "description": "Fabricated steel tanks, supports and skids for diesel, fuel and industrial storage.", "serviceType": "Tank Solutions", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "When should I choose steel over FRP or polyethylene?", "acceptedAnswer": {"@type": "Answer", "text": "Steel is often chosen for larger fuel storage, high mechanical loads or where a site specification calls for it. For water, wastewater and many chemicals, FRP or polyethylene can be more corrosion-resistant. We recommend based on your application."}}, {"@type": "Question", "name": "Can you fabricate skid-mounted tanks?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Supports, skids and custom steel fabrication are part of our steel tank systems scope."}}, {"@type": "Question", "name": "How is corrosion handled on steel tanks?", "acceptedAnswer": {"@type": "Answer", "text": "Steel tanks can be protected with industrial coating or internal lining, and existing steel tanks can be lined or restored \u2014 see our Tank Restoration & Lining services."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Tank Solutions"
        title="Steel Tank Systems"
        description="Fabricated steel tanks, supports and skids for diesel, fuel and industrial storage."
        breadcrumb="Steel Tank Systems"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/services/tank-solutions"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowLeft size={13} />
                Tank Solutions
              </a>
              <h1 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                Fabricated Steel Tank Systems for Industrial Storage
              </h1>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Where strength, larger capacity or fuel duty call for it, Falcon fabricates steel tanks with the supports, skids and fittings your installation needs — from generator diesel tanks to industrial process and storage tanks.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Steel is fabricated where it is technically suitable; where another material serves the application better, we say so. Protective coating or lining can be added to extend service life in aggressive environments.
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
                href="/technical-library"
                className="inline-block border-b border-neutral-300 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/75"
              >
                Browse the Technical Library
              </a>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Steel Tank Systems by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                Tank Solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">What We Offer</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Custom fabrication</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Tanks made to your dimensions, nozzle layout and access constraints.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Diesel and fuel tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Generator and industrial fuel storage fabricated to the project specification.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Skids and supports</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Skid-mounted and supported arrangements fabricated with the tank.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Industrial process tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage and process vessels for industrial plants where steel suits the duty.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Corrosion protection options</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Industrial coating and internal lining to extend steel tank life.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Inspection and testing</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Visual, dimensional and thickness checks and leak testing where applicable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Types of Steel Tank Systems</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Each configuration has its own page with the detail relevant to that type.</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/services/tank-solutions/steel-tank-systems/fabricated-storage-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Fabricated Storage Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Fabricated Storage Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Custom-fabricated steel storage built to project drawings.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/steel-tank-systems/diesel-fuel-steel-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Diesel / Fuel Steel Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Diesel / Fuel Steel Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel construction for generator diesel and industrial fuel storage.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/steel-tank-systems/skid-mounted-tank-system" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Skid-Mounted Tank System" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Skid-Mounted Tank System</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">A tank and its supporting steelwork fabricated and delivered as one transportable unit.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/steel-tank-systems/industrial-process-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Industrial Process Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Industrial Process Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel vessels built for process duty within a plant, not just bulk storage.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Technical Snapshot</h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Product range</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Fabricated tanks, diesel tanks and industrial tanks</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Supporting structure</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Supports, skids and custom steel fabrication</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Duty</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Diesel, fuel, water and industrial liquids where suitable</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Configurations</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Aboveground and underground where suitable</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Corrosion protection</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Coating and lining options — see Tank Restoration &amp; Lining</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Documentation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">GA / shop drawings, inspection and testing per project specification</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Power &amp; utilities</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Oil &amp; gas</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Petrochemical &amp; chemical</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Construction &amp; infrastructure</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Commercial &amp; industrial buildings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">From Duty Review to Delivery</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Review duty and site</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Stored liquid, capacity, location and any client specification.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Engineer and draw</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">General arrangement and shop drawings issued for approval.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Fabricate and inspect</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Controlled fabrication with checks at defined inspection points.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Test and deliver</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Testing as applicable, then documented delivery.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Sizing</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">No fixed steel-tank capacity list is published. Each tank is fabricated to the project — workshop capability, code basis, QA and listing evidence are confirmed first, then nominal/working volume, dimensions, SG, temperature, support/foundation and site loads per model.</p>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Standards &amp; Compliance</h2>
          <dl className="mt-8 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">API 650 (13th Ed.)</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Welded oil-storage tanks within scope — verify design conditions, purchaser specification and current addenda.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">AWWA D100-21</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Welded carbon-steel tanks for water storage (not a diesel or process-tank code).</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">UL 142</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Listed steel aboveground tanks for flammable/combustible liquids — claim only for the exact listed model.</dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl border-l-2 border-brand pl-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">A standard reference is not proof of third-party certification. Falcon states “designed and manufactured to” a standard only when it is backed by the controlled design and QA file; chemical, potable-water and underground suitability require separate product-specific evidence. Saudi/GCC approvals (SASO/SABER, Civil Defense, environmental, municipal, utility and owner approvals) are project- and product-specific.</p>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Accessories &amp; Fittings</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Access / manway</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Inlet / outlet</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Overflow</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Vent</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Drain</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Level gauge / transmitter</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Ladder, platform &amp; handrails</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Lifting lugs</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Hold-downs / anchors</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Baffles</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Sample point</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Instrument ports</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Pump / filter / skid</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Leak monitoring</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Grounding / instrumentation</span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Interstitial monitoring (double-wall)</span>
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-neutral-400 dark:text-white/40">Nozzle size, material, reinforcement and orientation are set in the nozzle schedule for each tank. Accessories are fitted as the service requires.</p>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                When should I choose steel over FRP or polyethylene?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel is often chosen for larger fuel storage, high mechanical loads or where a site specification calls for it. For water, wastewater and many chemicals, FRP or polyethylene can be more corrosion-resistant. We recommend based on your application.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can you fabricate skid-mounted tanks?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes. Supports, skids and custom steel fabrication are part of our steel tank systems scope.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                How is corrosion handled on steel tanks?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel tanks can be protected with industrial coating or internal lining, and existing steel tanks can be lined or restored — see our Tank Restoration &amp; Lining services.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
