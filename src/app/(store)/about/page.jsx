"use client";
import { left } from "@/Consonats";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function page() {
  return (
    <main className="flex w-full flex-col">
      <section className="flex-center relative min-h-[calc(100vh-66px)] flex-col gap-3">
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0, 0, 0.2, 0.8] }}
          className="animateH1 z-10"
        >
          About us
        </motion.h1>
        <div className="absolute bottom-0 left-0">
          <Image src={"/dots.png"} alt="dots" width={650} height={500} />
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
      </section>
    </main>
  );
}

export default page;
