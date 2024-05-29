"use client";
import { motion, useAnimate } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { CountrySelect, StateSelect } from "react-country-state-city/dist/cjs";
import "react-country-state-city/dist/react-country-state-city.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { arrowDown } from "@/Consonats";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";

function page() {
  const { setuserData, userData } = useContext(ContextStore);
  const values = [
    {
      type: "Name",
      value: userData?.name,
      openState:
        "This is the name on your travel document, which could be a license or a passport.",
      children: function Name() {
        return (
          <form className="flex flex-col gap-7 py-6">
            <div className="flex w-full gap-3">
              <input
                type="text"
                placeholder="First name"
                className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
                maxLength={20}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
                maxLength={20}
                required
              />
            </div>
            <button className="w-max rounded-[10px] bg-black px-6 py-2.5 text-white">
              Save
            </button>
          </form>
        );
      },
    },
    {
      type: "Email address",

      value: userData?.email,
      openState: "Use an address you’ll always have access to.",
      children: function Email() {
        return (
          <form className="flex flex-col gap-6 py-6">
            <input
              type="email"
              placeholder="First name"
              className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
              required
            />
            <button className="w-max rounded-[10px] bg-black px-6 py-2.5 text-white">
              Save
            </button>
          </form>
        );
      },
    },
    {
      type: "Phone",
      value:
        userData?.phone === ""
          ? "Please provide your phone number"
          : userData?.phone,
      openState: "For Verification and conrdination",
      children: function Phone() {
        return (
          <form className="flex flex-col gap-7 py-6">
            <div className="flex w-full gap-3">
              <input
                type="number"
                placeholder="Phone"
                className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
                required
              />
              <input
                type="number"
                placeholder="Add Other"
                className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
              />
            </div>
            <button className="w-max rounded-[10px] bg-black px-6 py-2.5 text-white">
              Save
            </button>
          </form>
        );
      },
    },
    {
      type: "Address",
      value: userData?.address
        ? userData?.address
        : "Please provide your Address",
      openState: "Use a permanent address where you can receive mail.",
      children: function Address() {
        const [country, setcountry] = useState({ iso2: "PK" });
        const [states, setstates] = useState();

        useEffect(() => {
          document
            .querySelectorAll(".stdropdown-input input")
            .forEach((it) => (it.required = true));

          // console.log(flags["PK"]());
        }, []);
        return (
          <form className="flex flex-col gap-3 py-5 pb-20">
            <div className="flex w-full flex-col gap-2 [&_input:nth-child(1)]:!border-none [&_input]:!outline-none">
              <div
                id="cs-pi"
                className="relative flex w-full rounded-[10px] border pl-1 [&>div:nth-child(1)]:flex-1 [&_.stdropdown-container]:!border-none [&_.stdropdown-tools]:!hidden focus:[&_input]:border-black"
              >
                <CountrySelect
                  required={true}
                  onChange={(val) => {
                    console.log(val);
                    setcountry(val);
                  }}
                  placeHolder="Country/region"
                />
                <div className="flex-center absolute right-2 top-[50%] w-max translate-y-[-50%] gap-2 [&_svg]:w-[10px] ">
                  <span
                    style={{ backgroundSize: "cover" }}
                    className={`fi fi-${country?.iso2.toLowerCase()} !h-[26px] !w-[33px] rounded-[4px] border border-black `}
                  ></span>
                  {arrowDown}
                </div>
              </div>
              <input
                // ref={address}
                required
                type="text"
                className="checkoutInput mt-2 !rounded-[10px]"
                placeholder="Street Address"
              />
              <p className="text-[14px] font-[400]">
                Add a house number if you have one
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                required
                className="checkoutInput rounded-[10px]"
                placeholder="City"
              />
              <div className="[&_select]:checkoutInput w-full [&_input]:!border-none [&_input]:!outline-none ">
                <StateSelect
                  countryid={country?.id}
                  value={states}
                  onChange={(val) => setstates(val)}
                  placeHolder="State"
                />
              </div>
              <input
                // ref={zipcode}
                type="text"
                className="checkoutInput rounded-[10px]"
                placeholder="Zipcode"
              />
            </div>
            <button className="mt-3 w-max rounded-[10px] bg-black px-6 py-2.5 text-white">
              Save
            </button>
          </form>
        );
      },
    },
  ];
  const [opened, setopened] = useState(null);
  const [blur, setblur] = useState(false);

  return (
    <div className="mt-7 flex w-full flex-col gap-3">
      {values.map((it, index) => (
        <Editcomponent
          type={it.type}
          value={it.value}
          key={index}
          openState={it.openState}
          index={index}
          setopened={setopened}
          opened={opened}
          open={opened === index}
          setblur={setblur}
          blur={blur}
        >
          {it.children()}
        </Editcomponent>
      ))}
    </div>
  );
}

export default page;

const Editcomponent = ({
  children,
  type,
  value,
  openState,
  index,
  setopened,
  opened,
  open,
  setblur,
  blur,
}) => {
  const [scope, animate] = useAnimate();

  const openAnimate = () => {
    setblur(!blur);
    opened === null ? setopened(index) : setopened(null);
    !open
      ? animate(scope.current, { height: scope.current.scrollHeight + "px" })
      : animate(scope.current, { height: "88px" });
  };

  return (
    <motion.div
      ref={scope}
      animate={{ opacity: blur ? (open ? 1 : 0.3) : 1 }}
      className="flex h-[85px] w-full max-w-[610px] flex-col overflow-hidden border-b"
    >
      <div className="flex w-full items-start justify-between pt-3 ">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[16px] font-[400]">{type}</h2>
          <p className="text-[14px] text-[#707070]">
            {open ? openState : value}
          </p>
        </div>
        <div>
          <button
            onClick={openAnimate}
            className="border-none text-[15px] font-[600] underline underline-offset-2 outline-none "
            disabled={blur && !open}
          >
            {open ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      <motion.div animate={{ opacity: open ? 1 : 0 }}>{children}</motion.div>
    </motion.div>
  );
};
