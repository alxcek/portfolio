import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex bg-[#111] flex-col sm:flex-row items-center border-b border-white/15 justify-between px-4 py-2 text-sm shadow-sm">
      <div className="flex-shrink-0 font-light text-lg">
        Aleksa Cekić
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center sm:gap-72 mx-auto mt-4 sm:mt-0">
        <div>Software Engineer</div>
        <div>Niš, Serbia</div>
      </div>
    </nav>
  );
};

export default Header;
