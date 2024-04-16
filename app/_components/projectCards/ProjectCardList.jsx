import ProjectCard from "./ProjectCard";

const ProjectCardList = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectCardList;
