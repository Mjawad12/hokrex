"use client";
import { left } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import { motion } from "framer-motion";
import React, { useContext, useRef } from "react";

function ContactBox({ about }) {
  const { ContactEmail } = useContext(ContextStore);
  const formRef = useRef(null);
  const submitContactForm = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      ContactEmail();
    }
  };

  return (
    <motion.div
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="flex-center absolute top-[50%] z-20 w-[700px] translate-y-[-50%] flex-col gap-20 px-5 massive:gap-10 massive:px-2"
    >
      <div className="flex-center flex-col">
        <motion.h2
          initial={{ opacity: 0, scale: about ? 1.4 : 1, y: about ? 10 : 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: about ? 1.4 : 1, y: about ? 10 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-[25px] font-[700] tracking-[5px] massive:text-[20px]"
        >
          CONTACT US
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: about ? 60 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="z-10 mt-3 text-center text-[70px] font-[700] leading-[75px] massive:text-[50px]  massive:leading-[50px]"
        >
          Have questions?
          <br /> Get in touch
        </motion.h3>
      </div>
      <motion.form
        ref={formRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        action={"#"}
        className="flex-center w-full max-w-[500px] flex-col gap-3 "
      >
        <motion.div
          initial={{ y: about ? 60 : 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex w-full flex-wrap justify-between gap-y-8 "
        >
          <input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.8 }}
            type="text"
            required={true}
            placeholder="First Name"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.85 }}
            type="text"
            required={true}
            placeholder="Last Name"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />

          <input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.9 }}
            type="email"
            required={true}
            placeholder="Email"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <input
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.95 }}
            type="number"
            maxLength={15}
            minLength={7}
            required={true}
            placeholder="Phone"
            className="w-[15rem] border-b border-[#E5E5E5] py-1 pl-2 text-[16px] outline-none hover:border-black focus:border-black "
          />
          <textarea
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.1, 0.7], delay: 0.9 }}
            cols="30"
            rows="4"
            className="w-full resize-none border-b border-[#E5E5E5] py-1 pl-2 outline-none hover:border-black focus:border-black "
            required={true}
            placeholder="Message."
          />
        </motion.div>
        <motion.div
          initial={{ y: about ? 60 : 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
          className="w-full"
        >
          <CustomCheckbox
            text={"Save this information for next time"}
            fontSize={"sm"}
            type="small"
            textColor="#707070"
          />
        </motion.div>
        <motion.button
          initial={{ y: about ? 60 : 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.25 }}
          onClick={submitContactForm}
          className="mt-10 w-[11rem] rounded-3xl border border-black px-6 py-[0.65rem] text-[17px] font-[500] text-black"
        >
          Submit request
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactBox;
