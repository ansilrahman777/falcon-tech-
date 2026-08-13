// data/navData.js
const navData = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    submenu: [
      { label: "About Us", href: "/who-we-are/about" },
      { label: "Leadership", href: "/who-we-are/leadership" },
      { label: "Partnerships", href: "/who-we-are/partnerships" },
      { label: "Governance", href: "/who-we-are/governance" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      { label: "Calibration Services", href: "/solutions/calibration" },
      { label: "Survey & Geospatial", href: "/solutions/survey" },
      { label: "3D Scanning", href: "/solutions/3d-scanning" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    variant: "cards", // renders image cards instead of plain links
    submenu: [
      {
        label: "Oil & Gas",
        href: "/industries/oil-gas",
        image: "/assets/menu/oil-gas.jpg",
      },
      {
        label: "Infrastructure",
        href: "/industries/infrastructure",
        image: "/assets/menu/infrastructure.jpg",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Careers",
    href: "/careers",
    submenu: [
      { label: "Open Positions", href: "/careers/open-positions" },
      { label: "Training & Education", href: "/careers/training" },
    ],
  },
  { label: "Media Center", href: "/media-center" },
];

export default navData;