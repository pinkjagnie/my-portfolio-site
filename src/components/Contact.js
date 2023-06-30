import React from 'react';
import Link from 'next/link';

import Collaboration from './Collaboration';
import PixelSM from './PixelSM';

import { SiGmail, SiLinkedin, SiGithub, SiTelegram } from 'react-icons/si';

const Contact = () => {
  return(
    <section id="contact" className='pb-8'>
      
      <Collaboration />

      <div className="relative flex flex-col items-center justify-center overflow-x-hidden">
        <p className="absolute top-2 -left-[10%] h-[30px] w-[120%] md:w-[350px] md:left-[calc(50%-175px)] xl:w-[500px] xl:left-[calc(50%-250px)] bg-[#f7bbcb]"></p>
        <p className="text-2xl relative z-10 text-center">Skontaktuj się ze mną</p>
      </div>

      <p className='text-center py-4 text-lg'>Jestem otwarta na oferty współpracy</p>

      <div className="flex flex-col items-left pt-4 pb-8 w-[90%] mx-auto min-[600px]:w-[50%] lg:w-[30%]">
        
        <div className='flex flex-row items-center pb-4'>
          <SiGmail size={30} className="text-[#d66382] pr-2" />
          <Link href="mailto:olga.krzysztofik@gmail.com" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> wyślij do mnie maila na olga.krzysztofik@gmail.com</Link>
        </div>
        <div className='flex flex-row items-center pb-4'>
          <SiLinkedin size={30} className="text-[#d66382] pr-2" />
          <Link href="https://www.linkedin.com/in/olga-krzysztofik/" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> zostańmy w kontakcie na Linkedin</Link>
        </div>
        <div className='flex flex-row items-center pb-4'>
          <SiGithub size={30} className="text-[#d66382] pr-2" />
          <Link href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> zobacz mojego GitHuba</Link>
        </div>
        <div className='flex flex-row items-center'>
          <SiTelegram size={30} className="text-[#d66382] pr-2" />
          <Link href="https://t.me/PinkJagnie" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> wyślij mi telegram na @PinkJagnie</Link>        
        </div>
      </div>

      <PixelSM />
      
    </section>
  )
};

export default Contact;