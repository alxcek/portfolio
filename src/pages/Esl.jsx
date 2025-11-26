import React from "react";
import Button from "../components/Button"

const Esl = () => {
  return (
    <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
      <div className="w-full px-6 mb-10 max-w-[1920px]">
        <main className="w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex-1 text-left">
              <img
                src="/assets/main_logos/eng-logo.png"
                alt="Project 1"
                className="w-full mb-10 mt-10 rounded"
              />

              <div className="mb-12 text-l mt-2">
                <div className="mb-2 font-semibold text-base text-xl uppercase">Overview</div>
                <div className="border-b border-white/15 mb-5"></div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-y-6">
                  <div className="md:min-w-[280px] md:mr-24">
                    <div className="text-gray-400 mb-1 text-base uppercase">Company Name</div>
                    <div className="font-semibold">Engineering Software Lab</div>
                  </div>

                  <div className="flex flex-wrap gap-y-4 gap-x-16">
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Duration</div>
                      <div>Sep 2022 - Present</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Role</div>
                      <div>Software Engineer</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Tools</div>
                      <div className="space-y-1">
                        <div>Spring Boot</div>
                        <div>Java 17</div>
                        <div>Oracle</div>
                        <div>Liquibase</div>
                        <div>RabbitMQ</div>
                        <div>Jenkins</div>
                        <div>Kubernetes</div>
                        <div>Docker</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 text-l">
                <div className="mb-2 font-semibold text-base text-xl uppercase">Company Profile</div>
                <div className="border-b border-white/15 mb-5 mt-2"></div>
                <div className="leading-relaxed">
                  With around 12,000 professionals in 65 locations (in Italy, Belgium, Germany, Norway, Serbia, Spain, Sweden, Switzerland, Argentina, Brazil, and the USA), the Engineering Group designs, develops and manages innovative solutions for the business areas where digitalization is having the biggest impact, including Digital Finance, Smart Government & E-Health, Augmented City, Digital Industry, Smart Energy & Utilities, Digital Media & Communication.
                  <br />
                  <br />
                  <b>Engineering Software Lab Serbia </b> was established in 2012 as a subsidiary of Italian company MHT s.r.l. a member of Engineering Group. Two years later, Engineering Group started creating a very first software laboratory inside the organization and decided to take over the whole structure in Belgrade. Since June 2018 it's been operating under the name Engineering Software Lab.
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.eng.it/en/group/companies/engineering-serbia",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    size="md"
                    className="w-full max-w-[200px]"
                  >
                    <span className="text-fill-animate">Read More</span>
                    <span className="text-fill-animate">&gt;</span>
                  </Button>
                </div>
              </div>

              <div className="text-xl mb-2 font-semibold text-base uppercase">Involvement</div>
              <div className="border-b border-white/15 mb-5 mt-2"></div>

              <div className="mb-12 text-l">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="text-l font-semibold mb-1 text-base uppercase">What I do</div>
                    {/* <div className="border-b border-white/15 mb-5 mt-2"></div> */}
                    <div className="leading-relaxed">
                      I'm working on a healthcare platform that's actively used by hospitals and clinics across Italy. As part of an agile development team, I focus on building backend services and features with Spring Boot, carefully tailored to the specific needs of the healthcare industry.
                      The system is built as a microservices architecture in Java, making it easy to scale and maintain over time. I handle database versioning and migrations using Liquibase and Oracle, helping ensure reliability across different environments.
                      Along the way, I’ve been working with RabbitMQ for messaging, and containerization tools like Docker and Kubernetes. I also use Jenkins for automation, where I create scheduled jobs (tasks triggered at specific times) and develop fixtures (predefined sets of data loaded into the database) to support smooth testing and development workflows.
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-l font-semibold mb-2 text-base uppercase">Experience</div>
                    {/* <div className="border-b border-white/15 mb-5 mt-2"></div> */}
                    <div className="leading-relaxed">
                      During my time at ESL, I've gotten much more confident with Spring Boot and working in a microservices setup. I learned how to handle database changes safely using Liquibase and got used to working with Oracle in real-world systems.
                      I've also gained solid experience with RabbitMQ for async communication and built up a habit of writing clean, testable backend code. Setting up Jenkins pipelines, writing scheduled jobs, and working with Docker and Kubernetes became part of my daily workflow.
                      I’ve improved a lot when it comes to debugging, understanding legacy code, and collaborating in a team, especially in an agile setup. Overall, this role helped me grow as a backend engineer and get a better sense of how complex systems work in production.
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

export default Esl;
