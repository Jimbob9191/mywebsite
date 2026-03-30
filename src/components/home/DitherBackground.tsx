"use client";

import { useEffect, useState } from "react";
import Dither from "@/components/ui/dither";

export default function DitherBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Dither
        bgColor={isDark ? [0.06, 0.06, 0.06] : [0.97, 0.96, 0.95]}
        waveColor={isDark ? [0.7, 0.7, 0.7] : [0.4, 0.4, 0.38]}
        colorNum={4}
        pixelSize={2}
        waveSpeed={0.05}
        waveFrequency={3}
        waveAmplitude={0.3}
      />
    </div>
  );
}
