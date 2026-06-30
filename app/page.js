import HeroSlider from '@/components/HeroSlider';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60; // re-check Sanity for new content every 60s

async function getData() {
  try {
    const [slides, recentWork] = await Promise.all([
      client.fetch(`*[_type == "heroSlide"] | order(order asc){_id, image}`),
      client.fetch(`*[_type == "recentWork"] | order(order asc){_id, image, label, tall}`)
    ]);
    return { slides, recentWork };
  } catch {
    return { slides: [], recentWork: [] };
  }
}

export default async function HomePage() {
  const { slides, recentWork } = await getData();

  return (
    <section className="page active">
      <HeroSlider slides={slides} />

      <section className="section bg-deep">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">A glimpse</span>
            <h2 className="heading">Recent Work</h2>
          </div>
          <div className="gallery-grid reveal delay-1">
            {recentWork.map((item) => (
              <div key={item._id} className={`gallery-item${item.tall ? ' tall' : ''}`}>
                <img src={urlForImage(item.image)?.width(900).url()} alt={item.label} />
                <span className="gi-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
