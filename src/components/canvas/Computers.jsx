import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const ComputersCanvas = () => {
  const scrollRef = useRef(0);
  const parallaxAmount = 0.005;
  const zoomAmount = 2;

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    // Update the camera position and rotation on each frame
    const yScroll = scrollRef.current;
    const cameraPosition = [-4, 3 + yScroll * parallaxAmount, 6];
    const cameraRotation = [0, yScroll * parallaxAmount * 10, 0];
    camera.position.set(...cameraPosition);
    camera.rotation.set(...cameraRotation);
  });

  let camera;

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={(state) => {
        // Save the camera instance to a variable
        camera = state.camera;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
