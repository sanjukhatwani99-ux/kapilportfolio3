'use client';
import { useEffect, useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';

export default function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides?.length) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides]);

  if (!slides?.length) return null;

  return (
    <div className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide._id}
          className={`hero-slide${i === index ? ' active' : ''}`}
          style={{ backgroundImage: `url('${urlForImage(slide.image)?.width(1800).url()}')` }}
        />
      ))}

      <div className="hero-actions reveal is-in">
        <a href="/book" className="btn outline">Book Now</a>
        <a href="/films" className="btn outline">Watch Our Films</a>
      </div>

      <div className="hero-dots">
        {slides.map((slide, i) => (
          <button
            key={slide._id}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
