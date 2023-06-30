import React from "react";
import Link from "next/link";

const Conferences = () => {
  return(
    <section className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto pb-6">
      <h2 className="text-xl font-medium text-pink-600 border-b border-b-[#d66382]">🗣 Konferencje</h2>

      <p className="pt-4 lg:px-4 text-sm italic">Niektóre online, niektóre offline, a jeszcze inne hybrydowe</p>

      <div className="w-[90%] mx-auto">

        <Link href="https://dzienkarierykobietywit.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Dzień Kariery Kobiety w IT</Link>
        <div className="pt-4">
          <Link href="https://hackyeah.pl/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">HackYeah!</Link> 
          <p className="px-2 pt-2 italic">a dokładniej <Link href="https://hackyeah.pl/she-hacks/" target="_blank" rel="noopener noreferrer" className="cursor-pointer lg:hover:text-pink-700">She Hacks</Link></p>
        </div>
        <Link href="https://kobietyrakiety.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Kobiety Rakiety - Wystrzel swoją karierę w Kosmos!</Link>
        <Link href="https://womenintechsummit.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Perspektywy Women in Tech Summit</Link>
        <Link href="https://kobietyit.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Women of IT</Link>
        <Link href="https://womentechstyle.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Women Techstyle Summit</Link>

      </div>

    </section>
  )
};

export default Conferences;