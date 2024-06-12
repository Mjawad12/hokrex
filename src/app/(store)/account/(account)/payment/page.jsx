"use client";
import { card, masterCard, trash } from "@/Consonats";
import { Cross } from "@/app/(others)/cart/page";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import notificationCaller from "@/components/NotificationCaller";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  const { userData, paymentAdder, setuserData } = useContext(ContextStore);
  const [cardAdder, setcardAdder] = useState(false);
  const cardDetails = [
    {
      bankName: "Meezan bank ltd.",
      def: true,
      cardNumber: "5105105105105100",
      name: "Jamshed Ali",
      expiryDate: "03/28",
    },
    {
      bankName: "Meezan bank ltd.",
      def: false,
      cardNumber: "4012886888881881",
      name: "Jamshed Ali",
      expiryDate: "03/28",
    },
  ];

  return (
    <div className="m-auto mt-10 flex w-full max-w-[1020px] flex-col gap-7 pb-10">
      <ToastContainer />
      {cardAdder && (
        <CardAdder
          setcardAdder={setcardAdder}
          paymentAdder={paymentAdder}
          setuserData={setuserData}
        />
      )}
      <h2 className="text-[24px] font-[700]">Payment methods</h2>
      <div className="flex w-full flex-wrap gap-6">
        {userData &&
          userData?.paymentMethods?.map((it, index) => (
            <CardDetails
              bankName={it.bankName}
              cardNumber={it.cardNumber}
              def={it.def}
              expiryDate={it.expiryDate}
              name={it.name}
              key={index}
            />
          ))}

        <div
          style={{ borderStyle: "dashed" }}
          id="br-das"
          onClick={() => setcardAdder(!cardAdder)}
          className="flex-center h-[241px] w-full max-w-[400px] cursor-pointer flex-col rounded-[10px]"
        >
          <div className="flex-center flex-col gap-2">
            <span className="flex-center h-[56px] w-[56px] rounded-full border border-[#E5E5E5]">
              {card}
            </span>
            <p className="text-[20px]">Add new card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

const CardDetails = ({ bankName, def, cardNumber, name, expiryDate }) => {
  return (
    <div
      style={{ boxShadow: "2px 4px 8px 0px #0000000D" }}
      className="flex w-full max-w-[400px] flex-col gap-12 rounded-[10px] border border-[#E5E5E5] px-8 py-5"
    >
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-[400]">{bankName}</p>
        <div className="flex-center gap-2">
          {def && (
            <span className="rounded-[7px] bg-black px-3 py-1 text-[13px] leading-[18px] text-white">
              Default
            </span>
          )}
          <span className="flex-center h-[30px] w-[30px] rounded-[7px] bg-[#F9F9F9]">
            {trash}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Blank />
        <Blank />
        <Blank />
        <p className="text-[25px] font-[400]">{cardNumber?.slice(-4)}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-11">
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-[500] leading-[13px]">Name</p>
            <p className="text-[16px] font-[400] leading-[20px]">{name}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-[500] leading-[13px]">Expire Date</p>
            <p className="text-[16px] font-[400] leading-[20px]">
              {expiryDate}
            </p>
          </div>
        </div>
        <span>{cards[detectCardType(cardNumber)]}</span>
      </div>
    </div>
  );
};

const Blank = () => {
  return (
    <div className="flex gap-[5px] [&_span]:h-[5px] [&_span]:w-[5px] [&_span]:rounded-full [&_span]:bg-black">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

function detectCardType(number) {
  var re = {
    electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    maestro:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    dankort: /^(5019)\d+$/,
    interpayment: /^(636)\d+$/,
    unionpay: /^(62|88)\d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (var key in re) {
    if (re[key].test(number)) {
      return key;
    }
  }
}

const cards = {
  electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
  maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
  dankort: /^(5019)\d+$/,
  interpayment: /^(636)\d+$/,
  unionpay: /^(62|88)\d+$/,
  visa: (
    <svg
      width="54"
      height="18"
      viewBox="0 0 54 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9476 5.76376C27.9168 8.20753 30.108 9.57134 31.7586 10.3821C33.4546 11.2141 34.0242 11.7476 34.0177 12.4915C34.0048 13.6301 32.6649 14.1326 31.4107 14.1522C29.2819 14.1855 28.0202 13.5903 27.0219 13.1193L26.9394 13.0804L26.1513 16.7982C27.166 17.2697 29.0448 17.6808 30.9932 17.6987C35.5664 17.6987 38.5586 15.423 38.5748 11.8944C38.5854 9.21544 36.3843 8.0504 34.6229 7.11811C33.44 6.49201 32.4554 5.97088 32.4723 5.16669C32.4869 4.55982 33.0613 3.91218 34.3204 3.74741C34.9434 3.66421 36.6636 3.60059 38.6136 4.50599L39.3791 0.908859C38.3304 0.523861 36.9824 0.155176 35.3043 0.155176C30.9997 0.155176 27.9719 2.46191 27.9476 5.76376ZM46.7339 0.464825C45.8988 0.464825 45.1949 0.95586 44.8809 1.70955L38.348 17.4341H42.918L43.8274 14.9007L49.4121 14.9007L49.9397 17.4341H53.9675L50.4527 0.464825H46.7339ZM48.6927 11.421L47.3738 5.0489L45.0807 11.421L48.6927 11.421ZM22.4065 0.464825L18.8042 17.4341H23.159L26.7596 0.464825H22.4065ZM11.4316 12.0148L15.9644 0.464825H20.5376L13.482 17.4341H8.87959L5.40677 3.89229C5.19639 3.05867 5.01353 2.75198 4.37269 2.40124C3.32567 1.827 1.59735 1.29029 0.0761719 0.957493L0.179741 0.464825H7.58982C8.53328 0.464825 9.38287 1.09779 9.5981 2.19406L11.4316 12.0148Z"
        fill="url(#paint0_linear_3343_4383)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3343_4383"
          x1="0.170104"
          y1="5.5511"
          x2="15.4031"
          y2="-15.9023"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#222357" />
          <stop offset="1" stopColor="#254AA5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  mastercard: (
    <svg
      width="51"
      height="33"
      viewBox="0 0 51 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.9627 16.7049C50.9627 25.4226 43.909 32.4897 35.2078 32.4897C26.5066 32.4897 19.4529 25.4226 19.4529 16.7049C19.4529 7.98724 26.5066 0.920166 35.2078 0.920166C43.909 0.920166 50.9627 7.98724 50.9627 16.7049Z"
        fill="#F79F1A"
      />
      <path
        d="M31.5267 16.7049C31.5267 25.4226 24.473 32.4897 15.7718 32.4897C7.07056 32.4897 0.0168457 25.4226 0.0168457 16.7049C0.0168457 7.98724 7.07056 0.920166 15.7718 0.920166C24.473 0.920166 31.5267 7.98724 31.5267 16.7049Z"
        fill="#EA001B"
      />
      <path
        d="M25.4898 4.27905C21.8138 7.16873 19.4541 11.6591 19.4541 16.7034C19.4541 21.7478 21.8138 26.2416 25.4898 29.1313C29.1658 26.2416 31.5255 21.7478 31.5255 16.7034C31.5255 11.6591 29.1658 7.16873 25.4898 4.27905Z"
        fill="#FF5F01"
      />
    </svg>
  ),
  amex: /^3[47][0-9]{13}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
};

const InputCard = ({ name, center, onKeyDown, id }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[12px] font-[600] leading-[14px]">{name}</p>
      <input
        id={id}
        onKeyDown={onKeyDown && onKeyDown}
        required
        className={`w-full rounded-[10px] border border-[#E5E5E5] px-4 py-3 outline-none ${center ? "text-center" : ""}`}
        maxLength={name === "Card number" ? 19 : undefined}
        minLength={name === "Card number" ? 19 : undefined}
      />
    </div>
  );
};

const CardAdder = ({ setcardAdder, paymentAdder, setuserData }) => {
  const [defaultCard, setdefaultCard] = useState(false);
  const [loading, setloading] = useState(false);
  const formRef = useRef(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      const paymentMethod = {
        name: document.querySelector("#name-card").value,
        cvc: document.querySelector("#cvc").value,
        cardNumber: document.querySelector("#card-number").value,
        expiryDate: document.querySelector("#ex-date").value,
        def: defaultCard,
        bankName: document.querySelector("#bank-name").value,
      };
      const result = await paymentAdder(paymentMethod);
      if (result.success) {
        notificationCaller(true, "Payment method added Successfully!", toast);
        setcardAdder(false);
        setuserData((e) => {
          return { ...e, paymentMethods: [...e.paymentMethods, paymentMethod] };
        });
      }
    }
    setloading(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="flex-center fixed inset-0 left-0 top-0 bg-[#00000066]"
    >
      <form
        ref={formRef}
        className="relative flex w-full max-w-[380px] flex-col gap-5 rounded-[21px] bg-white px-[1.3rem] pb-5 pt-16"
      >
        <Cross clickFunc={() => setcardAdder(false)} />
        <h3 className="text-[21px] font-[700] leading-[21px]">
          Add card details
        </h3>
        <div className="flex items-center gap-1.5 py-3 pt-2.5">
          <span className="flex-center h-[34px] w-[54px] rounded-[5px] bg-[#FF5F011A] [&_svg]:w-[33px] ">
            {cards["mastercard"]}
          </span>
          <span className="flex-center h-[34px] w-[54px] rounded-[5px] bg-[#253D8B1A] [&_svg]:w-[37px] ">
            {cards["visa"]}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <InputCard name={"Bank name"} id={"bank-name"} />
          <InputCard name={"Name on card"} id={"name-card"} />
          <InputCard
            onKeyDown={(e) => {
              if (
                (e.keyCode > 47 && e.keyCode < 58) ||
                (e.keyCode > 96 && e.keyCode < 106) ||
                e.key === "Backspace"
              ) {
                if (
                  (e.target.value.length + 1) % 5 === 0 &&
                  e.key !== "Backspace"
                ) {
                  e.target.value += " ";
                }
              } else {
                e.preventDefault();
              }
            }}
            name={"Card number"}
            id={"card-number"}
          />
          <div className="flex w-[180px] gap-2">
            <InputCard name={"Expire"} center={true} id={"ex-date"} />
            <InputCard name={"CVC"} id={"cvc"} />
          </div>
        </div>
        <CustomCheckbox
          text={"Set as default payment"}
          type={"sm"}
          fontSize={"sm"}
          borderGray={true}
          setOuter={setdefaultCard}
        />
        <button
          onClick={Submit}
          disabled={loading}
          className="w-full rounded-[10px] border-none bg-black py-3 text-[17px] font-[500] text-white outline-none transition-all duration-300 disabled:bg-gray-300"
        >
          Done
        </button>
      </form>
    </motion.div>
  );
};
