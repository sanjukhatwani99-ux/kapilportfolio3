'use client';
import { useEffect, useRef, useState } from 'react';

export default function VideoLightbox() {
  const [ytId, setYtId] = useState(null);
  const frameRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      const card = e.target.closest('[data-yt]');
      if (card) setYtId(card.getAttribute('data-yt'));
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setYtId(null);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = ytId ? 'hidden' : '';
    return () => document.removeEventListener('keydown', onKey);
  }, [ytId]);

  if (!ytId) return null;

  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(20,15,10,.92)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setYtId(null);
      }}
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: 960, aspectRatio: '16/9', background: '#000' }}>
        <button
          aria-label="Close video"
          onClick={() => setYtId(null)}
          style={{
            position: 'absolute',
            top: -44,
            right: 0,
            background: 'none',
            border: 0,
            color: '#fff',
            fontSize: 30,
            lineHeight: 1,
            cursor: 'pointer'
          }}
        >
          &times;
        </button>
        <iframe
          ref={frameRef}
          style={{ width: '100%', height: '100%', border: 0 }}
          src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=0&rel=0&playsinline=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
