"uce client";

import { useEffect, useState } from "react";

const uselocalStorage = () => {
  const [cartitems, setcartitems] = useState(null);
  const changeitems = (items) => {
    window.localStorage.setItem("ka_12_it_1.0", JSON.stringify(items));
    setcartitems(items);
  };
  useEffect(() => {
    setcartitems(JSON.parse(window.localStorage.getItem("ka_12_it_1.0")));
  }, []);
  return [cartitems, changeitems];
};

export default uselocalStorage;
