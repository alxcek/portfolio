import { Link } from "react-router-dom";
import works from "../data/works.json";

const Projects = () => {
  return (
    <section className="bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 md:grid-cols-2 gap-6 mb-14">
      {/* COL 1 */}
      <div className="flex flex-col gap-6">
        {works.slice(0, 2).map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="cursor-pointer grid w-full opacity-100 select-none group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="transition duration-500 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>
        ))}
      </div>

      {/* COL 2 */}
      <div className="flex flex-col gap-6">
        {works.slice(2).map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="cursor-pointer grid w-full opacity-100 select-none group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="transition duration-500 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
