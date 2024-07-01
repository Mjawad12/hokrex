"use client";
import React, { useContext, useEffect, useState } from "react";
import LikeToPrint from "@/components/LikeToPrint";
import BulkCalculator from "@/components/BulkCalculator";
import SelectMaterial from "@/components/SelectMaterial";
import FileCapturer from "@/components/FileCapturer";
import DateSelector from "@/components/DateSelector";
import D_R_R from "@/components/D_R_R";
import ProductPageFooter from "@/components/ProductPageFooter";
import {
  arrowDown,
  bag,
  cart,
  check,
  heart,
  heartRed,
  share,
  star,
} from "@/Consonats";
import { ContextCart } from "../../Mainstate(cart)/Mainstatecart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notificationCaller from "../../NotificationCaller";
import { v4 } from "uuid";
import { ContextStore } from "../../Mainstate(store)/Mainstatestore";
import { useRouter } from "next/navigation";
import { Upload } from "@/app/(others)/hokrex-shadow-eye-admin-56789/addproduct/page";

function ProductShower({ product, products }) {
  const { dispatch } = useContext(ContextCart);
  const [selectedDate, setselectedDate] = useState(null);
  const [amount, setamount] = useState(0);
  const [error, seterror] = useState(null);
  const [uploadedFiles, setuploadedFiles] = useState([]);
  const [loading, setloading] = useState(false);
  const [reviewNumber, setreviewNumber] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [selectedType, setselectedType] = useState(null);

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

  useEffect(() => {
    product?.reviews.forEach((it) => {
      let rate = it.rating;
      let tempReview = reviewNumber;
      reviewNumber[+rate] += 1;
      setreviewNumber({ ...tempReview });
    });
  }, []);

  return (
    <div className="w-full flex-1 flex-grow-[0.56] border-l border-[#E5E5E5] pt-20 small:border-none small:pt-2">
      <div className="flex w-full max-w-[31rem] flex-col gap-5 px-10 small:m-auto smo:px-0">
        <TopBTNs hidden={true} product={product} />
        <div className="small:gao-3 flex gap-5">
          <p className="text-[22px] font-[600] text-pmRed">
            ${product?.productPrice}
          </p>
          <div className="flex-center gap-1 rounded-2xl border border-borderP px-3 text-[18px] font-[600] [&_svg]:relative [&_svg]:bottom-[1px]">
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
        <h3 className="text-4xl font-[500]">{product?.productName}</h3>
        <p className="w-full max-w-[42ch] leading-[22px]">
          {product?.productHeading}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-[22px] font-[700]">Quick Colors</p>
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

      <ToastContainer />

      <D_R_R
        description={product?.productDescription}
        reviews={product?.reviews}
        setreviewNumber={setreviewNumber}
        reviewNumber={reviewNumber}
      />
      <ProductPageFooter products={products} />
    </div>
  );
}

const CustomButton = ({ text, svg, color, clickFunc, loading }) => {
  return (
    <button
      onClick={clickFunc}
      disabled={loading}
      className={`flex-center gap-[1.6rem] whitespace-nowrap px-4 py-3 pr-12 text-white small:gap-[0.8rem] small:pr-5 ${
        color === "red"
          ? `bg-[#ea0000bc] hover:bg-[#EA0000]`
          : "bg-[#000000B2] hover:bg-[black] small:bg-black"
      }
    rounded-[0.8rem] text-[17px] font-[500] disabled:cursor-not-allowed disabled:bg-[#EA0000] [&_svg]:stroke-white`}
    >
      {svg}
      {text}
    </button>
  );
};

export default ProductShower;

const TopBTNs = ({ hidden, product }) => {
  const { authToken, setuserData, userData, wishlistAdd, wishlistDele } =
    useContext(ContextStore);
  const router = useRouter();

  const [InWhishlist, setInWhishlist] = useState(false);

  useEffect(() => {
    userData?.wishlist.forEach((it) => {
      if (it.slug === product?.slug) {
        setInWhishlist(true);
      }
    });
  }, [userData]);

  const wishlistEdit = async () => {
    if (!authToken) {
      router.push("/login");
    } else {
      if (InWhishlist) {
        setuserData((e) => {
          const temp_wishlist = e.wishlist;
          e.wishlist.forEach((it, index) => {
            if (it.slug === product?.slug) {
              temp_wishlist.splice(index, 1);
            }
          });
          return { ...e, wishlist: temp_wishlist };
        });
        setInWhishlist(false);
        const result = await wishlistDele(product?.slug);
        notificationCaller(
          result.success,
          result.success ? "Item removed from the wishlist." : result.error,
          toast,
        );
      } else {
        setInWhishlist(true);
        const wish = {
          productName: product?.productName,
          productImg: product?.productImg,
          slug: product?.slug,
          customizable: product?.customizable,
        };
        setuserData((e) => {
          return { ...e, wishlist: [...e.wishlist, wish] };
        });
        const result = await wishlistAdd(wish);

        notificationCaller(
          result.success,
          result.success ? "Item added to the wishlist." : result.error,
          toast,
        );
      }
    }
  };

  return (
    <div
      className={`flex gap-2 ${hidden ? "small:hidden" : "hidden smo:flex"}`}
    >
      <div
        onClick={wishlistEdit}
        className="flex-center cursor-pointer rounded-[12px] border border-borderP px-2 py-2 [&_svg]:scale-[0.9]"
      >
        {InWhishlist ? heartRed : heart}
      </div>
      <div
        onClick={() => {
          navigator.clipboard?.writeText(location.href);
          notificationCaller(true, "Link copied to clipboard!", toast);
          const data = {
            title: `PrintODS - ${product.productName}`,
            text: product.productHeading,
            url: location.href,
            file: [],
          };
          window.navigator?.share(data);
          notificationCaller(true, "Sharing...", toast);
        }}
        className="flex-center cursor-pointer rounded-[12px] border border-borderP px-2 py-2 [&_svg]:scale-[0.9]"
      >
        {share}
      </div>
    </div>
  );
};

export { TopBTNs, MobBar, CustomButton };

const MobBar = ({ product }) => {
  const router = useRouter();
  return (
    <div className="hidden w-full items-center justify-between px-5 py-3 smo:flex">
      <div
        onClick={() => router.back()}
        className="flex-center [&_svg]:w-10 [&_svg]:rotate-[90deg]"
      >
        {arrowDown}
        <span className="text-[16px] font-[400]">Back</span>
      </div>
      <TopBTNs hidden={false} product={product} />
    </div>
  );
};
