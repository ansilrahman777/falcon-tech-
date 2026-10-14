import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  "title": "Industrial Equipment Support Services in Saudi Arabia",
  "description": "On-site industrial equipment support in Saudi Arabia — installation assistance, servicing and technical help within Falcon's approved scope. Falcon Technologies."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Equipment Support", "description": "On-site support for industrial equipment \u2014 installation assistance, servicing and technical help within Falcon's approved scope.", "serviceType": "Industrial Services", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What kind of equipment support do you provide?", "acceptedAnswer": {"@type": "Answer", "text": "Installation assistance, servicing support and on-site technical help, within Falcon's approved scope. Send the details and we confirm what we can support."}}, {"@type": "Question", "name": "Do you work with other contractors?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Support is coordinated with your team, consultants and other contractors on site."}}, {"@type": "Question", "name": "How is the scope defined?", "acceptedAnswer": {"@type": "Answer", "text": "The scope, responsibilities and limits are agreed in writing before work begins."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Industrial Services"
        title="Equipment Support"
        description="On-site support for industrial equipment — installation assistance, servicing and technical help within Falcon's approved scope."
        breadcrumb="Equipment Support"
        image="/assets/images/services/equipment-support.png"
        imageAlt="Equipment Support by Falcon Technologies in Saudi Arabia"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/services/industrial-services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowLeft size={13} />
                Industrial Services
              </a>
              <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                Industrial Equipment Support
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Equipment projects and operations often need extra hands and know-how. Falcon provides equipment support to help install, service and keep industrial equipment operating, working alongside your team and contractors.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Support is provided only within the scope Falcon is technically equipped, licensed and authorized to execute, and is defined with you before work starts.
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
              <Image loading="eager" src="/assets/images/services/equipment-support.png" alt="Equipment Support by Falcon Technologies in Saudi Arabia" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                Industrial Services
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
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Installation support</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Assistance positioning and connecting equipment.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Servicing support</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Help with routine servicing and inspections.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Technical assistance</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Experienced people on site to troubleshoot.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Project support</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Support for installation and shutdown work.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Clear scope</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Responsibilities and limits agreed before we start.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">Records</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Work carried out documented as agreed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">Support Scope</h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Installation assistance</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Positioning, connection and installation support</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Servicing</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Routine servicing and inspection support</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Technical support</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">On-site technical help and troubleshooting</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Coordination</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Working with your team, consultants and contractors</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Scope control</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Defined in advance and limited to approved capability</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">Documentation</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">Work records and reports as agreed</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">Where It&rsquo;s Used</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Manufacturing</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Commercial &amp; industrial buildings</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Oil &amp; gas</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Power &amp; utilities</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">Construction &amp; infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">How We Provide Support</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Understand the requirement</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Equipment, task and site conditions.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Agree the scope</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Support defined within approved capability.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Provide support</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Work carried out on site.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">Record and hand over</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">Records issued as agreed.</p>
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
                What kind of equipment support do you provide?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Installation assistance, servicing support and on-site technical help, within Falcon's approved scope. Send the details and we confirm what we can support.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                Do you work with other contractors?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">Yes. Support is coordinated with your team, consultants and other contractors on site.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                How is the scope defined?
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">The scope, responsibilities and limits are agreed in writing before work begins.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
