import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Projects from "../components/Projects";

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  useEffect(() => {
    let lastDeltaY = 0;

    const handleWheel = (e) => {
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

      lastDeltaY = deltaY;
    };

    const handleTouchStart = (e) => {
      window.touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
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

    const snapToProjects = () => {
      setIsScrolling(true);
      setCurrentSection('projects');

      const targetY = projectsRef.current?.offsetTop || 0;

      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 800;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentY = startY + distance * easeInOutCubic;

        window.scrollTo(0, currentY);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setTimeout(() => setIsScrolling(false), 200);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const snapToAbout = () => {
      setIsScrolling(true);
      setCurrentSection('about');

      const startY = window.scrollY;
      const duration = 700;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentY = startY * (1 - easeInOutCubic);

        window.scrollTo(0, currentY);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setTimeout(() => setIsScrolling(false), 200);
        }
      };

      requestAnimationFrame(animateScroll);
    };

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
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef} className="relative z-10 bg-[#111]">
        <Projects />
      </div>
    </div>
  );
};

export default Home;