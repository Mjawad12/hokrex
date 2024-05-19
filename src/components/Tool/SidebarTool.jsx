import { ArrowTool, arrowDown } from "@/Consonats";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import Prod from "./SidebarFeatures/Prod";
import Layers from "./SidebarFeatures/Layers";
import Color from "./SidebarFeatures/Color";
import Text from "./SidebarFeatures/Text";
import { ContextTool } from "../Mainstate(tool)/Mainstatetool";
import Shapes from "./SidebarFeatures/Shapes";
import Graphics from "./SidebarFeatures/Graphics";

function SidebarTool({ sethidden, selected }) {
  const { addText, addShapeLayer, addTextLayer, addSvgLayer } =
    useContext(ContextTool);
  const SelectedProd = {
    Product: <Prod />,
    Layers: <Layers />,
    Color: <Color />,
    Text: <Text addText={addText} addTextLayer={addTextLayer} />,
    Shapes: <Shapes addShapeLayer={addShapeLayer} />,
    Graphics: <Graphics addSvgLayer={addSvgLayer} />,
  };
  return (
    <motion.div
      initial={{ x: "-120%", opacity: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-120%", opacity: 0.2 }}
      transition={{ duration: 1.1, ease: [0, 0, 0, 1] }}
      className={`relative flex h-[calc(100vh-50px)] w-full max-w-[300px]  flex-col bg-darkMid ${selected !== "Graphics" ? "p-3 px-3.5" : "p-0"}`}
    >
      <SideBtn sethidden={sethidden} />
      {SelectedProd[selected]}
    </motion.div>
  );
}

export default SidebarTool;

const SideBtn = ({ sethidden }) => {
  return (
    <div
      onClick={() => sethidden(false)}
      className="flex-center absolute right-0 top-[50%]  translate-x-[50%] translate-y-[-50%] cursor-pointer"
    >
      {ArrowTool}
    </div>
  );
};
