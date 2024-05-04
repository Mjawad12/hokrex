import DropDown from "@/components/DropDown";
import { ContextTool } from "@/components/Mainstate(tool)/Mainstatetool";
import React, { useContext, useState } from "react";

function Layers() {
  const { layerState } = useContext(ContextTool);
  const [selectedOption, setselectedOption] = useState("ALL LAYERS");
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[18px] text-[500] text-textLight ">Product</h1>
      <DropDown
        data={[
          "ALL LAYERS",
          "Front",
          "Back",
          "Right",
          "Left",
          "Inside Label",
          "Outside Label",
          "Coular",
        ]}
        selectedOption={selectedOption}
        setselectedOption={setselectedOption}
      />
      <div className="flex flex-col gap-2">
        {layerState.map((it) => (
          <LayerItem name={it.name} />
        ))}
      </div>
    </div>
  );
}

export default Layers;

const LayerItem = ({ children, name }) => {
  const l1 = [{ img: "", name: "", type: "" }];
  return (
    <div className="flex w-full flex-col">
      <h2 className="text-[16px] font-[500] text-white">{name}</h2>
    </div>
  );
};
