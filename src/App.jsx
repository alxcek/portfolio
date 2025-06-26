import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Esl from "./pages/Esl";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.scss"

const App = () => {
  return (
      <div className="flex flex-col items-center">
        <div className="w-full px-6 max-w-[1920px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/esl" element={<Esl />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
};

export default App;
