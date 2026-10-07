import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import GalleryExplorer from "@/components/gallery/GalleryExplorer";

export const metadata = {
  title: "Gallery | Falcon Technologies - Saudi Arabia",
  description:
    "Photo gallery of Falcon Technologies tank manufacturing, thermal insulation, restoration and lining, industrial services and chiller work across Saudi Arabia — filter by category.",
};

export default function GalleryPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        description="Tanks, insulation, restoration, lining and industrial services — browse our work by category."
        breadcrumb="Gallery"
        image="/assets/images/home/hero-slide-1.png"
      />
      <GalleryExplorer />
      <CTASection />
    </div>
  );
}
