"use client";

import Image from "next/image";
import LandingXpCard from "@components/landingPage/LandingXpCard";
import LandingProjectsCard from "@components/landingPage/LandingProjectsCard";
import LandingAboutCard from "@components/landingPage/LandingAboutCard";
import SocialLinks from "@components/socialLinks/SocialLinks";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="profileContainer">
          <Image
            className="flex-none border-double border-8 rounded-full"
            alt="profile pic"
            src="/profPic.webp"
            width={320}
            height={320}
          />
          <div className="pt-6">
            <SocialLinks />
          </div>
          <div className="text-center pt-6 pb-2 font-bold text-lg">
            Stuff about me blah blah blah blah blah blah
          </div>
          <div className="text-center pt-2 pb-12">
            Stuff about me blah blah blah blah blah blah
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <LandingXpCard />
          <LandingProjectsCard />
          <LandingAboutCard />
        </div>
      </div>
    </div>
  );
}
