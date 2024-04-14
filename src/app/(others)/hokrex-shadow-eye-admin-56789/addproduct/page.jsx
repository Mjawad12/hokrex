"use client";
import { Context } from "@/components/Mainstate(Admin)/MainstateAdmin";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";

function page() {
  return (
    <div className="w-full bg-adminBlueLight min-h-screen flex flex-col px-2 py-10">
      <ProductFrom />
    </div>
  );
}

const ProductFrom = () => {
  const { addProductApi } = useContext(Context);
  const form = useRef(null);
  const imgRef = useRef(null);
  const name = useRef(null);
  const heading = useRef(null);
  const price = useRef(null);
  const category = useRef(null);
  const description = useRef(null);
  const [currentfile, setcurrentfile] = useState(null);
  const [error, seterror] = useState(null);
  const [added, setadded] = useState(false);

  const liItems = [
    "Brand Appeal",
    "Work wear",
    "Home & living",
    "Personal",
    "Team & Sports",
    "Pormotion items",
    "Gift items",
    "Print on demand",
  ];
  const Upload = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "hokrex");
    form.append("cloud_name", "dsqtzewyx");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dsqtzewyx/image/upload",
      {
        method: "POST",
        body: form,
      }
    );
    const parsedData = await data.json();
    return parsedData.url;
  };

  const addProductFunc = async (e) => {
    if (form.current.checkValidity()) {
      form.current.lastChild.disabled = true;
      e.preventDefault();
      const url = await Upload(currentfile);
      await addProductApi(
        name.current.value,
        category.current.value,
        description.current.value,
        heading.current.value,
        url,
        price.current.value
      ).catch((err) => seterror("An error occured"));
      setadded(true);
      form.current.lastChild.disabled = false;
    }
  };

  return added ? (
    <div className="w-full flex-center min-h-screen">
      <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 max-w-[25rem] w-full">
        <button
          type="button"
          className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setadded(false)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="w-12 h-12 rounded-full bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Success</span>
        </div>
        <p className="mb-4 text-lg font-semibold text-white">
          Successfully added the product.
        </p>
        <button
          onClick={() => setadded(false)}
          type="button"
          className="inline-flex items-center px-5 py-2.5 mt-4  text-sm font-medium text-center text-white bg-[#111827] disabled:bg-gray-500 disabled:cursor-not-allowed rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Continue
        </button>
      </div>
    </div>
  ) : (
    <div className="py-8 px-4 mx-auto lg:py-16 w-full">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new product
      </h2>
      <form ref={form} action="#" onSubmit={addProductFunc}>
        <div className="grid gap-4 grid-cols-2 ">
          <div className="">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              ref={name}
              id="name"
              className="outline-none bg-adminBlueDark border text-white text-sm rounded-[0.8rem] block w-full px-3 py-3 border-gray-600"
              placeholder="Type product name"
              required={true}
              maxLength={30}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="heading"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Heading
            </label>
            <input
              type="text"
              name="heading"
              id="heading"
              ref={heading}
              className="outline-none bg-adminBlueDark border text-white text-sm rounded-[0.8rem] block w-full px-3 py-3 border-gray-600"
              placeholder="Product Heading"
              required={true}
              maxLength={70}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              ref={price}
              id="price"
              className="outline-none bg-adminBlueDark border text-white text-sm rounded-[0.8rem] block w-full px-3 py-3 border-gray-600"
              placeholder="$2999"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              ref={category}
              id="category"
              className="outline-none bg-adminBlueDark border text-white text-sm rounded-[0.8rem] block w-full px-3 py-3 border-gray-600"
              required={true}
            >
              {liItems.map((it, index) => (
                <option key={index} value={it}>
                  {it}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="8"
              ref={description}
              className="outline-none bg-adminBlueDark border text-white text-sm rounded-[0.8rem] block w-full px-3 py-3 border-gray-600"
              placeholder="Your description here"
            ></textarea>
          </div>
          <div className="col-span-2">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-adminBlueDark "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400">
                    JPG{" "}
                    <span className="text-pmRed">
                      (MUST BE : 403px X 362px)
                    </span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  required={true}
                  accept=".jpg , .jpeg"
                  onInput={(e) => {
                    if (e.target.files[0]) {
                      setcurrentfile(e.target.files[0]);
                      const url = URL.createObjectURL(e.target.files[0]);
                      imgRef.current.src = url;
                      imgRef.current.srcset = url;
                      imgRef.current.classList.remove("hidden");
                      e.target.parentElement.classList.add("hidden");
                    }
                  }}
                />
              </label>
              <Image
                ref={imgRef}
                src="/Testimg.jpg"
                className="hidden w-max"
                width="50"
                height="50"
                alt="upload"
              />
            </div>
          </div>
        </div>
        {error && <p className="text-pmRed text-[15px]">{error}</p>}
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4  text-sm font-medium text-center text-white bg-adminBlueDark disabled:bg-gray-500 disabled:cursor-not-allowed rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default page;
