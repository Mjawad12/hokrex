"use client";
import { arrowDown } from "@/Consonats";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function BulkCalculator() {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();
  const slider = useRef(null);
  const [value, setvalue] = useState(250);
  const func = () => {
    const val = slider.current?.value;
    setvalue(val);
    const percent = (val / slider.current?.max) * 100;
    console.log(percent.toFixed(0));
    slider.current.style.background = `linear-gradient(to right , black ${
      percent.toFixed(0) + "%"
    } , #d3d3d3 0%)`;
  };
  const opener = () => {
    open && anima;
  };

  return (
    <motion.div
      initial={{
        height: 50,
      }}
      onClick={opener}
      className="w-full bg-[#F9F9F9] px-5 py-3 rounded-[12px] overflow-hidden "
    >
      <div className="flex justify-between items-center cursor-pointer">
        <p className="font-[600] text-[18px]">Bulk price Calculator</p>
        <div className="[&_svg]:w-[16px]">{arrowDown}</div>
      </div>
      <div className="flex flex-col gap-2 pt-5">
        <p className="text-[0.8rem] font-[400] text-[#707070]">
          All calculations made are for informational purposes only.
        </p>
        <div className="flex-center gap-3">
          <input
            type="range"
            min={1}
            max={500}
            id="cs12-Sli"
            ref={slider}
            onInput={func}
          />
          <p className="font-[500] text-[17px] whitespace-nowrap">
            {value} items
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[16px] font-[600]">
            Disconted Price : <span className="font-[700]">$348</span>
          </p>
          <p className="text-[16px] font-[600]">9%OFF</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BulkCalculator;
