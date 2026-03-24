import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: Props) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5"
        style={{ backgroundColor: caseStudy.accentColor ?? "oklch(0.94 0 0)" }}
      >
        {caseStudy.coverImage && (
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.coverAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{caseStudy.year}</span>
          {caseStudy.client && (
            <>
              <span>·</span>
              <span>{caseStudy.client}</span>
            </>
          )}
        </div>

        <h3 className="text-lg font-medium leading-snug group-hover:text-foreground/70 transition-colors">
          {caseStudy.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {caseStudy.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {caseStudy.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
