"use client";
import { tick } from "@/Consonats";
import React, { useEffect, useState } from "react";

const CustomCheckbox = ({ text, st, fontSize, admin }) => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setchecked(st);
  }, [st]);
  return (
    <label
      onClick={() => setchecked(!checked)}
      className={`w-full flex items-center ${
        admin ? "flex-row-reverse" : ""
      } justify-start cursor-pointer text-[1.05rem] gap-4 larger:text-[0.8rem] small:text-[0.9rem] 
       font-[500] text-black ${fontSize === "sm" ? "text-[14px] !gap-2" : ""} `}
    >
      <span
        className={`w-[1.3rem] h-[1.3rem] flex justify-center 
        items-center ${checked && "bg-black"} border ${
          checked ? "border-black" : "border-[#E5E5E5]"
        }  rounded-[5px]  ${admin ? "border-gray-300" : ""}  `}
      >
        <span className="flex w-[1.1rem] ">{tick}</span>
      </span>
      {text}
    </label>
  );
};

export default CustomCheckbox;
