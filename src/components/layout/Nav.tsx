"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/photography", label: "Photography" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/40">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/70 transition-colors"
        >
          Your Name
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors ${
                      active
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
