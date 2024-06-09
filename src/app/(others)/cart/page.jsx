"use client";
import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { calender, cart, cross } from "@/Consonats";
import Link from "next/link";
import { ContextCart } from "@/components/Mainstate(cart)/Mainstatecart";
import { AnimatePresence, motion } from "framer-motion";
import { CheckoutNav } from "../checkout/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const { cartState, removeItem, addInstruction } = useContext(ContextCart);

  return (
    <div className="min-h-[calc(100vh-64px)] w-full ">
      <ToastContainer />
      <CheckoutNav
        link={"/categories/All"}
        name={"My cart"}
        back={"shopping"}
      />
      <div className="m-auto flex min-h-[calc(100vh-64px)] max-w-[1150px] gap-10 px-3">
        {cartState?.items?.length > 0 ? (
          <>
            <div className="flex w-full flex-1 flex-grow-[0.6] flex-col gap-5 py-9">
              <h1 className="text-[20px] font-[700]">My Cart</h1>
              <div className="flex flex-col gap-10 ">
                {cartState?.items?.map((it, index) => (
                  <CartItem
                    name={it.name}
                    price={it.price}
                    sizes={it.sizes}
                    src={it.src}
                    key={index}
                    quant={it.quant}
                    date={it.date}
                    id={it.id}
                    instructionValue={it.instruction}
                    removeItem={removeItem}
                    addInstruction={addInstruction}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full flex-1 flex-grow-[0.4] flex-col gap-2">
              <div className="sticky left-0 top-0 flex flex-col gap-2 py-9">
                <div className="flex w-full max-w-[23rem] flex-col gap-5 rounded-lg border  border-borderP px-[1.3rem] py-5 hover:border-black ">
                  <p className="text-[20px] font-[500] ">Summary</p>
                  <div className="flex w-full flex-col gap-[0.6rem]">
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[14px] font-[600]">Total unit</p>
                      <span className="text-[14px] font-[400] text-black ">
                        {cartState.total}
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[14px] font-[600]">Sub Total</p>
                      <span className="text-[14px] font-[400] text-pmGray ">
                        ${cartState.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[14px] font-[600]">Shipping</p>
                      <span className="text-[14px] font-[400] text-pmGray ">
                        Calculated at checkout
                      </span>
                    </div>
                  </div>
                  <div className="border-border-p flex items-center justify-between border-y py-3">
                    <p className="text-[14px] font-[600]">Total price</p>
                    <span className="text-[17px] font-[600] text-pmRed">
                      ${cartState.price.toFixed(2)}
                    </span>
                  </div>
                  <Link
                    href="/checkout"
                    className="flex-center relative w-full gap-1 rounded-2xl bg-black px-4 py-[0.8rem] text-[18px] font-[500] text-white"
                  >
                    <span className="absolute left-5">{cart}</span>
                    Check out
                  </Link>
                </div>
                <div className="flex-center h-[26px] w-full max-w-[23rem] ">
                  <p className="mr-1 text-[13px] font-[400]">Payment method</p>
                  <Image
                    src={"/visa.jpg"}
                    width={35}
                    height={35}
                    alt="visa"
                    className="h-[26px] w-[35px]"
                  />
                  <Image
                    src={"/master.jpg"}
                    width={28}
                    height={28}
                    alt="master card"
                    className="h-[18px] w-[28px]"
                  />
                  <Image
                    src={"/paypal.jpg"}
                    width={40}
                    height={40}
                    alt="paypal"
                    className="ml-1"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-center m-auto w-full max-w-[30rem] flex-col gap-8">
            <Image
              src={"/emptyCart.gif"}
              width={1000}
              height={1000}
              alt="empty cart"
              className="h-40 w-40"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-center text-[38px] font-[500] ">
                Your Cart is Empty
              </h1>
              <p className="max-w-[32ch] text-center text-[18px] font-[400] text-[#707070]">
                You have no items in your Shopping cart. Lets go buy somthing!
              </p>
            </div>
            <Link
              href={"/categories/All"}
              className="mt-6 rounded-[10px] border-none bg-pmRed px-5 py-3 text-white outline-none"
            >
              Continue to Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const CartItem = ({
  name,
  src,
  price,
  sizes,
  quant,
  date,
  removeItem,
  id,
  addInstruction,
  instructionValue,
}) => {
  const fileRef = useRef(null);
  const [instuctionDialog, setinstuctionDialog] = useState(false);
  const intructionCall = (intruct) => {
    addInstruction(id, intruct);
  };
  return (
    <motion.div className="flex w-full flex-col bg-white transition-all duration-300">
      <AnimatePresence>
        {instuctionDialog && (
          <InstructionDialog
            setinstuctionDialog={setinstuctionDialog}
            intructionCall={intructionCall}
            instructionValue={instructionValue}
          />
        )}
      </AnimatePresence>
      <div className="flex items-start justify-between">
        <div className="flex w-full max-w-[23.5rem] flex-col gap-[0.6rem]">
          <div className="flex gap-[0.9rem]">
            <div className="relative">
              <div className="h-[105px] w-[110px] overflow-hidden rounded-lg bg-[#EEEEEE]">
                <Image
                  src={src}
                  alt="Cart item"
                  width={105}
                  height={105}
                  className="h-[105px] w-[110px] "
                />
              </div>
              <div
                onClick={async () => {
                  removeItem(id);
                  toast("Product removed from the cart!", {
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
                }}
                className="absolute -right-2 -top-2 cursor-pointer [&_path]:hover:stroke-white [&_rect]:fill-white [&_rect]:hover:fill-pmRed "
              >
                {cross}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-1">
              <p className="text-[20px] font-[500]">{name}</p>
              <p className="text-[16px] font-[600] text-pmRed">${price}</p>
              <div className="flex w-full flex-wrap gap-2 gap-y-1">
                {sizes?.map(
                  (it, index) =>
                    it.val !== 0 && (
                      <div
                        className="flex-center overflow-hidden rounded-[9px] "
                        key={index}
                      >
                        <p
                          style={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                          className="rounded-[9px] border border-r-0 border-borderP px-2 py-[0.29rem] text-[14px] font-[700]"
                        >
                          {it.type}
                        </p>
                        <input
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                          }}
                          className="w-[37px] rounded-[9px] border border-borderP py-[0.29rem] text-center text-[14px] font-[500] outline-none placeholder:text-black hover:border-darkP focus:border-darkP"
                          defaultValue={it.val}
                          type="number"
                          onKeyDown={(e) => {
                            if (
                              e.target.value.length > 1 &&
                              e.key !== "Backspace"
                            ) {
                              e.preventDefault();
                            }
                          }}
                        ></input>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
          <div className="flex-center mt-1 justify-start gap-4 ">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onInput={(e) => {
                console.log(e.target.files);
                if (e.target.files.length > 0) {
                  e.target.nextElementSibling.nextElementSibling.innerText =
                    e.target.files[0].name;
                }
              }}
            />
            <button className="cs-in-1" onClick={() => fileRef.current.click()}>
              Choose File
            </button>
            <p
              className="text-[14px] font-[500]"
              onClick={() => fileRef.current.click()}
            >
              No File selected
            </p>
          </div>
          <input
            type="text"
            placeholder="File Link"
            className="w-full rounded-xl border border-borderP px-4 py-2 text-[14px] font-[500] outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setinstuctionDialog(!instuctionDialog)}
            className="w-[8.2rem] rounded-lg border border-borderP py-[0.35rem] text-[14px] font-[500]"
          >
            Add Instruction
          </button>
          <button className="w-[8.2rem] rounded-lg border border-borderP py-[0.35rem] text-[14px] font-[500]">
            View Colors
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 ">
        <p className="text-[13px] font-[500]">
          If The File Is Larger Than 256mb, Please Provide A Dropbox Or Other
          Link For Download Below
        </p>
        <div className="flex items-center justify-between border-y border-black py-[0.7rem]">
          <div className="flex-center gap-3">
            <div className="flex-center gap-2 border-r-2 border-pmGray pr-3 ">
              {calender}
              <p className="text-[14px] font-[400] text-pmGray">{date}</p>
            </div>
            <p className="text-[14px] font-[500] text-pmGray ">
              Total units {quant}
            </p>
          </div>
          <p className="text-[17px] font-[600] text-black ">
            Sub Total ${price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const InstructionDialog = ({
  setinstuctionDialog,
  intructionCall,
  instructionValue,
}) => {
  const formRefInt = useRef(null);
  const textAreaRef = useRef(null);
  const Instruction = (e) => {
    if (formRefInt.current.checkValidity()) {
      e.preventDefault();
      intructionCall(textAreaRef.current.value);
      toast("Instruction added to the item!", {
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
      setinstuctionDialog(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="flex-center fixed left-0 top-0 z-20 min-h-screen w-screen bg-[#00000066]"
    >
      <motion.form
        ref={formRefInt}
        initial={{ scale: 0.9, y: 60 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ scale: 0.9, y: 60 }}
        className="relative flex min-h-[600px] w-full max-w-[390px] flex-col gap-4 rounded-[15px] bg-white px-[1.4rem] pb-7 pt-16"
      >
        <span
          onClick={() => setinstuctionDialog(false)}
          className="absolute right-[1.4rem] top-[1.1rem] cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5L19 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 5L5 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p className="text-[21px] font-[700]">Write Instruction</p>

        <textarea
          ref={textAreaRef}
          cols={5}
          rows={10}
          className="h-full w-full flex-1 flex-grow-[1] resize-none rounded-[11px] border px-4 py-4 text-[14px] text-[#707070] outline-none"
          defaultValue={instructionValue}
          placeholder={
            !instructionValue && "Write any instruction if you have."
          }
          maxLength={400}
          minLength={20}
          required
        />
        <button
          onClick={Instruction}
          className="w-full rounded-[10px] border-none bg-black py-3 text-[17px] font-[500] text-white outline-none"
        >
          Done
        </button>
      </motion.form>
    </motion.div>
  );
};
