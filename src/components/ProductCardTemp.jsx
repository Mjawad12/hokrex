"use client";
import React from "react";
import Image from "next/image";
import { heart } from "@/Consonats";
import Link from "next/link";
const ProductCardTemp = ({ name, img = "/shirt.png", slug, border }) => {
  return (
    <Link
      href={"/product/" + slug}
      className={`min-h-[510px] w-full max-w-[480px] border-b ${border ? "border-x" : ""} border-[#E5E5E5] p-3 [&_#prod]:hover:bg-[#F5F5F5] [&_#prod_#btns-prod]:hover:opacity-[1] [&_#prod_img]:hover:scale-[0.79]`}
    >
      <div
        id="prod"
        className="flex-center relative min-h-[510px] w-full flex-col transition-all duration-700"
      >
        <div className="flex w-full items-center justify-between px-5">
          <span className="rounded-[7px] bg-black p-1 px-1.5 text-[12px] font-[500] leading-[16px] text-white">
            customizable
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
          className="absolute bottom-[5rem] flex w-max items-center gap-3 opacity-0 transition-all duration-700"
        >
          <button
            style={{ boxShadow: "0px 4px 8px 0px #00000017" }}
            className="w-full whitespace-nowrap rounded-[10px] bg-[#FFFFFF] px-8 py-3 text-[19px] font-[500] hover:bg-[#000000CC] hover:text-white"
          >
            Quick View
          </button>
          <button className="w-full rounded-[10px] bg-[#000000CC] px-8 py-3 text-[19px] font-[500] text-white">
            Customize
          </button>
        </div>
        <p className="text-[21px] font-[400]">{name}</p>
      </div>
    </Link>
  );
};

export default ProductCardTemp;

// box-shadow: 0px 4px 8px 0px #00000017;
