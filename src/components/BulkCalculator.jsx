"use client";
import { arrowDown } from "@/Consonats";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function BulkCalculator({ price, salePercent }) {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();
  const slider = useRef(null);
  const [value, setvalue] = useState(1);
  const func = () => {
    const val = slider.current?.value;
    setvalue(val);
    const percent = (val / slider.current?.max) * 100;
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

  useEffect(() => {
    func();
  }, []);

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
        <p className="text-[18px] font-[600]">Bulk price Calculator</p>
        <div
          className={`[&_svg]:w-[16px] ${
            open ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 `}
        >
          {arrowDown}
        </div>
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
            defaultValue={1}
            className="w-full"
          />
          <p className="w-16 whitespace-nowrap text-[17px] font-[500]">
            {value} items
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-[600] smo:text-[15px]">
            Disconted Price :
            <span className="font-[700]">
              $
              {(value * price - value * price * (+salePercent / 100)).toFixed(
                2,
              )}
            </span>
          </p>
          <p className="text-[16px] font-[600]">{salePercent}%OFF</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BulkCalculator;
