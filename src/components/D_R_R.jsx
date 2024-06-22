"use client";
import { arrowDown, starBlack } from "@/Consonats";
import React, { Fragment, useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";

function D_R_R({ description, reviews, reviewNumber }) {
  return (
    <div className="mt-14 flex w-full flex-col px-10 small:mt-10 small:px-0">
      <OpnerCompoent text={"Description"}>
        <p className="text-[16px] font-[400] text-[#707070]">{description}</p>
      </OpnerCompoent>
      <OpnerCompoent text={`Reviews(${reviews?.length})`} id={"rev-l"}>
        <div className="flex items-end gap-3">
          <div className="flex-center gap-1">
            {starBlack}
            {starBlack}
            {starBlack}
            {starBlack}
            {starBlack}
          </div>
          <span className="text-[20px] font-[500] leading-4">
            {(
              (1 * +reviewNumber[1] +
                2 * +reviewNumber[2] +
                3 * +reviewNumber[3] +
                4 * +reviewNumber[4] +
                5 * +reviewNumber[5]) /
                +reviews.length || 5.0
            ).toFixed(1)}{" "}
            stars
          </span>
        </div>
        <div className="mt-9 flex w-full flex-col gap-10 ">
          {reviews.length > 0 ? (
            reviews?.map((it, index) => (
              <Review
                key={index}
                date={it.date}
                name={it.name}
                rating={it.rating}
                review={it.review}
              />
            ))
          ) : (
            <p className="text-[17px] font-[500] leading-[25px] text-black">
              Be the first to to review this item!
            </p>
          )}
        </div>
      </OpnerCompoent>
      <OpnerCompoent text={"Shiping & Returns"}></OpnerCompoent>
    </div>
  );
}

export default D_R_R;

const OpnerCompoent = ({ text, children, id }) => {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();
  const opener = async () => {
    open &&
      animate(
        scope.current,
        { height: 75 },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );

    !open &&
      animate(
        scope.current,
        { height: scope.current.scrollHeight + "px" },
        { duration: 0.5, ease: "easeInOut" },
      );

    setopen(!open);
  };
  return (
    <motion.div
      ref={scope}
      initial={{
        height: 75,
      }}
      id={id && id}
      className="w-full overflow-hidden border-y border-borderP px-2 py-6 "
    >
      <div
        onClick={opener}
        className="flex cursor-pointer items-center justify-between"
      >
        <p className="text-[18px] font-[600]">{text}</p>
        <div
          className={`[&_svg]:w-[16px] ${
            open ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 `}
        >
          {arrowDown}
        </div>
      </div>
      <div className="mt-6 w-full">{children}</div>
    </motion.div>
  );
};

const Review = ({ name, date, review, rating }) => {
  const [full, setfull] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-start justify-between">
        <div className="flex-center gap-3">
          <div className="rounded-xl border border-borderP p-2">
            <Image src={"/user.png"} width={40} height={40} alt="user" />
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] font-[600] leading-5">{name}</p>
            <p className="text-[15px] font-[500] text-[#707070]">{date}</p>
          </div>
        </div>
        <div id="str-i" className="flex-center gap-1 [&_svg]:w-[15px]">
          {Array.from({ length: rating }).map((_, i) => (
            <Fragment key={i}>{starBlack}</Fragment>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[17px] font-[400]">
        {full ? review : review.slice(0, 100) + "..."}
      </p>
      <span
        onClick={(e) => {
          let ele = document.querySelector("#rev-l");
          setfull(!full);
          if (!full) {
            ele.style.height =
              ele.scrollHeight +
              e.target.previousElementSibling.scrollHeight +
              "px";
          } else {
            ele.style.height =
              ele.scrollHeight -
              (e.target.previousElementSibling.scrollHeight - 20) +
              "px";
          }
        }}
        className="mt-3 cursor-pointer text-[18px] font-[600] underline underline-offset-4"
      >
        {full ? "Less" : "More"}
      </span>
    </div>
  );
};

export { OpnerCompoent };
