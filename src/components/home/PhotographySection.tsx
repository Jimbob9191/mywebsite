import Link from "next/link";
import PhotoGrid from "@/components/photography/PhotoGrid";
import type { Photo } from "@/types";

interface Props {
  photos: Photo[];
}

export default function PhotographySection({ photos }: Props) {
  const preview = photos.slice(0, 6);

  return (
    <section className="border-t border-border max-w-5xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl font-medium mb-3">Photography</h2>
          <p className="text-muted-foreground text-sm">
            Shot on film and digital. Mostly travel and street.
          </p>
        </div>
        <Link
          href="/photography"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>

      {preview.length > 0 ? (
        <PhotoGrid photos={preview} />
      ) : (
        <p className="text-muted-foreground text-sm">
          Photos coming soon.
        </p>
      )}
    </section>
  );
}
