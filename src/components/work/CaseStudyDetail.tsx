import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { CaseStudy, CaseStudySection } from "@/types";

interface Props {
  caseStudy: CaseStudy;
}

function Section({ section }: { section: CaseStudySection }) {
  switch (section.type) {
    case "text":
      return (
        <div className="max-w-2xl space-y-4">
          {section.heading && (
            <h2 className="text-xl font-medium">{section.heading}</h2>
          )}
          <p className="text-base text-muted-foreground leading-relaxed">
            {section.body}
          </p>
        </div>
      );

    case "image":
      return (
        <figure
          className={
            section.fullWidth
              ? "w-full"
              : "max-w-2xl"
          }
        >
          <div
            className="relative w-full overflow-hidden rounded-sm bg-muted"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={section.src}
              alt={section.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-xs text-muted-foreground">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "image-pair":
      return (
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          {section.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="max-w-2xl border-l-2 border-foreground/20 pl-6 py-1">
          <p className="text-lg italic leading-relaxed text-foreground/80">
            &ldquo;{section.text}&rdquo;
          </p>
          {section.attribution && (
            <footer className="mt-3 text-sm text-muted-foreground">
              — {section.attribution}
            </footer>
          )}
        </blockquote>
      );

    case "stats":
      return (
        <div className="max-w-2xl grid grid-cols-3 gap-6 py-8 border-y border-border/60">
          {section.items.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-medium tracking-tight">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function CaseStudyDetail({ caseStudy }: Props) {
  return (
    <article>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <span>{caseStudy.year}</span>
            {caseStudy.client && (
              <>
                <span>·</span>
                <span>{caseStudy.client}</span>
              </>
            )}
            <span>·</span>
            <span>{caseStudy.role}</span>
          </div>

          <h1 className="text-4xl font-medium leading-tight mb-4">
            {caseStudy.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {caseStudy.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div
        className="w-full aspect-[21/9] relative overflow-hidden"
        style={{ backgroundColor: caseStudy.accentColor ?? "oklch(0.94 0 0)" }}
      >
        {caseStudy.coverImage && (
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.coverAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
      </div>

      {/* Content sections */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Separator className="mb-16 opacity-40" />
        <div className="space-y-16">
          {caseStudy.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>
      </div>
    </article>
  );
}
