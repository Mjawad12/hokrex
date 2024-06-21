import React from "react";

function LoadingCard({ smGrid, footer, border }) {
  return (
    <div
      className={`relative ${smGrid ? "min-h-[415px] larger:min-h-[350px] large:min-h-[300px] med:min-h-[200px] " : footer ? "min-h-[412px]" : "min-h-[550px] larger:min-h-[400px] large:min-h-[400px] med:min-h-[350px]  small:min-h-[300px]"} w-full
      border-b ${border ? (smGrid ? "border-r" : footer ? "border-r" : "border-x") : ""} animate-pulse border-[#E5E5E5] p-2 transition-all 
      duration-700 [&_#prod]:hover:bg-[#F5F5F5] [&_#prod_#btns-prod]:hover:opacity-[1] [&_#prod_img]:hover:scale-[0.79]`}
    >
      <div
        id="prod"
        className={`flex-center relative ${smGrid ? "min-h-[415px] larger:min-h-[350px] large:min-h-[300px] med:min-h-[200px] " : footer ? "min-h-[394px]" : "min-h-[550px] larger:min-h-[400px] large:min-h-[400px] med:min-h-[350px]  small:min-h-[300px]"} w-full flex-col gap-3 transition-all duration-700`}
      >
        <div className="relative z-10 flex items-center justify-between w-full px-4">
          <div class="h-5 w-24 rounded bg-gray-300"></div>
          <div class="h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div
          className={`flex-center  w-full flex-1 flex-grow-[0.9] overflow-hidden bg-gray-300 `}
        >
          <svg
            class="h-12 w-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            aria-hidden="true"
            fill="currentColor"
            aria-label="Loading Icon"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div class="mt-3 h-4 w-32 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export default LoadingCard;
