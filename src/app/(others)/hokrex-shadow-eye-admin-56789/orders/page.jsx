"use client";
import { cross } from "@/Consonats";
import BasicDateCalendar from "@/components/Calender";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextAdmin } from "@/components/Mainstate(Admin)/MainstateAdmin";
import notificationCaller from "@/components/NotificationCaller";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function page() {
  const { getOrders, EditOrder, orders, setorders } = useContext(ContextAdmin);

  useEffect(() => {
    orders.length < 1 && orderCall();
  }, []);

  const orderCall = async () => {
    const res = await getOrders();
    res.success && setorders(res.orders);
  };

  return (
    <div className="min-h-screen w-full bg-hoverC px-5">
      <ToastContainer />
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
          {orders?.map((it, index) => (
            <OrderCard
              order={it}
              index={index}
              key={index}
              EditOrder={EditOrder}
              setorders={setorders}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const OrderCard = ({ order, index, EditOrder, setorders }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <AnimatePresence>
        {show && (
          <OrderDialog
            setshow={setshow}
            order={order}
            EditOrder={EditOrder}
            setorders={setorders}
          />
        )}
      </AnimatePresence>
      <div
        onClick={() => setshow(true)}
        className="flex cursor-pointer items-center justify-between border-b border-[#E5E5E5] py-3 hover:border-black"
      >
        <div className="flex flex-1 flex-grow-[0.2] items-center gap-5">
          <span className="text-[14px] font-[700]">{index + 1}.</span>
          <div className="flex items-center gap-1">
            <Image
              src={order.product.productImg}
              width={100}
              height={100}
              alt="Product"
              className="h-auto w-[100px] rounded-full"
            />
            <p className="text-[16px] font-[500] ">
              {order.orderID.slice(0, 10)}..
            </p>
          </div>
        </div>
        <p className="flex-1 flex-grow-[0.2] text-[16px] font-[500]">
          {order.fullName}
        </p>
        <div className="flex flex-1 flex-grow-[0.5] justify-between">
          <span
            className={`flex-1 flex-grow-[0.2] rounded-[5px] border p-0.5 text-center text-[12px] ${order.status === "Canceled" ? "border-pmRed bg-[#ab1c1c49] text-pmRed" : ""}
           ${order.status === "Delivered" || order.status === "Active Orders" || order.status === "Shipped" ? "border-[#74AF3D] bg-[#49AF41] text-[#a6f45e]" : ""}
           ${order.status === "Processing" ? "border-[#B298F1] bg-[#B298F1] text-[#5b37af]" : ""}
           `}
          >
            {order.status}
          </span>
          <span className="flex-1  flex-grow-[0.2] text-[15px] font-[500] text-pmGray">
            $
            {parseInt(
              order.product.productPrice +
                order.unpaidAmount +
                (order.deliveryCharges || 0),
            ).toFixed(1)}
          </span>
          <span className="flex-1 flex-grow-[0.2] text-[15px]  font-[500] text-pmGray ">
            {order.orderDate}
          </span>
        </div>
      </div>
    </>
  );
};

export default page;

const OrderDialog = ({ setshow, order, EditOrder, setorders }) => {
  const status = useRef(null);
  const trackingid = useRef(null);
  const deliveryCharges = useRef(null);
  const [loading, setloading] = useState(false);
  const [active, setactive] = useState(false);
  const [deliveryDate, setdeliveryDate] = useState(false);
  const [showcalender, setshowcalender] = useState(false);

  const Submit = async () => {
    setloading(true);
    const res = await EditOrder(
      order.orderID,
      status.current.value,
      trackingid.current.value || "",
      deliveryCharges.current.value || 0,
      active,
      deliveryDate,
    );
    setorders((e) => {
      let temp_Order = e;
      temp_Order.forEach((it, index) => {
        if (it.orderID === order.orderID) {
          temp_Order[index].status = status.current.value;
          temp_Order[index].trackingID = trackingid.current.value || "";
          temp_Order[index].deliveryCharges =
            deliveryCharges.current.value || 0;
          temp_Order[index].active = active;
          temp_Order[index].deliveryDate = deliveryDate;
        }
      });
      return [...temp_Order];
    });
    notificationCaller(res.success, res.msg, toast);
    res.success && setshow(false);
    setloading(false);
  };

  useEffect(() => {
    setactive(order.active);
    setdeliveryDate(order.deliveryDate || null);
  }, [order]);

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
        id="scroll-none"
        className="relative flex h-[500px] w-full max-w-[900px] flex-col  overflow-y-scroll rounded-[10px] border bg-white px-5  py-3 pt-10 "
      >
        <span
          onClick={() => setshow(false)}
          className="absolute right-2 top-2 cursor-pointer [&_rect]:stroke-none [&_svg]:h-[25px] [&_svg]:w-[25px]"
        >
          {cross}
        </span>
        <div className="flex-center absolute right-10 top-2 w-max gap-1 ">
          <CustomCheckbox
            setOuter={setactive}
            text={"Active"}
            fontSize={"sm"}
            def={order.active}
          />
        </div>
        <div className="flex gap-2">
          <span className="absolute left-2 top-2 text-[14px] font-[600]">
            Order Id #{order.orderID}
          </span>
          <Image
            src={order.product.productImg}
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
            <div className="flex w-full flex-wrap items-center gap-5 gap-y-1">
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
                  ${order.product.productPrice}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 gap-y-1">
              {order?.productSizes?.map(
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
          <div className="flex flex-wrap gap-5 gap-y-2 ">
            <div className="flex-center w-max gap-1">
              <p>Status : </p>
              <select
                ref={status}
                id="category"
                className="rounded-[5px] border border-pmGray px-2 py-1 outline-none hover:shadow-xl"
                defaultValue={order.status}
              >
                <option value="Active Orders">Active Orders</option>
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
            <div className="flex-center w-max">
              <div onClick={() => setshowcalender(true)} className="relative ">
                <span>Delivery Date :</span>
                <span className="absolute bottom-[55px] left-[50%] translate-x-[-50%]">
                  {showcalender && (
                    <BasicDateCalendar
                      setshow={setshowcalender}
                      setselectedDate={setdeliveryDate}
                      showcalender={showcalender}
                    />
                  )}
                </span>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="checkoutInput !max-w-[12rem] px-4 pr-1 "
                  id="exp-num"
                  value={deliveryDate}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[16px] font-[700]">Files :</span>
            <div className="flex-center w-full flex-col">
              {order.orderFiles.map((it) => (
                <Image
                  src={it}
                  width={500}
                  height={500}
                  alt="orders"
                  className="h-auto w-[600px]"
                />
              ))}
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
            disabled={loading}
            className={`w-max rounded-[10px] bg-black px-8 py-2.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300`}
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
