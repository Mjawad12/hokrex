"use client";
import React, { useContext, useRef, useState } from "react";
import { ContextAdmin } from "../Mainstate(Admin)/MainstateAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notificationCaller from "../NotificationCaller";
import SideBar2 from "./Sidebar";

function MainAdmin({ children }) {
  const { approved } = useContext(ContextAdmin);
  return !approved ? (
    <Signin />
  ) : (
    <>
      <SideBar2 />
      {children}
    </>
  );
}

export default MainAdmin;

const Signin = () => {
  const { setapproved } = useContext(ContextAdmin);
  const formRef = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const Submit = (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      if (username.current.value !== process.env.NEXT_PUBLIC_ADMIN_USERNAME) {
        notificationCaller(false, "Enter a valid Username!", toast);
        username.current.focus();
      } else if (
        password.current.value !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD
      ) {
        notificationCaller(false, "Enter a valid Passowrd!", toast);
        password.current.focus();
      } else {
        notificationCaller(true, "Successfully logged in!", toast);
        setTimeout(() => setapproved(true), [1000]);
      }
    }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-sky-200 to-sky-500">
      <section
        id="login"
        className="mx-auto flex min-h-screen max-w-md flex-col justify-center p-4"
      >
        <ToastContainer />
        <div className="rounded bg-sky-100 p-6">
          <div className="m-3 flex items-center justify-center font-black text-sky-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            </svg>
            <h1 className="text-[1.5rem] font-[700]">PrintODS - AdminPanel</h1>
          </div>
          <form
            ref={formRef}
            id="login_form"
            method="POST"
            className="flex flex-col justify-center"
          >
            <label className="text-sm font-medium">Username</label>
            <input
              className="mb-3 mb-3 mt-1
          block w-full rounded-md border border-gray-300 px-2 px-2 py-1.5 py-1.5 text-sm placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
              type="text"
              name="username"
              placeholder="User Name"
              required
              ref={username}
            />
            <label className="text-sm font-medium">Password</label>
            <input
              className="
          mb-3 mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm placeholder-gray-400 shadow-sm
          focus:border-sky-500
          focus:outline-none
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
              type="password"
              name="password"
              placeholder="********"
              required
              ref={password}
            />
            <button
              onClick={Submit}
              className="block rounded-md bg-sky-600 px-4 py-1.5 font-medium text-gray-100 shadow-lg transition duration-300 hover:bg-sky-700"
              type="submit"
            >
              <span id="login_default_state">Login</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
