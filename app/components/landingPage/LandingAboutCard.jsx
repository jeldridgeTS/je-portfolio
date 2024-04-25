import information from "/public/information.svg";
import AboutMeButton from "@components/buttons/AboutMeButton";
import Image from "next/image";

export default function LandingAboutCard({ children, ...props }) {
  return (
    <button className="rounded-full flex w-72 landingPageCard h-16">
      <figure className="self-center">
        <Image
          className="p-4"
          src={information}
          height={84}
          width={84}
          alt="github"
        />
      </figure>
      <div className="w-full h-full">
        <AboutMeButton style={{ width: "100%" }} />
      </div>
    </button>
  );
}
