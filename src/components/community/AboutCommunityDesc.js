import React from "react";
import Link from "next/link";

const AboutCommunityDesc = () => {
  return(
    <div className="w-[85%] md:w-[75%] xl:w-[70%] mx-auto py-8">
      <p className="pb-4">Nie oszukujmy się, kobiety w branży IT stanowią mniejszość. 👩‍💻 👩🏻‍💻 Na co dzień pracujemy ramię w ramię z mężczyznami, ale czy są oni w stanie zrozumieć wszystkie nasze rozterki? Czy może lepiej zrozumie nas inna dziewczyna z IT? Na szczęście istnieje wiele miejsc, gdzie możemy wymienić się opiniami, poprosić o radę, podzielić się doświadczeniem z innymi dziewczynami.</p>
      <p className="pb-4">Moim zamysłem było scalenie tych rozproszonych informacji tak, aby wszystkie fundacje, organizacje, grupy dało znaleźć się w jednym miejscu. I tak oto oddaję w wasze ręce czy klawiatury 😉</p>
      <p className="pb-2">🎯 listę organizacji, gdzie możecie znaleźć webinary czy spotkania,</p>
      <p className="pb-2">🎯 listę grup na fejsie, gdzie możecie na luzie pogadać z innymi dziewczynami, a do tego dorzucam discorda,</p>
      <p className="pb-2">🎯 listę programów mentoringowych i stypendialnych, gdy czujecie, że potrzebujecie przewodnika w swojej drodze w IT,</p>
      <p className="pb-6">🎯 listę konferencji, gdzie możecie zyskać nową wiedzę</p>
      <p>✉️ Jeśli uważasz, że jakiegoś miejsca brakuje na tej liście albo może powstało jakieś nowe miejsce, o którym nie mam pojęcia, to napisz do mnie maila! <Link href="mailto:olga.krzysztofik@gmail.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#d66382] cursor-pointer">Pisz na olga.krzysztofik@gmail.com</Link>, a ja updatuję listę 😀</p>
      <p className="w-[90%] mx-auto pt-6 italic text-xs lg:text-center">Kolejność alfabetyczna. Po kliknięciu w każdą z nazw zostaniesz przeniesiona na jej stronę</p>
    </div>
  )
};

export default AboutCommunityDesc;