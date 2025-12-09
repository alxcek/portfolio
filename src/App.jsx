import React, { Suspense, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

import "./styles/App.scss";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import works from "./data/works.json";

const pages = import.meta.glob("./pages/*.jsx");

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const DynamicPage = ({ componentName }) => {
  const PageComponent = useMemo(() => {
    const importFunc = pages[`./pages/${componentName}.jsx`];

    if (!importFunc) {
      return () => <Navigate to="/" replace />;
    }

    return React.lazy(importFunc);
  }, [componentName]);

  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
      <ScrollToTop />
      <PageComponent />
    </Suspense>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full px-6 max-w-[1920px]">
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>

              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />

              <Route
                path="/about"
                element={
                  <PageTransition>
                    <AboutMe />
                  </PageTransition>
                }
              />

              {works.map((project) => (
                <Route
                  key={project.id}
                  path={project.link}
                  element={
                    <PageTransition>
                      <DynamicPage componentName={project.component} />
                    </PageTransition>
                  }
                />
              ))}

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;