import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";

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
    <section className="sticky top-0 z-0 flex items-center justify-center min-h-screen">
      <main
        className="px-4 md:px-8 max-w-4xl w-full transition-opacity duration-200 ease-out"
        style={{
          opacity: scrollOpacity,
          pointerEvents: scrollOpacity < 0.1 ? "none" : "auto",
        }}
      >
        <div className="text-center mb-12 md:mb-16">
          <p className="font-bold tracking-tight whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Aleksa Cekić
          </p>
          <div className="mt-3 flex flex-col items-center text-gray-400">

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300">
              Software Engineer
              <span className="mx-2 text-[#FF4D4D]">•</span>
              Artificial Intelligence
              <span className="mx-2 text-[#FF4D4D]">•</span>
              Design
            </p>
          </div>
          {/* <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 5-9 11-9 11S3 15 3 10a9 9 0 1118 0z" />
              </svg>
              <span>Niš, Serbia</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            </div>
          </div> */}
        </div>

        <div className="text-center text-base md:text-lg uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:aleksa.cekic8@gmail.com"
            className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
          >
            Email
          </a>
          <span className="text-gray-400 hidden sm:inline">///</span>
          <a
            href="https://www.linkedin.com/in/alcekic"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
          >
            LinkedIn
          </a>
          <span className="text-gray-400 hidden sm:inline">///</span>
          <a
            href="https://github.com/yxngalex"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
          >
            Github
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[68%] sm:top-[77%] md:top-[82%] lg:top-[88%] xl:top-[86%] 2xl:top-[92%] hidden sm:block max-[810px]:hidden">
          <Arrow />
        </div>
      </main>
    </section>
  );
};

export default About;