import { Button } from "../components/Button";

const Codemancy = () => {
  return (
    <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
      <img
        src="https://placehold.co/1920x1080"
        alt="Codemancy hero"
        className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] object-cover object-center opacity-90"
      />

      <div className="w-full pt-9 px-6 mb-10 max-w-[1920px]">
        <main className="w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex-1 text-left">

              <div className="mb-12 text-l mt-2">
                <div className="mb-2 text-base text-xl font-semibold uppercase">Overview</div>
                <div className="border-b border-white/15 mb-5"></div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-y-6">
                  <div className="md:min-w-[280px] md:mr-24">
                    <div className="text-gray-400 mb-1 text-base uppercase">Project Name</div>
                    <div className="font-semibold">Codemancy</div>
                  </div>

                  <div className="flex flex-wrap gap-y-4 gap-x-16">
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Duration</div>
                      <div>Project duration goes here</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Role</div>
                      <div>Project role goes here</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Tech Stack</div>
                      <div className="space-y-1">
                        <div>Tech item 1</div>
                        <div>Tech item 2</div>
                        <div>Tech item 3</div>
                        <div>Tech item 4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 text-l">
                <div className="mb-2 text-base text-xl font-semibold uppercase">About</div>
                <div className="border-b border-white/15 mb-5 mt-2"></div>
                <div className="leading-relaxed">
                  Codemancy about heading goes here.

                  <br /><br />

                  Description paragraph for the about section. This area introduces the project,
                  its purpose, and the problem it aims to solve.

                  <br /><br />

                  Additional context paragraph for the about section. Use this space to expand
                  on motivation, scope, and intended audience.
                </div>
              </div>

              <div className="text-xl mb-2 font-semibold text-base uppercase">Involvement</div>
              <div className="border-b border-white/15 mb-5 mt-2"></div>

              <div className="mb-12 text-l">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="text-l mb-2 text-base font-semibold uppercase">What I do</div>
                    <div className="leading-relaxed">
                      Description paragraph for the "what I do" section. Outline responsibilities,
                      contributions, and ownership areas across the project.

                      <br /><br />

                      Additional details about implementation choices, collaboration, and
                      day-to-day workflow on the project.
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-l mb-2 text-base font-semibold uppercase">Experience</div>
                    <div className="leading-relaxed">
                      Description paragraph for the experience section. Summarize skills gained,
                      lessons learned, and growth areas during the project.

                      <br /><br />

                      Additional reflections on takeaways and how the experience shaped future work.
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://placehold.co",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    size="md"
                    className="w-full max-w-[200px]"
                  >
                    <span className="text-fill-animate">See More</span>
                    <span className="text-fill-animate">&gt;</span>
                  </Button>
                </div>
              </div>

              <div className="border-b border-white/15 mb-5"></div>

              <div className="mb-20 mt-20">
                <div className="space-y-12">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/1920x1080"
                      alt="Project screenshot 1"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Project title 1</h3>
                      <p className="text-gray-400">
                        Description paragraph for project title 1. Explain what this screen or
                        feature does and why it matters within the project.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/1920x1080"
                      alt="Project screenshot 2"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Project title 2</h3>
                      <p className="text-gray-400">
                        Description paragraph for project title 2. Explain what this screen or
                        feature does and why it matters within the project.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/1920x1080"
                      alt="Project screenshot 3"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Project title 3</h3>
                      <p className="text-gray-400">
                        Description paragraph for project title 3. Explain what this screen or
                        feature does and why it matters within the project.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/1920x1080"
                      alt="Project screenshot 4"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Project title 4</h3>
                      <p className="text-gray-400">
                        Description paragraph for project title 4. Explain what this screen or
                        feature does and why it matters within the project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Codemancy;
