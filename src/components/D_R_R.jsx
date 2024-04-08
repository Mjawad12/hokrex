"use client";
import { arrowDown } from "@/Consonats";
import React, { Children, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function D_R_R() {
  return (
    <div className="w-full flex flex-col gap-5 mt-20">
      <OpnerCompoent text={"Description"}>
        <p className="text-[16px] font-[400] text-[#707070]">
          Introducing Our Premium Stock E Sport Designs: Elevate Your
          Performance in Style! Unleash the power of unity and performance with
          our cutting-edge E Sport Designs, meticulously crafted to propel your
          team to victory while showcasing your unique style. With an array of
          dynamic features and two distinct fabric options ? Performance Knit
          Interlock and Performance Mesh Fabric ? we present the ultimate choice
          for teams determined to dominate the field. 🔥 Key Features: 🏆
          Unparalleled Performance: Our Stock E Sports Design is engineered to
          optimize your performance, ensuring maximum comfort and flexibility
          during intense play. Move with agility and confidence as you
          outmaneuver opponents, all thanks to the thoughtful design that
          seamlessly blends functionality and style.
        </p>
      </OpnerCompoent>
      <OpnerCompoent text={"Reviews(35)"}></OpnerCompoent>
      <OpnerCompoent text={"Shiping & Returns"}></OpnerCompoent>
    </div>
  );
}

export default D_R_R;

const OpnerCompoent = ({ text, children }) => {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();
  const opener = () => {
    open &&
      animate(
        scope.current,
        { height: 75 },
        { duration: 0.5, ease: "easeInOut" }
      );
    !open &&
      animate(
        scope.current,
        { height: scope.current.scrollHeight + "px" },
        { duration: 0.5, ease: "easeInOut" }
      );
    setopen(!open);
  };
  return (
    <motion.div
      ref={scope}
      initial={{
        height: 75,
      }}
      className="w-full  px-2 py-6 overflow-hidden border-y border-borderP "
    >
      <div
        onClick={opener}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="font-[600] text-[18px]">{text}</p>
        <div
          className={`[&_svg]:w-[16px] ${
            open ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 `}
        >
          {arrowDown}
        </div>
      </div>
      <div className="w-full mt-6">{children}</div>
    </motion.div>
  );
};

const Review = () => {
  return <div></div>;
};
