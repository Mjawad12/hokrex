"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { arrowLeft } from "@/Consonats";
import { motion, useAnimate } from "framer-motion";

function FooterSec() {
  return (
    <div className="w-full pt-8 bg-darkP ">
      <SuggestedProducts />
      <Footer />
    </div>
  );
}

const SuggestedProducts = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex flex-col gap-14 px-14 pb-24">
      <h3 className="font-[600] text-5xl text-white">TOP RELATED PRODUCTS</h3>
      <div className="flex gap-6 ">
        {data.map((it, index) => (
          <ProductCard
            name={"Team Sports 1.0"}
            key={index}
            width={"sm"}
            dark={true}
          />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const [scope, animate] = useAnimate();
  return (
    <div className="w-full bg-darkP flex flex-col px-7 pb-8">
      <p className="font-[600] text-[240.6px] text-white leading-[230.6px] relative right-4 ">
        More
      </p>
      <div className="flex gap-5 ">
        <div className="flex gap-5 max-w-[30rem] w-full">
          <div className="flex flex-col justify-between w-full">
            <ul className="[&_li]:text-[1.1rem] [&_li]:text-grayP [&_li]:pt-1 w-full border-t border-white py-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Youtube</li>
              <li>Tiktok</li>
            </ul>
            <p className="text-[0.8rem] text-[#FFFFFF] font-[200]">
              ©2024, Sublimatics Inc.
            </p>
          </div>
          <div className="flex flex-col justify-between w-full">
            <ul className="[&_li]:text-[1.1rem] [&_li]:text-grayP [&_li]:pt-1 w-full border-t border-white py-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Youtube</li>
              <li>Tiktok</li>
            </ul>
            <p className="text-[0.8rem] text-[#FFFFFF] font-[200]">
              Made by Hokrex
            </p>
          </div>
        </div>
        <motion.div ref={scope} className="w-full flex-center gap-5 ">
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
            { x: "-500%" },
            { duration: 0.35, ease: "easeInOut" }
          );
        no === 1 &&
          (await animate("#arrowLeft", { opacity: 0 }, { duration: 0 }));
        no === 1 &&
          (await animate(
            "#arrowLeft",
            { opacity: 1 },
            { duration: 0, delay: 0.3 }
          ));
      }}
      onMouseLeave={async () => {
        no === 2 && animate("#arrowLeft", { opacity: 1 });
        no === 1 &&
          animate(
            "#arrowLeft2",
            { x: "0", opacity: 1 },
            { duration: 0.35, ease: "easeInOut" }
          );
        no === 1 &&
          (await animate("#arrowLeft", { opacity: 0 }, { duration: 0 }));
        no === 1 &&
          (await animate(
            "#arrowLeft",
            { opacity: 1 },
            { duration: 0, delay: 0.3 }
          ));
      }}
      className="w-full bg-white h-[20rem] flex flex-col justify-between rounded-[5px] px-3 hover:w-[150%] transition-all duration-500 overflow-hidden
       hover:bg-black [&_p]:hover:text-white [&_p]:hover:[text-decoration:underline] [&_svg]:hover:stroke-white"
    >
      <div className="flex justify-between items-center">
        <p className="text-[3.3rem] text-black font-[500] whitespace-nowrap [text-underline-offset:0.8rem]">
          {text}
        </p>
        <motion.div id={`${no === 1 ? "arrowLeft" : "arrowLeft2"}`}>
          {arrowLeft}
        </motion.div>
      </div>
      <p className="text-grayP text-[0.9rem]">{desc}</p>
    </motion.div>
  );
};

export default FooterSec;
