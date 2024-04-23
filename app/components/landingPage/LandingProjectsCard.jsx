import project from "/public/project.svg";
import ProjectsButton from "@components/buttons/ProjectsButton";
import Image from "next/image";

export default function LandingProjectsCard({ children, ...props }) {
  return (
    <button className="flex w-96 bg-slate-600 h-24">
      <figure className="self-center px-4">
        <Image src={project} height={96} width={98} alt="github" />
      </figure>
      <div className="w-full h-full">
        <ProjectsButton style={{ width: "100%" }} />
      </div>
    </button>
  );
}
