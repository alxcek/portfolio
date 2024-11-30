import React from "react";
import '../../public/assets/email.png';

const About = () => (
  <main className="mt-10">
    <div className="flex flex-col sm:flex-row justify-between gap-10">
      <div className="flex-1 text-left">
        <h2 className="text-sm font-semibold text-gray-500">ABOUT ME</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-sm font-semibold text-gray-500">EXPERIENCE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-sm font-semibold text-gray-500">CONTACT</h2>
        <div className="flex gap-4 mt-4">
          <a href="mailto:aleksa.cekic8@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/email.png" 
              alt="Email"
              className="w-8 h-8 object-contain"
            />
          </a>
          
          <a href="https://www.linkedin.com/in/yourlinkedin/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
);

export default About;
