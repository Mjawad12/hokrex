"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { left2, prods, star } from "@/Consonats";
function Home() {
  const images = [0, 1, 2, 3];
  return (
    <div className="flex max-w-[1450px] m-auto px-5 min-h-[calc(100vh-65px)] ">
      <div className="flex-1 flex-grow-[0.43] flex justify-center flex-col gap-[7rem]">
        <motion.div
          initial={{ y: "60px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex flex-col gap-3"
        >
          <motion.p
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-[22px] font-[700] tracking-[5px] "
          >
            UNLEASH YOUR
          </motion.p>
          <h1 className="text-[75px] font-[700] leading-[55px]">
            Creative <span className="text-pmRed">Power</span>
          </h1>
          <p className="text-[18px] font-[500] leading-[20px] max-w-[50ch] mt-6">
            From personalized apparel to unique home decor, Print on Demand
            empowers you to bring your creative visions to life and captivate
            customers with one-of-a-kind products.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <Link
              href={"/products"}
              className="px-6 py-[0.7rem] border border-black text-pmRed rounded-3xl font-[500] text-[17px]"
            >
              View Products
            </Link>
            <motion.div
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Link href={"/"} className="flex gap-1 font-[500]">
                Start Designing
                <div className="[&_svg]:stroke-black [&_svg]:w-[21px] [&_svg]:h-[20px] scale-x-[-1] relative top-[2px] ">
                  {left2}
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex items-center w-full"
        >
          <motion.div
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex relative w-[6.5rem] h-[3.5rem]"
          >
            {images.map((it, index) => (
              <Image
                style={{ left: it * 15 + "px", zIndex: it * -1 }}
                className={`absolute w-[55px] top-0 ${
                  it === 3 ? "w-[50px]" : ""
                }`}
                key={index}
                src={"/review/" + it + ".png"}
                width={50}
                height={50}
                alt={it}
              />
            ))}
          </motion.div>
          <div className="">
            <motion.div
              initial={{ y: "-20px", x: "-50px", opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex gap-2"
            >
              <div className="flex-center gap-1 font-[600] text-[15px] px-2 pl-[0.4rem] border border-borderP rounded-xl [&_svg]:relative [&_svg]:bottom-[1px] [&_svg]:w-[14px]">
                {star} 5.0
              </div>
              <p className="text-[16px] font-[700] whitespace-nowrap">
                Trustpilot
              </p>
            </motion.div>
            <p className="text-[16px] font-[500] whitespace-nowrap">
              Based on 120 reviews
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 flex-grow-[0.6] flex-center ">
        <div className="flex-center flex-col relative max-w-[48rem] w-full">
          <motion.div
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-[-16px] w-full right-[5.9rem] flex justify-end "
          >
            <Image
              src={"/homepage/label2.webp"}
              width={150}
              height={150}
              alt="label"
            />
          </motion.div>
          <motion.div
            initial={{ y: "180px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute bottom-0 w-full left-[3rem] z-10"
          >
            <Image
              src={"/homepage/label1.webp"}
              width={180}
              height={180}
              alt="label"
            />
          </motion.div>
          <motion.div
            initial={{ y: "90px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute top-[4.2rem] z-20 translate-x-3"
          >
            <Image
              src={"/homepage/text.webp"}
              alt="text edit"
              width={290}
              height={290}
            />
          </motion.div>
          <motion.div
            initial={{ y: "90px", x: "-52%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className=" bg-[#FFDBDB] w-[25rem] h-[25rem] rounded-full absolute bottom-[5px] left-[50%] translate-x-[-52%]"
          ></motion.div>

          <div className="flex flex-col gap-5 [&_svg]:stroke-black absolute bottom-2 right-0 w-[9.8rem] ">
            <motion.span
              initial={{ x: "40px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-[3.5rem] h-[3.5rem] rounded-full flex-center bg-[#CFE2FF] [&_svg]:relative [&_svg]:right-[1px] relative right-[0.8rem]  "
            >
              {prods[3].svg}
            </motion.span>
            <motion.span
              initial={{ x: "80px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-[3.5rem] h-[3.5rem] rounded-full flex-center bg-[#CFFFF9] [&_svg]:relative relative right-1 "
            >
              {prods[2].svg}
            </motion.span>
            <motion.span
              initial={{ x: "100px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="[&_svg]:fill-black [&_svg]:stroke-none w-[3.5rem] h-[3.5rem] rounded-full flex-center bg-[#FECFFF] [&_svg]:relative [&_svg]:top-[2px] [&_svg]:right-[1.5px] relative right-4"
            >
              {prods[5].svg}
            </motion.span>
            <motion.span
              initial={{ x: "50px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-[3.5rem] h-[3.5rem] rounded-full flex-center bg-[#FFE9CF] [&_svg]:relative [&_svg]:top-[1px] relative right-[4rem] bottom-2"
            >
              {prods[6].svg}
            </motion.span>
          </div>

          <motion.div
            initial={{ y: "90px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="z-10"
          >
            <Image
              src={"/homepage/shirtFront.webp"}
              alt="shirt"
              width={450}
              height={450}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
