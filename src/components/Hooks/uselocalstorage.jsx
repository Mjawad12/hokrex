"uce client";

import { useEffect, useState } from "react";
import React from "react";

const uselocalStorage = () => {
  const changeitems = (items) => {
    if (window.localStorage) {
      window.localStorage.setItem("ka_12_it_1.0", JSON.stringify(items));
    } else {
      console.log("You Don't have Local Storage");
    }
  };

  const cartitems = () => {
    if (window.localStorage) {
      return JSON.parse(window.localStorage.getItem("ka_12_it_1.0"));
    } else {
      console.log("You Don't have Local Storage");
    }
  };

  return [cartitems(), changeitems];
};

export default uselocalStorage;
