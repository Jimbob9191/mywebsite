import PhotoGrid from "@/components/photography/PhotoGrid";
import { getAllPhotos } from "@/lib/photography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Personal photography — places, people, and light.",
};

export default function PhotographyPage() {
  const photos = getAllPhotos();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-medium mb-3">Photography</h1>
        <p className="text-muted-foreground text-sm">
          Shot on film and digital. Mostly travel and street.
        </p>
      </div>

      <PhotoGrid photos={photos} />
    </div>
  );
}
