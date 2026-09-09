import Link from "next/link";
import { Factory, ArrowUpRight, Flame, ShieldCheck, Wrench } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "FRP, Polyethylene & Steel Tank Manufacturer in Saudi Arabia | Falcon Technologies",
  description:
    "Falcon Technologies designs and fabricates FRP/GRP, polyethylene and steel storage tanks for water, diesel, fuel and chemical applications across Saudi Arabia and the GCC.",
};

const specs = [
  ["FRP / GRP tanks", "Fiberglass tanks for potable water, process water, wastewater, diesel and chemical storage"],
  ["Polyethylene tanks", "LLDPE / HDPE rotomolded tanks, ideal for smaller water and chemical storage needs"],
  ["Steel tank systems", "Fabricated steel tanks with supports, skids and custom configurations for fuel and industrial use"],
  ["Build options", "Vertical, horizontal, underground, aboveground, cylindrical, rectangular and custom-shaped tanks"],
];

const children = [
  { label: "FRP / GRP Tanks", href: "/services/tank-solutions/frp-grp-tanks" },
  { label: "Polyethylene Tanks", href: "/services/tank-solutions/polyethylene-tanks" },
  { label: "Steel Tank Systems", href: "/services/tank-solutions/steel-tank-systems" },
  { label: "Water Tanks", href: "/services/tank-solutions/water-tanks" },
  { label: "Chemical Tanks", href: "/services/tank-solutions/chemical-tanks" },
  { label: "Diesel / Fuel Tanks", href: "/services/tank-solutions/diesel-fuel-tanks" },
  { label: "Underground Tanks", href: "/services/tank-solutions/underground-tanks" },
];

const applications = [
  "Oil & Gas",
  "Petrochemical & Chemical",
  "Water & Wastewater",
  "Power & Utilities",
  "Manufacturing",
  "Construction & Infrastructure",
];

const standards = ["ASTM D3299", "ASTM D4097", "ASTM D1998", "AS/NZS 4766", "SASO Requirements"];

const process = [
  { step: "01", title: "Requirement Review", desc: "We start with what you're storing — liquid type, concentration, temperature and installation site." },
  { step: "02", title: "Material Selection", desc: "FRP/GRP, polyethylene or steel, matched to the application and expected service life." },
  { step: "03", title: "Design & Drawings", desc: "GA drawings, nozzle placement, supports and foundation requirements confirmed before fabrication." },
  { step: "04", title: "Manufacturing & Inspection", desc: "Built under controlled conditions with checks at every production stage." },
  { step: "05", title: "Testing & Handover", desc: "Hydrostatic or dimensional testing as required, followed by documented handover." },
];

const related = [
  { label: "Thermal Insulation", icon: Flame, href: "/services/thermal-insulation" },
  { label: "Tank Restoration & Lining", icon: ShieldCheck, href: "/services/tank-restoration-lining" },
  { label: "Industrial Services", icon: Wrench, href: "/services/industrial-services" },
];

const faqs = [
  {
    q: "What size tanks does Falcon Technologies manufacture?",
    a: "Falcon fabricates tanks from a few hundred liters up to large industrial capacities in FRP/GRP, polyethylene and steel, sized to your site and application rather than a fixed catalogue range.",
  },
  {
    q: "Which tank material is best for chemical storage?",
    a: "FRP/GRP is the most common choice for chemical storage because resin systems can be matched to the specific chemical, concentration and operating temperature. Our engineers confirm the exact specification before fabrication.",
  },
  {
    q: "Can tanks be installed underground?",
    a: "Yes. Falcon supplies underground tank configurations in FRP/GRP, polyethylene and steel, with foundation and installation guidance provided as part of the design package.",
  },
  {
    q: "Do you supply tanks for diesel and fuel storage?",
    a: "Yes — Falcon fabricates aboveground and underground diesel and fuel tanks in steel or FRP/GRP, including generator diesel tanks and industrial fuel storage.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tank Manufacturing",
  provider: { "@type": "Organization", name: "Falcon Technologies" },
  areaServed: "Saudi Arabia",
  name: "Tank Solutions",
  description:
    "FRP/GRP, polyethylene and steel tank manufacturing for water, diesel, fuel and chemical storage.",
};

export default function TankSolutionsPage() {
  return (
    <div className="w-full overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service — TS"
        title="Tank Solutions"
        description="FRP/GRP, polyethylene and steel tanks engineered around what you store, not a fixed catalogue size."
        breadcrumb="Tank Solutions"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:px-0 lg:py-24">
          <div>
            <Factory size={32} strokeWidth={1.3} className="text-brand" />
            <h1 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
              FRP, Polyethylene & Steel Tanks, Built for Your Application
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              As an FRP tank manufacturer serving Saudi Arabia and the wider
              GCC, Falcon reviews the liquid being stored, its concentration
              and temperature, and the installation site before recommending
              a construction material and configuration — rather than
              starting from a standard size chart.
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
              Request a Quote for Tank Solutions
            </Link>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-xs font-semibold text-white">TS</span>
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
            Industries That Rely on Falcon Tanks
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
            From Requirement to Handover
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
