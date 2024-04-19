"use client";
import React, { createContext, useState } from "react";
const ContextStore = createContext();

function Mainstatestore({ children }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    const data = await fetch(`${url}/api/getproducts`, {
      method: "GET",
      cache: "no-cache",
    });
    const parsedDate = await data.json();
    parsedDate.products && setproducts(parsedDate.products);
  };

  return (
    <ContextStore.Provider value={{ products, getProducts }}>
      {children}
    </ContextStore.Provider>
  );
}

export default Mainstatestore;

export { ContextStore };
