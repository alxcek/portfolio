import React from "react";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky z-50 top-0 flex bg-[#111] items-center border-b border-white/15 justify-between px-4 py-2 text-sm shadow-sm">
      <div
        className="flex-shrink-0 font-light text-md ml-8 cursor-pointer hover:text-gray-300 transition-colors"
        onClick={scrollToTop}
      >
        Aleksa Cekić
      </div>

      <div className="flex-grow text-center">Software Engineer</div>

      <div className="flex-shrink-0 mr-8">Niš, Serbia</div>
    </nav>
  );
};

export default Header;