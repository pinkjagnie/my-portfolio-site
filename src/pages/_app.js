import React from 'react';

import { NextSeo } from 'next-seo';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return(
    <>
      <NextSeo
        title="Pink Jagnie - Olga Krzysztofik"
        description="Olga Krzysztofik - Pink Jagnie. Jestem frontend developerką z różnorodnym doświadczeniem. Opowiadam bez filtra o życiu programistki i kobiecej stronie w branży IT."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://www.pinkjagnie.pl/myFavicon_48-48_square.png',
          }]
        }
        canonical="https://www.pinkjagnie.pl"
        openGraph={{
          type: 'website',
          url: 'https://www.pinkjagnie.pl',
          title: 'Pink Jagnie - Olga Krzysztofik',
          description: 'Olga Krzysztofik - Pink Jagnie. Jestem frontend developerką z różnorodnym doświadczeniem. Opowiadam bez filtra o życiu programistki i kobiecej stronie w branży IT.',
          images: [
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_01.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_02.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_03.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_04.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_05.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_06.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_07.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_08.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_09.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
            {
              url: 'http://images.urlify.cf/pinkjagnie/pinkjagnie_social-banner_800-600_10.png',
              width: 800,
              height: 600,
              alt: 'Pink Jagnie - Olga Krzysztofik',
              type: 'image/png',
            },
          ],
          siteName: 'Pink Jagnie - Olga Krzysztofik',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
