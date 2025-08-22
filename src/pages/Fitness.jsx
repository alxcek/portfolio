import React from "react";
import Button from "../components/Button"

const Fitness = () => {
  return (
    <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
      <div className="w-full px-6 mb-10 max-w-[1920px]">
        <main className="w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex-1 text-left">
              <img
                src="https://placehold.co/950x600"
                alt="Fitness App"
                className="w-full mb-10 mt-10 rounded"
              />

              <div className="mb-12 text-l mt-2">
                <div className="mb-2 text-base text-xl font-semibold uppercase">Overview</div>
                <div className="border-b border-white/15 mb-5"></div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-y-6">
                  <div className="md:min-w-[280px] md:mr-24">
                    <div className="text-gray-400 mb-1 text-base uppercase">Project Name</div>
                    <div className="font-semibold">Fitness App</div>
                  </div>

                  <div className="flex flex-wrap gap-y-4 gap-x-16">
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Duration</div>
                      <div>Oct 2023 - Feb 2024</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Role</div>
                      <div>Full-Stack Developer</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Tech Stack</div>
                      <div className="space-y-1">
                        <div>React</div>
                        <div>Typescript</div>
                        <div>Tailwind CSS</div>
                        <div>Spring Boot</div>
                        <div>Java</div>
                        <div>JWT Authentication</div>
                        <div>MySQL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 text-l">
                <div className="mb-2 text-base text-xl font-semibold uppercase">About</div>
                <div className="border-b border-white/15 mb-5 mt-2"></div>
                <div className="leading-relaxed">
                  The <b>Fitness App</b> is a web-based platform designed to help users
                  track their workouts, monitor nutrition, and stay consistent
                  with their fitness goals.
                  <br />
                  <br />
                  It provides personalized training plans, progress tracking through
                  dashboards, and social features that allow users to share milestones
                  with friends. Built with a modern MERN stack (MongoDB, Express, React, Node.js),
                  the application focuses on speed, reliability, and ease of use.
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    size="md"
                    className="w-full max-w-[200px]"
                  >
                    <span className="text-fill-animate">See GitHub</span>
                    <span className="text-fill-animate">&gt;</span>
                  </Button>
                </div>
              </div>

              <div className="text-xl font-semibold mb-1 text-base uppercase">Involvement</div>
              <div className="border-b border-white/15 mb-5 mt-2"></div>

              <div className="mb-12 text-l">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="text-l mb-2 text-base font-semibold uppercase">What I do</div>
                    <div className="leading-relaxed">
                      I designed and developed the full-stack architecture of the Fitness App.
                      On the backend, I built REST APIs using Node.js and Express with MongoDB
                      as the database. I implemented secure authentication with JWT, user profile
                      management, and endpoints for tracking workouts and meals.
                      <br /><br />
                      On the frontend, I used React with Tailwind CSS to build a clean, responsive
                      UI where users can log activities, view progress dashboards, and manage
                      fitness plans. I also containerized the app with Docker for smooth
                      deployment across environments.
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-l mb-2 text-base font-semibold uppercase">Experience</div>
                    <div className="leading-relaxed">
                      Through this project, I gained hands-on experience in building
                      scalable full-stack applications. I became confident in managing
                      state in React, setting up secure backend authentication flows,
                      and handling data persistence in MongoDB.
                      <br /><br />
                      I also improved my knowledge of deployment practices by working
                      with Docker, and learned how to design user-friendly interfaces
                      with Tailwind CSS. This project has been a valuable step in
                      sharpening my skills in product development, from concept
                      to production.
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="text-xl font-semibold mb-1 text-base uppercase">Showcase</div>
              <div className="border-b border-white/15 mb-5 mt-2"></div> */}

              {/* Images + Text Section */}
              <div className="mb-20 mt-20">
                <div className="space-y-12">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/800x700"
                      alt="Screenshot 1"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Dashboard Overview</h3>
                      <p className="text-gray-400">
                        This image shows the dashboard overview of the Fitness App,
                        where users can track their workouts, calories, and progress
                        over time in a clean interface.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/800x700"
                      alt="Screenshot 2"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Workout Tracking</h3>
                      <p className="text-gray-400">
                        This image highlights the workout tracking feature, where
                        users can log sets, reps, and weights for each exercise.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="https://placehold.co/800x700"
                      alt="Screenshot 3"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Nutrition Tracking</h3>
                      <p className="text-gray-400">
                        This image demonstrates the nutrition tracking functionality,
                        helping users monitor meals and maintain their diet goals.
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

export default Fitness;
