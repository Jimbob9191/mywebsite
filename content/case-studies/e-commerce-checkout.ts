import type { CaseStudy } from "@/types";

const eCommerceCheckout: CaseStudy = {
  slug: "e-commerce-checkout",
  title: "E-Commerce Checkout Overhaul",
  subtitle: "Cutting drop-off at the most critical point in the purchase funnel",
  client: "Folio",
  year: 2024,
  role: "UX/UI Designer",
  tags: ["UX Research", "Conversion Optimisation", "Web"],
  coverImage: "/images/placeholder.avif",
  coverAlt: "Redesigned checkout flow on desktop and mobile",
  accentColor: "#D5E8E0",
  featured: true,
  order: 3,
  published: true,
  summary:
    "Redesigned a five-step checkout into a single-page flow for Folio, reducing cart abandonment by 34% and increasing completed purchases by 28% in the first month post-launch.",
  sections: [
    {
      type: "text",
      heading: "The Problem",
      body: "Folio's checkout had five separate pages, each requiring a full reload. Analytics showed 62% of users who added an item to their cart never completed a purchase — significantly above the industry average. Exit surveys pointed to frustration with the length of the process and uncertainty about shipping costs until the final step.",
    },
    {
      type: "stats",
      items: [
        { label: "Cart abandonment reduction", value: "−34%" },
        { label: "Completed purchases increase", value: "+28%" },
        { label: "Steps to checkout", value: "5 → 1" },
      ],
    },
    {
      type: "text",
      heading: "Design Approach",
      body: "The redesign collapsed all five steps into a single scrollable page with an always-visible order summary. Shipping cost was surfaced immediately on address entry. A guest checkout option was made the default, with account creation offered post-purchase. Every field was reviewed — non-essential ones removed, others auto-filled from browser data where possible.",
    },
    {
      type: "text",
      heading: "Outcome",
      body: "The new checkout launched in October 2024. Cart abandonment dropped 34% and completed purchases rose 28% within the first month. Customer support contacts about checkout issues fell by half.",
    },
  ],
};

export default eCommerceCheckout;
