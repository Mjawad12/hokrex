import React from "react";
import Link from "next/link";
import { bigArrowLeft } from "@/Consonats";

function TopNavigator() {
  const liItems = [
    "Brand Appeal",
    "Work wear",
    "Home & living",
    "Personal",
    "Team & Sports",
    "Pormotion items",
    "Gift items",
    "Print on demand",
  ];
  return (
    <div className="w-full border-b border-[#E5E5E5] px-[0.7rem]">
      <div className="w-full flex justify-start items-center max-w-[1530px] m-auto relative ">
        <Link
          className="max-w-[14rem] w-full text-pmRed flex justify-start items-center gap-2 font-[700] text-[16px] border-r border-borderP py-4 "
          href={"/"}
        >
          {bigArrowLeft}BACK TO HOME
        </Link>
        <ul className="flex-center gap-8 px-9">
          {liItems.map((it, index) => (
            <li
              className="hover:text-pmRed cursor-pointer font-[500] text-[18px] massive:text-[17px]"
              key={index}
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopNavigator;
