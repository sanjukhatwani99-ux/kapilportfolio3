'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/films', label: 'Films' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/corporate', label: 'Corporate Events' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [solid, setSolid] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    function onScroll() {
      setSolid(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <header id="siteHeader" className={solid ? 'solid' : ''}>
      <div className="container">
        <Link href="/" className="logo">
          <span>K</span>apilcaptures
        </Link>
        <nav className={`main-nav${open ? ' open' : ''}`}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="nav-cta" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </nav>
        <button
          className={`burger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
