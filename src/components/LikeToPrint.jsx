"use client";
import React, { useState } from "react";

function LikeToPrint({ sizes }) {
  const [amount, setamount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-[22px] font-[700]">Sizes</p>
        <div className="flex flex-wrap w-full gap-2 gap-y-3">
          {sizes?.map((it, index) => (
            <div
              className="flex-center border border-borderP rounded-[12px] overflow-hidden"
              key={index}
            >
              <p className="border-r border-borderP px-3 py-2 font-[700]">
                {it}
              </p>
              <input
                onChange={(e) => {
                  let amu = 0;
                  document.querySelectorAll("#size").forEach((it) => {
                    if (it.value) {
                      amu += it.value && parseInt(it.value);
                    }
                  });

                  setamount(amu);
                }}
                id="size"
                type="number"
                className="py-2 w-[45px] outline-none font-[500] text-[1.1rem] text-center text-pmRed appearance-none "
              />
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 border-y border-borderP">
        <p className="font-[600] text-[18px]">
          I would like{" "}
          <span className="inline-block w-12 border-b-[3px] border-black text-center text-pmRed ">
            {amount}
          </span>{" "}
          Printed.
        </p>
      </div>
    </>
  );
}

export default LikeToPrint;
