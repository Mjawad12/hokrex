"use client";
import { cross, plus, trash } from "@/Consonats";
import { ContextAdmin } from "@/components/Mainstate(Admin)/MainstateAdmin";
import notificationCaller from "@/components/NotificationCaller";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function page() {
  const {
    categories,
    getCategories,
    addCategory,
    setcategories,
    deleCategory,
  } = useContext(ContextAdmin);
  const [showDialog, setshowDialog] = useState(false);
  useEffect(() => {
    categories.length < 1 && getCategories();
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-hoverC px-5">
        <ToastContainer />
        <div className="mx-auto w-full pb-10">
          <div className="flex-center mt-5 w-full justify-between rounded-xl bg-Pn-dark-600 px-5 py-3">
            <h1 className="text-4xl font-[700] text-white">Categories</h1>
            <span
              onClick={() => setshowDialog(true)}
              className="cursor-pointer rounded-full border p-3 *:stroke-white [&_svg]:h-[25px] [&_svg]:w-[25px] "
            >
              {plus}
            </span>
          </div>
          <div className="flex w-full flex-col gap-4 py-8">
            {categories.map((it, index) => (
              <CategoryCard
                key={index}
                name={it.name}
                items={it.items}
                link={it.link}
                index={index}
                deleCategory={deleCategory}
                id={it._id}
                setcategories={setcategories}
              />
            ))}
          </div>
        </div>
      </div>
      {showDialog && (
        <Adder
          addCategory={addCategory}
          setshowDialog={setshowDialog}
          setcategories={setcategories}
        />
      )}
    </>
  );
}

export default page;

const CategoryCard = ({
  index,
  name,
  items,
  link,
  id,
  setcategories,
  deleCategory,
}) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[20px] border border-[#E5E5E5] px-4 py-3">
      <div className="flex flex-1 flex-grow-[0.3] gap-2">
        <span className="text-[16px] font-[700]">{index + 1}.</span>
        <p className="text-[18px] font-[500] ">{name}</p>
      </div>
      <span className="flex-1 flex-grow-[0.3] text-[16px] font-[500] text-pmGray ">
        Total Items : {items}
      </span>
      <span className="flex-1 flex-grow-[0.3] text-[16px] font-[500] text-pmGray ">
        link : {link}
      </span>
      <span
        onClick={async () => {
          const res = await deleCategory(id);
          notificationCaller(
            res.success,
            res.msg || "Some error occured!",
            toast,
          );
          setcategories((e) => {
            let temp = e;
            e.forEach((it, index) => {
              if (it._id === id) {
                temp.splice(index, 1);
              }
            });
            return [...temp];
          });
        }}
        className="cursor-pointer rounded-[10px] border bg-Pn-dark-600 p-3 hover:border-Pn-dark-600 [&_path]:stroke-white"
      >
        {trash}
      </span>
    </div>
  );
};

const Adder = ({ addCategory, setcategories, setshowDialog }) => {
  const formRef = useRef(null);
  const [loading, setloading] = useState(false);
  const name = useRef(null);
  const submit = async (e) => {
    setloading(true);
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      const res = await addCategory(name.current.value);
      await notificationCaller(
        res.success,
        res.msg || "Some error Occured!",
        toast,
      );
      res.success &&
        setcategories((e) => [
          ...e,
          {
            name: name.current.value,
            items: 0,
            link: "Please Reload to view!",
          },
        ]);
      setshowDialog(!res.success);
    }
    setloading(false);
  };

  return (
    <div className="flex-center fixed  inset-0 top-0 bg-[#00000066]">
      <form
        ref={formRef}
        style={{ boxShadow: "8px 8px 25px 0px #00000040" }}
        className="relative flex w-full max-w-[500px] flex-col gap-3 rounded-[10px] border border-[#E5E5E5] bg-white px-4 py-8 pb-4"
      >
        <span
          onClick={() => setshowDialog(false)}
          className="absolute right-5 top-5 cursor-pointer [&_rect]:stroke-none [&_svg]:h-[25px] [&_svg]:w-[25px]"
        >
          {cross}
        </span>
        <p className="text-[18px] font-[700]">Enter Category Name</p>
        <input
          type="text"
          placeholder="Enter category"
          className="checkoutInput mt-2 w-full"
          required
          maxLength={30}
          ref={name}
        />
        <button
          disabled={loading}
          onClick={submit}
          className="btn mt-2 w-full max-w-full bg-Pn-dark-600 disabled:cursor-not-allowed disabled:bg-Pn-light-300 "
        >
          Add
        </button>
      </form>
    </div>
  );
};
