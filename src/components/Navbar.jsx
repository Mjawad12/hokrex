"use client";
import React, { use, useContext, useEffect } from "react";
import { arrowDown, bag, logo, searchIcon, user } from "../Consonats.jsx";
import Link from "next/link.js";
import { ContextStore } from "./Mainstate(store)/Mainstatestore.jsx";
import { usePathname } from "next/navigation.js";

function Navbar({ cart }) {
  const { authToken } = useContext(ContextStore);
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between border-b border-[#E5E5E5] px-6 py-3 pb-5 pr-12 ">
      <Link
        href={"/"}
        className="flex flex-1 flex-grow-[0.1] items-center justify-center gap-2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] border-[0.5px] border-gray-500  ">
          {logo}
        </div>
        <h1 className="text-4xl font-[500]">Hokrex</h1>
      </Link>
      <div
        className={`flex h-[2.5rem] flex-1 flex-grow-[0.75] items-center ${
          pathname.includes("cart") || pathname.includes("account")
            ? "justify-end"
            : "justify-between"
        } `}
      >
        {!pathname.includes("cart") && !pathname.includes("account") && (
          <SearchBar />
        )}
        <SmNav
          cart={pathname.includes("cart")}
          authToken={authToken}
          account={pathname.includes("account")}
        />
      </div>
    </nav>
  );
}

const SearchBar = () => {
  return (
    <div
      className="flex w-full max-w-[28rem] items-center 
      rounded-[0.7rem] border border-gray-200 py-[0.45rem] pr-3 "
    >
      <input
        type="text"
        className="w-full border-none pl-4 outline-none placeholder:text-[0.8rem] placeholder:text-gray-300 "
        placeholder="Search for product"
      />
      <div className="cursor-pointer">{searchIcon}</div>
    </div>
  );
};

const SmNav = ({ cart, authToken, account }) => {
  return (
    <ul className="flex-center list-none gap-5 [&_li]:cursor-pointer  [&_li]:whitespace-nowrap [&_li]:text-[0.95rem] [&_li]:font-[500] hover:[&_li]:text-pmRed ">
      {!cart && !account && (
        <>
          <Link href={"/categories"}>
            <li>Products</li>
          </Link>
          <Link href={"/services"}>
            <li>Services</li>
          </Link>
          <Link href={"/about"}>
            <li>About us</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact us</li>
          </Link>
          <li className={` flex-center w-[165px] !text-[1rem]`}>
            <Link className="w-[160px]" href={"/qoute"}>
              <Dealerbtn />
            </Link>
          </li>
        </>
      )}
      <li className="gap-2 flex-center ">
        <Link
          href="/cart"
          className="flex-center logoStyle h-9 w-[2.4rem] border-gray-300 "
        >
          {bag}
        </Link>
        <Link
          href={authToken ? "/account" : "/login"}
          className={`flex-center logoStyle h-9 w-[2.4rem]  gap-1 border-gray-300 ${account ? "w-max px-3 pl-2 [&_svg:nth-child(1)]:fill-black [&_svg:nth-child(2)]:w-[10px]" : ""}`}
        >
          {user}
          {account && arrowDown}
        </Link>
      </li>
    </ul>
  );
};

const Dealerbtn = () => {
  return (
    <div
      className={`flex w-full max-w-[160px] items-center justify-center rounded-[0.8rem] py-[0.05rem]`}
      style={{
        background:
          "linear-gradient(90deg, #FF0000 0%, rgba(255, 138, 0, 0.845) 14.64%, rgba(241, 231, 0, 0.725) 27.77%, #10CB00 39.38%, #00CDE9 51.5%, #0009E9 64.12%, #AD00E9 77.24%, #E90062 87.84%, #E90000 99.46%)",
      }}
    >
      <button
        className={`w-full max-w-[158px] rounded-xl  bg-white py-[0.4rem] font-[500]`}
      >
        Request a Qoute
      </button>
    </div>
  );
};

export default Navbar;
