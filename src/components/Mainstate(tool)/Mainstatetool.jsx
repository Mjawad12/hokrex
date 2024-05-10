"use client";
import { useTexture } from "@react-three/drei";
import React, {
  createContext,
  memo,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import * as THREE from "three";

const ContextTool = createContext();

function reducer(state, action) {
  switch (action.method) {
    case "changeColor":
      state[action.layer].color = action.color;
  }
}
function Mainstatetool({ children }) {
  const textLayer = {
    text: "React js",
    color: "red",
    position: [0, 0, 0.1],
    scale: 0.25,
    rotation: 0,
    fontFamily: "Verdana",
    fontStyle: "italic",
    fontSize: "40",
    lineHeight: "1",
    fontWeight: "0",
    uppercase: false,
    underline: false,
    spacing: "0",
  };

  const [selectedText, setselectedText] = useState(textLayer);
  const [currentModelColor, setcurrentModelColor] = useState("black");
  const [alpha, setalpha] = useState("1");
  const [layerState, layerChange] = useReducer(reducer, {
    Front: {
      name: "Front",
      layers: [{ type: "text", data: selectedText }],
      color: "#fffff",
    },
    Back: { name: "Back", layers: [], color: "#fffff" },
    Left: { name: "Left", layers: [], color: "#fffff" },
    Right: { name: "Right", layers: [], color: "#fffff" },
    Coular: { name: "Coular", layers: [], color: "#fffff" },
  });

  const [texture, settexture] = useState(null);
  const addText = useMemo(
    () =>
      (
        text = selectedText.text,
        fontFamily = selectedText.fontFamily,
        fontWeight = selectedText.fontWeight,
        fontSize = selectedText.fontSize,
        spacing = selectedText.spacing,
        underline = selectedText.underline,
        color = selectedText.color,
      ) => {
        const canvas = document.querySelector("canvas#styleCanvas");
        canvas.style.letterSpacing = spacing + "px";
        const ctx = canvas.getContext("2d");
        ctx.reset();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.font = `${selectedText.fontStyle} ${"100"} ${fontSize}px ${fontFamily}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.miterLimit = 2;
        ctx.lineWidth = fontWeight;
        ctx.scale(1, 0.9);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.fillText(text, 0, 0);
        ctx.strokeText(text, 0, 0);
        underline && underlineFunc(ctx, text, fontWeight, color);
        const url = canvas.toDataURL();
        const textu = new THREE.TextureLoader().load(url);
        textu.center = new THREE.Vector2(0.5, 0.5);
        textu.rotation = Math.PI;
        textu.flipY = false;
        settexture(textu);
      },
    [selectedText],
  );

  const underlineFunc = (ctx, text, fontWeight, color) => {
    const sizes = ctx.measureText(text);
    const width = sizes.width;
    const height = sizes.actualBoundingBoxDescent + 5;
    const posX = -width / 2;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = parseInt(fontWeight);
    ctx.moveTo(posX, height);
    ctx.lineTo(posX + width, height);
    ctx.stroke();
  };

  // useEffect(() => {
  //   console.log(selectedText);
  // }, [selectedText]);

  return (
    <ContextTool.Provider
      value={{
        layerState,
        layerChange,
        currentModelColor,
        setcurrentModelColor,
        alpha,
        setalpha,
        addText,
        texture,
        settexture,
        setselectedText,
        selectedText,
      }}
    >
      {children}
    </ContextTool.Provider>
  );
}

export default Mainstatetool;

export { ContextTool };
