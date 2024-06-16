"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { heart, heartRed } from "@/Consonats";
import Link from "next/link";
import { ContextStore } from "./Mainstate(store)/Mainstatestore";
import { useRouter } from "next/navigation";
const ProductCardTemp = ({
  name,
  img = "/shirt.png",
  slug,
  border,
  smGrid,
  footer,
  customizable,
  border_r,
  notificationCall,
}) => {
  const { authToken, setuserData, userData, wishlistAdd, wishlistDele } =
    useContext(ContextStore);
  const [InWhishlist, setInWhishlist] = useState(false);
  const router = useRouter();
  // "max-w-[371px]" : "max-w-[520px]"
  const wishlistEdit = async () => {
    if (!authToken) {
      router.push("/login");
    } else {
      if (InWhishlist) {
        setuserData((e) => {
          const temp_wishlist = e.wishlist;
          e.wishlist.forEach((it, index) => {
            if (it.slug === slug) {
              temp_wishlist.splice(index, 1);
            }
          });
          return { ...e, wishlist: temp_wishlist };
        });
        setInWhishlist(false);
        const result = await wishlistDele(slug);
        notificationCall &&
          notificationCall(result, "Item removed from the wishlist.");
      } else {
        setInWhishlist(true);
        const wish = {
          productName: name,
          productImg: img,
          slug: slug,
          customizable: customizable,
        };
        setuserData((e) => {
          return { ...e, wishlist: [...e.wishlist, wish] };
        });
        const result = await wishlistAdd(wish);
        notificationCall &&
          notificationCall(result, "Item added to the wishlist.");
      }
    }
  };

  useEffect(() => {
    userData?.wishlist.forEach((it) => {
      if (it.slug === slug) {
        setInWhishlist(true);
      }
    });
  }, [userData]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div
      className={`relative ${smGrid ? "min-h-[415px]" : footer ? "min-h-[412px]" : "min-h-[550px]"} w-full
      border-b ${border ? (smGrid ? "border-r" : footer ? "border-r" : border_r ? "border-r" : "border-x") : ""}  border-[#E5E5E5] p-2 transition-all duration-700 
      [&_#prod]:hover:bg-[#F5F5F5] [&_#prod_#btns-prod]:hover:opacity-[1] [&_#prod_img]:hover:scale-[0.79]`}
    >
      <div
        id="prod"
        className={`flex-center relative ${smGrid ? "min-h-[415px]" : footer ? "min-h-[394px]" : "min-h-[550px]"} w-full flex-col transition-all duration-700`}
      >
        <div className="relative z-10 flex w-full items-center justify-between px-5">
          <span className="flex-center">
            {customizable && (
              <span
                className={`rounded-[6px] bg-black p-1 ${smGrid ? "!rounded-[5px] px-2 py-0.5 text-[10px]" : footer ? "px-[0.5rem] py-[0.25rem] text-[10px]" : "px-[0.6rem] text-[12px]"} font-[400] leading-[16px] text-white`}
              >
                Customizable
              </span>
            )}
          </span>

          <span
            onClick={wishlistEdit}
            className="cursor-pointer [&_svg]:hover:fill-pmRed"
          >
            {InWhishlist ? heartRed : heart}
          </span>
        </div>
        <div className="h-[75%] w-full overflow-hidden">
          <Image
            src={img}
            width={500}
            height={500}
            alt={"shirt" + slug}
            className="h-full w-full transition-all duration-700"
          />
        </div>
        <div
          id="btns-prod"
          className={`absolute ${smGrid ? "bottom-[4rem]" : footer ? "bottom-[4.2rem]" : "bottom-[5.5rem]"} flex w-max items-center ${footer ? "gap-2" : "gap-3"} opacity-0 transition-all duration-700`}
        >
          <Link
            href={"/product/" + slug}
            style={{ boxShadow: "0px 4px 8px 0px #00000017" }}
            className={`w-full whitespace-nowrap bg-[#FFFFFF] ${smGrid ? "rounded-[7px] px-[1.7rem] py-[0.55rem] text-[14px]" : footer ? "rounded-[7px] px-7 py-2.5 text-[14px]" : "rounded-[10px] px-8 py-3 text-[20px] massive:px-7 massive:py-2.5 massive:text-[17px]"} font-[500] hover:bg-[#000000CC] hover:text-white`}
          >
            Quick View
          </Link>
          <button
            className={`w-full bg-[#000000CC] ${smGrid ? "rounded-[7px] px-[1.7rem] py-[0.55rem] text-[14px]" : footer ? "rounded-[7px] px-7 py-2.5 text-[14px]" : "rounded-[10px] px-8 py-3 text-[20px] massive:px-7 massive:py-2.5 massive:text-[17px] "} font-[500] text-white`}
          >
            Customize
          </button>
        </div>
        <p
          className={`${smGrid ? "text-[16px]" : footer ? "text-[16px]" : "text-[21px]"} font-[400]`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ProductCardTemp;
