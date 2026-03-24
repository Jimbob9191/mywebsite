import { getAllCaseStudies } from "@/lib/case-studies";
import WorkGrid from "@/components/work/WorkGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected UX/UI design projects — product design, design systems, and more.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-medium mb-3">Work</h1>
        <p className="text-muted-foreground">
          Selected projects. {caseStudies.length} case {caseStudies.length === 1 ? "study" : "studies"}.
        </p>
      </div>

      <WorkGrid caseStudies={caseStudies} />
    </div>
  );
}
