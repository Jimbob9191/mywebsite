import type { Photo } from "@/types";

// Add your photos here. Place image files in public/images/photography/
// Example entry:
// { src: "/images/photography/kyoto-morning.jpg", alt: "Foggy morning in Kyoto", width: 1200, height: 800, location: "Kyoto, 2024" }

export const photos: Photo[] = [];

export function getAllPhotos(): Photo[] {
  return photos;
}
