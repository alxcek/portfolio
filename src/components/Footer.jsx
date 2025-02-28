import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full font-poppins flex flex-col overflow-hidden border-t border-white/15 bg-[#111] py-6">
      <div className="flex w-4/5 mx-auto justify-between items-center">
        <div
          className="text-left cursor-pointer text-sm"
          onClick={scrollToTop}
        >
          Copyright @ 2025 Aleksa Cekić
        </div>
        <div className="flex space-x-12">
          <div>
            <a
              href="https://github.com/yxngalex"
              target="_blank"
              rel="noreferrer"
              className="text-white border-b border-dotted border-white hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
            >
              Github
            </a>
          </div>
          <div>
            <a
              href="mailto:aleksa.cekic8@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-white border-b border-dotted border-white hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
            >
              Email
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/aleksa-ceki%C4%87-347148224/"
              target="_blank"
              rel="noreferrer"
              className="text-white border-b border-dotted border-white hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
