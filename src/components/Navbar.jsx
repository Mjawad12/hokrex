import React from "react";
import { bag, logo, searchIcon, user } from "../Consonats.jsx";
import Link from "next/link.js";

function Navbar({ cart }) {
  return (
    <div className="w-full flex justify-between items-center px-6 pr-12 py-3 border-b border-[#E5E5E5] ">
      <Link
        href={"/"}
        className="flex-1 flex-grow-[0.1] flex justify-center items-center gap-2"
      >
        <div className="w-10 h-10 flex justify-center items-center border-gray-500 border-[0.5px] rounded-[0.7rem]  ">
          {logo}
        </div>
        <h1 className="text-4xl font-[500]">Hokrex</h1>
      </Link>
      <div
        className={`flex-1 flex-grow-[0.75] flex items-center h-[2.5rem] ${
          cart ? "justify-end" : "justify-between"
        } `}
      >
        {!cart && <SearchBar />}
        <SmNav cart={cart} />
      </div>
    </div>
  );
}

const SearchBar = () => {
  return (
    <div
      className="flex items-center border border-gray-200 
      max-w-[28rem] w-full py-[0.45rem] pr-3 rounded-[0.7rem] "
    >
      <input
        type="text"
        className="outline-none border-none pl-4 w-full placeholder:text-[0.8rem] placeholder:text-gray-300 "
        placeholder="Search for product"
      />
      <div className="cursor-pointer">{searchIcon}</div>
    </div>
  );
};

const SmNav = ({ cart }) => {
  return (
    <ul className="list-none [&_li]:font-[500] [&_li]:cursor-pointer [&_li]:text-[0.95rem]  gap-5 flex-center ">
      {!cart && (
        <>
          <Link href={"/products"}>
            <li>Products</li>
          </Link>
          <li>Services</li>
          <li>About us</li>
          <li>Contact us</li>
          <li className={` w-[165px] flex-center !text-[1rem]`}>
            <Dealerbtn />
          </li>
        </>
      )}
      <li className="flex-center gap-2 ">
        <Link
          href="/cart"
          className="flex-center logoStyle w-[2.4rem] h-9 border-gray-300 "
        >
          {bag}
        </Link>
        <div className="flex-center logoStyle w-[2.4rem] h-9 border-gray-300 ">
          {user}
        </div>
      </li>
    </ul>
  );
};

const Dealerbtn = () => {
  return (
    <div
      className={`max-w-[160px] w-full flex justify-center items-center rounded-[0.8rem] py-[0.05rem]`}
      style={{
        background:
          "linear-gradient(90deg, #FF0000 0%, rgba(255, 138, 0, 0.845) 14.64%, rgba(241, 231, 0, 0.725) 27.77%, #10CB00 39.38%, #00CDE9 51.5%, #0009E9 64.12%, #AD00E9 77.24%, #E90062 87.84%, #E90000 99.46%)",
      }}
    >
      <button
        className={`bg-white max-w-[158px] w-full  py-[0.4rem] rounded-xl font-[500]`}
      >
        Request a Qoute
      </button>
    </div>
  );
};

export default Navbar;
