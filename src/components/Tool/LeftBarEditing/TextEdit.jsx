import { textPositions } from "@/Consonats";
import React, { useState } from "react";

const TextEdit = ({ addText }) => {
  const [textPosX, settextPosX] = useState("center");
  const [textPosY, settextPosY] = useState("center");

  return (
    <div className="flex w-full flex-col gap-5">
      <input
        onInput={(e) => addText(e.target.value)}
        type="text"
        className="flex-center w-full rounded-md border border-darkLight bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
        placeholder="Text here"
        maxLength={30}
      />

      <div className="flex flex-col">
        <p className="text-[15px] font-[700] text-textDark">POSITION</p>
        <div className="flex gap-3">
          <div className="flex w-full">
            {textPositions.slice(0, 3).map((it, index) => (
              <TextAlign key={index} name={it.name} svg={it.svg} />
            ))}
          </div>
          <div className="flex w-full">
            {textPositions.slice(3, 6).map((it, index) => (
              <TextAlign key={index} name={it.name} svg={it.svg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TextAlign = ({ svg, name }) => {
  return (
    <div className="flex-center flex-col gap-2 border border-darkMid ">
      <span className="flex-center h-8 bg-darkLight px-3">{svg}</span>
      <p className="text-[14px] text-white">{name}</p>
    </div>
  );
};
export default TextEdit;
