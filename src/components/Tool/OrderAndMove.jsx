import { order } from "@/Consonats";
import React, { useEffect, useState } from "react";

function OrderAndMove({ ordeAndMove, movement, sEdit }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[15px] font-[700] text-textDark">ORDER AND MOVE</p>
      <div className="flex ">
        {ordeAndMove.map((it, index) => (
          <TextBtn name={it} key={index} svg={order} />
        ))}
      </div>
      <div className="flex ">
        {movement.map((it, index) => (
          <TextBtn
            name={it.name}
            key={index}
            svg={it.svg}
            clickfunc={it.clickfunc}
          />
        ))}
      </div>
      <div className="flex ">
        {sEdit.map((it, index) => (
          <TextBtn
            name={it.name}
            key={index}
            svg={it.svg}
            clickfunc={it.clickfunc}
          />
        ))}
      </div>
    </div>
  );
}

const TextAlign = ({ svg, name, func }) => {
  return (
    <div className="flex-center select-none flex-col gap-2 border border-darkMid">
      <span
        onClick={func}
        className="flex-center h-8 cursor-pointer bg-darkLight px-3 hover:bg-darkHover "
      >
        {svg}
      </span>
      <p className="text-[12px] text-textLight">{name}</p>
    </div>
  );
};

const TextBtn = ({ name, svg, clickfunc, rounded }) => {
  return (
    <div
      className={`flex-center w-full select-none flex-col gap-2 border border-darkMid `}
    >
      <span
        onClick={clickfunc}
        className={`flex-center h-8 w-full cursor-pointer bg-darkLight px-3 hover:bg-darkHover [&_*]:stroke-textLight ${rounded ? "rounded-[5px]" : ""}`}
      >
        {svg}
      </span>
      {name && (
        <p className="whitespace-nowrap text-[12px] text-textLight">{name}</p>
      )}
    </div>
  );
};

const EditInput = ({ name, func, value, fixed }) => {
  return (
    <div className="flex-center w-full flex-col gap-1">
      <input
        type="number"
        className="flex-center w-full rounded-md bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
        value={fixed && value.length > 2 ? value.slice(0, 4) : value}
        onInput={func}
      />
      <span className="text-[11px] font-[600] text-textDark">{name}</span>
    </div>
  );
};

export default OrderAndMove;

export { TextAlign, TextBtn, EditInput };
