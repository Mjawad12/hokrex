import { dropper, nullColor } from "@/Consonats";
import { ContextTool } from "@/components/Mainstate(tool)/Mainstatetool";
import React, { useContext, useState } from "react";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";

function ColorSmall() {
  const { selectedText, setselectedText, UpdateText } = useContext(ContextTool);
  const [colorSelect, setcolorSelect] = useState("Solid");
  const [colorMode, setcolorMode] = useState("hex");
  const [currentColor, setcurrentColor] = useState(selectedText.color);

  const docColors = [
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
    <div className="absolute bottom-5 right-[328px] z-30 flex h-[23.8rem] w-full max-w-[14rem] flex-col  gap-2 rounded-md bg-darkMid p-2">
      <div className="flex w-full gap-2">
        <button
          onClick={() => setcolorSelect("Solid")}
          className={`w-full text-[13px]  font-[500] text-white hover:bg-[#505D6C] ${colorSelect === "Solid" ? "bg-[#505D6C]" : "bg-transparent"} rounded-md py-1 `}
        >
          SOLID
        </button>

        <button
          onClick={() => setcolorSelect("Gradient")}
          className={`w-full text-[13px] font-[500] text-white hover:bg-[#505D6C] ${colorSelect === "Gradient" ? "bg-[#505D6C]" : "bg-transparent"} rounded-md py-1 `}
        >
          GRADIENT
        </button>
      </div>

      <div className="flex flex-col border-b border-darkLight pb-3">
        <ChromePicker
          color={currentColor}
          onChange={(e) => {
            const clr = "#" + rgbHex(e.rgb.r, e.rgb.g, e.rgb.b, e.rgb.a);
            setselectedText({
              ...selectedText,
              color: clr,
            });
            setcurrentColor(clr);
            UpdateText(
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              clr,
            );
          }}
          disableAlpha={false}
        />
        <div className="flex w-full ">
          <button
            onClick={() => {
              setcolorMode("hex");
            }}
            className={`w-full border-b border-darkLight pb-1 text-[11px] text-textLight ${colorMode === "hex" ? "border-white text-white" : ""}`}
          >
            Hex
          </button>
          <button
            onClick={() => {
              setcolorMode("cmyk");
            }}
            className={`w-full border-b border-darkLight pb-1 text-[11px] text-textLight ${colorMode === "cmyk" ? "border-white text-white" : ""}`}
          >
            CMYK
          </button>
        </div>
        <div className="flex items-center justify-between pt-2.5 ">
          <input
            type="text"
            className="max-w-[5.2rem] border border-darkMid bg-darkP px-2 py-1.5 text-center text-[13px] text-white outline-none"
            value={currentColor?.slice(1)}
            onChange={(e) => {
              const clr = "#" + e.target.value;
              setselectedText({
                ...selectedText,
                color: clr,
              });
              setcurrentColor(clr);
              UpdateText(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                clr,
              );
              setcurrentColor(clr);
            }}
          />
          {dropper}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 [&_span]:cursor-pointer">
        <p className="text-[12px] text-textLight">Document Color</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="h-[1.3rem] w-[1.3rem] rounded-full">
            {nullColor}
          </span>
          {docColors.map((it, index) => (
            <span
              onClick={() => {
                setselectedText({
                  ...selectedText,
                  color: it,
                });
                setcurrentColor(it);
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  it,
                );
              }}
              key={index}
              style={{ backgroundColor: it }}
              className="h-[1.3rem] w-[1.3rem] rounded-full"
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorSmall;
