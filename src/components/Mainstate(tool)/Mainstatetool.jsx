"use client";
import { useTexture } from "@react-three/drei";
import React, {
  createContext,
  memo,
  useMemo,
  useReducer,
  useState,
} from "react";
import * as THREE from "three";

const ContextTool = createContext();

function reducer() {}
function Mainstatetool({ children }) {
  const [testcolor, settestcolor] = useState("black");
  const [alpha, setalpha] = useState("1");
  const [layerState, layerChange] = useReducer(reducer, [
    { name: "Front", items: [] },
    { name: "Back", items: [] },
    { name: "Left", items: [] },
    { name: "Right", items: [] },
    { name: "Coular", items: [] },
  ]);
  const [texture, settexture] = useState(null);

  const addText = useMemo(
    () =>
      (text = "React js") => {
        const canvas = document.querySelector("canvas#styleCanvas");
        const ctx = canvas.getContext("2d");
        ctx.reset();
        ctx.font = "bold 50px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.scale(1, 0.9);
        ctx.fillText(text.toString(), canvas.width / 2, canvas.height / 2);
        console.log(canvas.width);
        const url = document.querySelector("canvas#styleCanvas").toDataURL();
        const textu = new THREE.TextureLoader().load(url);
        textu.center = new THREE.Vector2(0.5, 0.5);
        textu.rotation = Math.PI;
        textu.flipY = false;
        settexture(textu);
      },
    [],
  );

  return (
    <ContextTool.Provider
      value={{
        layerState,
        layerChange,
        testcolor,
        settestcolor,
        alpha,
        setalpha,
        addText,
        texture,
        settexture,
      }}
    >
      {children}
    </ContextTool.Provider>
  );
}

export default Mainstatetool;

export { ContextTool };
