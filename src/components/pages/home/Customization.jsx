"use client";
import { left, left2 } from "@/Consonats";
import React from "react";

function Customization() {
  return (
    <div className="w-full min-h-screen bg-black flex-center flex-col overflow-x-hidden ">
      <div className="flex-center  rounded-full border w-[7rem] h-[7rem] relative [&_svg]:w-[35px] [&_svg]:h-[35px] cursor-pointer bg-white">
        <span className="absolute left-[1.9rem]">{left}</span>
        {left}
      </div>
      <h3 className="text-[210px] font-[700] leading-[180px] text-white mt-20">
        Customization
      </h3>
      <h3 className="text-[210px] font-[700] leading-[180px] text-white">
        tool <span className="text-pmRed">overview</span>
      </h3>
    </div>
  );
}

export default Customization;
