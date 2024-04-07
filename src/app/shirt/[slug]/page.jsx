import TopNavigator from "@/components/TopNavigator";
import React from "react";
import Image from "next/image";
import { check, heart, share, star } from "@/Consonats";
import LikeToPrint from "@/components/LikeToPrint";
import BulkCalculator from "@/components/BulkCalculator";
import SelectMaterial from "@/components/SelectMaterial";

function page(slug) {
  const similarImages = [1, 2, 3, 4, 5, 6];
  const product = {
    rate: "$30.5",
    name: "Team Sports 1.0",
    desc: "Fast forward. Rewind. Doesn’t matter this shoe takes retro into the future. The on remasters everything you love about the Vomero in a look pulled straight from an early aughts running catalog. ",
  };
  const colors = [
    "#000000",
    "#464646",
    "#FFFFFF",
    "#355AAB",
    "#A7A4A7",
    "#BE7D6F",
    "#593D77",
    "#595037",
    "#6C2A3C",
    "#C4C2BD",
    "#A7A4A7",
    "#BE7D6F",
  ];

  const sizes = ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"];

  return (
    <div>
      <TopNavigator />
      <div className="flex justify-center gap-20 px-10 py-20 relative">
        <div className="flex-1 flex-grow-[0.5] flex items-start h-[520px]">
          <div className="flex flex-col gap-5">
            {similarImages.map((it) => (
              <div className="border border-borderP">
                <Image
                  key={it}
                  width={60}
                  height={60}
                  alt="More images"
                  src={"/TestImg2.jpg"}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex-center items-start ">
            <Image
              src="/Testimg2.jpg"
              alt="shirt image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="w-full flex-1 flex-grow-[0.5]">
          <div className="flex-1 flex-grow-[0.5] flex flex-col gap-5 max-w-[26rem] w-full">
            <div className="flex gap-2">
              <div className="px-2 py-2 border border-borderP rounded-[12px] flex-center [&_svg]:scale-[0.9] cursor-pointer">
                {heart}
              </div>
              <div className="px-2 py-2 border border-borderP rounded-[12px] flex-center [&_svg]:scale-[0.9] cursor-pointer">
                {share}
              </div>
            </div>
            <div className="flex gap-5">
              <p className="text-pmRed text-[22px] font-[600]">
                {product.rate}
              </p>
              <div className="flex-center gap-1 font-[600] text-[18px] px-3 border border-borderP rounded-2xl [&_svg]:relative [&_svg]:bottom-[1px]">
                {star} 5.0
              </div>
            </div>
            <h3 className="text-4xl font-[500]">{product.name}</h3>
            <p className="max-w-[42ch] w-full leading-[22px]">{product.desc}</p>
            <div className="flex flex-col gap-3">
              <p className="text-[22px] font-[700]">Quick Colors</p>
              <div className="flex flex-wrap max-w-[23rem] w-full gap-2 gap-y-3">
                {colors?.map((it) => (
                  <div
                    style={{
                      background: it,
                      boxShadow: "0px 0px 12px -5px black",
                    }}
                    className={`w-7 h-7 rounded-full flex-center [&_span]:hidden [&_span]:hover:flex cursor-pointer`}
                  >
                    <span
                      className={`transition-all duration-500 ${
                        it === "#FFFFFF" ? "[&_svg]:stroke-black" : ""
                      }`}
                    >
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[22px] font-[700]">Sizes</p>
              <div className="flex flex-wrap w-full gap-2 gap-y-3">
                {sizes?.map((it) => (
                  <div className="flex-center border border-borderP rounded-[12px] overflow-hidden">
                    <p className="border-r border-borderP px-3 py-2 font-[700]">
                      {it}
                    </p>
                    <input className="py-2 w-[45px] outline-none font-[500] text-[1.1rem] text-center text-pmRed" />
                  </div>
                ))}
              </div>
            </div>
            <LikeToPrint />
            <div className="flex flex-col gap-4 mt-16">
              <BulkCalculator />
              <SelectMaterial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
