import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goHome = () => {
    navigate("/");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToSection = (id: string) => {
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const linkClass =
    "relative cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out " +
    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-[#FF4D4D] " +
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-700 after:ease-out " +
    "hover:after:scale-x-100";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#111] border-b border-white/15 px-6 py-2 text-sm shadow-sm h-12">
      <div className="w-10 flex-shrink-0" aria-hidden="true" />
      <div className="flex items-center gap-4 sm:gap-8 whitespace-nowrap font-light text-sm">
        <button type="button" className={linkClass} onClick={() => navigate("/about")}>
          About
        </button>
        <button type="button" className={linkClass} onClick={() => goToSection("works")}>
          Works
        </button>
        <button type="button" className={linkClass} onClick={() => goToSection("experience")}>
          Experience
        </button>
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

