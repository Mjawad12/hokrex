"use client";
import { cross } from "@/Consonats";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

function page() {
  const orders = [
    {
      status: "Delivered",
      active: true,
      trackingID: "TRACK123456",
      orderID: "ORDER001",
      deliveryCharges: 10.0,
      unpaidAmount: 0.0,
      deliveryDate: "2024-07-01",
      orderFiles: ["invoice.pdf", "receipt.png"],
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "555-1234",
      county: "Orange",
      firstName: "John",
      fullName: "John Doe",
      Address: "123 Main St, Anytown, USA",
      payType: "Credit Card",
      product: {
        id: "79498b32-7374-44e5-bea1-daf8dfbc268f",
        name: "Hood",
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        sizes: [
          {
            type: "XS",
            val: 0,
          },
          {
            type: "SM",
            val: 0,
          },
          {
            type: "MD",
            val: 0,
          },
          {
            type: "2XL",
            val: 0,
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "LG",
            val: "5",
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        price: "145.00",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        quant: 5,
        date: null,
        instruction: "",
        slug: "hood",
        files: [],
        material: "Lather",
      },
      method: {
        type: "Credit Card",
        name: "John Doe",
        cvc: "123",
        cardNumber: 4111111111111111,
        expiryDate: "12/24",
        def: true,
        bankName: "Bank of America",
      },
    },
    {
      status: "Active orders",
      active: false,
      trackingID: "TRACK654321",
      orderID: "ORDER002",
      deliveryCharges: 0.0,
      unpaidAmount: 50.0,
      deliveryDate: "2024-07-02",
      orderFiles: ["purchase_order.pdf"],
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-5678",
      county: "Los Angeles",
      firstName: "Jane",
      fullName: "Jane Smith",
      Address: "456 Elm St, Othertown, USA",
      payType: "Debit Card",
      product: {
        id: "79498b32-7374-44e5-bea1-daf8dfbc268f",
        name: "Hood",
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        sizes: [
          {
            type: "XS",
            val: 0,
          },
          {
            type: "SM",
            val: 0,
          },
          {
            type: "MD",
            val: 0,
          },
          {
            type: "2XL",
            val: 0,
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "LG",
            val: "5",
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        price: "145.00",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        quant: 5,
        date: null,
        instruction: "",
        slug: "hood",
        files: [],
        material: "Lather",
      },
      method: {
        type: "Debit Card",
        name: "Jane Smith",
        cvc: "456",
        cardNumber: 5500000000000004,
        expiryDate: "11/23",
        def: false,
        bankName: "Chase",
      },
    },
    {
      status: "Canceled",
      active: true,
      trackingID: "TRACK789012",
      orderID: "ORDER003",
      deliveryCharges: 5.0,
      unpaidAmount: 0.0,
      deliveryDate: "2024-07-03",
      orderFiles: ["order_confirmation.pdf"],
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "555-9101",
      county: "San Diego",
      firstName: "Bob",
      fullName: "Bob Johnson",
      Address: "789 Oak St, Sometown, USA",
      payType: "PayPal",
      product: {
        id: "79498b32-7374-44e5-bea1-daf8dfbc268f",
        name: "Hood",
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        sizes: [
          {
            type: "XS",
            val: 0,
          },
          {
            type: "SM",
            val: 0,
          },
          {
            type: "MD",
            val: 0,
          },
          {
            type: "2XL",
            val: 0,
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "LG",
            val: "5",
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        price: "145.00",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        quant: 5,
        date: null,
        instruction: "",
        slug: "hood",
        files: [],
        material: "Lather",
      },
      method: {
        type: "PayPal",
        name: "Bob Johnson",
        cvc: "",
        cardNumber: 0,
        expiryDate: "",
        def: true,
        bankName: "",
      },
    },
    {
      status: "Processing",
      active: true,
      trackingID: "TRACK789012",
      orderID: "ORDER003",
      deliveryCharges: 5.0,
      unpaidAmount: 0.0,
      deliveryDate: "2024-07-03",
      orderFiles: ["order_confirmation.pdf"],
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "555-9101",
      county: "San Diego",
      firstName: "Bob",
      fullName: "Bob Johnson",
      Address: "789 Oak St, Sometown, USA",
      payType: "PayPal",
      product: {
        id: "79498b32-7374-44e5-bea1-daf8dfbc268f",
        name: "Hood",
        colors: [
          "rgb(248, 231, 28)",
          "rgb(65, 117, 5)",
          "rgb(95, 95, 95)",
          "rgb(144, 19, 254)",
          "rgb(131, 114, 146)",
        ],
        sizes: [
          {
            type: "XS",
            val: 0,
          },
          {
            type: "SM",
            val: 0,
          },
          {
            type: "MD",
            val: 0,
          },
          {
            type: "2XL",
            val: 0,
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "LG",
            val: "5",
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        price: "145.00",
        src: "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
        quant: 5,
        date: null,
        instruction: "",
        slug: "hood",
        files: [],
        material: "Lather",
      },
      method: {
        type: "PayPal",
        name: "Bob Johnson",
        cvc: "",
        cardNumber: 0,
        expiryDate: "",
        def: true,
        bankName: "",
      },
    },
  ];

  return (
    <div className="min-h-screen w-full bg-hoverC px-5">
      <div className="mx-auto w-full pb-10">
        <div className="flex-center mt-5 w-full justify-between rounded-xl bg-Pn-dark-600 px-5 py-3">
          <h1 className="text-4xl font-[700] text-white">Orders</h1>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <div className="flex cursor-pointer items-center justify-between border-b border-[#E5E5E5] py-3 hover:border-black">
            <div className="flex flex-1 flex-grow-[0.2]  gap-3">
              <p className="flex-center text-[12px] font-[500]">NO.</p>
              <p className="text-[16px] font-[500] ">Order Id</p>
            </div>
            <p className="flex-1 flex-grow-[0.2] text-[16px] font-[500]">
              Name
            </p>
            <div className="flex flex-1 flex-grow-[0.5] justify-between">
              <span
                className={`flex-1 flex-grow-[0.2] rounded-[5px] border p-0.5 text-center text-[12px]`}
              >
                Status
              </span>
              <span className="flex-1  flex-grow-[0.2] text-[15px] font-[500] text-pmGray">
                Total
              </span>
              <span className="flex-1 flex-grow-[0.2] text-[15px]  font-[500] text-pmGray ">
                Date
              </span>
            </div>
          </div>
          {orders.map((it, index) => (
            <OrderCard order={it} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const OrderCard = ({ order, index }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <AnimatePresence>
        {show && <OrderDialog setshow={setshow} order={order} />}
      </AnimatePresence>
      <div
        onClick={() => setshow(true)}
        className="flex cursor-pointer items-center justify-between border-b border-[#E5E5E5] py-3 hover:border-black"
      >
        <div className="flex flex-1 flex-grow-[0.2] gap-5">
          <span className="text-[14px] font-[700]">{index + 1}.</span>
          <p className="text-[16px] font-[500] ">{order.orderID}</p>
        </div>
        <p className="flex-1 flex-grow-[0.2] text-[16px] font-[500]">
          {order.fullName}
        </p>
        <div className="flex flex-1 flex-grow-[0.5] justify-between">
          <span
            className={`flex-1 flex-grow-[0.2] rounded-[5px] border p-0.5 text-center text-[12px] ${order.status === "Canceled" ? "border-pmRed bg-[#ab1c1c49] text-pmRed" : ""}
           ${order.status === "Delivered" || order.status === "Active orders" || order.status === "Shipped" ? "border-[#74AF3D] bg-[#17ff3a] text-[#396014]" : ""}
           ${order.status === "Processing" ? "border-[#B298F1] bg-[#B298F1] text-[#5b37af]" : ""}
           `}
          >
            {order.status}
          </span>
          <span className="flex-1  flex-grow-[0.2] text-[15px] font-[500] text-pmGray">
            $
            {(
              +order.product.price +
              order.unpaidAmount +
              order.deliveryCharges
            ).toFixed(1)}
          </span>
          <span className="flex-1 flex-grow-[0.2] text-[15px]  font-[500] text-pmGray ">
            {order.deliveryDate}
          </span>
        </div>
      </div>
    </>
  );
};

export default page;

const OrderDialog = ({ setshow, order }) => {
  const status = useRef(null);
  const trackingid = useRef(null);
  const deliveryCharges = useRef(null);

  const Submit = () => {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-center fixed inset-0 left-0 top-0 bg-[#00000066]"
    >
      <motion.div
        initial={{ y: 20 }}
        exit={{ y: 20 }}
        animate={{ y: 0 }}
        className="relative flex min-h-[500px] w-full max-w-[900px] flex-col rounded-[10px] border bg-white px-5 py-3"
      >
        <span
          onClick={() => setshow(false)}
          className="absolute right-2 top-2 cursor-pointer [&_rect]:stroke-none [&_svg]:h-[25px] [&_svg]:w-[25px]"
        >
          {cross}
        </span>
        <div className="flex gap-2">
          <span className="absolute left-2 top-2 text-[14px] font-[600]">
            Order Id {order.orderID}
          </span>
          <Image
            src={order.product.src}
            width={500}
            height={500}
            alt="Product"
            className="h-auto w-[300px]"
          />
          <div className="flex flex-col justify-center gap-3 border-l border-[#E5E5E5] px-4 py-5">
            <div className="flex w-full items-center gap-5">
              <p className="text-[16px] font-[400] text-black">
                Name :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  {order.firstName}
                </span>
              </p>
              <p className="text-[16px] font-[400] text-black">
                Full Name :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  {order.fullName}
                </span>
              </p>
            </div>
            <div className="flex w-full items-center gap-5">
              <p className="text-[16px] font-[400] text-black">
                Phone :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  {order.phone}
                </span>
              </p>
              <p className="text-[16px] font-[400] text-black">
                Address :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  {order.Address}
                </span>
              </p>
            </div>
            <div className="flex w-full items-center gap-5">
              <p className="text-[16px] font-[400] text-black">
                Delivery Date :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  {order.deliveryDate}
                </span>
              </p>
              <p className="text-[16px] font-[400] text-black">
                Pay type :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  {order.payType}
                </span>
              </p>
            </div>
            <div className="flex w-full items-center gap-5">
              <p className="text-[16px] font-[400] text-black">
                Unpaid Amount :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  ${order.unpaidAmount}
                </span>
              </p>
              <p className="text-[16px] font-[400] text-black">
                Delivery Charges :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  ${order.deliveryCharges}
                </span>
              </p>
              <p className="text-[16px] font-[400] text-black">
                Price :{" "}
                <span className="text-[16px] font-[600] text-pmGray">
                  ${order.product.price}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-[#E5E5E5] py-2">
          <div className="flex flex-col pt-2">
            <p className="text-[17px] font-[500] text-black">
              Payment Details :
            </p>
            <div className="flex flex-wrap gap-5 gap-y-1 ">
              <p className="text-[15px] font-[500] text-black">
                Name :{" "}
                <span className="text-[14px] font-[600] text-pmGray">
                  {order.method.name}
                </span>
              </p>
              <p className="text-[15px] font-[500] text-black">
                CVC :{" "}
                <span className="text-[14px] font-[600] text-pmGray">
                  {order.method.cvc}
                </span>
              </p>
              <p className="text-[15px] font-[500] text-black">
                Card Number :{" "}
                <span className="text-[14px] font-[600] text-pmGray">
                  {order.method.cardNumber}
                </span>
              </p>
              <p className="text-[15px] font-[500] text-black">
                Expiry Date:{" "}
                <span className="text-[14px] font-[600] text-pmGray">
                  {order.method.expiryDate}
                </span>
              </p>
              <p className="text-[15px] font-[500] text-black">
                Bank Name :{" "}
                <span className="text-[14px] font-[600] text-pmGray">
                  {order.method.bankName}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 ">
            <div className="flex-center w-max gap-1">
              <p>Status : </p>
              <select
                ref={status}
                id="category"
                className="rounded-[5px] border border-pmGray px-2 py-1 outline-none hover:shadow-xl"
                defaultValue={order.status}
              >
                <option value="Active orders">Active orders</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
            <div className="flex-center w-max gap-1">
              <p>Tracking ID : </p>
              <input
                ref={trackingid}
                type="text"
                defaultValue={order.trackingID}
                className="rounded-[5px] border border-pmGray px-2 py-0.5 outline-none"
              />
            </div>
            <div className="flex-center w-max gap-1">
              <p>Delivery Charges : </p>
              <input
                ref={deliveryCharges}
                type="text"
                defaultValue={order.deliveryCharges}
                className="w-[100px] rounded-[5px] border border-pmGray px-2 py-0.5 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex w-full justify-end gap-2">
          <button
            onClick={() => setshow(false)}
            className={`w-max rounded-[10px] border border-black bg-white px-6 py-2.5 text-black disabled:bg-gray-300`}
          >
            Cancel
          </button>
          <button
            onClick={Submit}
            className={`w-max rounded-[10px] bg-black px-8 py-2.5 text-white disabled:bg-gray-300`}
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
