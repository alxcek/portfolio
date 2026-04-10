import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";
import ScrollToTopButton from "./components/ScrollToTopButton";

import "./styles/App.scss";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import works from "./data/works.json";

const pages = import.meta.glob<{ default: React.ComponentType }>("./pages/*.tsx", { eager: true });

const PageTransition = ({ children }: { children: React.ReactNode }) => {
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

const DynamicPage = ({ componentName }: { componentName: string }) => {
  const filePath = `./pages/${componentName}.tsx`;
  const module = pages[filePath];

  if (!module) {
    return <Navigate to="/" replace />;
  }

  const Component = module.default;

  return <>
    <ScrollToTop />
    <Component />
  </>;
};

const App = () => {
  const location = useLocation();
  const [footerHeight, setFooterHeight] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      setFooterHeight(entry.contentRect.height);
    });
    observer.observe(node);
  }, []);

  return (
    <>
      <div className="relative z-10 flex flex-col items-center bg-[#111]" style={{ marginBottom: footerHeight }}>
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
          <hr className="border-white/15" />
        </div>
      </div>
      <Footer ref={footerRef} />
      {location.pathname !== '/about' && (
        <ScrollToTopButton visible={showScrollTop} />
      )}
    </>
  );
};

export default App;