"use client";
import React, { useContext, useState } from "react";
import LikeToPrint from "@/components/LikeToPrint";
import BulkCalculator from "@/components/BulkCalculator";
import SelectMaterial from "@/components/SelectMaterial";
import FileCapturer from "@/components/FileCapturer";
import DateSelector from "@/components/DateSelector";
import D_R_R from "@/components/D_R_R";
import ProductPageFooter from "@/components/ProductPageFooter";
import { bag, check, heart, share, star } from "@/Consonats";
import { ContextCart } from "./Mainstate(cart)/Mainstatecart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

function ProductShower({ product, products }) {
  const { dispatch, cartState } = useContext(ContextCart);
  const [selectedDate, setselectedDate] = useState(null);
  console.log(cartState);
  const [amount, setamount] = useState(0);
  const [error, seterror] = useState(null);
  const Addproduct = () => {
    if (amount < 1) {
      seterror("Please Select atleast one size.");
      document
        .querySelector("#err-s")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      dispatch({
        type: "addItem",
        item: {
          id: v4(),
          name: product?.productName,
          colors: product?.productColors,
          sizes: getSizes(),
          price: calculatePrice(),
          src: product?.productImg,
          quant: amount,
          date: selectedDate,
          instruction: document.querySelector("#instr-prod").value,
          customized: false,
          slug: product?.slug,
        },
      });
      toast("Product added to the cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
    }
  };

  const calculatePrice = () => {
    return ((amount || 1) * product?.productPrice).toFixed(2);
  };

  const getSizes = () => {
    var sizes = [];
    product?.productSizes.forEach((it, index) => {
      sizes = [
        ...sizes,
        {
          type: it,
          val: document.querySelector(`#size-val-${index}`).value || 0,
        },
      ];
    });
    return sizes;
  };

  return (
    <div className="w-full flex-1 flex-grow-[0.56] border-l border-[#E5E5E5] pt-20">
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
            {product?.productColors?.map((it, key) => (
              <div
                key={key}
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
        <LikeToPrint
          amount={amount}
          setamount={setamount}
          sizes={product?.productSizes}
          error={error}
          seterror={seterror}
        />
        <div className="mt-16 flex flex-col gap-4">
          <BulkCalculator price={product?.productPrice} />
          <SelectMaterial />
          <input
            type="text"
            className="w-full rounded-[0.8rem] border border-borderP px-5 py-3 text-[18px] font-[500] outline-none hover:border-black"
            placeholder="Write instruction"
            id="instr-prod"
          />
          <FileCapturer />
          <DateSelector
            selectedDate={selectedDate}
            setselectedDate={setselectedDate}
          />
        </div>
        <p className="mt-8 text-[23px] font-[600] underline underline-offset-4 ">
          Total{" "}
          <span className="text-pmRed underline">${calculatePrice()}</span>
        </p>
        <div className="flex-center mt-8 justify-start gap-3">
          <CustomButton
            svg={bag}
            text={"Add to Cart"}
            color="red"
            clickFunc={Addproduct}
          />
          <CustomButton
            svg={bag}
            text={"Check out"}
            color="black"
            clickFunc={() => {}}
          />
        </div>
      </div>
      <div className="">
        <ToastContainer />
      </div>
      <D_R_R description={product?.productDescription} />
      <ProductPageFooter products={products} />
    </div>
  );
}

const CustomButton = ({ text, svg, color, clickFunc }) => {
  return (
    <button
      onClick={clickFunc}
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
