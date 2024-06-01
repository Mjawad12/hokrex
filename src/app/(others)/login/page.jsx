"use client";
import { cross, email, errorIcon, lock, phone, tick, user } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

function page() {
  const {
    authError,
    setauthError,
    signIn,
    signUp,
    setotp,
    otp,
    userData,
    emailVerification,
    verified,
    setverified,
    sendMail,
    setforgetPassword,
    forgetPassword,
    setforgetFunc,
    enterPass,
    PassReset,
  } = useContext(ContextStore);
  const [scope, animate] = useAnimate();
  const [pageState, setpageState] = useState(0);
  const signinForm = useRef(null);
  const signupForm = useRef(null);
  const otpForm = useRef(null);
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
        condition !== "otp" && router.push("/");
      }
    }
  };
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
        condition !== "otp" && router.push("/");
      }
    }
  };

  const VerifyEmail = async (e) => {
    if (otpForm.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      let enteredOTP = "";
      document
        .querySelectorAll("#otp-inp input")
        .forEach((it) => (enteredOTP += it.value));
      if (enteredOTP.toString().length === 4) {
        await emailVerification(enteredOTP);
        setloading(false);
      } else {
        setauthError("Wrong Otp!");
      }
    }
  };

  function getInformation(id) {
    const data = JSON.parse(localStorage.getItem(id));
    if (!data) return;
    for (let key in data) {
      if (document.querySelector(data[key].id)) {
        document.querySelector(data[key].id).value = data[key].value;
      }
    }
  }

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
              value:
                parsedData.sub.slice(0, 5) +
                process.env.NEXT_PUBLIC_GOOGLE_PASSWORD +
                parsedData.sub.slice(5),
            },
          };
          pasteInformation("signin", values);
        } else {
          const values = {
            email: { id: "#s-up-em", value: parsedData.email },
            password: {
              id: "#s-up-pass",
              value:
                parsedData.sub.slice(0, 5) +
                process.env.NEXT_PUBLIC_GOOGLE_PASSWORD +
                parsedData.sub.slice(5),
            },
            name: { id: "#s-up-name", value: parsedData.name },
            phone: {
              id: "#s-up-phone",
              value: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
            },
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

  useEffect(() => {
    if ((otp && pageState !== 1) || forgetPassword || enterPass) {
      setpageState(1);
      animate(
        scope.current,
        {
          x: document.querySelector("#trans-x-cal-2").scrollWidth + "px",
        },
        { duration: 1.2, type: "spring" },
      );
      setauthError(null);
    }
  }, [otp, forgetPassword, enterPass]);

  return (
    <div
      id="log-in-05"
      className="flex-center relative min-h-screen w-full py-5"
    >
      {forgetPassword ? (
        <Image
          src={"/forget.png"}
          width={otp ? 600 : 500}
          height={500}
          alt="forest"
          className="absolute right-0 top-0 h-screen w-max"
        />
      ) : enterPass ? (
        <Image
          src={"/forest.png"}
          width={otp ? 600 : 500}
          height={500}
          alt="forest"
          className="absolute right-0 top-0 h-screen w-max"
        />
      ) : (
        <Image
          src={otp ? (verified ? "/verified.png" : "/otp.png") : "/forest.png"}
          width={otp ? 600 : 500}
          height={500}
          alt="forest"
          className="absolute right-0 top-0 h-screen w-max"
        />
      )}

      <div
        style={{ boxShadow: "0px 0px 64px 0px #00000017" }}
        className="relative z-20 flex min-h-[730px] w-full  max-w-[1300px] rounded-3xl bg-white massive:min-h-[600px] massive:max-w-[1100px]"
      >
        <Link
          href={"/"}
          onClick={() => {
            setotp(false);
            setverified(false);
          }}
          className={`absolute right-3 top-3 z-30 [&_svg]:h-[33px] [&_svg]:w-[33px] [&_svg]:stroke-none ${otp || forgetPassword ? "[&_path]:stroke-white" : ""} ${verified ? "[&_path]:!stroke-black" : ""}`}
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
              src={
                otp
                  ? verified
                    ? "/verifiedbox.png"
                    : "/otpcard.png"
                  : "/rectangles.png"
              }
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
            className="absolute h-full w-full"
          >
            {forgetPassword ? (
              <Image
                src={"/forgetbox.png"}
                alt="forestColor"
                width={800}
                height={800}
                className="h-full w-full "
              />
            ) : enterPass ? (
              <Image
                src={"/forestColor.png"}
                alt="forestColor"
                width={500}
                height={500}
                className="h-full w-full "
              />
            ) : (
              <Image
                src={
                  otp
                    ? verified
                      ? "/verifiedbox.png"
                      : "/otpcard.png"
                    : "/forestColor.png"
                }
                alt="forestColor"
                width={500}
                height={500}
                className="h-full w-full "
              />
            )}
          </motion.div>
        </motion.div>

        {otp ? (
          verified ? (
            <VerifiedPage
              setotp={setotp}
              setverified={setverified}
              verified={verified}
            />
          ) : (
            <OTP_Page
              otp={otp}
              userData={userData}
              loading={loading}
              otpForm={otpForm}
              VerifyEmail={VerifyEmail}
              authError={authError}
              setauthError={setauthError}
              sendMail={sendMail}
            />
          )
        ) : forgetPassword ? (
          <ForgetPage
            forgetPassword={forgetPassword}
            loading={loading}
            authError={authError}
            sendMail={sendMail}
            setloading={setloading}
            setauthError={setauthError}
          />
        ) : enterPass ? (
          <PasswordResetPage
            enterPass={enterPass}
            authError={authError}
            loading={loading}
            setauthError={setauthError}
            PassReset={PassReset}
            setloading={setloading}
          />
        ) : (
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
                      if (!loading) {
                        setauthError(null);
                        setpageState(0);
                        animate(
                          scope.current,
                          { x: 0 },
                          { duration: 1.2, type: "spring" },
                        );
                      }
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
                  setauthError={setauthError}
                />
                <CustomInput
                  svg={phone}
                  text={"Phone"}
                  type={"number"}
                  id={"s-up-phone"}
                  max={15}
                  setauthError={setauthError}
                />
                <CustomInput
                  svg={email}
                  text={"Email address"}
                  type={"email"}
                  id={"s-up-em"}
                  setauthError={setauthError}
                />
                <CustomInput
                  svg={lock}
                  text={"Password"}
                  type={"Password"}
                  id={"s-up-pass"}
                  setauthError={setauthError}
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
              <div className="mt-3 flex flex-col gap-2">
                <AuthError authError={authError} />
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
              disabled={loading}
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
        )}

        <motion.div
          id="trans-x-cal-2"
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
                setauthError={setauthError}
              />
              <CustomInput
                svg={lock}
                text={"Password"}
                type={"Password"}
                id="s-in-pass"
                setauthError={setauthError}
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
            <div className="mt-3 flex flex-col gap-2">
              <AuthError authError={authError} />
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
              disabled={loading}
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
                  if (!loading) {
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
                  }
                }}
              >
                Sign up
              </span>
            </div>
            <button
              onClick={() => {
                if (!loading) {
                  setforgetPassword(true);
                  setforgetFunc(true);
                }
              }}
              className="mt-3 w-full text-center text-[14px] text-black underline underline-offset-2 "
            >
              Forget Password
            </button>
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
const CustomInput = ({
  type,
  width,
  svg,
  text,
  id,
  max,
  min,
  setauthError,
  onInput,
}) => {
  return (
    <div
      style={{ width: width ? "100%" : width + "rem" }}
      className="flex gap-1.5 border-b border-[#E5E5E5] py-2 focus-within:border-black hover:border-black"
    >
      <span className="flex-center w-[30px]">{svg}</span>
      <input
        id={id}
        type={type}
        required={true}
        placeholder={text}
        minLength={min}
        className="w-full text-[16px] outline-none "
        onKeyDown={(e) => {
          setauthError && setauthError(null);
          if (max && e.target.value.length >= max && e.key !== "Backspace") {
            e.preventDefault();
          }
        }}
        onInput={(e) => onInput && onInput(e)}
      />
    </div>
  );
};

const SaveInformation = (obj, name) => {
  localStorage.setItem(name, JSON.stringify(obj));
};

const OTP_Page = ({
  otp,
  userData,
  loading,
  otpForm,
  VerifyEmail,
  authError,
  setauthError,
  sendMail,
}) => {
  const [timerStated, settimerStated] = useState(false);

  const nextInput = (e) => {
    authError && setauthError(null);
    e.target.value = e.target.value.toString().slice(0, 1);
    if (e.target.value !== "") {
      e.target.nextElementSibling.focus();
    }
  };

  const remover = (e) => {
    if (e.key === "Backspace") {
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
        e.target.value = "";
      }
    }
  };

  const focusFunc = () => {
    let skip = false;
    document.querySelectorAll("#otp-inp input").forEach((it) => {
      if (skip) return;
      if (it.value === "") {
        it.focus();
        skip = true;
        return;
      }
    });
  };

  return (
    <motion.div
      animate={{ opacity: otp ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-center flex-1 flex-grow-[0.5] flex-col"
    >
      <form
        ref={otpForm}
        action={"#"}
        className="flex w-full max-w-[300px] flex-col"
      >
        <h1 className="text-[36px] font-[600] leading-[36px] ">
          Verify Your Email
        </h1>
        <div className="mt-4 flex flex-col text-[15px] text-[#707070]">
          <p>Enter the code we've sent by Email to</p>
          <div className="flex gap-1 ">
            <p> {userData?.email}</p>
            <span className="text border-none text-pmRed underline underline-offset-2 outline-none">
              edit email
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b py-8 pb-5">
          <p className="font-[600]">Enter 4-digit otp</p>
          <div id="otp-inp" className="mt-2 flex gap-2">
            <input
              type="number"
              className="w-5 border-b-2 border-[#707070] text-center outline-none "
              onInput={nextInput}
              onKeyUp={remover}
              onClick={focusFunc}
              required
            />
            <input
              type="number"
              className="w-5 border-b-2 border-[#707070] text-center outline-none "
              onInput={nextInput}
              onKeyUp={remover}
              required
              onClick={focusFunc}
            />
            <input
              type="number"
              className="w-5 border-b-2 border-[#707070] text-center outline-none "
              onInput={nextInput}
              onKeyUp={remover}
              required
              onClick={focusFunc}
            />
            <input
              type="number"
              className="w-5 border-b-2 border-[#707070] text-center outline-none "
              onInput={(e) =>
                (e.target.value = e.target.value.toString().slice(0, 1))
              }
              onKeyUp={remover}
              required
              onClick={focusFunc}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-1 ">
          <div className="flex gap-1 text-[15px] text-[#707070]">
            <p>Haven't received an OTP?</p>
            <span
              onClick={(e) => {
                if (!timerStated) {
                  let time = 60;
                  settimerStated(true);
                  const interval = setInterval(() => {
                    if (time === 0) {
                      clearInterval(interval);
                      e.target.innerText = `Send again`;
                      settimerStated(false);
                    } else {
                      e.target.innerText = `0:${time.toString().length === 2 ? time : "0" + time.toString()} Sec`;
                      time--;
                    }
                  }, [1000]);
                  sendMail();
                }
              }}
              className="text cursor-pointer border-none text-pmRed underline underline-offset-2 outline-none"
            >
              Send again
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex flex-col gap-2">
          <AuthError authError={authError} />
          <button
            disabled={loading}
            onClick={VerifyEmail}
            className=" w-max rounded-[10px] bg-black px-10 py-2.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading ? <LoadingIcon /> : "Verify"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

const VerifiedPage = ({ verified, setverified, setotp }) => {
  return (
    <motion.div
      animate={{ opacity: verified ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-center flex-1 flex-grow-[0.5] flex-col"
    >
      <img
        src="/congrats.gif"
        alt="congrats"
        width={100}
        height={100}
        className="translate-x-1 scale-[1.8]"
      />
      <div className="flex-center flex-col gap-0.5">
        <h1 className="text-[23px] font-[600] leading-[25px]">
          Your email has been
        </h1>
        <h2 className="text-[30px] font-[600] leading-[36px]">
          Successsfully Verified
        </h2>
      </div>
      <p className="mt-2.5 text-[15px] text-[#707072]">
        Your Account has been created
      </p>
      <Link
        href={"/"}
        onClick={() => {
          setverified(false);
          setotp(false);
        }}
        className="mt-6 w-max rounded-[10px] bg-black px-10 py-2.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Got it
      </Link>
    </motion.div>
  );
};

const ForgetPage = ({
  forgetPassword,
  loading,
  setloading,
  authError,
  sendMail,
  setauthError,
}) => {
  const mailform = useRef(null);
  const inputEmail = useRef(null);
  const mailSend = async (e) => {
    if (mailform.current.checkValidity()) {
      e?.preventDefault();
      setloading(true);
      await sendMail(inputEmail.current.value);
      setloading(false);
    }
  };

  return (
    <motion.div
      animate={{ opacity: forgetPassword ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-center flex-1 flex-grow-[0.5] flex-col"
    >
      <div>
        <h1 className="text-[30px] font-[600] leading-[25px]">
          Forget password
        </h1>
        <form ref={mailform} action="#" className="mt-12">
          <div className="flex flex-col gap-5">
            <p className="text-[14px] font-[600]">Enter your email</p>
            <div className="flex gap-1.5 border-b border-[#E5E5E5] py-2 focus-within:border-black hover:border-black">
              <span className="flex-center w-[25px]">{email}</span>
              <input
                ref={inputEmail}
                type={"email"}
                required={true}
                placeholder={"Enter email"}
                className="w-[16rem] text-[15px] outline-none "
                onInput={() => setauthError(null)}
              />
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2 ">
            <AuthError authError={authError} />
            <button
              disabled={loading}
              onClick={mailSend}
              className="w-max rounded-[10px] bg-black px-11 py-2.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {loading ? <LoadingIcon /> : "Reset"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const PasswordResetPage = ({
  enterPass,
  authError,
  loading,
  setauthError,
  PassReset,
  setloading,
}) => {
  const [pass1, setpass1] = useState(false);
  const [pass2, setpass2] = useState(false);

  const passwordForm = useRef(null);

  const passwordReset = async (e) => {
    if (passwordForm.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      checkPassword(
        document.querySelector("#p-1-en").value,
        setauthError,
        true,
      );
      if (
        document.querySelector("#p-1-en").value !==
        document.querySelector("#p-1-ag").value
      ) {
        setauthError("Both Passwords must match");
      } else {
        await PassReset(document.querySelector("#p-1-en").value);
      }
      setloading(false);
    }
  };

  return (
    <motion.div
      animate={{ opacity: enterPass ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-center flex-1 flex-grow-[0.5] flex-col"
    >
      <div>
        <h1 className="text-[30px] font-[600] leading-[25px]">Set password</h1>
        <form ref={passwordForm} action="#" className="mt-14">
          <div className="flex w-[18rem] flex-col gap-7">
            <CustomInput
              type={"password"}
              min={8}
              svg={lock}
              text={"Enter new Password"}
              id={"p-1-en"}
              setauthError={setauthError}
              onInput={(e) => {
                if (e.target.value.length >= 8) {
                  setpass1(true);
                } else {
                  setpass1(false);
                }
                if (checkPassword(e.target.value, setauthError)) {
                  setpass2(true);
                } else {
                  setpass2(false);
                }
              }}
            />
            <CustomInput
              type={"password"}
              min={8}
              svg={lock}
              text={"Re-enter password"}
              id={"p-1-ag"}
              setauthError={setauthError}
            />
          </div>
          <div className="mt-[1.1rem] flex flex-col gap-1">
            <p
              className={`flex items-center gap-1 text-[12px] ${pass1 ? "text-[#3EB750]" : "text-pmRed"}`}
            >
              <SvgGiver condition={pass1} />
              Minimum 8 character
            </p>
            <p
              className={`flex items-center gap-1 text-[12px] ${pass2 ? "text-[#3EB750]" : "text-pmRed"}`}
            >
              <SvgGiver condition={pass2} />
              Uppercase, lowercase letters and one number
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2 ">
            <AuthError authError={authError} />
            <button
              disabled={loading}
              onClick={passwordReset}
              className="w-max rounded-[10px] bg-black px-11 py-2.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {loading ? <LoadingIcon /> : "Done"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

function checkPassword(str, setauthError, condition) {
  if (str.search(/[a-z]/i) < 0) {
    condition &&
      setauthError("Your password must contain at least one letter.");
    return false;
  } else if (str.search(/[0-9]/) < 0) {
    condition && setauthError("Your password must contain at least one digit.");
    return false;
  } else if (str.search(/^(?=.*[A-Z]).*$/) < 0) {
    condition &&
      setauthError("Your password must contain at least one uppercase letter.");
    return false;
  } else if (str.search(/^(?=.*[a-z]).*$/) < 0) {
    condition &&
      setauthError("Your password must contain at least one lowercase letter.");
    return false;
  } else {
    setauthError(null);
    return true;
  }
}

const SvgGiver = ({ condition }) => {
  const cross2 = (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.29255 4.49952L8.83373 0.963581C8.93958 0.857726 8.99904 0.714155 8.99904 0.564453C8.99904 0.414751 8.93958 0.27118 8.83373 0.165324C8.72789 0.059469 8.58433 0 8.43465 0C8.28496 0 8.14141 0.059469 8.03556 0.165324L4.5 3.70689L0.964438 0.165324C0.858593 0.059469 0.715038 1.32912e-07 0.565352 1.34028e-07C0.415666 1.35143e-07 0.27211 0.059469 0.166266 0.165324C0.0604219 0.27118 0.000959402 0.414751 0.000959401 0.564453C0.0009594 0.714155 0.0604219 0.857726 0.166266 0.963581L3.70745 4.49952L0.166266 8.03546C0.113582 8.08772 0.0717656 8.14989 0.0432289 8.2184C0.0146922 8.2869 0 8.36038 0 8.43459C0 8.5088 0.0146922 8.58227 0.0432289 8.65078C0.0717656 8.71928 0.113582 8.78146 0.166266 8.83372C0.21852 8.8864 0.280688 8.92823 0.349184 8.95677C0.41768 8.98531 0.491149 9 0.565352 9C0.639555 9 0.713023 8.98531 0.78152 8.95677C0.850016 8.92823 0.912184 8.8864 0.964438 8.83372L4.5 5.29215L8.03556 8.83372C8.08782 8.8864 8.14998 8.92823 8.21848 8.95677C8.28698 8.98531 8.36045 9 8.43465 9C8.50885 9 8.58232 8.98531 8.65082 8.95677C8.71931 8.92823 8.78148 8.8864 8.83373 8.83372C8.88642 8.78146 8.92824 8.71928 8.95677 8.65078C8.98531 8.58227 9 8.5088 9 8.43459C9 8.36038 8.98531 8.2869 8.95677 8.2184C8.92824 8.14989 8.88642 8.08772 8.83373 8.03546L5.29255 4.49952Z"
        fill="#F4062E"
      />
    </svg>
  );

  const tick2 = (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L4.125 8L1 4.81818"
        stroke="#3EB750"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <span
      className={`${condition ? "[&_path]:stroke-[#3EB750]" : "[&_path]:fill-pmRed"}`}
    >
      {condition ? tick2 : cross2}
    </span>
  );
};

const AuthError = ({ authError }) => {
  return (
    <div className="h-[16px]">
      <AnimatePresence>
        {authError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-center w-max gap-1.5"
          >
            {errorIcon}
            <p className="max-w-[16rem] whitespace-nowrap text-[13px] leading-[16px] text-pmRed">
              {authError}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
