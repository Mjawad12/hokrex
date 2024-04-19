import React from "react";
import ProductCard from "./ProductCard";
function SuggestedProducts({ products }) {
  return (
    <div className="w-full flex flex-col gap-14 px-14 pb-24">
      <h3 className="font-[600] text-5xl text-white">TOP RELATED PRODUCTS</h3>
      <div className="flex gap-6 ">
        {products?.slice(0, 6).map((it, index) => (
          <ProductCard
            name={it.productName}
            key={index}
            width={"sm"}
            dark={true}
            img={it.productImg}
            slug={it.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default SuggestedProducts;
