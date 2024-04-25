import ExperienceButton from "@components/buttons/ExperienceButton";
import xpsvg from "/public/xp.svg";
import Image from "next/image";

export default function LandingXpCard({ children, ...props }) {
  return (
    <button className="rounded-full flex w-72 landingPageCard h-16">
      <figure className="self-center">
        <Image
          className="p-4"
          src={xpsvg}
          height={84}
          width={84}
          alt="github"
        />
      </figure>
      <div className="w-full h-full">
        <ExperienceButton style={{ width: "100%" }} />
      </div>
    </button>
  );
}
