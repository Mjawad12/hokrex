"use client";
import React, { useContext, useRef } from "react";
import Image from "next/image";
import { calender, cart, cross } from "@/Consonats";
import Link from "next/link";
import uselocalStorage from "@/components/Hooks/uselocalstorage";
import { ContextCart } from "@/components/Mainstate(cart)/Mainstatecart";

export default function page() {
  const { cartState } = useContext(ContextCart);
  // const cartItems = [
  //   {
  //     name: "Test Sports 1.0",
  //     price: "$34.25",
  //     src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
  //     sizes: [
  //       { type: "SM", val: "12" },
  //       { type: "LG", val: "06" },
  //       { type: "MD", val: "05" },
  //     ],
  //   },
  //   {
  //     name: "Test Sports 1.0",
  //     price: "$34.25",
  //     src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
  //     sizes: [
  //       { type: "SM", val: "12" },
  //       { type: "LG", val: "06" },
  //       { type: "MD", val: "05" },
  //     ],
  //   },
  //   {
  //     name: "Test Sports 1.0",
  //     price: "$34.25",
  //     src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
  //     sizes: [
  //       { type: "SM", val: "12" },
  //       { type: "LG", val: "06" },
  //       { type: "MD", val: "05" },
  //     ],
  //   },
  //   {
  //     name: "Test Sports 1.0",
  //     price: "$34.25",
  //     src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
  //     sizes: [
  //       { type: "SM", val: "12" },
  //       { type: "LG", val: "06" },
  //       { type: "MD", val: "05" },
  //     ],
  //   },
  //   {
  //     name: "Test Sports 1.0",
  //     price: "$34.25",
  //     src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
  //     sizes: [
  //       { type: "SM", val: "12" },
  //       { type: "LG", val: "06" },
  //       { type: "MD", val: "05" },
  //     ],
  //   },
  // ];
  return (
    <div className="min-h-screen w-full ">
      <div className="m-auto flex min-h-screen max-w-[1150px]  gap-10 px-3">
        <div className="flex w-full flex-1 flex-grow-[0.6] flex-col gap-5 py-9">
          <h1 className="text-[20px] font-[700]">My Cart</h1>
          <div className="flex flex-col gap-10 ">
            {cartState.items?.map((it, index) => (
              <CartItem
                name={it.name}
                price={it.price}
                sizes={it.sizes}
                src={it.src}
                key={index}
                quant={it.quant}
                date={it.date}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-1 flex-grow-[0.4] flex-col gap-2">
          <div className="sticky left-0 top-0 flex flex-col gap-2 py-9">
            <div className="flex w-full max-w-[23rem] flex-col gap-5 rounded-lg border  border-borderP px-[1.3rem] py-5 hover:border-black ">
              <p className="text-[20px] font-[500] ">Summary</p>
              <div className="flex w-full flex-col gap-[0.6rem]">
                <div className="flex w-full items-center justify-between">
                  <p className="text-[14px] font-[600]">Total unit</p>
                  <span className="text-[14px] font-[400] text-black ">67</span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-[14px] font-[600]">Sub Total</p>
                  <span className="text-[14px] font-[400] text-pmGray ">
                    $600.90
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-[14px] font-[600]">Shipping</p>
                  <span className="text-[14px] font-[400] text-pmGray ">
                    Calculated at checkout
                  </span>
                </div>
              </div>
              <div className="border-border-p flex items-center justify-between border-y py-3">
                <p className="text-[14px] font-[600]">Total price</p>
                <span className="text-[17px] font-[600] text-pmRed">
                  $1200.67
                </span>
              </div>
              <Link
                href="/checkout"
                className="flex-center relative w-full gap-1 rounded-2xl bg-black px-4 py-[0.8rem] text-[18px] font-[500] text-white"
              >
                <span className="absolute left-5">{cart}</span>
                Check out
              </Link>
            </div>
            <div className="flex-center w-full max-w-[23rem] ">
              <p className="mr-1 text-[13px] font-[400]">Payment method</p>
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

const CartItem = ({ name, src, price, sizes, quant, date }) => {
  const fileRef = useRef(null);
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[0.6rem]">
          <div className="flex gap-[0.9rem]">
            <div className="relative">
              <div className="h-[105px] w-[110px] overflow-hidden rounded-lg bg-[#EEEEEE]">
                <Image
                  src={src}
                  alt="Cart item"
                  width={105}
                  height={105}
                  className="h-[105px] w-[110px] "
                />
              </div>
              <div className="absolute -right-2 -top-2 cursor-pointer [&_path]:hover:stroke-white [&_rect]:fill-white [&_rect]:hover:fill-pmRed ">
                {cross}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-1">
              <p className="text-[20px] font-[500]">{name}</p>
              <p className="text-[16px] font-[600] text-pmRed">${price}</p>
              <div className="flex w-full max-w-[16rem] flex-wrap gap-2 gap-y-1">
                {sizes?.map(
                  (it, index) =>
                    it.val !== 0 && (
                      <div
                        className="flex-center overflow-hidden rounded-[9px] border border-borderP"
                        key={index}
                      >
                        <p className="border-r border-borderP px-2 py-[0.29rem] text-[14px] font-[700]">
                          {it.type}
                        </p>
                        <input
                          className="w-[37px] py-[0.29rem] text-center text-[14px] font-[500] outline-none placeholder:text-black "
                          defaultValue={it.val}
                          type="number"
                          onKeyDown={(e) => {
                            if (
                              e.target.value.length > 1 &&
                              e.key !== "Backspace"
                            ) {
                              e.preventDefault();
                            }
                          }}
                        ></input>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
          <div className="flex-center mt-1 justify-start gap-4 ">
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
            className="w-full rounded-xl border border-borderP px-4 py-2 text-[14px] font-[500] outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-[8.2rem] rounded-lg border border-borderP py-[0.35rem] text-[14px] font-[500]">
            Add Instraction
          </button>
          <button className="w-[8.2rem] rounded-lg border border-borderP py-[0.35rem] text-[14px] font-[500]">
            View Colors
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 ">
        <p className="text-[13px] font-[500]">
          If The File Is Larger Than 256mb, Please Provide A Dropbox Or Other
          Link For Download Below
        </p>
        <div className="flex items-center justify-between border-y border-black py-[0.7rem]">
          <div className="flex-center gap-3">
            <div className="flex-center gap-2 border-r-2 border-pmGray pr-3 ">
              {calender}
              <p className="text-[14px] font-[400] text-pmGray">{date}</p>
            </div>
            <p className="text-[14px] font-[500] text-pmGray ">
              Total units {quant}
            </p>
          </div>
          <p className="text-[17px] font-[600] text-black ">
            Sub Total ${price}
          </p>
        </div>
      </div>
    </div>
  );
};
