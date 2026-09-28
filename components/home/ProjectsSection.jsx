"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "FRP & Steel Tank Fabrication",
    description:
      "Engineered FRP/GRP, polyethylene and steel tank systems for water, diesel and chemical storage across industrial sites.",
    image: "/assets/images/home/showcase-2.png",
    href: "/projects/tank-fabrication",
  },
  {
    id: 2,
    title: "Thermal & Aerogel Insulation",
    description:
      "Storage tank, pipe, equipment and building insulation systems, including lightweight aerogel solutions for space-constrained sites.",
    image: "/assets/images/home/showcase-2.png",
    href: "/projects/thermal-aerogel-insulation",
  },
  {
    id: 3,
    title: "Tank Restoration & Rehabilitation",
    description:
      "Crack repair, structural reinforcement and life-extension work for FRP, steel and concrete storage tanks.",
    image: "/assets/images/home/showcase-2.png",
    href: "/projects/tank-restoration-rehabilitation",
  },
  {
    id: 4,
    title: "Tank Lining & Corrosion Protection",
    description:
      "FRP, chemical-resistant and waterproof lining systems engineered for demanding chemical and process storage applications.",
    image: "/assets/images/home/showcase-2.png",
    href: "/projects/tank-lining-corrosion-protection",
  },
  {
    id: 5,
    title: "Chiller Installation & Maintenance",
    description:
      "New chiller installation, commissioning, preventive maintenance and troubleshooting for commercial and industrial facilities.",
    image: "/assets/images/home/showcase-2.png",
    href: "/projects/chiller-installation-maintenance",
  },
];
export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveProject((current) =>
        current === projects.length - 1 ? 0 : current + 1,
      );
    }, 4200);
    return () => clearInterval(timer);
  }, [isPaused]);
  const project = projects[activeProject];
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-0 lg:py-26  ">
        {/* ===================================================== HEADER ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* EYEBROW */}
          <div className=" text-[11px] font-medium uppercase tracking-[0.18em] text-brand sm:text-[12px] "></div>
          {/* MAIN HEADING */}
          {/* <h2 className=" mt-4 text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-[#242424] sm:text-2xl lg:text-6xl ">
            Explore Recent Projects
          </h2> */}
        </motion.div>
        {/* ===================================================== PROJECT AREA ====================================================== */}
        <div
          className=" mx-auto max-w-7xl mt-12 lg:mt-14 "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className=" grid grid-cols-1 lg:grid-cols-[1fr_500px] ">
            {/* ================================================= PROJECT LIST ================================================== */}
            <div className="w-full">
              {projects.map((item, index) => {
                const isActive = activeProject === index;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveProject(index)}
                    onFocus={() => setActiveProject(index)}
                    onClick={() => setActiveProject(index)}
                    className={` group relative flex min-h-20.5 w-full items-center text-left transition-colors duration-500 ${isActive ? "bg-[#242529] text-white" : "bg-white text-[#222222]"} `}
                  >
                    {!isActive && (
                      <span className=" pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#e3e3e3] " />
                    )}
                    <div className=" flex w-18 shrink-0 justify-center text-2xl font-medium tracking-[-0.01em] text-[#999999] ">
                      {String(item.id).padStart(2, "0")}.
                    </div>

                    <div
                      className={` min-w-0 pr-5 text-5xl font-medium leading-tight tracking-tight transition-colors duration-300 sm:text-4xl ${isActive ? "text-brand" : "text-[#252525] group-hover:text-brand"} `}
                    >
                      {item.title}
                    </div>
                    {/* <div
                      className={` hidden min-w-0 flex-1 pr-5 text-[13px] leading-normal tracking-[-0.005em] sm:block ${isActive ? "text-white/60" : "text-[#858585]"} `}
                    >
                      {item.description}
                    </div> */}

                    <div
                      className={` flex h-full w-13 shrink-0 items-center justify-center transition-colors duration-300 ${isActive ? "text-brand" : "text-[#555555]"} `}
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className=" transition-transform duration-300 group-hover:translate-x-0.75 group-hover:-translate-y-0.75 "
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
            {/* ================================================= IMAGE ================================================== */}
            <div className=" relative mt-5 h-80 w-full overflow-hidden sm:h-97.5 lg:mt-0 lg:h-102.5 ">
              <AnimatePresence mode="wait">
                <motion.a
                  key={project.id}
                  href={project.href}
                  initial={{ opacity: 0, scale: 1.04, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.985, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className=" absolute inset-0 block overflow-hidden "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" h-full w-full object-cover "
                  />
                  <div className=" absolute inset-0 bg-black/10 transition-colors duration-500 hover:bg-black/0 " />
                  {/* VIEW PROJECT */}
                  <div className=" absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 hover:scale-110 ">
                    <ArrowUpRight size={20} strokeWidth={1.6} />
                  </div>
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* ===================================================== MOBILE INDICATORS ====================================================== */}
        <div className="mt-7 flex justify-center gap-1.25 lg:hidden">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show project ${index + 1}`}
              onClick={() => setActiveProject(index)}
              className={` h-0.75 transition-all duration-300 ${activeProject === index ? "w-7 bg-brand" : "w-2.5 bg-[#d3d3d3]"} `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
