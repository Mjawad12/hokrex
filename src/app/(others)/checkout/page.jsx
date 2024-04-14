"use client";
import { google, left2 } from "@/Consonats";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import { CountrySelect, StateSelect } from "react-country-state-city";
import PhoneInput from "react-phone-number-input";
import CustomCheckbox from "@/components/CustomCheckbox";
import { OpnerCompoent } from "@/components/D_R_R";
import Image from "next/image";

function page() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [country, setcountry] = useState();
  const [state, setstate] = useState();
  const fileRef = useRef(null);
  const cartItems = [
    {
      name: "Test Sports 1.0",
      price: "34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
      Qty: "50",
      date: "23 March,2024",
    },
    {
      name: "Test Sports 1.0",
      price: "34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
      Qty: "50",
      date: "23 March,2024",
    },
    {
      name: "Test Sports 1.0",
      price: "34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
      Qty: "50",
      date: "23 March,2024",
    },
    {
      name: "Test Sports 1.0",
      price: "34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
      Qty: "50",
      date: "23 March,2024",
    },
    {
      name: "Test Sports 1.0",
      price: "34.25",
      src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
      sizes: [
        { type: "SM", val: "12" },
        { type: "LG", val: "06" },
        { type: "MD", val: "05" },
      ],
      Qty: "50",
      date: "23 March,2024",
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <CheckoutNav />
      <div className="max-w-[1100px] min-h-screen m-auto px-3 flex gap-12">
        <div className="w-full flex flex-col py-10  gap-3 flex-1 flex-grow-[0.6]">
          <button className="w-full py-3 border border-[#E5E5E5] flex-center rounded-lg ">
            {google}
            <p className="font-[400] text-[18px]">Continue with google</p>
          </button>
          <div className="flex-center [&>hr]:w-full w-full">
            <hr />
            <span className="px-3 text-[#707072]">or</span>
            <hr />
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-[26px] font-[700]">Shiping & Details</h2>
            <div className="flex flex-col gap-4 ">
              <div className="flex-center gap-4">
                <input
                  type="email"
                  className="checkoutInput"
                  placeholder="Name"
                />
                <div className="ph-in w-full py-[0.75rem] px-3 rounded-lg border border-[#E5E5E5] outline-none [&_input]:outline-none [&_input]:w-full">
                  <PhoneInput
                    defaultCountry="PK"
                    placeholder="Phone"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
              <div className="w-full  [&_input]:!outline-none [&_input]:!border-none ">
                <CountrySelect
                  onChange={(val) => setcountry(val.id)}
                  placeHolder="Select Country"
                />
              </div>
              <div className="flex-center gap-4">
                <input
                  type="text"
                  className="checkoutInput"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="checkoutInput"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="checkoutInput "
                  placeholder="Address(optional)"
                />
                <p className="text-[14px] font-[400]">
                  Add a house number if you have one
                </p>
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="checkoutInput"
                  placeholder="City"
                />
                <div className="w-full [&_select]:checkoutInput [&_input]:!outline-none [&_input]:!border-none ">
                  <StateSelect
                    countryid={country}
                    value={state}
                    onChange={(val) => setstate(val)}
                    placeholder={"State"}
                  />
                </div>
                <input
                  type="text"
                  className="checkoutInput"
                  placeholder="Zipcode"
                />
              </div>
              <div className="flex gap-3">
                <CustomCheckbox
                  fontSize="sm"
                  gap="1"
                  text={" Save this information for next time"}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="File Link (optional)"
                  className="checkoutInput"
                />
                <div className="flex-center justify-start gap-3 mt-1 ">
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
                  <button
                    className="cs-in-1"
                    onClick={() => fileRef.current.click()}
                  >
                    Choose File
                  </button>
                  <p
                    className="text-[13px] font-[500]"
                    onClick={() => fileRef.current.click()}
                  >
                    No File selected
                  </p>
                  <p className="text-[14px] font-[500] text-gray-400 ">
                    (optional)
                  </p>
                </div>
                <p className="text-[13px] font-[500]">
                  If The File Is Larger Than 256mb, Please Provide A Dropbox Or
                  Other Link For Download Below
                </p>
              </div>
              <button
                className={`px-5 py-3  text-white bg-[black] font-[500] text-[17px] rounded-[0.8rem] w-max mt-5`}
              >
                Continue to pay
              </button>
              <div className="mt-8">
                <OpnerCompoent text={"Paymet"}></OpnerCompoent>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex-grow-[0.4] border-l border-borderP">
          <div className="flex flex-col px-10 py-10 gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-[22px] font-[500]  ">In your Cart</h2>
              <Link
                href={"/cart"}
                className="underline underline-offset-2 text-[13px] font-[500]"
              >
                Edit
              </Link>
            </div>
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
            <div className="flex justify-between items-center">
              <p className="text-[14px] font-[700]">Total</p>
              <span className="text-[17px] font-[600]">$1200.67</span>
            </div>
            <div className="w-full py-6 border-t border-borderP gap-5 flex flex-col ">
              {cartItems.map((it, index) => (
                <Smcard
                  key={index}
                  name={it.name}
                  sizes={it.sizes}
                  qty={it.Qty}
                  date={it.date}
                  price={it.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CheckoutNav = () => {
  return (
    <div className="w-full bg-black flex justify-between items-center py-2 px-4">
      <Link href={"/cart"} className="flex-center gap-1">
        {left2} <p className="text-white text-[13px]">Back to shopping cart</p>
      </Link>
      <h1 className="font-[500] text-white text-[40px]">Checkout</h1>
      <Link href={"/contact"} className="text-white text-[13px]">
        Contact@hokrex.com
      </Link>
    </div>
  );
};

const Smcard = ({ name, sizes, qty, date, price }) => {
  return (
    <div className="w-full flex gap-3 ">
      <Image
        src={"/Testimg.jpg"}
        alt="cart item"
        width={100}
        height={110}
        className="rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-[17px] font-[600]">{name}</h3>
        <div className="flex flex-col ">
          <div className="flex gap-1">
            <span className="text-[14px] text-[#707070]">Size: </span>
            <div className="flex gap-[0.3rem]">
              {sizes.map((it, index) => (
                <span key={index} className="text-[14px] text-[#707070]">
                  {it.type} {it.val},
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-[14px] text-[#707070]">Qty : {qty}</span>,
            <span className="text-[14px] text-[#707070]">@ ${price}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[14px] text-[#707070]">
              ${(price * qty).toFixed(2)}
            </span>
            <span className="text-[14px] text-[#707070]">Date: {date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
