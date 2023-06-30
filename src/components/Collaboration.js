import React from 'react';
import Image from 'next/image';

import { iconWebsiteDesign, iconLongtermCollab, iconSingleCollabV1, iconSingleCollabV2, iconHaveIdea } from '@/assets/index';

const Collaboration = () => {
  return(
    <section>
      <h1 className='w-[100%] text-2xl text-center py-2 mb-6 bg-[#f7bbcb]'>Co mogę dla ciebie zrobić</h1>

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
    </section>
  )
};

export default Collaboration;