import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";

export const About = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const lastScrollY = useRef(0);
  const targetOpacity = useRef(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;

      const fadeEnd = scrollingDown ? 150 : window.innerHeight * 0.55;
      const linear = Math.min(Math.max(scrollY / fadeEnd, 0), 1);
      const eased = scrollingDown ? linear : linear * linear;

      targetOpacity.current = 1 - eased;

      requestAnimationFrame(() => {
        setScrollOpacity(targetOpacity.current);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen">
      <main
        className="max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-10 transition-opacity duration-200 ease-out"
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
        </div>

        <div className="text-center text-base md:text-lg uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:aleksa.cekic8@gmail.com"
            className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
          >
            Email
          </a>
          <span className="text-gray-400 hidden sm:inline">{"///"}</span>
          <a
            href="https://www.linkedin.com/in/alcekic"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
          >
            LinkedIn
          </a>
          <span className="text-gray-400 hidden sm:inline">{"///"}</span>
          <a
            href="https://github.com/alxcek"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
          >
            Github
          </a>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 hidden md:block"
          style={{ bottom: 'clamp(13vh, calc(20vh - 3.94vw), 20vh)' }}
        >
          <Arrow />
        </div>
      </main>
    </section>
  );
};

