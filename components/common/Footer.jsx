import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white/60 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Falcon Technologies KSA. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/about-us" className="hover:text-white">About</Link>
          <Link href="/contact-us" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
