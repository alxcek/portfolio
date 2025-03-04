import React, { useEffect, useState } from "react";

const About = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 300;

      const progress = Math.min(
        Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
        1
      );

      requestAnimationFrame(() => {
        setScrollOpacity(1 - progress);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sticky top-0 z-0 flex items-center justify-center">
      <main
        className="px-1 transition-opacity duration-300 ease-out"
        style={{
          opacity: scrollOpacity,
          pointerEvents: scrollOpacity < 0.2 ? "none" : "auto",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div className="flex-1 text-left">
            <p className="text-3xl">
              Aleksa engineers software. As a programmer and an engineer, his
              work spans building and maintaining many microservices with{" "}
              <span className="uppercase font-bold">Java</span> and{" "}
              <span className="uppercase font-bold">Spring Boot</span>,
              designing resilient relational database systems. He has a strong
              foundation in software engineering, with a current interest
              in Artificial Intelligence. Recently, for personal projects, he
              explores the capabilities of{" "}
              <span className="uppercase font-bold">Python</span> and its
              libraries for machine learning.
              <div className="text-right mt-2 uppercase space-x-4">
                <span className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out">
                  Email
                </span>
                <span className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out">
                  LinkedIn
                </span>
                <span className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out">
                  Github
                </span>
              </div>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
