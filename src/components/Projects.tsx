import { Link } from "react-router-dom";
import works from "../data/works.json";
import type { Project } from "../types/project";

export const Projects = () => {
  const distributeProjects = (projects: Project[]): Project[][] => {
    const cols: Project[][] = [[], []];
    projects.forEach((project, index) => {
      cols[index % 2].push(project);
    });
    return cols;
  };

  const projectColumns = distributeProjects(works);

  const ProjectCard = ({ project }: { project: Project }) => (
    <Link
      key={project.id}
      to={project.link}
      data-project-card
      className="cursor-none group w-full select-none
      transition-transform duration-300 ease-out transform
      hover:scale-[0.97]"
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full h-auto rounded-xl
          transition duration-300
          group-hover:brightness-75
        "
        />
      </div>

      <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        <h3 className="text-[16px] font-semibold text-white whitespace-nowrap">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-[13px] px-2 py-[3px] rounded-full text-white whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-[6px] px-1 text-[13px] text-gray-400">
        {project.description}
      </p>
    </Link>
  );

  return (
    <section className="bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 md:grid-cols-2 gap-8 mb-14">
      {projectColumns.map((columnProjects, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-6">
          {columnProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ))}
    </section>
  );
};

