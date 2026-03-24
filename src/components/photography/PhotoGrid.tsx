import Image from "next/image";
import type { Photo } from "@/types";

interface Props {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: Props) {
  if (photos.length === 0) {
    return (
      <div className="py-24 text-center text-muted-foreground">
        <p className="text-sm">
          Add photos to <code className="text-xs bg-muted px-1.5 py-0.5 rounded">public/images/photography/</code>
        </p>
        <p className="text-sm mt-2">
          Then add entries to <code className="text-xs bg-muted px-1.5 py-0.5 rounded">src/lib/photography.ts</code>
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {photos.map((photo, i) => (
        <figure key={i} className="break-inside-avoid">
          <div className="relative overflow-hidden rounded-sm bg-muted">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {photo.location && (
            <figcaption className="mt-2 text-xs text-muted-foreground">
              {photo.location}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
