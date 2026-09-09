import Link from "next/link";
import { Wrench, ArrowUpRight, Factory, Flame, ShieldCheck } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Industrial Services & Chiller Installation in Saudi Arabia | Falcon Technologies",
  description:
    "Falcon Technologies provides tank inspection, industrial coating, survey and scanning, mechanical maintenance, and chiller installation and maintenance across Saudi Arabia, including Dammam.",
};

const specs = [
  ["Tank inspection & coating", "Visual, dimensional and thickness inspection with industrial coating and waterproofing"],
  ["Survey & scanning", "3D scanning and survey support for existing assets and sites"],
  ["Mechanical maintenance", "Mechanical maintenance and equipment support across site utilities"],
  ["Chiller installation & maintenance", "New installation, commissioning, preventive maintenance, troubleshooting and service reports"],
];

const children = [
  { label: "Tank Inspection", href: "/services/industrial-services/tank-inspection" },
  { label: "Industrial Coating", href: "/services/industrial-services/industrial-coating" },
  { label: "Survey & Scanning", href: "/services/industrial-services/survey-scanning" },
  { label: "Mechanical Maintenance", href: "/services/industrial-services/mechanical-maintenance" },
  { label: "Equipment Support", href: "/services/industrial-services/equipment-support" },
  { label: "Chiller Installation & Maintenance", href: "/services/industrial-services/chiller-installation-maintenance" },
];

const applications = [
  "Manufacturing",
  "Commercial & Industrial Buildings",
  "Oil & Gas",
  "Power & Utilities",
  "Construction & Infrastructure",
  "Food & Beverage",
];

const standards = [
  "Manufacturer Service Manuals",
  "Approved Service Procedures",
  "Project Specifications",
  "Relevant Regulatory Requirements",
];

const process = [
  { step: "01", title: "Scope Review", desc: "Equipment make/model, capacity, operating condition and service history are reviewed first." },
  { step: "02", title: "Service Plan", desc: "Installation, maintenance or inspection scope is confirmed against manufacturer requirements." },
  { step: "03", title: "Execution", desc: "Work is carried out within Falcon's approved and authorized scope." },
  { step: "04", title: "Inspection & Testing", desc: "Operating parameters and performance are checked against requirements." },
  { step: "05", title: "Reports & Handover", desc: "A service or inspection report is issued, with after-service support available." },
];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Tank Restoration & Lining", icon: ShieldCheck, href: "/services/tank-restoration-lining" },
];

const faqs = [
  {
    q: "Do you handle chiller maintenance in Dammam and the Eastern Province?",
    a: "Yes — Falcon provides chiller installation, commissioning and preventive maintenance across the Eastern Province, including Dammam, within our approved and authorized scope.",
  },
  {
    q: "What's included in a preventive maintenance visit?",
    a: "A typical visit covers inspection of operating condition and key parameters, oil, filter and consumable checks, leak inspection, and a documented service report — scope varies by chiller model and manufacturer requirements.",
  },
  {
    q: "Can you inspect tanks without taking them out of service?",
    a: "Many inspection methods — visual, dimensional and thickness checks — can be carried out with minimal disruption. Where a tank must be taken offline, we plan the scope to minimize downtime.",
  },
  {
    q: "Do you only service equipment you're authorized to work on?",
    a: "Yes — Falcon only advertises and performs industrial and chiller services it is technically equipped, licensed and authorized to execute, and works to manufacturer procedures where applicable.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Industrial Services",
  provider: { "@type": "Organization", name: "Falcon Technologies" },
  areaServed: "Saudi Arabia",
  name: "Industrial Services",
  description:
    "Tank inspection, industrial coating, mechanical maintenance and chiller installation and maintenance.",
};

export default function IndustrialServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service — IS"
        title="Industrial Services"
        description="Inspection, mechanical maintenance and chiller installation & maintenance delivered by a single accountable team."
        breadcrumb="Industrial Services"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:px-0 lg:py-24">
          <div>
            <Wrench size={32} strokeWidth={1.3} className="text-brand" />
            <h1 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
              Industrial Site Support, Plus Chiller Installation & Maintenance
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Beyond tanks, Falcon supports the wider industrial site —
              inspection, coating, survey and scanning, mechanical
              maintenance and equipment support — plus new chiller
              installation, commissioning, scheduled preventive maintenance
              and troubleshooting, all within our approved and authorized
              scope.
            </p>

            <dl className="mt-10 max-w-xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              {specs.map(([term, detail]) => (
                <div key={term} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.6fr] sm:gap-4">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">{term}</dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/50">{detail}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-xl text-xs leading-relaxed text-neutral-400 dark:text-white/35">
              Falcon only advertises industrial and chiller services it is
              technically equipped, licensed and authorized to execute.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-block border-b border-brand text-sm font-semibold text-brand transition-colors hover:border-brand-dark hover:text-brand-dark"
            >
              Request a Quote for Industrial Services
            </Link>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-xs font-semibold text-white">IS</span>
            <h2 className="mt-5 text-xl font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">What&rsquo;s Included</h2>
            <ul className="mt-6 divide-y divide-neutral-200 dark:divide-white/10">
              {children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="group flex items-center justify-between gap-4 py-3.5 text-sm text-neutral-700 transition-colors hover:text-brand dark:text-white/70"
                  >
                    {child.label}
                    <ArrowUpRight size={15} className="shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand dark:text-white/25" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            Industries That Rely on Falcon Support
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {applications.map((a) => (
              <div key={a} className="border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 dark:border-white/10 dark:bg-neutral-950 dark:text-white/70">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            How We Deliver Service
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((p) => (
              <li key={p.step} className="border-t border-neutral-200 pt-4 dark:border-white/10">
                <span className="text-sm font-semibold text-brand">{p.step}</span>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">{f.q}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-0">
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-neutral-400 dark:text-white/40">
            Referenced Standards
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {standards.map((s) => (
              <span key={s} className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0">
          <h2 className="max-w-md text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            Related Services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} strokeWidth={1.4} className="text-steel dark:text-white/40" />
                    <span className="text-sm font-medium text-neutral-800 dark:text-white/80">{r.label}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand dark:text-white/25" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <StandardsBar />
      <CTASection />
    </div>
  );
}
