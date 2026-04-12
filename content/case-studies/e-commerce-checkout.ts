import type { CaseStudy } from "@/types";

const jonesBootmaker: CaseStudy = {
  slug: "jones-bootmaker",
  title: "Jones Bootmaker E-commerce White Label",
  subtitle:
    "Migrating seven footwear brands to a unified Hydrogen platform without losing what makes each one distinct",
  client: "Jones Bootmaker / Pavers Group",
  year: 2025,
  role: "UX/UI Designer & Product Manager",
  tags: ["UX/UI", "Product Management", "ECommerce"],
  coverImage: "/images/placeholder.avif",
  coverAlt: "Jones Bootmaker e-commerce site on desktop and mobile",
  accentColor: "#D5DDE8",
  featured: true,
  order: 3,
  published: true,
  summary:
    "Led design and product management for the migration of Jones Bootmaker onto a shared Hydrogen headless platform — unlocking CRO wins from Pavers, reducing duplicated engineering effort by 25%, and delivering a 43% revenue uplift.",
  sections: [
    {
      type: "text",
      heading: "Background",
      body: "The Pavers Group operated seven separate footwear brand websites across disparate technology stacks — Shopify, Shopify 2.0, and a Nuxt headless build. Each codebase required its own maintenance, causing compatibility issues, inconsistent feature releases, and compounding technical debt.\n\nFollowing a successful rebuild of the Pavers flagship site on a Hydrogen headless platform, the decision was made to migrate Jones Bootmaker using the same foundation — bringing brands into alignment while preserving their individual identities through a flexible theming system of variables and tokens.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Diagram of the Pavers Group's fragmented multi-brand tech stack",
      caption:
        "The previous setup — seven brands, three separate tech stacks, and no shared codebase.",
      fullWidth: true,
    },
    {
      type: "text",
      heading: "The Problem",
      body: "Maintaining separate codebases meant teams duplicated work, introduced avoidable inconsistencies, and maintained divergent feature sets across brands. This created significant operational drag: UX was inconsistent between brands, experimentation moved slowly, and analytics were fragmented.\n\nRevenue-driving CRO features that had already proven their value on Pavers — Wishlist, Combined Listings, Purchase on Collection Page — were simply absent from Jones, representing a clear and immediate opportunity gap.",
    },
    {
      type: "text",
      heading: "Research & Discovery",
      body: "Before design work began, I mapped the gaps between the two platforms across four areas:\n\nFeature parity — CRO wins implemented on Pavers (Wishlist, Combined Listings) were absent from Jones, with direct revenue impact. Third-party redundancies — different solutions for recommendations and collection building created overlapping tooling that needed rationalising. Analytics fragmentation — separate GA4 and GTM configurations across brands made revenue attribution inconsistent and unreliable. UX divergence — page structures, user flows, and core interaction patterns varied significantly, requiring clear decisions on where unification was critical versus where brand differentiation was justified.\n\nWe also identified technical risks: site speed, SEO content structure, and third-party integrations all required careful handling during migration to protect organic traffic.",
    },
    {
      type: "text",
      heading: "Process",
      body: "I owned the project as both design lead and product manager — responsible for backlog management, feature prioritisation, brand stakeholder alignment, and delivery oversight across the full build.\n\nWe ran an agile structure with daily standups, weekly planning, and retrospectives. Stakeholder sessions early on locked in timelines and brand-specific requirements. While the development team set up component architecture and CMS structures, I worked on a flexible theming system defining what brands could diverge on (accent colours, typography, spacing) versus where consistency was non-negotiable (checkout flows, accessibility patterns).\n\nWhere CRO data from Pavers already existed, proven configurations were adopted for Jones by default. Untested features triggered deeper stakeholder discussion and new A/B tests. One concrete example: PDP image layouts (carousel vs. grid) underwent testing, confirming grid superiority before implementation.\n\nTime constraints meant not everything could be fully tested pre-launch. PLP filter layouts defaulted to the Pavers configuration pending post-launch optimisation. Staggered design handoffs kept development unblocked — accepting functionally correct builds before pixel-perfect sign-off where necessary. Third-party integrations (CRM, Paid Social, PPC) were prioritised early to allow the marketing team to complete UAT before the UI was finalised.\n\nFinal weeks involved group UAT sessions with broader business teams to catch overlooked issues and build the post-launch enhancement backlog.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Brand token and theming system showing Jones Bootmaker and Pavers colour variables",
      caption:
        "The theming system — shared components, brand-specific tokens for colour, typography, and spacing.",
      fullWidth: true,
    },
    {
      type: "image-pair",
      images: [
        {
          src: "/images/placeholder.avif",
          alt: "Pavers homepage on the Hydrogen platform",
        },
        {
          src: "/images/placeholder.avif",
          alt: "Jones Bootmaker homepage using the same white-label codebase",
        },
      ],
    },
    {
      type: "text",
      heading: "Outcomes",
      body: "The migration delivered a single white-label codebase powering both brands, with CRO wins from Pavers applied to Jones from day one. New features shipped at launch included Wishlist, Pre-Order, Purchase on Collection Page, and Combined Product Listings.\n\nAnalytics improved significantly — a cleaner event schema resolved longstanding revenue attribution issues and provided a clear path to resolving inherited Pavers discrepancies. Performance enhancements delivered faster LCP scores and reduced error rates. Operationally, simplified file sizes and standardised dimensions reduced overhead for ecommerce, creative, and marketing teams across the group.",
    },
    {
      type: "stats",
      items: [
        { label: "Revenue uplift", value: "+43%" },
        { label: "Conversion rate uplift", value: "+9.2%" },
        { label: "Engineering work duplication", value: "−25%" },
      ],
    },
  ],
};

export default jonesBootmaker;
