import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Water Storage Tanks in Saudi Arabia — Potable, Process & Fire Water",
  "description": "Water storage tanks for drinking, utility, process, fire and irrigation water in FRP/GRP, polyethylene or steel — engineered and supplied by Falcon Technologies in Saudi Arabia."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Water Tanks", "description": "Storage tanks for drinking, utility, process, fire and irrigation water \u2014 in FRP/GRP, polyethylene or steel.", "serviceType": "Tank Solutions", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What material is best for a potable water tank?", "acceptedAnswer": {"@type": "Answer", "text": "FRP/GRP and polyethylene are both widely used for potable water when the materials and construction suit potable contact. We confirm suitability and any required approvals against your project specification."}}, {"@type": "Question", "name": "Can water tanks be insulated?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Thermal insulation reduces solar heat gain and temperature swings, which is especially useful for aboveground and rooftop tanks in Saudi Arabia's climate. See our Thermal Insulation services."}}, {"@type": "Question", "name": "Can you supply underground water tanks?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Underground water tanks are available in FRP/GRP, polyethylene and steel, with foundation and anchoring details provided as part of the design."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Tank Solutions"
        title="Water Tanks"
        description="Storage tanks for drinking, utility, process, fire and irrigation water — in FRP/GRP, polyethylene or steel."
        breadcrumb="Water Tanks"
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
                Water Storage Tanks for Every Application
              </h1>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Whether you need drinking water storage for a building or process and fire water for an industrial plant, the right tank depends on capacity, location and water quality. Falcon supplies water tanks in FRP/GRP, polyethylene and steel and helps you choose between them.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Tanks come with the nozzles, manholes, supports and installation guidance your site needs, and can be configured aboveground, on a rooftop, inside a plant room or underground.
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
              <Image src="/assets/images/home/hero-slide-1.png" alt="Water Tanks by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
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
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Drinking water storage</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Tanks for buildings and facilities, with materials confirmed for potable use.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Process and utility water</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage for industrial process, cooling-related and utility supplies.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Fire water storage</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Dedicated tanks sized and fitted to the fire protection requirement.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Wastewater tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Corrosion-resistant tanks for wastewater and effluent handling.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Irrigation water</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage for landscape and agricultural irrigation supplies.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Insulated water tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Insulation to reduce solar heat gain on exposed tanks in a hot climate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Types of Water Tanks</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Each configuration has its own page with the detail relevant to that type.</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/services/tank-solutions/water-tanks/potable-water-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Drinking / Potable Water Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Drinking / Potable Water Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage built with materials suitable for potable contact.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/water-tanks/utility-water-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Utility Water Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Utility Water Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage for non-potable utility and general-purpose water use.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/water-tanks/process-water-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Process Water Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Process Water Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage sized and fitted for industrial process water supply.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/water-tanks/fire-water-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Fire Water Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Fire Water Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Dedicated storage sized and fitted for fire protection systems.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/water-tanks/irrigation-water-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Irrigation Water Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Irrigation Water Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Storage for landscape and agricultural irrigation supply.</p>
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
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Water types</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Drinking, utility, process, wastewater, fire and irrigation water</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Materials</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">FRP/GRP, polyethylene or steel — chosen per application</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Placement</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Aboveground, underground, rooftop, inside building or plant room</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Shapes</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Vertical, horizontal, cylindrical, rectangular and custom</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Potable duty</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Materials suitable for potable contact, confirmed per project</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Add-ons</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Thermal insulation to limit solar heat gain; lining and restoration for existing tanks</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Commercial &amp; industrial buildings</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Water &amp; wastewater plants</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Power &amp; utilities</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Construction &amp; infrastructure</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Irrigation</span>
              </div>
            <h2 className="mt-10 text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Referenced Standards</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">ASTM D3299</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">ASTM D4097</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">ASTM D1998</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">AS/NZS 4766</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">SASO requirements</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400 dark:text-white/35">
              Applied as applicable to the product, governing standard and project specification.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">From Requirement to Installation</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Confirm volume and water type</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Capacity, duty and any potable or fire-water requirement.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Choose material and layout</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">FRP/GRP, polyethylene or steel, and aboveground, rooftop or underground.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Fabricate and inspect</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Built and inspected to the approved drawing.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Support and hand over</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Installation guidance and documented handover.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                What material is best for a potable water tank?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">FRP/GRP and polyethylene are both widely used for potable water when the materials and construction suit potable contact. We confirm suitability and any required approvals against your project specification.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can water tanks be insulated?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes. Thermal insulation reduces solar heat gain and temperature swings, which is especially useful for aboveground and rooftop tanks in Saudi Arabia's climate. See our Thermal Insulation services.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can you supply underground water tanks?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes. Underground water tanks are available in FRP/GRP, polyethylene and steel, with foundation and anchoring details provided as part of the design.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
