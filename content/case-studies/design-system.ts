import type { CaseStudy } from "@/types";

const designSystem: CaseStudy = {
  slug: "design-system",
  title: "Building a Design System from Scratch",
  subtitle: "Taking a 6-product company from 400 inconsistent components to a single shared language",
  client: "Meridian SaaS",
  year: 2023,
  role: "Design Systems Lead",
  tags: ["Design Systems", "Figma", "Component Library", "Documentation"],
  coverImage: "/images/case-studies/design-system/cover.jpg",
  coverAlt: "Meridian design system component library in Figma",
  accentColor: "#D5DDE8",
  featured: true,
  order: 2,
  published: true,
  summary:
    "Designed and shipped a unified design system across six products at Meridian, cutting design-to-dev handoff time by 60% and reducing UI-related bugs by nearly half.",
  sections: [
    {
      type: "text",
      heading: "The Challenge",
      body: "Meridian had grown through acquisition. Six products, four engineering teams, three Figma workspaces, and no shared components. A button in the payments product was 36px tall. In the analytics product it was 32px. In the CRM it was 40px. No one was wrong — there was simply no system. As the team scaled to 200 employees, the inconsistency was becoming a product liability.",
    },
    {
      type: "stats",
      items: [
        { label: "Components consolidated", value: "400 → 87" },
        { label: "Handoff time reduction", value: "−60%" },
        { label: "UI bugs per sprint", value: "−47%" },
      ],
    },
    {
      type: "text",
      heading: "Audit First",
      body: "Before designing anything, I spent three weeks auditing every product. I catalogued every component variant, documented every deviation from every other product, and interviewed 14 engineers and 8 designers about their biggest friction points. The audit revealed 400 unique component instances — many of which were doing identical jobs with slightly different visual treatments.",
    },
    {
      type: "image",
      src: "/images/case-studies/design-system/audit.jpg",
      alt: "Spreadsheet showing component audit across six products",
      caption: "The audit: 400 components mapped to their functional equivalents.",
      fullWidth: true,
    },
    {
      type: "text",
      heading: "Building the Foundation",
      body: "I started with tokens — colour, typography, spacing, and elevation — establishing the semantic layer before touching a single component. From there I built primitives (Button, Input, Select, Checkbox) and composed them into patterns (Form, DataTable, Modal). Every component was built in Figma with auto-layout, properly named variants, and interactive states before engineering received a spec.",
    },
    {
      type: "image-pair",
      images: [
        { src: "/images/case-studies/design-system/tokens.jpg", alt: "Colour and typography token documentation" },
        { src: "/images/case-studies/design-system/components.jpg", alt: "Button component with all state variants" },
      ],
    },
    {
      type: "text",
      heading: "Adoption Strategy",
      body: "A design system that nobody uses is a documentation project. I embedded myself with each product team for one sprint during migration, pair-designing with their designers and reviewing component usage in engineering PRs. I also created a Slack-based 'design system office hours' that still runs weekly. Within six months, all six products had migrated their core UI to the system.",
    },
    {
      type: "quote",
      text: "We used to spend half of design review debating whether a button should be 32px or 36px. Now we spend that time on the actual product problem.",
      attribution: "Senior Product Designer, Meridian",
    },
  ],
};

export default designSystem;
