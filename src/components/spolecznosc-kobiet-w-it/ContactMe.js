import React from "react";
import Link from "next/link";

import { SiGmail, SiLinkedin, SiInstagram, SiTelegram } from 'react-icons/si';

const ContactMe = () => {
  return(
    <section className="w-[100%] overflow-x-hidden pt-4">
      <div className="relative flex flex-col items-center justify-center">
        <p className="absolute top-2 -left-[10%] h-[30px] w-[120%] md:w-[600px] md:left-[calc(50%-300px)] lg:w-[700px] lg:left-[calc(50%-350px)] xl:w-[900px] xl:left-[calc(50%-450px)] bg-[#f7bbcb]"></p>
        <p className="text-2xl relative z-10 text-center">Skontaktuj się ze mną</p>
      </div>

      <div className="flex flex-col items-left pt-4 pb-8 w-[90%] mx-auto min-[600px]:w-[50%] lg:w-[30%]">

        <p className="w-[90%] mx-auto pt-2 pb-6 text-center">Masz do mnie jakąś sprawę? A może po prostu chcesz porozmawiać?</p>
        
        <div className='flex flex-row items-center pb-4'>
          <SiGmail size={30} className="text-[#d66382] pr-2" />
          <Link href="mailto:olga.krzysztofik@gmail.com" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> wyślij do mnie maila na olga.krzysztofik@gmail.com</Link>
        </div>
        <div className='flex flex-row items-center pb-4'>
          <SiLinkedin size={30} className="text-[#d66382] pr-2" />
          <Link href="https://www.linkedin.com/in/olga-krzysztofik/" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> zostańmy w kontakcie na Linkedin</Link>
        </div>
        <div className='flex flex-row items-center pb-4'>
          <SiInstagram size={30} className="text-[#d66382] pr-2" />
          <Link href="https://instagram.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> wpadnij na mojego Instagrama</Link>
        </div>
        <div className='flex flex-row items-center'>
          <SiTelegram size={30} className="text-[#d66382] pr-2" />
          <Link href="https://t.me/PinkJagnie" target="_blank" rel="noopener noreferrer" className="px-2 cursor-pointer"> wyślij mi telegram na @PinkJagnie</Link>        
        </div>
      </div>

    </section>
  )
};

export default ContactMe;