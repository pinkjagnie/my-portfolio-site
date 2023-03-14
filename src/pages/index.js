import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import CookieConsent from "react-cookie-consent";

import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Olga Krzysztofik - Pink Jagnie</title>
        <meta name="description" content="Olga Krzysztofik - Pink Jagnie. Jestem frontend developerką z różnorodnym doświadczeniem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myFavicon_48-48_square.png" />
      </Head>
      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        style={{ background: "#CBD5E1", paddingLeft: '2%', paddingRight: '2%', paddingTop: '1%', paddingBottom: '1%' }}
        buttonStyle={{ background: "#d66382", color: "whitesmoke", fontSize: "14px" }}
      >
        Ta strona wykorzystuje pliki cookies do prawidłowego działania.
      </CookieConsent>
      <main className='bg-zinc-100'>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
