const Projects = () => {

  return (
  <section className="bg-[#111] text-gray-500 grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 gap-x-6 mb-14">
  {/* COL - 1 */}
  <div className="flex flex-col gap-6">
    <div className="cursor-pointer grid w-full opacity-100 select-none group">
      <div className="relative game-border group-hover:opacity-80">
        <img src="https://placehold.co/800x400" alt="test" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">Prompt Text Here</span>
        </div>
      </div>
    </div>
    <div className="cursor-pointer grid w-full opacity-100 select-none group">
      <div className="relative game-border group-hover:opacity-80">
        <img src="https://placehold.co/800x400" alt="test" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">Prompt Text Here</span>
        </div>
      </div>
    </div>
  </div>
  {/* COL - 2 */}
  <div className="flex flex-col gap-6">
    <div className="cursor-pointer grid w-full opacity-100 select-none group">
      <div className="relative group-hover:opacity-80">
        <img src="https://placehold.co/800x400" alt="test" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">Prompt Text Here</span>
        </div>
      </div>
    </div>
    <div className="cursor-pointer grid w-full opacity-100 select-none group">
      <div className="relative game-border group-hover:opacity-80">
        <img src="https://placehold.co/800x400" alt="test" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">Prompt Text Here</span>
        </div>
      </div>
    </div>
  </div>
  {/* COL - 3 */}
  <div className="flex flex-col gap-6">
    <div className="cursor-pointer grid w-full opacity-100 select-none group">
      <div className="relative">
        <img src="https://placehold.co/800x400" alt="test" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">Prompt Text Here</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Projects;
