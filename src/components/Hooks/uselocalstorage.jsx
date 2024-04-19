"uce client";

const uselocalStorage = () => {
  const cartitems = JSON.parse(window.localStorage.getItem("ka_12_it_1.0"));

  const changeitems = (items) => {
    window.localStorage.setItem("ka_12_it_1.0", JSON.stringify(items));
  };

  return [cartitems, changeitems];
};

export default uselocalStorage;
