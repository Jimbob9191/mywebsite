export type CaseStudySection =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; src: string; alt: string; caption?: string; fullWidth?: boolean }
  | { type: "image-pair"; images: [{ src: string; alt: string }, { src: string; alt: string }] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "stats"; items: Array<{ label: string; value: string }> };

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client?: string;
  year: number;
  role: string;
  tags: string[];
  coverImage: string;
  coverAlt: string;
  accentColor?: string;
  featured: boolean;
  order: number;
  published: boolean;
  summary: string;
  sections: CaseStudySection[];
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  location?: string;
}
