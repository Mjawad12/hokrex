import { arrowDown } from "@/Consonats";
import React, { useState } from "react";

const DropDown = ({
  data,
  selectedOption,
  setselectedOption,
  overflow,
  city,
}) => {
  const [show, setshow] = useState(false);

  const changeSelected = (e) => {
    setselectedOption(e.target.innerText);
  };
  return (
    <div
      onClick={() => setshow(!show)}
      className="relative flex h-[2.9rem] w-full cursor-pointer items-center justify-between rounded-lg border border-darkLight px-4 transition duration-[100ms] hover:shadow-xl [&_svg]:stroke-textLight"
    >
      <p className="text-[14px] font-[600] text-textLight">{selectedOption}</p>{" "}
      {arrowDown}
      <div
        className={`absolute ${
          show ? "flex" : "hidden"
        } border-borderColorP left-0 top-[45px] z-20 flex max-h-[15rem] w-full flex-col items-start justify-start border bg-white py-3 ${
          overflow ? "overflow-y-scroll" : ""
        }`}
      >
        {data.map((it, index) => (
          <span
            key={index}
            onClick={changeSelected}
            className="flex h-7 w-full cursor-pointer items-center justify-start px-5 py-2 text-gray-400 hover:bg-gray-200 "
            value={it}
          >
            {city === "Karachi" ? it.name : it}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
