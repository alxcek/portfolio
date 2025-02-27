const Projects = () => {
  const projects = [
    { id: 1, image: "https://placehold.co/500x400", title: "Project 1", description: "This is the fourth project." },
    { id: 2, image: "https://placehold.co/500x400", title: "Project 2", description: "This is the fifth project." },
    { id: 3, image: "https://placehold.co/500x400", title: "Project 3", description: "This is the sixth project." },
    { id: 4, image: "https://placehold.co/500x400", title: "Project 4", description: "This is the sixth project." },
    { id: 5, image: "https://placehold.co/500x400", title: "Project 5", description: "This is the fourth project." },
    { id: 6, image: "https://placehold.co/500x400", title: "Project 6", description: "This is the fifth project." },
    { id: 7, image: "https://placehold.co/500x400", title: "Project 7", description: "This is the sixth project." },
    { id: 8, image: "https://placehold.co/500x400", title: "Project 8", description: "This is the sixth project." },
    { id: 9, image: "https://placehold.co/500x400", title: "Project 9", description: "This is the sixth project." },
  ];

  const getHeightClass = (image) => {
    if (image.includes("500x400")) {
      return 'h-64';
    } else if (image.includes("600x400")) {
      return 'h-48';
    } else {
      return 'h-auto';
    }
  };

  return (
    // <section className="bg-[#111] text-gray-500 min-h-screen px-1 pb-0">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    //     {projects.map((project) => (
    //       <div key={project.id} className="flex flex-col gap-2">
    //         <div className="group relative overflow-hidden rounded-lg">
    //           <div className="relative w-full">
    //             <img
    //               src={project.image}
    //               alt={project.title}
    //               className={`w-full object-cover rounded-t-lg transition-all duration-300 group-hover:opacity-70 ${getHeightClass(project.image)}`}
    //             />
    //             <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:cursor-pointer">
    //               <div className="text-white text-center">
    //                 <h3 className="text-lg font-semibold">{project.title}</h3>
    //                 <p className="text-sm">{project.description}</p>
    //                 <p className="text-sm">View</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <>
    </>
  );
};

export default Projects;
