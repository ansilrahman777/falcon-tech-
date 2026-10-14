import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Equipment Room, Control Room & Shelter Insulation in Saudi Arabia",
  "description": "Thermal insulation for electrical rooms, control rooms, telecom cabinets, equipment shelters and enclosed machinery areas in Saudi Arabia — Falcon Technologies."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Equipment Room Insulation", "description": "Insulation for electrical rooms, control rooms, telecom cabinets, equipment shelters and enclosed machinery areas.", "serviceType": "Thermal Insulation", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Will insulation replace air conditioning?", "acceptedAnswer": {"@type": "Answer", "text": "No. Insulation reduces the heat load on cooling \u2014 it works alongside your cooling system rather than replacing it."}}, {"@type": "Question", "name": "Is aerogel suitable for cabinets?", "acceptedAnswer": {"@type": "Answer", "text": "Its thin, lightweight profile suits cabinets and enclosures where space is limited. Suitability is confirmed against approved technical data for your application."}}, {"@type": "Question", "name": "Can rooms be insulated from inside or outside?", "acceptedAnswer": {"@type": "Answer", "text": "Both can be considered. The better option depends on the enclosure, access and requirements, and is confirmed during the survey."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Thermal Insulation"
        title="Equipment Room Insulation"
        description="Insulation for electrical rooms, control rooms, telecom cabinets, equipment shelters and enclosed machinery areas."
        breadcrumb="Equipment Room Insulation"
        image="/assets/images/services/equipment-room-insulation.png"
        imageAlt="Equipment Room Insulation by Falcon Technologies in Saudi Arabia"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/services/thermal-insulation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowLeft size={13} />
                Thermal Insulation
              </a>
              <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                Equipment Room and Shelter Insulation
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Electrical rooms, control rooms and telecom shelters house equipment that performs best within a stable temperature range. Insulating the enclosure reduces the heat load on cooling systems and helps hold temperatures steadier through the day.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Falcon insulates enclosed equipment spaces and cabinets, using thin, lightweight systems where space is limited.
              </p>
              </div>
            <p className="mt-6 max-w-xl border-l-2 border-brand pl-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
              Actual insulation performance depends on product grade, substrate, thickness, ambient conditions, surface preparation and application conditions. Final performance shall be based on approved technical data and project requirements.
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
              <Image loading="eager" src="/assets/images/services/equipment-room-insulation.png" alt="Equipment Room Insulation by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                Thermal Insulation
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
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Electrical room insulation</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Reducing heat gain into rooms housing switchgear and panels.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Control room insulation</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Steadier temperatures for control and instrumentation spaces.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Telecom cabinets and shelters</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Insulation for cabinets and shelters exposed to the sun.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Machinery enclosures</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Insulation for enclosed machinery areas.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Space-saving aerogel</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Thin systems where every centimetre of space matters.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Reduced cooling load</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Less heat for the cooling system to remove.</p>
            </div>
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
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Spaces</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Electrical rooms, control rooms, telecom cabinets, equipment shelters and enclosed machinery areas</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Purpose</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Reduce heat gain and stabilise internal temperature</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Systems</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Conventional and aerogel insulation</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Considerations</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Available space, weight, fire requirements and access</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Surface preparation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Surfaces cleaned and prepared before application</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Inspection</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Thickness and finish checked and documented</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Power &amp; utilities</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Oil &amp; gas</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Telecom infrastructure</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Construction &amp; infrastructure</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Commercial &amp; industrial buildings</span>
              </div>
            <h2 className="mt-10 text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Referenced Standards</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">SASO requirements</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">Applicable ISO standards</span>
              <span className="rounded-sm bg-ink px-3 py-1.5 text-xs font-medium text-white">Client &amp; project specifications</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400 dark:text-white/35">
              Applied as applicable to the product, governing standard and project specification.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">How We Insulate an Equipment Room</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Survey the enclosure</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Construction, exposure, space and access.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Select the system</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Material and thickness with any fire requirement.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Prepare and apply</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Applied to the agreed surfaces per method statement.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Inspect and record</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Finish checked and documented.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Will insulation replace air conditioning?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">No. Insulation reduces the heat load on cooling — it works alongside your cooling system rather than replacing it.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Is aerogel suitable for cabinets?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Its thin, lightweight profile suits cabinets and enclosures where space is limited. Suitability is confirmed against approved technical data for your application.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Can rooms be insulated from inside or outside?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Both can be considered. The better option depends on the enclosure, access and requirements, and is confirmed during the survey.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
