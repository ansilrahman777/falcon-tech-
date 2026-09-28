import HomeLayout from "@/components/layout/HomeLayout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import ShowcaseSlider from "@/components/home/ShowcaseSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import ProjectsSection from "@/components/home/ProjectsSection";
import BlogSection from "@/components/home/BlogSection";
import LocationMap from "@/components/home/LocationMap";
import SurveyScanningSection from "@/components/home/SurveyScanningSection";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <AboutSection />
      <StatsCounter />
      <ProductsSection />
      <ShowcaseSlider />
      <SurveyScanningSection />
      <ServicesSection />
      <ManufacturingSection />
      <ProcessSteps />
      {/* <ProjectsSection /> */}
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <BlogSection />
      <LocationMap />
    </HomeLayout>
  );
}
