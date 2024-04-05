import React, { useEffect, useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { motion, useAnimate } from "framer-motion";
import { arrowDown } from "@/Consonats";
function Sidebar({ setSelected, Selected }) {
  const liItems = [
    { name: "Brand Appeal", quant: "05" },
    { name: "Work wear", quant: "05" },
    { name: "Home & living", quant: "05" },
    { name: "Personal", quant: "05" },
    { name: "Team & Sports", quant: "05" },
    { name: "Pormotion items", quant: "05" },
    { name: "Gift items", quant: "05" },
    { name: "Print on demand", quant: "05" },
  ];

  return (
    <div className="max-w-[17.5rem] w-full flex flex-col py-5 gap-7 border-r border-[#E5E5E5]">
      <div className="flex-center flex-col w-full gap-7">
        <p className="text-pmRed font-[700] text-[1.1rem] w-full text-center border-b border-[#E5E5E5] pb-3">
          PRODUCT CATEGORIES
        </p>
        <ul className="list-none flex flex-col gap-3 text-[17px] w-full px-7">
          {liItems.map((it, index) => (
            <Li_item
              text={it.name}
              Titems={it.quant}
              key={index}
              setSelected={setSelected}
              Selected={Selected}
            />
          ))}
        </ul>
      </div>
      <div className="flex-center flex-col w-full gap-7">
        <p className="text-pmRed font-[700] text-[1.1rem] w-full text-center border-y border-[#E5E5E5] py-3 ">
          STOCK STATUS
        </p>
        <ul className="list-none flex flex-col gap-4 [&>li]:font-[500] text-[18px] [&>li]:flex-row-between w-full px-7">
          <li>
            <CustomCheckbox text={"On Sale"} />
          </li>
          <li>
            <CustomCheckbox text={"In Stock"} />
          </li>
          <li>
            <CustomCheckbox text={"Top Rated Products"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

const Li_item = ({ text, Titems, setSelected, Selected }) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    Selected !== text && animate("#liCont", { x: 0 });
  }, [Selected]);
  return (
    <motion.li
      ref={scope}
      onClick={() => setSelected(text)}
      className={`hover:text-pmRed cursor-pointer flex-row-between font-[500] ${
        Selected === text ? "text-pmRed" : ""
      }`}
      onMouseEnter={() => {
        animate("#liCont", { x: 20 });
      }}
      onMouseLeave={() => {
        Selected !== text && animate("#liCont", { x: 0 });
      }}
    >
      <div className="overflow-hidden w-full">
        <motion.div
          initial={{ x: Selected === text ? 20 : "0" }}
          id="liCont"
          className="flex relative items-center"
        >
          <div className="rotate-[-90deg] scale-[1.4] absolute left-[-15px] [&_svg]:stroke-pmRed">
            {arrowDown}
          </div>
          <p>{text}</p>
        </motion.div>
      </div>
      <span className="font-[600] text-[0.7rem] max-w-8 w-full h-6  border-gray-200 border rounded-full flex-center">
        {Titems}
      </span>
    </motion.li>
  );
};

export default Sidebar;
