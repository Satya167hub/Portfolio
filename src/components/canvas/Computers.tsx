import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{
  isMobile: boolean;
  prefersReducedMotion: boolean;
}> = ({ isMobile, prefersReducedMotion }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const modelMesh = (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="#151030" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.14}
        penumbra={1}
        intensity={1.3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, -1, 1]} intensity={1.2} />
      {/* Subtle purple accent rim light */}
      <pointLight position={[-2, 2, 2]} color="#915EFF" intensity={0.8} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );

  if (prefersReducedMotion) {
    return modelMesh;
  }

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.18}
      floatIntensity={0.45}
      floatingRange={[-0.08, 0.08]}
    >
      {modelMesh}
    </Float>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Screen size listener
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Reduced motion listener
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          frameloop={prefersReducedMotion ? "demand" : "always"}
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers
              isMobile={isMobile}
              prefersReducedMotion={prefersReducedMotion}
            />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ComputersCanvas;
