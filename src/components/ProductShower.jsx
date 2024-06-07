import React from "react";
import LikeToPrint from "@/components/LikeToPrint";
import BulkCalculator from "@/components/BulkCalculator";
import SelectMaterial from "@/components/SelectMaterial";
import FileCapturer from "@/components/FileCapturer";
import DateSelector from "@/components/DateSelector";
import D_R_R from "@/components/D_R_R";
import ProductPageFooter from "@/components/ProductPageFooter";
import { bag, check, heart, share, star } from "@/Consonats";

function ProductShower({ product, products }) {
  return (
    <div className="w-full flex-1 flex-grow-[0.56] border-l border-[#E5E5E5] py-20">
      <div className="flex w-full max-w-[31rem] flex-col gap-5 px-10">
        <div className="flex gap-2">
          <div className="flex-center cursor-pointer rounded-[12px] border border-borderP px-2 py-2 [&_svg]:scale-[0.9]">
            {heart}
          </div>
          <div className="flex-center cursor-pointer rounded-[12px] border border-borderP px-2 py-2 [&_svg]:scale-[0.9]">
            {share}
          </div>
        </div>
        <div className="flex gap-5">
          <p className="text-[22px] font-[600] text-pmRed">
            ${product?.productPrice}
          </p>
          <div className="flex-center gap-1 rounded-2xl border border-borderP px-3 text-[18px] font-[600] [&_svg]:relative [&_svg]:bottom-[1px]">
            {star} 5.0
          </div>
        </div>
        <h3 className="text-4xl font-[500]">{product?.productName}</h3>
        <p className="w-full max-w-[42ch] leading-[22px]">
          {product?.productHeading}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-[22px] font-[700]">Quick Colors</p>
          <div className="flex w-full max-w-[23rem] flex-wrap gap-2 gap-y-3">
            {product?.productColors?.map((it) => (
              <div
                style={{
                  background: it,
                  boxShadow: "0px 0px 12px -5px black",
                }}
                className={`flex-center h-7 w-7 cursor-pointer rounded-full [&_span]:hidden [&_span]:hover:flex`}
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
        <LikeToPrint amount={"5"} sizes={product?.productSizes} />
        <div className="mt-16 flex flex-col gap-4">
          <BulkCalculator />
          <SelectMaterial />
          <input
            type="text"
            className="w-full rounded-[0.8rem] border border-borderP px-5 py-3 text-[18px] font-[500] outline-none hover:border-black"
            placeholder="Write Instraction"
          />
          <FileCapturer />
          <DateSelector />
        </div>
        <p className="mt-8 text-[23px] font-[600] underline underline-offset-4 ">
          Total <span className="text-pmRed underline">$34.95</span>
        </p>
        <div className="flex-center mt-8 justify-start gap-3">
          <CustomButton svg={bag} text={"Add to Cart"} color="red" />
          <CustomButton svg={bag} text={"Check out"} color="black" />
        </div>
      </div>
      <D_R_R description={product?.productDescription} />
      {/* <ProductPageFooter products={products} /> */}
    </div>
  );
}

const CustomButton = ({ text, svg, color }) => {
  return (
    <button
      className={`flex-center gap-[1.6rem] px-4 py-3 pr-12 text-white ${
        color === "red"
          ? `bg-[#ea0000bc] hover:bg-[#EA0000]`
          : "bg-[#000000B2] hover:bg-[black]"
      }
    rounded-[0.8rem] text-[17px] font-[500] [&_svg]:stroke-white `}
    >
      {svg}
      {text}
    </button>
  );
};

export default ProductShower;
