"use client";
import { useTexture } from "@react-three/drei";
import React, { createContext, useReducer, useState } from "react";

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

  const Addtext = (text = "React js") => {
    const ctx = document.querySelector("canvas#styleCanvas").getContext("2d");
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "purple";
    ctx.scale(1, 0.9);
    ctx.fillText("React js", 50, 50);
    const url = document.querySelector("canvas#styleCanvas").toDataURL();
    return useTexture(url);
  };

  return (
    <ContextTool.Provider
      value={{
        layerState,
        layerChange,
        testcolor,
        settestcolor,
        alpha,
        setalpha,
      }}
    >
      {children}
    </ContextTool.Provider>
  );
}

export default Mainstatetool;

export { ContextTool };
