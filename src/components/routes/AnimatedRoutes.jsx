import React from 'react'
import Home from "../../pages/Home";
import About from "../../pages/About";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from '../../pages/Contact';

const AnimatedRoutes = () => {
    const loaction = useLocation()
    return (
        <Routes location={loaction} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default AnimatedRoutes