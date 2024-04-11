import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export function Shirt(props) {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const shirtRef = useRef(false);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  useEffect(() => {
    window.addEventListener("mousemove", trackMouseMovement);
    return () => window.removeEventListener("mousemove", trackMouseMovement);
  }, []);

  const trackMouseMovement = (e) => {
    setx(e.clientX / window.innerWidth + 100);
    sety(e.clientY / window.innerHeight + 100);
  };

  return (
    <motion.group
      {...props}
      dispose={null}
      ref={shirtRef}
      transition={{ duration: 0, ease: "easeInOut" }}
      animate={{ rotateY: x * -0.5, rotateX: y * -0.5 }}
    >
      <group name="Scene">
        <mesh
          name="T_Shirt_male"
          castShadow
          receiveShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          userData={{ name: "T_Shirt_male" }}
          material-color="white"
        />
      </group>
    </motion.group>
  );
}

useGLTF.preload("/shirt_baked.glb");

export default Shirt;
