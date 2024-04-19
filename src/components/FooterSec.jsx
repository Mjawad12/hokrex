import React from "react";
import SuggestedProducts from "./SuggestedProducts";
import Footer from "./Footer";

function FooterSec({ products }) {
  return (
    <div className="w-full pt-8 bg-darkP ">
      <SuggestedProducts products={products} />
      <Footer />
    </div>
  );
}

export default FooterSec;
