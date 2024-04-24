"use client";
import { brands, left, left2 } from "@/Consonats";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Representation({ imgRef }) {
  const [view, setview] = useState(false);
  const [view1, setview1] = useState(false);
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["center 0.3", "start start"],
  });

  const anim2 = useScroll({
    target: target,
    offset: ["start 0.7", "start start"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [false, true]);
  const val_anim2 = useTransform(anim2.scrollYProgress, [0, 1], [false, true]);

  useMotionValueEvent(value, "change", (e) => {
    setview(e);
  });
  useMotionValueEvent(val_anim2, "change", (e) => {
    setview1(e);
  });

  return (
    <div className="w-full min-h-[200vh] z-20 relative mt-52">
      <ImageSection view={view} view2={view1} imgRef={imgRef} />
      <div ref={target} className="bg-purple-900 w-5 h-5"></div>
    </div>
  );
}

const ImageSection = ({ view, view2, imgRef }) => {
  return (
    <div className="w-full overflow-hidden sticky top-0 ">
      <div className="flex  justify-end max-w-[1300px] z-20 w-full min-h-screen mx-auto relative ">
        <motion.div
          animate={{
            left: view ? 0 : "50%",
            x: view ? 0 : "-50%",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`flex-center flex-col flex-1 absolute left-[50%] translate-x-[-50%] top-0 min-h-screen`}
        >
          <motion.img
            ref={imgRef}
            animate={{
              minWidth: view2 ? "600px" : "1200px",
              width: view2 ? "600px" : "1200px",
              x: view2 ? -40 : 0,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            src={"/tool.png"}
            alt="tool"
            width={1200}
            height={1200}
            className="h-max"
          />

          <div className="flex flex-col gap-5 max-w-[640px] py-5">
            <motion.h3
              initial={{ y: 30, opacity: 0.5 }}
              animate={{ y: view2 ? "0" : "50px", opacity: view2 ? 1 : 0.5 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-[75px] font-[700] leading-[75px]"
            >
              Unleash Your 
            </motion.h3>
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: view2 ? "0" : "50px", opacity: view2 ? 1 : 0.5 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-[18px] font-[500] leading-[24px] "
            >
              From personalized apparel to unique home decor, Print on Demand
              empowers you to bring your creative visions to life and captivate
              customers with one-of-a-kind products. 
            </motion.p>
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: view2 ? "0" : "50px", opacity: view2 ? 1 : 0.5 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="mt-8"
            >
              <Link
                href={"/products"}
                className="px-6 py-[0.7rem] border border-black text-black rounded-3xl font-[500] text-[17px] w-max "
              >
                View Products
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {view && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex-center flex-col flex-1 flex-grow-[0.5] relative z-20"
            >
              <motion.div
                initial={{ x: 10, y: -10, rotate: 270 }}
                animate={{ x: 0, y: 0, rotate: 270 }}
                exit={{ x: 10, y: -10, rotate: 270 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="flex-center rotate-[270deg] rounded-full border w-[7rem] h-[7rem] relative [&_svg]:w-[35px] [&_svg]:h-[35px] cursor-pointer bg-white"
              >
                <span className="absolute left-[1.9rem]">{left}</span>
                {left}
              </motion.div>

              <div className="flex w-max absolute rotate-[-20deg] gap-4 bottom-[82px] left-[-454px] ">
                {brands.map((it, index) => (
                  <span
                    style={{
                      filter: "contrast(0) brightness(1.7) grayscale(1)",
                    }}
                    key={index}
                    className="flex-center border max-w-[10rem] w-full px-7 hover:!filter-none "
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Representation;
