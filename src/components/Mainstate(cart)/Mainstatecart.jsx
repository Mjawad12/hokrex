"use client";
import React, { createContext, useEffect, useReducer, useState } from "react";
import uselocalStorage from "@/components/Hooks/uselocalstorage";
const ContextCart = createContext();

const reducer = (state, action) => {
  const [changeitems] = uselocalStorage();
  switch (action.type) {
    case "addItem": {
      const cartitemsTemp = [...state.items, action.item];
      changeitems(cartitemsTemp);
      return {
        items: cartitemsTemp,
        total: state.total + 1,
        price: (state.price += action.item.price * action.item.quant),
      };
    }
    case "iniState": {
      return {
        items: action.items,
        total: action.items.length,
        price: (() => {
          let totalPrice = 0;
          action.items.forEach((it) => {
            totalPrice += it.price * it.quant;
          });
          return totalPrice;
        })(),
      };
    }
  }
};

function Mainstatecart({ children }) {
  const [cartItems, setcartItems] = useState(null);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("ka_12_it_1.0"));
    setcartItems(items ?? []);
    dispatch({
      type: "iniState",
      items: items ?? [],
    });
  }, []);

  const getinitialState = () => {
    if (cartItems?.length > 0) {
      return {
        items: cartItems,
        total: cartItems.length,
        price: (() => {
          let totalPrice = 0;
          cartItems.forEach((it) => {
            totalPrice += it.price * it.quant;
          });
          return totalPrice;
        })(),
      };
    } else {
      return {
        items: [],
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
