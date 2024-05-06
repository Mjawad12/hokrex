import { cross } from "@/Consonats";
import React, { useContext } from "react";
import { ContextTool } from "../Mainstate(tool)/Mainstatetool";
import TextEdit from "./LeftBarEditing/TextEdit";

function LeftBarEditing({ selected }) {
  const { addText } = useContext(ContextTool);
  const editers = { Text: ["Text Edit", <TextEdit addText={addText} />] };
  return (
    <div className="absolute right-0 top-[3.05rem] z-50 flex min-h-screen w-full max-w-[320px] flex-col bg-darkMid p-3 px-3.5">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] text-[500] text-textLight">
          {editers[selected] && editers[selected][0]}
        </h3>
        <span className="cursor-pointer [&_path]:stroke-white [&_rect]:stroke-none [&_svg]:h-[38px] [&_svg]:w-[38px] ">
          {cross}
        </span>
      </div>
      {editers[selected] && editers[selected][1]}
    </div>
  );
}

export default LeftBarEditing;
