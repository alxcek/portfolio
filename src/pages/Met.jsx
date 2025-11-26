import React from "react";
import Button from "../components/Button";

const Met = () => {
  return (
    <div className="text-white bg-[#111] min-h-screen flex flex-col items-center">
      <div className="w-full px-6 mb-10 max-w-[1920px]">
        <main className="w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex-1 text-left">
              <img
                src="/assets/main_logos/uni-logo.png"
                alt="Met Project"
                className="w-full mb-10 mt-10 rounded"
              />

              <div className="mb-12 text-l mt-2">
                <div className="mb-2 text-base text-xl font-semibold uppercase">Overview</div>
                <div className="border-b border-white/15 mb-5"></div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-y-6">
                  <div className="md:min-w-[280px] md:mr-24">
                    <div className="text-gray-400 mb-1 text-base uppercase">
                      Company Name
                    </div>
                    <div className="font-semibold">ISUM</div>
                  </div>

                  <div className="flex flex-wrap gap-y-4 gap-x-16">
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">
                        Duration
                      </div>
                      <div>Aug 2020 - Sep 2022</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Role</div>
                      <div>Full-Stack Software Developer</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1 text-base uppercase">Tools</div>
                      <div className="space-y-1">
                        <div>Angular</div>
                        <div>Typescript</div>
                        <div>Java</div>
                        <div>Spring Boot</div>
                        <div>MySQL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Profile
              <div className="mb-12 text-l">
                <div className="mb-1 text-base text-xl">Company Profile</div>
                <div className="border-b border-white/15 mb-5 mt-2"></div>
                <div className="leading-relaxed">
                
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://group.met.com/",
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
              </div> */}

              <div className="text-xl mb-2 font-semibold text-base uppercase">Involvement</div>
              <div className="border-b border-white/15 mb-5 mt-2"></div>

              <div className="mb-12 text-l">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="text-l mb-2 font-semibold text-base uppercase">What I do</div>
                    <div className="leading-relaxed">
                      At Metropolitan University’s Faculty of Information Technology, I worked
                      in an agile team developing critical internal systems as part of a work-study program.
                      My role included designing and implementing backend services with
                      Java Spring Boot, building user interfaces with Angular, and integrating
                      frontend and backend through secure REST APIs.
                      I contributed to the Student Information System actively used by the university
                      for student management and administrative processes, as well as the modernization
                      of the legacy Financial Management System.
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-l font-semibold mb-2 text-base uppercase">Experience</div>
                    <div className="leading-relaxed">
                      During my time at Metropolitan, I built full-stack features using Angular,
                      TypeScript, HTML5, and CSS3 on the frontend, and Java Spring Boot on the backend.
                      I led the migration of the Financial Management System to a modern Angular/Spring Boot stack,
                      which significantly improved system performance and maintainability.
                      This experience strengthened my skills in full-stack development, agile teamwork,
                      and delivering production-ready systems in a real-world academic environment.
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

export default Met;
