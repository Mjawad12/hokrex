"use client";
import { calender, check } from "@/Consonats";
import Calender from "./Calender";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DateSelector({ selectedDate, setselectedDate }) {
  const [show, setshow] = useState(false);
  return (
    <div className="relative w-full ">
      <div
        onClick={() => setshow(!show)}
        className="flex  w-full cursor-pointer items-center justify-between rounded-[0.8rem] border border-borderP px-5 py-3 text-[18px] font-[500] hover:border-black  "
      >
        <div className="flex items-center gap-3">
          {selectedDate ? (
            <>
              <span className="flex-center h-5 w-5 rounded-full bg-[#12CC46] [&_svg]:w-[10px]">
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
            className="absolute right-0 top-16"
          >
            <Calender setselectedDate={setselectedDate} setshow={setshow} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DateSelector;
