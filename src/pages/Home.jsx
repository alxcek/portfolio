import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => (
  <div className="flex flex-col items-center">
    <div className="w-full px-6 lg:max-w-[1920px]">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  </div>
);

export default Home;
