"use client";
import React, { createContext } from "react";
import { useState } from "react";
const ContextAdmin = createContext();

function MainstateAdmin({ children }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const [products, setproducts] = useState([]);
  const [authToken, setauthToken] = useState(
    "eyJhbGciOiJIUzI1NiJ9.NjY3ZmVlZDQyZjM2MDYwZDc4M2U4ZGFh.GVQJvU5O2HEr8629auGBa2PNDij-PaYK08fsdralC80",
  );
  const [categories, setcategories] = useState([]);

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
      headers: { authToken: authToken },
    });
    const parsedData = await data.json();
  };

  const getCategories = async () => {
    const data = await fetch(`${url}/api/categoriesEdit`, {
      method: "GET",
      cache: "no-cache",
    });
    const parsedData = await data.json();
    setcategories(parsedData.categories);
  };

  const addCategory = async (name) => {
    const data = await fetch(`${url}/api/categoriesEdit`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ name: name }),
      headers: { authToken: authToken },
    });
    const parsedData = data.json();
    return parsedData;
  };

  const deleCategory = async (id) => {
    const data = await fetch(`${url}/api/categoriesEdit`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { authToken: authToken },
    });
    const parsedData = data.json();
    return parsedData;
  };

  const adminSignin = async (name, password) => {
    const data = await fetch(`${url}/api/AdminLogin`, {
      method: "POST",
      body: JSON.stringify({ name: name, password: password }),
    });
    const parsedData = await data.json();
    console.log(parsedData);
    return parsedData;
  };

  const getOrders = async () => {
    const data = await fetch(`${url}/api/getOrders`, {
      method: "POST",
      headers: { authToken: authToken },
    });
    const parsedData = await data.json();
    console.log(parsedData);
    return parsedData;
  };

  const EditOrder = async (
    orderID,
    status,
    trackingid,
    deliveryCharges,
    active,
    deliveryDate,
  ) => {
    const data = await fetch(`${url}/api/editOrders`, {
      method: "POST",
      body: JSON.stringify({
        orderID,
        status,
        trackingid,
        deliveryCharges,
        active,
        deliveryDate,
      }),
      headers: { authToken: authToken },
    });
    const parsedData = await data.json();
    console.log(parsedData);
    return parsedData;
  };
  return (
    <ContextAdmin.Provider
      value={{
        getproducts,
        products,
        addProductApi,
        setauthToken,
        authToken,
        getCategories,
        categories,
        addCategory,
        setcategories,
        deleCategory,
        adminSignin,
        getOrders,
        EditOrder,
      }}
    >
      {children}
    </ContextAdmin.Provider>
  );
}

export default MainstateAdmin;

export { ContextAdmin };
