import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import GradientBlobs from './components/GradientBlobs';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  // Fix Bug 6: wrap in useCallback so the reference is stable across renders,
  // preventing LoadingScreen from receiving a new function prop on every re-render
  // and re-triggering its useEffect in React 19 StrictMode.
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen onComplete={handleComplete} />

      {/* Custom cursor — always on */}
      <CustomCursor />

      {/* Ambient gradient blobs */}
      <GradientBlobs />

      {/* Main content */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
