"use client";
import { left } from "@/Consonats";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Customization from "./Customization";
import Image from "next/image";

function Howitworks() {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: true, amount: "80px" });
  const check = useRef(null);
  var isView = useInView(check, { amount: "some" });

  const content = [
    {
      heading: "Choose your product",
      des: "Select a product our wide range of products.",
    },
    {
      heading: "Customise it",
      des: "Customise your product to your liking using our tool.",
    },
    {
      heading: "Approve the sample",
      des: "Work with our designer to create the perfect product.",
    },
    {
      heading: "Get at your doorstep",
      des: "Get your product delivered to your doorstep.",
    },
  ];

  useEffect(() => {
    console.log(isInview);
    isInview &&
      animate(
        "#card-anim",
        { y: 0, opacity: 1 },
        { duration: 2, delay: stagger(0.3), ease: "easeInOut" }
      );
  }, [isInview]);

  return (
    <>
      <section className="w-full overflow-hidden relative">
        <div className="max-w-[1220px] w-full flex-center flex-col gap-24 m-auto pt-28 ">
          <div className="flex-center flex-col gap-3">
            <motion.p
              initial={{ scale: 1.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: "50px", once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-[26px] font-[700] tracking-[3px]"
            >
              HOW IT WORK
            </motion.p>
            <motion.h2
              id="v-c-h"
              initial={{ y: "90px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: "50px", once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-[74px] font-[700] text-center max-w-[25ch] leading-[72px]"
            >
              Get your Custom printed product in just 4 easy steps.
            </motion.h2>
          </div>
          <div className="w-full flex justify-between items-center">
            <motion.div
              id="v-c-h"
              ref={scope}
              className="flex-1 flex-grow-[0.8] flex flex-wrap gap-4 gap-y-8 z-10 relative"
            >
              <div id="v-c-h-1" className="opacity-0" />

              {content.map((it, index) => (
                <Card des={it.des} heading={it.heading} key={index} />
              ))}
            </motion.div>
            <div className="flex-1 flex-grow-[0.3] flex-center ">
              <div
                onClick={() =>
                  check.current.scrollIntoView({
                    behavior: "instant",
                    block: "end",
                    inline: "nearest",
                  })
                }
                className="flex-center scale-x-[-1] rounded-full border w-[7rem] h-[7rem] relative [&_svg]:w-[35px] [&_svg]:h-[35px] cursor-pointer z-10"
              >
                <span className="absolute left-[1.9rem]">{left}</span>
                {left}
              </div>
            </div>
            <Customization isView={isView} />
          </div>
        </div>
        <div ref={check} className="w-5 h-5 mt-16 sticky top-0" />
      </section>
    </>
  );
}

const Card = ({ heading, des }) => {
  return (
    <motion.div
      initial={{ y: "150px", opacity: 0 }}
      id="card-anim"
      className="max-w-[21.5rem] min-h-[20.5rem] px-7 py-6 flex flex-col justify-between hover:border-pmRed border"
    >
      <span className="w-[4.3rem] h-[4.3rem] bg-[#FFF1F1] rounded-lg " />
      <div className="flex flex-col gap-3">
        <h3 className="text-[27px] font-[700]">{heading}</h3>
        <p className="text-[20px] font-[500]">{des}</p>
      </div>
    </motion.div>
  );
};

export default Howitworks;
