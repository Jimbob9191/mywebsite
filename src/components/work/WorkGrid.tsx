import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudies: CaseStudy[];
}

export default function WorkGrid({ caseStudies }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
      {caseStudies.map((cs) => (
        <CaseStudyCard key={cs.slug} caseStudy={cs} />
      ))}
    </div>
  );
}
