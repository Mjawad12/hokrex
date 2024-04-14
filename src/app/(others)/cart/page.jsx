"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { calender, cart, cross } from "@/Consonats";
import Link from "next/link";

export default function page() {
  const cartItems = [
    {
      name: "Test Sports 1.0",
      price: "$34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
    },
    {
      name: "Test Sports 1.0",
      price: "$34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
    },
    {
      name: "Test Sports 1.0",
      price: "$34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
    },
    {
      name: "Test Sports 1.0",
      price: "$34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
    },
    {
      name: "Test Sports 1.0",
      price: "$34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
    },
  ];
  return (
    <div className="w-full min-h-screen  ">
      <div className="max-w-[1150px] min-h-screen m-auto px-3  flex gap-10">
        <div className="flex-1 flex-grow-[0.6] flex flex-col py-9 gap-5 w-full">
          <h1 className="font-[700] text-[20px]">My Cart</h1>
          <div className="flex flex-col gap-10">
            {cartItems.map((it, index) => (
              <CartItem
                name={it.name}
                price={it.price}
                sizes={it.sizes}
                src={it.src}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex-grow-[0.4] w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2 py-9 sticky top-0 left-0">
            <div className="flex flex-col border border-borderP hover:border-black px-[1.3rem] py-5  rounded-lg gap-5 max-w-[23rem] w-full ">
              <p className="text-[20px] font-[500] ">Summary</p>
              <div className="flex flex-col gap-[0.6rem] w-full">
                <div className="w-full flex justify-between items-center">
                  <p className="text-[14px] font-[600]">Total unit</p>
                  <span className="text-[14px] font-[400] text-black ">67</span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[14px] font-[600]">Sub Total</p>
                  <span className="text-[14px] font-[400] text-pmGray ">
                    $600.90
                  </span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[14px] font-[600]">Shipping</p>
                  <span className="text-[14px] font-[400] text-pmGray ">
                    Calculated at checkout
                  </span>
                </div>
              </div>
              <div className="border-y border-border-p flex justify-between items-center py-3">
                <p className="text-[14px] font-[600]">Total price</p>
                <span className="text-pmRed text-[17px] font-[600]">
                  $1200.67
                </span>
              </div>
              <Link
                href="/checkout"
                className="flex-center gap-1 w-full bg-black text-white font-[500] text-[18px] px-4 py-[0.8rem] rounded-2xl relative"
              >
                <span className="absolute left-5">{cart}</span>
                Check out
              </Link>
            </div>
            <div className="flex-center w-full max-w-[23rem] ">
              <p className="text-[13px] font-[400] mr-1">Payment method</p>
              <Image src={"/visa.jpg"} width={35} height={35} alt="visa" />
              <Image
                src={"/master.jpg"}
                width={28}
                height={28}
                alt="master card"
              />
              <Image
                src={"/paypal.jpg"}
                width={40}
                height={40}
                alt="paypal"
                className="ml-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartItem = ({ name, src, price, sizes }) => {
  const fileRef = useRef(null);
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[0.6rem]">
          <div className="flex gap-[0.9rem]">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={"/Testimg.jpg"}
                  alt="Cart item"
                  width={105}
                  height={105}
                  className="w-[100px] h-[100px] "
                />
              </div>
              <div className="absolute -top-2 -right-2 cursor-pointer">
                {cross}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-1">
              <p className="text-[20px] font-[500]">{name}</p>
              <p className="font-[600] text-[16px] text-pmRed">{price}</p>
              <div className="flex flex-wrap gap-2">
                {sizes?.map((it, index) => (
                  <div
                    className="flex-center border border-borderP rounded-[9px] overflow-hidden"
                    key={index}
                  >
                    <p className="border-r border-borderP px-2 py-[0.29rem] font-[700] text-[14px]">
                      {it.type}
                    </p>
                    <input
                      className="py-[0.29rem] w-[37px] outline-none font-[500] text-[14px] text-center placeholder:text-black "
                      placeholder={it.val}
                    ></input>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-center justify-start gap-4 mt-1 ">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onInput={(e) => {
                console.log(e.target.files);
                if (e.target.files.length > 0) {
                  e.target.nextElementSibling.nextElementSibling.innerText =
                    e.target.files[0].name;
                }
              }}
            />
            <button className="cs-in-1" onClick={() => fileRef.current.click()}>
              Choose File
            </button>
            <p
              className="text-[14px] font-[500]"
              onClick={() => fileRef.current.click()}
            >
              No File selected
            </p>
          </div>
          <input
            type="text"
            placeholder="File Link"
            className="px-4 py-2 w-full border border-borderP text-[14px] font-[500] outline-none rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-[8.2rem] py-[0.35rem] text-[14px] font-[500] border border-borderP rounded-lg">
            Add Instraction
          </button>
          <button className="w-[8.2rem] py-[0.35rem] text-[14px] font-[500] border border-borderP rounded-lg">
            View Colors
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ">
        <p className="text-[13px] font-[500]">
          If The File Is Larger Than 256mb, Please Provide A Dropbox Or Other
          Link For Download Below
        </p>
        <div className="flex justify-between items-center border-y border-black py-[0.7rem]">
          <div className="flex-center gap-3">
            <div className="flex-center gap-2 border-r-2 border-pmGray pr-3 ">
              {calender}
              <p className="text-[14px] font-[400] text-pmGray">
                23 March , 2024
              </p>
            </div>
            <p className="text-[14px] font-[500] text-pmGray ">
              Total units 67
            </p>
          </div>
          <p className="text-[17px] text-black font-[600] ">Sub Total $130</p>
        </div>
      </div>
    </div>
  );
};
