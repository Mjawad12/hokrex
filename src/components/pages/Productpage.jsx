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
        <div className="flex w-full flex-col gap-10 px-12 py-9">
          <TopBar
            currentState={Selected}
            setsmGrid={setsmGrid}
            smGrid={smGrid}
          />
          <div className="h-[12.5rem] w-full rounded-[17px] bg-borderC"></div>
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
    <div className="flex-center w-full gap-5 border-t border-borderP pt-8">
      <button
        onClick={() => setcurrentPage((e) => e - 1)}
        className="cursor-pointer rounded-[0.8rem] border border-borderP bg-white px-5 py-2 text-[1.15rem] font-[500] hover:border-black"
      >
        Previous
      </button>
      <div className="flex-center gap-3">
        {pages.map((it, index) => (
          <div
            key={index}
            className={`flex-center h-[2.6rem] w-[2.6rem] cursor-pointer rounded-[0.8rem] border border-borderP  bg-white  ${
              currentPage === it ? "!bg-black text-white" : "hover:border-black"
            }`}
          >
            <p key={it} className="translate-y-[0.1rem] text-[1.15rem]">
              {it}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setcurrentPage((e) => e + 1)}
        className="cursor-pointer rounded-[0.8rem] border border-borderP bg-white px-8 py-2 text-[1.15rem] font-[500] hover:border-black"
      >
        Next
      </button>
    </div>
  );
};

export default Productpage;
