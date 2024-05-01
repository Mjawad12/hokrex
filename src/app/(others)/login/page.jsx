"use client";
import { cross, email, left, lock, phone, user } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [scope, animate] = useAnimate();
  const [pageState, setpageState] = useState(0);
  return (
    <div
      id="log-in-05"
      className="flex-center relative min-h-screen w-full py-5"
    >
      <Image
        src={"/forest.png"}
        width={500}
        height={500}
        alt="forest"
        className="absolute right-0 top-0 h-screen w-max"
      />

      <div
        style={{ boxShadow: "0px 0px 64px 0px #00000017" }}
        className="relative z-20 flex min-h-[730px] w-full  max-w-[1300px] rounded-3xl bg-white massive:min-h-[600px] massive:max-w-[1100px]"
      >
        <Link
          href={"/"}
          className="absolute right-3 top-3 z-30 [&_svg]:h-[33px] [&_svg]:w-[33px] [&_svg]:stroke-none"
        >
          {cross}
        </Link>
        <motion.div
          ref={scope}
          transition={{ duration: 1, type: "spring" }}
          style={{ width: "calc(100% / 2)" }}
          className="w-[calc(100% / 2)] absolute left-0 z-20 h-full"
        >
          <motion.div
            animate={{ opacity: pageState === 0 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-full w-full "
          >
            <Image
              src={"/rectangles.png"}
              alt="rectangles"
              width={500}
              height={500}
              className="h-full w-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: pageState === 1 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-full w-full "
          >
            <Image
              src={"/forestColor.png"}
              alt="forestColor"
              width={500}
              height={500}
              className="h-full w-full "
            />
          </motion.div>
        </motion.div>

        <motion.div
          id="trans-x-cal-1"
          className="flex-center flex-1 flex-grow-[0.5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: pageState === 1 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <form action={"#"} className="flex w-full max-w-[300px] flex-col">
            <div className="mb-9 flex flex-col gap-2 massive:mb-7">
              <h1 className="text-[36px] font-[600] leading-[36px] ">
                Sign up
              </h1>
              <div className="flex gap-1 text-[15px] text-[#707070]">
                <p>Already have an account? </p>{" "}
                <span
                  className="cursor-pointer text-pmRed"
                  onClick={async () => {
                    setpageState(0);
                    animate(
                      scope.current,
                      { x: 0 },
                      { duration: 1.2, type: "spring" },
                    );
                  }}
                >
                  Log in
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8 massive:gap-3">
              <CustomInput svg={user} text={"First Name"} type={"text"} />
              <CustomInput svg={phone} text={"Phone"} type={"number"} />
              <CustomInput svg={email} text={"Email address"} type={"email"} />
              <CustomInput svg={lock} text={"Password"} type={"Password"} />
            </div>
            <div className="mt-4">
              <CustomCheckbox
                text={"Save this information for next time"}
                fontSize={"sm"}
                textColor={"#707070"}
              />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full rounded-lg border border-black py-2.5 text-[17px] font-[600]  hover:bg-black hover:text-white ">
                Sign up
              </button>
              <button className="flex-center gap-3 rounded-lg border py-2.5 text-[17px] font-[600] text-[#0000008A] hover:border-black">
                <img
                  className="h-6 w-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Sign up with Google</span>
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          animate={{ opacity: pageState === 0 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex-center flex-1 flex-grow-[0.5]"
        >
          <form action={"#"} className="flex w-full max-w-[300px] flex-col">
            <h1 className="mb-9 text-[36px] font-[600]">Login</h1>

            <div className="flex flex-col gap-8">
              <CustomInput svg={email} text={"Email address"} type={"email"} />
              <CustomInput svg={lock} text={"Password"} type={"Password"} />
            </div>
            <div className="mt-4">
              <CustomCheckbox
                text={"Save this information for next time"}
                fontSize={"sm"}
                textColor={"#707070"}
              />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full rounded-lg border border-black py-2.5 text-[17px] font-[600]  hover:bg-black hover:text-white ">
                Login
              </button>
              <button className="flex-center gap-3 rounded-lg border py-2.5 text-[17px] font-[600] text-[#0000008A] hover:border-black">
                <img
                  className="h-6 w-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Sign in with Google</span>
              </button>
              <div className="flex-center w-full gap-1 text-[15px] text-[#707070]">
                <p>Already have an account? </p>{" "}
                <span
                  className="cursor-pointer text-pmRed"
                  onClick={async () => {
                    setpageState(1);
                    animate(
                      scope.current,
                      {
                        x:
                          document.querySelector("#trans-x-cal-1").scrollWidth +
                          "px",
                      },
                      { duration: 1.2, type: "spring" },
                    );
                  }}
                >
                  Sign up
                </span>
              </div>
              <Link
                href="/"
                className="mt-3 w-full text-center text-[14px] text-black underline underline-offset-2 "
              >
                Forget Password
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default page;

const CustomInput = ({ type, width, svg, text }) => {
  return (
    <div
      style={{ width: width ? "100%" : width + "rem" }}
      className="flex gap-1.5 border-b border-[#E5E5E5]  py-2 hover:border-black focus:[&_input]:border-black"
    >
      <span className="flex-center w-[30px]">{svg}</span>
      <input
        type={type}
        required={true}
        placeholder={text}
        className="w-full text-[16px] outline-none "
      />
    </div>
  );
};
