import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Chemical Storage Tanks in Saudi Arabia",
  "description": "Chemical-resistant storage tanks in FRP, PE/XLPE or lined/alloy steel, with construction selected from your exact chemical, concentration and operating conditions. Falcon Technologies, Saudi Arabia."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Chemical Tanks", "description": "Chemical-resistant storage with construction selected from your exact chemical, concentration and operating conditions \u2014 not from the product name.", "serviceType": "Tank Solutions", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which material is best for my chemical?", "acceptedAnswer": {"@type": "Answer", "text": "No single resin or polymer is universally chemical-resistant. The right construction \u2014 FRP with a selected resin, PE/XLPE, or lined/alloy steel \u2014 is chosen from your exact chemical, concentration, temperature and operating conditions, confirmed against supplier evidence."}}, {"@type": "Question", "name": "Why do you need so much detail about the chemical?", "acceptedAnswer": {"@type": "Answer", "text": "Resistance depends on concentration, temperature, impurities, vapour exposure and cleaning \u2014 and on every wetted part, not just the shell. The nozzles, seals, gaskets and vents are assessed too, since any one can be the weak point."}}, {"@type": "Question", "name": "Can you confirm suitability from the chemical name alone?", "acceptedAnswer": {"@type": "Answer", "text": "No. Suitability is service-specific and is only stated once the exact tank system and duty have written supplier or manufacturer confirmation. A chemical name or a past enquiry is not a compatibility approval."}}, {"@type": "Question", "name": "Do you provide a compatibility record?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 a compatibility schedule capturing the chemical, concentration, temperature, cycles, cleaning and containment is documented and drives the material selection."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Tank Solutions"
        title="Chemical Tanks"
        description="Chemical-resistant storage with construction selected from your exact chemical, concentration and operating conditions — not from the product name."
        breadcrumb="Chemical Tanks"
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
                Chemical Storage Tanks, Matched to the Chemical
              </h1>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                No single resin or polymer is universally chemical-resistant, so Falcon keeps one chemical-tank category and selects the construction from the exact chemical and operating conditions rather than implying one tank suits every chemical.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Candidate systems include FRP with a selected resin and corrosion barrier, PE / XLPE, or lined and alloy steel. Compatibility is assessed across the whole system — the shell, vapour space, nozzles, seals, gaskets, vents and cleaning process — because any one of these can be the weak point.
              </p>
              </div>
            <p className="mt-6 max-w-xl border-l-2 border-brand pl-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
              Chemical suitability is service-specific and must be confirmed with written supplier or manufacturer evidence for the exact tank system and duty before any tank is ordered or installed. Prior enquiry records are not compatibility approvals.
            </p>
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
              <Image src="/assets/images/home/hero-slide-1.png" alt="Chemical Tanks by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
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
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Material recommendation</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">FRP, PE/XLPE or lined/alloy steel proposed from your exact chemical and operating conditions, not a default.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Full-system compatibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Compatibility checked across shell, vapour space, nozzles, seals, gaskets, vents and the cleaning process.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Chemical-resistant FRP</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Selected resin and corrosion barrier over a structural laminate, with resin family, barrier and cure specified.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">PE / XLPE where suitable</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Considered where chemical, temperature, density and stress data confirm it, accounting for permeation and stress cracking.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Lined or alloy steel</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Qualified internal lining or corrosion-resistant alloy with an inspection and repair plan for welds and fittings.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Compatibility schedule</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">A documented record of chemical, concentration, temperature, cycles and cleaning that drives the material choice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Construction Options</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Candidate constructions for this category — the right one is selected per project from the service conditions.</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Chemical-resistant FRP" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Chemical-resistant FRP</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">A selected thermoset resin and corrosion barrier over a structural laminate, suited to some chemical duties — resistance depends on concentration, temperature, impurities, vapour exposure and cleaning.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="PE / XLPE options" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">PE / XLPE options</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">LLDPE / HDPE / XLPE may be candidates only where chemical, temperature, density, stress and tank-model data confirm compatibility, considering permeation, swelling and stress cracking.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image src="/assets/images/home/hero-slide-1.png" alt="Lined or alloy steel" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Lined or alloy steel</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steel with a qualified internal lining or a corrosion-resistant alloy for selected duties — the lining, welds, joints, edges and fittings all need compatible materials and an inspection/repair plan.</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Compatibility Schedule — What We Review</h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Chemical</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Name / CAS, concentration range and impurities</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Temperature</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Continuous and intermittent operating temperature</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Pressure</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Pressure / vacuum and exposure cycle</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Operation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Agitation, fill/empty rate and cleaning chemicals</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Containment</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Vent handling, design life and secondary containment</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Whole system</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Shell, vapour space, nozzles, seals, gaskets and vents assessed together</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Petrochemical &amp; chemical plants</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Oil &amp; gas</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Water treatment &amp; dosing</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing &amp; process facilities</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Power &amp; utilities</span>
              </div>
            <h2 className="mt-10 text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Referenced Standards</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">ASTM D3299</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">ASTM D4097 (confirm current basis)</span>
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
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">How We Specify a Chemical Tank</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Collect the duty data</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Chemical name/CAS, concentration, temperature, pressure, cycles, cleaning and containment.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Confirm compatibility</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">The exact tank system and duty checked against supplier/manufacturer evidence — the whole system, not just the shell.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Select construction</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">FRP, PE/XLPE or lined/alloy steel chosen for the confirmed service.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Fabricate and inspect</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Built with material traceability and inspection to the agreed QA plan.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">05</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Document and hand over</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Compatibility statements, QA records and maintenance guidance issued at handover.</p>
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
                Which material is best for my chemical?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">No single resin or polymer is universally chemical-resistant. The right construction — FRP with a selected resin, PE/XLPE, or lined/alloy steel — is chosen from your exact chemical, concentration, temperature and operating conditions, confirmed against supplier evidence.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Why do you need so much detail about the chemical?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Resistance depends on concentration, temperature, impurities, vapour exposure and cleaning — and on every wetted part, not just the shell. The nozzles, seals, gaskets and vents are assessed too, since any one can be the weak point.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can you confirm suitability from the chemical name alone?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">No. Suitability is service-specific and is only stated once the exact tank system and duty have written supplier or manufacturer confirmation. A chemical name or a past enquiry is not a compatibility approval.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Do you provide a compatibility record?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes — a compatibility schedule capturing the chemical, concentration, temperature, cycles, cleaning and containment is documented and drives the material selection.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
