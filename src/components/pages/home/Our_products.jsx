"use client";
import { left, ourproducts } from "@/Consonats";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ContactBox from "./ContactBox";

function Our_products({ setanimating, contactPage, setcontactPage }) {
  useEffect(() => {
    console.log(contactPage);
  }, [contactPage]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onAnimationComplete={() => {
          setanimating(false);
        }}
        onAnimationStart={() => {
          setanimating(true);
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="flex-center min-h-screen w-full"
      >
        <div className="flex-center relative z-30 mx-auto  w-full max-w-[1400px] flex-col gap-20">
          <div className="flex-center flex flex-col">
            <motion.h2
              initial={{ scale: 1.5, y: -15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 1.5, y: -15 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-[25px] font-[700] tracking-[5px] "
            >
              OUR PRODUCT
            </motion.h2>
            <motion.h3
              initial={{ y: 55 }}
              exit={{ y: 55 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="z-10 mt-3 text-center text-[75px] font-[700] leading-[70px]"
            >
              Custom printed & embroidered products
            </motion.h3>
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              exit={{ y: -30 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative mt-12 h-[7rem] w-[100%] "
            >
              <motion.div
                initial={{ height: "7rem", width: "7rem", boxShadow: 0 }}
                animate={{
                  height: contactPage ? "1300px" : "7rem",
                  width: contactPage ? "100%" : "7rem",
                  boxShadow: contactPage ? "0px 0px 23.7px 0px #0000001A" : 0,

                  borderRadius: "100%",
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  setanimating(false);
                }}
                onAnimationStart={() => {
                  setanimating(true);
                }}
                className="flex-center absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] flex-col rounded-full border bg-white"
              >
                <AnimatePresence>
                  {contactPage && <ContactBox contactPage={contactPage} />}
                </AnimatePresence>
                <motion.div
                  onClick={() => setcontactPage(!contactPage)}
                  initial={{ rotate: -90 }}
                  exit={{ rotate: -90 }}
                  animate={{
                    y: contactPage ? "380px" : "0",
                    rotate: contactPage ? -90 : -90.05,
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className={`flex-center h-[6.8rem] w-[6.8rem]  scale-x-[-1] cursor-pointer rounded-full bg-white [&_svg]:h-[35px] [&_svg]:w-[35px]  `}
                >
                  <span className="absolute left-[1.9rem]">{left}</span>
                  {left}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex w-full  flex-col flex-wrap gap-y-[6px] ">
            {ourproducts.map((it, index) => {
              let margin = 0;
              switch (index) {
                case 0:
                  margin = 450;
                  break;
                case 1:
                  margin = 1050;
                  break;
                case 2:
                  margin = 670;
                  break;
                case 3:
                  margin = 300;
                  break;
                case 4:
                  margin = 570;
                  break;
                case 5:
                  margin = 1070;
                  break;
                case 6:
                  margin = 0;
                  break;
                case 7:
                  margin = 710;
                  break;
                case 8:
                  margin = 170;
                  break;
              }
              return (
                <p
                  key={index}
                  style={{ left: margin + "px" }}
                  className="relative w-max text-[30px] font-[700] leading-[20px] hover:text-pmRed"
                >
                  {it}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Our_products;
