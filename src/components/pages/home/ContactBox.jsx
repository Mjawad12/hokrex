"use client";
import { left } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { motion } from "framer-motion";
import React from "react";

function ContactBox() {
  return (
    <motion.div
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="flex-center absolute top-[50%] z-20 w-[700px] translate-y-[-50%] flex-col gap-20 px-5 massive:gap-10 massive:px-2"
    >
      <div className="flex-center flex-col">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-[25px] font-[700] tracking-[5px] massive:text-[20px]"
        >
          CONTACT US
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="z-10 mt-3 text-center text-[70px] font-[700] leading-[75px] massive:text-[50px]  massive:leading-[50px]"
        >
          Have questions?
          <br /> Get in touch
        </motion.h3>
      </div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        action={"#"}
        className="flex-center w-full max-w-[500px] flex-col gap-3 "
      >
        <div className="flex w-full flex-wrap justify-between gap-y-8 ">
          <input
            type="text"
            required={true}
            placeholder="Name"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />

          <input
            type="email"
            required={true}
            placeholder="Email"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <input
            type="number"
            maxLength={15}
            minLength={7}
            required={true}
            placeholder="Phone"
            className="w-full border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <textarea
            cols="30"
            rows="5"
            className="w-full resize-none border-b border-[#E5E5E5] py-1 pl-2 outline-none hover:border-black focus:border-black "
            required={true}
            placeholder="Message."
          />
        </div>
        <CustomCheckbox
          text={"Save this information for next time"}
          fontSize={"sm"}
          type="small"
          textColor="#707070"
        />
        <button className="mt-10 w-[11rem] rounded-3xl border border-black px-6 py-[0.65rem] text-[17px] font-[500] text-black">
          Submit request
        </button>
      </motion.form>
    </motion.div>
  );
}

export default ContactBox;
