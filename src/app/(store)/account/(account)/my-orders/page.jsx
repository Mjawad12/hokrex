"use client";
import { ReviewTypes, calender, copy, eye, star } from "@/Consonats";
import {
  ColorDialog,
  Cross,
  InstructionDialog,
} from "@/app/(others)/cart/page";
import { Sorting } from "@/app/(store)/categories/[slug]/page";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BtnAccount } from "../personal-info/page";
import notificationCaller from "@/components/NotificationCaller";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmittedDialog from "@/components/SubmittedDialog";

function page() {
  const [navState, setnavState] = useState("Active orders");
  const [selectedTimeline, setselectedTimeline] = useState("last 1 month");
  const [selectedOrders, setselectedOrders] = useState([]);

  const orders = [
    {
      orderType: "Active orders",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
    },
    {
      orderType: "Shipped",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "asdddddddddddddddddasdasd",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
      trackingID: 58029582224,
      deliveryCharges: "200",
      unpaidAmount: "500",
    },
    {
      orderType: "Canceled",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
    },
    {
      orderType: "Active orders",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
    },
    {
      orderType: "Active orders",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
    },
    {
      orderType: "Processing",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
      unpaidAmount: "400",
    },
    {
      orderType: "Delivered",
      active: true,
      product: {
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        customized: false,
        date: "23 march,2024",
        id: "c780acac-d46f-4e06-ad45-6b3e0e96a7d7",
        instruction: "asdddddddddddddddddasdasd",
        name: "Hood",
        price: "145.00",
        quant: 5,
        sizes: [
          { type: "XS", val: "5" },
          { type: "SM", val: "5" },
          { type: "MD", val: 0 },
          { type: "2XL", val: 0 },
          { type: "XL", val: 0 },
          { type: "LG", val: 0 },
          { type: "3XL", val: 0 },
        ],
        slug: "hood",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        orderId: "#2340343451",
      },
      trackingID: 58029582224,
      deliveryCharges: "200",
      unpaidAmount: "500",
    },
  ];

  useEffect(() => {
    let ordersSelected = [];
    orders?.map((it) => {
      if (it.orderType === navState) {
        ordersSelected = [...ordersSelected, it];
      }
    });
    setselectedOrders(ordersSelected);
  }, [navState]);

  return (
    <section className="w-full select-none pb-10">
      <ToastContainer />
      <div className="m-auto flex w-full max-w-[1020px] flex-col gap-12">
        <NavOrders navState={navState} setnavState={setnavState} />
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-[500]">
            {orders.length} orders placed in
          </p>
          <Sorting
            sorting={["last 1 month", "last 2 months", "last 6 months"]}
            selectedOption={selectedTimeline}
            setselectedOption={setselectedTimeline}
            small={true}
          />
        </div>
        <div className="flex w-full flex-col gap-8">
          {selectedOrders?.map((it, index) => (
            <OrderCard
              name={it.product.name}
              price={it.product.price}
              sizes={it.product.sizes}
              src={it.product.src}
              key={index}
              quant={it.product.quant}
              date={it.product.date}
              id={it.product.id}
              instructionValue={it.product.instruction}
              slug={it.product.slug}
              colors={it.product.colors}
              index={index}
              orderid={it.product.orderId}
              active={it.active}
              navState={navState}
              unpaidAmount={it.unpaidAmount}
              trackingID={it.trackingID}
              deliveryCharges={it.deliveryCharges}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;

const NavOrders = ({ setnavState, navState }) => {
  const items = [
    "Active orders",
    "Processing",
    "Shipped",
    "Delivered",
    "Canceled",
  ];
  return (
    <navbar className="w-full">
      <ul className="flex w-full items-center gap-3 border-b border-[#eeeeee] pt-9">
        {items?.map((it, index) => {
          return (
            <li
              key={index}
              onClick={() => setnavState(items[index])}
              className={`relative pb-3.5 text-[16px] font-[500]  ${navState === items[index] ? "text-black" : "text-pmGray"} cursor-pointer`}
            >
              <span className="rounded-lg px-2 py-1.5  hover:bg-[#F9F9F9] hover:text-black">
                {it}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[1px] w-full ${navState === items[index] ? "bg-black" : "bg-transparent"}`}
              />
            </li>
          );
        })}
      </ul>
    </navbar>
  );
};

const OrderCard = ({
  name,
  src,
  price,
  sizes,
  quant,
  date,
  id,
  instructionValue,
  slug,
  colors,
  index,
  orderid,
  active,
  navState,
  unpaidAmount,
  trackingID,
  deliveryCharges,
}) => {
  const [instuctionDialog, setinstuctionDialog] = useState(false);
  const [cartDialog, setcartDialog] = useState(false);
  const [shipingDetailState, setshipingDetailState] = useState(false);
  const [ReviewDialogstate, setReviewDialogstate] = useState(false);

  const calculatePrice = () => {
    let cal_Price = 0;
    sizes.forEach((it) => {
      if (it.val !== 0 && it.val) {
        cal_Price += price * parseInt(it.val);
      }
    });
    return cal_Price;
  };

  return (
    <motion.div className="flex w-full flex-col bg-white transition-all duration-300">
      <AnimatePresence>
        {instuctionDialog && (
          <InstructionDialog
            setinstuctionDialog={setinstuctionDialog}
            instructionValue={instructionValue}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cartDialog && (
          <ColorDialog
            setcartDialog={setcartDialog}
            img={src}
            slug={slug}
            colors={colors}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shipingDetailState && (
          <ShippingDetails
            setshipingDetailState={setshipingDetailState}
            unpaidAmount={unpaidAmount}
            deliveryCharges={deliveryCharges}
            subtotal={calculatePrice()}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {ReviewDialogstate && (
          <ReviewDialog setReviewDialogstate={setReviewDialogstate} />
        )}
      </AnimatePresence>

      <div className="flex-center w-full justify-between pb-1">
        <p className="text-[16px] font-[500]">
          Order ID.<span className="text-pmGray"> {orderid}</span>
        </p>
        {active && navState !== "Delivered" && (
          <span className="rounded-[10px] bg-[#1CAD221A] px-3 py-2 text-[16px] font-[600] text-[#19950E]">
            Active
          </span>
        )}
        {navState === "Delivered" && (
          <div className="flex gap-5">
            <button
              onClick={() => setReviewDialogstate(true)}
              className="flex-center gap-2 rounded-[10px] border border-borderP bg-[#F9F9F9] px-9 py-[0.25rem] text-[15px] font-[600] outline-none [&_svg]:translate-y-[-1px] [&_svg]:scale-[0.95] [&_svg]:stroke-black"
            >
              {star} Rate us
            </button>
            <span className="rounded-[10px] bg-[#1CAD221A] px-3 py-2 text-[16px] font-[600] text-[#19950E]">
              Completed
            </span>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-1">
          <div
            onClick={() => setcartDialog(true)}
            className="relative h-[180px] w-[180px] overflow-hidden rounded-[17px] bg-[#EEEEEE] hover:[&_#over]:opacity-[1]"
          >
            <Image
              src={src}
              alt="Cart item"
              width={5000}
              height={5000}
              className="h-[180px] w-[180px] "
            />
            <span className="absolute left-1.5 top-1.5 z-20 rounded-[10px] border border-[#E5E5E5] bg-white p-1 text-[12px] font-[700]">
              Customised
            </span>
            <span
              id="over"
              className="flex-center absolute inset-0 z-20 cursor-pointer bg-[#0000004D] opacity-0 transition-all duration-500"
            >
              <span className="flex items-center gap-0.5 text-[14px] font-[500] text-white">
                {eye}View
              </span>
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 pt-3">
          <div className="flex w-full justify-between ">
            <div className="flex gap-[0.9rem] ">
              <div className="flex flex-col justify-end gap-1">
                <p className="text-[20px] font-[500]">{name}</p>
                <p className="text-[16px] font-[600] text-pmRed">${price}</p>
                <div className="flex w-full flex-wrap gap-2 gap-y-1">
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
                          >
                            {it.type}
                          </p>
                          <p
                            id={`inp-size-quant-${index}`}
                            style={{
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                            }}
                            className="w-[37px] rounded-[9px] border border-borderP py-[0.29rem] text-center text-[14px] font-[500]"
                          >
                            {it.val}
                          </p>
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[17.5rem] flex-wrap gap-3 gap-y-1">
              <button
                onClick={() => setinstuctionDialog(!instuctionDialog)}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                View Instruction
              </button>
              <button
                onClick={() => {}}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                Download file
              </button>
              <button
                onClick={() => setcartDialog(!cartDialog)}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                View Colors
              </button>
              <button
                onClick={() => {
                  setshipingDetailState(!shipingDetailState);
                }}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                Shiping details
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between border-y border-[#E5E5E5] py-[0.7rem]">
            <div className="flex-center gap-3">
              <div className="flex-center gap-2 border-r-2 border-pmGray pr-3 ">
                {calender}
                <p className="text-[14px] font-[500] text-pmGray">{date}</p>
              </div>
              <p className="text-[14px] font-[500] text-pmGray ">
                Total units {quant}
              </p>
            </div>
            <p
              id="sub-total-price"
              className="text-[17px] font-[600] text-black "
            >
              Sub Total ${calculatePrice()}
            </p>
          </div>
        </div>
      </div>
      {navState === "Processing" && (
        <div className="flex items-center justify-between">
          <div className="flex-center w-full max-w-[180px]">
            <span
              style={{ boxShadow: "2px 4px 14px 0px #0000000D" }}
              className="cursor-pointer rounded-[10px] border border-[#E5E5E5] bg-white p-1 px-2 text-[13px] font-[700]"
            >
              View Original Product
            </span>
          </div>
          <div className="flex w-full flex-1 flex-grow-[0.98] items-center justify-between rounded-[10px] border border-[#E5E5E5] px-6 py-2.5 pr-2.5">
            <div className="flex flex-col">
              <p className="text-[12px] font-[500] text-pmGray">
                Delivery charges
              </p>
              <span className="text-[20px] font-[600]">
                Total ${unpaidAmount}/<span className="text-pmRed">unpaid</span>
              </span>
            </div>
            <BtnAccount Submit={() => {}} name={"Pay now"} />
          </div>
        </div>
      )}

      {navState === "Shipped" && (
        <div className="flex items-center justify-between">
          <div className="flex-center w-full max-w-[180px]">
            <span
              style={{ boxShadow: "2px 4px 14px 0px #0000000D" }}
              className="cursor-pointer rounded-[10px] border border-[#E5E5E5] bg-white p-1 px-2 text-[13px] font-[700]"
            >
              View Original Product
            </span>
          </div>

          <div className="flex w-full flex-1 flex-grow-[0.98] items-center justify-between rounded-[10px] ">
            <div className="flex-center gap-3.5">
              <div className="flex items-end gap-3 rounded-[10px] border border-[#EEEEEE] py-2.5 pl-6 pr-4">
                <div className="flex flex-col">
                  <p className="text-[12px] font-[500] text-pmGray">
                    Tracking ID
                  </p>
                  <span className="text-[20px] font-[600]">#{trackingID}</span>
                </div>
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(trackingID);
                    notificationCaller(true, "Traking id Copied!", toast);
                  }}
                  className="cursor-pointer rounded-full bg-[#F9F9F9] p-[0.6rem]"
                >
                  {copy}
                </span>
              </div>

              <div className="flex rounded-[10px] border border-[#EEEEEE] px-8 ">
                <Image
                  src={"/fed.png"}
                  width={1000}
                  height={1000}
                  className="h-[70px] w-[127px]"
                  alt="fedex"
                />
              </div>
            </div>
            <button className="btn-Primary !rounded-[10px]">
              View Tacking Status
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ShippingDetails = ({
  setshipingDetailState,
  subtotal,
  deliveryCharges,
  unpaidAmount,
}) => {
  const [edit, setedit] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="flex-center fixed left-0 top-0 z-50 min-h-screen w-screen bg-[#00000066]"
    >
      <motion.div
        initial={{ scale: 0.9, y: 60 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ scale: 0.9, y: 60 }}
        className="relative flex  w-full max-w-[390px] flex-col gap-2 rounded-[15px] bg-white px-[1.4rem] pb-7 pt-16"
      >
        <Cross clickFunc={() => setshipingDetailState(false)} />

        <p className="text-[21px] font-[700]">Shipping Details</p>

        <div className="flex flex-col gap-9 rounded-[11px] border border-[#E5E5E5] px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-[600]">Shipping address</p>
            <button
              onClick={(e) => {
                setedit(!edit);
                setTimeout(() => {
                  e.target.parentElement.nextElementSibling.focus();
                }, 100);
              }}
              className="border-none font-[600] underline underline-offset-4 outline-none"
            >
              {edit ? "Save" : "Edit"}
            </button>
          </div>
          <textarea
            cols={5}
            className="resize-none border-none text-[15px] text-pmGray outline-none"
            defaultValue={
              "sadddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            }
            onFocus={(e) => {
              !edit && e.target.blur();
            }}
          />
        </div>
        <div className="mt-2.5 flex flex-col gap-9 rounded-[11px] border border-[#E5E5E5] px-4 py-3">
          <p className="text-[16px] font-[600]">Shipping Cost</p>
          <div className="flex flex-col gap-1">
            <span className="flex items-center justify-between text-[14px]">
              <span>Sub Total</span>
              <span className="text-[14px] font-[600] ">
                ${subtotal}/<span className="text-[#19950E]">paid</span>
              </span>
            </span>

            <span className="flex items-center justify-between pb-1 text-[14px]">
              <span>Delivery charges</span>
              <span className="text-[14px] font-[600] ">
                ${deliveryCharges}/<span className="text-pmRed">unpaid</span>
              </span>
            </span>

            <span className="flex items-center justify-between border-t border-[#E5E5E5] pt-2 text-[14px]">
              <span>Total Payables</span>
              <span className="text-[14px] font-[600] ">
                ${unpaidAmount}/<span className="text-pmRed">unpaid</span>
              </span>
            </span>
          </div>
        </div>
        <div>
          <p className="mb-3 text-[14px] font-[400] text-pmGray">
            Delivery partner Fedex, DHL and TCS
          </p>
          <button className="w-full rounded-[10px] border-none bg-black py-3 text-[17px] font-[500] text-white outline-none">
            Pay now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ReviewDialog = ({ setReviewDialogstate }) => {
  const formRef = useRef(null);
  const [loading, setloading] = useState(false);
  const [submiited, setsubmiited] = useState(false);
  const [selectedReview, setselectedReview] = useState(4);

  const handleReviewSubmit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      setsubmiited(true);

      // const data = {
      //   name: document.querySelector("input#name").value,
      //   designation: document.querySelector("input#designation").value,
      //   phone: document.querySelector("input#phone")?.value ?? "unkonwn",
      //   email: document.querySelector("input#email")?.value ?? "unkonwn",
      //   rating: +selectedReview + 1,
      //   image: parsedimageData?.url ?? "https://kabariya.pk/reviewUserImp.png",
      //   review: document.querySelector("#rev-cl").value,
      // };
      // const dt = fetch(`${process.env.NEXT_PUBLIC_PORT}/api/postReview`, {
      //   body: JSON.stringify(data),
      //   method: "POST",
      // });
      setloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="flex-center fixed left-0 top-0 z-50  min-h-screen w-screen bg-[#00000066]"
    >
      <div className="relative flex w-full max-w-[600px] flex-col gap-2 rounded-[15px] bg-white pb-5 pt-9">
        <Cross clickFunc={() => setReviewDialogstate(false)} />
        {submiited && (
          <SubmittedDialog loading={loading} setsubmitted={setsubmiited} />
        )}
        <div className={`${submiited ? "hidden" : "flex flex-col"}`}>
          <h2 className="font-pm px-11 text-[30px] font-[700]">Write Review</h2>

          <form action="#" className="" ref={formRef}>
            <div className="mt-5 flex gap-5 border-b border-[#0000001A] px-11 pb-[1.4rem] smo:flex-col smo:px-6">
              <InputFull require={true} text={"Name"} type={"text"} />
              <InputFull require={true} text={"Designation"} type={"text"} />
            </div>
            <div className="flex flex-col gap-3.5 border-b border-[#0000001A] px-11 py-5 smo:px-6">
              <div>
                <h3 className="font-pm text-[17px] font-[600]">
                  Contact Details{" "}
                  <span className="text-[#707070]">(Optional)</span>
                </h3>
                <p className="text-[14px] text-[#F2A1A1]">
                  It will be private and will not be visible on the website.
                </p>
              </div>
              <div className="flex gap-5 smo:flex-col smo:gap-3 ">
                <InputFull type={"number"} placeholder="Phone" id="phone" />
                <InputFull type={"email"} placeholder="Email" id="email" />
              </div>
            </div>
            <div className="flex flex-col gap-3.5 px-11 py-5 smo:px-6">
              <div className="flex gap-0.5 [&_svg]:mt-[2px] [&_svg]:scale-[1.02]">
                {star}
                <h3 className="font-pm text-[17px] font-[600] [&_svg]:w-[15px]">
                  Stars
                </h3>
              </div>
              <div className="flex items-center justify-between gap-3 smo:gap-2 smaller:flex-wrap smaller:justify-center">
                {ReviewTypes.map((it, index) => (
                  <ReviewBtn
                    key={index}
                    index={index}
                    svg={it}
                    selected={selectedReview === index}
                    setSelected={setselectedReview}
                  />
                ))}
              </div>
              <div>
                <h3 className="font-pm text-[17px] font-[600] [&_svg]:w-[15px]">
                  Write your Experience
                </h3>
                <textarea
                  className="mt-2 w-full resize-none rounded-xl border px-5 py-2 outline-none"
                  placeholder="Amazing experience"
                  cols={5}
                  rows={3}
                  required
                  id="rev-cl"
                />
              </div>
              <button
                onClick={handleReviewSubmit}
                className="btn max-w-[10rem] rounded-[0.65rem] px-4"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const InputFull = ({ text, type, require, placeholder, id }) => {
  return (
    <div className="flex w-full max-w-[610px] flex-col items-start justify-start gap-2 extLar:max-w-[550px] larger:max-w-[100%]">
      {text && <p className="formp text-[17px] font-[600]">{text}</p>}
      <input
        className="forminput userdet h-[3.2rem] rounded-lg px-5 small:!h-[3.15rem] "
        type={type}
        placeholder={text ? text : placeholder}
        maxLength={text === "CNIC" ? 15 : 25}
        minLength={text === "CNIC" ? 15 : "undefined"}
        required={require}
        id={text?.toLowerCase() ?? id}
      />
    </div>
  );
};

const ReviewBtn = ({ svg, index, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(index)}
      className={`flex cursor-pointer items-center justify-start gap-3 rounded-lg  border border-[#F2F2F2] px-3 py-1.5 pr-[1.2rem] transition-all duration-200 hover:border-black smo:flex-col smo:!gap-0.5 smo:rounded-[0.8rem] smo:!px-4 smo:!py-1 smo:!pb-[0px] smo:[&_svg]:h-[40px] smo:[&_svg]:w-[40px]  ${
        selected ? "!border-black bg-[#FFE4621A] [&>span]:text-black" : ""
      } `}
    >
      {svg}{" "}
      <span className="font-pm text-[17px] font-[600] text-gray-400 transition-all duration-200">
        {index + 1}
      </span>
    </div>
  );
};
