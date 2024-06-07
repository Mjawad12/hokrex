"use client";
import React from "react";
import Image from "next/image";
import { heart } from "@/Consonats";
import Link from "next/link";
const ProductCardTemp = ({
  name,
  img = "/shirt.png",
  slug,
  border,
  smGrid,
}) => {
  // "max-w-[371px]" : "max-w-[520px]"
  return (
    <div
      className={`prodLk relative ${smGrid ? "min-h-[415px]" : "min-h-[550px]"} w-full ${smGrid ? "w-full" : "w-full"} 
      border-b ${border ? (smGrid ? "border-r" : "border-x") : ""} border-[#E5E5E5] p-3 transition-all duration-700 
      [&_#prod]:hover:bg-[#F5F5F5] [&_#prod_#btns-prod]:hover:opacity-[1] [&_#prod_img]:hover:scale-[0.79]`}
    >
      <div
        id="prod"
        className={`flex-center relative ${smGrid ? "min-h-[415px]" : "min-h-[550px]"} w-full flex-col transition-all duration-700`}
      >
        <div className="flex w-full items-center justify-between px-5">
          <span
            className={`rounded-[6px] bg-black p-1  ${smGrid ? "!rounded-[5px] px-2 py-0.5 text-[10px]" : "px-[0.6rem] text-[12px]"} font-[400] leading-[16px] text-white`}
          >
            Customizable
          </span>
          <span className="[&_svg]:hover:fill-pmRed">{heart}</span>
        </div>
        <Image
          src={img}
          width={500}
          height={500}
          alt={"shirt" + slug}
          className="transition-all duration-700"
        />
        <div
          id="btns-prod"
          className={`absolute ${smGrid ? "bottom-[4rem]" : "bottom-[5.5rem]"} flex w-max items-center gap-3 opacity-0 transition-all duration-700`}
        >
          <Link
            href={"/product/" + slug}
            style={{ boxShadow: "0px 4px 8px 0px #00000017" }}
            className={`w-full whitespace-nowrap bg-[#FFFFFF] ${smGrid ? "rounded-[7px] px-[1.7rem] py-[0.55rem] text-[14px]" : "rounded-[10px] px-8 py-3 text-[20px]"} font-[500] hover:bg-[#000000CC] hover:text-white`}
          >
            Quick View
          </Link>
          <button
            className={`w-full bg-[#000000CC] ${smGrid ? "rounded-[7px] px-[1.7rem] py-[0.55rem] text-[14px]" : "rounded-[10px] px-8 py-3 text-[20px]"} font-[500] text-white`}
          >
            Customize
          </button>
        </div>
        <p className={`${smGrid ? "text-[16px]" : "text-[21px]"} font-[400]`}>
          {name}
        </p>
      </div>
    </div>
  );
};

export default ProductCardTemp;

// box-shadow: 0px 4px 8px 0px #00000017;
