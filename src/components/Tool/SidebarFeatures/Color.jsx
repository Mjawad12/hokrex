import { dropper } from "@/Consonats";
import DropDown from "@/components/DropDown";
import { ContextTool } from "@/components/Mainstate(tool)/Mainstatetool";
import React, { useContext, useState } from "react";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";

function Color() {
  const { setcurrentModelColor, currentModelColor } = useContext(ContextTool);
  const [selectedOption, setselectedOption] = useState("ALL LAYERS");
  const [colorSelect, setcolorSelect] = useState("Solid");
  const [currentColor, setcurrentColor] = useState(currentModelColor);
  const [colorMode, setcolorMode] = useState("hex");

  const documentColors = [
    "#C73838",
    "#FFB800",
    "#9747FF",
    "#fc8a04",
    "#E90062",
    "#10CB00",
    "#00CDE9",
    "#0009E9",
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[18px] text-[500] text-textLight ">Color</h1>
      <DropDown
        data={[
          "ALL LAYERS",
          "Front",
          "Back",
          "Right",
          "Left",
          "Inside Label",
          "Outside Label",
          "Coular",
        ]}
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <button
            onClick={() => setcolorSelect("Solid")}
            className={`w-full text-[16px]  font-[500] text-white hover:bg-[#505D6C] ${colorSelect === "Solid" ? "bg-[#505D6C]" : "bg-transparent"} rounded-md py-1.5 `}
          >
            Solid
          </button>
          <button
            onClick={() => setcolorSelect("Gradient")}
            className={`w-full text-[16px] font-[500] text-white hover:bg-[#505D6C] ${colorSelect === "Gradient" ? "bg-[#505D6C]" : "bg-transparent"} rounded-md py-1.5 `}
          >
            Gradient
          </button>
        </div>

        <div className="flex flex-col border-b border-darkLight pb-3">
          <ChromePicker
            color={currentColor}
            onChange={(e) => {
              setcurrentModelColor(
                "#" + rgbHex(e.rgb.r, e.rgb.g, e.rgb.b, e.rgb.a),
              );

              setcurrentColor("#" + rgbHex(e.rgb.r, e.rgb.g, e.rgb.b, e.rgb.a));
            }}
            disableAlpha={false}
          />
          <div className="flex w-full ">
            <button
              onClick={() => {
                setcolorMode("hex");
              }}
              className={`w-full border-b border-darkLight pb-1 text-[13px] text-textLight ${colorMode === "hex" ? "border-white text-white" : ""}`}
            >
              Hex
            </button>
            <button
              onClick={() => {
                setcolorMode("cmyk");
              }}
              className={`w-full border-b border-darkLight pb-1 text-[13px] text-textLight ${colorMode === "cmyk" ? "border-white text-white" : ""}`}
            >
              CMYK
            </button>
          </div>
          <div className="flex items-center justify-between pt-2.5 ">
            <input
              type="text"
              className="max-w-[5.2rem] border border-darkMid bg-darkP px-2 py-1.5 text-center text-[13px] text-white outline-none"
              value={currentColor.slice(1)}
              onChange={(e) => {
                setcurrentModelColor("#" + e.target.value);
                setcurrentColor("#" + e.target.value);
              }}
            />
            {dropper}
          </div>
        </div>

        <div className="border-b border-darkLight pb-3">
          <h3 className="text-[13px] text-white">Document Colors</h3>
          <div className="mt-2 flex flex-wrap gap-2 ">
            {documentColors.map((it, index) => (
              <div
                onClick={() => {
                  setcurrentModelColor(it);
                  setcurrentColor(it);
                }}
                style={{ background: it }}
                key={index}
                className="h-7 w-7 rounded-full"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] text-white">Pupolar colors</h3>
          <div className="mt-2 flex flex-wrap gap-2.5 ">
            {documentColors.map((it, index) => (
              <div
                onClick={() => {
                  setcurrentModelColor(it);
                  setcurrentColor(it);
                }}
                style={{ background: it }}
                key={index}
                className="h-8 w-8 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
