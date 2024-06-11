"use client";
import React, { useContext, useRef, useState } from "react";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import { motion, useAnimate } from "framer-motion";
import { BtnAccount } from "../personal-info/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  const [opened, setopened] = useState(null);
  const { setuserData, userData, changePassword } = useContext(ContextStore);
  const formRef = useRef(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      const currentPassword = document.querySelector("#curr-pass")?.value ?? "";
      const newPassword = document.querySelector("#new-pass").value;
      const confirmPassword = document.querySelector("#conf-pass").value;
      if (newPassword !== confirmPassword) {
        seterror("Both password must match!");
        toast("Both password must match!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "error",
        });
      } else {
        const success = await changePassword(currentPassword, newPassword);
        notificationCaller(success, "Password changed successfully!");
      }
    }
    setloading(false);
  };

  const notificationCaller = (success, message) => {
    if (success) {
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
    } else {
      toast("Some Error occured!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    }
  };

  return (
    <section className="min-h-[calc(100vh-65px)] w-full">
      <ToastContainer />
      <div className="m-auto flex w-full max-w-[1020px] flex-col gap-12">
        <Editcomponent
          openState={""}
          opened={opened}
          setopened={setopened}
          type={"Password"}
          value={"*************"}
        >
          <form ref={formRef} className="mt-1.5 flex flex-col gap-4">
            {!userData?.verification && (
              <div className="flex flex-col gap-1.5">
                <InputC name={"Current password"} id={"curr-pass"} />
                <p className="text-[13px] text-pmRed">Need a new password?</p>
              </div>
            )}
            <div className="mt-4 flex flex-col gap-[0.7rem]">
              <InputC name={"New password"} id={"new-pass"} error={error} />
              <InputC name={"Confirm password"} id={"conf-pass"} />
            </div>
            <BtnAccount
              Submit={Submit}
              loading={loading}
              name={"Update password"}
            />
          </form>
        </Editcomponent>
      </div>
    </section>
  );
}

export default page;

const Editcomponent = ({
  children,
  type,
  value,
  openState,
  setopened,
  opened,
}) => {
  const [scope, animate] = useAnimate();

  const openAnimate = () => {
    setopened(!opened);
    !opened
      ? animate(
          scope.current,
          { height: scope.current.scrollHeight + "px" },
          { duration: 0.4, ease: "easeInOut" },
        )
      : animate(
          scope.current,
          { height: "79px" },
          { duration: 0.4, ease: "easeInOut" },
        );
  };

  return (
    <motion.div
      ref={scope}
      className="mt-10 flex h-[79px] w-full max-w-[610px] flex-col overflow-hidden border-b"
    >
      <div className="flex w-full items-start justify-between pt-3 ">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[16px] font-[400]">{type}</h2>
          <p className="text-[14px] text-[#707070]">
            {opened ? openState : value}
          </p>
        </div>
        <div>
          <button
            onClick={openAnimate}
            className="border-none text-[15px] font-[600] underline underline-offset-2 outline-none "
          >
            {opened ? "Cancel" : "Update"}
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const InputC = ({ name, id, error, seterror }) => {
  return (
    <div className="gap-1.2 flex flex-col gap-2.5">
      <div className="flex gap-2">
        <p className="text-[14px] leading-[18px] text-[#707070] ">{name}</p>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[13px] leading-[18px] text-pmRed "
          >
            {error}
          </motion.p>
        )}
      </div>

      <input
        id={id}
        type="password"
        required
        className="rounded-[10px] border border-[#E5E5E5] px-3 py-3.5 outline-none hover:border-black focus:border-black"
        onInput={() => {
          seterror && seterror(null);
        }}
      />
    </div>
  );
};
