import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function Controls() {
  const slider = useRef(null);
  const [grid, setgrid] = useState(false);
  const [tprint, settprint] = useState(false);
  const [view2, setview2] = useState(false);
  const [value, setvalue] = useState(50);
  const func = () => {
    const val = slider.current?.value;
    setvalue(val);
    const percent = (val / slider.current?.max) * 100;
    console.log(percent.toFixed(0));
    slider.current.style.background = `linear-gradient(to right , white ${
      percent.toFixed(0) + "%"
    } , #333B45 0%)`;
  };
  return (
    <div className="w-full flex justify-end items-center absolute left-0 bottom-0 z-20 px-8 gap-3 py-3">
      <div className="flex-center px-4 py-[0.7rem] bg-darkLight gap-3 rounded-[4px]">
        <p className="text-[13px] text-[#D9DBDD] ">Show Grid</p>
        <Switch on={grid} seton={setgrid} />
      </div>
      <div className="flex-center px-4 py-[0.7rem] bg-darkLight gap-3 rounded-[4px]">
        <p className="text-[13px] text-[#D9DBDD] ">T Shirt Print</p>
        <Switch on={tprint} seton={settprint} />
      </div>
      <div className="flex-center px-4 py-[0.7rem] bg-darkLight gap-3 rounded-[4px]">
        <p className="text-[13px] text-[#D9DBDD] ">2D view</p>
        <Switch on={view2} seton={setview2} />
      </div>
      <div className="flex-center px-2 py-[0.7rem] bg-darkLight gap-3 rounded-[4px] w-[13rem]">
        <p className="font-[500] text-[13px] whitespace-nowrap text-[#D9DBDD] ">
          {value} %
        </p>
        <input
          type="range"
          min={0}
          max={100}
          id="cs12-Sli-2"
          ref={slider}
          defaultValue={50}
          onInput={func}
        />
      </div>
    </div>
  );
}

const Switch = ({ on, seton }) => {
  return (
    <div
      onClick={() => seton(!on)}
      className={`flex justify-center items-center relative w-[2.3rem] h-[0.65rem] rounded-3xl cursor-pointer transition-all duration-200 ${
        on ? "bg-white" : "bg-[#333B45]"
      }`}
    >
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ left: !on ? 0 : "auto", right: on ? 0 : "auto" }}
        style={{ boxShadow: "0px 0px 2px black" }}
        className={`w-4 h-4 bg-white absolute  rounded-full text-[12px]  `}
      />
    </div>
  );
};

export default Controls;
