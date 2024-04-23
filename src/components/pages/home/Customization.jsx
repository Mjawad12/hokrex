"use client";
import { left } from "@/Consonats";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Customization({ isView }) {
  return (
    <motion.section
      initial={{ x: "100%" }}
      animate={{ x: isView ? "0" : "100%" }}
      transition={{
        duration: 1,
        ease: [0, 0, 0, 1],
        delay: isView ? 0 : 0.6,
      }}
      className="flex flex-col fixed top-0 left-0 w-full z-20"
    >
      <motion.div className="w-full min-h-screen bg-black flex-center flex-col overflow-hidden relative">
        <motion.div
          animate={{ opacity: isView ? 1 : 0, x: isView ? 0 : 60 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: !isView ? 0 : 1,
          }}
          onClick={() => {
            window.scrollTo(0, window.scrollY - 30);
          }}
          className="flex-center  rounded-full border w-[7rem] h-[7rem] relative [&_svg]:w-[35px] [&_svg]:h-[35px] cursor-pointer bg-white"
        >
          <span className="absolute left-[1.9rem]">{left}</span>
          {left}
        </motion.div>
        <motion.h3
          animate={{
            opacity: isView ? 1 : 0,
            scale: isView ? 1 : 1.5,
            y: isView ? 0 : -120,
            x: isView ? 0 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: !isView ? 0 : 1,
          }}
          className="text-[210px] font-[700] leading-[180px] text-white mt-20"
        >
          Customization
        </motion.h3>
        <div className="flex-center w-full gap-3">
          <motion.h3
            animate={{
              opacity: isView ? 1 : 0,
              y: isView ? 0 : 90,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: !isView ? 0 : 1,
            }}
            className="text-[210px] font-[700] leading-[180px] text-white"
          >
            tool{" "}
          </motion.h3>
          <motion.h3
            animate={{
              opacity: isView ? 1 : 0,
              x: isView ? 0 : 190,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: !isView ? 0 : 1,
            }}
            className="text-[210px] font-[700] leading-[180px] text-pmRed"
          >
            overview
          </motion.h3>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Customization;
