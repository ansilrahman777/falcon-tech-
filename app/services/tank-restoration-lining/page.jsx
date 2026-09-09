import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Factory, Flame, Wrench } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Tank Restoration & FRP Lining Services in Saudi Arabia | Falcon Technologies",
  description:
    "Falcon Technologies restores damaged tanks and applies FRP, chemical-resistant and waterproof lining systems that extend asset life across Saudi Arabia and the GCC.",
};

const specs = [
  ["FRP restoration", "Crack restoration, leak rectification, delamination, nozzle and manhole repair"],
  ["Concrete rehabilitation", "Crack treatment, FRP lining, waterproofing and chemical-resistant lining for concrete tanks"],
  ["Tank lining systems", "FRP/GRP, chemical-resistant, concrete, steel and waterproof lining"],
  ["Corrosion protection", "Surface preparation, coating and protective lining to extend asset life"],
];

const children = [
  { label: "Tank Restoration", href: "/services/tank-restoration-lining/tank-restoration" },
  { label: "Tank Rehabilitation", href: "/services/tank-restoration-lining/tank-rehabilitation" },
  { label: "FRP / GRP Lining", href: "/services/tank-restoration-lining/frp-grp-lining" },
  { label: "Chemical-Resistant Lining", href: "/services/tank-restoration-lining/chemical-resistant-lining" },
  { label: "Waterproof Lining", href: "/services/tank-restoration-lining/waterproof-lining" },
  { label: "Corrosion Protection", href: "/services/tank-restoration-lining/corrosion-protection" },
];

const applications = [
  "Oil & Gas",
  "Petrochemical & Chemical",
  "Water & Wastewater",
  "Power & Utilities",
  "Manufacturing",
];

const standards = ["ASTM D3299", "ASTM D4097", "ASTM D1998", "AS/NZS 4766", "SASO Requirements"];

const process = [
  { step: "01", title: "Condition Assessment", desc: "Visual and dimensional inspection establishes the extent of damage before any work begins." },
  { step: "02", title: "Repair Method Selection", desc: "Restoration, rehabilitation or lining is matched to the substrate and service conditions." },
  { step: "03", title: "Surface Preparation", desc: "The substrate is cleaned and prepared ahead of repair or lining application." },
  { step: "04", title: "Repair / Lining Application", desc: "Crack repair, reinforcement or lining is applied per the approved method statement." },
  { step: "05", title: "Inspection & Testing", desc: "Barcol hardness, holiday or leak testing as applicable, followed by handover." },
];

const related = [
  { label: "Tank Solutions", icon: Factory, href: "/services/tank-solutions" },
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Industrial Services", icon: Wrench, href: "/services/industrial-services" },
];

const faqs = [
  {
    q: "Is it cheaper to restore a tank than replace it?",
    a: "In most cases restoration and lining cost significantly less than replacement, provided the structural condition allows it. A site inspection confirms whether restoration is the right route for your tank.",
  },
  {
    q: "What causes tank leaks and cracks?",
    a: "Common causes include age-related delamination, chemical attack, structural stress and nozzle or manhole seal failure. Our inspection identifies the root cause before recommending a repair method.",
  },
  {
    q: "How is the right lining system chosen?",
    a: "Lining selection depends on the stored product, substrate material, operating temperature and required service life — FRP, chemical-resistant, waterproof and steel lining are each suited to different conditions.",
  },
  {
    q: "Can concrete tanks be rehabilitated?",
    a: "Yes — Falcon rehabilitates concrete tanks through crack treatment, FRP lining, waterproofing and chemical-resistant lining, restoring them to service without full reconstruction.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tank Restoration and Lining",
  provider: { "@type": "Organization", name: "Falcon Technologies" },
  areaServed: "Saudi Arabia",
  name: "Tank Restoration & Lining",
  description:
    "FRP tank restoration, concrete rehabilitation and chemical-resistant lining systems.",
};

export default function TankRestorationLiningPage() {
  return (
    <div className="w-full overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service — TR"
        title="Tank Restoration & Lining"
        description="Crack rectification, structural reinforcement and lining systems that extend the service life of existing assets."
        breadcrumb="Tank Restoration & Lining"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:px-0 lg:py-24">
          <div>
            <ShieldCheck size={32} strokeWidth={1.3} className="text-brand" />
            <h1 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
              FRP Tank Restoration & Lining That Extends Asset Life
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Rather than replacing a damaged tank outright, Falcon restores
              and re-lines it back to service — repairing cracks, leaks and
              structural damage, then applying a lining system matched to
              the stored product, substrate and required service life.
            </p>

            <dl className="mt-10 max-w-xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              {specs.map(([term, detail]) => (
                <div key={term} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.6fr] sm:gap-4">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">{term}</dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/50">{detail}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/request-a-quote"
              className="mt-10 inline-block border-b border-brand text-sm font-semibold text-brand transition-colors hover:border-brand-dark hover:text-brand-dark"
            >
              Request a Quote for Tank Restoration & Lining
            </Link>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-xs font-semibold text-white">TR</span>
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
            Industries That Rely on Falcon Restoration
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
            How We Restore a Tank
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
