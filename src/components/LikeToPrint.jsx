"use client";
import React from "react";

function LikeToPrint() {
  return (
    <div className="py-3 border-y border-borderP">
      <p className="font-[600] text-[18px]">
        I would like{" "}
        <span className="inline-block w-12 border-b-[3px] border-black text-center text-pmRed ">
          5
        </span>{" "}
        Printed.
      </p>
    </div>
  );
}

export default LikeToPrint;
