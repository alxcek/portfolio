const Projects = () => {
  const projects = [
    { id: 1, image: "https://via.placeholder.com/400x300", title: "Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, image: "https://via.placeholder.com/300x300", title: "Project 2", description: "This is the second project." },
    { id: 3, image: "https://via.placeholder.com/300x500", title: "Project 3", description: "This is the third project." },
    { id: 4, image: "https://via.placeholder.com/500x400", title: "Project 4", description: "This is the fourth project." },
    { id: 5, image: "https://via.placeholder.com/500x400", title: "Project 5", description: "This is the fifth project." },
    { id: 6, image: "https://via.placeholder.com/500x400", title: "Project 6", description: "This is the sixth project." },
  ];

  return (
     <section className="bg-[#111] text-gray-500 min-h-screen px-1 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col gap-2">
            <div className="group relative overflow-hidden rounded-lg transform transition-transform duration-700 hover:scale-105 hover:z-10 hover:shadow-lg">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
              </div>
              <div className="absolute bottom-0 w-full p-4 text-gray-200 bg-opacity-75 rounded-b-lg">
                <p className="text-sm m-0">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
