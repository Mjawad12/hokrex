"use client";
import { customizeIcon } from "@/Consonats";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function ProductImageShower({ parsedData }) {
  const MainImageRef = useRef(null);
  return (
    <div className="sticky top-0 flex  h-[520px] flex-1 flex-grow-[0.5] items-start py-20 ">
      <div className="flex flex-col gap-5">
        {parsedData.product.sideImages?.map((it, index) => (
          <div className="border border-borderP">
            <Image
              key={index}
              width={70}
              height={70}
              alt={`Side image - ${index + 1}`}
              src={it}
              onMouseEnter={() => {
                MainImageRef.current.style.opacity = 0;
                document.querySelector(`#sd-img-${index}`).style.opacity = 1;
              }}
              onMouseLeave={() => {
                MainImageRef.current.style.opacity = 1;
                document.querySelector(`#sd-img-${index}`).style.opacity = 0;
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-start ">
        <div className="flex-center relative">
          <Image
            src={parsedData.product?.productImg}
            alt="Product"
            width={500}
            height={500}
            ref={MainImageRef}
            className="transition-all duration-[0.5s]"
            priority={true}
          />
          <div className="flex-center ">
            {parsedData.product.sideImages?.map((it, index) => (
              <Image
                key={index}
                width={500}
                height={500}
                alt={`Side image - ${index + 1}`}
                src={it}
                className="absolute inset-0 opacity-0 transition-all duration-[0.5s]"
                id={`sd-img-${index}`}
                priority={false}
              />
            ))}
          </div>
        </div>
        <Link
          href={"/customize/1"}
          className={`flex-center cust-btn mt-6 w-[22rem] rounded-[0.75rem] py-[0.9px] hover:shadow-lg`}
        >
          <button className="flex-center flex w-[21.9rem] gap-2 rounded-[0.7rem] bg-white py-2 text-[18px] font-[500] ">
            {customizeIcon} Customize
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductImageShower;
