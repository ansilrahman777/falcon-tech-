"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ScanLine,
  Factory,
  ShieldCheck,
  Layers,
  Shield,
  Wrench,
  ClipboardCheck,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Survey & 3D Scanning",
    icon: ScanLine,
    href: "/services/survey-3d-scanning",
  },
  {
    id: 2,
    title: "Tank Manufacturing & Fabrication",
    icon: Factory,
    href: "/services/tank-manufacturing-fabrication",
  },
  {
    id: 3,
    title: "Insulation Solutions",
    icon: ShieldCheck,
    href: "/services/insulation-solutions",
  },
  {
    id: 4,
    title: "Lining Solutions",
    icon: Layers,
    href: "/services/lining-solutions",
  },
  {
    id: 5,
    title: "Lining, Rubber & FRP Protection",
    icon: Shield,
    href: "/services/lining-rubber-frp-protection",
  },
  {
    id: 6,
    title: "Maintenance & Industrial Services",
    icon: Wrench,
    href: "/services/maintenance-industrial-services",
  },
  {
    id: 7,
    title: "Inspection & Integrity Solutions",
    icon: ClipboardCheck,
    href: "/services/inspection-integrity-solutions",
  },
];

const CARD_WIDTH = 310;
const GAP = 26;
const STEP = CARD_WIDTH + GAP;

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current >= services.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? services.length - 1 : current - 1,
    );
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-[70px]
          sm:px-8
          sm:py-[80px]
          lg:px-0
          lg:py-[92px]
        "
      >
        {/* HEADER */}

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              h-[30px]
              items-center
              rounded-full
              border
              border-[#d0d0ca] dark:border-white/15
              px-[16px]
            "
          >
            <span
              className="
                text-[11px]
                font-medium
                uppercase
                leading-none
                tracking-[-0.01em]
                text-[#171717] dark:text-white
              "
            >
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="
              mt-[19px]
              text-[43px]
              font-normal
              leading-[1.08]
              tracking-[-0.045em]
              text-[#222222] dark:text-white
              sm:text-[50px]
              lg:text-[56px]
            "
          >
            Provide Quality Services
          </motion.h2>

          {/* DESKTOP NAVIGATION */}

          <div
            className="
              absolute
              right-0
              top-[42px]
              hidden
              items-center
              gap-[10px]
              sm:flex
            "
          >
            <button
              type="button"
              aria-label="Previous services"
              onClick={previousSlide}
              className="
                group
                flex
                h-[59px]
                w-[59px]
                items-center
                justify-center
                rounded-full
                border
                border-[#deded8] dark:border-white/15
                bg-white
                transition-all
                duration-300
                hover:border-brand
                hover:bg-brand
                dark:bg-neutral-900
              "
            >
              <ArrowLeft
                size={23}
                strokeWidth={1.5}
                className="
                  text-[#222222] dark:text-white
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              />
            </button>

            <button
              type="button"
              aria-label="Next services"
              onClick={nextSlide}
              className="
                group
                flex
                h-[59px]
                w-[59px]
                items-center
                justify-center
                rounded-full
                bg-brand
                transition-colors
                duration-300
                hover:bg-brand-dark
              "
            >
              <ArrowRight
                size={23}
                strokeWidth={1.5}
                className="
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                "
              />
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        <div className="mt-7 flex gap-2 sm:hidden">
          <button
            type="button"
            aria-label="Previous services"
            onClick={previousSlide}
            className="
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              border
              border-[#d8d8d2] dark:border-white/15
              bg-white dark:bg-neutral-900
            "
          >
            <ArrowLeft size={19} />
          </button>

          <button
            type="button"
            aria-label="Next services"
            onClick={nextSlide}
            className="
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              bg-brand
              text-white
            "
          >
            <ArrowRight size={19} />
          </button>
        </div>

        {/* CAROUSEL */}

        <div
          className="mt-[65px] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{
              x: -(activeIndex * STEP),
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-[26px]"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  key={service.id}
                  href={service.href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    relative
                    flex
                    h-[394px]
                    w-[310px]
                    shrink-0
                    flex-col
                    overflow-hidden
                    rounded-[5px]
                    border
                    border-[#e4e4df] dark:border-white/10
                    bg-white dark:bg-neutral-900
                    p-[40px]
                  "
                >
                  {/* ICON */}

                  <div>
                    <Icon
                      size={70}
                      strokeWidth={1.15}
                      className="
                        text-[#222222] dark:text-white
                        transition-transform
                        duration-500
                        group-hover:scale-[1.04]
                      "
                    />
                  </div>

                  {/* HOVER CIRCLE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-[157px]
                      flex
                      h-[100px]
                      w-[100px]
                      -translate-x-1/2
                      -translate-y-1/2
                      scale-75
                      items-center
                      justify-center
                      rounded-full
                      bg-brand
                      text-center
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:scale-100
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        text-[14px]
                        font-medium
                        leading-[1.05]
                        text-white
                      "
                    >
                      View
                      <br />
                      Details
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="mt-auto">
                    <h3
                      className="
                        max-w-[235px]
                        text-[28px]
                        font-normal
                        leading-[1.15]
                        tracking-[-0.035em]
                        text-[#171717] dark:text-white
                      "
                    >
                      {service.title}
                    </h3>

                    <div
                      className="
                        mt-[34px]
                        flex
                        items-center
                        gap-[5px]
                        text-[13px]
                        font-medium
                        uppercase
                        tracking-[-0.015em]
                        text-[#202020] dark:text-white/70
                      "
                    >
                      <span>Read More</span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-[3px]
                          group-hover:-translate-y-[3px]
                        "
                      />
                    </div>
                  </div>

                  {/* HOVER BORDER */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[5px]
                      border
                      border-transparent
                      transition-colors
                      duration-300
                      group-hover:border-brand/30
                    "
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
