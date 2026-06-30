import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60;

async function getGallery() {
  try {
    return await client.fetch(`*[_type == "corporateItem"] | order(order asc){_id, image, label, tall}`);
  } catch {
    return [];
  }
}

export default async function CorporatePage() {
  const gallery = await getGallery();

  return (
    <section className="page active">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80')" }}
      >
        <div className="container ph-inner">
          <span className="eyebrow">Brand & business</span>
          <h1>Corporate Event Coverage</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Corporate Events</span>
          </div>
        </div>
      </div>

      <section className="section intro-block">
        <div className="container">
          <span className="eyebrow reveal">For brands & teams</span>
          <h2 className="heading reveal delay-1">
            The same editorial eye,
            <br />
            pointed at your business.
          </h2>
          <p className="lead reveal delay-2">
            Conferences, product launches, award nights and leadership summits — covered with the
            same candid, unobtrusive approach we bring to a wedding day, so the energy in the room
            comes through in every frame.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Recent briefs</span>
            <h2 className="heading">From The Corporate Archive</h2>
          </div>
          <div className="gallery-grid reveal delay-1">
            {gallery.map((item) => (
              <div key={item._id} className={`gallery-item${item.tall ? ' tall' : ''}`}>
                <img src={urlForImage(item.image)?.width(900).url()} alt={item.label} />
                <span className="gi-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=80')" }}>
        <div className="container inner">
          <span className="eyebrow reveal">Have an event coming up?</span>
          <h2 className="heading reveal delay-1">Bring Us On Site</h2>
          <p className="reveal delay-2">Share your event brief and team size and we&apos;ll put together a coverage plan.</p>
          <a href="/contact" className="btn outline reveal delay-3">Send Your Brief</a>
        </div>
      </section>
    </section>
  );
}
