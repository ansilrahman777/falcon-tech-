// data/navData.js
const navData = [
  {
    label: "About us",
    href: "/about-us",
    submenu: [
      { label: "About Us", href: "/about-us/about" },
      { label: "Leadership", href: "/about-us/leadership" },
      { label: "Partnerships", href: "/about-us/partnerships" },
      { label: "Governance", href: "/about-us/governance" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Calibration Services", href: "/services/calibration" },
      { label: "Survey & Geospatial", href: "/services/survey" },
      { label: "3D Scanning", href: "/services/3d-scanning" },
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
  { label: "Contact Us", href: "/contact-us" },
];

export default navData;