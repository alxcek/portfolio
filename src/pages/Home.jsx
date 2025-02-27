import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => (
  <div className="flex flex-col items-center">
    <div className="w-full px-6 max-w-[1920px]">
      <Header />
      <div className="relative">
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  </div>
);

export default Home;
