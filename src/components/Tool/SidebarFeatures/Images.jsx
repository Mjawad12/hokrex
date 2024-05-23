import { images, searchIcon, uploadsvg } from "@/Consonats";
import unsplash from "@/components/UnsplahSetup/Unsplash";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Images({ addImageLayer }) {
  const fileinput = useRef(null);

  return (
    <div
      style={{ direction: "rtl" }}
      id="smSCroll"
      className="overflow-y-scroll"
    >
      <div
        style={{ direction: "ltr" }}
        className="flex flex-col gap-3 p-3 px-3.5 pl-1.5"
      >
        <h1 className="text-[18px] text-[500] text-textLight ">Images</h1>
        <input
          ref={fileinput}
          type="file"
          accept="image/png, image/webp, image/jpeg, image/jpeg"
          className="hidden"
          onInput={(e) => {
            if (e.target.files[0]) {
              const url = URL.createObjectURL(e.target.files[0]);
              addImageLayer(url);
            }
          }}
        />
        <button
          onClick={() => {
            fileinput.current.click();
          }}
          className="flex-center relative rounded-[0.2rem] bg-white px-3 py-3 text-[14px] font-[700]"
        >
          <span className="absolute bottom-[0.85rem] left-[0.8rem]">
            {uploadsvg}
          </span>
          Upload Image
        </button>
        <div className="flex-center w-full rounded-md border border-darkLight bg-canvasColor px-3 py-[0.7rem]  [&_svg]:w-[18px] [&_svg]:stroke-textDark ">
          <input
            type="text"
            className="w-full bg-transparent text-[14px] text-textDark outline-none "
            placeholder="Search Images"
          />
          {searchIcon}
        </div>
        <div className="flex gap-2.5">
          <div className="flex flex-1 flex-grow-[0.5] flex-col gap-2 ">
            {images.slice(0, images.length / 2).map((it, index) => (
              <div
                key={index}
                onClick={() => {
                  addImageLayer(
                    document.querySelector(`#img-can-${index}`).src,
                  );
                }}
                className="flex-center cursor-pointer overflow-hidden rounded-md"
              >
                <Image
                  src={it.urls.small}
                  alt={it.alt_description}
                  width={500}
                  height={500}
                  id={`img-can-${index}`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-grow-[0.5] flex-col gap-2 ">
            {images.slice(images.length / 2).map((it, index) => (
              <div
                key={index}
                onClick={() => {
                  addImageLayer(
                    document.querySelector(`#img-can2-${index}`).src,
                  );
                }}
                className="flex-center cursor-pointer overflow-hidden rounded-md"
              >
                <Image
                  src={it.urls.small}
                  alt={it.alt_description}
                  width={500}
                  height={500}
                  id={`img-can2-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
