import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    // Wait for the page-transition animation to settle before measuring.
    const timer = setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 450);

    // Clear the navigation state so a refresh/back doesn't re-trigger the scroll.
    window.history.replaceState({}, "");

    return () => clearTimeout(timer);
  }, [location.state]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const scrollY = window.scrollY;
      const aboutHeight = aboutRef.current?.offsetHeight || 0;
      const deltaY = e.deltaY;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      if (scrollingDown && scrollY < aboutHeight * 0.8) {
        e.preventDefault();
        snapToProjects();
      } else if (scrollingUp && scrollY > aboutHeight * 0.2 && scrollY < aboutHeight) {
        e.preventDefault();
        snapToAbout();
      }

    };

    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth < 1024) return;
      window.touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.innerWidth < 1024) return;
      if (isScrolling || !window.touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = window.touchStartY - touchY;
      const scrollY = window.scrollY;
      const aboutHeight = aboutRef.current?.offsetHeight || 0;

      if (Math.abs(deltaY) < 50) return;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      if (scrollingDown && scrollY < aboutHeight * 0.8) {
        e.preventDefault();
        snapToProjects();
        window.touchStartY = null;
      } else if (scrollingUp && scrollY > aboutHeight * 0.2 && scrollY < aboutHeight) {
        e.preventDefault();
        snapToAbout();
        window.touchStartY = null;
      }
    };

    const handleTouchEnd = () => {
      window.touchStartY = null;
    };

    const animateScrollTo = (targetY: number, duration: number) => {
      setIsScrolling(true);

      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distance * easeInOutCubic);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setTimeout(() => setIsScrolling(false), 200);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const snapToProjects = () => animateScrollTo(projectsRef.current?.offsetTop || 0, 800);
    const snapToAbout = () => animateScrollTo(0, 700);

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isScrolling]);

  return (
    <div className="relative">
      <div ref={aboutRef} className="sticky top-0 z-0">
        <About />
      </div>
      <div ref={projectsRef} className="relative z-10 bg-[#111]">
        <Projects />
        <Experience />
      </div>
    </div>
  );
};

export default Home;