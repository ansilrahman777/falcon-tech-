import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata = {
  title: "Falcon Technologies KSA | Engineering. Precision. Performance.",
  description:
    "Falcon Technologies delivers calibration, survey, and engineering solutions across the Kingdom of Saudi Arabia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
