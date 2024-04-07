"use client";
import FooterSec from "@/components/FooterSec";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [Selected, setSelected] = useState("Brand Appeal");
  const [currentPage, setcurrentPage] = useState(1);
  const [smGrid, setsmGrid] = useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main>
      <div className="flex">
        <Sidebar setSelected={setSelected} Selected={Selected} />
        <div className="flex flex-col w-full px-12 py-9 gap-10">
          <TopBar
            currentState={Selected}
            setsmGrid={setsmGrid}
            smGrid={smGrid}
          />
          <div className="w-full h-[12.5rem] bg-borderC rounded-[17px]"></div>
          <div
            className={`grid ${smGrid ? "grid-cols-4" : "grid-cols-3"} gap-5`}
          >
            {data.map((it, index) => (
              <ProductCard
                name={"Team Sports 1.0"}
                key={index}
                smGrid={smGrid}
              />
            ))}
          </div>
          <PagesAdder
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        </div>
      </div>
      <FooterSec />
    </main>
  );
}

const PagesAdder = ({ currentPage, setcurrentPage }) => {
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex-center gap-5 border-t border-borderP pt-8">
      <button
        onClick={() => setcurrentPage((e) => e - 1)}
        className="cursor-pointer border border-borderP text-[1.15rem] font-[500] py-2 px-5 bg-white rounded-[0.8rem] hover:border-black"
      >
        Previous
      </button>
      <div className="flex-center gap-3">
        {pages.map((it) => (
          <div
            className={`flex-center w-[2.6rem] h-[2.6rem] border border-borderP bg-white rounded-[0.8rem]  cursor-pointer  ${
              currentPage === it ? "!bg-black text-white" : "hover:border-black"
            }`}
          >
            <p key={it} className="text-[1.15rem] translate-y-[0.1rem]">
              {it}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setcurrentPage((e) => e + 1)}
        className="cursor-pointer border border-borderP text-[1.15rem] font-[500] py-2 px-8 bg-white rounded-[0.8rem] hover:border-black"
      >
        Next
      </button>
    </div>
  );
};
