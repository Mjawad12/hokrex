import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/shirt2.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OBJ_1.geometry}
          material={materials.Self_mesh_FRONT_2709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OBJ_2.geometry}
          material={materials.Self_mesh_Copy_1_FRONT_2720}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OBJ_3.geometry}
          material={materials.Material3047}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OBJ_4.geometry}
          material={materials.Material2912}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/shirt2.glb");
