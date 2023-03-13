import React from "react";

const Hero = () => {
  return(
    <section id="hero" className="min-h-screen pt-[9vh] bg-zinc-100 lg:flex">

      <div className="flex flex-col justify-center items-center w-[90%] mx-auto pt-8 lg:w-[30%] lg:items-start lg:pt-0">
        <p className="lg:text-2xl">Cześć!</p>
        <p className="text-3xl pt-2 lg:text-5xl">Nazywam się</p>
        <div className="relative lg:w-[150%]">
          <p className="absolute top-2 -left-[10%] h-[30px] w-[120%] bg-[#f7bbcb] lg:h-[48px] lg:w-[100%]"></p>
          <p className="text-3xl relative z-10 lg:text-5xl">Olga Krzysztofik</p>
        </div>
        <p className="text-center mx-auto pt-8 lg:text-xl lg:text-left">Jestem frontend developerką z różnorodnym doświadczeniem</p>
      </div>

      <div className="bgHeroImage w-[300px] h-[300px] mt-8 mx-auto min-[600px]:min-w-[600px]w-[450px] min-[600px]:h-[450px] lg:w-[700px] lg:h-[700px] lg:-mt-12 lg:-mr-12"></div>
    </section>
  )
};

export default Hero;