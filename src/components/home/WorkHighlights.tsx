import Link from "next/link";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudies: CaseStudy[];
}

export default function WorkHighlights({ caseStudies }: Props) {
  if (caseStudies.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl font-medium mb-3">Work</h2>
          <p className="text-muted-foreground text-sm">Selected projects.</p>
        </div>
        <Link
          href="/work"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all work →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
      </div>
    </section>
  );
}
