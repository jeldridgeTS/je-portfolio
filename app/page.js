"use client";

import Image from "next/image";
import LandingXpCard from "@components/landingPage/LandingXpCard";
import LandingProjectsCard from "@components/landingPage/LandingProjectsCard";
import LandingAboutCard from "@components/landingPage/LandingAboutCard";
import { Rubik } from "next/font/google";

const rubik400 = Rubik({ weight: "400", variable: true, subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full">
      <div className="profilePic">
        <Image
          className="flex-none border-secondary border-2 rounded-full"
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
      <div className="text-center px-8 lg:px-0">
        <div
          className={`${rubik400.className} text-neutral text-center text-xl`}
        >
          Experienced Software and Automation Engineer with more than 10 years
          experience in software development and automated testing. Proficient
          in both front-end and back-end development, including Ruby, CI/CD
          pipelines, JavaScript, Typescript, and Node.js. Actively seeking roles
          to contribute as a software engineer, focusing on building robust and
          maintainable solutions while ensuring thorough testing practices
          across all layers of the application.
        </div>
      </div>
    </div>
  );
}
