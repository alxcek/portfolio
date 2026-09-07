import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    requestAnimationFrame(() => {
      document.getElementById(scrollTo)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    // Clear the navigation state so a refresh/back doesn't re-trigger the scroll.
    window.history.replaceState({}, "");
  }, [location.state]);

  return (
    <div>
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
