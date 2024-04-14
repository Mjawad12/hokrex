"use client";
import React, { createContext } from "react";
import { useState } from "react";
const Context = createContext();

function MainstateAdmin({ children }) {
  const [products, setproducts] = useState([]);
  const getproducts = async () => {
    const data = await fetch("http://localhost:3000/api/getproducts", {
      method: "Get",
    });
    const parseddata = await data.json();
    setproducts(parseddata.products);
  };
  const addProductApi = async (
    name,
    category,
    desc,
    heading,
    imgUrl,
    price
  ) => {
    const data = await fetch("http://localhost:3000/api/addproduct", {
      method: "POST",
      body: JSON.stringify({
        productName: name,
        productCategory: category,
        productDescription: desc,
        productHeading: heading,
        productImg: imgUrl,
        productPrice: price,
      }),
    });
    const parsedData = await data.json();
  };
  return (
    <Context.Provider value={{ getproducts, products, addProductApi }}>
      {children}
    </Context.Provider>
  );
}

export default MainstateAdmin;

export { Context };
