import PageHero from "@/components/common/PageHero";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import StatsCounter from "@/components/home/StatsCounter";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Projects | Falcon Technologies – Tanks, Insulation & Industrial Work",
  description:
    "Browse Falcon Technologies' project portfolio across FRP tanks, polyethylene tanks, underground storage, thermal insulation, tank restoration & lining, and chiller installation & maintenance.",
};

export default function Projects() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Our Work"
        title="Explore Recent Projects"
        description="A selection of tank, insulation, restoration, lining and industrial projects delivered across Saudi Arabia's Eastern Province and beyond."
        breadcrumb="Projects"
        image="/assets/images/home/hero-slide-1.png"
      />
      <ProjectsGallery />
      <CTASection />
    </div>
  );
}
