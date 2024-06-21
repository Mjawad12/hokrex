"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { heart, heartRed } from "@/Consonats";
import Link from "next/link";
import { ContextStore } from "./Mainstate(store)/Mainstatestore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
  const [mobBtns, setmobBtns] = useState(false);
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

  return (
    <>
      {mobBtns && <BtnsMob slug={slug} />}
      <div
        onClick={() => {
          if (window.innerWidth <= 968) {
            setmobBtns(true);
          }
        }}
        className={`relative ${smGrid ? "min-h-[415px] larger:min-h-[350px] large:min-h-[300px] med:min-h-[200px]  " : footer ? "min-h-[412px]" : "min-h-[550px] larger:min-h-[450px] large:min-h-[400px] med:min-h-[350px]  small:min-h-[220px]"} w-full
      border-b ${border ? (smGrid ? "border-r" : footer ? "border-r" : border_r ? "border-r" : "border-x") : ""} border-[#E5E5E5] p-2 transition-all duration-700 smo:border-0 smo:!border-t  smo:px-0 smo:py-4 [&_#prod]:hover:bg-[#F5F5F5] smo:[&_#prod]:hover:bg-transparent [&_#prod_#btns-prod]:hover:opacity-[1] [&_#prod_img]:hover:scale-[0.79] smo:[&_#prod_img]:hover:scale-[1]`}
      >
        <div
          id="prod"
          className={`flex-center relative ${smGrid ? "min-h-[415px] larger:min-h-[350px] large:min-h-[300px] med:min-h-[200px] " : footer ? "min-h-[394px]" : "min-h-[550px] larger:min-h-[450px] large:min-h-[400px] med:min-h-[350px]  small:min-h-[220px]"} w-full flex-col transition-all duration-700`}
        >
          <div className="relative z-10 flex items-center justify-between w-full px-5 small:px-0">
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
          <div className="h-[75%] w-full overflow-hidden med:h-full">
            <Image
              src={img}
              width={500}
              height={500}
              alt={"shirt" + slug}
              className="w-full h-full transition-all duration-700"
            />
          </div>
          <div
            id="btns-prod"
            className={`absolute ${smGrid ? "bottom-[4rem] med:bottom-[2.5rem]" : footer ? "bottom-[4.2rem]" : "bottom-[5.5rem] med:bottom-[4rem] "} flex w-max items-center ${footer ? "gap-2" : "gap-3 med:gap-2"} opacity-0 transition-all duration-700 small:hidden`}
          >
            <Link
              href={"/product/" + slug}
              style={{ boxShadow: "0px 4px 8px 0px #00000017" }}
              className={`w-full whitespace-nowrap bg-[#FFFFFF] ${smGrid ? "rounded-[7px] px-[1.7rem] py-[0.55rem] text-[14px] large:px-[1.3rem] large:py-[0.4rem] med:px-[1.1rem] med:text-[13px] " : footer ? "rounded-[7px] px-7 py-2.5 text-[14px]" : "rounded-[10px] px-8 py-3 text-[20px] massive:px-7 massive:py-2.5 massive:text-[17px] med:px-6 med:text-[16px] "} font-[500] hover:bg-[#000000CC] hover:text-white`}
            >
              Quick View
            </Link>
            <button
              className={`w-full bg-[#000000CC] ${smGrid ? "rounded-[7px] px-[1.7rem] py-[0.55rem] text-[14px] large:px-[1.3rem] large:py-[0.4rem] med:px-[1.1rem] med:text-[13px] " : footer ? "rounded-[7px] px-7 py-2.5 text-[14px]" : "rounded-[10px] px-8 py-3 text-[20px] massive:px-7 massive:py-2.5 massive:text-[17px] med:px-6 med:text-[16px]  "} font-[500] text-white`}
            >
              Customize
            </button>
          </div>
          <p
            className={`${smGrid ? "text-[16px]" : footer ? "text-[16px]" : "text-[21px] smo:text-[18px]"} font-[400]`}
          >
            {name}
          </p>
        </div>
      </div>
    </>
  );
};

const BtnsMob = ({ slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ backdropFilter: "blur(4.5px)" }}
      className="fixed inset-0 left-0 top-0 z-[80] hidden items-center justify-end bg-[#84848499] smo:flex"
    >
      <motion.div
        initial={{ y: "500%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        className="flex min-h-[155px] w-full flex-col items-center justify-between rounded-[14px] bg-[#F5F5F5] py-2 pb-4"
        drag="y"
      >
        <span className="h-[4px] w-[39px] cursor-grab touch-none rounded-full  bg-[#D4D2D2] active:cursor-grabbing "></span>
        <div className="flex flex-col items-center w-full gap-4 px-5">
          <Link
            href={"/product/" + slug}
            style={{ boxShadow: "0px 3px 6px 0px #00000017" }}
            className="w-full max-w-[349px] rounded-[10px] bg-white py-3 text-center text-[16px] font-[500] text-black"
          >
            Quick View
          </Link>
          <button className="w-full max-w-[349px] rounded-[10px] bg-[#313131] py-3 text-[16px] font-[500] text-white">
            Customize
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCardTemp;
