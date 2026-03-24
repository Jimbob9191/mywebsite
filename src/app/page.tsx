import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      <Hero />
      <FeaturedWork caseStudies={featured} />
    </>
  );
}
