import {
  arrowDown,
  plus,
  redCross,
  underline as underlineSvg,
  uppercase,
} from "@/Consonats";
import { color, motion, useAnimate } from "framer-motion";
import React, { useRef, useState } from "react";
import OrderAndMove, { Positions } from "../OrderAndMove";
import CircularSlider from "@fseehawer/react-circular-slider";

const TextEdit = ({
  UpdateText,
  selectedText,
  setselectedText,
  setsmColor,
  smColor,
}) => {
  const [scope, animate] = useAnimate();
  const [upperCase, setupperCase] = useState(false);
  const [moreOpts, setmoreOpts] = useState(false);
  const [alignment, setalignment] = useState(0);
  const [selectedEffect, setselectedEffect] = useState(null);
  const [strokeEffect, setstrokeEffect] = useState({
    apply: false,
    strokeWidth: 1,
    strokeColor: "red",
  });
  const [shadowEffect, setshadowEffect] = useState({
    apply: false,
    color: "red",
    opacity: 1,
    x: 8,
    y: 8,
    blur: 5,
  });
  const [curveEffect, setcurveEffect] = useState({
    apply: false,
    strokeWidth: 1,
    strokeColor: "red",
  });
  const alignmentSvgs = {
    0: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 13H12"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 9H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 5H5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    1: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 13H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 9H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 5H8"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    2: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 9H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 5H1"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    3: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13H8"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 9H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 5H1"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1H15"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
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
        setselectedText({
          ...selectedText,
          top: selectedText.top - 5.1,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          selectedText.top - 5.1,
        );
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
        setselectedText({
          ...selectedText,
          top: selectedText.top + 5.1,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          selectedText.top + 5.1,
        );
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
        setselectedText({
          ...selectedText,
          left: selectedText.left - 5,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          selectedText.left - 5,
        );
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
        setselectedText({
          ...selectedText,
          left: selectedText.left + 5,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          selectedText.left + 5,
        );
      },
    },
  ];
  const sEdit = [
    {
      name: "Scale Up",
      svg: plus,
      clickfunc: function () {
        setselectedText({
          ...selectedText,
          scaleX: selectedText.scaleX + 0.1,
          scaleY: selectedText.scaleY + 0.1,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          {
            scaleX: selectedText.scaleX + 0.1,
            scaleY: selectedText.scaleY + 0.1,
          },
        );
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
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedText({
          ...selectedText,
          scaleX: selectedText.scaleX - 0.1,
          scaleY: selectedText.scaleY - 0.1,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          {
            scaleX: selectedText.scaleX - 0.1,
            scaleY: selectedText.scaleY - 0.1,
          },
        );
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
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.0022 3.23828V6.57161H10.668"
            stroke="#BDC7D1"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedText({
          ...selectedText,
          rotation: selectedText.rotation + 5,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          selectedText.rotation + 5,
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
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.99777 3.23828V6.57161H5.33203"
            stroke="#BDC7D1"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      clickfunc: function () {
        setselectedText({
          ...selectedText,
          rotation: selectedText.rotation - 5,
        });
        UpdateText(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          selectedText.rotation - 5,
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
  const Applyer = (newEffect) => {
    setselectedText({ ...selectedText, effects: newEffect });
    UpdateText(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newEffect,
    );
  };

  return (
    <div className="flex w-full flex-col gap-4 pb-12">
      <input
        onInput={(e) => {
          setselectedText({ ...selectedText, text: e.target.value });
          UpdateText(e.target.value);
        }}
        type="text"
        className="flex-center w-full rounded-md border border-darkLight bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
        placeholder="Text here"
        maxLength={30}
        value={selectedText.text}
      />

      <Positions />

      <OrderAndMove
        movement={movement}
        ordeAndMove={ordeAndMove}
        sEdit={sEdit}
      />

      <div className="flex flex-col gap-2.5">
        <p className="text-[15px] font-[700] text-textDark">Fonts</p>
        <div className="flex gap-2">
          <DropDown
            data={[
              "Arial",
              "Verdana",
              "Tahoma",
              "Calibri",
              "Trebuchet MS",
              "Times New Roman",
              "Georgia",
              "Garamond",
              "Courier New",
              "Brush Script MT",
              "Roboto",
              "Hammersmith One",
              "Ultra",
              "Droid Sans",
              "Droid Serif",
              "Anton",
              "Ubuntu",
              "Hanalei",
              "Lobster",
              "Noto Sans JP",
              "Stalinist One",
              "Bad Script",
              "IM Fell Double Pica",
              "Merriweather",
              "Pangolin",
              "Open Sans",
              "Catamaran",
              "Shadows Into Light",
            ]}
            selectedOption={selectedText.fontFamily}
            setselectedOption={setselectedText}
            overflow={true}
            UpdateText={UpdateText}
          />
          <DropDown
            data={[
              "Light",
              "Regular",
              "Medium",
              "Semibold",
              "Bold",
              "Extrabold",
            ]}
            selectedOption={selectedText.fontWeight}
            setselectedOption={setselectedText}
            overflow={true}
            weight={true}
            UpdateText={UpdateText}
          />
        </div>
      </div>

      <div className="flex gap-2.5">
        <div className="flex-center w-full flex-col gap-1">
          <input
            type="number"
            className="flex-center w-full rounded-md bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
            defaultValue={40}
            onInput={(e) => {
              setselectedText({ ...selectedText, fontSize: e.target.value });
              UpdateText(undefined, undefined, undefined, e.target.value);
            }}
          />
          <span className="text-[11px] font-[600] text-textDark">
            Font Size
          </span>
        </div>

        <div className="flex-center w-full flex-col gap-1">
          <input
            type="number"
            className="flex-center w-full rounded-md bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
            defaultValue={1.2}
            value={selectedText.lineHeight}
            onInput={(e) => {
              setselectedText({
                ...selectedText,
                lineHeight: e.target.value,
              });
              UpdateText(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                e.target.value,
              );
            }}
          />
          <span className="text-[11px] font-[600] text-textDark">
            Line Height
          </span>
        </div>

        <div
          onClick={() => {
            alignment === 3 ? setalignment(0) : setalignment((e) => e + 1);
            switch (alignment) {
              case 0: {
                setselectedText({ ...selectedText, textAlign: "right" });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "right",
                );
                break;
              }
              case 1: {
                setselectedText({ ...selectedText, textAlign: "justify" });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "justify",
                );
                break;
              }
              case 2: {
                setselectedText({ ...selectedText, textAlign: "left" });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "left",
                );
                break;
              }
              case 3: {
                setselectedText({ ...selectedText, textAlign: "center" });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "center",
                );
                break;
              }
            }
          }}
          className="flex-center w-full flex-col gap-1"
        >
          <span className="flex-center w-full cursor-pointer rounded-md bg-darkLight px-3 py-[0.8rem] hover:bg-darkHover">
            {alignmentSvgs[alignment]}
          </span>
          <span className="text-[11px] font-[600] text-textDark">
            Alignment
          </span>
        </div>

        <div className="flex-center w-full flex-col gap-1">
          <span
            onClick={() => {
              setupperCase(!upperCase);
              if (!upperCase) {
                setselectedText({
                  ...selectedText,
                  text: selectedText.text.toUpperCase(),
                });
                UpdateText(selectedText.text.toUpperCase());
              } else {
                setselectedText({
                  ...selectedText,
                  text: selectedText.text.toLowerCase(),
                });
                UpdateText(selectedText.text.toLowerCase());
              }
            }}
            className={`flex-center w-full cursor-pointer rounded-md ${upperCase ? "bg-darkHover" : "bg-darkLight"} px-3 py-[0.8rem] hover:bg-darkHover`}
          >
            {uppercase}
          </span>
          <span className="text-[11px] font-[600] text-textDark">
            Upper Case
          </span>
        </div>
      </div>

      <motion.div
        ref={scope}
        initial={{ height: 25 }}
        className="flex flex-col gap-2.5 overflow-hidden"
      >
        <div
          onClick={() => {
            setmoreOpts(!moreOpts);
            if (moreOpts) {
              animate(scope.current, { height: 25 });
            } else {
              animate(scope.current, { height: scope.current.scrollHeight });
            }
          }}
          className="flex cursor-pointer items-center gap-1.5 [&_svg]:w-[10px] [&_svg]:stroke-textLight"
        >
          <p className="text-[14px] text-textDark">More Options </p>
          <motion.span
            animate={{ rotate: moreOpts ? "180deg" : "0deg" }}
            className="mt-0.5 "
          >
            {arrowDown}
          </motion.span>
        </div>

        <div className="flex gap-2.5">
          <div className="flex-center w-full flex-col gap-1">
            <input
              type="number"
              className="flex-center w-full rounded-md bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
              value={selectedText.spacing}
              onInput={(e) => {
                setselectedText({ ...selectedText, spacing: e.target.value });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  e.target.value,
                );
              }}
            />
            <span className="text-[11px] font-[600] text-textDark">
              Spacing
            </span>
          </div>

          <div className="flex-center w-full flex-col gap-1">
            <input
              type="number"
              className="flex-center w-full rounded-md bg-canvasColor  px-3 py-[0.7rem] text-[14px] text-textDark outline-none"
              value={parseInt(selectedText.rotation).toFixed(0)}
              onInput={(e) => {
                setselectedText({
                  ...selectedText,
                  rotation: e.target.value,
                });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  +e.target.value,
                );
              }}
            />
            <span className="text-[11px] font-[600] text-textDark">
              Rotation
            </span>
          </div>

          <div className="flex-center w-full flex-col gap-1">
            <span
              className={`flex-center w-full cursor-pointer rounded-md hover:bg-darkHover ${selectedText.underline ? "bg-darkHover" : "bg-darkLight"} px-3 py-[0.55rem]  `}
              onClick={() => {
                setselectedText({
                  ...selectedText,
                  underline: !selectedText.underline,
                });
                UpdateText(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  !selectedText.underline,
                );
              }}
            >
              {underlineSvg}
            </span>
            <span className="text-[11px] font-[600] text-textDark">
              Alignment
            </span>
          </div>

          <div className="w-full"></div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-2.5">
        <p className="text-[15px] font-[700] text-textDark">Effects</p>
        <div className="flex gap-2.5">
          <EffectBtn
            svg={
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="#9AA4AE"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-2-outside-1_468_11231"
                  maskUnits="userSpaceOnUse"
                  x="18.5"
                  y="18"
                  width="25"
                  height="28"
                  fill="black"
                >
                  <rect fill="#9AA4AE" x="18.5" y="18" width="25" height="28" />
                  <path
                    id="no"
                    d="M22.804 42.872C21.9507 42.5413 21.6947 41.9547 22.036 41.112L29.652 22.36C29.972 21.656 30.4733 21.304 31.156 21.304H31.22C31.9133 21.336 32.3827 21.688 32.628 22.36L40.372 41.112C40.7133 41.9547 40.468 42.5413 39.636 42.872C38.7933 43.2027 38.2067 42.9573 37.876 42.136L36.148 37.944H26.18L24.532 42.136C24.2013 42.968 23.6253 43.2133 22.804 42.872ZM27.236 35.256H35.044L31.06 25.56L27.236 35.256Z"
                  />
                </mask>
                <path
                  d="M22.804 42.872L23.7634 40.5634L23.7355 40.5518L23.7073 40.5409L22.804 42.872ZM22.036 41.112L19.7197 40.1713L19.7189 40.1734L22.036 41.112ZM29.652 22.36L27.3761 21.3255L27.355 21.372L27.3357 21.4193L29.652 22.36ZM31.22 21.304L31.3353 18.8067L31.2777 18.804H31.22V21.304ZM32.628 22.36L30.2796 23.2173L30.2974 23.2662L30.3173 23.3143L32.628 22.36ZM40.372 41.112L42.6891 40.1734L42.6859 40.1656L42.6827 40.1577L40.372 41.112ZM39.636 42.872L40.5492 45.1993L40.5593 45.1952L39.636 42.872ZM37.876 42.136L40.1951 41.2023L40.1913 41.1928L40.1873 41.1832L37.876 42.136ZM36.148 37.944L38.4593 36.9912L37.8215 35.444H36.148V37.944ZM26.18 37.944V35.444H24.4766L23.8533 37.0293L26.18 37.944ZM24.532 42.136L26.8553 43.0593L26.8587 43.0507L24.532 42.136ZM27.236 35.256L24.9103 34.3388L23.5626 37.756H27.236V35.256ZM35.044 35.256V37.756H38.774L37.3564 34.3059L35.044 35.256ZM31.06 25.56L33.3724 24.6099L31.0125 18.8664L28.7343 24.6428L31.06 25.56ZM23.7073 40.5409C23.633 40.5121 24.0279 40.6446 24.2633 41.1841C24.5006 41.7277 24.3274 42.114 24.3531 42.0506L19.7189 40.1734C19.4032 40.9527 19.1874 42.0536 19.6807 43.1839C20.1721 44.3101 21.1217 44.9012 21.9007 45.2031L23.7073 40.5409ZM24.3523 42.0527L31.9683 23.3007L27.3357 21.4193L19.7197 40.1713L24.3523 42.0527ZM31.9279 23.3945C31.9511 23.3434 31.903 23.4747 31.7046 23.614C31.4869 23.7669 31.2674 23.804 31.156 23.804V18.804C30.3619 18.804 29.5505 19.0171 28.8314 19.522C28.1316 20.0133 27.6729 20.6726 27.3761 21.3255L31.9279 23.3945ZM31.156 23.804H31.22V18.804H31.156V23.804ZM31.1047 23.8013C31.0441 23.7985 30.8276 23.7687 30.592 23.592C30.3616 23.4192 30.2863 23.2358 30.2796 23.2173L34.9764 21.5026C34.7243 20.8122 34.2918 20.1168 33.592 19.592C32.8871 19.0633 32.0892 18.8415 31.3353 18.8067L31.1047 23.8013ZM30.3173 23.3143L38.0613 42.0663L42.6827 40.1577L34.9387 21.4057L30.3173 23.3143ZM38.0549 42.0506C38.085 42.125 37.9138 41.7544 38.1376 41.2195C38.3652 40.6752 38.7627 40.5289 38.7127 40.5488L40.5593 45.1952C41.3413 44.8845 42.2775 44.2795 42.7505 43.1485C43.2195 42.0269 43.0003 40.9417 42.6891 40.1734L38.0549 42.0506ZM38.7228 40.5448C38.6491 40.5737 39.0085 40.4121 39.5285 40.6296C40.0615 40.8524 40.2106 41.2407 40.1951 41.2023L35.5569 43.0697C35.8721 43.8526 36.4799 44.7742 37.5995 45.2425C38.7062 45.7053 39.7802 45.501 40.5492 45.1992L38.7228 40.5448ZM40.1873 41.1832L38.4593 36.9912L33.8367 38.8968L35.5647 43.0888L40.1873 41.1832ZM36.148 35.444H26.18V40.444H36.148V35.444ZM23.8533 37.0293L22.2053 41.2213L26.8587 43.0507L28.5067 38.8587L23.8533 37.0293ZM22.2088 41.2127C22.1829 41.2776 22.324 40.8775 22.8723 40.6439C23.4248 40.4086 23.8176 40.5859 23.7634 40.5634L21.8446 45.1806C22.6118 45.4994 23.7032 45.7247 24.8317 45.2441C25.956 44.7652 26.5504 43.8264 26.8552 43.0593L22.2088 41.2127ZM27.236 37.756H35.044V32.756H27.236V37.756ZM37.3564 34.3059L33.3724 24.6099L28.7476 26.5101L32.7316 36.2061L37.3564 34.3059ZM28.7343 24.6428L24.9103 34.3388L29.5617 36.1732L33.3857 26.4772L28.7343 24.6428Z"
                  fill="#9AA4AE"
                  mask="url(#path-2-outside-1_468_11231)"
                />
              </svg>
            }
            clickfunc={() => {
              setselectedEffect(0);
              const currentEffect = [
                { ...strokeEffect, apply: true },
                shadowEffect,
                curveEffect,
              ];
              Applyer(currentEffect);
              setstrokeEffect({ ...currentEffect[0] });
            }}
            cancelFunc={() => {
              setselectedEffect(null);
              const currentEffect = [
                { ...strokeEffect, apply: false },
                shadowEffect,
                curveEffect,
              ];
              Applyer(currentEffect);
              setstrokeEffect({ ...currentEffect[0] });
            }}
            condition={strokeEffect.apply}
          />
          <EffectBtn
            svg={
              <svg
                width="27"
                height="40"
                viewBox="0 0 27 40"
                fill="#9AA4AE"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.938 33C10.462 33 10.105 32.881 9.867 32.643C9.629 32.405 9.51 32.048 9.51 31.572V12.838H2.914C2.438 12.838 2.081 12.719 1.843 12.481C1.605 12.243 1.486 11.886 1.486 11.41C1.486 10.934 1.605 10.577 1.843 10.339C2.081 10.101 2.438 9.982 2.914 9.982H18.962C19.438 9.982 19.795 10.101 20.033 10.339C20.271 10.577 20.39 10.934 20.39 11.41C20.39 11.886 20.271 12.243 20.033 12.481C19.795 12.719 19.438 12.838 18.962 12.838H12.366V31.572C12.366 32.0253 12.2413 32.3767 11.992 32.626C11.754 32.8753 11.4027 33 10.938 33Z"
                  fill="inherit"
                />
                <circle cx="25.125" cy="16.375" r="1.375" fill="inherit" />
                <circle cx="20.543" cy="16.375" r="1.375" fill="inherit" />
                <circle cx="15.875" cy="16.375" r="1.375" fill="inherit" />
                <circle cx="15.875" cy="20.959" r="1.375" fill="inherit" />
                <circle cx="15.875" cy="25.541" r="1.375" fill="inherit" />
                <circle cx="15.875" cy="30.125" r="1.375" fill="inherit" />
                <circle cx="15.875" cy="34.709" r="1.375" fill="inherit" />
              </svg>
            }
            clickfunc={() => {
              setselectedEffect(1);
              const newEffect = [
                strokeEffect,
                { ...shadowEffect, apply: true },
                curveEffect,
              ];
              Applyer(newEffect);
              setshadowEffect({ ...newEffect[1] });
            }}
            cancelFunc={() => {
              setselectedEffect(null);
              const newEffect = [
                strokeEffect,
                { ...shadowEffect, apply: false },
                curveEffect,
              ];
              Applyer(newEffect);
              setshadowEffect({ ...newEffect[1] });
            }}
            condition={shadowEffect.apply}
          />
          <EffectBtn
            svg={
              <svg
                width="39"
                height="39"
                viewBox="0 0 27 36"
                fill="#9AA4AE"
                xmlns="http://www.w3.org/2000/svg"
                style={{ translate: "0 -3px" }}
              >
                <mask
                  id="path-1-outside-1_470_11365"
                  maskUnits="userSpaceOnUse"
                  x="5.5"
                  y="5.5"
                  width="15"
                  height="17"
                  fill="black"
                >
                  <rect fill="#9AA4AE" x="5.5" y="5.5" width="15" height="17" />
                  <path d="M7.084 21.412C6.49733 21.1847 6.32133 20.7813 6.556 20.202L11.792 7.31C12.012 6.826 12.3567 6.584 12.826 6.584H12.87C13.3467 6.606 13.6693 6.848 13.838 7.31L19.162 20.202C19.3967 20.7813 19.228 21.1847 18.656 21.412C18.0767 21.6393 17.6733 21.4707 17.446 20.906L16.258 18.024H9.405L8.272 20.906C8.04467 21.478 7.64867 21.6467 7.084 21.412ZM10.131 16.176H15.499L12.76 9.51L10.131 16.176Z" />
                </mask>
                <path
                  d="M7.084 21.412C6.49733 21.1847 6.32133 20.7813 6.556 20.202L11.792 7.31C12.012 6.826 12.3567 6.584 12.826 6.584H12.87C13.3467 6.606 13.6693 6.848 13.838 7.31L19.162 20.202C19.3967 20.7813 19.228 21.1847 18.656 21.412C18.0767 21.6393 17.6733 21.4707 17.446 20.906L16.258 18.024H9.405L8.272 20.906C8.04467 21.478 7.64867 21.6467 7.084 21.412ZM10.131 16.176H15.499L12.76 9.51L10.131 16.176Z"
                  fill="#9AA4AE"
                />
                <path
                  d="M7.084 21.412L7.27594 20.9501L7.26466 20.9458L7.084 21.412ZM6.556 20.202L6.09275 20.0139L6.09258 20.0143L6.556 20.202ZM11.792 7.31L11.3368 7.1031L11.3326 7.11239L11.3287 7.12185L11.792 7.31ZM12.87 6.584L12.8931 6.08453L12.8815 6.084H12.87V6.584ZM13.838 7.31L13.3683 7.48147L13.3719 7.49124L13.3759 7.50085L13.838 7.31ZM19.162 20.202L19.6254 20.0143L19.6241 20.0111L19.162 20.202ZM18.656 21.412L18.8386 21.8775L18.8407 21.8766L18.656 21.412ZM17.446 20.906L17.9098 20.7193L17.9083 20.7154L17.446 20.906ZM16.258 18.024L16.7203 17.8334L16.5927 17.524H16.258V18.024ZM9.405 18.024V17.524H9.06431L8.93967 17.8411L9.405 18.024ZM8.272 20.906L8.73665 21.0907L8.73733 21.0889L8.272 20.906ZM10.131 16.176L9.66587 15.9926L9.39632 16.676H10.131V16.176ZM15.499 16.176V16.676H16.245L15.9615 15.986L15.499 16.176ZM12.76 9.51L13.2225 9.31997L12.7505 8.17128L12.2949 9.32656L12.76 9.51ZM7.26466 20.9458C7.04179 20.8594 6.98558 20.7741 6.97027 20.739C6.95531 20.7047 6.93109 20.6078 7.01942 20.3897L6.09258 20.0143C5.94625 20.3755 5.89269 20.7699 6.05373 21.139C6.21442 21.5072 6.53954 21.7372 6.90334 21.8782L7.26466 20.9458ZM7.01925 20.3901L12.2553 7.49815L11.3287 7.12185L6.09275 20.0139L7.01925 20.3901ZM12.2472 7.5169C12.3298 7.33508 12.4203 7.23264 12.5028 7.17471C12.5815 7.11948 12.6819 7.084 12.826 7.084V6.084C12.5008 6.084 12.1942 6.16952 11.9282 6.35629C11.666 6.54036 11.4742 6.80092 11.3368 7.1031L12.2472 7.5169ZM12.826 7.084H12.87V6.084H12.826V7.084ZM12.8469 7.08347C13.0038 7.09071 13.1022 7.13154 13.1695 7.182C13.2378 7.23323 13.3099 7.32136 13.3683 7.48147L14.3077 7.13853C14.1975 6.83664 14.0239 6.57277 13.7695 6.382C13.5141 6.19046 13.2128 6.09929 12.8931 6.08453L12.8469 7.08347ZM13.3759 7.50085L18.6999 20.3929L19.6241 20.0111L14.3001 7.11915L13.3759 7.50085ZM18.6986 20.3897C18.7878 20.61 18.7653 20.7101 18.7502 20.7461C18.7359 20.7802 18.6841 20.8628 18.4713 20.9474L18.8407 21.8766C19.1999 21.7339 19.5184 21.5011 19.6728 21.1319C19.8264 20.7646 19.7709 20.3733 19.6254 20.0143L18.6986 20.3897ZM18.4734 20.9466C18.2532 21.0329 18.1509 21.011 18.1119 20.9947C18.0755 20.9795 17.9935 20.9271 17.9098 20.7193L16.9822 21.0927C17.1258 21.4495 17.3592 21.7638 17.7261 21.9173C18.0904 22.0697 18.4794 22.0184 18.8386 21.8774L18.4734 20.9466ZM17.9083 20.7154L16.7203 17.8334L15.7957 18.2146L16.9837 21.0966L17.9083 20.7154ZM16.258 17.524H9.405V18.524H16.258V17.524ZM8.93967 17.8411L7.80667 20.7231L8.73733 21.0889L9.87033 18.2069L8.93967 17.8411ZM7.80735 20.7213C7.72159 20.9371 7.63929 20.9884 7.60857 21.0015C7.57866 21.0142 7.48691 21.038 7.27588 20.9503L6.89212 21.8737C7.24576 22.0207 7.63434 22.0774 8.00043 21.9215C8.36571 21.7659 8.59508 21.4469 8.73665 21.0907L7.80735 20.7213ZM10.131 16.676H15.499V15.676H10.131V16.676ZM15.9615 15.986L13.2225 9.31997L12.2975 9.70003L15.0365 16.366L15.9615 15.986ZM12.2949 9.32656L9.66587 15.9926L10.5961 16.3594L13.2251 9.69344L12.2949 9.32656Z"
                  fill="#9AA4AE"
                  mask="url(#path-1-outside-1_470_11365)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4997 26.75C10.3573 26.75 7.5606 28.2371 5.77718 30.5469C6.22774 31.0717 6.5 31.754 6.5 32.5C6.5 34.1569 5.15685 35.5 3.5 35.5C1.84315 35.5 0.5 34.1569 0.5 32.5C0.5 30.8614 1.81375 29.5296 3.44543 29.5005C5.65863 26.327 9.33571 24.25 13.4997 24.25C17.6635 24.25 21.3407 26.3268 23.554 29.5005C25.1859 29.5293 26.5 30.8612 26.5 32.5C26.5 34.1569 25.1569 35.5 23.5 35.5C21.8431 35.5 20.5 34.1569 20.5 32.5C20.5 31.7542 20.7721 31.072 21.2225 30.5473C19.4392 28.2375 16.6424 26.75 13.4997 26.75Z"
                  fill="#9AA4AE"
                />
              </svg>
            }
          />
        </div>

        {selectedEffect !== null && (
          <EffectSettings
            selectedEffect={selectedEffect}
            selectedText={selectedText}
            setselectedText={setselectedText}
            setstrokeEffect={setstrokeEffect}
            strokeEffect={strokeEffect}
            shadowEffect={shadowEffect}
            setshadowEffect={setshadowEffect}
            curveEffect={curveEffect}
            UpdateText={UpdateText}
            setsmColor={setsmColor}
            smColor={smColor}
            Applyer={Applyer}
          />
        )}
      </div>

      <div className="flex w-full flex-col gap-2.5 ">
        <p className="text-[15px] font-[700] text-textDark">Color</p>
        <div
          style={{ background: selectedText.color }}
          onClick={() => setsmColor(!smColor)}
          className={`relative z-50 h-9  w-9 cursor-pointer rounded-full border-[2px] border-textDark`}
        ></div>
      </div>
    </div>
  );
};

const EffectBtn = ({ svg, clickfunc, cancelFunc, condition }) => {
  return (
    <div className="relative">
      <button
        onClick={clickfunc}
        className={`flex-center h-[60px] w-[60px]  rounded-[4px] bg-darkLight hover:bg-darkHover [&_path:not(#no)]:hover:fill-white [&_rect]:hover:fill-white [&_svg]:hover:fill-white ${condition ? "border border-pmRed" : ""}`}
      >
        {svg}
      </button>
      {condition && (
        <span
          onClick={cancelFunc}
          className="absolute -right-1.5 -top-1.5 cursor-pointer"
        >
          {redCross}
        </span>
      )}
    </div>
  );
};

const EffectSettings = ({
  selectedEffect,
  strokeEffect,
  setstrokeEffect,
  selectedText,
  setselectedText,
  curveEffect,
  UpdateText,
  setsmColor,
  smColor,
  shadowEffect,
  setshadowEffect,
  Applyer,
}) => {
  const [angleValue, setangleValue] = useState(0);
  const slider = useRef(null);
  const func = () => {
    const val = slider.current?.value;
    const percent = (val / slider.current?.max) * 100;
    slider.current.style.background = `linear-gradient(to right , white ${
      percent.toFixed(0) + "%"
    } , #252A30 0%)`;
    const currentEffect = [
      { ...strokeEffect, strokeWidth: val / 25 },
      shadowEffect,
      curveEffect,
    ];
    console.log(currentEffect);
    setselectedText({ ...selectedText, effects: currentEffect });
    UpdateText(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      currentEffect,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full"
    >
      {(selectedEffect === 0 && (
        <div className="flex gap-2 pt-5">
          <div
            style={{ background: selectedText.color }}
            onClick={() => {
              setsmColor(!smColor);
            }}
            className={`relative z-50 h-9 w-14 cursor-pointer rounded-full border-[2px] border-textDark`}
          ></div>
          <div className="flex w-full translate-y-0.5 flex-col gap-1">
            <p className="text-[12px] text-[#D9DBDD]">Width</p>
            <input
              type="range"
              min={1}
              max={100}
              defaultValue={10}
              id="cs12-Sli-tool"
              ref={slider}
              onInput={func}
            />
          </div>
          <input
            type="number"
            value={slider.current?.value || 10}
            max={100}
            min={5}
            onInput={(e) => {
              slider.current.value = e.target.value;
              func();
            }}
            className="h-7 w-12 translate-y-1.5 rounded-[4px] bg-darkP px-1 text-[13px] leading-[13px] text-white outline-none"
          />
        </div>
      )) ||
        (selectedEffect === 1 && (
          <div className="flex w-full gap-5 pt-6 ">
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <div
                  style={{ background: selectedText.color }}
                  onClick={() => setsmColor(!smColor)}
                  className={`relative z-50 h-9 w-9 cursor-pointer rounded-full border-[2px] border-textDark`}
                />
                <span className="text-[12px] font-[600] text-[#D3D4D6]">
                  Color
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CircularSlider
                  knobColor="#D3D4D6"
                  knobSize={20}
                  progressSize={4}
                  trackColor="#3F4A57"
                  progressColorFrom="#D3D4D6"
                  progressColorTo="#D3D4D6"
                  valueFontSize="0"
                  labelFontSize="0"
                  trackSize={4}
                  max={100}
                  min={1}
                  width={40}
                  onChange={(e) => setangleValue(e)}
                />
                <span className="text-[12px] font-[600] text-[#D3D4D6]">
                  {angleValue}
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <CustomInput title={"Opacity"} func={() => {}} />
              <CustomInput
                title={"X-Offest"}
                func={(e) => {
                  const newEffect = [
                    strokeEffect,
                    {
                      ...shadowEffect,
                      x: e.target.value / 2,
                    },
                    curveEffect,
                  ];
                  Applyer(newEffect);
                  setshadowEffect({ ...newEffect[1] });
                }}
              />
              <CustomInput
                title={"Y-Offest"}
                func={(e) => {
                  const newEffect = [
                    strokeEffect,
                    {
                      ...shadowEffect,
                      y: e.target.value / 2,
                    },
                    curveEffect,
                  ];
                  Applyer(newEffect);
                  setshadowEffect({ ...newEffect[1] });
                }}
              />

              <CustomInput
                title={"Blur"}
                func={(e) => {
                  const newEffect = [
                    strokeEffect,
                    { ...shadowEffect, blur: e.target.value / 8 },
                    curveEffect,
                  ];
                  Applyer(newEffect);
                  setshadowEffect({ ...newEffect[1] });
                }}
              />
            </div>
          </div>
        )) ||
        (selectedEffect === 2 && <div></div>)}
    </motion.div>
  );
};

const DropDown = ({
  data,
  selectedOption,
  setselectedOption,
  overflow,
  weight,
  UpdateText,
}) => {
  const [show, setshow] = useState(false);
  const weightData = {
    Light: 0,
    Regular: 1,
    Medium: 2,
    Semibold: 3,
    Bold: 4,
    Extrabold: 5,
  };
  const changeSelected = (val) => {
    if (weight) {
      setselectedOption((e) => {
        return { ...e, fontWeight: weightData[val.target.innerText] };
      });
      UpdateText(undefined, undefined, weightData[val.target.innerText]);
    } else {
      setselectedOption((e) => {
        return { ...e, fontFamily: val.target.innerText };
      });
      UpdateText(undefined, val.target.innerText);
    }
  };
  return (
    <div
      onClick={() => setshow(!show)}
      className="relative flex h-[3rem] w-full cursor-pointer items-center justify-between rounded-md bg-fullDark px-3 pr-4 transition duration-[100ms] hover:shadow-xl [&_svg]:w-[13px] [&_svg]:stroke-white"
    >
      <p className="font-med text-[15px] text-[#D3D4D6]">
        {weight
          ? Object.keys(weightData).find(
              (key) => weightData[key] === selectedOption,
            )
          : selectedOption}
      </p>
      {arrowDown}
      <div
        className={`absolute ${
          show ? "flex" : "hidden"
        } border-borderColorP left-0 top-[45px] z-20 flex max-h-[10rem] w-full flex-col items-start justify-start rounded-md border  bg-white py-3  ${
          overflow ? "overflow-y-scroll" : ""
        }`}
      >
        {data.map((it, index) => (
          <span
            key={index}
            onClick={changeSelected}
            className="flex h-max min-h-7 w-full cursor-pointer items-center justify-start whitespace-nowrap px-5 py-2 text-gray-400 hover:bg-gray-200 "
            value={it}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
};

const CustomInput = ({ title, func }) => {
  const [value, setvalue] = useState(10);

  return (
    <div className="flex w-full items-end gap-3">
      <div className="flex w-full flex-col gap-1">
        <p className="text-[12px] text-[#D9DBDD]">{title}</p>
        <input
          type="range"
          min={1}
          max={100}
          defaultValue={10}
          id="cs12-Sli-tool"
          onInput={(e) => {
            const val = e.target?.value;
            const percent = (val / e.target?.max) * 100;
            e.target.style.background = `linear-gradient(to right , white ${
              percent.toFixed(0) + "%"
            } , #252A30 0%)`;
            setvalue(e.target?.value);
            func(e);
          }}
        />
      </div>
      <span className="translate-y-1.5 text-[12px] font-[500] text-textLight">
        {value}
      </span>
    </div>
  );
};

export default TextEdit;
