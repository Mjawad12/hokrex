"use client";
import { calender, order } from "@/Consonats";
import { ColorDialog, InstructionDialog } from "@/app/(others)/cart/page";
import { Sorting } from "@/app/(store)/categories/[slug]/page";
import DropDown from "@/components/DropDown";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BtnAccount } from "../personal-info/page";

function page() {
  const [navState, setnavState] = useState("Active orders");
  const [selectedTimeline, setselectedTimeline] = useState("last 1 month");
  const [selectedOrders, setselectedOrders] = useState([]);
  const orders = [
    {
      type: "Active orders",
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
      type: "Shipped",
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
      type: "Canceled",
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
      type: "Active orders",
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
      type: "Active orders",
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
      type: "Processing",
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
      unpaidAmmount: "400",
    },
  ];

  useEffect(() => {
    let ordersSelected = [];
    orders?.map((it) => {
      if (it.type === navState) {
        ordersSelected = [...ordersSelected, it];
      }
    });
    console.log(ordersSelected);
    setselectedOrders(ordersSelected);
  }, [navState]);

  return (
    <section className="min-h-[calc(100vh-65px)] w-full select-none">
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
              unpaidAmmount={it.unpaidAmmount}
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
      <ul className="flex w-full items-center gap-6 border-b border-[#eeeeee] pt-9">
        {items?.map((it, index) => {
          return (
            <li
              key={index}
              onClick={() => setnavState(items[index])}
              className={`relative pb-3.5 text-[16px] font-[500]  ${navState === items[index] ? "text-black" : "text-pmGray"} cursor-pointer`}
            >
              {it}
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
  unpaidAmmount,
}) => {
  const [instuctionDialog, setinstuctionDialog] = useState(false);
  const [cartDialog, setcartDialog] = useState(false);

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
      <div className="flex-center w-full justify-between pb-1">
        <p className="text-[16px] font-[500]">
          Order ID.<span className="text-pmGray"> {orderid}</span>
        </p>
        {active && (
          <span className="rounded-[10px] bg-[#1CAD221A] px-3 py-2 text-[16px] font-[600] text-[#19950E]">
            Active
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-1">
          <div className="relative h-[180px] w-[180px] overflow-hidden rounded-[17px] bg-[#EEEEEE]">
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
                onClick={() => setcartDialog(!cartDialog)}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                View Colors
              </button>
              <button
                onClick={() => setcartDialog(!cartDialog)}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                View Colors
              </button>
              <button
                onClick={() => setcartDialog(!cartDialog)}
                className="h-[38px] w-[8.2rem] rounded-lg border border-borderP bg-[#F9F9F9] py-[0.35rem] text-[14px] font-[500] "
              >
                View Colors
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
                Total ${unpaidAmmount}/
                <span className="text-pmRed">unpaid</span>
              </span>
            </div>
            <BtnAccount Submit={() => {}} name={"Pay now"} />
          </div>
        </div>
      )}
    </motion.div>
  );
};
