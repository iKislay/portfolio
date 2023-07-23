import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from '../pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Work from '../pages/Work';

const AnimatedRoutes = () => {
    const loaction = useLocation()
    return (
        <>
        <Navbar />
        <Routes location={loaction} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
        </>
    )
}

export default AnimatedRoutes