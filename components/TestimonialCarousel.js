'use client';
import { useEffect, useState } from 'react';

export default function TestimonialCarousel({ testimonials, interval = 6000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!testimonials?.length) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), interval);
    return () => clearInterval(t);
  }, [testimonials, interval]);

  if (!testimonials?.length) return null;

  return (
    <div className="container">
      <div className="t-quote-mark">&quot;</div>
      <div className="t-track">
        {testimonials.map((t, i) => (
          <div key={t._id} className={`t-slide${i === index ? ' active' : ''}`}>
            <p>{t.quote}</p>
            <div className="t-name">
              <b>{t.name}</b>
              {t.location ? ` — ${t.location}` : ''}
            </div>
          </div>
        ))}
      </div>
      <div className="t-dots">
        {testimonials.map((t, i) => (
          <button
            key={t._id}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
