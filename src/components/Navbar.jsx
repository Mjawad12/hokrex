"use client";
import React, { useContext, useState } from "react";
import {
  arrowDown,
  bag,
  hamburger,
  logo,
  searchIcon,
  user,
} from "../Consonats.jsx";
import Link from "next/link.js";
import { ContextStore } from "./Mainstate(store)/Mainstatestore.jsx";
import { usePathname } from "next/navigation.js";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation.js";
import { ContextCart } from "./Mainstate(cart)/Mainstatecart.jsx";

function Navbar() {
  const { authToken, delFunc } = useContext(ContextStore);
  const { cartState } = useContext(ContextCart);

  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between gap-3 border-b border-[#E5E5E5] px-6 py-3 pb-5 pr-12 pt-5 large:pr-6 small:pb-2 smaller:pr-5">
      <Link
        href={"/"}
        className="flex flex-1 flex-grow-[0.1] items-center justify-center gap-2"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] small:h-9 small:w-9  ">
          {logo}
        </span>
        <h1 className="text-4xl font-[500] small:text-[34px]">PrintODS</h1>
      </Link>
      <div
        className={`flex h-[2.5rem] flex-1 flex-grow-[0.75] items-center gap-5 massive:flex-grow-[0.8] large:flex-grow-[1] small:justify-end ${
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
          delFunc={delFunc}
          cartState={cartState}
        />
      </div>
    </nav>
  );
}

const SearchBar = () => {
  return (
    <div
      className="flex w-full max-w-[28rem] items-center gap-1
      rounded-[0.7rem] border border-gray-200 py-[0.45rem] pr-3 small:hidden"
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

const SmNav = ({ cart, authToken, account, delFunc, cartState }) => {
  const [smNavState, setsmNavState] = useState(false);
  const router = useRouter();
  return (
    <ul className="flex-center relative list-none gap-5  small:[&>a]:hidden [&_li]:cursor-pointer [&_li]:whitespace-nowrap [&_li]:text-[0.95rem] [&_li]:font-[500] hover:[&_li]:text-pmRed">
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
          <li className={` flex-center w-[165px] !text-[1rem] smaller:hidden`}>
            <Link className="w-[160px]" href={"/qoute"}>
              <Dealerbtn />
            </Link>
          </li>
        </>
      )}
      <li className="flex-center gap-2 ">
        <Link
          href="/cart"
          className="flex-center logoStyle relative h-9 w-[2.4rem] border-gray-300 hover:border-black"
        >
          <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-pmRed text-center text-[11px] font-[700] text-white ">
            {cartState?.items?.length || 0}
          </span>
          {bag}
        </Link>
        <span
          className={`flex-center logoStyle h-9 w-[2.4rem] gap-1 border-gray-300 hover:border-black small:hidden ${account ? "w-max px-3 pl-2 [&_svg:nth-child(1)]:fill-black [&_svg:nth-child(2)]:w-[10px]" : ""}`}
          onClick={() => {
            account && setsmNavState(!smNavState);
            !account && router.push(authToken ? "/account" : "/login");
          }}
        >
          {user}
          {account && arrowDown}
        </span>

        <span className="small:flex-center logoStyle hidden h-9 w-[2.4rem] rounded-[11px] border-none bg-[#FAFAFA]">
          {hamburger}
        </span>
      </li>
      <AnimatePresence>
        {account && smNavState && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-11 z-[30] flex w-max flex-col gap-1.5 rounded-[15px] border border-[#E5E5E5] bg-white p-3 px-3.5"
          >
            <span className="text-[16px] text-black">My Account</span>
            <Link
              className="text-pmGray hover:text-black"
              href={"/account/wishlist"}
            >
              Wishlist
            </Link>
            <span
              onClick={() => {
                delFunc();
                router.push("/");
              }}
              className="text-pmGray hover:text-black"
            >
              Logout
            </span>
          </motion.div>
        )}
      </AnimatePresence>
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
