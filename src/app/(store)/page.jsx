import { arrowLeft, left, left2 } from "@/Consonats";
import Link from "next/link";
import React from "react";

export default async function page() {
  return (
    <div className="flex max-w-[1200px] m-auto">
      <div className="flex-1 flex-grow-[0.5]">
        <div className="flex flex-col gap-3">
          <p className="text-[24px]">Unleash your</p>
          <h1 className="text-[78px]">
            Creative <span className="text-pmRed">Power</span>
          </h1>
          <p className="text-[18px] font-[500] leading-[20px]">
            From personalized apparel to unique home decor, Print on Demand
            empowers you to bring your creative visions to life and captivate
            customers with one-of-a-kind products. 
          </p>
          <div className="flex items-center">
            <Link
              href={"/products"}
              className="px-3 py-2 border border-black text-pmRed"
            >
              View Products
            </Link>
            <Link href={"/"} className="flex gap-2">
              Start Designing
              <div className="[&_svg]:stroke-black [&_svg]:w-[20px] [&_svg]:h-[20px]  scale-x-[-1]">
                {left2}
              </div>
            </Link>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="flex-1 flex-grow-[0.5]"></div>
    </div>
  );
}
