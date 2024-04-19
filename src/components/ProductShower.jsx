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
            ${product.productPrice}
          </p>
          <div className="flex-center gap-1 font-[600] text-[18px] px-3 border border-borderP rounded-2xl [&_svg]:relative [&_svg]:bottom-[1px]">
            {star} 5.0
          </div>
        </div>
        <h3 className="text-4xl font-[500]">{product.productName}</h3>
        <p className="max-w-[42ch] w-full leading-[22px]">
          {product.productHeading}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-[22px] font-[700]">Quick Colors</p>
          <div className="flex flex-wrap max-w-[23rem] w-full gap-2 gap-y-3">
            {product?.productColors?.map((it) => (
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
        <LikeToPrint amount={"5"} sizes={product?.productSizes} />
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
      <D_R_R description={product?.productDescription} />
      <ProductPageFooter products={products} />
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

export default ProductShower;
