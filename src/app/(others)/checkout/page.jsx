"use client";
import { google, left2, lock } from "@/Consonats";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import { CountrySelect, StateSelect } from "react-country-state-city";
import PhoneInput from "react-phone-number-input";
import CustomCheckbox from "@/components/CustomCheckbox";
import { OpnerCompoent } from "@/components/D_R_R";
import Image from "next/image";

function page() {
  const [pages, setpages] = useState(0);
  const [value, setValue] = useState();
  const [country, setcountry] = useState();
  const [states, setstates] = useState();
  const fileRef = useRef(null);
  const name = useRef(null);
  const address = useRef(null);
  const email = useRef(null);
  const zipcode = useRef(null);
  const [paytype, setpaytype] = useState("now");
  const [payBank, setpayBank] = useState("paypal");

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
      <div className="max-w-[1080px] min-h-screen m-auto px-3 flex gap-12">
        <div className="w-full py-16 flex-1 flex-grow-[0.6]">
          <div
            className={`w-full flex flex-col gap-3 ${
              pages === 0 ? "block" : "hidden"
            } `}
          >
            <Page1
              setpages={setpages}
              country={country}
              setValue={setValue}
              setcountry={setcountry}
              setstates={setstates}
              states={states}
              value={value}
              fileRef={fileRef}
              address={address}
              email={email}
              name={name}
              zipcode={zipcode}
            />
          </div>
          <div
            className={`w-full flex flex-col gap-3 ${
              pages === 1 ? "block" : "hidden"
            } `}
          >
            <Page2
              paytype={paytype}
              setpaytype={setpaytype}
              address={address.current?.value}
              country={country}
              email={email.current?.value}
              name={name.current?.value}
              state={states}
              zipcode={zipcode.current?.value}
              setpages={setpages}
              phoneno={value}
            />
          </div>
          <div
            className={`w-full flex flex-col gap-3 ${
              pages === 2 ? "block" : "hidden"
            } `}
          >
            <Page3
              paytype={paytype}
              address={address.current?.value}
              country={country}
              email={email.current?.value}
              name={name.current?.value}
              state={states}
              zipcode={zipcode.current?.value}
              setpages={setpages}
              phoneno={value}
              payBank={payBank}
              setpayBank={setpayBank}
            />
          </div>
        </div>

        <div className="w-full flex-1 flex-grow-[0.45] border-l border-borderP">
          <div className="flex flex-col px-14 py-16 gap-5">
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
            <div className="w-full py-6 border-t border-borderP gap-6 flex flex-col ">
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

const Page1 = ({
  value,
  setValue,
  setcountry,
  country,
  states,
  setstates,
  fileRef,
  setpages,
  name,
  address,
  email,
  zipcode,
}) => {
  return (
    <>
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
              placeholder="Email"
              ref={email}
            />
            <div className="ph-in w-full py-[0.75rem] px-3 rounded-lg border border-[#E5E5E5] outline-none [&_input]:outline-none [&_input]:w-full">
              <PhoneInput
                defaultCountry="PK"
                placeholder="Phone"
                value={value}
                onChange={(e) => setValue(e)}
              />
            </div>
          </div>
          <div className="w-full  [&_input]:!outline-none [&_input]:!border-none ">
            <CountrySelect
              onChange={(val) => setcountry(val)}
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
              ref={name}
              type="text"
              className="checkoutInput"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              ref={address}
              type="text"
              className="checkoutInput "
              placeholder="Address(optional)"
            />
            <p className="text-[14px] font-[400]">
              Add a house number if you have one
            </p>
          </div>
          <div className="flex gap-4">
            <input type="text" className="checkoutInput" placeholder="City" />
            <div className="w-full [&_select]:checkoutInput [&_input]:!outline-none [&_input]:!border-none ">
              <StateSelect
                countryid={country?.id}
                value={states}
                onChange={(val) => setstates(val)}
                placeholder={"State"}
              />
            </div>
            <input
              ref={zipcode}
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
            onClick={() => setpages((val) => val + 1)}
            className={`px-5 py-3  text-white bg-[black] font-[500] text-[17px] rounded-[0.8rem] w-max mt-5`}
          >
            Continue to pay
          </button>
          <div className="mt-8">
            <OpnerCompoent text={"Paymet"}></OpnerCompoent>
          </div>
        </div>
      </div>
    </>
  );
};

const Page2 = ({
  name,
  address,
  email,
  country,
  phoneno,
  zipcode,
  state,
  setpages,
  paytype,
  setpaytype,
}) => {
  const total = "1200.95";
  return (
    <>
      <h1 className="text-[22px] font-[600]">Shiping Address</h1>
      <div className="flex flex-col mt-2 pb-8 border-b border-borderP">
        <div className="flex w-full justify-between items-center pr-5">
          <h2 className="text-black text-[15px]">Shiping Address</h2>
          <button
            onClick={() => setpages(0)}
            className="border-none outline-none text-[14px] underline underline-offset-2 bg-transparent font-[500]"
          >
            Edit
          </button>
        </div>
        <p className="text-[14px] font-[400] text-pmGray m1-1">{name}</p>
        <p className="text-[14px] font-[400] text-pmGray">{address}</p>
        <p className="text-[14px] font-[400] text-pmGray">
          {state?.name}, {country?.name} {zipcode}
        </p>
        <p className="mt-4 text-[14px] font-[400] text-pmGray">{email}</p>
        <p className="text-[14px] font-[400] text-pmGray">{phoneno}</p>
      </div>
      <div className="w-full flex flex-col mt-4">
        <h2 className="text-[22px] font-[600]">Chose how to pay</h2>
        <PayType
          text={"Pay in full now"}
          paytype={paytype}
          setpaytype={setpaytype}
          type={"now"}
        />
        <PayType
          total={(total / 2).toFixed(2)}
          text={"Pay Part now, part later"}
          subtext={`Pay (${(total / 2).toFixed(2)}) now. and the rest ($${(
            total / 2
          ).toFixed(2)}) will be pay after completed the order.`}
          paytype={paytype}
          setpaytype={setpaytype}
          type={"half"}
        />
        <PayType
          total={"1.00"}
          text={"Pay later"}
          subtext="Pay later by same payment method."
          paytype={paytype}
          setpaytype={setpaytype}
          type={"later"}
        />
      </div>
      <button
        onClick={() => setpages((val) => val + 1)}
        className={`px-5 py-3  text-white bg-[black] font-[500] text-[17px] rounded-[0.8rem] w-max mt-5`}
      >
        Continue to pay
      </button>
      <div className="mt-8">
        <OpnerCompoent text={"Paymet"}></OpnerCompoent>
      </div>
    </>
  );
};

const Page3 = ({
  name,
  address,
  email,
  country,
  phoneno,
  zipcode,
  state,
  setpages,
  paytype,
  payBank,
  setpayBank,
}) => {
  const total = "1200.95";
  return (
    <>
      <h1 className="text-[22px] font-[600]">Shiping Address</h1>
      <div className="flex flex-col mt-2 pb-8 border-b border-borderP">
        <div className="flex w-full justify-between items-center pr-5">
          <h2 className="text-black text-[15px]">Shiping Address</h2>
          <button
            onClick={() => setpages(0)}
            className="border-none outline-none text-[14px] underline underline-offset-2 bg-transparent font-[500]"
          >
            Edit
          </button>
        </div>
        <p className="text-[15px] font-[400] text-pmGray m1-1">{name}</p>
        <p className="text-[15px] font-[400] text-pmGray">{address}</p>
        <p className="text-[15px] font-[400] text-pmGray">
          {state?.name}, {country?.name} {zipcode}
        </p>
        <p className="mt-5 text-[15px] font-[400] text-pmGray">{email}</p>
        <p className="text-[15px] font-[400] text-pmGray">{phoneno}</p>
        <div className="flex flex-col gap-1 mt-5">
          <h2 className="text-[16px] font-[500]">Choose how to pay</h2>
          <p className="text-[15px] font-[400] text-pmGray">
            {(paytype === "now" && "Pay in full now") ||
              (paytype === "half" && "Pay Part now, part later") ||
              (paytype === "later" && "Pay later by same payment method.")}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 ">
          <p className="font-[700]">${total}</p>
          <p className="text-[15px] font-[400] text-pmGray">Due amount $0.00</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-4 pb-6 border-b border-borderP">
        <div>
          <h2 className="text-[22px] font-[600]">Payment</h2>
          <div className="flex gap-2">
            <p className="text-[15px] font-[400] text-pmGray">
              {country?.name || "United State"}
            </p>
            <span className="underline underline-offset-2 text-[15px]">
              Edit
            </span>
          </div>
        </div>
        <CustomCheckbox
          text={"Do you have a Voucher or Promo code?"}
          fontSize={"sm"}
        />
        <div className="flex flex-col gap-4 mt-5">
          <h3 className="text-[15px] font-[500]">Select payment method</h3>
          <div className="flex gap-8">
            <PayBank payBank={payBank} setpayBank={setpayBank} type={"paypal"}>
              <Image
                src={"/paypal.png"}
                width={100}
                height={100}
                alt="paypal"
                className="ml-[0.2rem]"
              />
            </PayBank>
            <PayBank payBank={payBank} setpayBank={setpayBank} type={"card"}>
              <p className="text-[14px] font-[500] ml-2">
                Credit or Debit Card
              </p>
            </PayBank>
          </div>
          <div>
            <div className="w-full flex-center gap-[0.6rem] mt-5">
              <div className="w-full max-w-[17.5rem] checkoutInput flex-center px-4">
                <input
                  type="passowrd"
                  placeholder="Card Number"
                  className="outline-none border-none w-full "
                />
                {lock}
              </div>
              <input
                type="text"
                placeholder="MM/YY"
                className="checkoutInput !max-w-[8.6rem] px-4 pr-1"
              />
              <input
                type="text"
                placeholder="CVC"
                className="checkoutInput !max-w-[8.6rem] pl-4 pr-0"
              />
            </div>
            <div className="flex items-center mt-3">
              <p className="text-[13px]">Card Accepted</p>
              <Image src={"/visa.jpg"} width={35} height={35} alt="visa" />
              <Image
                src={"/master.jpg"}
                width={28}
                height={28}
                alt="maxtercard"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <CustomCheckbox
          text={"Billing address ame as shipping address"}
          fontSize={"sm"}
        />
        <h3 className="text-black text-[15px] mt-3">Shiping Address</h3>
        <p className="text-[15px] font-[400] text-pmGray m1-1">{name}</p>
        <p className="text-[15px] font-[400] text-pmGray">{address}</p>
        <p className="text-[15px] font-[400] text-pmGray">
          {state?.name}, {country?.name} {zipcode}
        </p>
      </div>
      <button
        className={`px-5 py-3  text-white bg-[black] font-[500] text-[17px] rounded-[0.8rem] w-max mt-5`}
      >
        Submit Payment
      </button>
    </>
  );
};

const PayType = ({
  text,
  total = 1200.67,
  subtext = `Pay the total (${total}) now and you’re all set.`,
  paytype,
  setpaytype,
  type,
}) => {
  return (
    <div className="w-full flex justify-between py-6 border-b border-borderP">
      <div className="flex gap-3">
        <div
          onClick={() => setpaytype(type)}
          className={`w-[22px] h-[22px] rounded-full  border border-black hover:border-2 cursor-pointer ${
            paytype === type ? "border-[7.5px] hover:border-[7.5px]" : ""
          } `}
        />
        <div className="flex flex-col">
          <p className="text-[15px] font-[500]">{text}</p>
          <p className="text-[14px] text-pmGray max-w-[50ch] whitespace-nowrap">
            {subtext}
          </p>
        </div>
      </div>
      <span className="text-[15px] font-[700] ">${total}</span>
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
        height={90}
        className="rounded-xl w-[100px] h-[95px]"
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

const CheckoutNav = () => {
  return (
    <div className="w-full bg-black flex justify-between items-center py-2 px-4">
      <Link href={"/cart"} className="flex-center gap-1">
        {left2} <p className="text-white text-[13px]">Back to shopping cart</p>
      </Link>
      <h1 className="font-[500] text-white text-[20px]">Checkout</h1>
      <Link href={"/contact"} className="text-white text-[13px]">
        Contact@hokrex.com
      </Link>
    </div>
  );
};

const PayBank = ({ children, payBank, type, setpayBank }) => {
  return (
    <div className="flex-center">
      <div
        onClick={() => setpayBank(type)}
        className={`w-[22px] h-[22px] rounded-full  border border-black hover:border-2 cursor-pointer ${
          payBank === type ? "border-[7.5px] hover:border-[7.5px]" : ""
        } `}
      />
      {children}
    </div>
  );
};

export default page;
