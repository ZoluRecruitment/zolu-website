// src/components/Slideshow.tsx
import { useEffect, useState } from "react";

// Put these files in src/assets/
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

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-light-cream p-8 rounded-2xl">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full shrink-0">
              <img src={s.src} alt={s.alt} className="w-full h-80 object-cover" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-dark-gray mt-4">ZoLu Logo • Diana • Michael</p>
    </div>
  );
}
