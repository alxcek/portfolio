import { useState, useCallback } from "react";

interface ScrollToTopButtonProps {
  visible: boolean;
}

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16V3M9 3L4 8M9 3L14 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScrollToTopButton = ({ visible }: ScrollToTopButtonProps) => {
  const [flipped, setFlipped] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setFlipped((f) => !f);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const getStyle = (isActive: boolean): React.CSSProperties => {
    if (isActive && !animating) {
      return { transform: "translateY(0)", opacity: 1 };
    }
    if (isActive && animating) {
      return {
        transform: "translateY(-150%)",
        opacity: 0,
        transition: "transform 0.35s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease-in",
      };
    }
    if (!isActive && animating) {
      return {
        transform: "translateY(0)",
        opacity: 1,
        transition:
          "transform 0.35s cubic-bezier(0, 0, 0.2, 1), opacity 0.15s ease-out 0.1s",
      };
    }
    // standby, not animating
    return { transform: "translateY(150%)", opacity: 0 };
  };

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={handleMouseEnter}
      className={`fixed bottom-8 right-8 z-50 hidden md:flex items-center justify-center
        w-10 h-10 rounded-full text-gray-400 hover:text-[#FF4D4D] hover:bg-white/10
        transition-colors duration-300 cursor-pointer overflow-hidden
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <div className="relative w-[18px] h-[18px]">
        <div className="absolute inset-0" style={getStyle(!flipped)}>
          <ArrowIcon />
        </div>
        <div className="absolute inset-0" style={getStyle(flipped)}>
          <ArrowIcon />
        </div>
      </div>
    </button>
  );
};

