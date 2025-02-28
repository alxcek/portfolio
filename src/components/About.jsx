import React, { useEffect, useState } from "react";

const About = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 300;

      const progress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);

      requestAnimationFrame(() => {
        setScrollOpacity(1 - progress);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="sticky my-1 top-0 px-1 transition-opacity duration-300 ease-out"
      style={{
        opacity: scrollOpacity,
        zIndex: 0,
        pointerEvents: scrollOpacity < 0.2 ? 'none' : 'auto'
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between gap-10">
        <div className="flex-1 text-left">
          <p className="text-3xl">
            Aleksa engineers software: the architectures that power it, and the
            interfaces that connect it. His work spans building scalable
            microservices with <span className="uppercase font-bold">Java</span> and{" "}
            <span className="uppercase font-bold">Spring Boot</span>, designing resilient
            relational database systems, and crafting dynamic front-end
            experiences with <span className="uppercase font-bold">React</span>,{" "}
            <span className="uppercase font-bold">JavaScript</span>, and{" "}
            <span className="uppercase font-bold">TypeScript</span>. He studied
            Software Engineering before working on backend solutions and
            full-stack applications. Most recently, he has been focused on
            developing efficient, maintainable systems that bridge performance and
            usability.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;