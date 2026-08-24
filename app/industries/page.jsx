import PageHero from "@/components/common/PageHero";
import IndustriesList from "@/components/industries/IndustriesList";
import SectorApproach from "@/components/industries/SectorApproach";
import StandardsBar from "@/components/services/StandardsBar";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Industries We Serve | Falcon Technologies – Saudi Arabia & GCC",
  description:
    "Falcon Technologies serves Oil & Gas, Petrochemical & Chemical, Water & Wastewater, Power & Utilities, Manufacturing, Commercial & Industrial Buildings, Construction & Infrastructure, and Food & Beverage sectors across Saudi Arabia and the GCC.",
};

export default function Industries() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Industries We Serve"
        title="Engineered for Saudi & GCC Industrial Sectors"
        description="From oil & gas to food & beverage, we engineer tank, insulation, restoration, lining and chiller solutions around each sector's real operating conditions."
        breadcrumb="Industries"
        image="/assets/images/home/hero-slide-2.png"
      />
      <IndustriesList />
      <SectorApproach />
      <Testimonials />
      <CTASection />
    </div>
  );
}
