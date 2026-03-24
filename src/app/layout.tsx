import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Your Name — UX/UI Designer",
    template: "%s — Your Name",
  },
  description:
    "UX/UI designer crafting clean, considered digital products. Available for freelance work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p)){document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
