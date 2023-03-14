import React from "react";
import Link from "next/link";

import { SiGithub, SiLinkedin } from 'react-icons/si';

const Navbar = () => {
  return(
    <section className="fixed left-0 top-0 w-full h-[9vh] z-20 bg-[#d66382] text-zinc-100">
      <div className="flex justify-around">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-lg leading-[9vh] pr-[4px]">olga krzysztofik</h1>
          <h1 className="hidden lg:visible lg:block lg:font-bold lg:text-lg lg:leading-[9vh]"> - pink jagnie</h1>
        </div>
        <div className="flex items-center justify-between">
          <Link href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2"><SiGithub size={20} /></Link>
          <Link href="https://www.linkedin.com/in/olga-krzysztofik/" target="_blank" rel="noopener noreferrer" className="px-2"><SiLinkedin size={20} /></Link>
        </div>
      </div>
    </section>
  )
};

export default Navbar;