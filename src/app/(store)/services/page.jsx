"use client";
import { bigArrow, left } from "@/Consonats";
import {
  AnimatePresence,
  cubicBezier,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function page() {
  const animTracker = useRef(null);
  const [slide1, setslide1] = useState(false);
  return (
    <section className="w-full">
      <div className="min-h-[500vh] w-full">
        <div className="flex-center sticky top-0 flex-col">
          <AnimatePresence>
            <Service slide1={slide1} />
          </AnimatePresence>

          <AnimationStateGiver
            target={animTracker}
            offset={"0.8"}
            setState={setslide1}
          >
            <AnimatePresence>
              {slide1 && <Slide1 slide1={slide1} animTracker={animTracker} />}
            </AnimatePresence>
          </AnimationStateGiver>
        </div>
        <span
          id="anim-tracker"
          ref={animTracker}
          className="absolute h-5 w-5 bg-pmRed"
        />
      </div>
    </section>
  );
}

export default page;

const AnimationStateGiver = ({
  offset,
  target,
  setState,
  children,
  counter,
}) => {
  const scroll = useScroll({
    target: target,
    offset: [`start ${offset}`, "end start"],
    layoutEffect: false,
  });
  const progress = useTransform(scroll.scrollYProgress, [0, 1], [false, true]);
  useMotionValueEvent(progress, "change", (e) => {
    counter ? setState((prev) => (e ? prev + 1 : prev - 1)) : setState(e);
  });

  return <>{children}</>;
};

const Service = ({ slide1 }) => {
  return (
    <motion.div
      animate={{ y: slide1 ? "-100vh" : 0 }}
      transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
      className="flex-center min-h-screen w-full flex-col gap-32"
    >
      <div className="flex-center flex-col gap-2">
        <motion.h1
          initial={{ opacity: 0, scale: 1.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
          className="text-[25px] font-[700] tracking-[4px]"
        >
          OUR SERVICES
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
          className="max-w-[25ch] text-center text-[75px] font-[700] leading-[75px] "
        >
          Branding, websites and design made with pride.
        </motion.h2>
      </div>
      <div className="flex-center flex-col gap-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
        >
          <Link
            href={"/qoute"}
            className="text-[35px] font-[700] text-pmRed underline underline-offset-4"
          >
            REQUEST A QOUTE
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
          className="flex-center relative z-10 mt-10 h-[7rem] w-[7rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[35px] [&_svg]:w-[35px] "
        >
          <div className="flex-center relative flex rotate-[-90deg]">
            <span className="absolute left-[-7px]">{left}</span>
            {left}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Slide1 = ({ slide1, animTracker }) => {
  const img = [0, 1, 2, 3, 4];

  return (
    <div className="flex-center absolute top-0 m-auto min-h-screen w-full  max-w-[1550px] gap-12 overflow-hidden px-5">
      <LeftSlide2 img={img} animTracker={animTracker} />
      <RightSlide2 animTracker={animTracker} />
    </div>
  );
};

const LeftSlide2 = ({ img, animTracker }) => {
  const [next, setnext] = useState(0);

  return (
    <div className={`relative flex flex-1 flex-grow-[0.5]`}>
      <div className="h-max rotate-[-180deg]">
        <motion.p
          initial={{ y: "-70vh", opacity: 0 }}
          animate={{ y: next === 5 ? "100vh" : 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: next > 3 ? "easeInOut" : [0, 0, 0.1, 0.9],
          }}
          style={{ writingMode: "tb" }}
          className="h-[8.5ch] whitespace-nowrap text-[35px] font-[700] leading-[35px] "
        >
          Our Services
        </motion.p>
      </div>

      <motion.div
        animate={{
          y: next < 3 ? 0 : next === 5 ? "-50%" : -8,
          x: next < 3 ? 0 : next === 5 ? "-50%" : -8,
          left: next === 5 ? "50%" : 0,
          top: next === 5 ? "50%" : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={`flex h-[627px] max-h-[627px] w-full max-w-[627px] flex-col ${next === 5 ? "absolute " : "relative w-full"}`}
      >
        {img.map((it, index) => {
          const animate = {
            y:
              next >= index
                ? next < 3
                  ? index + "0px"
                  : index * 5 + 8 + "px"
                : index + 1 + "00" + "vh",
            x: next < 3 ? index + "0px" : index * 5 + 8 + "px",
          };
          return (
            <AnimationStateGiver
              key={index}
              offset={(0.7 - index * 0.1).toFixed(2)}
              setState={setnext}
              target={animTracker}
              counter={true}
            >
              <motion.div
                initial={{ y: index === 0 ? "100vh" : index + "00" + "vh" }}
                animate={animate}
                transition={{
                  duration: index === 0 ? 1 : 1.5,
                  ease:
                    next < index
                      ? "easeIn"
                      : index === 0
                        ? [0, 0, 0.1, 0.9]
                        : "easeInOut",
                }}
                className="absolute left-0 top-0 z-20 h-[627px] w-[627px]"
                style={{ zIndex: next + "0" }}
              >
                <Image
                  src={`/services/${it}.png`}
                  key={index}
                  width={627}
                  height={627}
                  alt={`service-${index}`}
                />
              </motion.div>
            </AnimationStateGiver>
          );
        })}
      </motion.div>
    </div>
  );
};

const RightSlide2 = ({ animTracker }) => {
  const details = [
    {
      name: "Logo ",
      name2: "Design",
      des: "From personalized apparel to unique home decor, Print on Demand empowers you to bring your creative visions to life and captivate customers with one-of-a-kind products.   ",
    },
    {
      name: "Bussiness ",
      name2: "Card",
      des: "From personalized apparel to unique home decor, Print on Demand empowers you to bring your creative visions to life and captivate customers with one-of-a-kind products.   ",
    },
    {
      name: "UI/UX ",
      name2: "Design",
      des: "From personalized apparel to unique home decor, Print on Demand empowers you to bring your creative visions to life and captivate customers with one-of-a-kind products.   ",
    },
    {
      name: "Branding",
      des: "From personalized apparel to unique home decor, Print on Demand empowers you to bring your creative visions to life and captivate customers with one-of-a-kind products.   ",
    },
    {
      name: "Web & App ",
      name2: "Development",
      des: "From personalized apparel to unique home decor, Print on Demand empowers you to bring your creative visions to life and captivate customers with one-of-a-kind products.   ",
    },
  ];
  const [next, setnext] = useState(0);
  useEffect(() => {
    console.log(next);
  }, [next]);

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0, 0, 0.1, 0.9], delay: 0.15 }}
      className={`relative flex flex-1 flex-grow-[0.5] flex-col`}
    >
      {details.map((it, index) => {
        const animate = {
          y:
            next > index
              ? -(index + 120) + "vh"
              : next === index
                ? "0"
                : index + 1 + "00" + "vh",
        };

        return (
          <AnimationStateGiver
            key={index}
            offset={(0.7 - index * 0.1).toFixed(2)}
            setState={setnext}
            target={animTracker}
            counter={true}
          >
            <motion.div
              style={{ zIndex: next === index ? 10 : 0 }}
              className="absolute left-0 top-[50%] flex  translate-y-[-50%] flex-col justify-center gap-9"
            >
              <div>
                <motion.h2
                  initial={{ y: next === index ? "-50%" : index + "00" + "vh" }}
                  animate={animate}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  className="text-[105px] font-[700] leading-[105px] "
                >
                  {it.name}
                </motion.h2>
                {it.name2 && (
                  <motion.h2
                    initial={{
                      y: next === index ? "-50%" : index + "00" + "vh",
                    }}
                    animate={animate}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      delay: 0.02,
                    }}
                    className="text-[105px] font-[700] leading-[105px] "
                  >
                    {it.name2}
                  </motion.h2>
                )}
              </div>

              <motion.p
                initial={{ y: next === index ? "-50%" : index + "00" + "vh" }}
                animate={animate}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 0.05,
                }}
                className="max-w-[50ch] font-[600] leading-[18px]"
              >
                {it.des}
              </motion.p>

              <motion.span
                initial={{
                  y: next === index ? "-50%" : index + "00" + "vh",
                  opacity: 0,
                }}
                animate={{ ...animate, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 0.05,
                }}
                whileHover={{ rotate: 30, transition: { duration: 0.4 } }}
                className="mt-5 w-max cursor-pointer rounded-full border border-[#707070]"
              >
                {bigArrow}
              </motion.span>
            </motion.div>
          </AnimationStateGiver>
        );
      })}
    </motion.div>
  );
};
