"use client";
import { addicon } from "@/Consonats";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ContextAdmin } from "@/components/Mainstate(Admin)/MainstateAdmin";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import { SketchPicker } from "react-color";

function page() {
  return (
    <div className="min-h-screen w-full bg-hoverC px-5">
      <ProductFrom />
    </div>
  );
}

const ProductFrom = () => {
  const { addProductApi } = useContext(ContextAdmin);
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
  const [selectedsizes, setselectedsizes] = useState([]);

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
      },
    );
    const parsedData = await data.json();
    return parsedData.url;
  };

  const addProductFunc = async (e) => {
    if (form.current.checkValidity()) {
      if (selectedsizes.length < 1) {
        e.preventDefault();
        seterror("Please Select a size");
      } else {
        e.preventDefault();
        form.current.lastChild.disabled = true;
        seterror(null);
        const url = await Upload(currentfile);
        let colors = [];
        document.querySelectorAll("#clr-d-s").forEach((it) => {
          colors.push(it.style.backgroundColor);
        });
        await addProductApi(
          name.current.value,
          category.current.value,
          description.current.value,
          heading.current.value,
          url,
          price.current.value,
          colors,
          selectedsizes,
        ).catch((err) => seterror("An error occured"));
        setadded(true);
        form.current.lastChild.disabled = false;
      }
    }
  };

  const sizes = ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"];

  return added ? (
    <div className="flex-center min-h-screen w-full">
      <div className="sm:p-5 relative w-full max-w-[25rem] rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800">
        <button
          type="button"
          className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setadded(false)}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
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
        <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-green-900 p-2">
          <svg
            aria-hidden="true"
            className="h-8 w-8 text-green-400"
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
          className="focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 mt-4 inline-flex  items-center rounded-lg bg-[#111827] px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          Continue
        </button>
      </div>
    </div>
  ) : (
    <div className="mx-auto w-full pb-10">
      <div className="flex-center mt-5 w-full justify-between rounded-xl bg-Pn-dark-600 px-5 py-3">
        <h1 className="text-4xl font-[700] text-white">Add new Product</h1>
      </div>
      <form ref={form} action="#" onSubmit={addProductFunc}>
        <div className="mt-10 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-lg font-medium text-gray-900 "
            >
              Product Name
            </label>
            <input
              type="text"
              ref={name}
              id="name"
              className="checkoutInput hover:shadow-xl "
              placeholder="Type product name"
              required={true}
              maxLength={30}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="heading"
              className="mb-2 block text-lg font-medium text-gray-900 "
            >
              Heading
            </label>
            <input
              type="text"
              name="heading"
              id="heading"
              ref={heading}
              className="checkoutInput hover:shadow-xl "
              placeholder="Product Heading"
              required={true}
              maxLength={80}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="mb-2 block text-lg font-medium text-gray-900 "
            >
              Price
            </label>
            <input
              type="number"
              ref={price}
              id="price"
              className="checkoutInput hover:shadow-xl "
              placeholder="$2999"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-lg font-medium text-gray-900 "
            >
              Category
            </label>
            <select
              ref={category}
              id="category"
              className="checkoutInput hover:shadow-xl "
              required={true}
            >
              {liItems.map((it, index) => (
                <option key={index} value={it}>
                  {it}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col ">
            <p
              htmlFor="price"
              className="mb-2 text-lg font-medium text-gray-900 "
            >
              Sizes
            </p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((it, index) => (
                <div
                  key={index}
                  onClick={() => {
                    let currentSizes = selectedsizes;
                    if (selectedsizes.includes(it)) {
                      currentSizes = currentSizes.filter((ele) => ele != it);
                      console.log(currentSizes);
                    } else {
                      currentSizes.push(it);
                    }
                    setselectedsizes(currentSizes);
                  }}
                >
                  <CustomCheckbox text={it} admin={true} />
                </div>
              ))}
            </div>
          </div>
          <ColorsPalet />
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block text-lg font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              id="description"
              rows="8"
              ref={description}
              className="checkoutInput px-3 py-3 hover:shadow-xl"
              placeholder="Your description here"
            ></textarea>
          </div>
          <div className="col-span-2">
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="itlgs-center flex h-64 w-full cursor-pointer flex-col justify-center rounded-lg border-2 border-dashed border-gray-600 bg-Pn-default-500 hover:shadow-xl"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-white"
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
                  <p className="mb-2 text-sm text-white">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                  <p className="text-[14px] text-white">JPG , WEBP , PNG</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  required={true}
                  accept=".jpg , .jpeg , .webp , .png"
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
        {error && <p className="text-pmRed">{error}</p>}
        <button
          type="submit"
          className=" mt-5 rounded-md bg-Pn-default-500 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-Pn-light-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-Pn-light-300"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

const ColorsPalet = () => {
  const [currentColor, setcurrentColor] = useState("red");
  const [selectedColors, setselectedColors] = useState(["", "", "", ""]);
  const [sC, setsC] = useState(0);
  return (
    <div className="w-full">
      <p htmlFor="price" className="mb-2 text-lg font-medium text-gray-900 ">
        Colors
      </p>
      <div className="flex w-full gap-9">
        <SketchPicker
          color={currentColor}
          onChange={(e) => {
            setcurrentColor(e.hex);
            document.querySelectorAll("#clr-d-s")[sC].style.background = e.hex;
          }}
        />
        <div className="flex h-[4rem] w-full max-w-[17rem] flex-wrap items-start justify-start gap-4">
          {selectedColors.map((it, index) => (
            <span
              id="clr-d-s"
              onClick={() => setsC(index)}
              key={index}
              className={`h-7 w-7 cursor-pointer rounded-full border  border-black bg-transparent ${
                sC == index ? `scale-[1.2] border-4 !border-Pn-default-500` : ""
              } `}
            />
          ))}
          {selectedColors.length < 12 && (
            <span
              className="-translate-x-[0.2rem] -translate-y-[0.1rem] cursor-pointer rounded-full"
              onClick={() => {
                setselectedColors([...selectedColors, ""]);
              }}
            >
              {addicon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
