"use client";
import React, { createContext } from "react";
import { useState } from "react";
const ContextAdmin = createContext();

function MainstateAdmin({ children }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const [products, setproducts] = useState([]);
  const [approved, setapproved] = useState(false);

  const getproducts = async () => {
    const data = await fetch(`${url}/api/getproducts`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ productCategory: "All" }),
    });
    const parsedDate = await data.json();
    parsedDate.success && setproducts(parsedDate.products);
  };

  const addProductApi = async (
    name,
    category,
    desc,
    heading,
    imgUrl,
    price,
    colors,
    sizes,
    customizable,
    salePercent,
    Materials,
    sideImagesUrl,
  ) => {
    const data = await fetch(`${url}/api/addproduct`, {
      method: "POST",
      body: JSON.stringify({
        productName: name,
        productCategory: category,
        productDescription: desc,
        productHeading: heading,
        productImg: imgUrl,
        productPrice: price,
        productColors: colors,
        productSizes: sizes,
        customizable: customizable,
        salePercent: salePercent,
        Materials: Materials,
        sideImages: sideImagesUrl,
      }),
    });
    const parsedData = await data.json();
  };

  return (
    <ContextAdmin.Provider
      value={{ getproducts, products, addProductApi, setapproved, approved }}
    >
      {children}
    </ContextAdmin.Provider>
  );
}

export default MainstateAdmin;

export { ContextAdmin };
