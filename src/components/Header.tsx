import { useLocation, useNavigate } from "react-router-dom";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
    <path d="M5.25 6.5C6.35 6.5 7.25 5.6 7.25 4.5C7.25 3.4 6.35 2.5 5.25 2.5C4.15 2.5 3.25 3.4 3.25 4.5C3.25 5.6 4.15 6.5 5.25 6.5Z" />
    <path d="M10.5 8.5H13.75V10.13C14.24 9.19 15.46 8.25 17.28 8.25C20.63 8.25 21.44 10.06 21.44 13.36V20.5H18.06V14.09C18.06 12.22 17.57 11.16 16.42 11.16C14.81 11.16 13.88 12.28 13.88 14.09V20.5H10.5V8.5Z" />
  </svg>
);

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
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

  const iconClass = "text-gray-400 transition-colors duration-300 hover:text-[#FF4D4D]";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#111] border-b border-white/15 px-4 sm:px-6 py-3 text-sm shadow-sm h-14">
      <button
        type="button"
        onClick={goHome}
        className="flex items-center gap-2 flex-shrink-0 font-mono lowercase text-xs sm:text-sm cursor-pointer hover:text-[#FF4D4D] transition-colors duration-300 ease-in-out"
      >
        <span className="font-mono text-[#FF4D4D] flex-shrink-0" aria-hidden="true">❯</span>
        aleksa_cekic
      </button>

      <div className="flex items-center gap-3 sm:gap-8 whitespace-nowrap font-light text-xs sm:text-sm">
        <button type="button" className={linkClass} onClick={() => goToSection("works")}>
          projects
        </button>
        <button type="button" className={linkClass} onClick={() => goToSection("experience")}>
          experience
        </button>
        <a
          href="https://github.com/alxcek"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={iconClass}
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/alcekic"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={iconClass}
        >
          <LinkedinIcon />
        </a>
      </div>
    </nav>
  );
};
