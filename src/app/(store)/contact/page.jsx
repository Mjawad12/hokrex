"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

function page() {
  return (
    <div className="flex flex-col w-full min-h-[200vh]">
      <div></div>
      <div></div>
      <ImageSection />
    </div>
  );
}

export default page;

const ImageSection = () => {
  const ref = useRef(null);
  const isView = useInView(ref);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "1.1 1"],
  // });
  // const value = useTransform(scrollYProgress, [0, 1], [1200, 600]);
  // const transformVal = useTransform(scrollYProgress, [0, 1], [0, -40]);
  // const transfromY = useTransform(scrollYProgress, [0, 1], [500, 0]);
  // console.log(value);
  return (
    <div className="flex-center flex-col z-20  w-full min-h-screen sticky top-0">
      <motion.img
        animate={{ width: isView ? "600px" : "1200px", x: isView ? -40 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        src={"/tool.png"}
        alt="tool"
        width={1200}
        height={1200}
        className="h-max"
      />
      <div ref={ref} className="w-5 h-5" />
      <div className="flex flex-col gap-5 max-w-[640px] py-5">
        <motion.h3
          initial={{ y: 30 }}
          animate={{ y: isView ? "0" : "50px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-[75px] font-[700] leading-[75px]"
        >
          Unleash Your 
        </motion.h3>
        <motion.p
          initial={{ y: 30 }}
          animate={{ y: isView ? "0" : "50px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-[18px] font-[500] leading-[24px] "
        >
          From personalized apparel to unique home decor, Print on Demand
          empowers you to bring your creative visions to life and captivate
          customers with one-of-a-kind products. 
        </motion.p>
        <Link
          href={"/products"}
          className="px-6 py-[0.7rem] border border-black text-black rounded-3xl font-[500] text-[17px] w-max mt-8"
        >
          View Products
        </Link>
      </div>
    </div>
  );
};
