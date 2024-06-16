"use client";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import ProductCardTemp from "@/components/ProductCardTemp";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function page() {
  const { userData } = useContext(ContextStore);
  const wishlist = [
    {
      productCategory: "Brand Appeal",
      productColors: [
        "rgb(248, 231, 28)",
        "rgb(65, 117, 5)",
        "rgb(95, 95, 95)",
        "rgb(144, 19, 254)",
        "rgb(131, 114, 146)",
      ],
      productDescription:
        "Our hood is crafted from high-quality materials to keep you warm during chilly days. It features a comfortable fit and a stylish design, making it a must-have for your wardrobe. Whether you're hitting the slopes or running errands in the city, our hood will keep you cozy and fashionable.",
      productHeading:
        "Stay warm and stylish with our hood, perfect for any outdoor adventure",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
      productName: "Hood",
      productPrice: 29,
      productSizes: ["XS", "SM", "MD", "2XL", "XL", "LG", "3XL"],
      reviews: [],
      slug: "hood",
      __v: 0,
      _id: "6662dfa55b2f69e210505675",
    },
    {
      productCategory: "Brand Appeal",
      productColors: [
        "rgb(248, 231, 28)",
        "rgb(65, 117, 5)",
        "rgb(95, 95, 95)",
        "rgb(144, 19, 254)",
        "rgb(131, 114, 146)",
      ],
      productDescription:
        "Our hood is crafted from high-quality materials to keep you warm during chilly days. It features a comfortable fit and a stylish design, making it a must-have for your wardrobe. Whether you're hitting the slopes or running errands in the city, our hood will keep you cozy and fashionable.",
      productHeading:
        "Stay warm and stylish with our hood, perfect for any outdoor adventure",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
      productName: "Hood",
      productPrice: 29,
      productSizes: ["XS", "SM", "MD", "2XL", "XL", "LG", "3XL"],
      reviews: [],
      slug: "hood",
      __v: 0,
      _id: "6662dfa55b2f69e210505675",
    },
    {
      productCategory: "Brand Appeal",
      productColors: [
        "rgb(248, 231, 28)",
        "rgb(65, 117, 5)",
        "rgb(95, 95, 95)",
        "rgb(144, 19, 254)",
        "rgb(131, 114, 146)",
      ],
      productDescription:
        "Our hood is crafted from high-quality materials to keep you warm during chilly days. It features a comfortable fit and a stylish design, making it a must-have for your wardrobe. Whether you're hitting the slopes or running errands in the city, our hood will keep you cozy and fashionable.",
      productHeading:
        "Stay warm and stylish with our hood, perfect for any outdoor adventure",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
      productName: "Hood",
      productPrice: 29,
      productSizes: ["XS", "SM", "MD", "2XL", "XL", "LG", "3XL"],
      reviews: [],
      slug: "hood",
      __v: 0,
      _id: "6662dfa55b2f69e210505675",
    },
  ];
  return (
    <div
      className={`mt-4 w-full ${userData?.wishlist && userData?.wishlist?.length > 1 ? "grid grid-cols-2 " : "flex-center"}`}
    >
      {userData?.wishlist && userData?.wishlist?.length > 0 ? (
        wishlist?.map((it, index) => (
          <ProductCardTemp
            slug={it.slug}
            img={it.productImg}
            key={index}
            border={(index + 2) % 3 === 0 && index !== 0}
            smGrid={false}
            wishlist={true}
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
  );
}

export default page;
