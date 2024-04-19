"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, stagger, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import { Icons, logo } from "@/Consonats";

function SideBar2() {
  const [selected, setselected] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", { x: 0, opacity: 1 }, { duration: 1, delay: stagger(0.2) });
  }, []);

  return (
    <div className="bg-white py-[2rem] px-[0.5rem]  max-w-[300px] w-full min-h-screen flex flex-col justify-start items-center gap-20 ">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        className="flex justify-center items-center gap-1"
      >
        <div className="rounded-full flex justify-center items-center overflow-hidden h-[3rem] w-[3rem]">
          <div className="w-10 h-10 flex justify-center items-center border-gray-500 border-[0.5px] rounded-[0.7rem]">
            {logo}
          </div>
        </div>
        <h1 className="text-4xl font-[500]">Hokrex</h1>
      </motion.div>
      <motion.ul ref={scope} className="max-w-[250px] w-full ">
        {Icons.map((it, index) => (
          <Navitem
            name={it.name}
            svg={it.svg}
            key={index}
            ind={index}
            selected={selected}
            setselected={setselected}
            slug={it.slug}
          />
        ))}
      </motion.ul>
    </div>
  );
}

const Navitem = ({ name, svg, ind, selected, setselected, slug }) => {
  const path = usePathname();
  useEffect(() => {
    if (path.includes(slug)) {
      setselected(ind);
    }
  }, []);

  return (
    <motion.li
      initial={{ opacity: 0, x: -100 }}
      onClick={() => setselected(ind)}
    >
      <Link
        className={`navLi w-full rounded-xl flex justify-start items-center cursor-pointer gap-5 px-6 py-4 group  hover:bg-hoverC ${
          selected === ind ? "bg-hoverC" : "bg-transparent"
        }`}
        href={slug}
      >
        <div
          className={selected === ind ? "*:stroke-black" : "*:stroke-[#8E92BC]"}
        >
          {svg}
        </div>
        <h2
          className={`font-pm font-semi text-[1.2rem]  group-hover:text-black ${
            selected === ind ? "text-black" : "text-dullC"
          }  `}
        >
          {name}
        </h2>
      </Link>
    </motion.li>
  );
};

export default SideBar2;
