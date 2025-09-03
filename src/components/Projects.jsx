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
      className="cursor-pointer grid w-full opacity-100 select-none group"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="transition duration-500 group-hover:brightness-75 w-full h-auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
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
    <section className={`bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 ${getGridClasses()} gap-6 mb-14`}>
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