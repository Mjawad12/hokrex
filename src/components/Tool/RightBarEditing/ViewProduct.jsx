import { bag, cart, check, star } from "@/Consonats";
import BulkCalculator from "@/components/BulkCalculator";
import DateSelector from "@/components/DateSelector";
import FileCapturer from "@/components/FileCapturer";
import LikeToPrint from "@/components/LikeToPrint";
import SelectMaterial from "@/components/SelectMaterial";
import {
  CustomButton,
  TopBTNs,
} from "@/components/pages/ProductPage/ProductShower";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ViewProduct() {
  const [reviewNumber, setreviewNumber] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [selectedDate, setselectedDate] = useState(null);
  const [amount, setamount] = useState(0);
  const [error, seterror] = useState(null);
  const [uploadedFiles, setuploadedFiles] = useState([]);
  const [loading, setloading] = useState(false);
  const [selectedType, setselectedType] = useState(null);
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

  const uploadFiles = async () => {
    let files_upload = [];
    for (let i = 0; i < uploadedFiles.length; i++) {
      toast(`Uploading file ${i + 1}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "info",
      });
      const url = await Upload(uploadedFiles[i]);
      files_upload = [...files_upload, url];
    }
    return files_upload;
  };
  const Addproduct = async () => {
    setloading(true);
    if (amount < 1) {
      seterror("Please Select atleast one size.");
      document
        .querySelector("#err-s")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (!selectedType) {
      notificationCaller(false, "Please Select a material.", toast);
      document.querySelector("#mat-select").click();
      document
        .querySelector("#mat-select")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      let files = await uploadFiles();
      dispatch({
        type: "addItem",
        item: {
          id: product?._id,
          name: product?.productName,
          colors: product?.productColors,
          sizes: getSizes(),
          price: calculatePrice(),
          src: product?.productImg,
          quant: amount,
          date: selectedDate,
          instruction: document.querySelector("#instr-prod").value,
          customized: product?.customizable,
          slug: product?.slug,
          files: files,
          material: selectedType,
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
    setloading(false);
  };

  const product = {
    productName: "test2",
    productPrice: 52,
    productCategory: "Brand Appeal",
    productDescription:
      "kjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjh",
    productHeading:
      "Add a touch of sophistication to your wardrobe with our crisp white ha",
    productImg:
      "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718728621/mvjloxslwxlhph0ms8bb.png",
    productColors: ["rgb(184, 37, 37)", "", "", "rgb(184, 33, 33)"],
    productSizes: ["XS", "3XL", "XL", "SM"],
    slug: "test2",
    reviews: [
      {
        name: "Muhammad Jawad",
        designation: "EcoFriendly Products",
        phone: "",
        email: "",
        rating: 5,
        review:
          "I recently bought the Classic Fit Oxford Shirt from [Brand Name], and it's fantastic! The high-quality cotton is soft and breathable. The fit is perfect—neither too tight nor too loose. It’s versatile for both casual and formal occasions. Even after multiple washes, it maintains its shape and color. Highly recommended for a stylish, durable wardrobe staple!",
        reviewerId: "6656c9747ca9136dfd9192d4",
      },
    ],
    customizable: true,
    salePercent: 30,
    sideImages: [
      "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718728622/skenpy7zw0lp9nujmyoa.webp",
      "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718728622/jr2jd9nfjae8ams3ggxx.webp",
      "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718728623/cdfhqczof8jwmgyzd73v.png",
      "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718728624/ltr1bppvjnxpzhs6qsxi.png",
    ],
    __v: 0,
    materials: ["Lather"],
  };
  useEffect(() => {
    product?.reviews.forEach((it) => {
      let rate = it.rating;
      let tempReview = reviewNumber;
      reviewNumber[+rate] += 1;
      setreviewNumber({ ...tempReview });
    });
  }, []);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex-center gap-1">
        <span className="rotate-[180deg] cursor-pointer">{arrow}</span>
        <Image
          src={"/testimg3.png"}
          alt="product"
          width={1000}
          height={1000}
          className="w-full"
        />
        <span className="cursor-pointer">{arrow}</span>
      </div>
      <button className="flex-center w-full gap-1 rounded-[11px] bg-white py-2.5 font-[500]">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3784 6.53161C18.1843 6.32956 17.9514 6.1688 17.6937 6.05899C17.4359 5.94918 17.1586 5.89258 16.8784 5.89258C16.5983 5.89258 16.321 5.94918 16.0632 6.05899C15.8055 6.1688 15.5725 6.32956 15.3784 6.53161L3.60844 18.3616C3.21884 18.7516 3 19.2803 3 19.8316C3 20.3829 3.21884 20.9116 3.60844 21.3016C3.99845 21.6912 4.52717 21.91 5.07844 21.91C5.6297 21.91 6.15842 21.6912 6.54844 21.3016L18.3784 9.50161C18.5805 9.30751 18.7412 9.07459 18.851 8.81683C18.9609 8.55907 19.0175 8.28178 19.0175 8.00161C19.0175 7.72143 18.9609 7.44414 18.851 7.18638C18.7412 6.92862 18.5805 6.69571 18.3784 6.50161V6.53161Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5195 8.43066L16.4995 11.4107"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 3.91113L9 4.91113L8 5.41113L9 5.87113L9.5 6.91113L10 5.91113L11 5.41113L10 4.91113L9.5 3.91113Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 8.91113L4 9.91113L3 10.4111L4 10.8711L4.5 11.9111L5 10.9111L6 10.4111L5 9.91113L4.5 8.91113Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 13.9111L19 14.9111L18 15.4111L19 15.8711L19.5 16.9111L20 15.9111L21 15.4111L20 14.9111L19.5 13.9111Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Customize
      </button>
      <div className="flex w-full max-w-[31rem] flex-col gap-5 small:m-auto ">
        <div className="flex items-center gap-3">
          <p className="text-[22px] font-[600] text-[#FB6A6A]">
            ${product?.productPrice}
          </p>
          <div className="flex-center h-max gap-1 rounded-2xl bg-white px-2 py-0 text-[16px] font-[600] [&_svg]:relative [&_svg]:bottom-[1px] [&_svg]:w-[13px]">
            {star}{" "}
            {(
              (1 * +reviewNumber[1] +
                2 * +reviewNumber[2] +
                3 * +reviewNumber[3] +
                4 * +reviewNumber[4] +
                5 * +reviewNumber[5]) /
                +product?.reviews?.length || 5.0
            ).toFixed(1)}
          </div>
        </div>
        <h3 className="text-4xl font-[500] text-white">
          {product?.productName}
        </h3>
        <p className="w-full max-w-[42ch] leading-[22px] text-[#9AA4AE]">
          {product?.productHeading}
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-[22px] font-[700] text-[#BDC7D1]">Quick Colors</p>
          <div className="flex w-full max-w-[23rem] flex-wrap gap-2 gap-y-3">
            {product?.productColors?.map(
              (it, key) =>
                it !== "" && (
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
                ),
            )}
          </div>
        </div>
        <LikeToPrint
          amount={amount}
          setamount={setamount}
          sizes={product?.productSizes}
          error={error}
          seterror={seterror}
          tool={true}
        />
        <div className="mt-16 flex flex-col gap-4 small:mt-3">
          <BulkCalculator
            price={product?.productPrice}
            salePercent={product?.salePercent}
          />
          <SelectMaterial
            materials={product?.materials || []}
            selectedType={selectedType}
            setselectedType={setselectedType}
          />
          <input
            type="text"
            className="w-full rounded-[0.8rem] border border-borderP px-5 py-3 text-[18px] font-[500] outline-none hover:border-black"
            placeholder="Write instruction"
            id="instr-prod"
          />
          <FileCapturer
            setuploadedFiles={setuploadedFiles}
            uploadedFiles={uploadedFiles}
          />
          <DateSelector
            selectedDate={selectedDate}
            setselectedDate={setselectedDate}
          />
        </div>
        <p className="mt-8 text-[23px] font-[600] underline underline-offset-4 ">
          Total{" "}
          <span className="text-pmRed underline">${calculatePrice()}</span>
        </p>
        <div className="flex-center mt-8 justify-start gap-3 small:mt-2 smo:gap-1.5">
          <CustomButton
            svg={bag}
            text={"Add to Cart"}
            color="red"
            clickFunc={Addproduct}
            loading={loading}
          />
          <CustomButton
            svg={cart}
            text={"Check out"}
            color="black"
            clickFunc={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;

const arrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 6L20 12L14 18"
      stroke="#9AA4AE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12L4 12"
      stroke="#9AA4AE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
