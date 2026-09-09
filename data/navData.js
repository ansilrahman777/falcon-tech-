// data/navData.js

const navData = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Tank Solutions",
        href: "/services/tank-solutions",
        children: [
          {
            label: "FRP / GRP Tanks",
            href: "/services/tank-solutions/frp-grp-tanks",
          },
          {
            label: "Polyethylene Tanks",
            href: "/services/tank-solutions/polyethylene-tanks",
          },
          {
            label: "Steel Tank Systems",
            href: "/services/tank-solutions/steel-tank-systems",
          },
          {
            label: "Water Tanks",
            href: "/services/tank-solutions/water-tanks",
          },
          {
            label: "Chemical Tanks",
            href: "/services/tank-solutions/chemical-tanks",
          },
          {
            label: "Diesel / Fuel Tanks",
            href: "/services/tank-solutions/diesel-fuel-tanks",
          },
          {
            label: "Underground Tanks",
            href: "/services/tank-solutions/underground-tanks",
          },
        ],
      },

      {
        label: "Thermal Insulation",
        href: "/services/thermal-insulation",
        children: [
          {
            label: "Storage Tank Insulation",
            href: "/services/thermal-insulation/storage-tank-insulation",
          },
          {
            label: "Pipe & Equipment Insulation",
            href: "/services/thermal-insulation/pipe-equipment-insulation",
          },
          {
            label: "Building & Roof Insulation",
            href: "/services/thermal-insulation/building-roof-insulation",
          },
          {
            label: "Equipment Room Insulation",
            href: "/services/thermal-insulation/equipment-room-insulation",
          },
          {
            label: "Aerogel Thermal Insulation",
            href: "/services/thermal-insulation/aerogel-thermal-insulation",
          },
        ],
      },

      {
        label: "Tank Restoration & Lining",
        href: "/services/tank-restoration-lining",
        children: [
          {
            label: "Tank Restoration",
            href: "/services/tank-restoration-lining/tank-restoration",
          },
          {
            label: "Tank Rehabilitation",
            href: "/services/tank-restoration-lining/tank-rehabilitation",
          },
          {
            label: "FRP / GRP Lining",
            href: "/services/tank-restoration-lining/frp-grp-lining",
          },
          {
            label: "Chemical-Resistant Lining",
            href: "/services/tank-restoration-lining/chemical-resistant-lining",
          },
          {
            label: "Waterproof Lining",
            href: "/services/tank-restoration-lining/waterproof-lining",
          },
          {
            label: "Corrosion Protection",
            href: "/services/tank-restoration-lining/corrosion-protection",
          },
        ],
      },

      {
        label: "Industrial Services",
        href: "/services/industrial-services",
        children: [
          {
            label: "Tank Inspection",
            href: "/services/industrial-services/tank-inspection",
          },
          {
            label: "Industrial Coating",
            href: "/services/industrial-services/industrial-coating",
          },
          {
            label: "Survey & Scanning",
            href: "/services/industrial-services/survey-scanning",
          },
          {
            label: "Mechanical Maintenance",
            href: "/services/industrial-services/mechanical-maintenance",
          },
          {
            label: "Equipment Support",
            href: "/services/industrial-services/equipment-support",
          },
          {
            label: "Chiller Installation & Maintenance",
            href: "/services/industrial-services/chiller-installation-maintenance",
          },
        ],
      },
    ],
  },

  {
    label: "Industries",
    href: "/industries",
    variant: "cards",
    submenu: [
      {
        label: "Oil & Gas",
        href: "/industries/oil-gas",
        image: "/assets/images/industries/oil-and-gas.webp",
      },
      {
        label: "Petrochemical & Chemical",
        href: "/industries/petrochemical-chemical",
        image: "/assets/images/industries/petrochemical-and-chemical.webp",
      },
      {
        label: "Water & Wastewater",
        href: "/industries/water-wastewater",
        image: "/assets/images/industries/water-and-wastewater.webp",
      },
      {
        label: "Power & Utilities",
        href: "/industries/power-utilities",
        image: "/assets/images/industries/power-and-utilities.webp",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        image: "/assets/images/industries/manufacturing.webp",
      },
      {
        label: "Construction & Infrastructure",
        href: "/industries/construction-infrastructure",
        image: "/assets/images/industries/construction-and-infrastructure.webp",
      },
      {
        label: "Commercial & Industrial",
        href: "/industries/commercial-industrial",
        image:
          "/assets/images/industries/commercial-and-industrial-buildings.webp",
      },
      {
        label: "Food & Beverage",
        href: "/industries/food-beverage",
        image: "/assets/images/industries/food-and-beverage.webp",
      },
    ],
  },

  {
    label: "Engineering & Quality",
    href: "/engineering",
    submenu: [
      {
        label: "Engineering Capabilities",
        href: "/engineering",
      },
      {
        label: "Application Engineering",
        href: "/engineering/application-engineering",
      },
      {
        label: "Material Selection",
        href: "/engineering/material-selection",
      },
      {
        label: "Design & Drawings",
        href: "/engineering/design-drawings",
      },
      {
        label: "Manufacturing Engineering",
        href: "/engineering/manufacturing-engineering",
      },
      {
        label: "QA / QC",
        href: "/engineering/qa-qc",
      },
      {
        label: "Inspection & Testing",
        href: "/engineering/inspection-testing",
      },
      {
        label: "Standards & Compliance",
        href: "/engineering/standards-compliance",
      },
      {
        label: "Certifications",
        href: "/engineering/certifications",
      },
    ],
  },

  {
    label: "Projects",
    href: "/projects",
  },

  {
    label: "Technical Library",
    href: "/technical-library",
    submenu: [
      {
        label: "Company Documents",
        href: "/technical-library/company-documents",
      },
      {
        label: "Product Datasheets",
        href: "/technical-library/product-datasheets",
      },
      {
        label: "Thermal Insulation Documents",
        href: "/technical-library/thermal-insulation",
      },
      {
        label: "Chiller Service Documents",
        href: "/technical-library/chiller-services",
      },
      {
        label: "Engineering Documents",
        href: "/technical-library/engineering",
      },
      {
        label: "QA / QC Documents",
        href: "/technical-library/qa-qc",
      },
      {
        label: "Chemical Compatibility",
        href: "/technical-library/chemical-compatibility",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact-us",
  },

  {
    label: "Request a Quote",
    href: "/request-a-quote",
    variant: "cta",
  },
];

export default navData;
