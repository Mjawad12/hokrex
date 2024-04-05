import React from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { bag, heart } from "@/Consonats";
const ProductCard = ({ name, width, dark = false, smGrid }) => {
  const [scope, animate] = useAnimate();
  return (
    <div
      className={`${width === "sm" ? "max-w-[18rem]" : "max-w-[25.3rem]"} ${
        smGrid ? "!max-w-[18rem]" : ""
      } w-full flex-center flex-col gap-3 cursor-pointer `}
    >
      <div
        ref={scope}
        onMouseEnter={() => {
          animate(
            "#cartBtn",
            { opacity: 1 },
            { duration: 0.3, type: "easeInOut" }
          );
          animate("#imgProduct", { scale: 1.1 });
        }}
        onMouseLeave={() => {
          animate(
            "#cartBtn",
            { opacity: 0 },
            { duration: 0.3, type: "easeInOut" }
          );
          animate("#imgProduct", { scale: 1 });
        }}
        className={`bg-[#F5F5F5] w-full  ${
          width === "sm" ? "h-[15rem]" : "h-[20rem]"
        } ${
          smGrid ? "!h-[16rem]" : ""
        } relative flex-center overflow-hidden rounded-2xl`}
      >
        <span className="absolute top-5 right-5 z-20 [&>svg]:hover:fill-pmRed cursor-pointer">
          {heart}
        </span>
        <Image
          src={"/Testimg.jpg"}
          width={500}
          height={500}
          id="imgProduct"
          alt="Product"
          className="w-full h-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          id="cartBtn"
          className="absolute bottom-5 flex-center w-[90%] border border-borderP py-[0.7rem]
             rounded-2xl bg-[#ffffffad] [backdrop-filter:blur(7px)] hover:bg-[#000000B2] hover:border-[#000000B2] hover:text-white [&_svg]:hover:stroke-white "
        >
          <div className="absolute left-[22px]">{bag}</div>
          <p className="font-[500] text-[1.15rem]">Quick add</p>
        </motion.div>
      </div>
      <p
        className={`font-[500] text-[18px] ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default ProductCard;
