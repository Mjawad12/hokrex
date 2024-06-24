"use client";
import { arrowDown, google, left2, lock } from "@/Consonats";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import { CountrySelect, StateSelect } from "react-country-state-city";
import PhoneInput from "react-phone-number-input";
import CustomCheckbox from "@/components/CustomCheckbox";
import { OpnerCompoent } from "@/components/D_R_R";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ContextCart } from "@/components/Mainstate(cart)/Mainstatecart";
import { motion, useAnimate } from "framer-motion";
import { CartItem } from "../cart/page";

function page() {
  const [pages, setpages] = useState(0);
  const [value, setValue] = useState();
  const [totalquant, settotalquant] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [country, setcountry] = useState();
  const [states, setstates] = useState();
  const fileRef = useRef(null);
  const name = useRef(null);
  const address = useRef(null);
  const email = useRef(null);
  const zipcode = useRef(null);
  const [paytype, setpaytype] = useState("now");
  const [payBank, setpayBank] = useState("paypal");

  const { cartState } = useContext(ContextCart);

  useEffect(() => {
    let quant = 0;
    let price = 0;
    cartState.items.forEach((it) => {
      quant += it.quant;
      price += it.quant * it.price;
    });
    settotalquant(quant);
    settotalPrice(price);
  }, [cartState]);

  return (
    <div className="min-h-screen w-full">
      <CheckoutNav />
      <CartShower
        cartState={cartState}
        totalPrice={totalPrice}
        settotalPrice={settotalPrice}
        totalquant={totalquant}
      />
      <div className="small:flex-center m-auto flex min-h-screen max-w-[1080px] gap-12 overflow-hidden px-5 ">
        <div className="w-full flex-1 flex-grow-[0.6]  py-16 small:flex-grow-[1] small:py-5">
          <div
            className={`flex w-full flex-col gap-3 ${
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
            className={`flex w-full flex-col gap-3 ${
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
            className={`flex w-full flex-col gap-3 ${
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
              totalPrice={totalPrice}
            />
          </div>
        </div>

        <div className="w-full flex-1 flex-grow-[0.45] border-l border-borderP small:hidden">
          <div className="flex flex-col gap-5 px-14 py-16">
            <div className="flex items-center justify-between">
              <h2 className="text-[22px] font-[500]  ">In your Cart</h2>
              <Link
                href={"/cart"}
                className="text-[13px] font-[500] underline underline-offset-2"
              >
                Edit
              </Link>
            </div>
            <div className="flex w-full flex-col gap-[0.6rem]">
              <div className="flex w-full items-center justify-between">
                <p className="text-[14px] font-[600]">Total unit</p>
                <span className="text-[14px] font-[400] text-black ">
                  {totalquant}
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-[14px] font-[600]">Sub Total</p>
                <span className="text-[14px] font-[400] text-pmGray ">
                  ${totalPrice}
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-[14px] font-[600]">Shipping</p>
                <span className="text-[14px] font-[400] text-pmGray ">
                  Calculated at checkout
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-[700]">Total</p>
              <span className="text-[17px] font-[600]">
                ${parseFloat(totalPrice).toFixed(2)}
              </span>
            </div>
            <div className="flex w-full flex-col gap-6 border-t border-borderP py-6 ">
              {cartState.items.map((it, index) => (
                <Smcard
                  key={index}
                  name={it.name}
                  sizes={it.sizes}
                  qty={it.quant}
                  date={it.date}
                  price={it.price}
                  img={it.src}
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
      <button className="flex-center w-full rounded-lg border border-[#E5E5E5] py-3 ">
        {google}
        <p className="text-[18px] font-[400]">Continue with google</p>
      </button>
      <div className="flex-center w-full [&>hr]:w-full">
        <hr />
        <span className="px-3 text-[#707072]">or</span>
        <hr />
      </div>
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-[26px] font-[700]">Shiping & Details</h2>
        <div className="flex flex-col gap-4 ">
          <div className="flex-center gap-4 small:flex-col small:gap-4">
            <input
              type="email"
              className="checkoutInput"
              placeholder="Email"
              ref={email}
            />
            <div className="ph-in w-full rounded-lg border border-[#E5E5E5] px-3 py-[0.75rem] outline-none [&_input]:w-full [&_input]:outline-none">
              <PhoneInput
                defaultCountry="PK"
                placeholder="Phone"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className="w-full  [&_input]:!border-none [&_input]:!outline-none ">
            <CountrySelect
              onChange={(val) => setcountry(val)}
              placeHolder="Select Country"
            />
          </div>
          <div className="flex-center gap-4 small:flex-col small:gap-4">
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
            <p className="text-[14px] font-[400] small:hidden ">
              Add a house number if you have one
            </p>
          </div>
          <div className="flex gap-4 small:flex-col">
            <input type="text" className="checkoutInput" placeholder="City" />
            <div className="[&_select]:checkoutInput w-full [&_input]:!border-none [&_input]:!outline-none ">
              <StateSelect
                countryid={country?.id}
                value={states}
                onChange={(val) => setstates(val)}
                placeHolder={"State"}
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
            <div className="flex-center mt-1 justify-start gap-3 ">
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
            className={`mt-5 w-max rounded-[0.8rem]  bg-[black] px-5 py-3 text-[17px] font-[500] text-white small:mt-3`}
          >
            Continue to pay
          </button>
          <div className="mt-8 small:mt-2">
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
      <div className="mt-2 flex flex-col border-b border-borderP pb-8">
        <div className="flex w-full items-center justify-between pr-5">
          <h2 className="text-[15px] text-black">Shiping Address</h2>
          <button
            onClick={() => setpages(0)}
            className="border-none bg-transparent text-[14px] font-[500] underline underline-offset-2 outline-none"
          >
            Edit
          </button>
        </div>
        <p className="m1-1 text-[14px] font-[400] text-pmGray">{name}</p>
        <p className="text-[14px] font-[400] text-pmGray">{address}</p>
        <p className="text-[14px] font-[400] text-pmGray">
          {state?.name}, {country?.name} {zipcode}
        </p>
        <p className="mt-4 text-[14px] font-[400] text-pmGray">{email}</p>
        <p className="text-[14px] font-[400] text-pmGray">{phoneno}</p>
      </div>
      <div className="mt-4 flex w-full flex-col">
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
        className={`mt-5 w-max rounded-[0.8rem]  bg-[black] px-5 py-3 text-[17px] font-[500] text-white small:mt-3`}
      >
        Continue to pay
      </button>
      <div className="mt-8 small:hidden">
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
  totalPrice,
}) => {
  return (
    <>
      <h1 className="text-[22px] font-[600]">Shiping Address</h1>
      <div className="mt-2 flex flex-col border-b border-borderP pb-8">
        <div className="flex w-full items-center justify-between pr-5">
          <h2 className="text-[15px] text-black">Shiping Address</h2>
          <button
            onClick={() => setpages(0)}
            className="border-none bg-transparent text-[14px] font-[500] underline underline-offset-2 outline-none"
          >
            Edit
          </button>
        </div>
        <p className="m1-1 text-[15px] font-[400] text-pmGray">{name}</p>
        <p className="text-[15px] font-[400] text-pmGray">{address}</p>
        <p className="text-[15px] font-[400] text-pmGray">
          {state?.name}, {country?.name} {zipcode}
        </p>
        <p className="mt-5 text-[15px] font-[400] text-pmGray">{email}</p>
        <p className="text-[15px] font-[400] text-pmGray">{phoneno}</p>
        <div className="mt-5 flex flex-col gap-1">
          <h2 className="text-[16px] font-[500]">Choose how to pay</h2>
          <p className="text-[15px] font-[400] text-pmGray">
            {(paytype === "now" && "Pay in full now") ||
              (paytype === "half" && "Pay Part now, part later") ||
              (paytype === "later" && "Pay later by same payment method.")}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between ">
          <p className="font-[700]">${totalPrice}</p>
          <p className="text-[15px] font-[400] text-pmGray">
            Due amount ${totalPrice}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-5 border-b border-borderP pb-6">
        <div>
          <h2 className="text-[22px] font-[600]">Payment</h2>
          <div className="flex gap-2">
            <p className="text-[15px] font-[400] text-pmGray">
              {country?.name || "United State"}
            </p>
            <span className="text-[15px] underline underline-offset-2">
              Edit
            </span>
          </div>
        </div>
        <div className="w-full small:py-3">
          <CustomCheckbox
            text={"Do you have a Voucher or Promo code?"}
            fontSize={"sm"}
          />
        </div>
        <div className="mt-5 flex flex-col gap-4 small:mt-1">
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
              <p className="ml-2 text-[14px] font-[500]">
                Credit or Debit Card
              </p>
            </PayBank>
          </div>
          <div>
            <div className="flex-center mt-5 w-full gap-[0.6rem] small:flex-wrap small:justify-start">
              <div className="checkoutInput flex-center w-full max-w-[17.5rem] px-4 small:max-w-[100%]">
                <input
                  type="passowrd"
                  placeholder="Card Number"
                  className="w-full border-none outline-none "
                />
                {lock}
              </div>

              <input
                type="text"
                placeholder="MM/YY"
                className="checkoutInput !max-w-[8.6rem] px-4 pr-1 "
              />
              <input
                type="text"
                placeholder="CVC"
                className="checkoutInput !max-w-[8.6rem] pl-4 pr-0 "
              />
            </div>
            <div className="mt-3 flex items-center">
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
      <div className="mt-3 flex flex-col gap-2">
        <CustomCheckbox
          text={"Billing address ame as shipping address"}
          fontSize={"sm"}
        />
        <h3 className="mt-3 text-[15px] text-black">Shiping Address</h3>
        <p className="m1-1 text-[15px] font-[400] text-pmGray">{name}</p>
        <p className="text-[15px] font-[400] text-pmGray">{address}</p>
        <p className="text-[15px] font-[400] text-pmGray">
          {state?.name}, {country?.name} {zipcode}
        </p>
      </div>
      <button
        className={`mt-5 w-max  rounded-[0.8rem] bg-[black] px-5 py-3 text-[17px] font-[500] text-white`}
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
    <div className="flex w-full justify-between border-b border-borderP py-6">
      <div className="flex gap-3">
        <div
          onClick={() => setpaytype(type)}
          className={`h-[22px] w-[22px] cursor-pointer  rounded-full border border-black hover:border-2 ${
            paytype === type ? "border-[7.5px] hover:border-[7.5px]" : ""
          } `}
        />
        <div className="flex w-full max-w-max flex-col">
          <p className="text-[15px] font-[500]">{text}</p>
          <p className="w-full max-w-[50ch] whitespace-nowrap text-[14px] text-pmGray small:whitespace-pre-wrap">
            {subtext}
          </p>
        </div>
      </div>
      <span className="text-[15px] font-[700] ">${total}</span>
    </div>
  );
};

const Smcard = ({ name, sizes, qty, date, price, img }) => {
  return (
    <div className="flex w-full items-center gap-3 ">
      <Image
        src={img}
        alt="cart item"
        width={100}
        height={90}
        className="h-[95px] w-[100px] rounded-[12px] bg-[#F5F5F5] "
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-[17px] font-[600]">{name}</h3>
        <div className="flex flex-col ">
          <div className="flex flex-wrap gap-[0.3rem] gap-y-0">
            <span className="text-[14px] text-[#707070]">Size: </span>
            {sizes.map(
              (it, index) =>
                it.val !== 0 && (
                  <span
                    key={index}
                    className="whitespace-nowrap text-[14px] text-[#707070]"
                  >
                    {it.type} {it.val},
                  </span>
                ),
            )}
          </div>

          <div className="flex gap-3">
            <span className="text-[14px] text-[#707070]">Qty : {qty}</span>,
            <span className="text-[14px] text-[#707070]">@ ${price}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[14px] text-[#707070]">
              ${(price * qty).toFixed(2)}
            </span>
            <span className="whitespace-nowrap text-[14px] text-[#707070]">
              Date: {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutNav = ({ link, name, back }) => {
  const router = useRouter();
  return (
    <div
      className={`flex w-full items-center justify-between bg-black px-4 small:border-b small:border-[#D0D0D0] small:bg-white  ${back === "shopping" ? "py-4" : "py-2"} small:justify-center`}
    >
      <span
        onClick={() => router.back()}
        className="small:flex-center absolute left-3 hidden rotate-[90deg] [&_svg]:w-[20px]"
      >
        {arrowDown}
      </span>
      <Link
        href={link ?? "/cart"}
        className="flex flex-1 flex-grow-[0.2] items-center justify-start gap-1 small:hidden"
      >
        {left2}{" "}
        <p className="text-[13px] text-white">
          Back to {back ? back : "shopping cart"}
        </p>
      </Link>
      <h1 className="text-[20px] font-[500] text-white small:text-black">
        {name ?? "Checkout"}
      </h1>
      <Link
        href={"/contact"}
        className="flex-1 flex-grow-[0.2] text-end text-[13px] text-white small:hidden"
      >
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
        className={`h-[22px] w-[22px] cursor-pointer  rounded-full border border-black hover:border-2 ${
          payBank === type ? "border-[7.5px] hover:border-[7.5px]" : ""
        } `}
      />
      {children}
    </div>
  );
};

export default page;

export { CheckoutNav };

const CartShower = ({ cartState, totalPrice, settotalPrice, totalquant }) => {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();

  const AnimationFunc = async () => {
    if (!open) {
      animate(scope.current, {
        height: document.querySelector("body").scrollHeight + "px",
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      animate(scope.current, {
        height: 50,
      });
    }
    setopen(!open);
  };

  return (
    <motion.div
      ref={scope}
      initial={{ height: 50 }}
      className={`z-[99] hidden w-full flex-col  overflow-hidden bg-[#00000066] small:flex ${open ? "absolute top-[48px]" : "sticky top-0"}`}
    >
      <div id="cont-anim" className="relative flex flex-col bg-white">
        <div className="flex items-center justify-between border-b border-[#D0D0D0] bg-white px-5 py-2">
          <p className="text-[22px] font-[500]">Summary</p>
          <span className="flex-center gap-2 text-[16px] font-[600]">
            <span>
              ${totalPrice} ({totalquant}items)
            </span>
            <span
              className={`[&_svg]:w-[15px] ${open ? "[&_svg]:rotate-[180deg]" : "[&_svg]:rotate-0"} [&_svg]:duration-400 [&_svg]:transition-all`}
              onClick={AnimationFunc}
            >
              {arrowDown}
            </span>
          </span>
        </div>
        <div className="flex w-full flex-1 flex-grow-[0.6] flex-col gap-5 px-5 py-12 small:py-5 small:pb-0 ">
          <div className="flex flex-col gap-10 small:gap-5 ">
            {cartState?.items?.map((it, index) => (
              <CartItem
                name={it.name}
                price={it.price}
                sizes={it.sizes}
                src={it.src}
                key={index}
                quant={it.quant}
                date={it.date}
                id={it.id}
                instructionValue={it.instruction}
                slug={it.slug}
                colors={it.colors}
                index={index}
                settotalPrice={settotalPrice}
                files={it?.files || []}
                customized={it.customized}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-1 flex-grow-[0.45] flex-col gap-2 px-5">
          <div className="flex flex-col gap-2 py-0 ">
            <div className="flex w-full flex-col gap-5 rounded-lg pt-2.5 hover:border-black">
              <p className="text-[21px] font-[500] ">Summary</p>
              <div className="flex w-full flex-col gap-[0.1rem]">
                <div className="flex w-full items-center justify-between">
                  <p className="text-[15px] font-[500]">Total unit</p>
                  <span className="text-[15px] font-[500] text-black ">
                    {cartState.total}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-[15px] font-[500]">Sub Total</p>
                  <span className="text-[15px] font-[500] text-black ">
                    ${totalPrice ? totalPrice?.toFixed(2) : 0}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-[15px] font-[500]">Shipping</p>
                  <span className="text-[15px] font-[500] text-black ">
                    Calculated at checkout
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between pb-5">
                  <p className="text-[15px] font-[700]">Total price</p>
                  <span className="text-[17px] font-[600] text-pmRed">
                    ${totalPrice ? totalPrice?.toFixed(2) : 0}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex-center relative w-full gap-1 rounded-[10px] border border-black px-4 py-[0.6rem] text-[18px] font-[500] small:hidden"
              >
                Continue to Checkout
              </Link>
            </div>
            <div className="flex-center h-[26px] w-full max-w-[23rem] small:hidden small:max-w-max ">
              <p className="mr-1 text-[13px] font-[400]">Payment method</p>
              <Image
                src={"/visa.jpg"}
                width={35}
                height={35}
                alt="visa"
                className="h-[26px] w-[35px]"
              />
              <Image
                src={"/master.jpg"}
                width={28}
                height={28}
                alt="master card"
                className="h-[18px] w-[28px]"
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
    </motion.div>
  );
};
