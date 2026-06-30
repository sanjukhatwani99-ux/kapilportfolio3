import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60;

async function getData() {
  try {
    const [photos, films] = await Promise.all([
      client.fetch(`*[_type == "weddingPhoto"] | order(order asc){_id, image, label}`),
      client.fetch(`*[_type == "weddingFilm"] | order(order asc){_id, title, youtubeId}`)
    ]);
    return { photos, films };
  } catch {
    return { photos: [], films: [] };
  }
}

export default async function WeddingsPage() {
  const { photos, films } = await getData();

  return (
    <section className="page active">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1800&q=80')" }}
      >
        <div className="container ph-inner">
          <span className="eyebrow">Candid & considered</span>
          <h1>Wedding Photography</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Weddings</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">In pictures</span>
            <h2 className="heading">Wedding Photos</h2>
          </div>
          <div className="wed-photo-grid reveal delay-1">
            {photos.map((p) => (
              <div key={p._id} className="gallery-item">
                <img src={urlForImage(p.image)?.width(900).url()} alt={p.label} />
                <span className="gi-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-deep">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">In motion</span>
            <h2 className="heading">Wedding Films</h2>
          </div>
          <div className="film-grid reveal delay-1">
            {films.map((f) => (
              <div key={f._id} className="film-card" data-yt={f.youtubeId}>
                <img src={`https://img.youtube.com/vi/${f.youtubeId}/hqdefault.jpg`} alt={f.title} />
                <span className="play">
                  <span className="play-btn">
                    <svg viewBox="0 0 24 24">
                      <polygon points="6,4 20,12 6,20" />
                    </svg>
                  </span>
                </span>
                <div className="film-meta">
                  <span className="cat">Wedding Film</span>
                  <h4>{f.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
