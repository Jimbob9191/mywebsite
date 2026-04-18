import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Personal photography — places, people, and light.",
};

export default function PhotographyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium mb-3">Photography</h1>
      <p className="text-muted-foreground text-sm">Coming soon.</p>
    </div>
  );
}
