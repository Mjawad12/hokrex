"use client";
import Image from "next/image";
import React, { useRef } from "react";

function page() {
  return (
    <div className="w-full bg-[#111827] min-h-screen flex flex-col px-2 py-10">
      <ProductFrom />
    </div>
  );
}

const ProductFrom = () => {
  const imgRef = useRef(null);
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
  return (
    <div className="py-8 px-4 mx-auto lg:py-16 w-full">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new product
      </h2>
      <form action="#">
        <div className="grid gap-4 grid-cols-2 ">
          <div className="col-span-2">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required={true}
              maxLength={30}
            />
          </div>
          <div className="w-full">
            <label
              for="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Heading
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product Heading"
              required={true}
              maxLength={70}
            />
          </div>
          <div className="w-full">
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              required={true}
            />
          </div>
          <div>
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="8"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
            ></textarea>
          </div>
          <div className="col-span-2">
            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                  required="true"
                  accept=".jpg , .jpeg"
                  onInput={(e) => {
                    if (e.target.files[0]) {
                      const url = URL.createObjectURL(e.target.files[0]);
                      imgRef.current.src = url;
                      imgRef.current.classList.remove("hidden");
                      e.target.parentElement.classList.add("hidden");
                    }
                  }}
                />
              </label>
              <Image
                ref={imgRef}
                src=""
                className="hidden w-max"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4  text-sm font-medium text-center text-white bg-[#1F2937] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default page;
