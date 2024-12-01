import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home = () => (
  <div className="flex flex-col items-center">
    <div className="w-full max-w-7xl px-6">
      <Header />
      <About />
      <Projects />
    </div>
  </div>
);

export default Home;
