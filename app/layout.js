import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuickContact from "@/components/common/QuickContact";
import ScrollToTop from "@/components/common/ScrollToTop";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata = {
  title:
    "Falcon Technologies | Tanks, Insulation & Industrial Solutions - Saudi Arabia",
  description:
    "Falcon Technologies delivers engineered tank systems, thermal insulation, tank lining and restoration, and chiller installation and maintenance for industrial clients across Saudi Arabia and the GCC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />

          <QuickContact />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
