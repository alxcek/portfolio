import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import works from "../data/works.json";

const Projects = () => {
  const [columns, setColumns] = useState(2);

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const projectCount = works.length;

      if (width < 768) {
        setColumns(1); // Mobile: 1 column
      } else if (width < 1200 || projectCount <= 6) {
        setColumns(2); // Tablet/Desktop: 2 columns (or when 6 or fewer projects)
      } else {
        setColumns(3); // Large screens: 3 columns (when you have many projects)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const distributeProjects = (projects, numColumns) => {
    const cols = Array.from({ length: numColumns }, () => []);

    projects.forEach((project, index) => {
      const colIndex = index % numColumns;
      cols[colIndex].push(project);
    });

    return cols;
  };

  const projectColumns = distributeProjects(works, columns);

  const ProjectCard = ({ project }) => (
    <Link
      key={project.id}
      to={project.link}
      className="
      cursor-pointer group w-full select-none
      transition duration-300
    "
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


  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "md:grid-cols-2";
      case 3:
        return "md:grid-cols-2 lg:grid-cols-3";
      default:
        return "md:grid-cols-2";
    }
  };

  return (
    <section className={`bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 ${getGridClasses()} gap-8 mb-14`}>
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

export default Projects;