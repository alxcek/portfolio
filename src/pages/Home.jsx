import About from "../components/About";
import Projects from "../components/Projects";

const Home = () => (
  <div className="relative">
        <About />
        <div className="relative z-10 bg-[#111]">
          <Projects />
        </div>
  </div>
);

export default Home;
