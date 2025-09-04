import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full font-poppins flex flex-col overflow-hidden border-t border-white/15 bg-[#111]">
      <div className="py-12">
        <div className="flex w-full max-w-5xl mx-auto px-8 justify-between items-start">
          <div className="text-left flex-1">
            <h3 className="text-2xl font-normal mb-3">
              let's get in touch!{" "}
              <span className="inline-flex items-center mx-2 text-[#FF4D4D]">✶</span>
            </h3>
            <p className="text-sm text-white/60 mb-4">aleksa cekić © 2025</p>
          </div>

          <div className="flex space-x-20">
            <div>
              <h4 className="text-sm font-normal mb-4 text-white/90">links</h4>
              <div className="flex flex-col space-y-3 text-sm">
                <a
                  href="https://www.linkedin.com/in/alcekic"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-[#FF4D4D] transition-colors duration-300 border-b border-dotted border-white/40 hover:border-[#FF4D4D] pb-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yxngalex"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-[#FF4D4D] transition-colors duration-300 border-b border-dotted border-white/40 hover:border-[#FF4D4D] pb-0.5"
                >
                  Github
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-normal mb-4 text-white/90">contact me</h4>
              <div className="flex flex-col space-y-3 text-sm">
                <a
                  href="mailto:aleksa.cekic8@gmail.com"
                  className="text-white/60 hover:text-[#FF4D4D] transition-colors duration-300 border-b border-dotted border-white/40 hover:border-[#FF4D4D] pb-0.5"
                >
                  aleksa.cekic8@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
