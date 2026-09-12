"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + total) % total);
  };

  return (
    <div className="carousel">
      <div className="carousel-card card">
        <p className="carousel-quote">&ldquo;{current.quote}&rdquo;</p>
        <p className="carousel-author">
          {current.name} · {current.location}
        </p>
      </div>

      <div className="carousel-controls">
        <button aria-label="Testimonio anterior" onClick={() => go(-1)}>
          ←
        </button>
        <div className="carousel-dots">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button aria-label="Siguiente testimonio" onClick={() => go(1)}>
          →
        </button>
      </div>
    </div>
  );
}
