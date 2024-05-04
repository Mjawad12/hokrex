import { plus } from "@/Consonats";
import React from "react";

function Text() {
  const exampleText = [{ category: "Holiday", text: [0, 1, 2] }];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[18px] text-[500] text-textLight ">Text</h1>
      <div className="flex flex-col gap-1">
        <button className="flex-center w-full gap-1 rounded-sm bg-white py-2.5 text-[14px] font-[600] text-black ">
          {plus} Add Text
        </button>
        <div className="flex gap-2"></div>
      </div>
    </div>
  );
}

export default Text;
