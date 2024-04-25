import project from "/public/project.svg";
import ProjectsButton from "@components/buttons/ProjectsButton";
import Image from "next/image";

export default function LandingProjectsCard({ children, ...props }) {
  return (
    <button className="rounded-full flex w-72 landingPageCard h-16">
      <figure className="self-center">
        <Image
          className="p-4"
          src={project}
          height={84}
          width={84}
          alt="github"
        />
      </figure>
      <div className="w-full h-full">
        <ProjectsButton style={{ width: "100%" }} />
      </div>
    </button>
  );
}
