"use client";
import React, { createContext, useEffect, useReducer } from "react";
import uselocalStorage from "@/components/Hooks/uselocalstorage";
const ContextCart = createContext();

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

    if (cartitems?.length > 0) {
      return {
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
    } else {
      return {
        items: [
          {
            name: "Test Sports 1.0",
            price: "$34.25",
            src: "https://outfitters.com.pk/cdn/shop/files/F0465103113_2.jpg?v=1710828096",
            sizes: [
              { type: "SM", val: "12" },
              { type: "LG", val: "06" },
              { type: "MD", val: "05" },
            ],
            quant: 22,
            date: "23 March , 2024",
            colors: [],
          },
        ],
        total: 0,
        price: 0,
      };
    }
  };

  const [cartState, dispatch] = useReducer(reducer, getinitialState());
  return (
    <ContextCart.Provider value={{ cartState, dispatch }}>
      {children}
    </ContextCart.Provider>
  );
}

export default Mainstatecart;

export { ContextCart };
