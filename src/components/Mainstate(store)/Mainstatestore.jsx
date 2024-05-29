"use client";
import React, { createContext, useEffect, useState } from "react";
const ContextStore = createContext();

function Mainstatestore({ children }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const [products, setproducts] = useState([]);
  const [authError, setauthError] = useState(null);
  const [authToken, setauthToken] = useState(null);
  const [userData, setuserData] = useState(null);

  const getProducts = async () => {
    const data = await fetch(`${url}/api/getproducts`, {
      method: "GET",
      cache: "no-cache",
    });
    const parsedDate = await data.json();
    parsedDate.products && setproducts(parsedDate.products);
  };

  const signIn = async (obj) => {
    const data = await fetch(`${url}/api/signin`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(obj),
    });
    const parsedData = await data.json();
    console.log(parsedData);
    if (parsedData.success) {
      setauthToken(parsedData.authToken);
      localStorage.setItem("authToken", parsedData.authToken);
      return true;
    } else {
      setauthError(parsedData.error);
      return false;
    }
  };

  const signUp = async (obj) => {
    const data = await fetch(`${url}/api/signup`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(obj),
    });
    const parsedData = await data.json();

    if (parsedData.success) {
      setauthToken(parsedData.authToken);
      localStorage.setItem("authToken", parsedData.authToken);
      return true;
    } else {
      setauthError(parsedData.error);
      return false;
    }
  };

  const delFunc = () => {
    setauthToken(null);
    localStorage.removeItem("authToken");
  };

  const getUserdata = async () => {
    const data = await fetch(`${url}/api/getUserData`, {
      method: "POST",
      headers: { authToken: localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    if (parsedData.success) {
      setuserData(parsedData.userdata);
    }
  };

  useEffect(() => {
    console.log(authToken);
  }, [authToken]);

  useEffect(() => {
    setauthToken(localStorage.getItem("authToken"));
    localStorage.getItem("authToken") && !userData && getUserdata();
  }, []);

  return (
    <ContextStore.Provider
      value={{
        products,
        getProducts,
        authError,
        setauthError,
        signIn,
        signUp,
        authToken,
        setauthToken,
        delFunc,
        userData,
        setuserData,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
}

export default Mainstatestore;

export { ContextStore };
