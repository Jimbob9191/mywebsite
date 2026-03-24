// Add or remove case studies by adding/removing an import and an entry in the array below.
// Each case study lives in its own file in this folder.

import mobileAppRedesign from "./mobile-app-redesign";
import designSystem from "./design-system";

import type { CaseStudy } from "@/types";

export const allCaseStudies: CaseStudy[] = [
  mobileAppRedesign,
  designSystem,
];
