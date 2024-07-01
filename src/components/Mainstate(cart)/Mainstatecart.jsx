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
    case "removeItem": {
      var tempRemoved = {};
      var cartItemsTemp = state.items;
      cartItemsTemp.forEach((it, index) => {
        if (it.id === action.id) {
          cartItemsTemp.splice(index, 1);
          tempRemoved = it;
        }
      });
      changeitems(cartItemsTemp);
      return {
        items: cartItemsTemp,
        total: state.total - 1,
        price: (state.price -= tempRemoved.price * tempRemoved.quant),
      };
    }
    case "addInstruction": {
      state.items.forEach((it) => {
        if (it.id === action.id) {
          it.instruction = action.instruction;
        }
      });
      changeitems(state.items);
      return {
        items: state.items,
        total: state.total,
        price: state.price,
      };
    }
    case "fileAdder": {
      let tempItems = state.items;
      state.items.forEach((it, index) => {
        if (+index === +action.index) {
          tempItems[index].files = [...tempItems[index].files, ...action.files];
        }
      });
      changeitems(tempItems);
      return {
        items: tempItems,
        total: state.total,
        price: state.price,
      };
    }
    case "sizesAdder": {
      let tempItems = state.items;
      state.items.forEach((it, index) => {
        if (+index === +action.index) {
          tempItems[index].sizes = action.sizes;
        }
      });
      changeitems(tempItems);
      return {
        items: tempItems,
        total: state.total,
        price: state.price,
      };
    }
    case "fileRemover": {
      let tempItems = state.items;
      state.items.forEach((it, index) => {
        if (+index === +action.index) {
          let tempfiles = tempItems[index].files;
          tempfiles.splice(action.fileIndex, 1);
          tempItems[index].files = tempfiles;
        }
      });
      changeitems(tempItems);
      return {
        items: tempItems,
        total: state.total,
        price: state.price,
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

  const removeItem = (id) => {
    dispatch({ type: "removeItem", id: id });
  };

  const addInstruction = (id, instruction) => {
    dispatch({ type: "addInstruction", id: id, instruction: instruction });
  };

  const makeOrder = async (order) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/makeOrder`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ ...order, cartState }),
      headers: { authToken: localStorage.getItem("authToken") || "" },
    });
    const parsedData = await data.json();
    return parsedData;
  };

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  return (
    <ContextCart.Provider
      value={{ cartState, dispatch, removeItem, addInstruction, makeOrder }}
    >
      {children}
    </ContextCart.Provider>
  );
}

export default Mainstatecart;

export { ContextCart };
