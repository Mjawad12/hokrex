import { arrowDown, block4, block6 } from "@/Consonats";
import React, { useState } from "react";

function TopBar({ currentState, setsmGrid, smGrid }) {
  const [selectedOption, setSelectedOption] = useState();
  const [show, setshow] = useState(false);
  function changeSelected(e) {
    setSelectedOption(e.target.innerText);
  }
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="font-[500] text-3xl text-pmRed ">{currentState}</h1>
      <div className="flex justify-between items-center gap-6">
        <div className="flex-center gap-4">
          <div
            onClick={() => setsmGrid(false)}
            className={`cursor-pointer ${
              smGrid
                ? "[&_svg]:stroke-[#F5F5F5] [&_svg]:fill-[#F5F5F5]"
                : "[&_svg]:stroke-black [&_svg]:fill-black"
            }`}
          >
            {block4}
          </div>
          <div
            onClick={() => setsmGrid(true)}
            className={`cursor-pointer ${
              smGrid
                ? "[&_svg]:stroke-black [&_svg]:fill-black"
                : "[&_svg]:stroke-[#F5F5F5] [&_svg]:fill-[#F5F5F5]"
            }`}
          >
            {block6}
          </div>
        </div>
        <div
          id="City"
          name="City"
          onClick={() => setshow(!show)}
          className={`w-[10.5rem] h-[2.25rem] outline-none focus:border-black hover:shadow-xl transition duration-[100ms] flex justify-between items-center relative cursor-pointer
         rounded-[0.4rem] px-[0.85rem] border border-[#DDDDDD] focus:text-black ${
           show ? "border-b-0 rounded-br-[0] rounded-bl-[0]" : ""
         } `}
        >
          <p className="text-black text-[0.87rem] ">
            {selectedOption ? selectedOption : "Default sorting"}
          </p>
          <div
            className={`transition-all duration-[0.7s] ${
              show ? "rotate-[180deg]" : ""
            }`}
          >
            {arrowDown}
          </div>
          <div
            className={`absolute ${
              show ? "flex" : "hidden"
            } w-[10.5rem] left-[-1px] top-[35px] flex justify-start flex-col items-start bg-white border border-[#DDDDDD] rounded-br-[0.3rem] rounded-bl-[0.3rem] overflow-hidden`}
          >
            <span
              onClick={changeSelected}
              className="flex items-center h-8 cursor-pointer w-full px-[0.85rem] text-black hover:bg-gray-100 text-[0.87em] border-b border-[#DDDDDD] "
              value="pakistan"
              selected
            >
              Default sorting
            </span>
            <span
              className="flex items-center h-8 cursor-pointer w-full px-[0.85rem] text-black hover:bg-gray-100 text-[0.87em] border-b border-[#DDDDDD] "
              onClick={changeSelected}
            >
              Popularity
            </span>
            <span
              className="flex items-center h-8 cursor-pointer w-full px-[0.85rem] text-black hover:bg-gray-100 text-[0.87em] border-b border-[#DDDDDD] "
              onClick={changeSelected}
            >
              Low to High
            </span>
            <span
              className="flex items-center h-8 cursor-pointer w-full px-[0.85rem] text-black hover:bg-gray-100 text-[0.87em]"
              onClick={changeSelected}
            >
              High to Low
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
