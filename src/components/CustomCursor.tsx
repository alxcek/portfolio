import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const el = e.target as HTMLElement;
      const onProject = !!el.closest("[data-project-card]");
      const onHidden = !!el.closest("[data-cursor-hide]");

      setIsHoveringProject(onProject);
      setIsHidden(onHidden);
      if (!onProject) setIsClicked(false);
    };

    const handleClick = () => {
      setIsClicked(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice.current) return null;

  const expanded = isHoveringProject && !isClicked;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: 9999,
      }}
      initial={{ opacity: 0 }}
      animate={{
        width: expanded ? 72 : 16,
        height: expanded ? 36 : 16,
        opacity: isHidden ? 0 : isVisible ? 1 : 0,
        backgroundColor: "#FF4D4D",
      }}
      transition={{
        width: { type: "spring", damping: 25, stiffness: 300 },
        height: { type: "spring", damping: 25, stiffness: 300 },
        opacity: { duration: 0.15 },
        backgroundColor: { duration: 0.15 },
      }}
    >
      <motion.span
        className="text-white text-xs font-semibold whitespace-nowrap select-none"
        animate={{
          opacity: expanded ? 1 : 0,
          scale: expanded ? 1 : 0.5,
        }}
        transition={{ duration: 0.15 }}
      >
        click
      </motion.span>
    </motion.div>
  );
};
