import { allCaseStudies } from "../../content/case-studies/_index";
import type { CaseStudy } from "@/types";

export function getAllCaseStudies(): CaseStudy[] {
  return allCaseStudies
    .filter((cs) => cs.published)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((cs) => cs.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllCaseStudies().map((cs) => cs.slug);
}
