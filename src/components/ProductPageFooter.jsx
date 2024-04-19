import React from "react";
import ProductCard from "./ProductCard";

function ProductPageFooter({ products }) {
  return (
    <div className="w-full bg-darkP px-9 py-10 pb-0">
      <h3 className="font-[500] text-5xl text-white">RELATED PRODUCTS</h3>
      <div className="grid grid-cols-3 mt-9 gap-5 gap-y-16">
        {products?.slice(0, 6).map((it, index) => (
          <ProductCard
            name={it.productName}
            key={index}
            footerProduct={true}
            dark={true}
            img={it.productImg}
            slug={it.slug}
          />
        ))}
      </div>
      <div className="flex justify-between items-center py-5 border-t border-gray-400 mt-20">
        <span className="text-[0.8rem] font-[300] text-gray-300">
          @2024, Sublimatics Inc
        </span>
        <span className="text-[0.8rem] font-[300] text-gray-300">
          Made by Hokrex
        </span>
      </div>
    </div>
  );
}

export default ProductPageFooter;
