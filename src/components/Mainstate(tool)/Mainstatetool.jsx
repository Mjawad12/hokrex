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

function reducer(state, action) {}
function Mainstatetool({ children }) {
  const textLayer = {
    text: "React js",
    color: "red",
    position: [0, 0, 0.1],
    scale: 0.25,
    rotation: 0,
    fontFamily: "Verdana",
    fontStyle: "italic",
    fontSize: "50px",
    lineHeight: "1",
    fontWeight: "400",
    uppercase: false,
    underline: false,
  };
  const [selectedText, setselectedText] = useState(textLayer);
  const [testcolor, settestcolor] = useState("black");
  const [alpha, setalpha] = useState("1");
  const [layerState, layerChange] = useReducer(reducer, [
    { name: "Front", layers: [{ type: "text", data: selectedText }] },
    { name: "Back", layers: [] },
    { name: "Left", layers: [] },
    { name: "Right", layers: [] },
    { name: "Coular", layers: [] },
  ]);
  const [selectedLayer, setselectedLayer] = useState(false);

  const [texture, settexture] = useState(null);
  const addText = useMemo(
    () =>
      (
        text = selectedText.text,
        rotation = selectedText.rotation,
        fontFamily = selectedText.fontFamily,
        fontWeight = selectedText.fontWeight,
      ) => {
        const canvas = document.querySelector("canvas#styleCanvas");
        const ctx = canvas.getContext("2d");
        ctx.reset();
        ctx.font = `${selectedText.fontStyle} ${"400"} ${selectedText.fontSize} ${fontFamily}`;
        ctx.fillStyle = selectedText.color;
        ctx.strokeStyle = selectedText.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.miterLimit = 2;
        ctx.lineWidth = fontWeight;
        ctx.scale(1, 0.9);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.fillText(text.toString(), 0, 0);
        ctx.strokeText(text.toString(), 0, 0);
        const url = document.querySelector("canvas#styleCanvas").toDataURL();
        const textu = new THREE.TextureLoader().load(url);
        textu.center = new THREE.Vector2(0.5, 0.5);
        textu.rotation = Math.PI;
        textu.flipY = false;
        settexture(textu);
      },
    [selectedText],
  );

  useEffect(() => {
    console.log(selectedText);
  }, [selectedText]);

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
