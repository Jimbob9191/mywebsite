import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">
          UX / UI Designer
        </p>

        <h1 className="text-5xl sm:text-6xl font-medium leading-[1.1] tracking-tight mb-8">
          Designing products people actually want to use.
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          I&apos;m Your Name, a designer focused on clarity, usability, and craft. I work with startups and
          established teams to turn complex problems into considered experiences.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center justify-center h-10 px-6 rounded-sm bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/80"
          >
            View Work
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center h-10 px-6 rounded-sm text-sm font-medium transition-colors hover:bg-muted"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
