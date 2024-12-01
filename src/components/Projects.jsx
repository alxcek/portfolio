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
    <div className="bg-[#111] text-gray-500 min-h-screen px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg bg-gray-800"
          >
            {/* Image container */}
            <div className="relative pb-[75%]"> {/* Maintains aspect ratio */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Description section at the bottom of the image */}
            <div className="absolute bottom-0 w-full p-4 text-gray-200 bg-opacity-75 rounded-b-lg">
              <p className="text-sm m-0">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
