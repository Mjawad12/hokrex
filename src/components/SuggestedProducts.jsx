import React from "react";
import ProductCard from "./ProductCardTemp";
function SuggestedProducts({ products }) {
  return (
    <div className="flex w-full flex-col gap-14 px-14 pb-24">
      <h3 className="text-5xl font-[600] text-white">TOP RELATED PRODUCTS</h3>
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
