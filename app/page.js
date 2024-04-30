"use client";

import Image from "next/image";
import LandingXpCard from "@components/landingPage/LandingXpCard";
import LandingProjectsCard from "@components/landingPage/LandingProjectsCard";
import LandingAboutCard from "@components/landingPage/LandingAboutCard";
import SocialLinks from "@components/socialLinks/SocialLinks";
import { Rubik } from "next/font/google";

const rubik700 = Rubik({ weight: "700", variable: true, subsets: ["latin"] });

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
          <div
            className={`${rubik700.className} text-center pt-6 pb-2`}
            style={{ color: "grey" }}
          >
            James Eldridge does stuff with code to make things and it's fun!
          </div>
          <div
            className="text-center pt-2 pb-12"
            style={{ color: "slategrey" }}
          >
            Here's some things he does with code like Node.js, Javascript,
            React, and he likes his doggo.
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-4">
          <LandingXpCard />
          <LandingProjectsCard />
          <LandingAboutCard />
        </div>
      </div>
    </div>
  );
}
