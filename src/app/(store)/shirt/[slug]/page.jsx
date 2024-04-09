import TopNavigator from "@/components/TopNavigator";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bag, check, customizeIcon, heart, share, star } from "@/Consonats";
import LikeToPrint from "@/components/LikeToPrint";
import BulkCalculator from "@/components/BulkCalculator";
import SelectMaterial from "@/components/SelectMaterial";
import FileCapturer from "@/components/FileCapturer";
import DateSelector from "@/components/DateSelector";
import D_R_R from "@/components/D_R_R";
import ProductPageFooter from "@/components/ProductPageFooter";

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
      <div className="flex justify-center gap-10 px-10 pr-0 py-20 relative pb-0">
        <div className="flex-1 flex-grow-[0.5] flex  items-start h-[520px] ">
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
          <div className="w-full flex flex-col items-center justify-start ">
            <Image
              src="/Testimg2.jpg"
              alt="shirt image"
              width={500}
              height={500}
            />
            <Link
              href={"/customize/1"}
              className={`flex-center rounded-[0.75rem] mt-6 w-[22rem] py-[0.9px] cust-btn hover:shadow-lg`}
            >
              <button className="w-[21.9rem] py-2 flex flex-center gap-2 bg-white text-[18px] font-[500] rounded-[0.7rem] ">
                {customizeIcon} Customize
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex-1 flex-grow-[0.56]">
          <div className="flex flex-col gap-5 max-w-[31rem] w-full px-10">
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
              <input
                type="text"
                className="w-full px-5 py-3 border border-borderP font-[500] rounded-[0.8rem] text-[18px] outline-none hover:border-black"
                placeholder="Write Instraction"
              />
              <FileCapturer />
              <DateSelector />
            </div>
            <p className="text-[23px] font-[600] underline underline-offset-4 mt-8 ">
              Total <span className="text-pmRed underline">$34.95</span>
            </p>
            <div className="flex-center gap-3 justify-start mt-8">
              <CustomButton svg={bag} text={"Add to Cart"} color="red" />
              <CustomButton svg={bag} text={"Check out"} color="black" />
            </div>
          </div>
          <D_R_R />
          <ProductPageFooter />
        </div>
      </div>
    </div>
  );
}

const CustomButton = ({ text, svg, color }) => {
  return (
    <button
      className={`px-4 pr-12 py-3 flex-center gap-[1.6rem] text-white ${
        color === "red"
          ? `bg-[#ea0000bc] hover:bg-[#EA0000]`
          : "bg-[#000000B2] hover:bg-[black]"
      }
    [&_svg]:stroke-white font-[500] text-[17px] rounded-[0.8rem] `}
    >
      {svg}
      {text}
    </button>
  );
};

export default page;
