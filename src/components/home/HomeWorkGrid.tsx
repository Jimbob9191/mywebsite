import CaseStudyCard from "@/components/work/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function HomeWorkGrid() {
  const projects = getAllCaseStudies().slice(0, 4);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-medium text-foreground mb-10">
        My Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        {projects.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
      </div>

    </section>
  );
}
