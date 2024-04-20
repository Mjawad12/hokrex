import { arrowLeft, left } from "@/Consonats";
import React from "react";

function Howitworks() {
  const content = [
    {
      heading: "Choose your product",
      des: "Select a product our wide range of products.",
    },
    {
      heading: "Customise it",
      des: "Customise your product to your liking using our tool.",
    },
    {
      heading: "Approve the sample",
      des: "Work with our designer to create the perfect product.",
    },
    {
      heading: "Get at your doorstep",
      des: "Get your product delivered to your doorstep.",
    },
  ];

  return (
    <div className="max-w-[1220px] w-full flex-center flex-col gap-24 m-auto pt-28 pb-5">
      <div className="flex-center flex-col gap-3">
        <p className="text-[26px] font-[700] tracking-[3px]">HOW IT WORK</p>
        <h2 className="text-[74px] font-[700] text-center max-w-[25ch] leading-[72px]">
          Get your Custom printed product in just 4 easy steps.
        </h2>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 flex-grow-[0.8] flex flex-wrap gap-4 gap-y-8">
          {content.map((it, index) => (
            <Card des={it.des} heading={it.heading} key={index} />
          ))}
        </div>
        <div className="flex-1 flex-grow-[0.3] flex-center ">
          <div className="flex-center scale-x-[-1] rounded-full border w-[7rem] h-[7rem] relative [&_svg]:w-[35px] [&_svg]:h-[35px] cursor-pointer">
            <span className="absolute left-[1.9rem]">{left}</span>
            {left}
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ heading, des }) => {
  return (
    <div className="max-w-[21.5rem] min-h-[20.5rem] px-7 py-6 flex flex-col justify-between hover:border-pmRed border">
      <span className="w-[4.3rem] h-[4.3rem] bg-[#FFF1F1] rounded-lg " />
      <div className="flex flex-col gap-3">
        <h3 className="text-[27px] font-[700]">{heading}</h3>
        <p className="text-[20px] font-[500]">{des}</p>
      </div>
    </div>
  );
};

export default Howitworks;
