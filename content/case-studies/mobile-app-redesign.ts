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
      body: "In order to help alleviate the issues above, I focused on four key design improvements:\n\n1. Set a clear type hierarchy across all onboarding screens.\n2. Consolidated the styling of inputs and buttons to a single consistent pattern.\n3. Adjusted the colour scheme to inspire trust and reduce visual noise.\n4. Ensured the dashboard's visual language aligned with the onboarding flow it follows.",
    },
  ],
};

export default mobileAppRedesign;
