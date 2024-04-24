"use client";
import { brands, left, left2 } from "@/Consonats";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useAnimate,
} from "framer-motion";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import Our_products from "./Our_products";
import { ContextAnimation } from "@/components/Mainstate(Animation)/MainStateAnimation";

function Representation({ imgRef }) {
  const { setanimating } = useContext(ContextAnimation);
  const [slide, setslide] = useState(true);
  const [view, setview] = useState(false);
  const [view1, setview1] = useState(false);
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["center 0.2", "start start"],
  });

  const anim2 = useScroll({
    target: target,
    offset: ["start 0.7", "start start"],
  });

  const slide2 = useScroll({
    target: target,
    offset: ["start -0.2", "end -0.2"],
  });

  const value = useTransform(scrollYProgress, [0, 1], [false, true]);
  const val_anim2 = useTransform(anim2.scrollYProgress, [0, 1], [false, true]);
  const slideVal = useTransform(slide2.scrollYProgress, [0, 1], [true, false]);

  useMotionValueEvent(value, "change", (e) => {
    setview(e);
  });
  useMotionValueEvent(val_anim2, "change", (e) => {
    setview1(e);
  });
  useMotionValueEvent(slideVal, "change", (e) => {
    setslide(e);
  });

  return (
    <div className="w-full min-h-[300vh] z-20 relative mt-52">
      <Slides
        view={view}
        view2={view1}
        imgRef={imgRef}
        slide={slide}
        setanimating={setanimating}
      />
      <div ref={target} className="bg-purple-900 w-2 h-2"></div>
    </div>
  );
}

const Slides = ({ view, view2, imgRef, slide, setanimating }) => {
  const [furtherAnimate, setfurtherAnimate] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    slide ? animateReverseFunc() : animateFunc();
  }, [slide]);

  const animateFunc = async () => {
    setanimating(true);
    await animate(
      scope.current,
      { opacity: 0 },
      { duration: 1.2, ease: "easeInOut" }
    );
    scope.current.style.display = "none";
    setfurtherAnimate(true);
    setanimating(false);
  };
  const animateReverseFunc = async () => {
    setfurtherAnimate(false);
  };

  // useEffect(() => {
  //   setanimating(view);
  // }, [view]);
  // useEffect(() => {
  //   setanimating(view2);
  // }, [view2]);

  return (
    <div className="w-full overflow-hidden sticky top-0 ">
      <motion.div
        ref={scope}
        className="flex  justify-end max-w-[1300px] z-20 w-full min-h-screen mx-auto relative "
      >
        <motion.div
          animate={{
            left: view ? 0 : "50%",
            x: view ? 0 : "-50%",
          }}
          onAnimationComplete={() => {
            setanimating(false);
          }}
          onAnimationStart={() => {
            setanimating(true);
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
            onAnimationComplete={() => {
              setanimating(false);
            }}
            onAnimationStart={() => {
              setanimating(true);
            }}
            src={"/tool.png"}
            alt="tool"
            width={1200}
            height={1200}
            className="h-max"
          />

          <div className="flex flex-col gap-5 max-w-[640px] py-5">
            <motion.h3
              initial={{ y: 30, opacity: 0.5 }}
              animate={{
                y: view2 ? "0" : "50px",
                opacity: view2 ? 1 : 0.5,
              }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-[75px] font-[700] leading-[75px]"
            >
              Unleash Your 
            </motion.h3>
            <motion.p
              initial={{ y: 30 }}
              animate={{
                y: view2 ? "0" : "50px",
                opacity: view2 ? 1 : 0.5,
              }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-[18px] font-[500] leading-[24px] "
            >
              From personalized apparel to unique home decor, Print on Demand
              empowers you to bring your creative visions to life and captivate
              customers with one-of-a-kind products. 
            </motion.p>
            <motion.div
              initial={{ y: 30 }}
              animate={{
                y: view2 ? "0" : "50px",
                opacity: view2 ? 1 : 0.5,
              }}
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
      </motion.div>
      <AnimatePresence
        onExitComplete={async () => {
          scope.current.style.display = "flex";
          await animate(
            scope.current,
            { opacity: 1 },
            { duration: 1.2, ease: "easeInOut" }
          );
          setanimating(false);
        }}
      >
        {furtherAnimate && <Our_products />}
      </AnimatePresence>
    </div>
  );
};

export default Representation;
