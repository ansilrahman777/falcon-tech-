// data/technicalLibraryData.js

/**
 * Categories mirror the "Technical Library" submenu in navData.js — keep the
 * `id` values in sync with those href slugs so filter links and nav links
 * always resolve to the same section.
 */
export const libraryCategories = [
  {
    id: "company-documents",
    label: "Company Documents",
    description:
      "Company profile, organization chart, business licenses and certificates.",
  },
  {
    id: "product-datasheets",
    label: "Product Datasheets",
    description:
      "FRP, polyethylene, steel, underground and chemical tank data sheets.",
  },
  {
    id: "thermal-insulation",
    label: "Thermal Insulation",
    description:
      "Aerogel technical data sheet, brochure, application procedure, SDS and thermal conductivity information.",
  },
  {
    id: "chiller-services",
    label: "Chiller Service Documents",
    description:
      "Service capability statement, preventive maintenance scope, maintenance checklist and supported equipment information.",
  },
  {
    id: "engineering",
    label: "Engineering Documents",
    description:
      "Standard drawings, nozzle details, installation instructions and foundation requirements.",
  },
  {
    id: "qa-qc",
    label: "QA / QC Documents",
    description:
      "ITP, method statements, QA/QC procedures, inspection, maintenance and testing formats.",
  },
  {
    id: "chemical-compatibility",
    label: "Chemical Compatibility",
    description:
      "FRP resin, polyethylene and lining compatibility information.",
  },
];

/**
 * `type` drives the icon shown on the card (see DocumentCard).
 * `access`:
 *  - "download"  → file is public, card links straight to `file`.
 *  - "request"   → controlled/project document; card routes to the RFQ
 *                  form instead of exposing a direct link, matching the
 *                  Engineer/Consultant flow (review → submit technical RFQ).
 */
