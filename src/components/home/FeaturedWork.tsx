import Link from "next/link";
import WorkGrid from "@/components/work/WorkGrid";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudies: CaseStudy[];
}

export default function FeaturedWork({ caseStudies }: Props) {
  if (caseStudies.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Selected Work
        </h2>
        <Link
          href="/work"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
        >
          View all
        </Link>
      </div>

      <WorkGrid caseStudies={caseStudies} />
    </section>
  );
}
