import PageHero from "@/components/common/PageHero";
import AudiencePathways from "@/components/technical-library/AudiencePathways";
import LibraryExplorer from "@/components/technical-library/LibraryExplorer";
import StandardsBar from "@/components/services/StandardsBar";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Technical Library | Datasheets, Drawings & Service Documents - Falcon Technologies",
  description:
    "Download Falcon Technologies datasheets, aerogel insulation documents, chiller service records, engineering drawings, QA/QC formats and chemical compatibility guides, or request project-specific documents.",
};

export default function TechnicalLibrary() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Technical Library"
        title="Datasheets, Drawings and Documentation for Every Stage of Your Project"
        description="Company documents, product datasheets, engineering drawings, QA/QC formats and chemical compatibility guides — organized for quick customer lookup and full engineering review."
        breadcrumb="Technical Library"
        image="/assets/images/home/hero-slide-1.png"
      />
      <AudiencePathways />
      <LibraryExplorer />
      <StandardsBar />
      <CTASection />
    </div>
  );
}
