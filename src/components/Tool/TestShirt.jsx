import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TestShirt(props) {
  const { nodes, materials } = useGLTF("/currentTest.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model1_1.geometry}
          material={materials.collar_FRONT_3447}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model1_2.geometry}
          material={materials.fab1_FRONT_19607}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model1_3.geometry}
          material={materials.fab1_BACK_19607}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/currentTest.glb");
