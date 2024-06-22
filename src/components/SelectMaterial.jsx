"use client";
import { arrowDown } from "@/Consonats";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function SelectMaterial({ materials, selectedType, setselectedType }) {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();

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
      className="w-full overflow-hidden rounded-[12px] bg-[#F9F9F9] px-5 py-3"
    >
      <div
        onClick={opener}
        id="mat-select"
        className="flex cursor-pointer items-center justify-between"
      >
        <p className="text-[18px] font-[600]">
          {selectedType || "Select Material"}
        </p>
        <div
          className={`[&_svg]:w-[16px] ${
            open ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 `}
        >
          {arrowDown}
        </div>
      </div>
      <div className="flex flex-col pt-2">
        {materials.map((it, index) => {
          return (
            <span
              key={index}
              className={`text-[18px] font-[500] ${selectedType === it ? "text-pmGray" : "text-black"} cursor-pointer hover:text-pmGray`}
              onClick={() => {
                setselectedType(it);
                setopen(false);
                opener();
              }}
            >
              {it}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SelectMaterial;
