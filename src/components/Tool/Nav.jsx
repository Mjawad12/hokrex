"use client";
import { duplicate, left2, logo, redo, trash, undo } from "@/Consonats";
import Link from "next/link";
import React, { useState } from "react";

function Nav({ name, type }) {
  const [tselected, settselected] = useState("Front");
  return (
    <nav className="flex-center relative z-20 w-full flex-col gap-2 ">
      <div className="flex w-full items-center justify-between bg-darkLight px-2 py-1 shadow-xl ">
        <div className="flex-center gap-3 ">
          <Link
            href={"/"}
            className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] border-[0.5px] border-gray-500 bg-white   "
          >
            {logo}
          </Link>
          <div className="flex flex-col">
            <h1 className="text-[15px] font-[500] leading-4 text-textLight">
              {name}
            </h1>
            <p className="text-[13px] font-[400] text-textLight ">{type}</p>
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
    </nav>
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
    <div className="flex-center w-full max-w-[50rem] gap-3 rounded-xl border border-darkBorder bg-darkLight px-3 py-2  ">
      {Items.map((it, index) => (
        <button
          key={index}
          className={`whitespace-nowrap rounded-lg px-3 py-1 text-[16px] text-white ${
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
      <button className="flex-center gap-1 rounded-md border border-textLight px-3 py-[0.45rem] text-[14px] text-textLight">
        {left2}Back To catelog
      </button>
      <button className="flex-center gap-1 rounded-md bg-white px-7 py-[0.45rem] text-[14px] text-black">
        Add to Cart
      </button>
    </div>
  );
};

export default Nav;
