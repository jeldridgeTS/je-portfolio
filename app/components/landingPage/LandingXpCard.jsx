import ExperienceButton from "@components/buttons/ExperienceButton";
import xpsvg from "/public/xp.svg";
import Image from "next/image";

export default function LandingXpCard({ children, ...props }) {
  return (
    <button className="flex w-96 bg-slate-600 h-24">
      <figure className="self-center px-4">
        <Image src={xpsvg} height={96} width={98} alt="github" />
      </figure>
      <div className="w-full h-full">
        <ExperienceButton style={{ width: "100%" }} />
      </div>
    </button>
  );
}
