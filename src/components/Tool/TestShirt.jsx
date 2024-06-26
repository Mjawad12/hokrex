import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TestShirt(props) {
  const { nodes, materials } = useGLTF("/shirt_baked_Modified.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/shirt_baked_Modified.glb");
