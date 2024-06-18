"use client";
import { arrowDown } from "@/Consonats";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function SelectMaterial({ materials }) {
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
    open &&
      animate(
        scope.current,
        { height: 50 },
        { duration: 0.5, ease: "easeInOut" },
      );
    !open &&
      animate(
        scope.current,
        { height: scope.current.scrollHeight + "px" },
        { duration: 0.5, ease: "easeInOut" },
      );
    setopen(!open);
  };

  return (
    <motion.div
      ref={scope}
      initial={{
        height: 50,
      }}
      className="w-full overflow-hidden rounded-[12px] bg-[#F9F9F9] px-5 py-3 "
    >
      <div
        onClick={opener}
        className="flex cursor-pointer items-center justify-between"
      >
        <p className="text-[18px] font-[600]">Select Material</p>
        <div
          className={`[&_svg]:w-[16px] ${
            open ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 `}
        >
          {arrowDown}
        </div>
      </div>
      {materials.map((it) => {})}
    </motion.div>
  );
}

export default SelectMaterial;
