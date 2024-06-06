import { left } from "@/Consonats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const categories = [
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
    { name: "Work wear", items: "220", link: "/categories/work-wear" },
  ];
  return (
    <secton className="min-h-[calc(100vh-65px)] w-full">
      <div className="flex-center w-full flex-col gap-4 py-10 pb-20">
        <h1 className="text-[30px] font-[500]">Product Category</h1>
        <div className="flex-center relative z-10 h-[3.1rem] w-[3.1rem] scale-x-[-1] cursor-pointer rounded-full border [&_svg]:h-[20px] [&_svg]:w-[20px] ">
          <div className="flex-center relative flex rotate-[-90deg]">
            <span className="absolute left-[-5px]">{left}</span>
            {left}
          </div>
        </div>
        <div className="mt-8 flex w-full max-w-[1300px] flex-wrap items-center justify-between gap-8">
          {categories.map((it) => (
            <CategoryCard name={it.name} items={it.items} link={it.link} />
          ))}
        </div>
      </div>
    </secton>
  );
}

export default page;

const CategoryCard = ({ name, items, link }) => {
  return (
    <div className="relative flex min-h-[270px] max-w-[300px] overflow-hidden rounded-[15px] [&_#overlay-effect]:hover:opacity-[1]">
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
  );
};
