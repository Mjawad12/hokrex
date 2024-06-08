"use client";
import { errorIcon } from "@/Consonats";
import React from "react";

function LikeToPrint({ sizes, amount, setamount, error, seterror }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-[22px] font-[700]">Sizes</p>
        <div className="flex w-full flex-wrap gap-2 gap-y-3">
          {sizes?.map((it, index) => (
            <div
              className="flex-center overflow-hidden rounded-[12px] border border-borderP"
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
                  seterror(null);
                }}
                id="size"
                type="number"
                className="w-[45px] appearance-none py-2 text-center text-[1.1rem] font-[500] text-pmRed outline-none "
              />
            </div>
          ))}
        </div>
      </div>
      <div id="err-s" className="border-y border-borderP py-4">
        <p className="text-[18px] font-[600]">
          I would like{" "}
          <span className="inline-block w-12 border-b-[3px] border-black text-center text-pmRed ">
            {amount}
          </span>{" "}
          Printed.
        </p>
        {error && (
          <div className="flex gap-1">
            <span className="mt-[0.83rem]">{errorIcon}</span>
            <p className="mt-3 text-[14px] font-[500] text-pmRed ">{error}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default LikeToPrint;
