"use client";
import { left } from "@/Consonats";
import { ContextAnimation } from "@/components/Mainstate(Animation)/MainStateAnimation";
import { motion, useAnimate } from "framer-motion";
import React, { useContext, useEffect } from "react";

function Customization({ isView, slide1 }) {
  const [scope, animate] = useAnimate();
  const { setanimating } = useContext(ContextAnimation);
  useEffect(() => {
    if (slide1) {
      animate(scope.current, { zIndex: 20 });
    } else {
      animate(scope.current, { zIndex: 25 }, { delay: 1.3 });
    }
  }, [slide1]);
  return (
    <motion.section
      ref={scope}
      initial={{ x: "100%" }}
      animate={{ x: isView ? "0" : "100%" }}
      transition={{
        duration: 1,
        ease: [0, 0, 0, 1],
        delay: isView ? 0 : 0.6,
      }}
      className="fixed left-0 top-0 flex min-h-[500vh] w-full flex-col bg-white "
    >
      <motion.div
        animate={{
          opacity: slide1 ? "0" : 1,
          backgroundColor: slide1 ? "#ffffff" : "#00000",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="flex-center relative min-h-[calc(100vh+18px)] w-full flex-col overflow-hidden bg-black "
      >
        <motion.div
          animate={{ opacity: isView ? 1 : 0, x: isView ? 0 : 60 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: !isView ? 0 : 1,
          }}
          onClick={() => {
            document.querySelector("#v-c-h").scrollIntoView();
          }}
          className="flex-center relative h-[7rem] w-[7rem] cursor-pointer rounded-full border bg-white [&_svg]:h-[35px] [&_svg]:w-[35px] "
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
          onAnimationComplete={() => {
            setanimating(false);
          }}
          onAnimationStart={() => {
            setanimating(true);
          }}
          className="mt-20 text-[13.7vw] font-[700] leading-[11.7vw] text-white"
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
            className="text-[13.6vw] font-[700] leading-[11.7vw] text-white"
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
            className="text-[13.6vw] font-[700] leading-[11.7vw] text-pmRed"
          >
            overview
          </motion.h3>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Customization;
