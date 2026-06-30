import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import VideoLightbox from '@/components/VideoLightbox';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Kapilcaptures — Wedding, Film & Corporate Event Photography, Ahmedabad',
  description:
    'Kapilcaptures is an Ahmedabad-based photography and film studio covering weddings, wedding films and corporate events with a candid, cinematic eye.'
};

async function getSiteSettings() {
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]`);
  } catch {
    return null;
  }
}

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Allura&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer settings={settings} />
        <ScrollReveal />
        <VideoLightbox />
      </body>
    </html>
  );
}
