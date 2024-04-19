"use client";
import React, { createContext, useEffect, useReducer } from "react";
import uselocalStorage from "@/components/Hooks/uselocalstorage";
const Context = createContext();

const reducer = (state, action) => {
  const [cartitems, changeitems] = uselocalStorage();
  switch (action.type) {
    case "addItem": {
      const cartitems = [...state.items, action.item];
      changeitems(cartitems);
      return {
        items: cartitems,
        total: state.total + 1,
        price: (state.price += action.item.price * action.item.quant),
      };
    }
  }
};

function Mainstatecart({ children }) {
  const getinitialState = () => {
    const [cartitems, changeitems] = uselocalStorage();

    if (cartitems && cartitems.length > 0) {
      const iniState = {
        items: cartitems,
        total: cartitems.length,
        price: (() => {
          let totalPrice = 0;
          cartitems.forEach((it) => {
            totalPrice += it.price * it.quant;
          });
          return totalPrice;
        })(),
      };
      return iniState;
    } else {
      return {
        items: [],
        total: 0,
        price: 0,
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, getinitialState());
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default Mainstatecart;
