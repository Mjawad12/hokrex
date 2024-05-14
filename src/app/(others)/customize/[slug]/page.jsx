"use client";
import { prods } from "@/Consonats";
import Controls from "@/components/Controls";
import LeftBarEditing from "@/components/Tool/LeftBarEditing";
import ColorSmall from "@/components/Tool/LeftBarEditing/ColorSmall";
import ModelViewer from "@/components/Tool/ModelViewer";
import SidebarTool from "@/components/Tool/SidebarTool";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

function page() {
  const [selected, setselected] = useState("Text");
  const [hidden, sethidden] = useState(true);
  const [smColor, setsmColor] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full">
        <div
          id="cont"
          className="absolute top-0 min-h-screen w-full bg-canvasColor "
        >
          <Canvas
            shadows
            camera={{ position: [0, 0, 1.95], fov: 32 }}
            className="main-canvas"
          >
            <OrbitControls
              enablePan={false}
              enableRotate={false}
              minPolarAngle={1.47079}
              maxPolarAngle={1.47079}
              maxDistance={3}
              minDistance={0.7}
            />
            <Environment preset="city" />
            <ModelViewer />
          </Canvas>
        </div>

        <div
          style={{ width: "calc(5.1rem + 280px)" }}
          className="absolute left-0 top-[3.05rem] z-20 flex min-h-screen "
        >
          <div className="z-[1] flex min-h-screen w-full max-w-[5.1rem] flex-col items-center justify-start gap-3 border-r border-darkLight bg-darkMid px-[0.8rem] py-3 ">
            {prods.map((it, index) => (
              <div
                onClick={() => {
                  sethidden(true);
                  setselected(it.text);
                }}
                key={index}
                className={`flex-center w-full cursor-pointer flex-col gap-1 rounded-md py-2 hover:bg-darkLight ${
                  it.text === "Graphics"
                    ? "[&_p]:hover:text-white [&_svg]:hover:fill-white"
                    : "[&_p]:hover:text-white [&_svg]:hover:stroke-white"
                } ${
                  selected === it.text
                    ? `bg-darkLight ${
                        it.text === "Graphics"
                          ? "[&_p]:text-white [&_svg]:fill-white"
                          : "[&_p]:text-white [&_svg]:stroke-white"
                      } `
                    : ""
                } `}
              >
                {it.svg}
                <p className="text-[11px] text-[#BDC7D1] ">{it.text}</p>
              </div>
            ))}
          </div>
          <AnimatePresence>
            {hidden && (
              <SidebarTool sethidden={sethidden} selected={selected} />
            )}
          </AnimatePresence>
        </div>

        <LeftBarEditing
          selected={selected}
          setsmColor={setsmColor}
          smColor={smColor}
        />
        <AnimatePresence>{smColor && <ColorSmall />}</AnimatePresence>
        <Controls />

        <canvas
          id="styleCanvas"
          className="absolute  right-0 z-30 h-[250px] w-[250px] border border-black"
        ></canvas>
        <canvas
          id="shapeCanvas"
          height={250}
          width={250}
          className="absolute right-0 z-20 h-[250px] w-[250px] border border-black"
        ></canvas>
      </div>
      <div className="fabricContainer">
        <canvas
          className="absolute top-0 z-50 !h-[500px] !w-[500px]"
          id="can-text"
        />
      </div>
    </>
  );
}

export default page;
