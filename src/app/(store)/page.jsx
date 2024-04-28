import Footer from "@/components/Footer";
import MainStateAnimation from "@/components/Mainstate(Animation)/MainStateAnimation";
import FooterWrapper from "@/components/pages/home/FooterWrapper";
import Home from "@/components/pages/home/Home";
import Howitworks from "@/components/pages/home/Howitworks";

import React from "react";

export default async function page() {
  return (
    <>
      <MainStateAnimation>
        <div className="relative ">
          <Home />
          <Howitworks />
          {/* <FooterWrapper /> */}
        </div>
      </MainStateAnimation>
    </>
  );
}
