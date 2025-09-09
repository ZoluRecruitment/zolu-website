// src/components/Slideshow.tsx
import { useEffect, useState } from "react";

// Use your actual files (PNG per your note)
import Logo from "../assets/logo.png";
import Diana from "../assets/diana.png";
import Michael from "../assets/michael.png";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  { src: Logo, alt: "ZoLu Logo" },
  { src: Diana, alt: "Diana Zola" },
  { src: Michael, alt: "Michael Luongo" },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  // 6 seconds per slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-light-cream p-8 rounded-2xl">
      <div className="relative overflow-hidden rounded-xl shadow-lg h-80">
        {/* Stack all slides and cross-fade */}
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
              ${i === index ? "opacity-100" : "opacity-0"}`}
            // Avoid layout shift when images load
            loading="eager"
            decoding="async"
          />
        ))}

        {/* Dots (keep these; remove if you don't want controls) */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
      {/* Removed the "ZoLu Logo • Diana • Michael" caption */}
    </div>
  );
}
