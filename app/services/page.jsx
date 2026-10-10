import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import StandardsBar from "@/components/services/StandardsBar";
import IndustriesGrid from "@/components/services/IndustriesGrid";
import CTASection from "@/components/home/CTASection";

/*
  /services — full service catalogue.
  Self-contained: every style lives in this file.
  - Add a service: add { label, href, image, alt, desc } to a division's `items`.
  - Add a division: add an object to `divisions`.
  Each division ends with an "overview" tile, so the grid stays even:
  total tiles divisible by 4 → 4 columns, otherwise 3 columns.
*/

export const metadata = {
  title:
    "Industrial Services in Saudi Arabia — Tanks, Insulation, Lining & 3D Scanning",
  description:
    "Falcon Technologies' full service range in Saudi Arabia: FRP, polyethylene and steel tanks, thermal and aerogel insulation, tank restoration and lining, industrial maintenance, chiller services, and surveying & 3D laser scanning.",
};

const TS = "/assets/images/tank-solutions";
const SV = "/assets/images/services";

const divisions = [
  {
    id: "tank-solutions",
    image: `${TS}/saudi_industrial_frp_tank_system.png`,
    alt: "FRP tank system at a Saudi industrial site",
    name: "Tank Solutions",
    href: "/services/tank-solutions",
    desc: "FRP/GRP, polyethylene and steel tanks designed around what you store, its temperature and the site — for water, diesel, fuel and chemical duty, aboveground or underground.",
    items: [
      {
        label: "FRP / GRP Tanks",
        href: "/services/tank-solutions/frp-grp-tanks",
        image: `${TS}/engineered_frp_tanks_in_saudi_facility.png`,
        alt: "Engineered FRP/GRP storage tanks at a Saudi industrial facility",
        desc: "Fibreglass tanks made with Falcon's own FRP laminate.",
      },
      {
        label: "Polyethylene Tanks",
        href: "/services/tank-solutions/polyethylene-tanks",
        image: `${TS}/heavy-duty_polyethylene_tanks_in_gulf_facility.png`,
        alt: "Heavy-duty polyethylene storage tanks at a Gulf facility",
        desc: "Seamless rotomoulded tanks, vertical, horizontal or buried.",
      },
      {
        label: "Steel Tank Systems",
        href: "/services/tank-solutions/steel-tank-systems",
        image: `${TS}/industrial_steel_tank_systems_showcase.png`,
        alt: "Fabricated industrial steel tank systems",
        desc: "Fabricated, skid-mounted and process tanks in steel.",
      },
      {
        label: "Water Tanks",
        href: "/services/tank-solutions/water-tanks",
        image: `${TS}/modern_uae_water_storage_facility.png`,
        alt: "Water storage tanks at a modern storage facility",
        desc: "Potable, process, utility, fire and irrigation water.",
      },
      {
        label: "Chemical Tanks",
        href: "/services/tank-solutions/chemical-tanks",
        image: `${TS}/chemical_tanks_category.png`,
        alt: "Chemical storage tanks in an industrial plant",
        desc: "Material and resin selected per chemical and temperature.",
      },
      {
        label: "Diesel & Fuel Tanks",
        href: "/services/tank-solutions/diesel-fuel-tanks",
        image: `${TS}/fuel_storage_solutions_industrial_yard.png`,
        alt: "Diesel and fuel storage tanks in an industrial yard",
        desc: "Generator day tanks and bulk fuel storage.",
      },
      {
        label: "Underground Tanks",
        href: "/services/tank-solutions/underground-tanks",
        image: `${TS}/underground_tank_installation_cutaway.png`,
        alt: "Cutaway of an underground storage tank installation",
        desc: "Burial-rated FRP, polyethylene and steel tanks.",
      },
    ],
  },
  {
    id: "thermal-insulation",
    image: `${SV}/industrial-insulation.png`,
    alt: "Industrial thermal insulation on tanks and pipework",
    name: "Thermal Insulation",
    href: "/services/thermal-insulation",
    desc: "Insulation systems, including aerogel, that cut heat loss, solar gain and temperature swings on tanks, pipework, buildings and equipment rooms.",
    items: [
      {
        label: "Storage Tank Insulation",
        href: "/services/thermal-insulation/storage-tank-insulation",
        image: `${SV}/storage-tank-insulation.png`,
        alt: "Insulation and cladding on an industrial storage tank",
        desc: "Keeps stored liquids at temperature in Gulf heat.",
      },
      {
        label: "Pipe & Equipment Insulation",
        href: "/services/thermal-insulation/pipe-equipment-insulation",
        image: `${SV}/pipe-equipment-insulation.png`,
        alt: "Insulated process pipework and equipment",
        desc: "Hot and cold lines, valves and vessels.",
      },
      {
        label: "Building & Roof Insulation",
        href: "/services/thermal-insulation/building-roof-insulation",
        image: `${SV}/building-roof-insulation.png`,
        alt: "Roof insulation applied to an industrial building",
        desc: "Lower solar gain through roofs and walls.",
      },
      {
        label: "Equipment Room Insulation",
        href: "/services/thermal-insulation/equipment-room-insulation",
        image: `${SV}/equipment-room-insulation.png`,
        alt: "Insulated plant and equipment room",
        desc: "Stable conditions for plant and electrical rooms.",
      },
      {
        label: "Aerogel Thermal Insulation",
        href: "/services/thermal-insulation/aerogel-thermal-insulation",
        image: `${SV}/aerogel-insulation.png`,
        alt: "Aerogel insulation blanket being applied",
        desc: "High performance where space is tight.",
      },
    ],
  },
  {
    id: "tank-restoration-lining",
    image: `${SV}/frp-tank-restoration.png`,
    alt: "FRP tank being restored and relined",
    name: "Tank Restoration & Lining",
    href: "/services/tank-restoration-lining",
    desc: "Crack repair, structural reinforcement and lining systems that bring existing steel, concrete and FRP tanks back into service instead of replacing them.",
    items: [
      {
        label: "Tank Restoration",
        href: "/services/tank-restoration-lining/tank-restoration",
        image: `${SV}/industrial-tank-restoration.png`,
        alt: "Industrial storage tank under restoration",
        desc: "Returning FRP, steel and PE tanks to service.",
      },
      {
        label: "Tank Rehabilitation",
        href: "/services/tank-restoration-lining/tank-rehabilitation",
        image: `${SV}/tank-rehabilitation.png`,
        alt: "Structural rehabilitation of an ageing tank",
        desc: "Structural repair for ageing assets.",
      },
      {
        label: "FRP / GRP Lining",
        href: "/services/tank-restoration-lining/frp-grp-lining",
        image: `${SV}/frp-lining.png`,
        alt: "FRP lining applied inside a storage tank",
        desc: "A new fibreglass barrier inside the existing shell.",
      },
      {
        label: "Chemical-Resistant Lining",
        href: "/services/tank-restoration-lining/chemical-resistant-lining",
        image: `${SV}/chemical-resistant-lining.png`,
        alt: "Chemical-resistant lining in a process tank",
        desc: "Systems selected for the stored chemical.",
      },
      {
        label: "Waterproof Lining",
        href: "/services/tank-restoration-lining/waterproof-lining",
        image: `${SV}/waterproof-lining.png`,
        alt: "Waterproof lining applied to a water tank",
        desc: "Stops leaks in water tanks and reservoirs.",
      },
      {
        label: "Steel Tank Lining",
        href: "/services/tank-restoration-lining/steel-tank-lining",
        image: `${SV}/steel-tank-lining.png`,
        alt: "Interior lining of a steel storage tank",
        desc: "Protects steel shells from internal corrosion.",
      },
      {
        label: "Concrete Tank Lining",
        href: "/services/tank-restoration-lining/concrete-tank-lining",
        image: `${SV}/concrete-tank-lining.png`,
        alt: "Lining and waterproofing of a concrete tank",
        desc: "Crack treatment and lining for concrete tanks.",
      },
      {
        label: "Corrosion Protection",
        href: "/services/tank-restoration-lining/corrosion-protection",
        image: `${SV}/corrosion-protection.png`,
        alt: "Corrosion protection coating on a steel tank",
        desc: "Coatings that slow corrosion on exposed steel.",
      },
    ],
  },
  {
    id: "industrial-services",
    image: `${SV}/mechanical-maintenance.png`,
    alt: "Industrial site team carrying out maintenance",
    name: "Industrial Services",
    href: "/services/industrial-services",
    desc: "Inspection, coating, mechanical maintenance and chiller installation & maintenance, delivered by one accountable site team.",
    items: [
      {
        label: "Tank Inspection",
        href: "/services/industrial-services/tank-inspection",
        image: `${SV}/tank-inspection.png`,
        alt: "Technician inspecting an industrial storage tank",
        desc: "Condition checks before repair or recertification.",
      },
      {
        label: "Industrial Coating",
        href: "/services/industrial-services/industrial-coating",
        image: `${SV}/industrial-coating.png`,
        alt: "Protective industrial coating being applied",
        desc: "Protective coatings for tanks, steel and plant.",
      },
      {
        label: "Mechanical Maintenance",
        href: "/services/industrial-services/mechanical-maintenance",
        image: `${SV}/mechanical-maintenance.png`,
        alt: "Mechanical maintenance on industrial equipment",
        desc: "Planned and breakdown maintenance on site.",
      },
      {
        label: "Equipment Support",
        href: "/services/industrial-services/equipment-support",
        image: `${SV}/equipment-support.png`,
        alt: "Engineer supporting industrial equipment on site",
        desc: "Installation and support for plant equipment.",
      },
      {
        label: "Chiller Installation & Maintenance",
        href: "/services/industrial-services/chiller-installation-maintenance",
        image: `${SV}/chiller-installation.png`,
        alt: "Industrial chiller being installed and commissioned",
        desc: "New installs, servicing and repair.",
      },
    ],
  },
  {
    id: "survey-scanning",
    image: `${SV}/survey-scanning.png`,
    alt: "Surveying and 3D scanning of an existing facility",
    name: "Surveying & 3D Scanning",
    href: "/services/survey-scanning",
    desc: "We scan existing plants, buildings and components, then deliver as-built drawings, BIM models or CAD solids from the same captured reality.",
    items: [
      {
        label: "3D Laser Scanning",
        href: "/services/survey-scanning/3d-laser-scanning",
        image: `${SV}/3d-laser-scanning.jpg`,
        alt: "3D laser scanner capturing an existing industrial plant",
        desc: "Measured point clouds of existing sites.",
      },
      {
        label: "As-Built Survey",
        href: "/services/survey-scanning/as-built-survey",
        image: `${SV}/as-built-survey.jpg`,
        alt: "As-built survey drawings of an existing facility",
        desc: "Drawings of what is actually built.",
      },
      {
        label: "Scan to BIM",
        href: "/services/survey-scanning/scan-to-bim",
        image: `${SV}/scan-to-bim.jpg`,
        alt: "Point cloud converted into a BIM model",
        desc: "Point clouds turned into BIM models.",
      },
      {
        label: "BIM Modelling",
        href: "/services/survey-scanning/bim-modelling",
        image: `${SV}/bim-modelling.jpg`,
        alt: "Coordinated BIM model of a building and its services",
        desc: "Coordinated models with clash detection.",
      },
      {
        label: "Reverse Engineering",
        href: "/services/survey-scanning/reverse-engineering",
        image: `${SV}/reverse-engineering-scanning.jpg`,
        alt: "Scanned industrial component rebuilt as CAD",
        desc: "Scanned parts rebuilt as editable CAD.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Falcon Technologies services",
  itemListElement: divisions.map((d) => ({
    "@type": "OfferCatalog",
    name: d.name,
    url: d.href,
    itemListElement: d.items.map((i) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: i.label,
        description: i.desc,
        url: i.href,
        areaServed: "Saudi Arabia",
      },
    })),
  })),
};

