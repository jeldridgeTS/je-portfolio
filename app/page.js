"use client";

import Image from "next/image";
import LandingXpCard from "@components/landingPage/LandingXpCard";
import LandingProjectsCard from "@components/landingPage/LandingProjectsCard";
import LandingAboutCard from "@components/landingPage/LandingAboutCard";
import { Rubik } from "next/font/google";

const rubik400 = Rubik({ weight: "400", variable: true, subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="profilePic">
          <Image
            className="flex-none border-primary border-2 rounded-full"
            alt="profile pic"
            src="/profPic.webp"
            width={320}
            height={320}
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4 py-14">
          <LandingXpCard />
          <LandingProjectsCard />
          <LandingAboutCard />
        </div>
        <div className="text-center">
          <div
            className={`${rubik400.className} text-neutral text-center text-xl`}
          >
            James Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}
