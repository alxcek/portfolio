import React from "react";

const Esl = () => {
  return (
    <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
      <div className="w-full px-6 mb-10 max-w-[1920px]">
        <main className="w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex-1 text-left">
              <img
                src="/assets/e1.png"
                alt="Project 1"
                className="w-full mb-10 mt-10 rounded"
              />

              <div className="mb-12 text-l">
                <div className="flex flex-col md:flex-row justify-between items-start gap-y-6">
                  <div className="md:min-w-[280px] md:mr-24">
                    <div className="text-gray-400 mb-1 text-base">Company Name</div>
                    <div className="font-semibold">Engineering Software Lab</div>
                  </div>

                  <div className="flex flex-wrap gap-y-4 gap-x-16">
                    <div>
                      <div className="text-gray-400 mb-1 text-base">Duration</div>
                      <div>Sep 2022 - Present</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base">Responsibilities</div>
                      <div>Software Engineer</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base">Tools</div>
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
                <div className="text-gray-400 mb-1 text-base">Description</div>
                <div className="leading-relaxed">
                  I'm working on a healthcare platform that's actively used by hospitals and clinics across Italy. As part of an agile development team, I focus on building backend services and features with Spring Boot, carefully tailored to the specific needs of the healthcare industry.
                  The system is built as a microservices architecture in Java, making it easy to scale and maintain over time. I handle database versioning and migrations using Liquibase and Oracle, helping ensure reliability across different environments.
                  Along the way, I’ve been working with Java 17, RabbitMQ for messaging, and containerization tools like Docker and Kubernetes. I also use Jenkins for automation, where I create scheduled jobs (tasks triggered at specific times) and develop fixtures (predefined sets of data loaded into the database) to support smooth testing and development workflows.
                </div>
              </div>

            </div>
          </div>
        </main>
      </div >
    </div >
  );
};

export default Esl;
