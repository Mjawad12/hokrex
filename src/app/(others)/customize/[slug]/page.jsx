"use client";

import { prods } from "@/Consonats";
import Controls from "@/components/Controls";
import ModelViewer from "@/components/Tool/ModelViewer";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";

function page() {
  const [selected, setselected] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen bg-darkMid absolute top-0 z-1 ">
        <Canvas shadows camera={{ position: [0, 0, 2], fov: 30 }}>
          <OrbitControls enablePan={false} />
          <Environment preset="city" />
          <ModelViewer />
        </Canvas>
      </div>
      <div className="max-w-[5.1rem] w-full min-h-screen z-20 flex flex-col gap-3 justify-start items-center border-r border-darkLight absolute top-[3.05rem] left-0 py-3 px-[0.8rem] bg-darkMid">
        {prods.map((it, index) => (
          <div
            onClick={() => setselected(it.text)}
            key={index}
            className={`w-full flex-center flex-col gap-1 cursor-pointer py-2 rounded-md  ${
              it.text === "Graphics"
                ? "[&_svg]:hover:fill-white [&_p]:hover:text-white"
                : "[&_svg]:hover:stroke-white [&_p]:hover:text-white"
            } ${
              selected === it.text
                ? `bg-darkLight ${
                    it.text === "Graphics"
                      ? "[&_svg]:fill-white [&_p]:text-white"
                      : "[&_svg]:stroke-white [&_p]:text-white"
                  } `
                : ""
            } `}
          >
            {it.svg}
            <p className="text-[#BDC7D1] text-[11px] ">{it.text}</p>
          </div>
        ))}
      </div>
      <Controls />
    </>
  );
}

export default page;
