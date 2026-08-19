import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

const services = [
  {
    name: "Survey & 3D Scanning",
    href: "/services/survey-3d-scanning",
  },
  {
    name: "Tank Manufacturing & Fabrication",
    href: "/services/tank-manufacturing-fabrication",
  },
  {
    name: "Insulation Solutions",
    href: "/services/insulation-solutions",
  },
  {
    name: "Lining Solutions",
    href: "/services/lining-solutions",
  },
  {
    name: "Lining, Rubber & FRP Protection",
    href: "/services/lining-rubber-frp-protection",
  },
  {
    name: "Maintenance & Industrial Services",
    href: "/services/maintenance-industrial-services",
  },
  {
    name: "Inspection & Integrity Solutions",
    href: "/services/inspection-integrity-solutions",
  },
];

const quickLinks = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Our Services",
    href: "/services",
  },
  {
    name: "Our Projects",
    href: "/projects",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#242529] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#242529]" />

        <div className="absolute bottom-0 left-[8%] h-[420px] w-[420px] rounded-full bg-brand/[0.025] blur-[120px]" />

        <div className="absolute right-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[100px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto max-w-[1276px] px-5 sm:px-8 lg:px-0">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-[70px]
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-14
            lg:grid-cols-[1.15fr_1fr_0.9fr_1.15fr]
            lg:gap-[55px]
            lg:py-[72px]
          "
        >
          {/* =================================================
              COMPANY
          ================================================== */}

          <div>
            <Link href="/" className="group inline-flex items-center">
              <div className="flex items-center gap-3">
                {/* Logo mark */}

                <Image
                  src="/assets/logos/falcon-tech-ksa-white-logo.png"
                  alt="Falcon Technologies KSA"
                  width={2400}
                  height={417}
                  priority
                  className="h-12 md:h-36 w-auto object-contain transition-opacity duration-300"
                />
              </div>
            </Link>

            <p
              className="
                max-w-[290px]
                text-[14px]
                leading-[1.75]
                text-white/55
              "
            >
              Falcon Technologies delivers precision-driven engineering,
              surveying, fabrication, inspection and industrial solutions for
              demanding projects across the Kingdom of Saudi Arabia.
            </p>

            <Link
              href="/contact-us"
              className="
                group
                mt-[27px]
                inline-flex
                h-[54px]
                items-center
                gap-5
                bg-brand
                px-[24px]
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.02em]
                text-white
                transition-all
                duration-300
                hover:bg-brand-dark
              "
            >
              <span>Get a Quote</span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </span>
            </Link>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>
            <FooterHeading title="Services" />

            <ul className="mt-[26px] space-y-[13px]">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="
                      group
                      flex
                      items-start
                      text-[14px]
                      leading-[1.45]
                      text-white/55
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        mr-2
                        mt-[7px]
                        h-[4px]
                        w-[4px]
                        shrink-0
                        rounded-full
                        bg-brand
                        opacity-0
                        transition-opacity
                        duration-200
                        group-hover:opacity-100
                      "
                    />

                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <FooterHeading title="Quick Links" />

            <ul className="mt-[26px] space-y-[14px]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-[14px]
                      text-white/55
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-[1px]
                        w-0
                        bg-brand
                        transition-all
                        duration-300
                        group-hover:w-[12px]
                      "
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <FooterHeading title="Contact Us" />

            <div className="mt-[26px]">
              <ContactItem icon={MapPin}>
                <span>Building 7850/3308, Street 9, Al Sinaiyyah,<br/> Zip Code 32624, Saudi Arabia</span>
              </ContactItem>

              <ContactItem icon={Phone}>
                <Link
                  href="tel:+966592767326"
                  className="transition-colors hover:text-white"
                >
                  +966 59 276 7326
                </Link>
              </ContactItem>

              <ContactItem icon={Mail}>
                <Link
                  href="mailto:info@falcontechksa.com"
                  className="transition-colors hover:text-white"
                >
                  info@falcontecksa.com
                </Link>
              </ContactItem>

              <ContactItem icon={Clock3} last>
                <div>
                  <div>Monday - Friday</div>
                  <div className="mt-1">08:00 AM - 06:00 PM</div>
                </div>
              </ContactItem>
            </div>

            <Link
              href="/contact-us"
              className="
                mt-[20px]
                inline-block
                text-[13px]
                font-medium
                text-brand
                transition-colors
                duration-200
                hover:text-white
              "
            >
              Send us a message and we&apos;ll get in touch shortly
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.10]
            py-[22px]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[12px] leading-5 text-white/40">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/65">Falcon Technologies KSA</span>. All
            Rights Reserved.
          </p>

          <div className="flex items-center gap-[18px]">
            <SocialLink href="#" label="Facebook" icon={FaFacebookF} />

            <SocialLink href="#" label="Instagram" icon={FaInstagram} />

            <SocialLink href="#" label="LinkedIn" icon={FaLinkedinIn} />

            <SocialLink href="#" label="YouTube" icon={FaYoutube} />
          </div>
        </div>
      </div>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <a
        href="#top"
        aria-label="Back to top"
        className="
          absolute
          bottom-[18px]
          right-5
          hidden
          h-[48px]
          w-[48px]
          items-center
          justify-center
          rounded-[3px]
          bg-[#111214]
          text-white/80
          transition-all
          duration-300
          hover:bg-brand
          hover:text-white
          sm:flex
          lg:right-[28px]
        "
      >
        <ArrowUp size={18} strokeWidth={2} />
      </a>
    </footer>
  );
}

function FooterHeading({ title }) {
  return (
    <div>
      <h3
        className="
          text-[21px]
          font-semibold
          leading-none
          tracking-[-0.025em]
          text-white
        "
      >
        {title}
      </h3>

      <div className="mt-[26px] h-[1px] w-full bg-white/[0.10]">
        <div className="h-[1px] w-[70px] bg-brand" />
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, children, last = false }) {
  return (
    <div
      className={`
        flex
        gap-[16px]
        py-[15px]
        ${!last ? "border-b border-white/[0.10]" : ""}
      `}
    >
      <Icon
        size={21}
        strokeWidth={1.5}
        className="mt-[1px] shrink-0 text-brand"
      />

      <div className="text-[14px] leading-[1.55] text-white/55">{children}</div>
    </div>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        text-white/40
        transition-colors
        duration-200
        hover:text-brand
      "
    >
      <Icon size={16} />
    </Link>
  );
}
