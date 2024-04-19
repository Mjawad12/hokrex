"use client";
import { arrowDown, starBlack } from "@/Consonats";
import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";

function D_R_R({ description }) {
  return (
    <div className="w-full flex flex-col gap-5 mt-14 px-10">
      <OpnerCompoent text={"Description"}>
        <p className="text-[16px] font-[400] text-[#707070]">{description}</p>
      </OpnerCompoent>
      <OpnerCompoent text={"Reviews(35)"}>
        <div className="flex items-end gap-3">
          <div className="flex-center gap-1">
            {starBlack}
            {starBlack}
            {starBlack}
            {starBlack}
            {starBlack}
          </div>
          <span className="text-[20px] font-[500] leading-4">4.9 stars</span>
        </div>
        <div className="w-full flex flex-col mt-9 gap-10 ">
          <Review />
          <Review />
        </div>
      </OpnerCompoent>
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
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-start">
        <div className="flex-center gap-3">
          <div className="rounded-xl border border-borderP p-2">
            <Image src={"/user.png"} width={40} height={40} alt="user" />
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] font-[600] leading-5">Faheem M.</p>
            <p className="text-[15px] text-[#707070] font-[500]">19/03/2024</p>
          </div>
        </div>
        <div className="flex-center gap-1 [&_svg]:w-[15px]">
          {starBlack}
          {starBlack}
          {starBlack}
          {starBlack}
          {starBlack}
        </div>
      </div>
      <p className="text-[17px] font-[400] mt-4">
        I just picked up a pair in the fly "Dolphin" Colorway and I noticed
        there were a number of girlfriends, wives and mothers who purchased 
      </p>
      <span className="text-[18px] font-[600] underline underline-offset-4 mt-3">
        More
      </span>
    </div>
  );
};

export { OpnerCompoent };
