"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { cross } from "@/Consonats";

function FileCapturer({ setuploadedFiles, uploadedFiles }) {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles[0]) {
      let files = images;
      let uploaded = uploadedFiles;
      for (let i = 0; i < acceptedFiles.length && files.length < 10; i++) {
        console.log(acceptedFiles[i]);
        const url = URL.createObjectURL(acceptedFiles[i]);
        files = [...files, url];
        uploaded = [...uploaded, acceptedFiles[i]];
      }
      setimages([...files]);
      setuploadedFiles([...uploaded]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const file = useRef(null);
  const [images, setimages] = useState([]);

  return (
    <div className="flex select-none flex-col gap-5">
      {images?.length > 0 && (
        <UploadedShower
          images={images}
          setimages={setimages}
          setuploadedFiles={setuploadedFiles}
        />
      )}
      {images?.length < 10 && (
        <div
          {...getRootProps()}
          id="border_dashed"
          className="flex-center relative w-full flex-col gap-0 pb-7 pt-5"
        >
          <Image src={"/cloudUpload.gif"} height={58} width={58} alt="upload" />
          <span className="text-[1.3rem] font-[600]">
            {isDragActive ? "Now Drop" : "Drag & Drop File here or"}
          </span>
          <div>
            <input
              ref={file}
              type="file"
              accept="image/*"
              className="hidden"
              multiple
              {...getInputProps()}
            />
            <button className="mt-3 rounded-[0.6rem] border border-borderP px-6 py-2 text-[0.8rem] font-[600]">
              Choose File
            </button>
          </div>
          <span className="absolute bottom-2 right-3.5 text-[10px] text-pmGray ">
            {images.length} of 10
          </span>
        </div>
      )}
    </div>
  );
}

export default FileCapturer;

const UploadedShower = ({ images, setimages, setuploadedFiles }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 gap-y-3 rounded-[10px] border border-[#EEEEEE] p-2">
      {images.map((it, index) => (
        <div className="flex-center relative h-[180px] w-full max-w-[190px] rounded-[6px] bg-[#F4F1F2] p-1 small:h-[150px] small:max-w-[150px] ">
          <div className="flex-center h-[180px] w-full max-w-[190px] overflow-hidden small:h-[150px] small:max-w-[150px]">
            <Image
              src={it}
              alt="uploaded"
              key={index}
              width={1000}
              height={1000}
            />
          </div>
          <span
            onClick={() => {
              setimages((e) => {
                let files = e;
                files.splice(index, 1);
                return [...files];
              });
              setuploadedFiles((e) => {
                let files = e;
                files.splice(index, 1);
                return [...files];
              });
            }}
            className="flex-center absolute right-0.5 top-0.5 cursor-pointer [&_rect]:stroke-none [&_svg]:h-[30px] [&_svg]:w-[30px]"
          >
            {cross}
          </span>
        </div>
      ))}
    </div>
  );
};
