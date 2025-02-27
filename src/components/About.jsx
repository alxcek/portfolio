import React from "react";
import "../../public/assets/img1.png";

const About = () => (
  <main className="my-10 relative z-10 px-1">
    <div className="flex flex-col sm:flex-row justify-between gap-10">
      <div className="flex-1 text-left">
        <p className="text-3xl">
          Aleksa engineers software: the architectures that power it, and the
          interfaces that connect it. His work spans building scalable
          microservices with <span className="uppercase font-bold">Java</span> and <span className="uppercase font-bold">Spring Boot</span>, designing resilient
          relational database systems, and crafting dynamic front-end
          experiences with <span className="uppercase font-bold">React</span>, <span className="uppercase font-bold">JavaScript</span> and <span className="uppercase font-bold">TypeScript</span>. He studied
          Software Engineering before working on backend solutions and
          full-stack applications. Most recently, he has been focused on
          developing efficient, maintainable systems that bridge performance and
          usability.
        </p>
      </div>
      <div className="flex-1 text-center">
        <div className="flex gap-4 justify-center">
          <img
            src="/assets/img2.png"
            alt="image1"
            className="h-96 object-contain mx-auto max-w-full"
          />
        </div>
      </div>
    </div>
  </main>
);

export default About;
