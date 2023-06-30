import React from "react";
import Link from "next/link";

const DiscordGroup = () => {
  return(
    <section className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto pb-6 lg:pb-10">
      <h2 className="text-xl font-medium text-pink-600 border-b border-b-[#d66382]">⚙️ Discord</h2>

      <div className="w-[90%] mx-auto">

        <Link href="https://discord.gg/YJXUa5av" target="_blank" rel="noopener noreferrer" className="block pt-4 cursor-pointer lg:hover:text-pink-700">Babeczki z IT</Link>
        
      </div>

    </section>
  )
};

export default DiscordGroup;