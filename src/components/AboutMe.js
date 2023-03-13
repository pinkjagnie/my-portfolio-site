import React from "react";

import Toolbox from "./Toolbox";

import { GoLocation } from 'react-icons/go';

const AboutMe = () => {
  return(
    <section id="aboutMe" className="pb-8">
      <h1 className="w-screen text-2xl text-center py-2 bg-[#f7bbcb] lg:-mt-2">Moja zawodowa droga</h1>
      
      <div className="flex justify-center items-center text-center w-[90%] py-4 mx-auto min-[600px]:w-[70%] lg:w-[80%]">
        <GoLocation size={120} className="text-[#d66382]" />
        <p className="text-lg pl-4 min-[600px]:w-[60%]">Całe moje życie zawodowe doprowadziło mnie do miejsca, w którym jestem teraz. </p>
      </div>
      
      <div className="lg:flex lg:mx-auto max-w-[1280px]">
        <div className="w-[90%] mx-auto text-sm min-[600px]:w-[70%] lg:w-[65%] lg:px-8">
          <p className="py-2">🛎️ Skutecznej organizacji pracy własnej oraz wyznaczania priorytetów musiałam nauczyć się bardzo szybko, bo już w wieku 18 lat zaczęłam łączyć naukę, a potem studia dzienne, z pracą.</p>
        
          <p className="py-2">🧭 10-letnia praca jako dziennikarka sportowa pomogła mi udoskonalić umiejętność pracy zdalnej oraz komunikacji w zespole. W tym czasie zyskałam również doświadczenie jako team leader, będąc przez 2 lata szefem kilkuosobowego zespołu. Ze słowem pracowałam również jako specjalistka ds. marketingu - w siatkarskim klubie sportowym, a potem w Librusie (tak, tym od dziennika elektronicznego 🤓). Z kolei umiejętności cierpliwości, terminowości i jasnego przekazywania informacji doskonaliłam podczas prawie 4 lat pracy jako sekretarz sądowy, zaś umiejętność logicznego myślenia i wnioskowania podczas studiów prawniczych.</p>

          <p className="py-2">👩‍💻 Tak bogate i różnorodne doświadczenie sprawia, że już na początku bycia independent developerem zaufał mi CEO & founder AxiomOS, powierzając mi stworzenie dwóch stron internetowych - axiomos.pl oraz hub.axiomos.pl. Stworzyłam obie strony samodzielnie, zaczynając od layoutu, poprzez grafiki i CTA, a na życzenie zleceniodawcy zmiany wprowadzałam nawet na późnym etapie. </p>

          <p className="py-2">⚙️ Lubię uczyć się nowych rzeczy i rozwijać się - a właśnie to daje mi praca jako frontend developer. Do zespołu wnoszę solidną dawkę samodzielności, profesjonalizmu, zamiłowania do CSSa oraz mieszankę logiki i kreatywności. 💡 Chciałabym wykorzystać swoje umiejętności i doświadczenie w nowoczesnej firmie, by terminowo dostarczać logiczny kod w kreatywny sposób.</p>
        </div>

        <div className="lg:w-[35%] lg:pl-4 lg:pr-8">
          <Toolbox />
        </div>

      </div>

    </section>
  )
};

export default AboutMe;