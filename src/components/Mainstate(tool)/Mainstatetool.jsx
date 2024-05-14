"use client";
import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { fabric } from "fabric";
const ContextTool = createContext();

function reducer(state, action) {
  switch (action.method) {
    case "changeColor":
      state[action.layer].color = action.color;
  }
}

function Mainstatetool({ children }) {
  const shapeLayer = {
    type: "square",
    color: "red",
    border: false,
    borderColor: "white",
    width: 100,
    height: 100,
  };

  const [selectedText, setselectedText] = useState({
    text: "React js",
    color: "black",
    scale: 0.78,
    rotation: 0,
    fontFamily: "Verdana",
    fontStyle: "italic",
    fontSize: 30,
    lineHeight: "1",
    fontWeight: 0,
    uppercase: false,
    underline: false,
    spacing: "0",
    top: 100,
    left: 85,
  });
  const [selectedShape, setselectedShape] = useState(shapeLayer);
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
  const [shapeTexture, setshapeTexture] = useState(null);
  let canvas = useRef(null);

  const [canvasOffset, setcanvasOffset] = useState(false);

  const addTextLayer = () => {
    canvas.current?.add(
      new fabric.Text("React js", {
        fontFamily: selectedText.fontFamily,
        top: 100,
        left: 85,
        fontWeight: 100,
        stroke: "black",
        strokeWidth: 0,
        fontSize: 30,
        scaleX: 0.78,
        scaleY: 0.78,
      }),
    );
  };

  const UpdateText = useMemo(
    () =>
      (
        text = selectedText.text,
        fontFamily = selectedText.fontFamily,
        fontWeight = selectedText.fontWeight,
        fontSize = selectedText.fontSize,
        spacing = selectedText.spacing,
        underline = selectedText.underline,
        color = selectedText.color,
        scale = selectedText.scale,
        rotation = selectedText.rotation,
        top = selectedText.top,
        left = selectedText.left,
      ) => {
        console.log(canvas.current.getActiveObject());
        if (canvas.current.getActiveObject()) {
          canvas.current.getActiveObject().set("text", text);
          canvas.current.getActiveObject().set("fontFamily", fontFamily);
          canvas.current.getActiveObject().set("strokeWidth", fontWeight);
          canvas.current.getActiveObject().set("stroke", color);
          canvas.current.getActiveObject().set("fontSize", fontSize);
          canvas.current.getActiveObject().set("charSpacing", +spacing * 10);
          canvas.current.getActiveObject().set("fill", color);
          canvas.current.getActiveObject().set("underline", underline);
          canvas.current.getActiveObject().set("scaleX", scale);
          canvas.current.getActiveObject().set("scaleY", scale);
          canvas.current.getActiveObject().set("angle", rotation);
          canvas.current.getActiveObject().set("top", top);
          canvas.current.getActiveObject().set("left", left);
          canvas.current.renderAll();
        }
      },
    [selectedText],
  );

  const addShape = (
    type = selectedShape.type,
    width = selectedShape.width,
    height = selectedShape.height,
    color = selectedShape.color,
  ) => {
    const canvas = document.querySelector("canvas#shapeCanvas");
    const ctx = canvas.getContext("2d");

    ctx.reset();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = color;
    switch (type) {
      case "Square":
        square(ctx, width, height);
      case "Circle":
        circle(ctx, color);
      case "Triganle":
        triangle(ctx, color);
    }
    const url = canvas.toDataURL();
    const textu = new THREE.TextureLoader().load(url);
    textu.center = new THREE.Vector2(0.5, 0.5);
    textu.rotation = Math.PI;
    textu.flipY = false;
    setshapeTexture(textu);
  };

  const square = (ctx, width, height) => {
    ctx.fillRect(-width / 2, -height / 2, width, height);
  };
  const circle = (ctx, color) => {
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const initCanvas = () => {
    const rotationIcon = document.createElement("img");
    rotationIcon.src = process.env.NEXT_PUBLIC_URL + "/rotaticon.svg";
    const movementIcon = document.createElement("img");
    movementIcon.src = process.env.NEXT_PUBLIC_URL + "/movementicon.svg";
    function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(rotationIcon, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
    function renderIcon2(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(movementIcon, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
    const mtr = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetY: -20,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",
      render: renderIcon,
      cornerSize: 17,
      withConnection: false,
    });
    const movement = new fabric.Control({
      x: 0,
      y: 1,
      offsetY: 5,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.dragHandler,
      actionName: "rotate",
      render: renderIcon2,
      cornerSize: 17,
      withConnection: false,
    });

    fabric.Object.prototype.controls.mtr = mtr;
    fabric.Object.prototype.controls.movement = movement;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "white";
    fabric.Object.prototype.cornerStrokeColor = "black";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerSize = "8";
    fabric.Object.prototype.borderColor = "black";
    fabric.Object.prototype.padding = "5";
    fabric.Object.prototype.rotatingPointOffset = 1;

    const canva = new fabric.Canvas("can-text", {
      backgroundColor: "red",
      width: 500,
      height: 500,
    });

    // canva.on("object:moving", (e) => {
    //   setselectedText({
    //     ...selectedText,
    //     scale: e.target.scaleX,
    //     top: e.target.top,
    //     left: e.target.left,
    //     rotation: e.target.angle,
    //   });
    // });

    // canva.on("object:scaling", (e) => {
    //   console.log(e.target.scaleX);
    //   setselectedText({
    //     ...selectedText,
    //     scale: e.target.scaleX,
    //     top: e.target.top,
    //     left: e.target.left,
    //     rotation: e.target.angle,
    //   });
    // });

    // canva.on("object:rotating", (e) => {
    //   setselectedText({
    //     ...selectedText,
    //     rotation: e.target.angle,
    //     scale: e.target.scaleX,
    //     top: e.target.top,
    //     left: e.target.left,
    //   });
    // });
    // canva.on("object:selected", (e) => {
    //   setselectedText({
    //     text: e.target.text,
    //     color: e.target.color,
    //     scale: e.target.scaleX,
    //     rotation: e.target.angle,
    //     fontFamily: e.target.fontFamily,
    //     fontStyle: e.target.fontStyle,
    //     fontSize: e.target.fontSize,
    //     lineHeight: e.target.lineHeight,
    //     fontWeight: e.target.strokeWidth,
    //     uppercase: e.target.uppercase,
    //     underline: e.target.underline,
    //     spacing: e.target.spacing,
    //     top: e.target.top,
    //     left: e.target.left,
    //   });
    // });
    canva.on("object:modified", (e) => {
      console.log(e.target);
      setselectedText({
        text: e.target.text,
        color: e.target.fill,
        scale: e.target.scaleX,
        rotation: e.target.angle,
        fontFamily: e.target.fontFamily,
        fontStyle: e.target.fontStyle,
        fontSize: e.target.fontSize,
        lineHeight: e.target.lineHeight,
        fontWeight: e.target.strokeWidth,
        uppercase: e.target.uppercase,
        underline: e.target.underline,
        spacing: e.target.charSpacing,
        top: e.target.top,
        left: e.target.left,
      });
    });

    // canva.on("mouse:down", (evt) => {
    //   // var circle = new fabric.Circle({
    //   //   radius: 2,
    //   //   originX: "center",
    //   //   originY: "center",
    //   //   left: evt.pointer.x,
    //   //   top: evt.pointer.y,
    //   //   fill: "yellow",
    //   // });
    //   // canvas.current.add(circle);
    // });

    return canva;
  };

  useEffect(() => {
    canvas.current = initCanvas();
  }, []);

  useEffect(() => {
    canvas.current._offset;
    setcanvasOffset(canvas.current._offset);
  }, [canvas.current]);

  useEffect(() => {
    console.log(selectedText);
  }, [selectedText]);

  return (
    <ContextTool.Provider
      value={{
        layerState,
        layerChange,
        currentModelColor,
        setcurrentModelColor,
        alpha,
        setalpha,
        UpdateText,
        texture,
        settexture,
        setselectedText,
        selectedText,
        addShape,
        shapeTexture,
        selectedShape,
        setselectedShape,
        canvas: canvas.current,
        addTextLayer,
        canvasOffset,
      }}
    >
      {children}
    </ContextTool.Provider>
  );
}

export default Mainstatetool;

export { ContextTool };
