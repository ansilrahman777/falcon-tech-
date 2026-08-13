import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Falcon Technologies KSA | Engineering. Precision. Performance.",
  description:
    "Falcon Technologies delivers calibration, survey, and engineering solutions across the Kingdom of Saudi Arabia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
