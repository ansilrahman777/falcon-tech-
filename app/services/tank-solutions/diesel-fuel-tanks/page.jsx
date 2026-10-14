import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Diesel & Fuel Storage Tanks in Saudi Arabia",
  "description": "Generator diesel tanks, underground diesel tanks, aboveground fuel tanks and industrial fuel storage in steel or FRP/GRP — Falcon Technologies, Saudi Arabia."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Diesel / Fuel Tanks", "description": "Generator diesel tanks, underground diesel tanks and industrial fuel storage in steel or FRP/GRP.", "serviceType": "Tank Solutions", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Should a diesel tank be steel or FRP?", "acceptedAnswer": {"@type": "Answer", "text": "Both are used. Steel is common for larger and higher-load fuel storage; FRP/GRP offers corrosion resistance, particularly underground. We recommend based on capacity, location and specification."}}, {"@type": "Question", "name": "Do you supply underground diesel tanks?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Underground diesel tanks are available with the anchoring, foundation and installation details needed for the ground conditions."}}, {"@type": "Question", "name": "Can you make a tank for a generator set?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Generator diesel tanks are part of our scope and are sized and fitted to the generator and site requirement."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Tank Solutions"
        title="Diesel / Fuel Tanks"
        description="Generator diesel tanks, underground diesel tanks and industrial fuel storage in steel or FRP/GRP."
        breadcrumb="Diesel / Fuel Tanks"
        image="/assets/images/tank-solutions/fuel_storage_solutions_industrial_yard.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/services/tank-solutions"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowLeft size={13} />
                Tank Solutions
              </a>
              <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                Diesel and Fuel Tanks for Industrial and Commercial Sites
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Reliable fuel storage keeps generators, plant and fleets running. Falcon supplies diesel and fuel tanks for generator sets, underground installations and larger industrial storage, in steel or FRP/GRP depending on capacity, location and specification.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Fuel storage is governed by client and regulatory requirements, so tank design, fittings and installation details are confirmed against your project specification before fabrication.
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
              <Image loading="eager" src="/assets/images/tank-solutions/fuel_storage_solutions_industrial_yard.png" alt="Diesel / Fuel Tanks by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                Tank Solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">What We Offer</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Generator diesel tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Tanks sized and fitted for generator sets and standby power.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Underground diesel tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Buried tanks with anchoring, foundation and installation details.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Aboveground fuel tanks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Aboveground storage for site and industrial fuel supply.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Industrial fuel storage</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Larger fuel storage fabricated to the project specification.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Skids and supports</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Supports and skid arrangements fabricated with the tank.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Inspection and leak testing</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Checks and testing as applicable before delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Types of Diesel / Fuel Tanks</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Each configuration has its own page with the detail relevant to that type.</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/services/tank-solutions/diesel-fuel-tanks/generator-diesel-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/industrial_day_tank_beside_standby_generator.png" alt="Generator Diesel Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Generator Diesel Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Sized and fitted for standby generator fuel supply.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/diesel-fuel-tanks/underground-diesel-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/forest_green_underground_diesel_tank.png" alt="Underground Diesel Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Underground Diesel Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Buried fuel storage engineered for soil and groundwater conditions.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/diesel-fuel-tanks/aboveground-fuel-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/modern_uae_diesel_storage_tank.png" alt="Aboveground Fuel Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Aboveground Fuel Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Surface-mounted fuel storage for straightforward access and maintenance.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/diesel-fuel-tanks/industrial-fuel-storage-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/industrial_diesel_tank_and_transfer_pump_skid.png" alt="Industrial Fuel Storage Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Industrial Fuel Storage Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Larger-volume fuel storage for plant and fleet operations.</p>
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
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Technical Snapshot</h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Tank types</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Generator diesel tanks, underground diesel tanks, aboveground fuel tanks, industrial fuel storage</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Materials</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel or FRP/GRP, chosen per application</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Fittings</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Nozzles, manholes, vents and level connections per drawing</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Installation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Aboveground, underground or skid-mounted where suitable</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Testing</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Leak and hydrostatic testing where applicable</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Requirements</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Built to client, project and applicable regulatory specifications</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Power &amp; utilities</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Oil &amp; gas</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing plants</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Construction &amp; infrastructure</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Commercial &amp; industrial buildings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">From Duty Review to Delivery</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Confirm capacity and duty</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Fuel type, volume, location and requirements.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Engineer and specify</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Material, fittings and drawings agreed before fabrication.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Fabricate and inspect</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Built and inspected to the approved drawing.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Test and deliver</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Leak or hydrostatic testing as applicable, then documented delivery.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Reference Sizes</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Documented configurations we can reference as a starting point — confirmed per project, not a committed availability.</p>

          <dl className="mt-8 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Underground diesel (FRP)</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">20,000 L — Ø2,500 mm × 4,350 mm long; 30,000 L — Ø2,500 mm × 6,400 mm long.</dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl border-l-2 border-brand pl-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">Indicative reference configurations from prior project and design context — not a committed catalogue range or current availability. Final capacity and dimensions are confirmed against the approved drawing and QA file for each project.</p>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Standards &amp; Compliance</h2>
          <dl className="mt-8 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">UL 142</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel aboveground tanks for flammable/combustible liquids — listing applies to the exact model.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">UL 58</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel underground tanks for flammable/combustible liquids.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">UL 1316</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Fibre-reinforced underground tanks for flammable/combustible liquids.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">API 650</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Welded oil-storage tanks within scope — not a substitute for UST product listings.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">ISO 28300</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Venting of atmospheric and low-pressure petroleum storage tanks — confirm current edition and project basis.</dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl border-l-2 border-brand pl-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">A standard reference is not proof of third-party certification. Falcon states “designed and manufactured to” a standard only when it is backed by the controlled design and QA file; chemical, potable-water and underground suitability require separate product-specific evidence. Saudi/GCC approvals (SASO/SABER, Civil Defense, environmental, municipal, utility and owner approvals) are project- and product-specific.</p>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
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
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Should a diesel tank be steel or FRP?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Both are used. Steel is common for larger and higher-load fuel storage; FRP/GRP offers corrosion resistance, particularly underground. We recommend based on capacity, location and specification.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Do you supply underground diesel tanks?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes. Underground diesel tanks are available with the anchoring, foundation and installation details needed for the ground conditions.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can you make a tank for a generator set?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes. Generator diesel tanks are part of our scope and are sized and fitted to the generator and site requirement.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
