import MainStateAnimation from "@/components/Mainstate(Animation)/MainStateAnimation";
import Home from "@/components/pages/home/Home";
import Howitworks from "@/components/pages/home/Howitworks";

import React from "react";

export default async function page() {
  return (
    <>
      <MainStateAnimation>
        <div className="relative small:overflow-hidden ">
          <Home />
          <Howitworks />
        </div>
      </MainStateAnimation>
    </>
  );
}
