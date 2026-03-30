import Link from "next/link";
import DitherBackground from "@/components/home/DitherBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full">
      <DitherBackground />

      {/* Left gradient for text legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none" />
      {/* Bottom gradient to soften transition into page content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">
            UX / UI Designer
          </p>

          <h1 className="text-5xl sm:text-6xl font-medium leading-[1.1] tracking-tight mb-8">
            Product Obsessed Designer &amp; Creative
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Hi, I&apos;m James, a product focused UX/UI professional with 5 years&apos; experience delivering user friendly, accessible and engaging digital products.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center h-10 px-6 rounded-sm bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/80"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center h-10 px-6 rounded-sm text-sm font-medium transition-colors hover:bg-stone-100 dark:hover:bg-muted"
            >
              About Me
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://dribbble.com/jamesmolyneuxbirch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zm8.547 8.54c-2.029 0-3.9-.7-5.38-1.855.174-.313 2.15-4.132 7.05-5.858.022-.011.033-.011.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.547.76zm4.508-1.279a36.78 36.78 0 0 0-1.682-6.08c2.646-.423 4.967.271 5.258.358a8.505 8.505 0 0 1-3.576 5.722z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jamesmolyneuxbirch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
