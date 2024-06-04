"use client";
import React, { createContext, useEffect, useState } from "react";
const ContextStore = createContext();

function Mainstatestore({ children }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const [products, setproducts] = useState([]);
  const [authError, setauthError] = useState(null);
  const [authToken, setauthToken] = useState(null);
  const [userData, setuserData] = useState(null);
  const [otp, setotp] = useState(false);
  const [verified, setverified] = useState(false);
  const [forgetPassword, setforgetPassword] = useState(false);
  const [forgetFunc, setforgetFunc] = useState(false);
  const [enterPass, setenterPass] = useState(false);

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
    setuserData(obj);
    const parsedData = await data.json();
    console.log(parsedData);
    if (parsedData.success) {
      if (parsedData.otp) {
        setotp(true);
        localStorage.removeItem("authToken");
        return "otp";
      } else {
        setauthToken(parsedData.authToken);
        localStorage.setItem("authToken", parsedData.authToken);
        return true;
      }
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
    setuserData(obj);
    if (parsedData.success) {
      if (parsedData.otp) {
        setotp(true);
        localStorage.removeItem("authToken");
        return "otp";
      } else {
        setauthToken(parsedData.authToken);
        localStorage.setItem("authToken", parsedData.authToken);
        return true;
      }
    } else {
      setauthError(parsedData.error);
      return false;
    }
  };

  const emailVerification = async (otp) => {
    const data = await fetch(`${url}/api/verifyemail`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ otp, email: userData.email }),
    });
    const parsedData = await data.json();
    if (parsedData.success) {
      if (forgetFunc) {
        setenterPass(true);
        setotp(false);
      } else {
        setverified(true);
        localStorage.setItem("authToken", parsedData.authToken);
      }
    } else {
      setauthError(parsedData.error);
    }
  };

  const delFunc = () => {
    setauthToken(null);
    localStorage.removeItem("authToken");
  };

  const getUserdata = async () => {
    const data = await fetch(`${url}/api/getUserData`, {
      method: "POST",
      headers: { authToken: localStorage.getItem("authToken") || authToken },
    });
    const parsedData = await data.json();
    if (parsedData.success) {
      setuserData(parsedData.userdata);
    }
  };

  const sendMail = async (email) => {
    const data = await fetch(`${url}/api/mailsend`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        email: email || userData.email,
      }),
    });
    email && setuserData({ ...userData, email: email });
    const parsedData = await data.json();
    if (parsedData.success && parsedData.otp) {
      setauthError("Email sent");
      setotp(true);
      setforgetPassword(false);
    } else {
      setauthError(parsedData.error);
    }
  };

  const PassReset = async (pass) => {
    const data = await fetch(`${url}/api/passwordReset`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        email: userData.email,
        password: pass,
      }),
    });

    const parsedData = await data.json();
    if (parsedData.success) {
      setforgetPassword(false);
      setenterPass(false);
    } else {
      setauthError(parsedData.error);
    }
  };

  // useEffect(() => {
  //   console.log(authToken);
  //   authToken && !userData && getUserdata();
  // }, [authToken]);

  useEffect(() => {
    setauthToken(localStorage.getItem("authToken"));
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
        setotp,
        otp,
        emailVerification,
        verified,
        setverified,
        sendMail,
        setforgetPassword,
        forgetPassword,
        setforgetFunc,
        forgetFunc,
        enterPass,
        setenterPass,
        PassReset,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
}

export default Mainstatestore;

export { ContextStore };
