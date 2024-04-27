"use client";
import React, { createContext, useEffect, useState } from "react";
const ContextAnimation = createContext();

function MainStateAnimation({ children }) {
  const [animating, setanimating] = useState(false);

  useEffect(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = function (e) {
      animating && window.scrollTo(0, scrollTop);
    };
  }, [animating]);

  return (
    <ContextAnimation.Provider value={{ animating, setanimating }}>
      {children}
    </ContextAnimation.Provider>
  );
}

export default MainStateAnimation;

export { ContextAnimation };
