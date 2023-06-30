import React from "react";
import Link from "next/link";

const FBGroups = () => {
  return(
    <section className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto pb-6 lg:pb-10">
      <h2 className="text-xl font-medium text-pink-600 border-b border-b-[#d66382]">👥 Grupy na FB</h2>

      <div className="w-[90%] mx-auto">

        <Link href="https://www.facebook.com/groups/dareit.io/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Dare IT Community</Link>
        <Link href="https://www.facebook.com/groups/dziewczynynaswoim/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Dziewczyny na swoim!</Link>
        <div className="pt-4">
          <Link href="https://www.facebook.com/groups/giveherajob" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Give her a job</Link>
          <p className="px-2 pt-2 text-xs italic">Choć nie jest to typowo IT grupa, to jest tam sporo dziewczyn z branży - nie tylko programistki, ale również rekruterki. Na grupie można szukać pracy, można pytać o radę co do przebranżowienia, wrzucić CV z prośbą o ocenę</p>
        </div>
        <div className="pt-4">
          <Link href="https://www.facebook.com/groups/1427451931347639/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Nerd Girls Coding Gang - #SummerOfCode</Link>
          <p className="px-2 pt-2 text-xs italic">Grupa dedykowana wakacyjnemu, 8-tygodniowemu wyzwaniu prowadzonemu przez <Link href="https://www.flynerd.pl/" target="_blank" rel="noopener noreferrer" className="cursor-pointer lg:hover:text-pink-700">Ritę Łyczywek - Flynerd</Link>. Temat wyzwania kręci się wokół podstaw programowania - HTML, CSS, JavaScriptu, Pythona. Aby wziąć udział w wyzwaniu, wystarczy dodać się do grupy!</p>
        </div>
        <div className="pt-4">
          <Link href="https://www.facebook.com/groups/programujdziewczyno/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer lg:hover:text-pink-700">Programuj, dziewczyno!</Link>
          <p className="px-2 pt-2 text-xs italic">Są też czaty tematyczne dla miast, dla technologii, o tym jak zacząć, jak znaleźć pierwszą pracę</p>
        </div>
        <Link href="https://www.facebook.com/groups/257938233094888" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">React JS Girls - początki/wsparcie</Link>
        <Link href="https://www.facebook.com/groups/testujdziewczyno/" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Testuj, dziewczyno!</Link>
       
      </div>

    </section>
  )
};

export default FBGroups;