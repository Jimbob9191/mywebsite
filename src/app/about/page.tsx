import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "UX/UI designer based in London. Focused on clarity, usability, and craft.",
};

const experience = [
  {
    role: "Lead Product Designer",
    company: "Company Name",
    period: "2022 — Present",
    description:
      "Leading design across three core product lines. Established the company's first design system and built the design team from two to six people.",
  },
  {
    role: "Senior UX Designer",
    company: "Agency Name",
    period: "2019 — 2022",
    description:
      "Worked with clients across fintech, health, and e-commerce. Delivered end-to-end product design for six major product launches.",
  },
  {
    role: "UX Designer",
    company: "Studio Name",
    period: "2017 — 2019",
    description:
      "Designed web and mobile experiences for early-stage startups. Introduced user research practices to a team that had previously worked without them.",
  },
];

const skills = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Prototyping",
  "Interaction Design",
  "Figma",
  "User Testing",
  "Information Architecture",
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left column */}
        <div>
          <h1 className="text-3xl font-medium mb-8">About</h1>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m James Molyneux-Birch, a UX/UI designer based in London. I&apos;ve been designing
              digital products for eight years, working across startups, agencies, and in-house
              teams.
            </p>
            <p>
              My practice is grounded in research. I believe good design begins with genuinely
              understanding the people you&apos;re designing for — not assuming you already know
              what they need. I work closely with engineers and product managers throughout the
              process, not just at the handoff.
            </p>
            <p>
              Outside of work I&apos;m interested in typography, architecture, and taking
              photographs. I&apos;m currently available for freelance and contract work.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:jamesmolyneuxbirch@gmail.com"
              className="text-sm font-medium underline underline-offset-4 hover:text-foreground/70 transition-colors"
            >
              jamesmolyneuxbirch@gmail.com
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-12">
          {/* Skills */}
          <div>
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-5">
              Disciplines
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-muted-foreground border border-border/60 rounded-sm px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <Separator className="opacity-40" />

          {/* Experience */}
          <div>
            <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={item.company}>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-sm font-medium">{item.role}</h3>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
