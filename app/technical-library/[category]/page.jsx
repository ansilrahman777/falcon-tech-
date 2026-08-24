import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import LibraryExplorer from "@/components/technical-library/LibraryExplorer";
import CTASection from "@/components/home/CTASection";
import { libraryCategories } from "@/data/technicalLibraryData";

export function generateStaticParams() {
  return libraryCategories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = libraryCategories.find((c) => c.id === category);
  if (!cat) return {};

  return {
    title: `${cat.label} | Technical Library - Falcon Technologies`,
    description: cat.description,
  };
}

export default async function TechnicalLibraryCategory({ params }) {
  const { category } = await params;
  const cat = libraryCategories.find((c) => c.id === category);
  if (!cat) notFound();

  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Technical Library"
        title={cat.label}
        description={cat.description}
        breadcrumb={cat.label}
        image="/assets/images/home/hero-slide-1.png"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-8 lg:px-0">
        <Link
          href="/technical-library"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
        >
          <ArrowLeft size={13} />
          All Technical Library Categories
        </Link>
      </div>

      <LibraryExplorer initialCategory={cat.id} />
      <CTASection />
    </div>
  );
}
