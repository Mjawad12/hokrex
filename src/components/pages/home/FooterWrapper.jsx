"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import React from "react";

function FooterWrapper({
  footerPage,
  setanimating,
  backgroundBlur,
  DisableScroll,
  Enablescroll,
}) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: footerPage ? 0 : "100%" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      onAnimationStart={() => {
        setanimating && setanimating(true);
        DisableScroll && DisableScroll();
      }}
      onAnimationComplete={() => {
        setanimating && setanimating(false);
        Enablescroll && Enablescroll();
      }}
      style={{
        backdropFilter: backgroundBlur && "blur(100px) brightness(1.3)",
      }}
      className={`absolute bottom-0 left-0 z-40 flex min-h-screen w-full items-end ${backgroundBlur ? "bg-[#1a1a1a7a]" : "bg-[#1A1A1A]"}`}
    >
      <Footer />
    </motion.div>
  );
}

export default FooterWrapper;
