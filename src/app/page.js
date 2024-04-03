"use client";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [Selected, setSelected] = useState("Brand Appeal");

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main className="flex">
      <Sidebar setSelected={setSelected} Selected={Selected} />
      <div className="flex flex-col w-full px-12 py-9 gap-10">
        <TopBar currentState={Selected} />
        <div className="w-full h-[12.5rem] bg-[#F5F5F5] rounded-[17px]"></div>
        <div className="flex gap-5 flex-wrap justify-between ">
          {data.map((it) => (
            <ProductCard name={"Team Sports 1.0"} />
          ))}
        </div>
      </div>
    </main>
  );
}

const ProductCard = ({ name }) => {
  return (
    <div className="max-w-[25.3rem] w-full flex-center flex-col gap-3">
      <div className="bg-[#F5F5F5] w-full h-[20rem]">
        <Image
          src={"/testimg.jpg"}
          width={500}
          height={500}
          alt="Product"
          className="w-full h-full"
        />
      </div>
      <p className="font-[500] text-[18px]">{name}</p>
    </div>
  );
};
