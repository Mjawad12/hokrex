"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { motion, stagger, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import { Icons, logo } from "@/Consonats";
import { ContextAdmin } from "../Mainstate(Admin)/MainstateAdmin";

function SideBar2() {
  const [selected, setselected] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", { x: 0, opacity: 1 }, { duration: 1, delay: stagger(0.2) });
  }, []);

  return (
    <div className="flex min-h-screen w-full  max-w-[300px] select-none flex-col items-center justify-start gap-20 bg-white px-[0.5rem] py-[2rem]">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        className="flex items-center justify-center gap-1"
      >
        <div className="flex h-[3rem] w-[3rem] items-center justify-center overflow-hidden rounded-full">
          <div className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] border-[0.5px] border-gray-500">
            {logo}
          </div>
        </div>
        <h1 className="text-4xl font-[500]">Hokrex</h1>
      </motion.div>
      <motion.ul ref={scope} className="w-full max-w-[250px] ">
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
        className={`navLi group flex w-full cursor-pointer items-center justify-start gap-5 rounded-xl px-6 py-4  hover:bg-hoverC ${
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
