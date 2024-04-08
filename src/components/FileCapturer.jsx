"use client";
import React, { useRef } from "react";
import Image from "next/image";

function FileCapturer() {
  const file = useRef(null);
  return (
    <div
      id="border_dashed"
      className="w-full flex-center flex-col gap-0 pb-7 pt-5"
      onClick={() => file.current.click()}
    >
      <Image src={"/cloudUpload.gif"} height={58} width={58} alt="upload" />
      <span className="text-[1.3rem] font-[600]">Drag & Drop File here or</span>
      <div>
        <input ref={file} type="file" accept="image/*" className="hidden" />
        <button className="px-6 py-2 font-[600] text-[0.8rem] border border-borderP rounded-[0.6rem] mt-3">
          Choose File
        </button>
      </div>
    </div>
  );
}

export default FileCapturer;
