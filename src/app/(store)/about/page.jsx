"use client";
import { aboutDetails, left } from "@/Consonats";
import { ContextAnimation } from "@/components/Mainstate(Animation)/MainStateAnimation";
import ContactBox from "@/components/pages/home/ContactBox";
import FooterWrapper from "@/components/pages/home/FooterWrapper";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";

function page() {
  const { setanimating } = useContext(ContextAnimation);

  const animator = useRef(null);
  const [fir_AnimState, setfir_AnimState] = useState(false);
  const [Sec_AnimState, setSec_AnimState] = useState(false);
  const [Thir_AnimState, setThir_AnimState] = useState(false);
  const [For_AnimState, setFor_AnimState] = useState(false);
  const [Fif_AnimState, setFif_AnimState] = useState(false);
  const [Six_AnimState, setSix_AnimState] = useState(false);
  const [Sev_AnimState, setSev_AnimState] = useState(false);

  const scroll = useScroll({
    target: animator,
    offset: ["start 0.8", "end start"],
  });
  const scroll2 = useScroll({
    target: animator,
    offset: ["start 0.6", "end start"],
  });
  const scroll3 = useScroll({
    target: animator,
    offset: ["start 0.4", "end start"],
  });
  const scroll4 = useScroll({
    target: animator,
    offset: ["start 0.2", "end start"],
  });
  const scroll5 = useScroll({
    target: animator,
    offset: ["start 0", "end start"],
  });
  const scroll6 = useScroll({
    target: animator,
    offset: ["start -0.1", "end -1"],
  });
  const scroll7 = useScroll({
    target: animator,
    offset: ["start -0.2", "end -1"],
  });
  const fir_Anim = useTransform(scroll.scrollYProgress, [0, 1], [false, true]);
  const Sec_Anim = useTransform(scroll2.scrollYProgress, [0, 1], [false, true]);
  const Thir_Anim = useTransform(
    scroll3.scrollYProgress,
    [0, 1],
    [false, true],
  );
  const For_Anim = useTransform(scroll4.scrollYProgress, [0, 1], [false, true]);
  const Fif_Anim = useTransform(scroll5.scrollYProgress, [0, 1], [false, true]);
  const Six_Anim = useTransform(scroll6.scrollYProgress, [0, 1], [false, true]);
  const Sev_Anim = useTransform(scroll7.scrollYProgress, [0, 1], [false, true]);

  useMotionValueEvent(fir_Anim, "change", (e) => {
    setfir_AnimState(e);
  });
  useMotionValueEvent(Sec_Anim, "change", (e) => {
    setSec_AnimState(e);
  });
  useMotionValueEvent(Thir_Anim, "change", (e) => {
    setThir_AnimState(e);
  });
  useMotionValueEvent(For_Anim, "change", (e) => {
    setFor_AnimState(e);
  });
  useMotionValueEvent(Fif_Anim, "change", (e) => {
    setFif_AnimState(e);
  });
  useMotionValueEvent(Six_Anim, "change", (e) => {
    setSix_AnimState(e);
  });
  useMotionValueEvent(Sev_Anim, "change", (e) => {
    setSev_AnimState(e);
  });

  return (
    <main className="flex w-full flex-col">
      <section className="relative flex min-h-[230vh] flex-col gap-3">
        <div className="sticky top-0 min-h-[calc(100vh-73px)] w-full ">
          <About
            fir_AnimState={fir_AnimState}
            Sec_AnimState={Sec_AnimState}
            setanimating={setanimating}
            setfir_AnimState={setfir_AnimState}
            setSec_AnimState={setSec_AnimState}
          />
          {fir_AnimState && (
            <Slide2
              Sec_AnimState={Sec_AnimState}
              Thir_AnimState={Thir_AnimState}
              For_AnimState={For_AnimState}
              Fif_AnimState={Fif_AnimState}
              setanimating={setanimating}
            />
          )}
          <AnimatePresence>
            {Fif_AnimState && (
              <Slide3
                Fif_AnimState={Fif_AnimState}
                Six_AnimState={Six_AnimState}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {Six_AnimState && (
              <Slide4
                Six_AnimState={Six_AnimState}
                setanimating={setanimating}
              />
            )}
          </AnimatePresence>
          <FooterWrapper
            footerPage={Sev_AnimState}
            setanimating={setanimating}
          />
        </div>
        <span ref={animator} className="relative z-30 h-7 w-7" />
      </section>
    </main>
  );
}

export default page;

const About = ({
  fir_AnimState,
  Sec_AnimState,
  setanimating,
  setfir_AnimState,
  setSec_AnimState,
}) => {
  return (
    <div className="flex-center min-h-screen flex-col gap-3">
      <motion.h1
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: fir_AnimState ? 0 : 1 }}
        transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
        className="animateH1 z-10"
      >
        About us
      </motion.h1>
      <motion.div
        animate={{ opacity: fir_AnimState ? 0 : 1 }}
        className="absolute bottom-0 left-0"
      >
        <Image src={"/dots.png"} alt="dots" width={650} height={650} />
      </motion.div>

      <motion.div
        onClick={(e) => {
          !fir_AnimState ? setfir_AnimState(true) : setSec_AnimState(true);
          window.scrollTo(0, window.scrollY + 120);
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: fir_AnimState ? (Sec_AnimState ? "-100vh" : -137) : 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: Sec_AnimState ? [0.4, 0.5, 0, 0] : [0, 0, 0.2, 0.8],
        }}
        onAnimationStart={() => setanimating(true)}
        onAnimationComplete={() => setanimating(false)}
        className="flex-center relative top-20 z-10 mt-10 h-[7rem] w-[7rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[35px] [&_svg]:w-[35px] "
      >
        <div className="flex-center relative flex rotate-[-90deg]">
          <span className="absolute left-[-7px]">{left}</span>
          {left}
        </div>
      </motion.div>
    </div>
  );
};

