import MainStateAnimation from "@/components/Mainstate(Animation)/MainStateAnimation";
import ContactBox from "@/components/pages/home/ContactBox";
import Home from "@/components/pages/home/Home";
import Howitworks from "@/components/pages/home/Howitworks";

import React from "react";

export default async function page() {
  return (
    <>
      <MainStateAnimation>
        <Home />
        <Howitworks />
      </MainStateAnimation>
    </>
  );
}
