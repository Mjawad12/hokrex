"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { calender, cart, cross, redCross } from "@/Consonats";
import Link from "next/link";
import { ContextCart } from "@/components/Mainstate(cart)/Mainstatecart";
import { AnimatePresence, motion } from "framer-motion";
import { CheckoutNav } from "../checkout/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import { Upload } from "../hokrex-shadow-eye-admin-56789/addproduct/page";
import { useRouter } from "next/navigation";

export default function page() {
  const { cartState, removeItem, addInstruction, dispatch } =
    useContext(ContextCart);
  const { authToken } = useContext(ContextStore);
  const [totalPrice, settotalPrice] = useState(0);
  const [givenfiles, setgivenfiles] = useState(null);

  const router = useRouter();
  useEffect(() => {
    console.log(givenfiles);
  }, [givenfiles]);

  const Tocheckout = async (e) => {
    if (!authToken) {
      router.push("/login");
    } else {
      e.target.disabled = true;
      if (!givenfiles) {
        SaveSizes();
        cartState.items.forEach((it, index) => {
          it.files.length < 10 &&
            document.querySelector(`#file-link-${index}`).value &&
            dispatch({
              type: "fileAdder",
              files: [document.querySelector(`#file-link-${index}`).value],
              index: index,
            });
        });
        router.push("/checkout");
      } else {
        let i = 0;
        for (let key in givenfiles) {
          let urlArray = await uploadFiles(givenfiles[key]);
          urlArray = [
            ...urlArray,
            document.querySelector(`#file-link-${i}`).value || "",
          ];
          dispatch({
            type: "fileAdder",
            files: urlArray,
            index: key,
          });
          i++;
        }
        router.push("/checkout");
      }
      e.target.disabled = false;
    }
  };

  const uploadFiles = async (files) => {
    let files_upload = [];
    for (let i = 0; i < files.length; i++) {
      toast(`Uploading file ${files[i].name.slice(0, 6)}...`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "info",
      });
      const url = await Upload(files[i]);
      files_upload = [...files_upload, url];
    }
    return files_upload;
  };

  const SaveSizes = () => {
    let quant =
      window.innerWidth > 968 ? "inp-size-quant-" : "inp-size-quant-mob-";
    let val = window.innerWidth > 968 ? "inp-size-type-" : "inp-size-type-mob-";
    for (let i = 0; i < cartState.items.length; i++) {
      let newSizes = [];
      const vals = document.querySelectorAll(`#${quant}${i}`);
      const sizs = document.querySelectorAll(`#${val}${i}`);
      sizs.forEach((it, index) => {
        newSizes = [
          ...newSizes,
          { type: it.innerHTML, val: vals[index].value },
        ];
      });
      console.log(newSizes);
      dispatch({ type: "sizesAdder", index: i, sizes: newSizes });
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full ">
      <ToastContainer />
      <CheckoutNav
        link={"/categories/All"}
        name={"My cart"}
        back={"shopping"}
      />
      <div className="m-auto flex min-h-[calc(100vh-64px)] max-w-[1150px] gap-10 px-3 pb-6 small:flex-col small:gap-2 small:px-5 small:pb-0">
        {cartState?.items?.length > 0 ? (
          <>
            <div className="flex w-full flex-1 flex-grow-[0.6] flex-col gap-5 border-r border-[#E5E5E5] py-12 pr-10 small:border-r-0 small:py-5 small:pb-0 small:pr-0">
              <div className="flex flex-col gap-10 small:gap-5 ">
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
                    slug={it.slug}
                    colors={it.colors}
                    index={index}
                    settotalPrice={settotalPrice}
                    files={it?.files || []}
                    customized={it.customized}
                    setgivenfiles={setgivenfiles}
                    givenfiles={givenfiles}
                    dispatch={dispatch}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full flex-1 flex-grow-[0.45] flex-col gap-2 small:pb-24">
              <div className="sticky left-0 top-0 flex flex-col gap-2 py-9 small:relative small:py-0">
                <div className="flex w-full max-w-[23rem] flex-col gap-5 rounded-lg px-[1.3rem] pt-5 hover:border-black small:max-w-[100%] small:p-0 small:pt-2.5">
                  <p className="text-[21px] font-[500] ">Summary</p>
                  <div className="flex w-full flex-col gap-[0.1rem]">
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[15px] font-[500]">Total unit</p>
                      <span className="text-[15px] font-[500] text-black ">
                        {cartState.total}
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[15px] font-[500]">Sub Total</p>
                      <span className="text-[15px] font-[500] text-black ">
                        ${totalPrice ? totalPrice?.toFixed(2) : 0}
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[15px] font-[500]">Shipping</p>
                      <span className="text-[15px] font-[500] text-black ">
                        Calculated at checkout
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between border-b border-[#E5E5E5] pb-5 small:mt-5 small:border-b-0">
                      <p className="text-[15px] font-[700]">Total price</p>
                      <span className="text-[17px] font-[600] text-pmRed">
                        ${totalPrice ? totalPrice?.toFixed(2) : 0}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={Tocheckout}
                    className="flex-center relative w-full gap-1 rounded-[10px] border border-black px-4 py-[0.6rem] text-[18px] font-[500] small:hidden"
                  >
                    Continue to Checkout
                  </button>
                </div>
                <div className="flex-center h-[26px] w-full max-w-[23rem] small:hidden small:max-w-max ">
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
            <MobCheckOutBtn authToken={authToken} Tocheckout={Tocheckout} />
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
      <FooterCart />
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
  slug,
  colors,
  index,
  settotalPrice,
  files,
  customized,
  setgivenfiles,
  givenfiles,
  dispatch,
}) => {
  const fileRef = useRef(null);
  const nfs = useRef(null);
  const [instuctionDialog, setinstuctionDialog] = useState(false);
  const [cartDialog, setcartDialog] = useState(false);
  const [itemPrice, setitemPrice] = useState(quant * price);

  const intructionCall = (intruct) => {
    addInstruction(id, intruct);
  };
  const calculatePrice = (val) => {
    if (window.innerWidth < 968) {
      let cal_Price = 0;
      document
        .querySelectorAll(`#inp-size-quant-mob-${index}`)
        .forEach((it) => {
          if (it.value !== "") {
            cal_Price = cal_Price + price * it.value;
          }
        });
      setitemPrice(cal_Price);
    } else {
      let cal_Price = 0;
      document.querySelectorAll(`#inp-size-quant-${index}`).forEach((it) => {
        if (it.value !== "") {
          cal_Price = cal_Price + price * it.value;
        }
      });
      setitemPrice(cal_Price);
    }
  };
  const totalPriceCal = () => {
    if (window.innerWidth < 968) {
      let cal_price = 0;
      document.querySelectorAll("#sub-total-price-mob").forEach((it) => {
        cal_price =
          cal_price +
          parseInt(it.innerText.slice(it.innerText.lastIndexOf("$") + 1));
      });
      settotalPrice(cal_price);
    } else {
      let cal_price = 0;
      document.querySelectorAll("#sub-total-price").forEach((it) => {
        cal_price =
          cal_price +
          parseInt(it.innerText.slice(it.innerText.lastIndexOf("$") + 1));
      });
      settotalPrice(cal_price);
    }
  };

  useEffect(() => {
    totalPriceCal();
  }, [itemPrice]);
  return (
    <motion.div className="flex w-full flex-col bg-white transition-all duration-300 small:border-b small:border-[#E5E5E5] small:pb-6">
      <AnimatePresence>
        {instuctionDialog && (
          <InstructionDialog
            setinstuctionDialog={setinstuctionDialog}
            intructionCall={intructionCall}
            instructionValue={instructionValue}
          />
        )}
      </AnimatePresence>

      {cartDialog && (
        <ColorDialog
          setcartDialog={setcartDialog}
          img={src}
          slug={slug}
          colors={colors}
        />
      )}
      <div className="flex items-start justify-between">
        <div className="flex w-full max-w-[23.5rem] flex-col gap-[0.6rem] small:max-w-full ">
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
                  setTimeout(() => {
                    totalPriceCal();
                  }, 100);
                }}
                className="absolute -right-2 -top-2 cursor-pointer [&_path]:hover:stroke-white [&_rect]:fill-white [&_rect]:hover:fill-pmRed "
              >
                {cross}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-1 small:justify-center">
              <div className="flex items-center gap-2 small:flex-col-reverse small:items-start small:gap-1">
                <p className="text-[20px] font-[500]">{name}</p>
                {customized && (
                  <span className="rounded-[7px] bg-black px-[7px] py-[3px] text-[9px] font-[500] text-white small:rounded-[6px] small:py-[4px] small:text-[10px] small:leading-[12px] ">
                    Customized
                  </span>
                )}
              </div>
              <p className="text-[16px] font-[600] text-pmRed">${price}</p>
              <div className="flex w-full flex-wrap gap-2 gap-y-1 small:hidden ">
                {sizes?.map(
                  (it, ind) =>
                    it.val !== 0 && (
                      <div
                        className="flex-center overflow-hidden rounded-[9px] "
                        key={ind}
                      >
                        <p
                          style={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                          className="rounded-[9px] border border-r-0 border-borderP px-2 py-[0.29rem] text-[14px] font-[700]"
                          id={`inp-size-type-${index}`}
                        >
                          {it.type}
                        </p>
                        <input
                          id={`inp-size-quant-${index}`}
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                          }}
                          className="w-[37px] rounded-[9px] border border-borderP py-[0.29rem] text-center text-[14px] font-[500] outline-none placeholder:text-black hover:border-darkP focus:border-darkP"
                          defaultValue={it.val}
                          type="number"
                          onInput={calculatePrice}
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
          <div className="flex flex-col gap-2 small:mt-0.5">
            <div className="hidden w-full flex-wrap gap-2 gap-y-1 small:flex">
              {sizes?.map(
                (it, ind) =>
                  it.val !== 0 && (
                    <div
                      className="flex-center overflow-hidden rounded-[9px] "
                      key={ind}
                    >
                      <p
                        style={{
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        id={`inp-size-type-mob-${index}`}
                        className="rounded-[9px] border border-r-0 border-borderP px-2 py-[0.29rem] text-[14px] font-[700]"
                      >
                        {it.type}
                      </p>
                      <input
                        id={`inp-size-quant-mob-${index}`}
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
                        onInput={calculatePrice}
                      ></input>
                    </div>
                  ),
              )}
            </div>
            <div className="flex-center mt-1 justify-start gap-4 small:gap-3">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                multiple
                onInput={(e) => {
                  console.log(
                    document.querySelectorAll(`#fil-sp-${index}>span`),
                  );
                  if (
                    e.target.files.length > 0 &&
                    document.querySelectorAll(`#fil-sp-${index}>span`).length <
                      10
                  ) {
                    let tempFiles = [];
                    for (
                      let i = 0;
                      i < e.target.files.length &&
                      tempFiles.length + files?.length < 10;
                      i++
                    ) {
                      i === 0 && nfs.current?.classList.add("hidden");
                      tempFiles = [...tempFiles, e.target.files[i]];
                    }
                    setgivenfiles((prev) => {
                      if (prev && prev[index]) {
                        return {
                          ...prev,
                          [index]: [...prev[index], ...tempFiles],
                        };
                      } else {
                        return { ...prev, [index]: [...tempFiles] };
                      }
                    });
                  }
                }}
              />
              <button
                className="cs-in-1 whitespace-nowrap"
                onClick={() => fileRef.current.click()}
              >
                Choose File
              </button>
              <div id={`fil-sp-${index}`} className="flex flex-col">
                {files.length > 0 ? (
                  files.map((it, ind) => (
                    <span
                      key={ind}
                      className="relative text-[14px] font-[500] [&_#crs-del]:hover:flex"
                    >
                      <span
                        id="crs-del"
                        className="absolute -right-4 -top-1 hidden h-4 w-4 cursor-pointer items-center justify-center [&_svg]:overflow-visible"
                        onClick={() => {
                          dispatch({
                            type: "fileRemover",
                            index: index,
                            fileIndex: ind,
                          });
                        }}
                      >
                        {redCross}
                      </span>
                      {it.slice(it.lastIndexOf("/") + 1, 30)}
                    </span>
                  ))
                ) : (
                  <p
                    className="text-[14px] font-[500]"
                    ref={nfs}
                    onClick={() => fileRef.current.click()}
                  >
                    No File selected
                  </p>
                )}
                {givenfiles &&
                  givenfiles[index]?.map((it, ind) => (
                    <span
                      key={index}
                      className="relative w-max text-[14px] font-[500] [&_#crs-del]:hover:flex"
                    >
                      <span
                        id="crs-del"
                        onClick={() => {
                          setgivenfiles((e) => {
                            let tempProd = e[index];
                            tempProd.splice(ind, 1);
                            return {
                              ...e,
                              [index]: tempProd,
                            };
                          });
                        }}
                        className="absolute -right-4 -top-1 hidden h-4 w-4 cursor-pointer items-center justify-center [&_svg]:overflow-visible"
                      >
                        {redCross}
                      </span>
                      {it.name.slice(it.name.lastIndexOf("/") + 1, 30)}
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="File Link"
            id={`file-link-${index}`}
            className="w-full rounded-xl border border-borderP px-4 py-2 text-[14px] font-[500] outline-none"
          />
        </div>
        {/*  */}

        <div className="flex flex-col gap-3 small:hidden">
          <button
            onClick={() => setinstuctionDialog(!instuctionDialog)}
            className="w-[8.2rem] rounded-lg border border-borderP py-[0.35rem] text-[14px] font-[500]"
          >
            Add Instruction
          </button>
          <button
            onClick={() => setcartDialog(!cartDialog)}
            className="w-[8.2rem] rounded-lg border border-borderP py-[0.35rem] text-[14px] font-[500]"
          >
            View Colors
          </button>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-2 ">
        <p className="text-[13px] font-[500] small:text-[12px]">
          If The File Is Larger Than 256mb, Please Provide A Dropbox Or Other
          Link For Download Below
        </p>

        <div className="mt-1.5 hidden gap-3 small:flex small:gap-2.5">
          <button
            onClick={() => setinstuctionDialog(!instuctionDialog)}
            className="w-[8.2rem] rounded-[10px] border border-borderP py-[0.5rem] text-[14px] font-[500] small:w-[9rem] "
          >
            Add Instruction
          </button>
          <button
            onClick={() => setcartDialog(!cartDialog)}
            className="w-[8.2rem] rounded-[10px] border border-borderP py-[0.5rem] text-[14px] font-[500] small:w-[9rem] "
          >
            View Colors
          </button>
        </div>

        <div className="flex items-center justify-between border-y border-black py-[0.7rem] small:hidden">
          <div className="flex-center gap-3">
            <div className="flex-center gap-2 border-r-2 border-pmGray pr-3 ">
              {calender}
              <p className="text-[14px] font-[400] text-pmGray">{date}</p>
            </div>
            <p className="text-[14px] font-[500] text-pmGray ">
              Total units {quant}
            </p>
          </div>
          <p
            id="sub-total-price"
            className="text-[17px] font-[600] text-black "
          >
            Sub Total ${itemPrice.toFixed(2)}
          </p>
        </div>

        <div className="mt-2 hidden flex-col gap-3 small:flex">
          <div className="flex items-center justify-between ">
            <div className="flex-center gap-2">
              {calender}
              <p className="text-[14px] font-[400] text-pmGray">{date}</p>
            </div>
            <p className="text-[14px] font-[500] text-pmGray ">
              Total units {quant}
            </p>
          </div>
          <span className="w-full rounded-[10px] border border-black px-2.5 py-2">
            <p
              id="sub-total-price-mob"
              className="text-[20px] font-[600] text-black "
            >
              Sub Total ${itemPrice.toFixed(2)}
            </p>
          </span>
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
    if (formRefInt.current.checkValidity() && intructionCall) {
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
      className="flex-center fixed left-0 top-0 z-50 min-h-screen w-screen bg-[#00000066] px-5"
    >
      <motion.form
        ref={formRefInt}
        initial={{ scale: 0.9, y: 60 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ scale: 0.9, y: 60 }}
        className="relative flex min-h-[600px] w-full max-w-[390px] flex-col gap-4 rounded-[15px] bg-white px-[1.4rem] pb-7 pt-16"
      >
        <Cross clickFunc={() => setinstuctionDialog(false)} />

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
          onFocus={(e) => {
            !intructionCall && e.target.blur();
          }}
        />
        {intructionCall && (
          <button
            onClick={Instruction}
            className="w-full rounded-[10px] border-none bg-black py-3 text-[17px] font-[500] text-white outline-none"
          >
            Done
          </button>
        )}
      </motion.form>
    </motion.div>
  );
};

const ColorDialog = ({ img, colors, setcartDialog, slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="flex-center fixed left-0 top-0 z-50 min-h-screen w-screen bg-[#00000066] px-5"
    >
      <div className="relative flex min-h-[700px] w-full max-w-[1400px] rounded-[20px] bg-white px-7 massive:min-h-max ">
        <Cross clickFunc={() => setcartDialog(false)} />
        <span
          style={{ boxShadow: "2px 4px 14px 0px #0000000D" }}
          className="absolute left-7 top-5 rounded-[10px] border border-[#E5E5E5] bg-white px-2 py-1 text-[13px] font-[700]"
        >
          Customized
        </span>
        <div className="relative flex flex-1 flex-grow-[0.45] py-20">
          <div className="flex flex-col gap-5">
            {[0, 1, 2, 3, 4, 5].map((it) => (
              <div className="overflow-hidden rounded-[9px] border border-borderP">
                <Image
                  key={it}
                  width={60}
                  height={60}
                  alt="More images"
                  src={"/TestImg2.jpg"}
                />
              </div>
            ))}
          </div>
          <div className="flex-center w-full">
            <Image src={img} alt="cart item" width={500} height={500} />
            <Link
              href={slug ? "/product/" + slug : "/categories/All"}
              style={{ boxShadow: "2px 4px 14px 0px #0000000D" }}
              className="absolute bottom-7 left-[50%] translate-x-[-40%] rounded-[10px] border border-[#E5E5E5] bg-white px-2 py-[0.2rem] text-[13px] font-[700]"
            >
              View Original Product
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-grow-[0.55] items-start justify-start border-l border-[#E5E5E5] px-10 py-20">
          <div className="flex w-full flex-wrap items-start justify-start gap-2.5">
            {colors.map((it, index) => (
              <ColorGiver color={it} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Cross = ({ clickFunc }) => {
  return (
    <span
      onClick={clickFunc}
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 5L5 19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

const ColorGiver = ({ color }) => {
  return (
    <div
      style={{ boxShadow: "2px 2px 8px 0px #00000014" }}
      className="flex h-9 max-w-max items-center gap-1 rounded-[10px] border border-[#707070] px-1"
    >
      <div
        style={{ background: color, boxShadow: "0px 2px 8px 0px #00000014" }}
        className="h-7 w-7 rounded-full "
      ></div>
      <div className="border-l border-[#e5e5e5] p-[0.34rem] ">
        <span className="whitespace-nowrap text-[13px] font-[500]">
          {color}
        </span>
      </div>
    </div>
  );
};

export { Cross, InstructionDialog, ColorDialog, CartItem };

const MobCheckOutBtn = ({ authToken, Tocheckout }) => {
  return (
    <div className="small:flex-center fixed bottom-0 left-0 z-[20] hidden w-full flex-col gap-5 border border-[#E5E5E5] bg-white px-5 py-2 pt-3">
      <button
        onClick={Tocheckout}
        className="rounded-[10px] bg-black px-10 py-2 text-[17px] font-[500] text-white active:bg-pmGray"
      >
        Continue to Checkout
      </button>
      <span className="h-[5px] w-[135px] rounded-full bg-black"></span>
    </div>
  );
};

const FooterCart = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-white px-6 small:hidden">
      <div className="flex items-center justify-between  border-t border-[#E5E5E5] px-5 py-4">
        <span className="text-[14px] font-[300]">©2024, Sublimatics Inc.</span>
        <span className="text-[14px] font-[300]">Made by Hokrex</span>
      </div>
    </footer>
  );
};
