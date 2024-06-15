"use client";
import { bigArrow, bigArrowLeft, left } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextAnimation } from "@/components/Mainstate(Animation)/MainStateAnimation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";

function page() {
  const { setanimating, animating } = useContext(ContextAnimation);
  const [slide, setslide] = useState(false);
  const [slideLast, setslideLast] = useState(false);
  const contactSlider = useRef(null);
  const scroll = useScroll({
    target: contactSlider,
    offset: ["start 0.8", "end -0.2"],
  });

  const scrollLast = useScroll({
    target: contactSlider,
    offset: ["start 0.5", "end -0.2"],
  });

  const slide1_Val = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    [false, true],
  );

  const slideLast_val = useTransform(
    scrollLast.scrollYProgress,
    [0, 1],
    [false, true],
  );

  useMotionValueEvent(slide1_Val, "change", (e) => {
    setslide(e);
  });

  useMotionValueEvent(slideLast_val, "change", (e) => {
    setslideLast(e);
  });

  return (
    <section className="relative min-h-[153vh]">
      <div className="sticky top-0 min-h-screen">
        <AnimatePresence>
          {!slide && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
              onAnimationComplete={() => {
                setanimating(false);
              }}
              onAnimationStart={() => {
                setanimating(true);
              }}
              className="flex-center min-h-[calc(100vh-66px)] flex-col gap-3"
            >
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
                className="animateH1 z-10"
              >
                Contact us
              </motion.h1>
              <div className="absolute bottom-0 left-[-4rem]">
                <Image
                  src={"/dots.png"}
                  alt="dots"
                  width={750}
                  height={500}
                  className="massive:w-[690px]"
                />
              </div>
              <motion.div
                initial={{ rotate: -90, y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: -90 }}
                transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
                className="flex-center relative top-20 z-10 mt-10 h-[7rem] w-[7rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[35px] [&_svg]:w-[35px] "
              >
                <span className="absolute left-[1.9rem]">{left}</span>
                {left}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {slide && (
          <>
            <div className="flex-center absolute left-[50%] top-[50%] m-auto min-h-screen w-full max-w-[1400px] translate-x-[-50%]  translate-y-[-50%] gap-0 massive:max-w-[1280px]">
              <div className="flex-1 flex-grow-[0.5]">
                <Contact setanimating={setanimating} slideLast={slideLast} />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: slideLast ? 1 : 0 }}
                transition={{
                  duration: slideLast ? 1.2 : 0.5,
                  ease: "easeInOut",
                }}
                className="flex-1 flex-grow-[0.4]"
              >
                <div className="flex w-full max-w-[600px] flex-col gap-10 border p-12 ">
                  <Holder
                    val1={"Info"}
                    redVal={"@"}
                    val2={"Hokrex.com"}
                    type={"EMAIL"}
                    text={
                      "Interactively grow empowered for process-centric total linkage."
                    }
                  />
                  <Holder
                    val1={"+1"}
                    redVal={"(323)"}
                    val2={" 509-3244"}
                    type={"PHONE"}
                    text={
                      "Distinctively disseminate focused solutions clicks-and-mortar ministate."
                    }
                  />
                  <Holder
                    val1={"Beam Ct, Milton,ON L9E 1L3, Canada"}
                    type={"LOCATION"}
                  />
                </div>
              </motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: slideLast ? 0 : 1 }}
              whileHover={{ rotate: 30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute bottom-36 right-10 cursor-pointer rounded-full border border-[#707070]"
            >
              {bigArrow}
            </motion.span>

            <FooterBlack slideLast={slideLast} nav={true} />
          </>
        )}
      </div>

      <div
        ref={contactSlider}
        id="contactSlider"
        className="h-3 w-3 bg-pmRed "
      />
    </section>
  );
}

export default page;

const Contact = ({ setanimating, slideLast }) => {
  return (
    <motion.div
      animate={{
        left: slideLast ? 0 : "50%",
        x: slideLast ? 0 : "-50%",
        y: "-50%",
      }}
      transition={{ duration: 0.6, ease: [0, 0, 0, 0.7] }}
      className="flex-center absolute left-[50%] top-[50%] z-20 w-[700px] translate-x-[-50%] translate-y-[-50%] flex-col gap-20 px-5 massive:gap-10 massive:px-2"
    >
      <div className="flex-center flex-col">
        <motion.h2
          initial={{ opacity: 0, scale: 1.4, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.9 }}
          className="text-[25px] font-[700] tracking-[5px] massive:text-[20px]"
          onAnimationComplete={() => {
            setTimeout(() => {
              setanimating(false);
            }, 3000);
          }}
          onAnimationStart={() => {
            setanimating(true);
          }}
        >
          CONTACT US
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.9 }}
          className="z-10 mt-3 text-center text-[70px] font-[700] leading-[75px] massive:text-[50px]  massive:leading-[50px]"
        >
          Have questions?
          <br /> Get in touch
        </motion.h3>
      </div>
      <motion.form
        action={"#"}
        className="flex-center w-full max-w-[500px] flex-col gap-3 "
      >
        <div className="flex w-full flex-wrap justify-between gap-y-8 ">
          <motion.input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.8 }}
            type="text"
            required={true}
            placeholder="First Name"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <motion.input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.85 }}
            type="text"
            required={true}
            placeholder="Last Name"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />

          <motion.input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.9 }}
            type="email"
            required={true}
            placeholder="Email"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <motion.input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.95 }}
            type="number"
            maxLength={15}
            minLength={7}
            required={true}
            placeholder="Phone"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.9 }}
            cols="30"
            rows="4"
            className="w-full resize-none border-b border-[#E5E5E5] py-1 pl-2 outline-none hover:border-black focus:border-black "
            required={true}
            placeholder="Message."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.95 }}
        >
          <CustomCheckbox
            text={"Save this information for next time"}
            fontSize={"sm"}
            type="small"
            textColor="#707070"
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 1 }}
          className="mt-10 w-[11rem] rounded-3xl border border-black px-6 py-[0.65rem] text-[17px] font-[500] text-black"
        >
          Submit request
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

const Holder = ({ type, val1, val2, redVal, text }) => {
  return (
    <div
      className={`flex w-full flex-col  ${text ? "border-b border-[#E5E5E5] pb-10" : ""}`}
    >
      <div className="opacity-[0.5] contrast-0 hover:opacity-100 hover:contrast-100">
        <p className="text-[25px] font-[700] tracking-[3px]">{type}</p>
        <h3 className="mt-3 text-[40px] font-[700] leading-[45px]  massive:text-[33px] massive:leading-[33px]">
          {val1}
          <span className="text-pmRed">{redVal}</span>
          {val2}
        </h3>
        {text && <p className="mt-1 text-[1rem] leading-[20px]">{text}</p>}
      </div>
    </div>
  );
};

const FooterBlack = ({ slideLast, nav }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: slideLast ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-black px-7 py-2.5"
    >
      <span className="text-[12px] text-white ">©2024, Sublimatics Inc.</span>
      {nav && (
        <ul className="flex-center list-none gap-5 [&_li]:cursor-pointer  [&_li]:whitespace-nowrap  [&_li]:text-[14px] [&_li]:font-[500] [&_li]:text-white hover:[&_li]:text-pmRed ">
          <Link href={"/products"}>
            <li>Products</li>
          </Link>
          <li>Services</li>
          <Link href={"/about"}>
            <li>About us</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact us</li>
          </Link>
        </ul>
      )}
      <span className="text-[12px] text-white">Made by Hokrex</span>
    </motion.div>
  );
};

export { FooterBlack };
