"use client";
import { tick } from "@/Consonats";
import React, { useEffect, useState } from "react";

const CustomCheckbox = ({
  text,
  setOuter,
  fontSize,
  admin,
  type,
  textColor,
  borderGray,
}) => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setOuter && setOuter(checked);
  }, [checked]);
  return (
    <label
      onClick={() => setchecked(!checked)}
      style={{ color: textColor && textColor }}
      className={`flex w-full items-center ${
        admin ? "flex-row-reverse" : ""
      } cursor-pointer justify-start gap-4 text-[1.05rem] font-[500] text-black 
       larger:text-[0.8rem] small:text-[0.9rem] ${fontSize === "sm" ? "!gap-2 text-[14px]" : ""} `}
    >
      <span
        className={`flex h-[1.3rem] w-[1.3rem] items-center 
        justify-center ${checked && "bg-black"} border ${
          checked
            ? "border-black"
            : borderGray
              ? "border-[#707070]"
              : "border-[#E5E5E5]"
        }  rounded-[5px]  ${admin ? "border-gray-300" : ""} ${type === "small" ? "!h-[0.95rem] !w-[0.9rem]" : ""}  `}
      >
        <span
          className={`flex w-[1.1rem] ${type === "small" ? "!w-[0.9rem]" : ""} `}
        >
          {tick}
        </span>
      </span>
      {text}
    </label>
  );
};

export default CustomCheckbox;
