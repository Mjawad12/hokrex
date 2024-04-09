"use client";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { bag, heart } from "@/Consonats";
const ProductCard = ({ name, width, dark = false, smGrid, footerProduct }) => {
  const [scope, animate] = useAnimate();
  return (
    <div
      className={`${width === "sm" ? "max-w-[18rem]" : "max-w-[25.3rem]"} ${
        smGrid ? "!max-w-[18rem]" : ""
      } ${
        footerProduct ? "!max-w-[14rem]" : ""
      } w-full flex-center flex-col gap-3 cursor-pointer `}
    >
      <div
        ref={scope}
        onMouseEnter={() => {
          animate(
            "#cartBtn",
            { opacity: 1 },
            { duration: 0.3, type: "easeInOut" }
          );
          animate("#imgProduct", { scale: 1.1 });
        }}
        onMouseLeave={() => {
          animate(
            "#cartBtn",
            { opacity: 0 },
            { duration: 0.3, type: "easeInOut" }
          );
          animate("#imgProduct", { scale: 1 });
        }}
        className={`bg-[#F5F5F5] w-full relative flex-center overflow-hidden rounded-2xl  ${
          width === "sm" ? "h-[15rem]" : "h-[20rem]"
        } ${smGrid ? "!h-[16rem]" : ""} ${
          footerProduct
            ? "!h-[12rem] [&_svg]:w-[18px] [&_span]:top-2 [&_span]:right-3 rounded-lg"
            : ""
        }`}
      >
        <span className="absolute top-5 right-5 z-20 [&>svg]:hover:fill-pmRed cursor-pointer">
          {heart}
        </span>
        <Image
          src={"/Testimg.jpg"}
          width={500}
          height={500}
          id="imgProduct"
          alt="Product"
          className="w-full h-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          id="cartBtn"
          className={`absolute bottom-5 flex-center w-[90%] border border-borderP py-[0.7rem]
             rounded-2xl bg-[#ffffffad] [backdrop-filter:blur(7px)] hover:bg-[#000000B2] hover:border-[#000000B2] hover:text-white [&_svg]:hover:stroke-white
              ${footerProduct ? "!bottom-2 !py-[0.25rem] !rounded-lg " : ""}
             `}
        >
          <div
            className={`absolute left-[22px] ${
              footerProduct ? "[&_svg]:!w-[14px] !left-[12px] " : ""
            }`}
          >
            {bag}
          </div>
          <p
            className={`font-[500] text-[1.15rem] ${
              footerProduct ? "!text-[0.75rem] !font-[400]" : ""
            } `}
          >
            Quick add
          </p>
        </motion.div>
      </div>
      <p
        className={`font-[500] text-[18px] ${
          dark ? "text-white" : "text-black"
        } ${footerProduct ? "!text-[14px] !font-[400]" : ""} `}
      >
        {name}
      </p>
    </div>
  );
};

export default ProductCard;
