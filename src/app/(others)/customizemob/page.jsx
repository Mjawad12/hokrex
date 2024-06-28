"use client";
import TestShirt from "@/components/Tool/TestShirt";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Center,
  Environment,
  OrbitControls,
  PerformanceMonitor,
  Preload,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

function page() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <>
      <div className="min-h-screen w-full">
        <div
          id="cont"
          className="absolute top-0 min-h-screen w-full bg-canvasColor "
        >
          <Canvas
            performance={{ min: 0.1 }}
            // gl={{ antialias: false }}
            camera={{ position: [0, 0, 1.95], fov: 32 }}
            className="main-canvas"
            frameloop="demand"
            dpr={dpr}
          >
            <PerformanceMonitor
              onIncline={() => setDpr(2)}
              onDecline={() => setDpr(1.3)}
            />
            <Preload all />
            <OrbitControls
              enablePan={false}
              minPolarAngle={1.47079}
              maxPolarAngle={1.47079}
              maxDistance={3}
              minDistance={0.7}
            />
            <Environment preset="city" />
            <Center>
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <spotLight
                position={[10, 10, -20]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />

              <mesh position={[0, -0.1, 0]}>
                <TestShirt />
              </mesh>
            </Center>
            {/* <AdaptiveDpr pixelated />
            <AdaptivePixelRatio />
            <AdaptiveEvents /> */}
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default page;

function AdaptivePixelRatio() {
  const current = useThree((state) => state.performance.current);
  const setPixelRatio = useThree((state) => state.setDpr);
  useEffect(() => {
    setPixelRatio(window.devicePixelRatio * current);
  }, [current]);
  return null;
}
