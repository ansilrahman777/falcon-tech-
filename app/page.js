import HomeLayout from "@/components/layout/HomeLayout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import ShowcaseSlider from "@/components/home/ShowcaseSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import ProjectsSection from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <AboutSection />
      <StatsCounter />
      <ServicesSection />
      <ProjectsSection />
      <ShowcaseSlider />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </HomeLayout>
  );
}
