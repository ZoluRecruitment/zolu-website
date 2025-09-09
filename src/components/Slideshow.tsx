import { useEffect, useState } from "react";

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

  // 15 seconds per slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center items-start">
      <div
        className="relative overflow-hidden rounded-xl shadow-lg w-full max-w-lg h-[540px] mt-16"
      >
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out
              ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
}
