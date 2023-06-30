import React from "react";
import Link from "next/link";

const Organizations = () => {
  return(
    <section className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto pb-6 lg:pb-10">
      <h2 className="text-xl font-medium text-pink-600 border-b border-b-[#d66382]">💡 Organizacje</h2>

      <div className="w-[90%] mx-auto">

        <Link href="https://cyberwomen.eu/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Cyber Women Community</Link>
        <Link href="https://www.dareit.io/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Dare IT</Link>
        <Link href="https://digitaluniversity.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Digital University</Link>
        <Link href="https://djangogirls.org/en/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Django girls</Link>
        <Link href="https://itgirls.org.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Fundacja IT Girls</Link>
        <div className="pt-4">
          <Link href="https://gocarrots.org/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Geek Girls Carrots</Link>
          <p className="px-2 pt-2 text-xs italic">Na początku 2023 roku Fundacja Carrots wstrzymała działalność, ale nie wykluczyła powrotu w  nowej odsłonie - dlatego umieszczam tutaj link do niej</p>
        </div>
        <Link href="https://poland.girlsintech.org/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Girls in Tech Poland</Link>
        <Link href="https://girlsjs.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">girls.js</Link>
        <Link href="https://www.kobietyebiznesu.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Kobiety e-biznesu</Link>
        <Link href="https://mamopracuj.pl/mamo-pracuj-w-it/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Mamo pracuj w IT</Link>
        <div className="pt-4">
          <Link href="https://perspektywy.org/fundacja/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Perspektywy</Link>
          <Link href="http://www.dziewczynynapolitechniki.pl/" target="_blank" rel="noopener noreferrer" className="block px-2 pt-2 italic cursor-pointer lg:hover:text-pink-700">Dziewczyny na politechniki</Link>
        </div>
        <div className="pt-4">
          <Link href="https://womenintech.perspektywy.org/o-nas/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Perspektywy Women in Tech</Link>
          <Link href="https://womenintechsummit.pl/ " target="_blank" rel="noopener noreferrer" className="block px-2 pt-2 italic cursor-pointer lg:hover:text-pink-700">Konferencja Perspektywy Women in Tech Summit</Link>
        </div>
        <Link href="https://railsgirls.com/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Rails girls</Link>
        <Link href="https://techleaders.eu/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Tech Leaders</Link>
        <Link href="https://womanupdate.org/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Woman Update</Link>
        <div className="pt-4">
          <Link href="https://www.womenintechnology.pl/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Women in Technology Poland</Link>
          <p className="px-2 pt-2 italic">organizują dużo webinarów, programów szkoleniowych jak na przykład<Link href="https://www.womenintechnology.pl/go-for-java-girl " target="_blank" rel="noopener noreferrer" className="cursor-pointer lg:hover:text-pink-700"> Go for Java, girl!</Link></p>
        </div>

      </div>

    </section>
  )
};

export default Organizations;