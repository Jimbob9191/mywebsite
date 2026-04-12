import Hero from "@/components/home/Hero";
import WorkHighlights from "@/components/home/WorkHighlights";
import PhotographySection from "@/components/home/PhotographySection";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { getAllPhotos } from "@/lib/photography";

export default function HomePage() {
  const featuredWork = getFeaturedCaseStudies();
  const photos = getAllPhotos();

  return (
    <>
      <Hero />
      <WorkHighlights caseStudies={featuredWork} />
      <PhotographySection photos={photos} />
    </>
  );
}
