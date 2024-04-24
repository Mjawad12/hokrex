"use client";
import React, { createContext, useEffect, useState } from "react";
const ContextAnimation = createContext();

function MainStateAnimation({ children }) {
  const [animating, setanimating] = useState(false);
  // const scrollFunc = (e) => {
  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   console.log(scrollTop);
  //   animating && window.scrollTo(0, scrollTop);
  // };

  useEffect(() => {
    // window.addEventListener("scroll", scrollFunc);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = function (e) {
      animating && window.scrollTo(0, scrollTop);
    };
    // return () => window.removeEventListener("scroll", scrollFunc);
  }, [animating]);

  return (
    <ContextAnimation.Provider value={{ animating, setanimating }}>
      {children}
    </ContextAnimation.Provider>
  );
}

export default MainStateAnimation;

export { ContextAnimation };
