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
  const [selectedText, setselectedText] = useState({
    text: "Text",
    color: "red",
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    fontFamily: "Verdana",
    fontStyle: "italic",
    fontSize: 40,
    lineHeight: "1",
    fontWeight: 0,
    uppercase: false,
    underline: false,
    spacing: "0",
    top: 600,
    left: 496,
  });
  const [selectedShape, setselectedShape] = useState({
    fill: "red",
    stroke: "red",
    strokeWidth: "1",
    width: 80,
    height: 80,
    top: 637,
    left: 542,
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    strokeWidth: 1,
    dashed: false,
    dotted: false,
    noneStroke: false,
  });
  const [currentModelColor, setcurrentModelColor] = useState("#fffff");
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
  const [canvasOffset, setcanvasOffset] = useState(false);
  const [selectedObject, setselectedObject] = useState(null);
  const [enableRotate, setenableRotate] = useState(false);

  let canvas = useRef(null);

  const printTexture = () => {
    const url = document.querySelector("#can-text").toDataURL();
    const textu = new THREE.TextureLoader().load(url);
    textu.flipY = false;
    settexture(textu);
  };

  const addTextLayer = () => {
    canvas.current?.add(
      new fabric.Text("Text", {
        fontFamily: selectedText.fontFamily,
        top: 600,
        left: 495,
        fontWeight: 100,
        stroke: "red",
        strokeWidth: 0,
        fontSize: 40,
        scaleX: 1,
        scaleY: 1,
        fill: "red",
        type: "text",
      }),
    );
    setTimeout(() => {
      printTexture();
    }, 100);
  };

  const addShapeLayer = ({ type } = { type: "Circle" }) => {
    canvas.current.add(
      new fabric[type]({
        radius: 40,
        originX: "center",
        originY: "center",
        top: 652,
        left: 527,
        stroke: "red",
        strokeWidth: 1,
        type: "shape",
        fill: "red",
        width: 80,
        height: 80,
      }),
    );
    setTimeout(() => {
      printTexture();
    }, 100);
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
        scale = { scaleX: selectedText.scaleX, scaleY: selectedText.scaleY },
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
          canvas.current.getActiveObject().set("charSpacing", +spacing);
          canvas.current.getActiveObject().set("fill", color);
          canvas.current.getActiveObject().set("underline", underline);
          canvas.current.getActiveObject().set("scaleX", scale.scaleX);
          canvas.current.getActiveObject().set("scaleY", scale.scaleY);
          canvas.current.getActiveObject().set("angle", rotation);
          canvas.current.getActiveObject().set("top", top);
          canvas.current.getActiveObject().set("left", left);
          canvas.current.renderAll();
        }
      },
    [selectedText],
  );

  const updateShape = (
    fill = selectedShape.fill,
    scale = { scaleX: selectedShape.scaleX, scaleY: selectedShape.scaleY },
    top = selectedShape.top,
    left = selectedShape.left,
    rotation = selectedShape.rotation,
    strokeWidth = selectedShape.strokeWidth,
    stroke = selectedShape.stroke,
    dashed = selectedShape.dashed,
    dotted = selectedShape.dotted,
    noneStroke = selectedShape.noneStroke,
  ) => {
    console.log(canvas.current.getActiveObject());
    if (canvas.current.getActiveObject()) {
      !noneStroke
        ? canvas.current.getActiveObject().set("strokeWidth", strokeWidth)
        : canvas.current.getActiveObject().set("strokeWidth", 0);
      canvas.current.getActiveObject().set("noneStroke", noneStroke);
      canvas.current.getActiveObject().set("stroke", stroke);
      canvas.current.getActiveObject().set("fill", fill);
      canvas.current.getActiveObject().set("scaleX", scale.scaleX);
      canvas.current.getActiveObject().set("scaleY", scale.scaleY);
      canvas.current.getActiveObject().set("angle", rotation);
      canvas.current.getActiveObject().set("top", top);
      canvas.current.getActiveObject().set("left", left);

      dashed && canvas.current.getActiveObject().set("strokeDashArray", [9, 3]);
      canvas.current.getActiveObject().set("dashed", dashed);

      dotted && canvas.current.getActiveObject().set("strokeDashArray", [3, 2]);
      canvas.current.getActiveObject().set("dotted", dotted);

      !dotted &&
        !dashed &&
        canvas.current.getActiveObject().set("strokeDashArray", [10, 0]);

      canvas.current.renderAll();
    }
  };

  const initCanvas = () => {
    const rotationIcon = document.createElement("img");
    rotationIcon.src = process.env.NEXT_PUBLIC_URL + "/rotationicon.png";
    const movementIcon = document.createElement("img");
    movementIcon.src = process.env.NEXT_PUBLIC_URL + "/movementicon.png";
    const mtbIcons = document.createElement("img");
    mtbIcons.src = process.env.NEXT_PUBLIC_URL + "/mtb.png";
    const mlrIcons = document.createElement("img");
    mlrIcons.src = process.env.NEXT_PUBLIC_URL + "/mlr.png";

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
    function rendermtb(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(mtbIcons, -size / 2, -size / 2, size + 7, size - 2);
      ctx.restore();
    }
    function rendermlr(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(mlrIcons, -size / 2, -size / 2, size - 2, size + 7);
      ctx.restore();
    }

    const mtr = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetY: -30,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",
      render: renderIcon,
      cornerSize: 30,
      withConnection: false,
    });

    const movement = new fabric.Control({
      x: 0,
      y: 0.9,
      offsetY: 3,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.dragHandler,
      actionName: "rotate",
      render: renderIcon2,
      cornerSize: 28,
      withConnection: false,
    });

    const mt = new fabric.Control({
      x: -0.045,
      y: -0.5,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingY,
      actionName: "mt",
      render: rendermtb,
      cornerSize: 10,
      withConnection: false,
    });
    const mb = new fabric.Control({
      x: -0.045,
      y: 0.52,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingY,
      actionName: "mb",
      render: rendermtb,
      cornerSize: 10,
      withConnection: false,
    });
    const ml = new fabric.Control({
      x: -0.5,
      y: -0.04,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      actionName: "mb",
      render: rendermlr,
      cornerSize: 10,
      withConnection: false,
    });
    const mr = new fabric.Control({
      x: 0.515,
      y: -0.04,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      actionName: "mb",
      render: rendermlr,
      cornerSize: 10,
      withConnection: false,
    });

    fabric.Object.prototype.controls.mtr = mtr;
    fabric.Object.prototype.controls.mt = mt;
    fabric.Object.prototype.controls.mb = mb;
    fabric.Object.prototype.controls.ml = ml;
    fabric.Object.prototype.controls.mr = mr;
    fabric.Object.prototype.controls.movement = movement;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "white";
    fabric.Object.prototype.cornerStrokeColor = "red";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerSize = "10";
    fabric.Object.prototype.borderColor = "red";
    fabric.Object.prototype.padding = "6";
    fabric.Object.prototype.rotatingPointOffset = 1;

    const canva = new fabric.Canvas("can-text", {
      backgroundColor: "white",
      width: 900,
      height: 900,
    });

    canva.on("object:modified", (e) => {
      switch (e.target.type) {
        case "text":
          setselectedText({
            text: e.target.text,
            color: e.target.fill,
            scaleX: e.target.scaleX,
            scaleY: e.target.scaleY,
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
          break;
        case "shape":
          setselectedShape({
            ...selectedShape,
            fill: e.target.fill,
            scaleX: e.target.scaleX,
            scaleY: e.target.scaleY,
            top: e.target.top,
            left: e.target.left,
            rotation: e.target.angle,
            strokeWidth: e.target.strokeWidth,
            height: e.target.height,
            width: e.target.width,
            stroke: e.target.stroke,
            dashed: e.target.dashed,
            dotted: e.target.dotted,
            noneStroke: e.target.noneStroke,
          });
          break;
      }
    });

    canva.on("selection:created", (e) => {
      setselectedObject(e.selected[0]);
      setTimeout(() => {
        printTexture();
      }, 200);
    });
    canva.on("selection:cleared", () => {
      setselectedObject(false);
      setTimeout(() => {
        printTexture();
      }, 200);
    });

    canva.on("mouse:down", (e) => {
      // var circle = new fabric.Circle({
      //   radius: 1,
      //   originX: "center",
      //   originY: "center",
      //   left: evt.pointer.x,
      //   top: evt.pointer.y,
      //   fill: "black",
      // });
      // canvas.current.add(circle);
    });

    return canva;
  };

  const changeColor = (clr) => {
    canvas.current.backgroundColor = clr;
    canvas.current.renderAll();

    setTimeout(() => {
      printTexture();
    }, 100);
  };

  useEffect(() => {
    canvas.current = initCanvas();
  }, []);

  useEffect(() => {
    canvas.current._offset;
    setcanvasOffset(canvas.current._offset);
  }, [canvas.current]);

  useEffect(() => {
    changeColor(currentModelColor);
  }, [currentModelColor]);

  // useEffect(() => {
  //   console.log(selectedObject);
  // }, [selectedObject]);

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
        shapeTexture,
        selectedShape,
        setselectedShape,
        canvas: canvas.current,
        addTextLayer,
        canvasOffset,
        addShapeLayer,
        updateShape,
        selectedObject,
        texture,
        printTexture,
        changeColor,
        enableRotate,
      }}
    >
      {children}
    </ContextTool.Provider>
  );
}

export default Mainstatetool;

export { ContextTool };
