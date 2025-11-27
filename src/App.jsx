import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

import "./styles/App.scss"

import Home from "./pages/Home";
import Esl from "./pages/Esl";
import Met from "./pages/Met";
import Fitness from "./pages/Fitness";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col items-center">
        <div className="w-full px-6 max-w-[1920px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/esl" element={<Esl />} />
            <Route path="/met" element={<Met />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
