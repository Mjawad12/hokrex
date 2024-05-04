"use client";
import { searchIcon } from "@/Consonats";
import DropDown from "@/components/DropDown";
import Image from "next/image";
import React, { useState } from "react";

function Prod() {
  const [selectedOption, setselectedOption] = useState("All Categories");
  const products = [1, 2, 3, 4];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[18px] text-[500] text-textLight ">Product</h1>
      <div className="flex flex-col gap-2">
        <DropDown
          data={["text", "texasdt"]}
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
        />
        <SearchBar />
      </div>
      <div className="grid grid-cols-2 gap-2 gap-y-3">
        {products.map((it) => (
          <ProdItem />
        ))}
      </div>
    </div>
  );
}

export default Prod;

const SearchBar = () => {
  return (
    <div className="[&_svg]:stroke-textDark flex-center w-full rounded-md border border-darkLight bg-canvasColor px-3 py-[0.7rem] [&_svg]:w-[18px] ">
      <input
        type="text"
        className="text-textDark w-full bg-transparent text-[14px] outline-none "
        placeholder="Search Product"
      />
      {searchIcon}
    </div>
  );
};

const ProdItem = ({ img }) => {
  return (
    <div className="flex-center relative w-full max-w-[10rem] cursor-pointer rounded-md bg-darkLight [&_div]:hover:flex ">
      <Image
        src={img ? img : "/testimg3.png"}
        width={150}
        height={150}
        alt="shirt"
      />
      <div className="flex-center absolute bottom-2 hidden w-[88%] rounded-[0.2rem] border border-[#FFFFFF80] bg-textLight py-1 text-white transition-all duration-300 hover:bg-white hover:text-black">
        <p className="text-[12px]">Quick View</p>
      </div>
    </div>
  );
};
