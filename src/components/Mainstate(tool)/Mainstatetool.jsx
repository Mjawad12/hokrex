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
  const [selected, setselected] = useState("Shapes");
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
    top: 652,
    left: 527,
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    strokeWidth: 1,
    dashed: false,
    dotted: false,
    noneStroke: false,
  });
  const [selectedGraphic, setselectedGraphic] = useState({
    width: 80,
    height: 80,
    left: 495,
    top: 600,
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    type: "graphics",
  });
  const [selectedImage, setselectedImage] = useState({
    left: 495,
    top: 600,
    scaleX: 0.346452328159645,
    scaleY: 0.346452328159645,
    rotation: 0,
    type: "image",
  });
  const [currentModelColor, setcurrentModelColor] = useState("#fffff");
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
  const [canvasOffset, setcanvasOffset] = useState(false);
  const [selectedObject, setselectedObject] = useState(null);

  let canvas = useRef(null);

  const printTexture = () => {
    const url = document.querySelector("#can-text").toDataURL();
    const textu = new THREE.TextureLoader().load(url);
    textu.flipY = false;
    settexture(textu);
  };

  const addTextLayer = () => {
    canvas.current?.add(
      new fabric.Textbox("Text", {
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
        textAlign: "left",
        breakWords: true,
        width: 90,
        editable: false,
        cursorWidth: 0,
        splitByGrapheme: true,
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

  const addSvgLayer = (svg) => {
    const svgSerializer = new XMLSerializer();
    const svgText = svgSerializer.serializeToString(svg);
    fabric.loadSVGFromString(svgText, (objects, options) => {
      var object = fabric.util.groupSVGElements(objects, options);
      object
        .set({ left: 495, top: 600, type: "graphics", width: 80, height: 80 })
        .setCoords();
      canvas.current.add(object);
    });
    setTimeout(() => {
      printTexture();
    }, 100);
  };

  const addImageLayer = (image) => {
    new fabric.Image.fromURL(image, (img) => {
      img.set({
        left: 495,
        top: 600,
      });
      img.scaleToWidth(150);
      img.scaleToHeight(150);
      canvas.current.add(img);
      canvas.current.renderAll();
    });

    setTimeout(() => {
      printTexture();
    }, 200);
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

  const updateGraphics = (
    top = selectedGraphic.top,
    left = selectedGraphic.left,
    scale = { scaleX: selectedGraphic.scaleX, scaleY: selectedGraphic.scaleY },
    rotation = selectedGraphic.rotation,
  ) => {
    if (canvas.current.getActiveObject()) {
      canvas.current.getActiveObject().set("top", top);
      canvas.current.getActiveObject().set("left", left);
      canvas.current.getActiveObject().set("scaleX", scale.scaleX);
      canvas.current.getActiveObject().set("scaleY", scale.scaleY);
      canvas.current.getActiveObject().set("angle", rotation);
      canvas.current.renderAll();
      console.log(canvas.current.getActiveObject());
    }
  };

  const updateImage = (
    top = selectedImage.top,
    left = selectedImage.left,
    scale = { scaleX: selectedImage.scaleX, scaleY: selectedImage.scaleY },
    rotation = selectedImage.rotation,
  ) => {
    if (canvas.current.getActiveObject()) {
      canvas.current.getActiveObject().set("top", top);
      canvas.current.getActiveObject().set("left", left);
      canvas.current.getActiveObject().set("scaleX", scale.scaleX);
      canvas.current.getActiveObject().set("scaleY", scale.scaleY);
      canvas.current.getActiveObject().set("angle", rotation);
      canvas.current.renderAll();
      console.log(canvas.current.getActiveObject());
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
    const cornerIcons = document.createElement("img");
    cornerIcons.src = process.env.NEXT_PUBLIC_URL + "/cornerBtn.png";
    objectModifications(
      rotationIcon,
      movementIcon,
      mtbIcons,
      mlrIcons,
      cornerIcons,
    );
    fabric.util.object.extend(fabric.Textbox.prototype, {
      _wrapLine: _wrapLine,
    });

    const canva = new fabric.Canvas("can-text", {
      backgroundColor: "white",
      width: 900,
      height: 900,
    });

    canva.on("object:modified", (e) => {
      console.log(e.target);
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
        case "graphics":
          setselectedGraphic({
            width: e.target.width,
            height: e.target.height,
            left: e.target.left,
            top: e.target.top,
            scaleX: e.target.scaleX,
            scaleY: e.target.scaleY,
            rotation: e.target.angle,
          });
          break;
        case "image":
          setselectedImage({
            left: e.target.left,
            top: e.target.top,
            scaleX: e.target.scaleX,
            scaleY: e.target.scaleY,
            rotation: e.target.angle,
            src: e.target._element.src,
          });
          break;
      }
    });

    canva.on("selection:created", (e) => {
      setselectedObject(e.selected[0]);
      switch (e.selected[0].type) {
        case "text": {
          setselected("Text");
          break;
        }
        case "shape": {
          setselected("Shapes");
          break;
        }
        case "graphics": {
          setselected("Graphics");
          break;
        }
        case "image": {
          setselectedImage({
            ...selectedImage,
            src: e.selected[0]._element.src,
          });
          setselected("Images");
          break;
        }
      }
      setTimeout(() => {
        printTexture();
      }, 200);
    });
    canva.on("selection:cleared", () => {
      setselectedObject(false);
      setselectedImage({
        ...selectedImage,
        src: null,
      });
      setTimeout(() => {
        printTexture();
      }, 200);
    });
    canva.on("selection:updated", (e) => {
      setselectedObject(e.selected[0]);
      switch (e.selected[0].type) {
        case "text": {
          setselected("Text");
          break;
        }
        case "shape": {
          setselected("Shapes");
          break;
        }
        case "graphics": {
          setselected("Graphics");
          break;
        }
        case "image": {
          setselectedImage({
            ...selectedImage,
            src: e.selected[0]._element.src,
          });
          setselected("Images");
          break;
        }
      }
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

    // canva.on("object:scaling", function (e) {
    //   console.log(e.target);
    //   var target = e.target;
    //   var sX = target.scaleX;
    //   var sY = target.scaleY;
    //   target.width *= sX;
    //   target.height *= sY;
    //   target.scaleX = 1;
    //   target.scaleY = 1;
    // });

    return canva;
  };

  const changeColor = (clr) => {
    canvas.current.backgroundColor = clr;
    canvas.current.renderAll();

    setTimeout(() => {
      printTexture();
    }, 100);
  };

  //  Key press fucntion for del
  const dele = (e) => {
    if (canvas.current.getActiveObject() && e.key === "Delete") {
      canvas.current.remove(canvas.current.getActiveObject());
      canvas.current.renderAll();
    }
  };

  //   initializing canvas in ref
  useEffect(() => {
    canvas.current = initCanvas();
  }, []);
  //  setting state for offset of canvas
  useEffect(() => {
    canvas.current._offset;
    setcanvasOffset(canvas.current._offset);
  }, [canvas.current]);
  // Chnaging color of model
  useEffect(() => {
    changeColor(currentModelColor);
  }, [currentModelColor]);
  // fucntion to wrap lines
  var _wrapLine = function (_line, lineIndex, desiredWidth, reservedSpace) {
    var lineWidth = 0,
      splitByGrapheme = this.splitByGrapheme,
      graphemeLines = [],
      line = [],
      // spaces in different languges?
      words = splitByGrapheme
        ? fabric.util.string.graphemeSplit(_line)
        : _line.split(this._wordJoiners),
      word = "",
      offset = 0,
      infix = splitByGrapheme ? "" : " ",
      wordWidth = 0,
      infixWidth = 0,
      largestWordWidth = 0,
      lineJustStarted = true,
      additionalSpace = splitByGrapheme ? 0 : this._getWidthOfCharSpacing();

    reservedSpace = reservedSpace || 0;
    desiredWidth -= reservedSpace;
    for (var i = 0; i < words.length; i++) {
      // i would avoid resplitting the graphemes
      word = fabric.util.string.graphemeSplit(words[i]);
      wordWidth = this._measureWord(word, lineIndex, offset);
      offset += word.length;

      // Break the line if a word is wider than the set width
      if (this.breakWords && wordWidth >= desiredWidth) {
        if (!lineJustStarted) {
          line.push(infix);
          lineJustStarted = true;
        }

        // Loop through each character in word
        for (var w = 0; w < word.length; w++) {
          var letter = word[w];
          var letterWidth =
            (this.getMeasuringContext().measureText(letter).width *
              this.fontSize) /
            this.CACHE_FONT_SIZE;
          if (lineWidth + letterWidth > desiredWidth) {
            graphemeLines.push(line);
            line = [];
            lineWidth = 0;
          } else {
            line.push(letter);
            lineWidth += letterWidth;
          }
        }
        word = [];
      } else {
        lineWidth += infixWidth + wordWidth - additionalSpace;
      }

      if (lineWidth >= desiredWidth && !lineJustStarted) {
        graphemeLines.push(line);
        line = [];
        lineWidth = wordWidth;
        lineJustStarted = true;
      } else {
        lineWidth += additionalSpace;
      }

      if (!lineJustStarted) {
        line.push(infix);
      }
      line = line.concat(word);

      infixWidth = this._measureWord([infix], lineIndex, offset);
      offset++;
      lineJustStarted = false;
      // keep track of largest word
      if (wordWidth > largestWordWidth && !this.breakWords) {
        largestWordWidth = wordWidth;
      }
    }

    i && graphemeLines.push(line);

    if (largestWordWidth + reservedSpace > this.dynamicMinWidth) {
      this.dynamicMinWidth = largestWordWidth - additionalSpace + reservedSpace;
    }

    return graphemeLines;
  };
  // Text box modification
  const objectModifications = (
    rotationIcon,
    movementIcon,
    mtbIcons,
    mlrIcons,
    cornerbtn,
  ) => {
    //  Render icons
    function renderRotationIcon(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(rotationIcon, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
    function renderMovementIcon(ctx, left, top, styleOverride, fabricObject) {
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
      ctx.drawImage(mtbIcons, -size / 2, -size / 2, size + 8, size - 3);
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
    function cornerBtn(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(cornerbtn, -size / 2, -size / 2, size, size);
      ctx.restore();
    }

    //  Setting of icons
    // const bt = new fabric.Control({
    //   x: 0.5,
    //   y: -0.5,
    //   offsetY: -30,
    //   cursorStyle: "crosshair",
    //   actionHandler: fabric.controlsUtils.scallingEqially,
    //   actionName: "rotate",
    //   render: renderRotationIcon,
    //   cornerSize: 30,
    //   withConnection: false,
    // });
    const mtr = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetY: -30,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",
      render: renderRotationIcon,
      cornerSize: 30,
      withConnection: false,
      sizeX: 30,
      sizeY: 30,
    });

    const movement = new fabric.Control({
      x: 0,
      y: 0.9,
      offsetY: 3.5,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.dragHandler,
      actionName: "movement",
      render: renderMovementIcon,
      cornerSize: 28,
      withConnection: false,
      sizeX: 28,
      sizeY: 28,
    });

    const mt = new fabric.Control({
      x: -0.02,
      y: -0.49,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingY,
      actionName: "mt",
      render: rendermtb,
      cornerSize: 10,
      withConnection: false,
      sizeX: 25,
      sizeY: 20,
    });
    const mb = new fabric.Control({
      x: -0.02,
      y: 0.52,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingY,
      actionName: "mb",
      render: rendermtb,
      cornerSize: 10,
      withConnection: false,
      sizeX: 25,
      sizeY: 20,
    });
    const ml = new fabric.Control({
      x: -0.5,
      y: -0.04,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      actionName: "ml",
      render: rendermlr,
      cornerSize: 10,
      withConnection: false,
      sizeX: 20,
      sizeY: 20,
    });
    const mr = new fabric.Control({
      x: 0.515,
      y: -0.04,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      actionName: "mr",
      render: rendermlr,
      cornerSize: 10,
      withConnection: false,
      sizeX: 20,
      sizeY: 20,
    });

    const mlTextbox = new fabric.Control({
      x: -0.5,
      y: -0.04,
      offsetY: 0,
      cursorStyle: "resizing",
      actionHandler: fabric.controlsUtils.changeWidth,
      actionName: "ml",
      render: rendermlr,
      cornerSize: 10,
      withConnection: false,
      sizeX: 20,
      sizeY: 20,
    });

    const mrTextbox = new fabric.Control({
      x: 0.515,
      y: -0.04,
      offsetY: 0,
      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.changeWidth,
      actionName: "mr",
      render: rendermlr,
      cornerSize: 10,
      withConnection: false,
      sizeX: 20,
      sizeY: 20,
    });

    console.log(fabric.Object.prototype.controls);
    console.log(fabric.controlsUtils);
    //  Attach icons
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
    fabric.Object.prototype.sizeX = "12";
    fabric.Object.prototype.sizeY = "12";
    fabric.Object.prototype.borderColor = "red";
    fabric.Object.prototype.padding = "6";
    fabric.Object.prototype.rotatingPointOffset = 1;

    fabric.Textbox.prototype.controls.mtr = mtr;
    fabric.Textbox.prototype.controls.mt = mt;
    fabric.Textbox.prototype.controls.mb = mb;
    fabric.Textbox.prototype.controls.ml = mlTextbox;
    fabric.Textbox.prototype.controls.mr = mrTextbox;
    fabric.Textbox.prototype.controls.movement = movement;
    fabric.Textbox.prototype.transparentCorners = false;
    fabric.Textbox.prototype.cornerColor = "white";
    fabric.Textbox.prototype.cornerStrokeColor = "red";
    fabric.Textbox.prototype.cornerStyle = "circle";
    fabric.Textbox.prototype.cornerSize = "10";
    fabric.Textbox.prototype.borderColor = "red";
    fabric.Textbox.prototype.padding = "6";
    fabric.Textbox.prototype.rotatingPointOffset = 1;
  };

  useEffect(() => {
    window.addEventListener("keydown", dele);

    return () => window.removeEventListener("keydown", dele);
  }, []);

  return (
    <ContextTool.Provider
      value={{
        layerState,
        layerChange,
        currentModelColor,
        setcurrentModelColor,
        UpdateText,
        texture,
        settexture,
        setselectedText,
        selectedText,
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
        addSvgLayer,
        selectedGraphic,
        setselectedGraphic,
        updateGraphics,
        addImageLayer,
        updateImage,
        selectedImage,
        setselectedImage,
        dele,
        selected,
        setselected,
      }}
    >
      {children}
    </ContextTool.Provider>
  );
}

export default Mainstatetool;

export { ContextTool };
