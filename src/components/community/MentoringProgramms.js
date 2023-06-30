import React from "react";
import Link from "next/link";

const MentoringProgramms = () => {
  return(
    <section className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto pb-6 lg:pb-10">
      <h2 className="text-xl font-medium text-pink-600 border-b border-b-[#d66382]">🚀 Programy mentoringowe & stypendialne</h2>

      <p className="py-4 lg:px-4 text-sm italic">Ja swój program mentoringowy (IT for SHE) znalazłam wpisując w wyszukiwarkę Google hasło “program mentoringowy dla kobiet w IT” i kilka linków później trafiłam właśnie na IT for SHE, które akurat miało otwartą rekrutację. Na liście uwzględniłam programy, które są “na chodzie”, pomijając te, które nie odbywały się aktywnie w roku 2022 lub 2023.</p>
      <p className="pb-4 lg:px-4 text-sm italic">Programy są skierowane do dziewczyn na różnym etapie kariery - od licealistek, przez studentki i absolwentki, a kończąc na tych, które chcą się przebranżowić.</p>

      <div className="w-[90%] mx-auto">

        <Link href="https://perspektywy.org/scholarships/alphalab/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Alphalab Perspektywy</Link>
        <Link href="https://www.dareit.io/mentoring" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Dare IT</Link>
        <Link href="https://dziewczynywgrze.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Dziewczyny w grze</Link>
        <Link href="https://www.itforshe.pl/pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">IT for SHE</Link>
        <Link href="https://leadership.perspektywy.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">LeaderSHEp Academy</Link>
        <Link href="http://www.leaninstem.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Lean in STEM</Link>
        <Link href="https://mentoringf2f.com/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Mentoring Female2Female</Link>
        <Link href="https://mentors4starters.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Mentors4starters</Link>
        <Link href="https://mother-empower.mamopracuj.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Mother empower</Link>
        <Link href="https://www.stypendiadladziewczyn.pl/pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Nowe technologie dla dziewczyn</Link>
        <Link href="http://shesnnovation.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Shesnnovation</Link>
        <Link href="https://techleaders.eu/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Tech leaders</Link>
        <Link href="https://vitalvoices.pl/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Vital Voices Poland</Link>

        <div className="pt-8">
          <p>Programy mentoringowe prowadzą również poszczególne firmy. Podczas konferencji <Link href="https://womentechstyle.pl/" target="_blank" rel="noopener noreferrer" className="cursor-pointer"> Women TechStyle Summit 2023</Link> dowiedziałam się o programie prowadzonym przez <Link href="https://lingarogroup.com/it-power-women-global-mentoring-program" target="_blank" rel="noopener noreferrer" className="cursor-pointer lg:hover:text-pink-700">Lingaro Group - IT Power Women Global Mentoring Program</Link>.</p>
        </div>
        <div className="pt-4">
          <p>Jesienią 2023 roku ma ruszyć rejestracja do udziału w <Link href="https://hitechgirls.orange.pl/" target="_blank" rel="noopener noreferrer" className="cursor-pointer lg:hover:text-pink-700">II edycji konkursu Hi-Tech Girls w Orange</Link>, gdzie do wygrania są praktyki w Orange + mentoring + voucher na szkolenia.</p>
        </div>

        <p className="pt-4 text-sm italic">Twoim marzeniem jest praca w określonej firmie? Warto sprawdzić jej stronę internetową, jeśli jest to duża korporacja, to istnieje szansa, że prowadzi ona swój program mentoringowy albo organizuje program stażowy. Nie bój się też napisać bezpośrednio do działu HR danej firmy!</p>

      </div>

    </section>
  )
};

export default MentoringProgramms;