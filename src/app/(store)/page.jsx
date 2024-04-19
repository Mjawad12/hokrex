import { left2, star } from "@/Consonats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const images = [0, 1, 2, 3];
  return (
    <div className="flex max-w-[1200px] m-auto">
      <div className="flex-1 flex-grow-[0.5]">
        <div className="flex flex-col gap-3">
          <p className="text-[22px] font-[700] tracking-[5px] ">UNLEASH YOUR</p>
          <h1 className="text-[75px] font-[700] leading-[55px]">
            Creative <span className="text-pmRed">Power</span>
          </h1>
          <p className="text-[18px] font-[500] leading-[20px]">
            From personalized apparel to unique home decor, Print on Demand
            empowers you to bring your creative visions to life and captivate
            customers with one-of-a-kind products. 
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={"/products"}
              className="px-5 py-2 border border-black text-pmRed rounded-3xl font-[500]"
            >
              View Products
            </Link>
            <Link href={"/"} className="flex gap-2 font-[500]">
              Start Designing
              <div className="[&_svg]:stroke-black [&_svg]:w-[20px] [&_svg]:h-[20px]  scale-x-[-1]">
                {left2}
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center w-full">
          <div className="flex relative w-[6.5rem] h-[3.5rem]">
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
          </div>
          <div className="">
            <div className="flex gap-2">
              <div className="flex-center gap-1 font-[600] text-[15px] px-2 pl-[0.4rem] border border-borderP rounded-xl [&_svg]:relative [&_svg]:bottom-[1px] [&_svg]:w-[14px]">
                {star} 5.0
              </div>
              <p className="text-[16px] font-[700] whitespace-nowrap">
                Trustpilot
              </p>
            </div>
            <p className="text-[16px] font-[500] whitespace-nowrap">
              Based on 120 reviews
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-grow-[0.5]"></div>
    </div>
  );
}
