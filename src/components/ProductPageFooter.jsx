"use client";
import React, { useContext, useEffect } from "react";

import ProductCardTemp from "./ProductCardTemp";
import { ContextStore } from "./Mainstate(store)/Mainstatestore";

function ProductPageFooter() {
  const { categoryProducts, getProducts } = useContext(ContextStore);

  useEffect(() => {
    getProducts("All");
  }, []);

  return (
    <div className="mt-14 w-full px-9 py-10 pb-0">
      <h3 className="text-5xl font-[600] text-black">RELATED PRODUCTS</h3>
      <div className="mt-3 grid grid-cols-2">
        {categoryProducts?.slice(0, 6).map((it, index) => (
          <ProductCardTemp
            name={it.productName}
            key={index}
            img={it.productImg}
            slug={it.slug}
            border={index % 2 === 0}
            smGrid={false}
            footer={true}
          />
        ))}
      </div>
      <div className="flex items-center justify-between py-5">
        <span className="text-[0.8rem] font-[300] text-black">
          @2024, Sublimatics Inc
        </span>
        <span className="text-[0.8rem] font-[300] text-black">
          Made by Hokrex
        </span>
      </div>
    </div>
  );
}

export default ProductPageFooter;
