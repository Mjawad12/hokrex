"use client";
import { calender, check } from "@/Consonats";
import Calender from "./Calender";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DateSelector() {
  const [selectedDate, setselectedDate] = useState();
  const [show, setshow] = useState(false);
  return (
    <div className="w-full relative ">
      <div
        onClick={() => setshow(!show)}
        className="w-full  flex justify-between items-center px-5 py-3 border border-borderP font-[500] rounded-[0.8rem] text-[18px] hover:border-black cursor-pointer  "
      >
        <div className="flex gap-3 items-center">
          {selectedDate ? (
            <>
              <span className="bg-[#12CC46] rounded-full w-5 h-5 flex-center [&_svg]:w-[10px]">
                {check}
              </span>
              <p className="text-[17px] font-[500]">
                Arrives by {selectedDate}
              </p>
            </>
          ) : (
            <p className="text-[17px] font-[500]">Select date</p>
          )}
        </div>
        {calender}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            animate={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: 5, y: -13 }}
            exit={{ opacity: 0, x: 5, y: -13 }}
            className="absolute top-16 right-0"
          >
            <Calender setselectedDate={setselectedDate} setshow={setshow} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DateSelector;
