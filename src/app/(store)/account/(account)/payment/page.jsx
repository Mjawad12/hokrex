"use client";
import { card, masterCard, trash } from "@/Consonats";
import React from "react";

function page() {
  const cardDetails = [
    {
      bankName: "Meezan bank ltd.",
      def: true,
      cardNumber: "178917891789",
      name: "Jamshed Ali",
      expiryDate: "03/28",
    },
    {
      bankName: "Meezan bank ltd.",
      def: true,
      cardNumber: "178917891789",
      name: "Jamshed Ali",
      expiryDate: "03/28",
    },
  ];
  return (
    <div className="m-auto mt-10 flex w-full max-w-[1020px] flex-col gap-7 pb-10">
      <h2 className="text-[24px] font-[700]">Payment methods</h2>
      <div className="flex w-full flex-wrap gap-6">
        {cardDetails?.map((it, index) => (
          <CardDetails
            bankName={it.bankName}
            cardNumber={it.cardNumber}
            def={it.def}
            expiryDate={it.expiryDate}
            name={it.name}
            key={index}
          />
        ))}
        <div
          style={{ borderStyle: "dashed" }}
          id="br-das"
          className="flex-center h-[241px] w-full max-w-[400px] cursor-pointer flex-col rounded-[10px]"
        >
          <div className="flex-center flex-col gap-2">
            <span className="flex-center h-[56px] w-[56px] rounded-full border border-[#E5E5E5]">
              {card}
            </span>
            <p className="text-[20px]">Add new card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

const CardDetails = ({ bankName, def, cardNumber, name, expiryDate }) => {
  return (
    <div
      style={{ boxShadow: "2px 4px 8px 0px #0000000D" }}
      className="flex w-full max-w-[400px] flex-col gap-12 rounded-[10px] border border-[#E5E5E5] px-8 py-5"
    >
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-[400]">{bankName}</p>
        <div className="flex-center gap-2">
          {def && (
            <span className="rounded-[7px] bg-black px-3 py-1 text-[13px] leading-[18px] text-white">
              Default
            </span>
          )}
          <span className="flex-center h-[30px] w-[30px] rounded-[7px] bg-[#F9F9F9]">
            {trash}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Blank />
        <Blank />
        <Blank />
        <p className="text-[25px] font-[400]">{cardNumber.slice(8)}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-11">
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-[500] leading-[13px]">Name</p>
            <p className="text-[16px] font-[400] leading-[20px]">{name}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-[500] leading-[13px]">Expire Date</p>
            <p className="text-[16px] font-[400] leading-[20px]">
              {expiryDate}
            </p>
          </div>
        </div>
        <span>{masterCard}</span>
      </div>
    </div>
  );
};

const Blank = () => {
  return (
    <div className="flex gap-[5px] [&_span]:h-[5px] [&_span]:w-[5px] [&_span]:rounded-full [&_span]:bg-black">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
