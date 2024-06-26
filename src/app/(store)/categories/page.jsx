"use client";
import { left } from "@/Consonats";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
function page() {
  const { categories } = useContext(ContextStore);
  const tele = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <secton className="min-h-[calc(100vh-65px)] w-full">
      <div className="flex-center w-full flex-col gap-4 px-5 py-10 pb-20 small:pt-5 ">
        <h1 className="text-[30px] font-[500] small:text-[20px]">
          Product Category
        </h1>
        <SmallArrowDown />
        <div className="flex-center mt-8 w-full max-w-[1300px] flex-wrap gap-8 small:mt-4">
          {categories.length > 0
            ? categories?.map((it) => (
                <CategoryCard name={it.name} items={it.items} link={it.link} />
              ))
            : tele.map((it) => (
                <div
                  key={it}
                  className="relative flex min-h-[270px] w-full max-w-[300px] animate-pulse overflow-hidden rounded-[15px] bg-gray-300 transition-all duration-700"
                ></div>
              ))}
        </div>
      </div>
    </secton>
  );
}

export default page;

const CategoryCard = ({ name, items, link }) => {
  return (
    <div className="flex-center flex-col gap-4">
      <div className="relative flex min-h-[270px] max-w-[300px] overflow-hidden rounded-[15px] bg-[#F5F5F5] [&_#overlay-effect]:hover:opacity-[1]">
        <Image src={"/shirt.png"} width={500} height={500} alt="shirt" />
        <div
          style={{
            backdropFilter: "blur(10px)",
            backgroundBlendMode: "multiply",
          }}
          id="overlay-effect"
          className="absolute inset-0 flex flex-col items-center justify-end  bg-[#000000BF] opacity-0 transition-all duration-[0.5s]"
        >
          <div className="flex-center flex-col">
            <p className="text-[22px] font-[500] leading-[25px] text-white">
              {name}
            </p>
            <span className="text-[13px] font-[400] text-white">
              {items} {items === 1 ? "item" : "items"}
            </span>
          </div>
          <Link
            href={link}
            className="mb-7 mt-20 rounded-[8px] bg-white px-4 py-2 font-[500] hover:bg-pmRed hover:text-white "
          >
            Visit Product
          </Link>
        </div>
      </div>
      <p className="hidden text-[20px] font-[500] small:block">{name}</p>
    </div>
  );
};

const SmallArrowDown = () => {
  return (
    <div className="flex-center relative z-10 h-[3.1rem] w-[3.1rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[20px] [&_svg]:w-[20px] ">
      <div className="flex-center relative flex rotate-[-90deg]">
        <span className="absolute left-[-5px]">{left}</span>
        {left}
      </div>
    </div>
  );
};

export { SmallArrowDown };
