import React from "react";

import ProductCardTemp from "./ProductCardTemp";

function ProductPageFooter({ products }) {
  return (
    <div className="w-full bg-darkP px-9 py-10 pb-0">
      <h3 className="text-5xl font-[500] text-white">RELATED PRODUCTS</h3>
      <div className="mt-9 grid grid-cols-3 gap-5 gap-y-16">
        {products?.slice(0, 6).map((it, index) => (
          <ProductCardTemp
            name={it.productName}
            key={index}
            footerProduct={true}
            dark={true}
            img={it.productImg}
            slug={it.slug}
          />
        ))}
      </div>
      <div className="mt-20 flex items-center justify-between border-t border-gray-400 py-5">
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
