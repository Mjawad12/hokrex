import { cross } from "@/Consonats";
import React, { useContext } from "react";
import { ContextTool } from "../Mainstate(tool)/Mainstatetool";
import TextEdit from "./RightBarEditing/TextEdit";
import ShapeEdit from "./RightBarEditing/ShapeEdit";
import GraphicsEdit from "./RightBarEditing/GraphicsEdit";
import ImagesEdit from "./RightBarEditing/ImagesEdit";

function RightBarEditing({
  selected,
  smColor,
  setsmColor,
  borderColor,
  setborderColor,
}) {
  const {
    UpdateText,
    updateShape,
    updateGraphics,
    updateImage,
    selectedText,
    setselectedText,
    selectedShape,
    setselectedShape,
    selectedGraphic,
    setselectedGraphic,
    setselectedImage,
    selectedImage,
    canvas,
    dele,
  } = useContext(ContextTool);
  const editers = {
    Text: [
      "Text Edit",
      <TextEdit
        UpdateText={UpdateText}
        selectedText={selectedText}
        setselectedText={setselectedText}
        smColor={smColor}
        setsmColor={setsmColor}
      />,
    ],
    Shapes: [
      "Shape Edit",
      <ShapeEdit
        updateShape={updateShape}
        selectedShape={selectedShape}
        setselectedShape={setselectedShape}
        smColor={smColor}
        setsmColor={setsmColor}
        setborderColor={setborderColor}
        borderColor={borderColor}
      />,
    ],
    Graphics: [
      "Graphics Edit",
      <GraphicsEdit
        updateGraphics={updateGraphics}
        selectedGraphic={selectedGraphic}
        setselectedGraphic={setselectedGraphic}
      />,
    ],
    Images: [
      "Images Edit",
      <ImagesEdit
        updateImage={updateImage}
        selectedImage={selectedImage}
        setselectedImage={setselectedImage}
        canvas={canvas}
        dele={dele}
      />,
    ],
  };
  return (
    <div
      id="smSCroll"
      className="absolute right-0 top-[3.05rem] z-50 flex h-[calc(100vh-50px)] w-full max-w-[320px] flex-col overflow-x-visible overflow-y-scroll bg-darkMid p-3 px-3.5"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] text-[500] text-textLight">
          {editers[selected] && editers[selected][0]}
        </h3>
        <span className="cursor-pointer [&_path]:stroke-white [&_rect]:stroke-none [&_svg]:h-[38px] [&_svg]:w-[38px] ">
          {cross}
        </span>
      </div>
      {editers[selected] && editers[selected][1]}
    </div>
  );
}

export default RightBarEditing;
