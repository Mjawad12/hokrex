"use client";
import { motion, useAnimate } from "framer-motion";
import React, { use, useContext, useEffect, useRef, useState } from "react";
import { CountrySelect, StateSelect } from "react-country-state-city/dist/cjs";
import "react-country-state-city/dist/react-country-state-city.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { arrowDown, email, errorIcon } from "@/Consonats";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
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
      toast(message || "Some Error occured!", {
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
  const {
    setuserData,
    userData,
    changeName,
    changeEmail,
    changeAddress,
    changePhone,
  } = useContext(ContextStore);
  const [loading, setloading] = useState(false);
  const values = [
    {
      type: "Name",
      value: userData?.name,
      openState:
        "This is the name on your travel document, which could be a license or a passport.",
      children: (
        <NameComponent
          changeName={changeName}
          loading={loading}
          setloading={setloading}
          username={userData?.name}
          notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Email address",

      value: userData?.email,
      openState: "Use an address you’ll always have access to.",
      children: (
        <Email
          changeEmail={changeEmail}
          loading={loading}
          setloading={setloading}
          useremail={userData?.email}
          notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Phone",
      value:
        userData?.phone === ""
          ? "Please provide your phone number"
          : userData?.phone,
      openState: "For Verification and conrdination",
      children: (
        <Phone
          changePhone={changePhone}
          loading={loading}
          setloading={setloading}
          userphone={userData?.phone}
          userotherphone={userData?.otherphone}
          notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Address",
      value: userData?.address
        ? userData?.address
        : "Please provide your Address",
      openState: "Use a permanent address where you can receive mail.",
      children: (
        <Address
          changeAddress={changeAddress}
          loading={loading}
          setloading={setloading}
          userAddress={userData?.address}
          notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
  ];

  const [opened, setopened] = useState(null);
  const [blur, setblur] = useState(false);

  return (
    <div className="mt-4 flex w-full flex-col gap-3">
      <ToastContainer />
      {values.map((it, index) => (
        <Editcomponent
          type={it.type}
          value={it.value}
          key={index}
          openState={it.openState}
          index={index}
          setopened={setopened}
          opened={opened}
          open={opened === index}
          setblur={setblur}
          blur={blur}
        >
          {it.children}
        </Editcomponent>
      ))}
    </div>
  );
}

export default page;

const Editcomponent = ({
  children,
  type,
  value,
  openState,
  index,
  setopened,
  opened,
  open,
  setblur,
  blur,
}) => {
  const [scope, animate] = useAnimate();

  const openAnimate = () => {
    setblur(!blur);
    opened === null ? setopened(index) : setopened(null);
    !open
      ? animate(scope.current, { height: scope.current.scrollHeight + "px" })
      : animate(scope.current, { height: "88px" });
  };

  return (
    <motion.div
      ref={scope}
      animate={{ opacity: blur ? (open ? 1 : 0.3) : 1 }}
      className="flex h-[85px] w-full max-w-[610px] flex-col overflow-hidden border-b"
    >
      <div className="flex w-full items-start justify-between pt-3 ">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[16px] font-[400]">{type}</h2>
          <p className="text-[14px] text-[#707070]">
            {open ? openState : value}
          </p>
        </div>
        <div>
          <button
            onClick={openAnimate}
            className="border-none text-[15px] font-[600] underline underline-offset-2 outline-none "
            disabled={blur && !open}
          >
            {open ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      <motion.div animate={{ opacity: open ? 1 : 0 }}>{children}</motion.div>
    </motion.div>
  );
};

const NameComponent = ({
  changeName,
  loading,
  setloading,
  username,
  notificationCaller,
  setuserData,
}) => {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const name =
        document.querySelector("#fir-name-chn").value +
        " " +
        document.querySelector("#sec-name-chn").value;
      if (name === username) {
        seterror("Entered name is same as previous name!");
        notificationCaller(false, "Entered name is same as previous name!");
      } else {
        const success = await changeName(name);

        notificationCaller(
          success,
          success ? "Name successfully changed!" : "Some error occured!",
        );
        setuserData((e) => {
          return { ...e, name: name };
        });
      }
      setloading(false);
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6">
      <div className="flex w-full gap-3">
        <input
          type="text"
          placeholder="First name"
          className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
          maxLength={20}
          required
          id="fir-name-chn"
        />
        <input
          type="text"
          placeholder="Last name"
          className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
          maxLength={20}
          required
          id="sec-name-chn"
        />
      </div>
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
};

function Email({
  useremail,
  setloading,
  notificationCaller,
  setuserData,
  changeEmail,
  loading,
}) {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const email = document.querySelector("#email-chn").value;

      if (email === useremail) {
        seterror("Entered email is same as previous email!");
        notificationCaller(false, "Entered email is same as previous email!");
      } else {
        const success = await changeEmail(email);
        notificationCaller(
          success,
          success ? "Email successfully changed!" : "Some error occured!",
        );
        setuserData((e) => {
          return { ...e, email: email, verification: false };
        });
      }
      setloading(false);
    }
  };
  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6">
      <input
        type="email"
        placeholder="First name"
        className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
        required
        id="email-chn"
      />
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
}

function Phone({
  userphone,
  userotherphone,
  setloading,
  loading,
  notificationCaller,
  setuserData,
  changePhone,
}) {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const phone = document.querySelector("#phone-chn").value;
      const otherphone = document.querySelector("#other-chn").value;

      if (phone == userphone) {
        seterror("Entered phone number is same as previous phone number!");
        notificationCaller(
          false,
          "Entered phone number is same as previous phone number!",
        );
      } else {
        const success = await changePhone(phone, otherphone);
        notificationCaller(
          success,
          success
            ? "Phone number successfully changed!"
            : "Some error occured!",
        );
        setuserData((e) => {
          return { ...e, phone: phone, otherphone: otherphone };
        });
      }
      setloading(false);
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6">
      <div className="flex w-full gap-3">
        <input
          type="number"
          placeholder="Phone"
          className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
          required
          id="phone-chn"
        />
        <input
          type="number"
          placeholder="Add Other"
          className="checkoutInput w-full !rounded-[0.6rem] !pl-4"
          id="other-chn"
        />
      </div>
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
}

function Address({
  userAddress,
  setloading,
  notificationCaller,
  setuserData,
  changeAddress,
  loading,
}) {
  const [country, setcountry] = useState({ iso2: "PK" });
  const [states, setstates] = useState();

  useEffect(() => {
    document
      .querySelectorAll(".stdropdown-input input")
      .forEach((it) => (it.required = true));
  }, []);

  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);

      const address =
        document.querySelector("#st-address").value +
        " " +
        document.querySelector("#city-chn").value +
        ` ${country.name} ${states.name} ` +
        document.querySelector("#zip-chn").value;
      if (address === userAddress) {
        seterror("Entered address is same as previous address!");
        notificationCaller(
          false,
          "Entered address is same as previous address!",
        );
      } else {
        const success = await changeAddress(address);
        console.log(success);
        notificationCaller(
          success,
          success ? "Address successfully changed!" : "Some error occured!",
        );
        setuserData((e) => {
          return { ...e, address: address };
        });
      }

      setloading(false);
    }
  };
  useEffect(() => {
    document.querySelector("#st-chn input").required = false;
  }, []);
  return (
    <form ref={formRef} className="flex flex-col gap-3 py-5 pb-20">
      <div className="flex w-full flex-col gap-2 [&_input:nth-child(1)]:!border-none [&_input]:!outline-none">
        <div
          id="cs-pi"
          className="relative flex w-full rounded-[10px] border pl-1 [&>div:nth-child(1)]:flex-1 [&_.stdropdown-container]:!border-none [&_.stdropdown-tools]:!hidden focus:[&_input]:border-black"
        >
          <CountrySelect
            required={true}
            onChange={(val) => {
              setcountry(val);
            }}
            placeHolder="Country/region"
          />
          <div className="flex-center absolute right-2 top-[50%] w-max translate-y-[-50%] gap-2 [&_svg]:w-[10px] ">
            <span
              style={{ backgroundSize: "cover" }}
              className={`fi fi-${country?.iso2.toLowerCase()} !h-[26px] !w-[33px] rounded-[4px] border border-black `}
            ></span>
            {arrowDown}
          </div>
        </div>
        <input
          required
          type="text"
          className="checkoutInput mt-2 !rounded-[10px]"
          placeholder="Street Address"
          id="st-address"
        />
        <p className="text-[14px] font-[400]">
          Add a house number if you have one
        </p>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          required
          className="checkoutInput rounded-[10px]"
          placeholder="City"
          id="city-chn"
        />
        <div
          id="st-chn"
          className="[&_select]:checkoutInput w-full [&_input]:!border-none [&_input]:!outline-none "
        >
          <StateSelect
            required={false}
            countryid={country?.id}
            value={states}
            onChange={(val) => {
              setstates(val);
            }}
            placeHolder="State"
          />
        </div>
        <input
          type="text"
          className="checkoutInput rounded-[10px]"
          placeholder="Zipcode"
          id="zip-chn"
        />
      </div>
      <div className="flex translate-y-[-8px] flex-col">
        <span className="flex h-[18px] items-center">
          {error && <ErrorP error={error} />}
        </span>
        <BtnAccount Submit={Submit} loading={loading} />
      </div>
    </form>
  );
}

const BtnAccount = ({ Submit, loading, name }) => {
  return (
    <button
      onClick={Submit}
      disabled={loading}
      className={`w-max rounded-[10px] bg-black px-6 py-2.5 text-white disabled:bg-gray-300 ${name ? "py-3" : ""}`}
    >
      {name ? name : "Save"}
    </button>
  );
};

export { BtnAccount };

const ErrorP = ({ error }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="flex-center gap-[0.4rem]"
    >
      {errorIcon}
      <p className="whitespace-nowrap text-[13px] text-pmRed">{error}</p>
    </motion.span>
  );
};
