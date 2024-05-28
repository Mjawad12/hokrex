"use client";
import { cross, email, errorIcon, left, lock, phone, user } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

function page() {
  const { authError, setauthError, signIn, signUp } = useContext(ContextStore);
  const [scope, animate] = useAnimate();
  const [pageState, setpageState] = useState(0);
  const signinForm = useRef(null);
  const signupForm = useRef(null);
  const [loading, setloading] = useState(false);
  const [signinSave, setsigninSave] = useState(false);
  const [signupSave, setsignupSave] = useState(false);
  const router = useRouter();

  const Signin = async (e, valid) => {
    if (signinForm.current.checkValidity() || valid) {
      e?.preventDefault();
      setauthError(null);
      setloading(true);
      const details = {
        email: document.querySelector("#s-in-em").value,
        password: document.querySelector("#s-in-pass").value,
      };
      const condition = await signIn(details);
      setloading(false);
      if (condition) {
        signinSave &&
          SaveInformation(
            {
              email: { id: "#s-in-em", value: details.email },
              password: { id: "#s-in-pass", value: details.password },
            },
            "temp-data-signin",
          );
        router.push("/");
      }
    }
  };

  function getInformation(id) {
    const data = JSON.parse(localStorage.getItem(id));
    if (!data) return;
    for (let key in data) {
      document.querySelector(data[key].id).value = data[key].value;
    }
  }

  const Signup = async (e, valid) => {
    if (signupForm.current.checkValidity() || valid) {
      e?.preventDefault();
      setauthError(null);
      setloading(true);
      const details = {
        email: document.querySelector("#s-up-em").value,
        password: document.querySelector("#s-up-pass").value,
        name: document.querySelector("#s-up-name").value,
        phone: document.querySelector("#s-up-phone").value,
      };
      const condition = await signUp(details);
      setloading(false);
      if (condition) {
        signupSave &&
          SaveInformation(
            {
              email: { id: "#s-up-em", value: details.email },
              password: { id: "#s-up-pass", value: details.password },
              name: { id: "#s-up-name", value: details.name },
              phone: { id: "#s-up-phone", value: details.phone },
            },
            "temp-data-signup",
          );
        router.push("/");
      }
    }
  };

  useEffect(() => {
    getInformation("temp-data-signin");
    getInformation("temp-data-signup");
  }, []);

  const log = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const data = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            method: "Get",
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
            },
          },
        );
        const parsedData = await data.json();
        console.log(parsedData);
        if (pageState === 0) {
          const values = {
            email: { id: "#s-in-em", value: parsedData.email },
            password: {
              id: "#s-in-pass",
              value: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
            },
          };
          pasteInformation("signin", values);
        } else {
          const values = {
            email: { id: "#s-up-em", value: parsedData.email },
            password: {
              id: "#s-up-pass",
              value: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
            },
            name: { id: "#s-up-name", value: parsedData.name },
          };
          pasteInformation("signup", values);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const pasteInformation = (type, values) => {
    for (let key in values) {
      document.querySelector(values[key].id).value = values[key].value;
    }
    type === "signin" ? Signin(null, true) : Signup(null, true);
  };

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
          className="flex-center flex-1 flex-grow-[0.5] flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: pageState === 1 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <form
            ref={signupForm}
            action={"#"}
            className="flex w-full max-w-[300px] flex-col"
          >
            <div className="mb-9 flex flex-col gap-2 massive:mb-7">
              <h1 className="text-[36px] font-[600] leading-[36px] ">
                Sign up
              </h1>
              <div className="flex gap-1 text-[15px] text-[#707070]">
                <p>Already have an account? </p>{" "}
                <span
                  className="cursor-pointer text-pmRed"
                  onClick={async () => {
                    setauthError(null);
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
              <CustomInput
                svg={user}
                text={"First Name"}
                type={"text"}
                id={"s-up-name"}
              />
              <CustomInput
                svg={phone}
                text={"Phone"}
                type={"number"}
                id={"s-up-phone"}
                max={15}
              />
              <CustomInput
                svg={email}
                text={"Email address"}
                type={"email"}
                id={"s-up-em"}
              />
              <CustomInput
                svg={lock}
                text={"Password"}
                type={"Password"}
                id={"s-up-pass"}
              />
            </div>

            <div className="mt-4">
              <CustomCheckbox
                text={"Save this information for next time"}
                fontSize={"sm"}
                textColor={"#707070"}
                setOuter={setsignupSave}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {authError && (
                <div className="flex-center w-max gap-1.5">
                  {errorIcon}
                  <p className="text-[14px] text-pmRed">{authError}</p>
                </div>
              )}
              <button
                onClick={Signup}
                disabled={loading}
                className="w-full rounded-lg border border-black py-2.5 text-[17px] font-[600]  hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-gray-300 "
              >
                {loading ? <LoadingIcon /> : "Sign up"}
              </button>
            </div>
          </form>
          <button
            onClick={log}
            className="flex-center mt-4 w-full max-w-[300px] gap-3 rounded-lg border py-2.5 text-[17px] font-[600] text-[#0000008A] hover:border-black"
          >
            <img
              className="h-6 w-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Sign up with Google</span>
          </button>
        </motion.div>

        <motion.div
          animate={{ opacity: pageState === 0 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex-center flex-1 flex-grow-[0.5] flex-col"
        >
          <form
            ref={signinForm}
            action={"#"}
            className="flex w-full max-w-[300px] flex-col"
          >
            <h1 className="mb-9 text-[36px] font-[600]">Login</h1>
            <div className="flex flex-col gap-8">
              <CustomInput
                svg={email}
                text={"Email address"}
                type={"email"}
                id="s-in-em"
              />
              <CustomInput
                svg={lock}
                text={"Password"}
                type={"Password"}
                id="s-in-pass"
              />
            </div>
            <div className="mt-4">
              <CustomCheckbox
                text={"Save this information for next time"}
                fontSize={"sm"}
                textColor={"#707070"}
                setOuter={setsigninSave}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {authError && (
                <div className="flex-center w-max gap-1.5">
                  {errorIcon}
                  <p className="text-[14px] text-pmRed">{authError}</p>
                </div>
              )}
              <button
                onClick={Signin}
                disabled={loading}
                className="w-full rounded-lg border border-black py-2.5 text-[17px] font-[600]  transition-all duration-300 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {loading ? <LoadingIcon /> : "Login"}
              </button>
            </div>
          </form>
          <div className="mt-4 flex w-full max-w-[300px] flex-col gap-4">
            <button
              onClick={log}
              className="flex-center gap-3 rounded-lg border py-2.5 text-[17px] font-[600] text-[#0000008A] hover:border-black"
            >
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
                  setauthError(null);
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
        </motion.div>
      </div>
    </div>
  );
}

export default page;

const LoadingIcon = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ ease: "easeInOut", duration: 0.7, repeat: Infinity }}
      className="m-auto h-[26px] w-[26px] rounded-full border-[3.5px] border-black border-t-transparent"
    ></motion.div>
  );
};
const CustomInput = ({ type, width, svg, text, id, max }) => {
  return (
    <div
      style={{ width: width ? "100%" : width + "rem" }}
      className="flex gap-1.5 border-b border-[#E5E5E5]  py-2 hover:border-black focus:[&_input]:border-black"
    >
      <span className="flex-center w-[30px]">{svg}</span>
      <input
        id={id}
        type={type}
        required={true}
        placeholder={text}
        className="w-full text-[16px] outline-none "
        onKeyDown={(e) => {
          if (max && e.target.value.length >= max && e.key !== "Backspace") {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

const SaveInformation = (obj, name) => {
  localStorage.setItem(name, JSON.stringify(obj));
};
