import React from "react";
import Shirt from "./Shirt";
import { Center } from "@react-three/drei";

function ModelViewer() {
  return (
    <>
      <Center>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
          castShadow
        />
        <spotLight
          position={[10, 10, -20]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
          castShadow
        />

        <mesh position={[0, -0.1, 0]} castShadow>
          <Shirt />
        </mesh>
      </Center>
    </>
  );
}

export default ModelViewer;
