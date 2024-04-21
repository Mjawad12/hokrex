import Customization from "@/components/pages/home/Customization";
import Home from "@/components/pages/home/Home";
import Howitworks from "@/components/pages/home/Howitworks";

import React from "react";

export default async function page() {
  return (
    <>
      <Home />
      <Howitworks />
      <Customization />
    </>
  );
}
