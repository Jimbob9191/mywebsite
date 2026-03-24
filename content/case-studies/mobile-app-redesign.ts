import type { CaseStudy } from "@/types";

const mobileAppRedesign: CaseStudy = {
  slug: "mobile-app-redesign",
  title: "Fitness App Redesign",
  subtitle: "Rebuilding a cluttered workout tracker into something people actually want to use",
  client: "FitTrack",
  year: 2024,
  role: "Lead UX/UI Designer",
  tags: ["UX Research", "Product Design", "iOS", "Prototyping"],
  coverImage: "/images/case-studies/mobile-app-redesign/cover.jpg",
  coverAlt: "Redesigned FitTrack app screens on iPhone",
  accentColor: "#E8E0D5",
  featured: true,
  order: 1,
  published: true,
  summary:
    "A ground-up redesign of FitTrack's iOS app, reducing friction in the core logging flow and increasing daily active users by 41% within three months of launch.",
  sections: [
    {
      type: "text",
      heading: "The Problem",
      body: "FitTrack had grown organically over four years. Every feature request became a menu item, every edge case became a setting. The app had 11 screens between opening the app and logging a single exercise. Users were churning in the first week — not because the product lacked value, but because it was impossible to find it.",
    },
    {
      type: "stats",
      items: [
        { label: "Screens to log a workout", value: "11 → 3" },
        { label: "DAU increase post-launch", value: "+41%" },
        { label: "App Store rating", value: "3.1 → 4.7" },
      ],
    },
    {
      type: "text",
      heading: "Research",
      body: "I ran 12 user interviews with a mix of existing power users and churned users. The pattern was consistent: new users couldn't find the log button, and returning users were frustrated by how many taps it took to start a session. I also ran a competitive audit of 8 fitness apps, mapping their information architectures and identifying where the best performers simplified without sacrificing depth.",
    },
    {
      type: "image",
      src: "/images/case-studies/mobile-app-redesign/research.jpg",
      alt: "Affinity diagram from user interview synthesis",
      caption: "Synthesising 12 interviews into core pain point themes.",
      fullWidth: false,
    },
    {
      type: "text",
      heading: "Design Approach",
      body: "The solution centred on a persistent bottom sheet that let users start logging from anywhere in the app. The home screen became a dashboard rather than a menu — showing the user's last workout, a quick-start button, and their weekly streak. Navigation was reduced from a hamburger menu to a four-item tab bar with no nested sub-menus.",
    },
    {
      type: "image",
      src: "/images/case-studies/mobile-app-redesign/screens.jpg",
      alt: "Final app screens — home, log workout, and history",
      caption: "Home, logging flow, and history — the three screens that matter.",
      fullWidth: true,
    },
    {
      type: "quote",
      text: "I've been using the new version for two weeks and I haven't once had to think about where to tap. That's never happened with a fitness app before.",
      attribution: "Beta tester, user interview round 2",
    },
    {
      type: "text",
      heading: "Outcome",
      body: "The redesign shipped to iOS in September 2024. Within 90 days, daily active users increased 41%, the App Store rating climbed from 3.1 to 4.7, and support tickets related to navigation dropped by 68%. The simplified architecture also made it significantly easier for the engineering team to add new features without increasing interface complexity.",
    },
  ],
};

export default mobileAppRedesign;
