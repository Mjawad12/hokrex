"use client";
import React, { createContext, useEffect, useState } from "react";
const ContextStore = createContext();

function Mainstatestore({ children }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const [products, setproducts] = useState([]);
  const [categoryProducts, setcategoryProducts] = useState(null);
  const [authError, setauthError] = useState(null);
  const [authToken, setauthToken] = useState(null);
  const [userData, setuserData] = useState(null);
  const [otp, setotp] = useState(false);
  const [verified, setverified] = useState(false);
  const [forgetPassword, setforgetPassword] = useState(false);
  const [forgetFunc, setforgetFunc] = useState(false);
  const [enterPass, setenterPass] = useState(false);
  const [categories, setcategories] = useState([]);

  const getProducts = async (productCategory) => {
    const data = await fetch(`${url}/api/getproducts`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ productCategory: productCategory }),
    });
    const parsedDate = await data.json();
    parsedDate.success && setcategoryProducts(parsedDate.products);
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
      console.log(parsedData.userdata);
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

  const changeName = async (name) => {
    const data = await fetch(`${url}/api/changeName`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ name: name }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData.success;
  };
  const changeEmail = async (email) => {
    const data = await fetch(`${url}/api/changeEmail`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ email: email }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData.success;
  };
  const changePhone = async (phone, otherphone) => {
    const data = await fetch(`${url}/api/changePhone`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ phone: phone, otherphone: otherphone }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData.success;
  };
  const changeAddress = async (address) => {
    const data = await fetch(`${url}/api/changeAddress`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ address: address }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData.success;
  };
  const changePassword = async (currentPassword, newPassword) => {
    const data = await fetch(`${url}/api/changePassword`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword,
      }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData;
  };

  const paymentAdder = async (paymentMethod) => {
    const data = await fetch(`${url}/api/paymentEdit`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        method: paymentMethod,
      }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData;
  };

  const paymentDele = async (cardNumber) => {
    const data = await fetch(`${url}/api/paymentEdit`, {
      method: "DELETE",
      cache: "no-cache",
      body: JSON.stringify({
        cardNumber: cardNumber,
      }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData;
  };

  const ReviewAdd = async (review) => {
    const data = await fetch(`${url}/api/ReviewEdit`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        review: review,
      }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData;
  };

  const wishlistAdd = async (wish) => {
    const data = await fetch(`${url}/api/wishlistEdit`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        wish: wish,
      }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData;
  };
  const wishlistDele = async (slug) => {
    const data = await fetch(`${url}/api/wishlistEdit`, {
      method: "DELETE",
      cache: "no-cache",
      body: JSON.stringify({
        slug: slug,
      }),
      headers: { authToken: authToken || localStorage.getItem("authToken") },
    });
    const parsedData = await data.json();
    return parsedData;
  };
  const ContactEmail = async (firName, lastName, email, message, phone) => {
    const data = await fetch(`${url}/api/contactEmail`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ firName, lastName, email, message, phone }),
    });
    const parsedData = await data.json();
    return parsedData;
  };

  const getCategories = async () => {
    const data = await fetch(`${url}/api/categoriesEdit`, {
      method: "GET",
      cache: "no-cache",
    });
    const parsedData = await data.json();
    setcategories(parsedData.categories);
  };

  useEffect(() => {
    console.log(authToken);
    authToken && !userData && getUserdata();
  }, [authToken]);

  useEffect(() => {
    setauthToken(localStorage.getItem("authToken"));
    categories.length < 1 && getCategories();
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
        categoryProducts,
        changeName,
        changeEmail,
        changeAddress,
        changePhone,
        changePassword,
        paymentAdder,
        paymentDele,
        wishlistAdd,
        wishlistDele,
        ReviewAdd,
        ReviewAdd,
        ContactEmail,
        categories,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
}

export default Mainstatestore;

export { ContextStore };
