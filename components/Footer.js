import Link from 'next/link';

export default function Footer({ settings }) {
  const s = settings || {};
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span>K</span>apilcaptures
            </Link>
            <p>
              A photography and film studio based in Ahmedabad, covering weddings, films and
              corporate events across Gujarat and beyond.
            </p>
            <div className="footer-social">
              {s.instagramUrl && <a href={s.instagramUrl} aria-label="Instagram">IG</a>}
              {s.facebookUrl && <a href={s.facebookUrl} aria-label="Facebook">FB</a>}
              {s.linkedinUrl && <a href={s.linkedinUrl} aria-label="LinkedIn">IN</a>}
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <ul className="f-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/films">Films</Link></li>
              <li><Link href="/weddings">Weddings</Link></li>
              <li><Link href="/corporate">Corporate Events</Link></li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul className="f-links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/book">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get In Touch</h5>
            <ul className="f-contact">
              {s.address && <li>{s.address}</li>}
              {s.email && <li><a href={`mailto:${s.email}`}>{s.email}</a></li>}
              {s.phone && <li><a href={`tel:${s.phone}`}>{s.phone}</a></li>}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kapilcaptures Photography Studio. All rights reserved.</span>
          <span>Designed with care, in Ahmedabad.</span>
        </div>
      </div>
    </footer>
  );
}
