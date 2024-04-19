"use client";
import React, { useState } from "react";
import FooterSec from "@/components/FooterSec";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

function Productpage({ products }) {
  const [Selected, setSelected] = useState("Brand Appeal");
  const [currentPage, setcurrentPage] = useState(1);
  const [smGrid, setsmGrid] = useState(false);
  return (
    <>
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
            {products?.map((it, index) => (
              <ProductCard
                name={it.productName}
                key={index}
                smGrid={smGrid}
                img={it.productImg}
                slug={it.slug}
              />
            ))}
          </div>
          <PagesAdder
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        </div>
      </div>
      <FooterSec products={products} />{" "}
    </>
  );
}

const PagesAdder = ({ currentPage, setcurrentPage }) => {
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
        {pages.map((it, index) => (
          <div
            key={index}
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

export default Productpage;
