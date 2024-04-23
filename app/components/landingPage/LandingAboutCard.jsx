import information from "/home/jeld/Development/portfolio/je-portfolio/public/information.svg";
import AboutMeButton from "@components/buttons/AboutMeButton";
import Image from "next/image";

export default function LandingAboutCard({ children, ...props }) {
  return (
    <button className="flex w-96 bg-slate-600 h-24">
      <figure className="self-center px-4">
        <Image src={information} height={96} width={98} alt="github" />
      </figure>
      <div className="w-full h-full">
        <AboutMeButton style={{ width: "100%" }} />
      </div>
    </button>
  );
}
