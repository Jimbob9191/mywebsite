import type { CaseStudy } from "@/types";

const dashboardRedesign: CaseStudy = {
  slug: "dashboard-redesign",
  title: "Analytics Dashboard Redesign",
  subtitle: "Making complex data legible for non-technical stakeholders",
  client: "Vantage",
  year: 2023,
  role: "Product Designer",
  tags: ["Data Visualisation", "Product Design", "SaaS"],
  coverImage: "/images/placeholder.avif",
  coverAlt: "Vantage analytics dashboard showing key metrics",
  accentColor: "#E8D5E0",
  featured: true,
  order: 4,
  published: true,
  summary:
    "Redesigned Vantage's core analytics dashboard to surface the right data at the right time, cutting time-to-insight by 55% and improving weekly active usage among non-technical users by 3×.",
  sections: [
    {
      type: "text",
      heading: "The Problem",
      body: "Vantage's dashboard had been built incrementally by engineers — every metric the product could track was displayed, all the time. Non-technical stakeholders reported feeling overwhelmed and defaulted to requesting manual reports from the data team instead of using the product themselves. The dashboard was technically comprehensive but practically unusable for its intended audience.",
    },
    {
      type: "stats",
      items: [
        { label: "Time-to-insight reduction", value: "−55%" },
        { label: "Non-technical WAU growth", value: "3×" },
        { label: "Manual report requests", value: "−40%" },
      ],
    },
    {
      type: "text",
      heading: "Design Approach",
      body: "I introduced a tiered information architecture: a summary view showing the five metrics that mattered most to each role, with the full data set one click away. Charts were standardised and labelled in plain language. A contextual help system explained what each metric meant and why it mattered — reducing the cognitive load for users unfamiliar with analytics terminology.",
    },
    {
      type: "text",
      heading: "Outcome",
      body: "The redesigned dashboard shipped in Q4 2023. Weekly active usage among non-technical users tripled in the following quarter. Manual report requests to the data team dropped by 40%, freeing significant capacity. Time-to-insight in usability testing fell from an average of 4.2 minutes to 1.9 minutes.",
    },
  ],
};

export default dashboardRedesign;
