import type { CaseStudy } from "@/types";

const designSystem: CaseStudy = {
  slug: "crsmi-redesign",
  title: "Redesigning a Client Management Portal",
  subtitle: "Rebuilding CRSMI's reporting platform to bring a fragmented internal tool back to market-leading standard",
  client: "coeo",
  year: 2020,
  role: "Lead UX/UI Designer",
  tags: ["UX/UI", "Dashboards", "Finance"],
  coverImage: "/images/placeholder.avif",
  coverAlt: "CRSMI client management portal dashboard",
  accentColor: "#D5DDE8",
  featured: true,
  order: 2,
  published: true,
  summary:
    "A ground-up redesign of coeo's internal client reporting portal, cutting task completion time nearly in half and lifting user satisfaction from 65% to 92%.",
  sections: [
    {
      type: "text",
      heading: "Background",
      body: "CRSMI is an internally built data management and reporting platform used by account managers and clients. The platform allows users to manipulate and interrogate data as they please, offering a standard set of reports which can then be expanded further.\n\nWhile coeo offers a range of services, the core business model follows a simple flow: a client engages coeo for debt recovery services, account managers use CRSMI to track and manage client portfolios, and coeo then delivers results and insights back to clients through the same portal.",
    },
    {
      type: "text",
      heading: "The Problem",
      body: "Over time, CRSMI had grown through incremental feature additions. While these expanded its capabilities, they also introduced significant inconsistency across design and functionality. Features were added without a clear structure or information hierarchy, resulting in a cluttered menu of mismatched reports and tools. Inconsistent page layouts and non-standardised forms created a fragmented user experience, which became even more frustrating on devices and screens outside of a 16:9 ratio.\n\nThe project set out to rebuild the client reporting functionality from the ground up — establishing a unified design language, streamlining navigation, and making features more intuitive to access.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Screenshots of the original CRSMI portal",
      caption: "The original portal — inconsistent layouts, dark theme, and cluttered navigation.",
      fullWidth: true,
    },
    {
      type: "text",
      heading: "Research & Discovery",
      body: "Research methods: User Interviews, Usability Testing, Analytics Review, Heat Mapping, Card Sorting.\n\nKey insights from research:\n\nClients found the portal's dark theme dated and difficult to use, particularly when reading tables and graphs — reducing trust in the platform. Locating specific reports was time consuming; many clients abandoned their search and contacted their account manager instead, undermining the self-service purpose. The absence of sort and filter options meant clients couldn't focus on the data most relevant to them. Users were often unaware when new features were released, leaving development effort underutilised. Tables and data were presented with poor spacing, making them difficult to scan quickly. Adding or removing users required manual support team intervention rather than direct client control. Most account management happened on laptops where the portal felt cramped and failed to adapt to smaller screens.",
    },
    {
      type: "text",
      heading: "Process",
      body: "As lead designer on the project, I was responsible for shaping the user experience by gathering insights and restructuring content to better serve both internal teams and clients. My approach combined research, testing, and iterative design:\n\nI partnered with account managers to understand the information clients most frequently request, then surfaced these priorities through the homepage and navigation. I conducted card-sorting exercises with internal teams to reorganise reports, reducing cognitive load and making key content easier to locate. I leveraged Hotjar heat mapping to identify the most-used tools and where users encountered friction. I analysed competitor platforms that handle complex data to establish best practices and opportunities for differentiation. I designed and validated end-to-end user journeys, ensuring clear pathways to critical reports. I facilitated prototype testing sessions with account managers to validate design decisions and gather actionable feedback.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Redesigned CRSMI portal screens",
      caption: "The redesigned portal — unified design language, light theme, and streamlined navigation.",
      fullWidth: true,
    },
    {
      type: "text",
      heading: "Outcomes",
      body: "Working with the development team and key stakeholders, we improved the user experience and returned the platform to a market-leading position. After shipping the first iteration, we saw an immediate improvement in user satisfaction and task completion times.\n\nWe simplified navigation by reducing menu items by 30% and grouping features into intuitive categories that align with user mental models. We built a comprehensive design system that standardised all UI components, accelerating development of new features — later extended to other internal tools across the organisation. We introduced clearer data visualisations and reporting tools, enabling users to quickly interpret client performance. We implemented responsive design, delivering a consistent experience across all devices. We added powerful search and filtering capabilities, cutting administrative time significantly. We gave users the ability to manage their own teams — adding and removing members and adjusting access levels without relying on admin support. We introduced a centralised notifications area, keeping users informed about new report types, portfolio updates, and the latest published content from coeo.",
    },
    {
      type: "stats",
      items: [
        { label: "Task completion time", value: "15min → 8min" },
        { label: "User satisfaction", value: "65% → 92%" },
        { label: "Monthly support tickets", value: "−30%" },
      ],
    },
  ],
};

export default designSystem;
