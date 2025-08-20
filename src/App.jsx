import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/App.scss"

import Home from "./pages/Home";
import Esl from "./pages/Esl";
import Met from "./pages/Met";

const App = () => {
  return (
      <div className="flex flex-col items-center">
        <div className="w-full px-6 max-w-[1920px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/esl" element={<Esl />} />
            <Route path="/met" element={<Met />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
};

export default App;
