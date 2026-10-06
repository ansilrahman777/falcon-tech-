/*
  SEO layout for every /services page.

  The title template means each service or product page only needs to export
  its own short `title` (and `description`) — this layout appends the brand
  suffix and supplies shared Open Graph / Twitter defaults. Any site-wide
  service SEO change (suffix, OG image, locale) is made here once.

  Per-page metadata still wins for anything it sets explicitly, so a page can
  override title, description, canonical, robots, etc. on its own.
*/
export const metadata = {
  title: {
    template: "%s | Falcon Technologies",
    default: "Industrial Tank & Service Solutions | Falcon Technologies",
  },
  description:
    "Engineered tanks, thermal insulation, restoration & lining and industrial services for Saudi Arabia and the GCC.",
  openGraph: {
    siteName: "Falcon Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
