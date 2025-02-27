import React from "react";
import "../../public/assets/img1.png";

const About = () => (
  <main className="my-10 relative z-10 px-1">
    <div className="flex flex-col sm:flex-row justify-between gap-10">
      <div className="flex-1 text-left">
        <h2 className="text-sm font-semibold text-gray-350">LITTLE ABOUT ME</h2>
        <p>
          Greetings friend. You've stumbled upon the digital domain of Aleksa
          (Alex to most), a dysfunctional software engineer and relentless
          explorer from the buzzing corners of the modern world.
          <br />
          <br />
          At this moment in universe's time, I'm living busy bringing ideas to
          life, solving puzzles & venturing into many different technologies at
          the same time.
          <br />
          When I'm not creating, you'll find me questioning everything about our
          existance, diving into many questions many have not given a true
          answer, pushing my understanding of life further.
          <br />
          <br />
          This corner of the internet showcases the digital traces I've left
          across projects that pushed me to think differently and break
          boundaries. May these works spark something in your own journey
          through this strange, beautiful technological wilderness.
          <br />
          <br />
          Keep learnin'. Question everything.
        </p>
      </div>
      <div className="flex-1 text-center">
        <div className="flex gap-4 justify-center">
          <img
          src="/assets/img2.png"
          alt="image1"
          className="h-96 object-contain mx-auto max-w-full" />
        </div>
      </div>
    </div>
  </main>
);

export default About;
