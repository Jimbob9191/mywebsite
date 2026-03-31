"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudies: CaseStudy[];
}

export default function FeaturedWork({ caseStudies }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % caseStudies.length);
  }, [caseStudies.length]);

  useEffect(() => {
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance]);

  if (caseStudies.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Selected Work
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous"
            className="flex items-center justify-center w-9 h-9 border border-foreground/20 hover:border-foreground/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setActiveIndex(Math.min(caseStudies.length - 1, activeIndex + 1))}
            disabled={activeIndex === caseStudies.length - 1}
            aria-label="Next"
            className="flex items-center justify-center w-9 h-9 border border-foreground/20 hover:border-foreground/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="flex gap-1.5 overflow-hidden" style={{ height: 480 }}>
        {caseStudies.map((cs, i) => {
          const isActive = i === activeIndex;
          return (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="relative block overflow-hidden group"
              style={{
                flex: isActive ? 4 : 1,
                transition: "flex 0.5s ease",
                cursor: isActive ? "pointer" : "zoom-in",
              }}
              onClick={(e) => {
                if (!isActive) {
                  e.preventDefault();
                  setActiveIndex(i);
                }
              }}
            >
              {/* Background / image */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: cs.accentColor ?? "oklch(0.94 0 0)" }}
              >
                {cs.coverImage && (
                  <Image
                    src={cs.coverImage}
                    alt={cs.coverAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                )}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-xs text-white/60 mb-1.5">
                  {cs.year}
                  {cs.client && <span> · {cs.client}</span>}
                </div>

                <h3
                  className="font-medium leading-snug"
                  style={{
                    fontSize: isActive ? "1.125rem" : "0.8rem",
                    transition: "font-size 0.5s ease",
                    whiteSpace: isActive ? "normal" : "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {cs.title}
                </h3>

                {/* Only shown on active card */}
                <div
                  style={{
                    opacity: isActive ? 1 : 0,
                    maxHeight: isActive ? 120 : 0,
                    overflow: "hidden",
                    transition: "opacity 0.4s ease 0.1s, max-height 0.5s ease",
                  }}
                >
                  <p className="text-sm text-white/75 leading-relaxed line-clamp-2 mt-2">
                    {cs.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cs.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal bg-white/15 text-white border-0 rounded-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
