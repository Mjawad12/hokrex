"use client";
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
