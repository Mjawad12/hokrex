"use client";
import { Context } from "@/components/Mainstate(Admin)/MainstateAdmin";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

function page() {
  return (
    <div className="w-full min-h-screen bg-adminBlueLight px-5">
      <div className="w-full py-3 px-5 bg-adminBlueDark mt-5 rounded-xl">
        <h1 className="text-4xl font-[700] text-white">Products</h1>
      </div>
      <Products />
    </div>
  );
}

const Products = () => {
  const { getproducts, products } = useContext(Context);
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="flex flex-wrap py-10 gap-6 ">
      {products && products.length > 0 ? (
        products?.map((it, index) => (
          <ProductCard
            key={index}
            name={it.productName}
            img={it.productImg}
            price={it.productPrice}
            category={it.productCategory}
          />
        ))
      ) : (
        <h2 className="text-3xl font-[600] text-white">No Products</h2>
      )}
    </div>
  );
};

const ProductCard = ({ name, img, price, slug, category }) => {
  return (
    <Link
      className="relative flex w-full max-w-[22rem] h-max flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-xl"
      href={"/orders/" + slug}
    >
      <div className="relative mx-1 mt-1 flex justify-center items-center  overflow-hidden rounded-xl">
        <img
          className="max-w-[320px] max-h-[287px] scale-[0.9]"
          src={img}
          alt="product image"
        />
      </div>
      <div className="mt-2 px-5 py-2 border-t border-gray-200 ">
        <h5 className="text-xl small:text-[1.1rem] tracking-tight text-slate-900">
          {name}
        </h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl small:text-2xl font-bold text-slate-900">
              {price}$
            </span>
          </p>
          <div className="flex items-center gap-1">
            <p className="text-sm">Category : </p>
            <span className=" rounded bg-yellow-200 px-2.5 py-0.5 text-[0.7rem] font-semibold">
              {category}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md bg-adminBlueDark px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-Pn-light-400 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Edit
        </div>
      </div>
    </Link>
  );
};

export default page;
