import ContactForm from '@/components/ContactForm';
import { client } from '@/sanity/lib/client';

export const revalidate = 60;

async function getSettings() {
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]`);
  } catch {
    return null;
  }
}

export default async function ContactPage() {
  const s = (await getSettings()) || {};

  return (
    <section className="page active">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')" }}
      >
        <div className="container ph-inner">
          <span className="eyebrow">Say hello</span>
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Studio details</span>
              <h2 className="heading">
                We&apos;d Love To Hear
                <br />
                About Your Plans
              </h2>
              <p style={{ color: 'var(--gray)', marginTop: 18, lineHeight: 1.85, fontSize: 15.3, maxWidth: 420 }}>
                Whether it&apos;s a wedding, a film or a corporate brief, tell us a little about it
                and we&apos;ll get back within one working day.
              </p>
              <ul className="info-list" style={{ marginTop: 38 }}>
                {s.address && (
                  <li>
                    <div>
                      <h5>Studio Address</h5>
                      <p>{s.address}</p>
                    </div>
                  </li>
                )}
                {s.email && (
                  <li>
                    <div>
                      <h5>Email</h5>
                      <a href={`mailto:${s.email}`}>{s.email}</a>
                    </div>
                  </li>
                )}
                {s.phone && (
                  <li>
                    <div>
                      <h5>Phone</h5>
                      <a href={`tel:${s.phone}`}>{s.phone}</a>
                    </div>
                  </li>
                )}
                {s.studioHours && (
                  <li>
                    <div>
                      <h5>Studio Hours</h5>
                      <p>{s.studioHours}</p>
                    </div>
                  </li>
                )}
              </ul>
              <div className="map-frame">
                <iframe
                  src="https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  title="Kapilcaptures studio location map"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="reveal delay-1">
              <span className="eyebrow">Send a message</span>
              <h2 className="heading" style={{ marginBottom: 30 }}>Quick Enquiry</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
