"use client";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import notificationCaller from "@/components/NotificationCaller";
import ProductCardTemp from "@/components/ProductCardTemp";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  const { userData } = useContext(ContextStore);
  const notificationCall = (result, message) => {
    notificationCaller(
      result.success,
      result.success ? message : result.error,
      toast,
    );
  };
  return (
    <>
      <ToastContainer />
      <div
        className={`mt-4 w-full ${userData?.wishlist && userData?.wishlist?.length > 0 ? "grid grid-cols-2 " : "flex-center"} pb-10`}
      >
        {userData?.wishlist && userData?.wishlist?.length > 0 ? (
          userData?.wishlist?.map((it, index) => (
            <ProductCardTemp
              name={it.productName}
              slug={it.slug}
              img={it.productImg}
              key={index}
              border={index % 2 === 0}
              smGrid={false}
              customizable={it.customizable}
              border_r={true}
              notificationCall={notificationCall}
            />
          ))
        ) : (
          <div className="flex-center m-auto w-full flex-col gap-8">
            <Image
              src={"/emptyCart.gif"}
              width={1000}
              height={1000}
              alt="empty cart"
              className="h-40 w-40"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-center text-[35px] font-[500] ">
                Your Wishlist is Empty
              </h1>
              <p className="max-w-[32ch] text-center text-[18px] font-[400] text-[#707070]">
                You have no items in your Wishlist. Lets go buy somthing!
              </p>
            </div>
            <Link
              href={"/categories/All"}
              className="mt-6 rounded-[10px] border-none bg-pmRed px-5 py-3 text-white outline-none"
            >
              Continue to Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
