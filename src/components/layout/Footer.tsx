export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {year} Your Name</p>
        <p>
          Available for freelance work &mdash;{" "}
          <a
            href="mailto:hello@yourname.com"
            className="text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
          >
            hello@yourname.com
          </a>
        </p>
      </div>
    </footer>
  );
}