const Slide2 = ({
  Sec_AnimState,
  Thir_AnimState,
  For_AnimState,
  Fif_AnimState,
  setanimating,
}) => {
  return (
    <div className="absolute top-0 flex min-h-screen w-full flex-col items-center gap-20 overflow-hidden Lar:gap-12">
      <motion.div
        initial={{ opacity: 0.5, y: "100vh" }}
        animate={{ opacity: 1, y: Sec_AnimState ? "-500%" : 0 }}
        transition={{
          duration: 1.2,
          ease: Sec_AnimState ? [0.4, 0.5, 0, 0] : [0, 0.5, 0.3, 1],
        }}
        className="flex-center mt-20 flex-col gap-3"
      >
        <p className="text-[26px] font-[600] uppercase leading-[28px] tracking-[3px]">
          It all started with a vision to be different.
        </p>
        <h2 className="text-[66px] font-[700] leading-[70px]">
          From The Ground Up.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0.5, y: "100vh" }}
        animate={{
          opacity: Sec_AnimState ? 0 : 1,
          y: Sec_AnimState ? "-500%" : 0,
        }}
        transition={{
          duration: 1,
          ease: Sec_AnimState ? [0.4, 0.5, 0, 0] : [0, 0, 0, 1],
        }}
        className="w-full max-w-[72ch] text-center text-[17px] font-[500]"
      >
        Growing up in Orlando Florida with such a diverse culture. Inspiration
        was not hard to come by. It is a city full of art, innovation, and
        creativity. We did not want our print shop to be anything less. We hope
        that when you visit The Sublimation Station , it leaves you with new
        found inspiration and imagination.
      </motion.p>

      <motion.div
        initial={{ opacity: 0.5, y: "100%" }}
        animate={{
          opacity: 1,
          y: Sec_AnimState ? "-50%" : 0,
          top: Sec_AnimState ? "50%" : "73%",
          width: Thir_AnimState ? "100vw" : "800px",
          height: Thir_AnimState ? "100vh" : "380px",
        }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.5, 1],
        }}
        onAnimationStart={() => Thir_AnimState && setanimating(true)}
        onAnimationComplete={() => Thir_AnimState && setanimating(false)}
        className="absolute top-[73%] flex h-[380px] w-[800px] justify-start overflow-hidden"
      >
        <motion.img
          initial={{ width: "100%", height: "480px" }}
          animate={{
            width: "100%",
            height: Thir_AnimState ? "100vh" : "480px",
          }}
          transition={{
            duration: 1,
            ease: [0, 0, 0.5, 1],
          }}
          src="/aboutPage.png"
          alt="information"
          className="absolute bottom-0"
        />
      </motion.div>
      <motion.h3
        initial={{ y: "100vh" }}
        animate={{
          y: For_AnimState ? (Fif_AnimState ? "-100vh" : "-50%") : "100vh",
          x: "-50%",
        }}
        transition={{ duration: 1.2, ease: [0, 0, 0.2, 1] }}
        onAnimationStart={() => setanimating(true)}
        onAnimationComplete={() => setanimating(false)}
        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap text-[28vw] font-[700] leading-[27.5vw] text-white"
      >
        Why US
      </motion.h3>
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{
          width: Fif_AnimState ? "2000px" : 0,
          height: Fif_AnimState ? "2000px" : 0,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-[50%] top-[50%] z-20 h-2 w-2 rounded-full bg-white"
      ></motion.div>
    </div>
  );
};

const Slide3 = ({ Fif_AnimState, Six_AnimState }) => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{
        y: Fif_AnimState ? 0 : "100vh",
        opacity: Six_AnimState ? 0 : 1,
      }}
      exit={{ y: "100vh" }}
      transition={{
        duration: 1.2,
        ease: [0, 0, 0.2, 1],
      }}
      className="flex-center absolute top-0 z-30 m-auto min-h-screen w-full"
    >
      <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-24 gap-y-24 ">
        {aboutDetails.map((it, index) => (
          <AboutCard des={it.des} name={it.name} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Slide4 = ({ Six_AnimState, setanimating }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: Six_AnimState ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: [0, 0, 0.2, 1],
      }}
      onAnimationStart={() => setanimating(true)}
      onAnimationComplete={() => setanimating(false)}
      className="flex-center absolute top-0 z-[35] flex min-h-screen w-full"
    >
      <ContactBox about={true} />
    </motion.div>
  );
};

const AboutCard = ({ index, name, des }) => {
  return (
    <div className="flex-center w-full max-w-[360px] flex-col gap-10 ">
      <Image
        src={"/Aboutpage/" + index + ".png"}
        width={100}
        height={100}
        alt={"shirt edit type" + index}
        className={index === 3 && "scale-[1.3]"}
      />
      <div className="flex-center flex-col gap-3">
        <h4 className="text-[23px] font-[700] uppercase tracking-[3px]">
          {name}
        </h4>
        <p className="text-center text-[17px] font-[600]">{des}</p>
      </div>
    </div>
  );
};
