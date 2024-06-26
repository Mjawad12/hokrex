import { shapes } from "@/Consonats";
import React from "react";

function Shapes({ addShapeLayer }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[18px] text-[500] text-textLight ">Shapes</h1>
      <div className="flex flex-wrap gap-3">
        {shapes.map((it) => (
          <span
            id={it.name}
            onClick={() => addShapeLayer({ type: it.shapeName })}
            className="[&_svg]:w-[45px]"
          >
            {it.svg}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Shapes;
