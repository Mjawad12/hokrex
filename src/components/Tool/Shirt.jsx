import React, { useContext, useEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { ContextTool } from "../Mainstate(tool)/Mainstatetool";

export function Shirt(props) {
  const { testcolor, alpha, Addtext, texture, selectedText } =
    useContext(ContextTool);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  const shirtRef = useRef(false);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  useEffect(() => {
    window.addEventListener("mousemove", trackMouseMovement);
    return () => window.removeEventListener("mousemove", trackMouseMovement);
  }, []);

  const trackMouseMovement = (e) => {
    setx(e.clientX / window.innerWidth);
    sety(e.clientY / window.innerHeight);
  };

  return (
    <motion.group
      {...props}
      dispose={null}
      ref={shirtRef}
      transition={{ duration: 0, ease: "easeInOut" }}
      animate={{ rotateY: x * -0.1, rotateX: y * -0.1 }}
    >
      <group name="Scene">
        <mesh
          name="T_Shirt_male"
          castShadow
          receiveShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          userData={{ name: "T_Shirt_male" }}
        >
          <meshStandardMaterial
            color={testcolor}
            opacity={alpha > 0.5 ? alpha : "0.5"}
            transparent={true}
          ></meshStandardMaterial>

          {texture && (
            <Decal position={selectedText.position} scale={selectedText.scale}>
              <meshPhysicalMaterial
                transparent
                polygonOffset
                polygonOffsetFactor={-10}
                map={texture}
                map-flipY={false}
                map-anisotropy={16}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                roughness={1}
                clearcoat={0.5}
                metalness={0.75}
                toneMapped={false}
              />
            </Decal>
          )}
        </mesh>
      </group>
    </motion.group>
  );
}

useGLTF.preload("/shirt_baked.glb");

export default Shirt;
