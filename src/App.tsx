import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import "./App.scss";
import Isum from "./pages/isum/isum.component";
import Esl from "./pages/esl/esl.component";

function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/isum" element={<Isum/>}/>
                <Route path="/esl" element={<Esl/>}/>
            </Routes>
        </div>
    );
}

export default App;
