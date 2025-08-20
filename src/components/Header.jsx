import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#111] border-b border-white/15 px-6 py-2 text-sm shadow-sm h-12">
      <div
        className="flex-shrink-0 font-light text-md cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
        onClick={scrollToTop}
      >
        Aleksa Cekić
      </div>

      <div className="flex items-center whitespace-nowrap text-sm">
        <span className="mr-1">Software Engineer</span>
        {/* <div className="flex flex-col items-center justify-center text-gray-400" style={{ lineHeight: '0.7', gap: 0, margin: '0 4px' }}>
          <span style={{ lineHeight: '0.7', fontSize: '10px' }}>•</span>
          <span style={{ lineHeight: '0.7', fontSize: '10px' }}>•</span>
          <span style={{ lineHeight: '0.7', fontSize: '10px' }}>•</span>
        </div> */}
        <span className="text-xs hidden md:inline">@</span>
        <span className="ml-1 hidden md:inline">Niš, Serbia</span>
      </div>

      <div className="w-10 flex justify-end">
        {!isHome && (
          <button
            onClick={goHome}
            className="group relative w-8 h-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-90"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-4 h-0.5 bg-white rotate-45 transition-colors duration-300 group-hover:bg-[#FF4D4D]"></div>
                <div className="w-4 h-0.5 bg-white -rotate-45 absolute top-0 transition-colors duration-300 group-hover:bg-[#FF4D4D]"></div>
              </div>
            </div>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;