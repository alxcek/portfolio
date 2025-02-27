const Projects = () => {
  return (
    <section className="bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 md:grid-cols-2 gap-x-6 mb-14">
      {/* COL - 1 */}
      <div className="flex flex-col gap-6">
        <div className="cursor-pointer grid w-full opacity-100 select-none group">
          <div className="relative game-border group-hover:opacity-80">
            <img src="https://placehold.co/950x600" alt="test" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg mb-4">Prompt Text Here</span>
              <div className="flex gap-2">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 1
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 2
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer grid w-full opacity-100 select-none group">
          <div className="relative game-border group-hover:opacity-80">
            <img src="https://placehold.co/950x400" alt="test" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg mb-4">Prompt Text Here</span>
              <div className="flex gap-2">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 1
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 2
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COL - 2 */}
      <div className="flex flex-col gap-6">
        <div className="cursor-pointer grid w-full opacity-100 select-none group">
          <div className="relative group-hover:opacity-80">
            <img src="https://placehold.co/950x400" alt="test" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg mb-4">Prompt Text Here</span>
              <div className="flex gap-2">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 1
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 2
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer grid w-full opacity-100 select-none group">
          <div className="relative game-border group-hover:opacity-80">
            <img src="https://placehold.co/950x600" alt="test" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg mb-4">Prompt Text Here</span>
              <div className="flex gap-2">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 1
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 2
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Button 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
