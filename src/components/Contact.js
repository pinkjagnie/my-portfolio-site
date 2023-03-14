import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { iconWebsiteDesign, iconLongtermCollab, iconSingleCollabV1, iconSingleCollabV2, iconHaveIdea, PixelPhoto } from '@/assets/index';
import { SiGmail, SiLinkedin, SiGithub, SiTelegram, SiInstagram, SiTiktok } from 'react-icons/si';

const Contact = () => {
  return(
    <section id="contact" className='pb-8'>
      <h1 className='w-screen text-2xl text-center py-2 mb-6 bg-[#f7bbcb]'>Co mogę dla ciebie zrobić</h1>

      <div className='w-[60%] py-2 mx-auto md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 xl:flex xl:w-[80%] xl:gap-0 xl:pb-4'>
        <div className='py-4 md:px-2'>
          <Image src={iconWebsiteDesign} width={168} height={168} alt='collaboration' className='mx-auto'/>
          <p className='text-center py-2 xl:w-[80%] xl:mx-auto'>Zaprojektowanie twojej strony www od podstaw</p>
        </div>
        <div className='py-4 md:px-2'>
          <Image src={iconLongtermCollab} width={168} height={168} alt='collaboration' className='mx-auto'/>
          <p className='text-center py-2 xl:w-[80%] xl:mx-auto'>Współpraca przy długofalowym projekcie</p>
        </div>
        <div className='py-4 md:px-2'>
          <Image src={iconSingleCollabV1} width={168} height={168} alt='collaboration' className='mx-auto'/>
          <p className='text-center py-2 xl:w-[80%] xl:mx-auto'>Współpraca przy pojedynczym zleceniu</p>
        </div>
        <div className='py-4 md:px-2'>
          <Image src={iconHaveIdea} width={168} height={168} alt='collaboration' className='mx-auto'/>
          <p className='text-center py-2 xl:w-[80%] xl:mx-auto'>Masz jakiś pomysł? Napisz do mnie</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
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

      <div className='pt-6 w-[30%] mx-auto'>
        <Image src={PixelPhoto} height={100} width={100} alt="Pixel" className='mx-auto' />
        <p className='pt-2 text-center'>Lubisz pieski? Wpadnij do mojego Pixela!</p>
        <div className='flex justify-center'>
          <div className='cursor-pointer pr-4'>
            <Link href="https://www.instagram.com/pixel.rad/" target="_blank" rel="noopener noreferrer" className="px-2"><SiInstagram size={30} className="text-[#d66382]" /></Link>
          </div>
          <div className='cursor-pointer'>
            <Link href="https://www.tiktok.com/@pixel.rad" target="_blank" rel="noopener noreferrer" className="px-2"><SiTiktok size={30} className="text-[#d66382]" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;