export default function ServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Our Services"
        title="Reliable Industrial Solutions. Clear Engineering. Simple Customer Support"
        description="Tanks, insulation, restoration and lining, site services and 3D scanning — every service backed by application engineering and documented quality."
        breadcrumb="Services"
        image={`${TS}/industrial_steel_tank_systems_showcase.png`}
        imageAlt="Industrial steel and FRP tank systems manufactured by Falcon Technologies"
      />

      {/* ============ ONE SECTION PER DIVISION ============ */}
      {divisions.map((d, i) => {
        const tiles = d.items.length + 1; // + overview tile
        const cols =
          tiles % 4 === 0
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3";
        const imgRatio = tiles % 4 === 0 ? "sm:aspect-4/3" : "sm:aspect-video";
        const alt = i % 2 === 1;

        return (
          <section
            key={d.id}
            id={d.id}
            aria-labelledby={`${d.id}-title`}
            className={`w-full scroll-mt-28 ${
              alt
                ? "bg-neutral-50 dark:bg-neutral-900"
                : "bg-white dark:bg-neutral-950"
            }`}
          >
            <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
              {/* Division header */}
              <div className="grid grid-cols-1 gap-6 border-b border-neutral-200 pb-10 dark:border-white/10 lg:grid-cols-12 lg:items-end lg:gap-12">
                <h2
                  id={`${d.id}-title`}
                  className="text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:col-span-5"
                >
                  {d.name}
                </h2>
                <div className="lg:col-span-7">
                  <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
                    {d.desc}
                  </p>
                  <p className="mt-4 text-sm text-neutral-500 dark:text-white/50">
                    {d.items.length} services
                  </p>
                </div>
              </div>

              {/* Service cards */}
              <ul className={`mt-10 grid grid-cols-1 gap-5 ${cols}`}>
                {d.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex h-full flex-row overflow-hidden rounded-sm border sm:flex-col border-neutral-200 bg-white transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-white/10 dark:bg-neutral-900"
                    >
                      <div
                        className={`relative min-h-28 w-28 shrink-0 self-stretch overflow-hidden bg-mist dark:bg-white/5 sm:min-h-0 sm:w-auto sm:self-auto ${imgRatio}`}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 112px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h3 className="text-lg font-medium leading-snug text-neutral-900 transition-colors group-hover:text-brand dark:text-white">
                          {item.label}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                          {item.desc}
                        </p>
                        <span className="mt-4 hidden items-center gap-1.5 text-sm font-semibold sm:inline-flex text-neutral-900 transition-colors group-hover:text-brand dark:text-white">
                          View service
                          <ArrowUpRight
                            size={15}
                            aria-hidden="true"
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}

                {/* Overview tile — closes each division */}
                <li>
                  <Link
                    href={d.href}
                    className="group relative flex h-full min-h-48 flex-col justify-between overflow-hidden rounded-sm bg-ink p-6 sm:min-h-64 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <Image
                      src={d.image}
                      alt={d.alt}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-ink/80 transition-colors duration-300 group-hover:bg-brand/85" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-white">
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="relative">
                      <span className="block text-sm text-white/70">
                        Division overview
                      </span>
                      <span className="mt-1 block text-2xl font-normal leading-tight tracking-tight">
                        Explore {d.name}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        );
      })}

      <StandardsBar />
      <IndustriesGrid />
      <CTASection />
    </div>
  );
}
