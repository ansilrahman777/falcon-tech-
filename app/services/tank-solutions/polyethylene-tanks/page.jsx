import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Polyethylene (LLDPE / HDPE) Water & Chemical Tanks in Saudi Arabia",
  "description": "Rotomolded LLDPE and HDPE polyethylene tanks for water and chemical storage in Saudi Arabia — vertical, horizontal and underground — supplied by Falcon Technologies."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Polyethylene Tanks", "description": "Rotomolded LLDPE and HDPE tanks for water and chemical storage \u2014 vertical, horizontal and underground.", "serviceType": "Tank Solutions", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "LLDPE or HDPE \u2014 which should I choose?", "acceptedAnswer": {"@type": "Answer", "text": "Both are used for rotomolded tanks, and the better choice depends on the stored liquid, temperature and capacity. Tell us what you are storing and we recommend the suitable grade where polyethylene is appropriate."}}, {"@type": "Question", "name": "Are polyethylene tanks suitable for chemicals?", "acceptedAnswer": {"@type": "Answer", "text": "For many chemicals, yes \u2014 but not all. Compatibility depends on the chemical, concentration and temperature, so we check it before recommending polyethylene or an FRP alternative."}}, {"@type": "Question", "name": "What capacity can I get in polyethylene?", "acceptedAnswer": {"@type": "Answer", "text": "Polyethylene suits small to medium capacities. For larger volumes we usually recommend FRP/GRP or steel \u2014 share the capacity you need and we advise the best option."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Tank Solutions"
        title="Polyethylene Tanks"
        description="Rotomolded LLDPE and HDPE tanks for water and chemical storage — vertical, horizontal and underground."
        breadcrumb="Polyethylene Tanks"
        image="/assets/images/tank-solutions/heavy-duty_polyethylene_tanks_in_gulf_facility.png"
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
                LLDPE / HDPE Polyethylene Storage Tanks in Saudi Arabia
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Rotomolded polyethylene tanks are seamless, corrosion-free and practical for small to medium storage volumes. Falcon supplies LLDPE and HDPE tanks where they are the right fit, and recommends FRP or steel when capacity, temperature or chemical exposure calls for it.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Multi-layer rotomolded construction is available where the application calls for it. Final suitability is always confirmed against the stored liquid and site conditions.
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
              <Image src="/assets/images/tank-solutions/four_polyethylene_tank_configurations.png" alt="Polyethylene Tanks by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
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
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Seamless one-piece body</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Rotomolding produces a single moulded shell with no laminate joints to fail.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Corrosion-free</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Polyethylene does not rust, which suits water storage and many chemical duties.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Water and chemical duty</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Suitable for a wide range of liquids once compatibility has been confirmed.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Multiple orientations</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Vertical, horizontal and underground formats for different site layouts.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Straight material advice</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">If polyethylene is not the best choice for your liquid or capacity, we say so and propose an alternative.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Installation guidance</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Base, connection and installation guidance so the tank performs as designed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Types of Polyethylene Tanks</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Each configuration has its own page with the detail relevant to that type.</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/services/tank-solutions/polyethylene-tanks/vertical-pe-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/heavy-duty_polyethylene_tanks_in_gulf_facility.png" alt="Vertical PE Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Vertical PE Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">The standard rotomolded polyethylene tank shape for water and chemical storage.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/polyethylene-tanks/horizontal-pe-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/industrial_horizontal_polyethylene_tank_on_engineered_cradle.png" alt="Horizontal PE Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Horizontal PE Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">A lower-profile rotomolded tank for restricted-height installations or skid mounting.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/polyethylene-tanks/underground-pe-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/Industrial_Underground_Tank_Installation.png" alt="Underground PE Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Underground PE Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Buried polyethylene storage for smaller water and chemical volumes.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                View type
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <a href="/services/tank-solutions/polyethylene-tanks/multi-layer-pe-tank" className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/tank-solutions/premium_rotomolded_polyethylene_storage_tank.png" alt="Multi-Layer Rotomolded PE Tank" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Multi-Layer Rotomolded PE Tank</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">A multi-layer construction for applications needing extra barrier or UV protection.</p>
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
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Material</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">LLDPE / HDPE, where applicable</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Process</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Rotational molding, including multi-layer construction</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Orientation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Vertical, horizontal and underground</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Service</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Water, chemical and general liquid storage</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Best suited to</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Small to medium capacities — larger volumes typically move to FRP/GRP or steel</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Confirmation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Chemical compatibility and temperature checked before recommendation</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Commercial &amp; industrial buildings</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Water storage &amp; distribution</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Chemical dosing &amp; storage</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Construction &amp; infrastructure</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Irrigation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">From Enquiry to Supply</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Confirm liquid and capacity</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">What is stored, how much, at what temperature.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Check compatibility</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Polyethylene suitability confirmed, or an alternative material proposed.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Select model and fittings</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Orientation, outlets and accessories matched to the installation.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Supply and support</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Delivery with installation guidance and after-supply support.</p>
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
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Horizontal PE</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">10,000 L reference.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Vertical PE</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">15,000 L and 32,000 L references.</dd>
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
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">ASTM D1998-21</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Flat-bottom, upright, cylindrical, one-piece seamless rotationally molded PE tanks — not a buried- or pressure-service approval.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">NSF/ANSI/CAN 61</dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Health-effects criteria for materials in contact with drinking water — product-specific certification confirmed separately.</dd>
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
                LLDPE or HDPE — which should I choose?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Both are used for rotomolded tanks, and the better choice depends on the stored liquid, temperature and capacity. Tell us what you are storing and we recommend the suitable grade where polyethylene is appropriate.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Are polyethylene tanks suitable for chemicals?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">For many chemicals, yes — but not all. Compatibility depends on the chemical, concentration and temperature, so we check it before recommending polyethylene or an FRP alternative.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                What capacity can I get in polyethylene?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Polyethylene suits small to medium capacities. For larger volumes we usually recommend FRP/GRP or steel — share the capacity you need and we advise the best option.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