const libraryDocuments = [
  // Company Documents
  {
    id: "company-profile",
    category: "company-documents",
    title: "Falcon Technologies Company Profile",
    type: "PDF",
    size: "4.8 MB",
    updated: "2026-06",
    access: "download",
    file: "/documents/company/falcon-technologies-company-profile.pdf",
  },
  {
    id: "org-chart",
    category: "company-documents",
    title: "Organization Chart",
    type: "PDF",
    size: "0.6 MB",
    updated: "2026-03",
    access: "download",
    file: "/documents/company/organization-chart.pdf",
  },
  {
    id: "commercial-registration",
    category: "company-documents",
    title: "Commercial Registration & Business Licenses",
    type: "PDF",
    size: "2.1 MB",
    updated: "2026-01",
    access: "request",
  },

  // Product Datasheets
  {
    id: "frp-vertical-tank-capacity-height-chart",
    category: "product-datasheets",
    title: "FRP Vertical Tank Capacity Height Chart",
    type: "PDF",
    size: "11.6 KB",
    updated: "2026-05",
    access: "access",
    file: "/documents/products/FRP_Vertical_Tank_Capacity_Height_Chart.pdf",
  },
  {
    id: "frp-horizontal-above-ground-tanks-chart",
    category: "product-datasheets",
    title: "FRP Horizontal Above Ground Tanks Chart",
    type: "PDF",
    size: "27.8 KB",
    updated: "2026-05",
    access: "access",
    file: "/documents/products/FRP_Horizontal_Above_Ground_Tanks_Chart.pdf",
  },
  {
    id: "frp-horizontal-underground-tanks-chart",
    category: "product-datasheets",
    title: "FRP Horizontal Underground Tanks Chart",
    type: "PDF",
    size: "27.8 KB",
    updated: "2026-05",
    access: "access",
    file: "/documents/products/FRP_Horizontal_Underground_Tank_Chart_No_Subheading.pdf",
  },
  // {
  //   id: "frp-grp-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "FRP / GRP Tank Datasheet",
  //   type: "PDF",
  //   size: "3.2 MB",
  //   updated: "2026-05",
  //   access: "request",
  //   file: "/documents/products/frp-grp-tank-datasheet.pdf",
  // },
  // {
  //   id: "polyethylene-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Polyethylene (LLDPE / HDPE) Tank Datasheet",
  //   type: "PDF",
  //   size: "2.7 MB",
  //   updated: "2026-05",
  //   access: "request",
  //   file: "/documents/products/polyethylene-tank-datasheet.pdf",
  // },
  // {
  //   id: "steel-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Steel Tank Systems Datasheet",
  //   type: "PDF",
  //   size: "2.9 MB",
  //   updated: "2026-04",
  //   access: "request",
  //   file: "/documents/products/steel-tank-datasheet.pdf",
  // },
  // {
  //   id: "underground-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Underground Tank Datasheet",
  //   type: "PDF",
  //   size: "2.4 MB",
  //   updated: "2026-04",
  //   access: "request",
  //   file: "/documents/products/underground-tank-datasheet.pdf",
  // },
  // {
  //   id: "chemical-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Chemical Storage Tank Datasheet",
  //   type: "PDF",
  //   size: "3.0 MB",
  //   updated: "2026-04",
  //   access: "request",
  // },

  // Thermal Insulation
  {
    id: "aerogel-tds",
    category: "thermal-insulation",
    title: "Aerogel Insulation — Technical Data Sheet",
    type: "PDF",
    size: "1.8 MB",
    updated: "2026-06",
    access: "request",
    file: "/documents/thermal-insulation/aerogel-technical-data-sheet.pdf",
  },
  {
    id: "aerogel-brochure",
    category: "thermal-insulation",
    title: "Aerogel Insulation — Product Brochure",
    type: "PDF",
    size: "5.4 MB",
    updated: "2026-06",
    access: "request",
    file: "/documents/thermal-insulation/aerogel-brochure.pdf",
  },
  {
    id: "aerogel-sds",
    category: "thermal-insulation",
    title: "Aerogel — Safety Data Sheet (SDS)",
    type: "PDF",
    size: "0.9 MB",
    updated: "2026-06",
    access: "request",
    file: "/documents/thermal-insulation/aerogel-sds.pdf",
  },
  {
    id: "insulation-application-procedure",
    category: "thermal-insulation",
    title: "Thermal Insulation Application Procedure",
    type: "PDF",
    size: "2.2 MB",
    updated: "2026-05",
    access: "request",
  },

  // Chiller Service Documents
  {
    id: "chiller-capability-statement",
    category: "chiller-services",
    title: "Chiller Service Capability Statement",
    type: "PDF",
    size: "1.6 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chiller-services/chiller-service-capability-statement.pdf",
  },
  {
    id: "chiller-pm-scope",
    category: "chiller-services",
    title: "Preventive Maintenance Scope",
    type: "PDF",
    size: "1.1 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chiller-services/preventive-maintenance-scope.pdf",
  },
  {
    id: "chiller-maintenance-checklist",
    category: "chiller-services",
    title: "Chiller Maintenance Checklist",
    type: "XLSX",
    size: "0.4 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chiller-services/chiller-maintenance-checklist.xlsx",
  },
  {
    id: "supported-equipment-list",
    category: "chiller-services",
    title: "Supported Equipment / Manufacturer Coverage",
    type: "PDF",
    size: "0.8 MB",
    updated: "2026-04",
    access: "request",
  },
  {
    id: "sample-service-report",
    category: "chiller-services",
    title: "Sample Service / Inspection Report",
    type: "PDF",
    size: "1.3 MB",
    updated: "2026-04",
    access: "request",
  },

  // Engineering Documents
  {
    id: "standard-drawings",
    category: "engineering",
    title: "Standard Tank Drawings — GA / Shop Drawings",
    type: "PDF",
    size: "6.1 MB",
    updated: "2026-03",
    access: "request",
  },
  {
    id: "nozzle-details",
    category: "engineering",
    title: "Standard Nozzle Details",
    type: "PDF",
    size: "1.4 MB",
    updated: "2026-03",
    access: "request",
    file: "/documents/engineering/standard-nozzle-details.pdf",
  },
  {
    id: "installation-instructions",
    category: "engineering",
    title: "Tank Installation Instructions",
    type: "PDF",
    size: "2.5 MB",
    updated: "2026-03",
    access: "request",
    file: "/documents/engineering/tank-installation-instructions.pdf",
  },
  {
    id: "foundation-requirements",
    category: "engineering",
    title: "Foundation Requirements Guide",
    type: "PDF",
    size: "1.9 MB",
    updated: "2026-02",
    access: "request",
    file: "/documents/engineering/foundation-requirements-guide.pdf",
  },

  // QA / QC Documents
  {
    id: "itp-template",
    category: "qa-qc",
    title: "Inspection & Test Plan (ITP) — Sample",
    type: "PDF",
    size: "1.0 MB",
    updated: "2026-05",
    access: "request",
  },
  {
    id: "method-statements",
    category: "qa-qc",
    title: "Method Statements — Index",
    type: "PDF",
    size: "0.7 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/qa-qc/method-statements-index.pdf",
  },
  {
    id: "qaqc-procedures",
    category: "qa-qc",
    title: "QA / QC Procedures Overview",
    type: "PDF",
    size: "1.7 MB",
    updated: "2026-04",
    access: "request",
    file: "/documents/qa-qc/qa-qc-procedures-overview.pdf",
  },
  {
    id: "testing-formats",
    category: "qa-qc",
    title: "Inspection & Testing Report Formats",
    type: "DOCX",
    size: "0.3 MB",
    updated: "2026-04",
    access: "request",
    file: "/documents/qa-qc/inspection-testing-report-formats.docx",
  },

  // Chemical Compatibility
  {
    id: "frp-resin-compatibility",
    category: "chemical-compatibility",
    title: "FRP Resin Chemical Compatibility Chart",
    type: "PDF",
    size: "2.0 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chemical-compatibility/frp-resin-compatibility-chart.pdf",
  },
  {
    id: "polyethylene-compatibility",
    category: "chemical-compatibility",
    title: "Polyethylene Chemical Compatibility Chart",
    type: "PDF",
    size: "1.6 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chemical-compatibility/polyethylene-compatibility-chart.pdf",
  },
  {
    id: "lining-compatibility",
    category: "chemical-compatibility",
    title: "Lining System Chemical Compatibility Guide",
    type: "PDF",
    size: "2.3 MB",
    updated: "2026-04",
    access: "request",
  },
];

export default libraryDocuments;
