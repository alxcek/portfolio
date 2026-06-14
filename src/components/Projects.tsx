import clsx from "clsx";
import { Link } from "react-router-dom";
import works from "../data/works.json";
import type { Project } from "../types/project";

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Projects = () => {
  const distributeProjects = (projects: Project[]): Project[][] => {
    const cols: Project[][] = [[], []];
    projects.forEach((project, index) => {
      cols[index % 2].push(project);
    });
    return cols;
  };

  const projectColumns = distributeProjects(works);

  const ProjectMedia = ({ project }: { project: Project }) => (
    <div className="relative w-full overflow-hidden rounded-xl">
      <img
        src={project.image}
        alt={project.title}
        className={
          project.locked
            ? "w-full h-auto rounded-xl"
            : "w-full h-auto rounded-xl transition duration-300 group-hover:brightness-75"
        }
      />
      {project.locked && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-black/50 group-hover:opacity-100"
          aria-hidden="true"
        >
          <span className="text-white">
            <LockIcon />
          </span>
        </div>
      )}
    </div>
  );

  const ProjectMeta = ({ project }: { project: Project }) => (
    <>
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
    </>
  );

  const ProjectCard = ({ project }: { project: Project }) => {
    if (project.locked) {
      return (
        <div
          key={project.id}
          aria-disabled="true"
          className="group w-full select-none cursor-not-allowed
          transition-transform duration-300 ease-out transform
          hover:scale-[0.97]"
        >
          <ProjectMedia project={project} />
          <ProjectMeta project={project} />
        </div>
      );
    }

    return (
      <Link
        key={project.id}
        to={project.link}
        className="cursor-pointer group w-full select-none
        transition-transform duration-300 ease-out transform
        hover:scale-[0.97]"
      >
        <ProjectMedia project={project} />
        <ProjectMeta project={project} />
      </Link>
    );
  };

  return (
    <section
      className={clsx(
        "bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 md:grid-cols-2 gap-8 mb-14",
        works.length <= 2 && "min-h-screen content-center"
      )}
    >
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
