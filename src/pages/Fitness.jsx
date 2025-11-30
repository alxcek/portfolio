import React from "react";
import Button from "../components/Button"

const Fitness = () => {
  return (
    <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
      <img
        src="/assets/fitness_app/fitness_login.png"
        alt="Project 1"
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
                  The <b>Fitness App</b> is a web-based platform developed as part of my final
                  project, designed to help users track workouts, monitor nutrition, and maintain
                  healthy habits in a modern, fast-paced lifestyle. The idea behind the project
                  stems from the increasing need for an accessible digital tool that supports
                  individuals in overcoming the challenges of a sedentary daily routine.

                  <br /><br />

                  The application allows users to log their training sessions, track sets, reps,
                  and weights, and set clear fitness goals. In addition to workout tracking, the
                  integrated nutrition system automatically calculates each user’s recommended
                  daily calorie intake based on personal parameters, providing insight into whether
                  they are in a caloric deficit, surplus, or balance.

                  <br /><br />

                  The development process included designing the database structure, implementing
                  secure backend APIs, and building a clean and responsive user interface. As a
                  Software Engineering student, this project enabled me to combine theoretical
                  knowledge with practical full-stack development, deepening my understanding of
                  user needs in the areas of fitness, motivation, and long-term progress tracking.
                </div>
              </div>

              {/* <div className="text-xl font-semibold mb-1 text-base uppercase">Involvement</div> */}
              {/* <div className="border-b border-white/15 mb-5 mt-2"></div> */}

              <div className="mb-12 text-l">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="text-l mb-2 text-base font-semibold uppercase">What I do</div>
                    <div className="leading-relaxed">
                      I designed and developed the complete full-stack architecture of the Fitness App,
                      implementing both the frontend interface and the backend application logic.

                      <br /><br />

                      On the backend, I built a RESTful API using <b>Spring Boot</b>, applying
                      layered architecture principles and integrating <b>MySQL</b> as the relational
                      database for storing workouts, exercises, nutrition data, and user accounts.
                      The backend includes secure authentication, efficient data persistence,
                      and structured domain logic aligned with the application’s fitness tracking model.

                      <br /><br />

                      On the frontend, I used <b>React</b> with <b>Tailwind CSS</b> to develop a clean,
                      responsive user interface based on reusable components, state management, and
                      dynamic routing via React Router. This includes screens for logging workouts,
                      tracking goals, and monitoring nutrition progress.
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-l mb-2 text-base font-semibold uppercase">Experience</div>
                    <div className="leading-relaxed">
                      Through this project, I gained hands-on experience working with modern full-stack
                      technologies, including React for building interactive user interfaces and
                      Spring Boot for developing scalable backend services.

                      <br /><br />

                      I strengthened my understanding of component-based architecture, state
                      management, and routing in React, as well as API design, data modeling,
                      authentication flows, and relational database management in MySQL on the backend.

                      <br /><br />

                      Additionally, the project improved my skills in designing structured,
                      maintainable systems by applying principles of clean architecture, modular
                      code organization, and best practices in REST API development. This project
                      represents a complete product cycle—from concept and planning to implementation
                      and documentation.
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/yxngalex/fitness-app",
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

              {/* <div className="text-xl font-semibold mb-1 text-base uppercase">Showcase</div>
              <div className="border-b border-white/15 mb-5 mt-2"></div> */}
              <div className="border-b border-white/15 mb-5"></div>

              <div className="mb-20 mt-20">
                <div className="space-y-12">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="assets/fitness_app/fitness_login.png"
                      alt="Screenshot 1"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Login</h3>
                      <p className="text-gray-400">
                        Login screen provides users with a secure and simple way to access their personal fitness dashboard.
                        The interface is intentionally minimalistic, focusing on clarity and ease of use, while the backend uses JWT authentication to ensure safe handling of user credentials. Once logged in, users instantly gain access to their workouts, goals, nutrition logs, and overall progress.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="assets/fitness_app/fitness_register.png"
                      alt="Screenshot 1"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Register</h3>
                      <p className="text-gray-400">
                        The Register screen allows new users to create an account by entering basic personal information needed for accurate fitness tracking.
                        After registration, the application automatically calculates the user’s basal metabolic rate (BMR) and recommended daily calorie intake. This initial setup ensures personalized training guidance and more precise nutrition tracking from the very first login.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="assets/fitness_app/fitness_goal_setter.png"
                      alt="Screenshot 1"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Goal Setter</h3>
                      <p className="text-gray-400">
                        The Goal Setter module enables users to define their fitness objectives, such as weight goals, training frequency, or calorie targets.
                        By adjusting personal goals, users receive tailored recommendations throughout the app. This feature helps them stay focused, track long-term progress, and maintain motivation by visually monitoring how close they are to achieving their targets.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="assets/fitness_app_main.png"
                      alt="Screenshot 1"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Dashboard Overview</h3>
                      <p className="text-gray-400">
                        The Dashboard provides a clear and structured overview of the user’s daily and weekly activity.
                        It summarizes workouts, calorie intake, remaining targets, and historical progress through visually intuitive components. The dashboard is designed to give users a quick understanding of their current status, helping them stay consistent and aware of their habits.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="assets/fitness_app/fitness_exercise.png"
                      alt="Screenshot 2"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Workout Tracking</h3>
                      <p className="text-gray-400">
                        The Workout Tracking screen allows users to log exercises with sets, reps, weight, and duration.
                        This feature is essential for monitoring strength progression over time, analyzing improvements, and maintaining structured workout routines. The interface makes it easy to record each exercise, while the backend stores all logs for long-term progress evaluation.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 items-start">
                    <img
                      src="assets/fitness_app/fitness_food.png"
                      alt="Screenshot 3"
                      className="rounded w-full"
                    />
                    <div className="sticky top-20 self-start">
                      <h3 className="text-xl font-semibold mb-2">Nutrition Tracking</h3>
                      <p className="text-gray-400">
                        The Nutrition Tracking module helps users monitor their daily food intake and stay aligned with their calorie goals.
                        Users can log meals throughout the day, and the app compares the total intake with their calculated caloric needs. This system creates a complete picture of the user's diet, assisting them in maintaining a caloric deficit, surplus, or balance—depending on their fitness objectives.
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
