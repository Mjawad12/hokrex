import {
  arrowDown,
  flipX,
  flipY,
  order,
  plus,
  textPositions,
} from "@/Consonats";
import React, { useRef, useState } from "react";
import OrderAndMove, { EditInput, Positions, TextBtn } from "../OrderAndMove";

const GraphicsEdit = ({
  selectedGraphic,
  setselectedGraphic,
  updateGraphics,
}) => {
  const ordeAndMove = ["Forward", "Backward", "To Front", "To Back"];
  const movement = [
    {
      name: "Up",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
        >
          <path
            d="M2.38406 7.98069L5.63151 4.71421C5.85571 4.48947 6.15933 4.36328 6.47585 4.36328C6.79237 4.36328 7.09598 4.48947 7.32018 4.71421L10.6218 7.99157C10.7244 8.09281 10.7942 8.22282 10.8222 8.36462C10.8502 8.50642 10.8351 8.65342 10.7787 8.78642C10.724 8.92018 10.631 9.03455 10.5115 9.11501C10.392 9.19546 10.2514 9.23837 10.1076 9.23828L2.90365 9.23828C2.75848 9.23829 2.61659 9.19479 2.49609 9.11334C2.37559 9.03189 2.28195 8.91618 2.2271 8.78097C2.17029 8.64716 2.15488 8.49923 2.18288 8.35648C2.21088 8.21373 2.28099 8.08277 2.38406 7.98069Z"
            fill="#BDC7D1"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          top: selectedGraphic.top - 5,
        });
        updateGraphics(selectedGraphic.top - 5);
      },
    },
    {
      name: "Down",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
        >
          <path
            d="M10.6159 6.16189L7.36849 9.42837C7.14429 9.65311 6.84067 9.7793 6.52415 9.7793C6.20763 9.7793 5.90401 9.65311 5.67981 9.42837L2.37824 6.151C2.27563 6.04977 2.20575 5.91976 2.17775 5.77796C2.14975 5.63616 2.16492 5.48915 2.22128 5.35616C2.27601 5.2224 2.36904 5.10803 2.48854 5.02757C2.60804 4.94711 2.74862 4.90421 2.89242 4.9043L10.0963 4.9043C10.2415 4.90429 10.3834 4.94779 10.5039 5.02924C10.6244 5.11069 10.7181 5.2264 10.7729 5.36161C10.8297 5.49542 10.8451 5.64335 10.8171 5.7861C10.7891 5.92885 10.719 6.05981 10.6159 6.16189Z"
            fill="#BDC7D1"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          top: selectedGraphic.top + 5,
        });
        updateGraphics(selectedGraphic.top + 5);
      },
    },
    {
      name: "Left",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
        >
          <path
            d="M7.41037 11.1902L4.14389 7.94271C3.91916 7.71851 3.79297 7.41489 3.79297 7.09837C3.79297 6.78185 3.91916 6.47823 4.14389 6.25403L7.42126 2.95246C7.52249 2.84985 7.6525 2.77997 7.79431 2.75197C7.93611 2.72397 8.08311 2.73914 8.21611 2.7955C8.34986 2.85023 8.46424 2.94326 8.54469 3.06276C8.62515 3.18226 8.66806 3.32284 8.66797 3.46664L8.66797 10.6706C8.66797 10.8157 8.62448 10.9576 8.54303 11.0781C8.46158 11.1986 8.34587 11.2923 8.21066 11.3471C8.07685 11.4039 7.92892 11.4193 7.78617 11.3913C7.64342 11.3633 7.51246 11.2932 7.41037 11.1902Z"
            fill="#BDC7D1"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          left: selectedGraphic.left - 5,
        });
        updateGraphics(undefined, selectedGraphic.left - 5);
      },
    },
    {
      name: "Right",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
        >
          <path
            d="M5.58963 2.95242L8.85611 6.19987C9.08084 6.42407 9.20703 6.72769 9.20703 7.04421C9.20703 7.36073 9.08084 7.66434 8.85611 7.88854L5.57874 11.1901C5.47751 11.2927 5.3475 11.3626 5.20569 11.3906C5.06389 11.4186 4.91689 11.4034 4.78389 11.3471C4.65014 11.2923 4.53576 11.1993 4.45531 11.0798C4.37485 10.9603 4.33194 10.8197 4.33203 10.6759L4.33203 3.47201C4.33203 3.32683 4.37552 3.18495 4.45697 3.06445C4.53842 2.94395 4.65413 2.85031 4.78934 2.79546C4.92315 2.73865 5.07108 2.72324 5.21383 2.75124C5.35658 2.77924 5.48754 2.84935 5.58963 2.95242Z"
            fill="#BDC7D1"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          left: selectedGraphic.left + 5,
        });
        updateGraphics(undefined, selectedGraphic.left + 5);
      },
    },
  ];
  const sEdit = [
    {
      name: "Scale Up",
      svg: plus,
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          scaleX: selectedGraphic.scaleX + 0.1,
          scaleY: selectedGraphic.scaleY + 0.1,
        });
        updateGraphics(undefined, undefined, {
          scaleX: selectedGraphic.scaleX + 0.1,
          scaleY: selectedGraphic.scaleY + 0.1,
        });
      },
    },
    {
      name: "Scale Down",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M15.8346 10.5713H4.16797"
            stroke="#BDC7D1"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          scaleX: selectedGraphic.scaleX - 0.1,
          scaleY: selectedGraphic.scaleY - 0.1,
        });
        updateGraphics(undefined, undefined, {
          scaleX: selectedGraphic.scaleX - 0.1,
          scaleY: selectedGraphic.scaleY - 0.1,
        });
      },
    },
    {
      name: "Rotate Left",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M14 6.57129C14 6.57129 13.1331 5.33129 12.7196 4.87129C12.1415 4.17434 11.4213 3.60868 10.6072 3.21206C9.79304 2.81545 8.90363 2.597 7.99832 2.57129C6.86866 2.57192 5.76211 2.89127 4.80591 3.49263C3.84972 4.09398 3.0827 4.95292 2.59306 5.97067C2.10343 6.98842 1.91105 8.12366 2.03805 9.24584C2.16506 10.368 2.60628 11.4316 3.311 12.3143C4.01572 13.1969 4.9553 13.8628 6.02173 14.2354C7.08815 14.608 8.2381 14.6721 9.33934 14.4204C10.4406 14.1687 11.4484 13.6113 12.2469 12.8125C13.0455 12.0137 13.6023 11.0057 13.8533 9.90462"
            stroke="#BDC7D1"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0022 3.23828V6.57161H10.668"
            stroke="#BDC7D1"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          rotation: selectedGraphic.rotation + 5,
        });
        updateGraphics(
          undefined,
          undefined,
          undefined,

          selectedGraphic.rotation + 5,
        );
      },
    },
    {
      name: "Rotate Right",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M2 6.57129C2 6.57129 2.86691 5.33129 3.28036 4.87129C3.85848 4.17434 4.57865 3.60868 5.39281 3.21206C6.20696 2.81545 7.09637 2.597 8.00168 2.57129C9.13134 2.57192 10.2379 2.89127 11.1941 3.49263C12.1503 4.09398 12.9173 4.95292 13.4069 5.97067C13.8966 6.98842 14.089 8.12366 13.9619 9.24584C13.8349 10.368 13.3937 11.4316 12.689 12.3143C11.9843 13.1969 11.0447 13.8628 9.97827 14.2354C8.91185 14.608 7.7619 14.6721 6.66066 14.4204C5.55941 14.1687 4.55158 13.6113 3.75306 12.8125C2.95454 12.0137 2.39774 11.0057 2.14671 9.90462"
            stroke="#BDC7D1"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.99777 3.23828V6.57161H5.33203"
            stroke="#BDC7D1"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedGraphic({
          ...selectedGraphic,
          rotation: selectedGraphic.rotation - 5,
        });
        updateGraphics(
          undefined,
          undefined,
          undefined,
          selectedGraphic.rotation - 5,
        );
      },
    },
  ];
  const endLineShirt = {
    Left: -0.05,
    Center: 0,
    Right: 0.06,
    Top: 0.152,
    Middle: 0,
    Bottom: -0.32,
  };

  return (
    <div className="flex w-full flex-col gap-4 ">
      <div className="flex flex-col gap-2.5">
        <p className="text-[14px] font-[700] text-textDark">Size</p>
        <div className="flex gap-1">
          <EditInput
            name={"Width"}
            func={(e) => {
              setselectedGraphic({
                ...selectedGraphic,
                width: +e.target.value,
                scaleX: +e.target.value / 30,
              });
              updateGraphics(undefined, undefined, {
                scaleX: +e.target.value / 30,
                scaleY: selectedGraphic.scaleY,
              });
            }}
            value={parseInt(selectedGraphic.scaleX * 30)}
          />
          <EditInput
            name={"Height"}
            func={(e) => {
              setselectedGraphic({
                ...selectedGraphic,
                height: +e.target.value,
                scaleY: +e.target.value / 30,
              });
              updateGraphics(undefined, undefined, {
                scaleX: selectedGraphic.scaleX,
                scaleY: +e.target.value / 30,
              });
            }}
            value={parseInt(selectedGraphic.scaleY * 30)}
          />
          <EditInput
            name={"Rotation"}
            func={(e) => {
              setselectedGraphic({
                ...selectedGraphic,
                rotation: +e.target.value,
              });
              updateGraphics(undefined, undefined, undefined, e.target.value);
            }}
            value={selectedGraphic.rotation.toString()}
            fixed={true}
          />
          <EditInput
            name={"Scale"}
            func={(e) => {
              setselectedGraphic({
                ...selectedGraphic,
                scaleX: +e.target.value,
                scaleY: +e.target.value,
              });
              updateGraphics(undefined, undefined, {
                scaleX: +e.target.value,
                scaleY: +e.target.value,
              });
            }}
            value={selectedGraphic.scaleX.toString()}
            fixed={true}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2.5 ">
        <p className="text-[15px] font-[700] text-textDark">Edition</p>
        <div className="flex-center w-max flex-col gap-2">
          <div className="flex w-[6rem] overflow-hidden rounded-lg">
            <TextBtn
              svg={flipX}
              clickfunc={() => {
                updateGraphics(undefined, undefined, {
                  scaleX: selectedGraphic.scaleX * -1,
                  scaleY: selectedGraphic.scaleY,
                });
              }}
            />
            <TextBtn
              svg={flipY}
              clickfunc={() => {
                updateGraphics(undefined, undefined, {
                  scaleX: selectedGraphic.scaleX,
                  scaleY: selectedGraphic.scaleY * -1,
                });
              }}
            />
          </div>
          <p className="whitespace-nowrap text-[12px]  text-textLight ">Flip</p>
        </div>
      </div>

      <Positions />

      <OrderAndMove
        movement={movement}
        ordeAndMove={ordeAndMove}
        sEdit={sEdit}
      />
      <div className="flex w-full flex-col gap-2.5 ">
        <p className="text-[15px] font-[700] text-textDark">Color</p>
        <div
          style={{ background: selectedGraphic.fill }}
          onClick={() => setsmColor(!smColor)}
          className={`relative z-50 h-9  w-9 cursor-pointer rounded-full  border border-textDark `}
        ></div>
      </div>
    </div>
  );
};

export default GraphicsEdit;
