import PageHero from "@/components/common/PageHero";
import AboutSection from "@/components/home/AboutSection";
import ValuesSection from "@/components/about/ValuesSection";
import CapabilitiesOverview from "@/components/about/CapabilitiesOverview";
import StatsCounter from "@/components/home/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About Falcon Technologies | Industrial Solutions – Saudi Arabia",
  description:
    "Falcon Technologies is an engineering, manufacturing and industrial services company based in Dammam, Saudi Arabia, delivering tank systems, thermal insulation, restoration, lining and chiller services.",
};

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="About Falcon Technologies"
        title="Industrial Solutions Built Around Engineering, Quality & Trust"
        description="Engineering, manufacturing, supply, installation, inspection, restoration, thermal insulation, tank lining and chiller services for demanding industrial clients across the Kingdom."
        breadcrumb="About Falcon"
      />
      <AboutSection />
      <ValuesSection />
      <CapabilitiesOverview />
      <StatsCounter />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
