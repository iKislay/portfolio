import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Schedule from '../pages/Schedule';

import { motion } from 'framer-motion';

const LoadingScreen = ({ loadingText }) => {
  return (
    <motion.div
      initial={{ y: '-100vh', borderRadius: '0 0 200% 200%' }}
      animate={{ y: 0, borderRadius: '0 0 0% 0%' }}
      exit={{ y: '100vh', borderRadius: '200% 200% 0 0', scaleY: -1 }}
      transition={{ type: 'tween', values: [0, 0.5, 1], times: [0, 0.5, 1], stiffness: 60, damping: 10, duration: 0.5, delay: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black text-white -z-20" // Adjust z-index as needed
    >
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ type: 'keyframes', values: [0, 0.5, 1], times: [0, 0.5, 1], stiffness: 60, damping: 10, delay: 0.5 }}
        className="bg-black"
      ></motion.div>
      <h1>{loadingText}</h1>
    </motion.div>
  );
};
const AnimatedRoutes = () => {
  // const [initialLoading, setInitialLoading] = useState(true);
  // const [subsequentLoading, setSubsequentLoading] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   if (initialLoading) {
  //     // Simulating initial loading for the first time
  //     const timeout = setTimeout(() => {
  //       setInitialLoading(false);
  //     }, 2500);

  //     return () => clearTimeout(timeout);
  //   } else {
  //     // Simulating loading when navigating between pages
  //     setSubsequentLoading(true);
  //     const timeout = setTimeout(() => {
  //       setSubsequentLoading(false);
  //     }, 2500);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [location.pathname]);

  // if (initialLoading) {
  //   // Show initial loading screen with 'KISLAY.' text
  //   return <LoadingScreen loadingText="KISLAY." />;
  // }

  // if (subsequentLoading) {
  //   // Show subsequent loading screen with custom text based on the route
  //   let loadingText = location.pathname.substring(1);
  //   // If the path is empty, set it to "Home"
  //   loadingText = loadingText === "" ? "Home" : loadingText;
  //   loadingText = `${loadingText}.`;
  //   return <LoadingScreen loadingText={loadingText} />;
  // }

  // Render the content when not in a loading state
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </>
  );
};


export default AnimatedRoutes;
