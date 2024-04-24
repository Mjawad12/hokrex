"use client";
import { left, ourproducts } from "@/Consonats";
import { animate, motion } from "framer-motion";
import React from "react";

function Our_products({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full min-h-screen flex-center"
    >
      <div className="max-w-[1400px] w-full flex-center flex-col  z-30 relative mx-auto gap-20">
        <div className="flex flex-center flex-col">
          <motion.p
            initial={{ scale: 1.5, y: -15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 1.5, y: -15 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-[25px] font-[700] tracking-[5px] "
          >
            OUR PRODUCT
          </motion.p>
          <motion.h3
            initial={{ y: 55 }}
            exit={{ y: 55 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-[75px] font-[700] text-center leading-[70px] mt-3 z-10"
          >
            Custom printed & embroidered products
          </motion.h3>
          <motion.div
            initial={{ y: -30, rotate: "270deg" }}
            exit={{ y: -30, rotate: "270deg" }}
            animate={{ y: 0, rotate: "270deg" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex-center rotate-[-270deg] scale-x-[-1] rounded-full border w-[7rem] h-[7rem] relative [&_svg]:w-[35px] [&_svg]:h-[35px] cursor-pointer mt-12 bg-white"
          >
            <span className="absolute left-[1.9rem]">{left}</span>
            {left}
          </motion.div>
        </div>
        <div className="w-full flex  flex-col flex-wrap gap-y-[6px] ">
          {ourproducts.map((it, index) => {
            let margin = 0;
            switch (index) {
              case 0:
                margin = 450;
                break;
              case 1:
                margin = 1050;
                break;
              case 2:
                margin = 670;
                break;
              case 3:
                margin = 300;
                break;
              case 4:
                margin = 570;
                break;
              case 5:
                margin = 1070;
                break;
              case 6:
                margin = 0;
                break;
              case 7:
                margin = 710;
                break;
              case 8:
                margin = 170;
                break;
            }
            return (
              <p
                key={index}
                style={{ left: margin + "px" }}
                className="text-[30px] leading-[20px] font-[700] hover:text-pmRed w-max relative"
              >
                {it}
              </p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Our_products;
