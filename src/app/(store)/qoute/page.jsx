"use client";
import React, { useRef } from "react";

function page() {
  const fileRef = useRef(null);
  const icons = [
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1245_32568)">
        <path
          d="M38.8482 19.4241C38.8482 8.69533 30.1529 0 19.4241 0C8.69533 0 0 8.69533 0 19.4241C0 29.121 7.10194 37.1562 16.3891 38.613V25.0389H11.4572V19.4241H16.3891V15.1447C16.3891 10.2773 19.2875 7.58755 23.7263 7.58755C25.8508 7.58755 28.0739 7.96693 28.0739 7.96693V12.7471H25.6232C23.2103 12.7471 22.4591 14.2456 22.4591 15.7821V19.4241H27.8463L26.9851 25.0389H22.4591V38.613C31.7463 37.1562 38.8482 29.121 38.8482 19.4241Z"
          fill="#1877F2"
        />
        <path
          d="M26.9849 25.0388L27.8461 19.424H22.459V15.782C22.459 14.2455 23.2101 12.7469 25.623 12.7469H28.0738V7.96678C28.0738 7.96678 25.8506 7.5874 23.7261 7.5874C19.2874 7.5874 16.3889 10.2772 16.3889 15.1446V19.424H11.457V25.0388H16.3889V38.6129C17.3791 38.7684 18.3921 38.8481 19.424 38.8481C20.4559 38.8481 21.4688 38.7684 22.459 38.6129V25.0388H26.9849Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1245_32568">
          <rect width="38.8482" height="38.8482" fill="white" />
        </clipPath>
      </defs>
    </svg>,
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.847656 19.4241C0.847656 8.69648 9.54413 0 20.2718 0C30.9994 0 39.6959 8.69648 39.6959 19.4241C39.6959 30.1518 30.9994 38.8482 20.2718 38.8482C9.54413 38.8482 0.847656 30.1518 0.847656 19.4241Z"
        fill="#0077B5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8623 11.9964C14.8623 13.2664 13.9064 14.2825 12.3715 14.2825H12.3434C10.8655 14.2825 9.91016 13.2664 9.91016 11.9964C9.91016 10.6996 10.8946 9.71191 12.4005 9.71191C13.9064 9.71191 14.8337 10.6996 14.8623 11.9964ZM14.5729 16.0878V29.3138H10.171V16.0878H14.5729ZM30.4476 29.3138L30.4477 21.7304C30.4477 17.6679 28.2761 15.7772 25.3795 15.7772C23.0423 15.7772 21.996 17.0609 21.4117 17.9615V16.0881H17.0093C17.0673 17.3292 17.0093 29.3141 17.0093 29.3141H21.4117V21.9276C21.4117 21.5324 21.4403 21.138 21.5567 20.855C21.8748 20.0653 22.5992 19.2477 23.8153 19.2477C25.4088 19.2477 26.0458 20.4605 26.0458 22.2379V29.3138H30.4476Z"
        fill="white"
      />
    </svg>,
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.695312 19.4241C0.695312 8.69648 9.39179 0 20.1194 0C30.8471 0 39.5436 8.69648 39.5436 19.4241C39.5436 30.1518 30.8471 38.8482 20.1194 38.8482C9.39179 38.8482 0.695312 30.1518 0.695312 19.4241Z"
        fill="#FF0000"
      />
      <path
        d="M30.0458 14.6272C29.8076 13.7118 29.1055 12.991 28.214 12.7464C26.5984 12.3018 20.1193 12.3018 20.1193 12.3018C20.1193 12.3018 13.6402 12.3018 12.0245 12.7464C11.133 12.991 10.4309 13.7118 10.1926 14.6272C9.75977 16.2862 9.75977 19.7477 9.75977 19.7477C9.75977 19.7477 9.75977 23.2091 10.1926 24.8682C10.4309 25.7835 11.133 26.5044 12.0245 26.7491C13.6402 27.1936 20.1193 27.1936 20.1193 27.1936C20.1193 27.1936 26.5984 27.1936 28.214 26.7491C29.1055 26.5044 29.8076 25.7835 30.0458 24.8682C30.4788 23.2091 30.4788 19.7477 30.4788 19.7477C30.4788 19.7477 30.4788 16.2862 30.0458 14.6272Z"
        fill="white"
      />
      <path
        d="M18.1758 23.3092V16.8345L23.3555 20.072L18.1758 23.3092Z"
        fill="#FF0000"
      />
    </svg>,
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.542969 19.4241C0.542969 8.69648 9.23945 0 19.9671 0C30.6947 0 39.3912 8.69648 39.3912 19.4241C39.3912 30.1518 30.6947 38.8482 19.9671 38.8482C9.23945 38.8482 0.542969 30.1518 0.542969 19.4241Z"
        fill="#55ACEE"
      />
      <path
        d="M19.3862 15.788L19.4269 16.4601L18.7476 16.3778C16.2748 16.0623 14.1145 14.9924 12.2803 13.1955L11.3836 12.304L11.1526 12.9624C10.6635 14.43 10.976 15.98 11.995 17.0225C12.5384 17.5986 12.4162 17.6809 11.4787 17.338C11.1526 17.2282 10.8673 17.1459 10.8401 17.1871C10.745 17.2831 11.0711 18.5313 11.3292 19.0251C11.6825 19.711 12.4026 20.3831 13.1906 20.7809L13.8564 21.0964L13.0683 21.1101C12.3075 21.1101 12.2803 21.1238 12.3618 21.4118C12.6335 22.3034 13.7069 23.2499 14.9025 23.6614L15.7449 23.9494L15.0112 24.3884C13.9243 25.0193 12.6471 25.376 11.37 25.4034C10.7586 25.4171 10.2559 25.472 10.2559 25.5131C10.2559 25.6503 11.9134 26.4184 12.8781 26.7202C15.7721 27.6118 19.2095 27.2277 21.791 25.7052C23.6252 24.6216 25.4595 22.468 26.3154 20.3831C26.7774 19.272 27.2393 17.242 27.2393 16.2681C27.2393 15.6371 27.2801 15.5548 28.0409 14.8004C28.4893 14.3615 28.9105 13.8814 28.992 13.7442C29.1279 13.4836 29.1143 13.4836 28.4214 13.7168C27.2665 14.1283 27.1035 14.0734 27.6741 13.4562C28.0953 13.0172 28.598 12.2217 28.598 11.9885C28.598 11.9473 28.3942 12.0159 28.1632 12.1394C27.9187 12.2765 27.3752 12.4823 26.9676 12.6057L26.2339 12.8389L25.5682 12.3863C25.2013 12.1394 24.685 11.865 24.4133 11.7827C23.7204 11.5907 22.6606 11.6181 22.0356 11.8376C20.3372 12.4548 19.2639 14.046 19.3862 15.788Z"
        fill="white"
      />
    </svg>,
  ];
  return (
    <>
      <section className="w-full px-5">
        <div className="flex-center m-auto min-h-[calc(100vh-73px)] w-full max-w-[1200px] gap-24 ">
          <div className="flex flex-1 flex-grow-[0.55] flex-col">
            <div
              style={{ "box-shadow": "2px 4px 25px 0px #0000000D" }}
              className="flex w-full flex-col gap-12 rounded-[32px] border  border-[#E5E5E5] px-14 py-16"
            >
              <h2 className="text-[52px] font-[600] leading-[56px]">
                Fill Form
              </h2>
              <form action={"#"} className="flex flex-wrap gap-5 gap-y-5">
                <CustomInput
                  type="text"
                  required={true}
                  placeholder="First Name"
                />
                <CustomInput type="" required={true} placeholder="Last Name" />
                <CustomInput type="text" required={true} placeholder="Email" />
                <CustomInput type="text" required={true} placeholder="Phone" />
                <textarea
                  className="flex w-full  resize-none gap-1.5 border-b border-[#E5E5E5] py-2  text-[16px] outline-none hover:border-black focus:border-black "
                  placeholder="Message"
                  rows={3}
                  cols={5}
                />
              </form>
              <div className="flex flex-col gap-2">
                <div className="flex-center mt-1 justify-start gap-2 ">
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onInput={(e) => {
                      console.log(e.target.files);
                      if (e.target.files.length > 0) {
                        e.target.nextElementSibling.nextElementSibling.innerText =
                          e.target.files[0].name;
                      }
                    }}
                  />
                  <button
                    className="cs-in-1 !rounded-[10px] !px-[1.4rem]  !text-[13px]"
                    onClick={() => fileRef.current.click()}
                  >
                    Choose File
                  </button>
                  <p
                    className="ml-0.5 text-[12px] font-[500]"
                    onClick={() => fileRef.current.click()}
                  >
                    No File selected
                  </p>
                  <p className="text-[13px] font-[500] text-gray-400 ">
                    (optional)
                  </p>
                </div>
                <p className="text-[12px] font-[500]">
                  If The File Is Larger Than 256mb, Please Provide A Dropbox.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-grow-[0.5] flex-col items-start justify-start gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-[25px] font-[700] tracking-[3px]">
                SUBMIT YOUR
              </h1>
              <h2 className="text-[56px] font-[700] leading-[56px]">
                Free Qoute
              </h2>
            </div>
            <p className="text-[17px] font-[500] leading-[18px]">
              Growing up in Orlando Florida with such a diverse culture. was not
              hard to come by. It is a city full of art,
            </p>
            <div className="mt-1 flex gap-1.5">
              {icons.map((it, index) => (
                <span key={index}>{it}</span>
              ))}
            </div>
            <hr className="my-2.5 h-[5px] w-[95px] bg-pmRed" />
            <button className="btn-Primary mt-1 px-8 ">Submit Qoute</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

const DropDown = ({
  data,
  selectedOption,
  setselectedOption,
  overflow,
  city,
}) => {
  const [show, setshow] = useState(false);

  const changeSelected = (e) => {
    setselectedOption(e.target.innerText);
  };
  return (
    <div
      onClick={() => setshow(!show)}
      className="relative flex h-[2.9rem] w-full cursor-pointer items-center justify-between rounded-lg border border-darkLight px-4 transition duration-[100ms] hover:shadow-xl [&_svg]:stroke-textLight"
    >
      <p className="text-[14px] font-[600] text-textLight">{selectedOption}</p>
      {arrowDown}
      <div
        className={`absolute ${
          show ? "flex" : "hidden"
        }  left-0 top-[45px] z-20 flex min-h-[15rem] w-full flex-col items-start justify-start  rounded-md bg-darkLight  ${
          overflow ? "overflow-y-scroll" : ""
        }`}
      >
        {data.map((it, index) => (
          <span
            key={index}
            onClick={changeSelected}
            className="flex h-8 w-full cursor-pointer items-center justify-start px-5 py-2 text-gray-400 hover:bg-gray-200 "
            value={it}
          >
            {city === "Karachi" ? it.name : it}
          </span>
        ))}
      </div>
    </div>
  );
};

const CustomInput = ({ type, placeholder, required }) => {
  return (
    <input
      type={type}
      required={true}
      placeholder={placeholder}
      className="flex flex-1 flex-grow-[0.5] gap-1.5 border-b border-[#E5E5E5] py-2 text-[16px] outline-none hover:border-black focus:border-black"
    />
  );
};
