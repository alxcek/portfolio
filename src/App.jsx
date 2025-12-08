import React, { Suspense, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

import "./styles/App.scss"

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import works from "./data/works.json";

const pages = import.meta.glob("./pages/*.jsx");

const DynamicPage = ({ componentName }) => {
  const PageComponent = useMemo(() => {
    const importFunc = pages[`./pages/${componentName}.jsx`];

    if (!importFunc) {
      return () => <Navigate to="/" replace />;
    }

    return React.lazy(importFunc);
  }, [componentName]);

  return (
    <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col items-center">
        <div className="w-full px-6 max-w-[1920px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            
            {works.map((project) => (
              <Route
                key={project.id}
                path={project.link}
                element={
                  <DynamicPage componentName={project.component} />
                }
              />
            ))}
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;