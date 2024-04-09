"use client";
import {
  arrowLeft,
  duplicate,
  left,
  left2,
  logo,
  redo,
  trash,
  undo,
} from "@/Consonats";
import React, { useState } from "react";

function Nav({ name, type }) {
  const [tselected, settselected] = useState("Front");
  return (
    <div className="w-full flex-center flex-col gap-2  bg-darkMid z-20 relative">
      <div className="w-full flex justify-between items-center bg-darkLight px-2 py-1 shadow-xl ">
        <div className="flex-center gap-3  ">
          <div className="w-10 h-10 flex justify-center items-center border-gray-500 border-[0.5px] rounded-[0.7rem] bg-white   ">
            {logo}
          </div>
          <div className="flex flex-col">
            <h1 className="text-textLight text-[15px] font-[500] leading-4">
              {name}
            </h1>
            <p className="text-textLight text-[13px] font-[400] ">{type}</p>
          </div>
        </div>
        <div className="flex-center gap-3">
          <UndoRedo />
          <div className="border-r border-darkBorder pr-3 ">{duplicate}</div>
          <div className="border-r border-darkBorder pr-3 ">{trash}</div>
          <BtnGroups />
        </div>
      </div>
      <TopBar settselected={settselected} tselected={tselected} />
    </div>
  );
}

const TopBar = ({ tselected, settselected }) => {
  const Items = [
    "Front",
    "Back",
    "Right",
    "Left",
    "Inside Label",
    "Outside Label",
    "Coular",
  ];
  return (
    <div className="max-w-[52rem] w-full px-3 py-2 flex-center gap-3 bg-darkLight rounded-xl border border-darkBorder  ">
      {Items.map((it, index) => (
        <button
          key={index}
          className={`text-white px-3 py-1 whitespace-nowrap text-[16px] rounded-lg ${
            tselected === it ? "bg-darkMid text-white" : ""
          }`}
          onClick={() => settselected(it)}
        >
          {it}
        </button>
      ))}
    </div>
  );
};

const UndoRedo = () => {
  return (
    <div className="flex-center gap-2 border-r border-[#4E5C6C] pr-3 ">
      <span>{undo}</span>
      <span>{redo}</span>
    </div>
  );
};

const BtnGroups = () => {
  return (
    <div className="flex-center gap-2">
      <button className="flex-center gap-1 border border-textLight px-3 py-[0.45rem] rounded-md text-textLight text-[14px]">
        {left2}Back To catelog
      </button>
      <button className="flex-center gap-1 px-7 py-[0.45rem] rounded-md text-black text-[14px] bg-white">
        Add to Cart
      </button>
    </div>
  );
};

export default Nav;
