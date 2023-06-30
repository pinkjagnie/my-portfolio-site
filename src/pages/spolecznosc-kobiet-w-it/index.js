import React from "react";

import AboutCommunityDesc from "@/components/spolecznosc-kobiet-w-it/AboutCommunityDesc";
import Organizations from "@/components/spolecznosc-kobiet-w-it/Organizations";
import FBGroups from "@/components/spolecznosc-kobiet-w-it/FBGroups";
import DiscordGroup from "@/components/spolecznosc-kobiet-w-it/DiscordGroup";
import MentoringProgramms from "@/components/spolecznosc-kobiet-w-it/MentoringProgramms";
import Conferences from "@/components/spolecznosc-kobiet-w-it/Conferences";
import ContactMe from "@/components/spolecznosc-kobiet-w-it/ContactMe";

const femaleCommunityPage = () => {
  return(
    <section className="pt-24 lg:pt-20 xl:pt-24 min-h-screen">
      <h1 className="w-[70%] mx-auto text-3xl text-center min-[600px]:pt-6 lg:pt-0 xl:pt-2">Społeczność kobiet w IT</h1>
      <AboutCommunityDesc />
      <Organizations />
      <FBGroups />
      <DiscordGroup />
      <MentoringProgramms />
      <Conferences />
      <ContactMe />
    </section>
  )
};

export default femaleCommunityPage;