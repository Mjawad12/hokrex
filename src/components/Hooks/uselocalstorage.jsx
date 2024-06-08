"uce client";

const uselocalStorage = () => {
  const changeitems = (items) => {
    if (window.localStorage) {
      window.localStorage.setItem("ka_12_it_1.0", JSON.stringify(items));
    } else {
      console.log("You Don't have Local Storage");
    }
  };

  return [changeitems];
};

export default uselocalStorage;
