"use client";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { bag, heart } from "@/Consonats";
import Link from "next/link";
const ProductCard = ({
  name,
  width,
  dark = false,
  smGrid,
  footerProduct,
  img = "/Testimg.jpg",
  slug,
}) => {
  const [scope, animate] = useAnimate();
  return (
    <Link
      href={"/product/" + slug}
      className={`${width === "sm" ? "max-w-[20rem]" : "max-w-[25.3rem]"} ${
        smGrid ? "!max-w-[18rem]" : ""
      } ${
        footerProduct ? "!max-w-[14rem]" : ""
      } flex-center w-full cursor-pointer flex-col gap-3 `}
    >
      <motion.div
        ref={scope}
        onMouseEnter={() => {
          animate(
            "#cartBtn",
            { opacity: 1 },
            { duration: 0.3, type: "easeInOut" },
          );
          animate("#imgProduct", { scale: 1.1 });
        }}
        onMouseLeave={() => {
          animate(
            "#cartBtn",
            { opacity: 0 },
            { duration: 0.3, type: "easeInOut" },
          );
          animate("#imgProduct", { scale: 1 });
        }}
        className={`flex-center relative w-full overflow-hidden rounded-2xl bg-[#F5F5F5]  ${
          width === "sm" ? "h-[14rem]" : "h-[20rem]"
        } ${smGrid ? "!h-[16rem]" : ""} ${
          footerProduct
            ? "!h-[12rem] rounded-lg [&_span]:right-3 [&_span]:top-2 [&_svg]:w-[18px]"
            : ""
        }`}
      >
        <span className="absolute right-5 top-5 z-20 cursor-pointer [&>svg]:hover:fill-pmRed">
          {heart}
        </span>
        <Image
          src={img}
          width={500}
          height={500}
          id="imgProduct"
          alt="Product"
          className="h-full w-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          id="cartBtn"
          className={`flex-center absolute bottom-5 w-[90%] rounded-2xl border border-borderP
             bg-[#ffffffad] py-[0.7rem] [backdrop-filter:blur(7px)] hover:border-[#000000B2] hover:bg-[#000000B2] hover:text-white [&_svg]:hover:stroke-white
              ${footerProduct ? "!bottom-2 !rounded-lg !py-[0.25rem] " : ""}
             `}
        >
          <div
            className={`absolute left-[22px] ${
              footerProduct ? "!left-[12px] [&_svg]:!w-[14px] " : ""
            }`}
          >
            {bag}
          </div>
          <p
            className={`text-[1.15rem] font-[500] ${
              footerProduct ? "!text-[0.75rem] !font-[400]" : ""
            } `}
          >
            Quick add
          </p>
        </motion.div>
      </motion.div>
      <p
        className={`text-[18px] font-[500] ${
          dark ? "text-white" : "text-black"
        } ${footerProduct ? "!text-[14px] !font-[400]" : ""} `}
      >
        {name}
      </p>
    </Link>
  );
};

export default ProductCard;
