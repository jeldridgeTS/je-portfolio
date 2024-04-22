"use client";

import Image from "next/image";
import LandingPageCard from "@components/landingPage/LandingPageCard";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="profileContainer">
          <Image
            className="flex-none"
            alt="profile pic"
            src="/profPic.webp"
            width={360}
            height={360}
          />
          <div className="text-center py-10">Stuff about me blah blah blah</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <LandingPageCard />
          <LandingPageCard />
          <LandingPageCard />
        </div>
      </div>
    </div>
  );
}
