"use client";
import { brands, left } from "@/Consonats";
import {
  motion,
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

function Representation({ imgRef, slide1 }) {
  const { setanimating } = useContext(ContextAnimation);
  const [slide, setslide] = useState(true);
  const [view, setview] = useState(false);
  const [view1, setview1] = useState(false);
  const [contactPage, setcontactPage] = useState(false);
  const [footerPage, setfooterPage] = useState(false);
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start 0.2", "end start"],
  });

  const anim2 = useScroll({
    target: target,
    offset: ["start 0.7", "start start"],
  });

  const slide2 = useScroll({
    target: target,
    offset: ["start -0.1", "end -0.2"],
  });

  const contactSlide = useScroll({
    target: target,
    offset: ["start -0.5", "end -0.7"],
  });

  const footerSlide = useScroll({
    target: target,
    offset: ["start -0.95", "end -2"],
  });

  const value = useTransform(scrollYProgress, [0, 1], [false, true]);
  const val_anim2 = useTransform(anim2.scrollYProgress, [0, 1], [false, true]);
  const slideVal = useTransform(slide2.scrollYProgress, [0, 1], [true, false]);
  const ContactVal = useTransform(
    contactSlide.scrollYProgress,
    [0, 1],
    [false, true],
  );
  const footerVal = useTransform(
    footerSlide.scrollYProgress,
    [0, 1],
    [false, true],
  );

  useMotionValueEvent(value, "change", (e) => {
    setview(e);
  });
  useMotionValueEvent(val_anim2, "change", (e) => {
    setview1(e);
  });
  useMotionValueEvent(slideVal, "change", (e) => {
    setslide(e);
  });
  useMotionValueEvent(ContactVal, "change", (e) => {
    setcontactPage(e);
  });
  useMotionValueEvent(footerVal, "change", (e) => {
    setfooterPage(e);
  });

  return (
    <div
      ref={imgRef}
      id="slide-1"
      className="relative z-20 min-h-[300vh] w-full"
    >
      <Slides
        view={view}
        view2={view1}
        slide={slide}
        setanimating={setanimating}
        setcontactPage={setcontactPage}
        contactPage={contactPage}
        footerPage={footerPage}
        slide1={slide1}
      />
      <div ref={target} className="h-2 w-2"></div>
    </div>
  );
}

const Slides = ({
  view,
  view2,
  slide,
  setanimating,
  contactPage,
  setcontactPage,
  footerPage,
  slide1,
}) => {
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
      { duration: 1.2, ease: "easeInOut" },
    );
    scope.current.style.display = "none";
    setanimating(false);
    setfurtherAnimate(true);
  };
  const animateReverseFunc = async () => {
    setfurtherAnimate(false);
  };

  return (
    <div className="sticky top-0 w-full overflow-hidden ">
      <motion.div
        ref={scope}
        className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1300px] justify-end "
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
          className={`flex-center absolute left-[50%] top-0 min-h-screen flex-1 translate-x-[-50%] flex-col`}
        >
          <motion.div
            animate={{ height: view2 ? "375px" : "100vh" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`flex-center w-full`}
          >
            <motion.img
              animate={{
                minWidth: view2 ? "600px" : "1200px",
                width: view2 ? "600px" : "1200px",
                x: view2 ? -40 : 0,
                y: slide1 ? "0" : "100%",
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
          </motion.div>
          <div className="flex max-w-[640px] flex-col gap-5 py-5">
            <motion.h3
              initial={{ y: 30, opacity: 0.5 }}
              animate={{
                y: view2 ? "0" : "50px",
                opacity: view2 ? 1 : 0,
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
                className="w-max rounded-3xl border border-black px-6 py-[0.7rem] text-[17px] font-[500] text-black "
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
              className="flex-center relative z-20 flex-1 flex-grow-[0.5] flex-col"
            >
              <motion.div
                initial={{ x: 10, y: -10, rotate: 270 }}
                animate={{ x: 0, y: 0, rotate: 270 }}
                exit={{ x: 10, y: -10, rotate: 270 }}
                onClick={() => window.scrollTo(0, window.scrollY + 250)}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="flex-center relative h-[7rem] w-[7rem] rotate-[270deg] cursor-pointer rounded-full border bg-white [&_svg]:h-[35px] [&_svg]:w-[35px]"
              >
                <span className="absolute left-[1.9rem]">{left}</span>
                {left}
              </motion.div>
              <div
                id="anim-headline-loop"
                className="absolute bottom-[450px] left-[-500px] flex rotate-[-23deg] gap-0"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="mr-4 flex w-max gap-4"
                >
                  {brands.map((it, index) => (
                    <span
                      style={{
                        filter: "contrast(0) brightness(1.7) grayscale(1)",
                      }}
                      key={index}
                      className="flex-center w-[12rem] border px-7 hover:!filter-none "
                    >
                      {it}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ x: "-200%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 10,
                  }}
                  className="flex w-max gap-4"
                >
                  {brands.map((it, index) => (
                    <span
                      style={{
                        filter: "contrast(0) brightness(1.7) grayscale(1)",
                      }}
                      key={index}
                      className="flex-center w-[12rem] border px-7 hover:!filter-none "
                    >
                      {it}
                    </span>
                  ))}
                </motion.div>
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
            { duration: 1.2, ease: "easeInOut" },
          );
        }}
      >
        {furtherAnimate && (
          <Our_products
            setanimating={setanimating}
            contactPage={contactPage}
            setcontactPage={setcontactPage}
            footerPage={footerPage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Representation;
