"use client";
import { content, left } from "@/Consonats";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Customization from "./Customization";
import Representation from "./Representation";

function Howitworks() {
  const [slide1, setslide1] = useState(false);
  const check = useRef(null);
  const imgRef = useRef(null);
  var isView = useInView(check, { amount: "some" });
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start start", "end start"],
  });

  const slideSkip = useScroll({
    target: imgRef,
    offset: ["start 0.7", "end start"],
  });

  const slide1_Val = useTransform(scrollYProgress, [0, 1], [false, true]);
  const slideSkip_Val = useTransform(
    slideSkip.scrollYProgress,
    [0, 1],
    [false, true],
  );

  useMotionValueEvent(slide1_Val, "change", (e) => {
    setslide1(e);
  });

  useMotionValueEvent(slideSkip_Val, "change", (e) => {
    e && document.querySelector("#slide-1").scrollIntoView();
    // !e && check.current.scrollIntoView();
  });

  return (
    <>
      <section id="v-c-h" className="relative w-full ">
        <div className="flex-center m-auto w-full max-w-[1220px] flex-col gap-24 pt-28 ">
          <div className="flex-center flex-col gap-3">
            <motion.p
              initial={{ scale: 1.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: "50px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-[26px] font-[700] tracking-[3px]"
            >
              HOW IT WORK
            </motion.p>
            <motion.h2
              id="v-c-h"
              initial={{ y: "90px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: "50px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="max-w-[25ch] text-center text-[74px] font-[700] leading-[72px]"
            >
              Get your Custom printed product in just 4 easy steps.
            </motion.h2>
          </div>
          <div className="flex w-full items-center justify-between">
            <motion.div className="relative z-10 flex flex-1 flex-grow-[0.8] flex-wrap justify-start gap-4 gap-y-8">
              {content.map((it, index) => (
                <Card
                  des={it.des}
                  heading={it.heading}
                  key={index}
                  tim={index}
                />
              ))}
            </motion.div>
            <div className="flex-center flex-1 flex-grow-[0.3] ">
              <div
                onClick={() =>
                  check.current.scrollIntoView({
                    behavior: "instant",
                    block: "end",
                    inline: "nearest",
                  })
                }
                className="flex-center relative z-10 h-[7rem] w-[7rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[35px] [&_svg]:w-[35px]"
              >
                <span className="absolute left-[1.9rem]">{left}</span>
                {left}
              </div>
            </div>
            <Customization isView={isView} slide1={slide1} />
          </div>
        </div>
        <div ref={check} className="sticky top-0 mt-16 h-5 w-full" />
        <Representation imgRef={imgRef} slide1={slide1} />
      </section>
    </>
  );
}

const Card = ({ heading, des, tim }) => {
  return (
    <motion.div
      initial={{ y: "150px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.1 * tim, ease: "easeInOut" }}
      id="card-anim"
      className="flex min-h-[20.5rem] w-full max-w-[21.5rem] flex-col justify-between border px-7 py-6 hover:border-pmRed"
    >
      <span className="h-[4.3rem] w-[4.3rem] rounded-lg bg-[#FFF1F1] " />
      <div className="flex flex-col gap-3">
        <h3 className="text-[27px] font-[700]">{heading}</h3>
        <p className="text-[20px] font-[500]">{des}</p>
      </div>
    </motion.div>
  );
};

export default Howitworks;
