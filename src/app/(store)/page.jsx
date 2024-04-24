import Customization from "@/components/pages/home/Customization";
import Home from "@/components/pages/home/Home";
import Howitworks from "@/components/pages/home/Howitworks";
import Our_products from "@/components/pages/home/Our_products";

import React from "react";

export default async function page() {
  return (
    <>
      <Home />
      <Howitworks />
    </>
  );
}
