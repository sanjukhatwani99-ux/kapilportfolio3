import { client } from '@/sanity/lib/client';

export const revalidate = 60;

async function getFilms() {
  try {
    return await client.fetch(`*[_type == "film"] | order(order asc){_id, category, title, youtubeId}`);
  } catch {
    return [];
  }
}

export default async function FilmsPage() {
  const films = await getFilms();

  return (
    <section className="page active">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80')" }}
      >
        <div className="container ph-inner">
          <span className="eyebrow">Motion & sound</span>
          <h1>Wedding & Event Films</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Films</span>
          </div>
        </div>
      </div>

      <section className="section intro-block">
        <div className="container">
          <span className="eyebrow reveal">Cinematic storytelling</span>
          <h2 className="heading reveal delay-1">
            Films built to play back
            <br />
            exactly how the day felt.
          </h2>
          <p className="lead reveal delay-2">
            Our film team shoots alongside our photographers, never in front of them — using
            natural light, ambient sound and a documentary lens to cut films that hold up on a
            rewatch, years later.
          </p>
        </div>
      </section>

      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="film-grid">
            {films.map((film) => (
              <div key={film._id} className="film-card reveal" data-yt={film.youtubeId}>
                <img src={`https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`} alt={film.title} />
                <span className="play">
                  <span className="play-btn">
                    <svg viewBox="0 0 24 24">
                      <polygon points="6,4 20,12 6,20" />
                    </svg>
                  </span>
                </span>
                <div className="film-meta">
                  <span className="cat">{film.category}</span>
                  <h4>{film.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80')" }}>
        <div className="container inner">
          <span className="eyebrow reveal">See more of our work</span>
          <h2 className="heading reveal delay-1">Watch The Full Showreel</h2>
          <p className="reveal delay-2">Get in touch and we&apos;ll share our latest films and full-length features privately.</p>
          <a href="/contact" className="btn outline reveal delay-3">Request The Showreel</a>
        </div>
      </section>
    </section>
  );
}
