import React, { useRef, useEffect, useState } from "react";
import ComputersCanvas from "../canvas/Computers";

const ParallaxScene = () => {
  const containerRef = useRef();
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newRotationY = scrollTop * 0.01; // Adjust the scroll speed here
      setRotationY(newRotationY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden">
      <ComputersCanvas rotationY={rotationY} />
    </div>
  );
};

export default ParallaxScene;
