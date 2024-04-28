"use client";
import React from "react";
import { arrowLeft } from "@/Consonats";
import { motion, useAnimate } from "framer-motion";

const Footer = () => {
  const [scope, animate] = useAnimate();
  return (
    <div className="relative z-20 flex w-full flex-col bg-darkP px-7 pb-8">
      <p className="relative right-4 text-[240.6px] font-[600] leading-[230.6px] text-white ">
        More
      </p>
      <div className="flex gap-5 ">
        <div className="flex w-full max-w-[30rem] gap-5">
          <div className="flex w-full flex-col justify-between">
            <ul className="w-full border-t border-white py-2 [&_li]:pt-1 [&_li]:text-[1.1rem] [&_li]:text-grayP">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Youtube</li>
              <li>Tiktok</li>
            </ul>
            <p className="text-[0.8rem] font-[200] text-[#FFFFFF]">
              ©2024, Sublimatics Inc.
            </p>
          </div>
          <div className="flex w-full flex-col justify-between">
            <ul className="w-full border-t border-white py-2 [&_li]:pt-1 [&_li]:text-[1.1rem] [&_li]:text-grayP">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Youtube</li>
              <li>Tiktok</li>
            </ul>
            <p className="text-[0.8rem] font-[200] text-[#FFFFFF]">
              Made by Hokrex
            </p>
          </div>
        </div>
        <motion.div ref={scope} className="flex-center w-full gap-5 ">
          <NavBox
            text={"Contact Us"}
            desc={"contact us"}
            no={1}
            animate={animate}
          />
          <NavBox
            text={"About Us"}
            desc={"About us"}
            no={2}
            animate={animate}
          />
        </motion.div>
      </div>
    </div>
  );
};

const NavBox = ({ text, desc, no, animate }) => {
  return (
    <motion.div
      onMouseEnter={async () => {
        no === 2 && animate("#arrowLeft", { opacity: 0 });
        no === 1 &&
          animate(
            "#arrowLeft2",
            { x: "-700%", opacity: 0 },
            { duration: 0.35, ease: "easeInOut" },
          );
        no === 1 &&
          (await animate("#arrowLeft", { opacity: 0 }, { duration: 0 }));
        no === 1 &&
          (await animate(
            "#arrowLeft",
            { opacity: 1 },
            { duration: 0, delay: 0.3 },
          ));
      }}
      onMouseLeave={async () => {
        no === 2 && animate("#arrowLeft", { opacity: 1 });
        no === 1 &&
          animate(
            "#arrowLeft2",
            { x: "0", opacity: 1 },
            { duration: 0.35, ease: "easeInOut" },
          );
        no === 1 &&
          (await animate("#arrowLeft", { opacity: 0 }, { duration: 0 }));
        no === 1 &&
          (await animate(
            "#arrowLeft",
            { opacity: 1 },
            { duration: 0, delay: 0.3 },
          ));
      }}
      className="flex h-[20rem] w-full flex-col justify-between overflow-hidden rounded-[5px] bg-white px-3 transition-all duration-500 hover:w-[150%]
         hover:bg-black [&_p]:hover:text-white [&_p]:hover:[text-decoration:underline] [&_svg]:hover:stroke-white"
    >
      <div className="flex items-center justify-between">
        <p className="whitespace-nowrap text-[3.3rem] font-[500] text-black [text-underline-offset:0.8rem]">
          {text}
        </p>
        <motion.div id={`${no === 1 ? "arrowLeft" : "arrowLeft2"}`}>
          {arrowLeft}
        </motion.div>
      </div>
      <p className="text-[0.9rem] text-grayP">{desc}</p>
    </motion.div>
  );
};

export default Footer;
