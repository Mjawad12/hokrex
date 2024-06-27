"use client";
import { bigArrow, left } from "@/Consonats";
import { ContextAnimation } from "@/components/Mainstate(Animation)/MainStateAnimation";
import FooterWrapper from "@/components/pages/home/FooterWrapper";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";

function page() {
  const animTracker = useRef(null);
  const [slide1, setslide1] = useState(false);
  const [slide2, setslide2] = useState(false);
  const [slide3, setslide3] = useState(false);
  const { setanimating, DisableScroll, Enablescroll } =
    useContext(ContextAnimation);

  return (
    <section className="w-full">
      <div className="min-h-[310vh] w-full">
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
              {slide1 && (
                <Slide1
                  animTracker={animTracker}
                  setanimating={setanimating}
                  setslide2={setslide2}
                />
              )}
            </AnimatePresence>
          </AnimationStateGiver>
          <AnimationStateGiver
            offset={"-0.9"}
            setState={setslide2}
            target={animTracker}
          >
            <AnimatePresence>
              <Slide2 slide2={slide2} />
            </AnimatePresence>
          </AnimationStateGiver>
          <AnimationStateGiver
            offset={"-1"}
            setState={setslide3}
            target={animTracker}
          >
            <FooterWrapper
              footerPage={slide3}
              backgroundBlur={true}
              DisableScroll={DisableScroll}
              Enablescroll={Enablescroll}
            />
          </AnimationStateGiver>
        </div>
        <span
          id="anim-tracker"
          ref={animTracker}
          className="absolute h-5 w-5"
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
  const { DisableScroll, Enablescroll } = useContext(ContextAnimation);
  const scroll = useScroll({
    target: target,
    offset: [`start ${offset}`, "end -1"],
    layoutEffect: false,
  });
  const progress = useTransform(scroll.scrollYProgress, [0, 1], [false, true]);
  useMotionValueEvent(progress, "change", (e) => {
    counter ? setState((prev) => (e ? prev + 1 : prev - 1)) : setState(e);
    DisableScroll();
    console.log(offset);
    setTimeout(
      () => {
        Enablescroll();
      },
      offset === "-0.9" ? 3000 : 1500,
    );
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
          onClick={(e) =>
            e.target.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          className="flex-center relative z-10 mt-10 h-[7rem] w-[7rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[35px] [&_svg]:w-[35px] "
        >
          <div className="flex-center relative flex rotate-[-90deg]">
            <span className="pointer-events-none absolute left-[-7px]">
              {left}
            </span>
            {left}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Slide1 = ({ animTracker, setslide2 }) => {
  const img = [0, 1, 2, 3, 4];
  const [nextLeft, setnextLeft] = useState(0);
  const [nextRight, setnextRight] = useState(0);
  return (
    <div
      id="sl-1"
      className="flex-center absolute top-0 m-auto min-h-screen w-full  max-w-[1550px] gap-12 overflow-hidden px-5"
    >
      <LeftSlide
        img={img}
        animTracker={animTracker}
        next={nextLeft}
        setnext={setnextLeft}
      />
      <RightSlide
        animTracker={animTracker}
        next={nextRight}
        setnext={setnextRight}
        setouterNext={setnextLeft}
      />
    </div>
  );
};

const LeftSlide = ({ img, animTracker, next, setnext }) => {
  return (
    <div className={` flex h-[627px] max-h-[627px] flex-1 flex-grow-[0.5]`}>
      <div className="h-max rotate-[-180deg]">
        <motion.p
          initial={{ y: "-70vh", opacity: 0 }}
          animate={{ y: next === 5 ? "100vh" : 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: next > 3 ? "easeInOut" : [0, 0, 0.1, 0.9],
          }}
          exit={{ y: "-70vh", opacity: 0 }}
          style={{ writingMode: "tb", "-webkit-writing-mode": "vertical-lr" }}
          className="h-[8.5ch] whitespace-nowrap text-[35px] font-[700] leading-[35px] "
        >
          Our Services
        </motion.p>
      </div>

      <motion.div
        initial={{ top: "50%", left: 55, x: 0, y: "-50%" }}
        animate={{
          x: next === 5 ? "-50%" : 0,
          left: next === 5 ? "50%" : 55,
          y: "-50%",
          top: "50%",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: next === 5 && 0.4,
        }}
        className={`absolute left-10 top-[50%] flex h-[627px] max-h-[627px] w-full max-w-[627px] translate-y-[-50%] flex-col`}
      >
        {img.map((it, index) => {
          const animate = {
            y:
              next >= index
                ? next < 3
                  ? index + "0px"
                  : index * 5 + 8 + "px"
                : "100vh",
            x: next < 3 ? index + "0px" : index * 5 + 8 + "px",
          };
          return (
            <AnimationStateGiver
              key={index}
              offset={(0.5 - index * 0.3).toFixed(1)}
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
                exit={{ y: "100vh", opacity: 0 }}
                className="flex-center absolute left-0 top-0 z-20 h-[627px] w-[627px] overflow-hidden"
                style={{ zIndex: next + "0" }}
              >
                <Image
                  src={`/services/${it}.png`}
                  key={index}
                  width={5000}
                  height={5000}
                  alt={`service-${index}`}
                  className={
                    index === 4 ? "h-[627px] w-[988px] max-w-[988px]" : ""
                  }
                />
              </motion.div>
            </AnimationStateGiver>
          );
        })}
      </motion.div>
    </div>
  );
};

const RightSlide = ({ animTracker, next, setnext, setouterNext }) => {
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
  const [lastScroll, setlastScroll] = useState(0);
  useEffect(() => {
    if (next === 3) {
      setlastScroll(window.scrollY);
    }
  }, [next]);

  useEffect(() => {
    console.log(lastScroll);
    console.log(next);
  }, [lastScroll]);

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0, 0, 0.1, 0.9], delay: 0.15 }}
      className={`relative flex flex-1 flex-grow-[0.5] flex-col `}
    >
      {details.map((it, index) => {
        const animate = {
          y: next > index ? -120 + "vh" : next === index ? "0" : "100vh",
        };
        const exit = index === 0 && {
          y: "50vh",
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        };

        return (
          <AnimationStateGiver
            key={index}
            offset={(0.5 - index * 0.3).toFixed(1)}
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
                  initial={{ y: next === index ? "-50%" : "100" + "vh" }}
                  animate={animate}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  id={`scr-giv-${index}`}
                  exit={exit}
                  className="text-[105px] font-[700] leading-[105px] "
                >
                  {it.name}
                </motion.h2>
                {it.name2 && (
                  <motion.h2
                    initial={{
                      y: next === index ? "-50%" : "100" + "vh",
                    }}
                    animate={animate}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      delay: 0.02,
                    }}
                    exit={exit}
                    className="text-[105px] font-[700] leading-[105px] "
                  >
                    {it.name2}
                  </motion.h2>
                )}
              </div>

              <motion.p
                initial={{ y: next === index ? "-50%" : "100" + "vh" }}
                animate={animate}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 0.05,
                }}
                exit={exit}
                className="max-w-[50ch] font-[600] leading-[18px]"
              >
                {it.des}
              </motion.p>

              <motion.span
                onClick={(e) => {
                  if (index !== 4) {
                    window.scrollTo({
                      top: Math.round(
                        document
                          .querySelector(`#scr-giv-${index + 1}`)
                          .getBoundingClientRect().top +
                          document.documentElement.scrollTop,
                      ),
                      behavior: "smooth",
                    });
                  } else {
                    window.scrollTo(0, lastScroll);
                    window.scrollTo(0, window.scrollY + 500);
                  }
                }}
                initial={{
                  y: next === index ? "-50%" : "100vh",
                  opacity: 0,
                }}
                animate={{ ...animate, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 0.05,
                }}
                exit={exit}
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

const Slide2 = ({ slide2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: slide2 ? 1 : 0 }}
      transition={{ duration: 0, delay: !slide2 ? 1.2 : 0 }}
      className={`flex-center absolute top-0 min-h-screen w-full overflow-hidden`}
    >
      <motion.div
        initial={{
          width: 627,
          height: 627,
          left: "calc(50% + 30px)",
          top: "calc(50% + 30px)",
          y: "-50%",
          x: "-50%",
        }}
        animate={{
          width: slide2 ? "100vw" : "627px",
          height: slide2 ? "100vh" : "627px",
          y: "-50%",
          x: "-50%",
          left: slide2 ? "50%" : "calc(50% + 30px)",
          top: slide2 ? "50%" : "calc(50% + 30px)",
        }}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
        }}
        className="flex-center absolute overflow-hidden"
      >
        <motion.img
          animate={{
            width: slide2 ? "100vw" : "988px",
            height: slide2 ? "100vh" : "627px",
          }}
          className="h-[627px] w-[988px] max-w-[100vw]"
          transition={{
            duration: 1.3,
            ease: "easeInOut",
          }}
          src="/services/4.png"
          alt="services-4"
        />
      </motion.div>
      <QouteCard slide2={slide2} />
    </motion.div>
  );
};

const QouteCard = ({ slide2 }) => {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: slide2 ? "0" : "100vh", opacity: slide2 ? 1 : 0 }}
      transition={{
        duration: 1.5,
        delay: !slide2 ? 0 : 1.2,
        ease: "easeInOut",
      }}
      id="bg-filter-blur-qoute"
      style={{ boxShadow: " 0px 4px 23.2px 0px #00000040", filter: "blur(23)" }}
      className="flex-center relative  w-full max-w-[1100px] flex-col gap-6 overflow-hidden rounded-[40px] border border-[#FFFFFF80] py-16"
    >
      <h4 className="max-w-[15ch] text-center text-[68px] font-[700] leading-[70px] text-white">
        Get Free Quote for <span className="text-[65px]">Desired Services</span>
      </h4>
      <p className="max-w-[50ch] text-center text-[17px] font-[500] text-white">
        From personalized apparel to unique home decor, Print on Demand empowers
        you to bring your creative visions to life and captivate customers with
        one-of-a-kind products. 
      </p>
      <Link
        href="/qoute"
        className="btn-Primary mt-10 border-white bg-white px-7 py-[0.6rem]"
      >
        Request a qoute
      </Link>
    </motion.div>
  );
};
