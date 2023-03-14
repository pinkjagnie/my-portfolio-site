import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PixelPhoto } from '@/assets/index';
import { SiInstagram, SiTiktok } from 'react-icons/si';

const PixelSM = () => {
  return(
    <section className='pt-6 w-[30%] mx-auto'>
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
    </section>
  )
};

export default PixelSM;