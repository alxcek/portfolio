import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";

const About = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 200;
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
        className="px-8 max-w-4xl w-full transition-opacity duration-300 ease-out"
        style={{
          opacity: scrollOpacity,
          pointerEvents: scrollOpacity < 0.2 ? "none" : "auto",
        }}
      >
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl mb-6 leading-relaxed">
            Aleksa is a <span className="italic font-semibold">software engineer</span> at{" "}
            <span className="font-medium">Niš, Serbia</span>. He has experience{" "}
            <span className="inline-flex items-center mx-2 text-[#FF4D4D]">✱</span> building and maintaining many microservices,{" "}
            <span className="inline-flex items-center mx-2 text-[#FF4D4D]">✦</span> designing resilient relational database systems,
            and <span className="inline-flex items-center mx-2 text-[#FF4D4D]">※</span> exploring the capabilities of{" "}
            <span className="uppercase font-bold">Python</span> and its libraries for machine learning.
          </p>

          <div className="text-lg text-gray-400 mt-8">
            Previously building solutions with{" "}
            <span className="font-semibold uppercase">JAVA</span>{" "}
            <span className="font-semibold uppercase">SPRING BOOT</span>
          </div>
        </div>

        <div className="text-center text-lg uppercase tracking-wider space-x-6">
          <span className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out">
            Email
          </span>
          <span className="text-gray-400">///</span>
          <span className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out">
            LinkedIn
          </span>
          <span className="text-gray-400">///</span>
          <span className="cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out">
            Github
          </span>
        </div>

        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
          <Arrow />
        </div>
      </main>
    </section>
  );
};

export default About;