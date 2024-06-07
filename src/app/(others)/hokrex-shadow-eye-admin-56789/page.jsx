"use client";
import { ContextAdmin } from "@/components/Mainstate(Admin)/MainstateAdmin";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

function page() {
  const { getproducts, products } = useContext(ContextAdmin);
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div className="min-h-screen w-full bg-hoverC px-5">
      <div className="flex-center mt-5 w-full justify-between rounded-xl bg-Pn-dark-600 px-5 py-3">
        <h1 className="text-4xl font-[700] text-white">Products</h1>
        <span className="text-3xl font-[700] text-white">
          ({products?.length})
        </span>
      </div>
      <Products products={products} />
    </div>
  );
}

const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-6 py-10 ">
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
        <h2 className="pl-2 text-3xl font-[600] text-black">No Products</h2>
      )}
    </div>
  );
};

const ProductCard = ({ name, img, price, slug, category }) => {
  return (
    <Link
      className="relative flex h-max w-full max-w-[22rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-xl"
      href={"/orders/" + slug}
    >
      <div className="relative mx-1 mt-1 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          className="max-h-[287px] max-w-[320px] scale-[0.9]"
          src={img}
          alt="product image"
        />
      </div>
      <div className="mt-2 border-t border-gray-200 px-5 py-2 ">
        <h5 className="text-xl tracking-tight text-slate-900 small:text-[1.1rem]">
          {name}
        </h5>

        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 small:text-2xl">
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
        <div className="flex items-center justify-center rounded-md bg-Pn-default-500 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-Pn-light-400 focus:outline-none">
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
