import type { CaseStudy } from "@/types";

const mobileAppRedesign: CaseStudy = {
  slug: "metamask-onboarding",
  title: "Improving MetaMask's Onboarding",
  subtitle: "Redesigning the first-run experience for crypto's most popular wallet",
  client: "MetaMask",
  year: 2024,
  role: "UX/UI Designer",
  tags: ["UX/UI", "Finance", "Mobile"],
  coverImage: "/images/placeholder.avif",
  coverAlt: "MetaMask mobile onboarding screens",
  accentColor: "#E8E0D5",
  featured: true,
  order: 1,
  published: true,
  summary:
    "A visual redesign of MetaMask's mobile onboarding flow, establishing clear type hierarchy, consistent UI patterns, and a colour scheme calibrated to build trust with first-time crypto users.",
  sections: [
    {
      type: "text",
      heading: "Background",
      body: "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralised applications.\n\nIn this instance, I focussed on the mobile application available on the App Store.",
    },
    {
      type: "text",
      heading: "The Problem",
      body: "MetaMask has millions of users worldwide and a wide range of features. Upon opening the app for the first time, the user is walked through a short onboarding process to set up their wallet. For seasoned crypto enthusiasts this shouldn't be an issue, but for first timers it can be overwhelming or confusing.\n\nThere are four main steps in the onboarding before the user reaches the dashboard:\n\n1. Accept the terms of use.\n2. Create a password for your account.\n3. Review your recovery phrase.\n4. Enter the recovery phrase given to you.\n\nThese steps, although brief, give the user the basic knowledge needed to access their account. However, the information is presented in an inconsistent and at times confusing format, reducing any trust the user may already have in the platform. There is significant variation in the styling of buttons, inputs, and typography — and even when onboarding is complete and the user reaches the dashboard, the style of messaging changes once again.\n\nOverall, the process feels half-hearted and unprofessional. Which isn't something you want from an application meant for holding your investments.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Screenshots of the original MetaMask onboarding flow",
      caption: "The original onboarding screens — inconsistent styling across each step.",
      fullWidth: true,
    },
    {
      type: "stats",
      items: [
        { label: "Metric one", value: "—" },
        { label: "Metric two", value: "—" },
        { label: "Metric three", value: "—" },
      ],
    },
    {
      type: "text",
      heading: "Outcomes",
      body: "To address the inconsistency and trust issues, I focused on four targeted design improvements:\n\nI established a clear typographic hierarchy across all onboarding screens — bringing consistency to heading sizes, body copy, and instructional text so users always knew where to look and what action was expected of them.\n\nI consolidated inputs and buttons to a single consistent pattern. Previously, CTA styling changed at almost every step; the redesign uses one button style, one input style, and one error state throughout.\n\nI adjusted the colour scheme to reduce visual noise and better communicate trust — a critical quality signal for an application holding financial assets. The revised palette draws more clearly from MetaMask's brand while feeling calmer and more considered.\n\nFinally, I aligned the dashboard's visual language with the onboarding flow it follows. The jarring transition between the two — different typographic scales, different button styles, different spacing rhythms — was resolved so the product feels continuous from first screen to main interface.",
    },
    {
      type: "image",
      src: "/images/placeholder.avif",
      alt: "Redesigned MetaMask onboarding screens showing consistent styling across all steps",
      caption: "The redesigned flow — consistent type hierarchy, unified inputs, and a trust-calibrated colour scheme.",
      fullWidth: true,
    },
  ],
};

export default mobileAppRedesign;
