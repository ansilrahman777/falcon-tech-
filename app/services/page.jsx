import PageHero from "@/components/common/PageHero";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceCategories from "@/components/services/ServiceCategories";
import IndustriesGrid from "@/components/services/IndustriesGrid";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title:
    "Services | Tank Solutions, Insulation, Lining & Chiller - Falcon Technologies",
  description:
    "Explore Falcon Technologies' full service range: tank solutions, thermal insulation, tank restoration & lining, and industrial services including chiller installation & maintenance.",
};

export default function Services() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Our Services"
        title="Engineered Solutions From First Enquiry to Final Handover"
        description="From storage tanks and thermal insulation to restoration, lining and chiller support — every service is backed by application engineering and documented quality."
        breadcrumb="Services"
        image="/assets/images/home/hero-slide-2.png"
      />
      <ServicesSection />
      <ServiceCategories />
      <StandardsBar />
      <IndustriesGrid />
      <CTASection />
    </div>
  );
}

