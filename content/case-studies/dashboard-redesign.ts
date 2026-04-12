import type { CaseStudy } from "@/types";

const mycrs: CaseStudy = {
  slug: "mycrs",
  title: "Redesigning a Payment Portal",
  subtitle:
    "Modernising a 2013 desktop portal for the 95% of users now arriving on mobile",
  client: "MYCRS",
  year: 2019,
  role: "Lead UX/UI Designer",
  tags: ["UX/UI", "Mobile", "Finance"],
  coverImage: "/images/placeholder.avif",
  coverAlt: "MYCRS payment portal on mobile",
  accentColor: "#E8D5E0",
  featured: true,
  order: 4,
  published: true,
  summary:
    "A full redesign of CRS's debtor-facing payment portal — overhauling a 2013 desktop build to serve a mobile-first audience, cutting bounce rate by 32% and lifting single payment conversions by 20%.",
  sections: [
    {
      type: "text",
      heading: "Background",
      body: "MYCRS is the customer-facing payment portal for CRS, a debt recovery business. The CRS collection process follows a straightforward sequence: a customer fails to pay for a product or service, the original company attempts collection, the debt is transferred to CRS, and CRS recovers the balance while earning commission on successful collections.\n\nThe portal enables debtors to view their account, make payments, and manage arrangements — making it a direct revenue-generating surface for the business.",
    },
    {
      type: "text",
      heading: "The Problem",
      body: "Originally designed for desktop in 2013, the portal had not kept pace with shifting user behaviour. By late 2019, 95% of traffic was arriving on mobile — yet the experience had been built for a screen size almost no user was on.\n\nThe platform suffered from a cascade of compounding problems: accessibility failures, poor information hierarchy, and a JavaScript dependency that caused inconsistent behaviour across devices. Users struggled to complete essential tasks, eroding trust and directly reducing revenue. The goal was to deliver a consistent, accessible, device-agnostic experience that restored customer confidence and drove payment conversion.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Screenshots of the original MYCRS portal on mobile",
      caption:
        "The original portal — built for desktop in 2013, breaking down for the 95% on mobile.",
      fullWidth: true,
    },
    {
      type: "text",
      heading: "Research & Discovery",
      body: "Research methods: Heat mapping, user personas, analytics review, customer feedback analysis.\n\nKey insights:\n\nCustomers frequently didn't recognise CRS branding when arriving via SMS or email links, creating immediate confusion and mistrust that led to high early drop-off. Mobile users typically accessed the portal mid-workday from a link, meaning the login experience needed to be frictionless and fast. Negative reviews from poor portal experiences were perpetuating a cycle of low engagement — users who had one bad experience simply didn't return. Technical issues were blocking payment completion even after successful authentication, resulting in lost revenue with no visible error feedback. The homepage asked for too much information upfront, discouraging exploration before users had established any trust. Pre-login content provided insufficient context for users unfamiliar with CRS, forcing them to contact support through other channels rather than self-serving.",
    },
    {
      type: "text",
      heading: "Process",
      body: "As lead designer, I was responsible for the complete overhaul of the portal — prioritising security, intuitiveness, and alignment with business objectives under tight timelines.\n\nI used Hotjar heat mapping to identify where users were dropping off and what content they were engaging with. I conducted interviews with stakeholders and support agents to surface the most common failure points and user questions. I developed user personas representing the range of debtor profiles — from users comfortable with self-service to those who needed significant hand-holding through the process.\n\nFrom there I restructured user flows to reduce friction at each critical step, established a new design system to bring visual consistency to the product, and ran prototype testing internally before moving to broader validation.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Redesigned MYCRS portal screens on mobile",
      caption: "The redesigned portal — mobile-first, accessible, and built around user trust.",
      fullWidth: true,
    },
    {
      type: "text",
      heading: "Outcomes",
      body: "The redesign shipped a substantially improved experience across every key user journey. We introduced progressive identity verification using commitment bias — hiding secondary login questions until after the initial submission to reduce perceived effort and improve completion rates.\n\nSelf-service tools were added including an interactive FAQ and full account management features, significantly reducing inbound support contacts. We built an early white-label capability prototype, establishing a foundation for future expansion of the platform to other clients. Interaction feedback was improved throughout the payment process, giving users clear confirmation at each step. A comprehensive account dashboard was introduced, displaying arrangement duration, payment amounts, and upcoming schedules — giving users the information they needed to feel in control.",
    },
    {
      type: "stats",
      items: [
        { label: "Bounce rate", value: "−32%" },
        { label: "Single payment conversion", value: "+20%" },
        { label: "Token payment rate", value: "+50%" },
      ],
    },
  ],
};

export default mycrs;
