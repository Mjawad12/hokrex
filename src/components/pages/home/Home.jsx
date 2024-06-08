"use client";
import React from "react";
import { whileInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { left2, prods, star } from "@/Consonats";
function Home() {
  const images = [0, 1, 2, 3];
  return (
    <section className="m-auto flex min-h-[calc(100vh-65px)] max-w-[1450px] px-5 ">
      <div className="flex flex-1 flex-grow-[0.43] flex-col justify-center gap-[7rem]">
        <motion.div
          initial={{ y: "60px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex flex-col gap-3"
        >
          <motion.p
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-[22px] font-[700] tracking-[5px] "
          >
            UNLEASH YOUR
          </motion.p>
          <h1 className="text-[75px] font-[700] leading-[55px]">
            Creative <span className="text-pmRed">Power</span>
          </h1>
          <p className="mt-6 max-w-[50ch] text-[18px] font-[500] leading-[20px]">
            From personalized apparel to unique home decor, Print on Demand
            empowers you to bring your creative visions to life and captivate
            customers with one-of-a-kind products.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href={"/categories/All"}
              className="rounded-3xl border border-black px-6 py-[0.7rem] text-[17px] font-[500] text-pmRed"
            >
              View Products
            </Link>
            <motion.div
              initial={{ x: -60 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Link href={"/"} className="flex gap-1 font-[500]">
                Start Designing
                <div className="relative top-[2px] scale-x-[-1] [&_svg]:h-[20px] [&_svg]:w-[21px] [&_svg]:stroke-black ">
                  {left2}
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex w-full items-center"
        >
          <motion.div
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative flex h-[3.5rem] w-[6.5rem]"
          >
            {images.map((it, index) => (
              <Image
                style={{ left: it * 15 + "px", zIndex: it * -1 }}
                className={`absolute top-0 w-[55px] ${
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
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex gap-2"
            >
              <div className="flex-center gap-1 rounded-xl border border-borderP px-2 pl-[0.4rem] text-[15px] font-[600] [&_svg]:relative [&_svg]:bottom-[1px] [&_svg]:w-[14px]">
                {star} 5.0
              </div>
              <p className="whitespace-nowrap text-[16px] font-[700]">
                Trustpilot
              </p>
            </motion.div>
            <p className="whitespace-nowrap text-[16px] font-[500]">
              Based on 120 reviews
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex-center flex-1 flex-grow-[0.6] ">
        <div className="flex-center relative w-full max-w-[48rem] flex-col">
          <motion.div
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute right-[5.9rem] top-[-16px] flex w-full justify-end "
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
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute bottom-0 left-[3rem] z-10 w-full"
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
            whileInView={{ y: 0, opacity: 1 }}
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
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className=" absolute bottom-[5px] left-[50%] h-[25rem] w-[25rem] translate-x-[-52%] rounded-full bg-[#FFDBDB]"
          ></motion.div>

          <div className="absolute bottom-2 right-0 flex w-[9.8rem] flex-col gap-5 [&_svg]:stroke-black ">
            <motion.span
              initial={{ x: "40px", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex-center relative right-[0.8rem] h-[3.5rem] w-[3.5rem] rounded-full bg-[#CFE2FF] [&_svg]:relative [&_svg]:right-[1px]  "
            >
              {prods[3].svg}
            </motion.span>
            <motion.span
              initial={{ x: "80px", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex-center relative right-1 h-[3.5rem] w-[3.5rem] rounded-full bg-[#CFFFF9] [&_svg]:relative "
            >
              {prods[2].svg}
            </motion.span>
            <motion.span
              initial={{ x: "100px", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex-center relative right-4 h-[3.5rem] w-[3.5rem] rounded-full bg-[#FECFFF] [&_svg]:relative [&_svg]:right-[1.5px] [&_svg]:top-[2px] [&_svg]:fill-black [&_svg]:stroke-none"
            >
              {prods[5].svg}
            </motion.span>
            <motion.span
              initial={{ x: "50px", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex-center relative bottom-2 right-[4rem] h-[3.5rem] w-[3.5rem] rounded-full bg-[#FFE9CF] [&_svg]:relative [&_svg]:top-[1px]"
            >
              {prods[6].svg}
            </motion.span>
          </div>

          <motion.div
            initial={{ y: "90px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
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
    </section>
  );
}

export default Home;
