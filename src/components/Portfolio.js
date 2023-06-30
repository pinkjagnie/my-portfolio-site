import React from 'react';
import Link from 'next/link';

import { MdOutlineWebAsset } from 'react-icons/md';
import { RxGithubLogo } from 'react-icons/rx';

const Portfolio = () => {
  return(
    <section id="portfolio" className='pb-8'>
      <h1 className='w-[100%] text-2xl text-center py-2 mb-6 bg-[#f7bbcb]'>Moje najważniejsze projekty</h1>

      <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 lg:pt-4 max-w-[1100px] lg:mx-auto'>

        <div className='w-[95%] mx-auto mb-8 border-2 border-[#d66382] p-2 rounded-sm min-[540px]:w-[75%] md:w-[60%] lg:w-[80%]'>
          <h2 className='font-medium text-center text-lg py-2'>AxiomOS</h2>
          <div className='axiomPreviewImage w-[240px] h-[100px] min-[320px]:w-[280px] min-[320px]:h-[120px] min-[360px]:w-[310px] min-[360px]:h-[150px] my-2 mx-auto border'></div>
          <p className='pt-2 md:px-2'>Dwie strony internetowe dla mobilnego systemu operacyjnego. Obie zawierają komunikację z zewnętrznym API. axiomos.pl to ogólny landing page dotyczący systemu, natomiast hub.axiomos.pl to strona, gdzie użytkownik może sprawdzić poziom bezpieczeństwa poszczególnych aplikacji.</p>
          <div className='flex justify-end items-center pr-4 py-2 cursor-pointer'>
            <Link href="https://www.axiomos.pl/" target="_blank" rel="noopener noreferrer" className="text-[#d66382]"><MdOutlineWebAsset size={20} /></Link>
          </div>
        </div>

        <div className='w-[95%] mx-auto mb-8 border-2 border-[#d66382] p-2 rounded-sm min-[540px]:w-[75%] md:w-[60%] lg:w-[80%]'>
          <h2 className='font-medium text-center text-lg py-2'>Weather forecast app</h2>
          <div className='weatherPreviewImage w-[240px] h-[100px] min-[320px]:w-[280px] min-[320px]:h-[120px] min-[360px]:w-[310px] min-[360px]:h-[150px] my-2 mx-auto border'></div>
          <p className='pt-2 md:px-2'>Projekt aplikacji pogodowej. Zawiera search bar lokalizacji, dla której wyświetlane są informacje pogodowe. W zależności od stanu opadów, zachmurzenia i temperatury wyświetlane są inne ikony oraz inny background. Zawiera komunikację z zewnętrznym API.</p>
          <div className='flex justify-end items-center pr-4 py-2 cursor-pointer'>
            <Link href="https://github.com/pinkjagnie/weather-app" target="_blank" rel="noopener noreferrer" className="text-[#d66382]"><RxGithubLogo size={20} /></Link>
          </div>
        </div>

        <div className='w-[95%] mx-auto mb-8 border-2 border-[#d66382] p-2 rounded-sm min-[540px]:w-[75%] md:w-[60%] lg:w-[80%]'>
          <h2 className='font-medium text-center text-lg py-2'>Movie app</h2>
          <div className='moviePreviewImage w-[240px] h-[100px] min-[320px]:w-[280px] min-[320px]:h-[120px] min-[360px]:w-[310px] min-[360px]:h-[150px] my-2 mx-auto border'></div>
          <p className='pt-2 md:px-2'>Projekt wykonany w Next.js. Baza filmów umożliwiająca ich ocenianie. Oceny zapisywane są w MongoDB, ponadto obliczana jest średnia ocen. Użytkownik może również dodać nowy film, który zostanie zapisany w bazie.</p>
          <div className='flex justify-end items-center pr-4 py-2 cursor-pointer'>
            <Link href="https://github.com/pinkjagnie/movie-app-next" target="_blank" rel="noopener noreferrer" className="text-[#d66382]"><RxGithubLogo size={20} /></Link>
          </div>
        </div>

        <div className='w-[95%] mx-auto border-2 border-[#d66382] p-2 rounded-sm min-[540px]:w-[75%] md:w-[60%] lg:w-[80%]'>
          <h2 className='font-medium text-center text-lg py-2'>Chat app</h2>
          <div className='chatPreviewImage w-[240px] h-[100px] min-[320px]:w-[280px] min-[320px]:h-[120px] min-[360px]:w-[310px] min-[360px]:h-[150px] my-2 mx-auto border'></div>
          <p className='pt-2 md:px-2'>Chat app z wykorzystaniem Socket.IO działa na zasadzie konsultanta. Klient może rozpocząć konwersację, wysłana wiadomość będzie widoczna w panelu admina, gdzie admin może udzielić odpowiedzi. Wymiana wiadomości między klientem a adminem następuje w czasie rzeczywistym.</p>
          <div className='flex justify-end items-center pr-4 py-2 cursor-pointer'>
            <Link href="https://github.com/pinkjagnie/chat-app" target="_blank" rel="noopener noreferrer" className="text-[#d66382]"><RxGithubLogo size={20} /></Link>
          </div>
        </div>

      </div>

    </section>
  )
};

export default Portfolio;