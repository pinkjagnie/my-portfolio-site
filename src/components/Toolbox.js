import React from 'react';

const Toolbox = () => {
  return(
    <section id="toolbox" className='pt-4 pb-8 lg:pt-0'>
      <div className='w-[90%] mx-auto py-2 min-[600px]:w-[70%] lg:w-[100%]'>
        <div className='text-xl border-b border-b-[#d66382]'>🧰 Główny toolbox</div>
        <p className='p-4'>React | React Router | Next.js | NextAuth.js | JavaScript | Tailwind | Backend API integration | RESTful APIs | MongoDB | Firebase | Responsive websites | VSCode | Linux | Jira | Slack</p>
      </div>
      <div className='w-[90%] mx-auto py-2 min-[600px]:w-[70%] lg:w-[100%]'>
        <div className='text-xl border-b border-b-[#d66382]'>🏆 Najważniejsze umiejętności</div>
        <p className='p-4'>Adaptacyjność | Szybkie uczenie się | Chęć rozwoju | Praca w zespole | Komunikacja | Logiczne myślenie | Kreatywność | Bardzo dobra organizacja pracy | Wyznaczanie priorytetów | Leadership</p>
      </div>
    </section>
  )
};

export default Toolbox;