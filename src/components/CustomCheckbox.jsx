"use client";
import { tick } from "@/Consonats";
import React, { useEffect, useState } from "react";

const CustomCheckbox = ({ text, st, fontSize, admin, type, textColor }) => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setchecked(st);
  }, [st]);
  return (
    <label
      onClick={() => setchecked(!checked)}
      style={{ color: textColor && textColor }}
      className={`w-full flex items-center ${
        admin ? "flex-row-reverse" : ""
      } justify-start cursor-pointer text-[1.05rem] gap-4 larger:text-[0.8rem] small:text-[0.9rem] 
       font-[500] text-black ${fontSize === "sm" ? "text-[14px] !gap-2" : ""} `}
    >
      <span
        className={`w-[1.3rem] h-[1.3rem] flex justify-center 
        items-center ${checked && "bg-black"} border ${
          checked ? "border-black" : "border-[#E5E5E5]"
        }  rounded-[5px]  ${admin ? "border-gray-300" : ""} ${type === "small" ? "w-[0.9rem] h-[0.95rem]" : ""}  `}
      >
        <span
          className={`flex w-[1.1rem] ${type === "small" ? "w-[0.9rem]" : ""} `}
        >
          {tick}
        </span>
      </span>
      {text}
    </label>
  );
};

export default CustomCheckbox;
