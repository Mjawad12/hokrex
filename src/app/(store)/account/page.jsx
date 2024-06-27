"use client";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import ProductPageFooter from "@/components/ProductPageFooter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { FooterBlack } from "../contact/page";

function page() {
  const router = useRouter();
  const { delFunc } = useContext(ContextStore);
  const AccountDetails = [
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C15.3137 21 18 19.2091 18 17C18 14.7909 15.3137 13 12 13C8.68629 13 6 14.7909 6 17C6 19.2091 8.68629 21 12 21Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.567 13.933 3 12 3C10.067 3 8.5 4.567 8.5 6.5C8.5 8.433 10.067 10 12 10Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Personal info",
      des: "Provide and edit your personal details",
      slug: "personal-info",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.12891 18.6302L7.49891 20.0002L9.96891 17.5302L8.60891 16.1602"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 12L4.5 19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13C17.4853 13 19.5 10.9853 19.5 8.5C19.5 6.01472 17.4853 4 15 4C12.5147 4 10.5 6.01472 10.5 8.5C10.5 10.9853 12.5147 13 15 13Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Security",
      des: "Update your password",
      slug: "security",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 14.8932V9.11324C20.9993 8.41179 20.8141 7.72286 20.4631 7.11557C20.112 6.50827 19.6075 6.00397 19 5.65324L14.88 3.27324C14.0047 2.76672 13.0113 2.5 12 2.5C10.9887 2.5 9.9953 2.76672 9.12 3.27324L5 5.65324C4.39253 6.00397 3.88796 6.50827 3.53692 7.11557C3.18589 7.72286 3.00072 8.41179 3 9.11324V14.8932C3.00072 15.5947 3.18589 16.2836 3.53692 16.8909C3.88796 17.4982 4.39253 18.0025 5 18.3532L9.11 20.7332C9.989 21.2396 10.9856 21.5061 12 21.5061C13.0144 21.5061 14.011 21.2396 14.89 20.7332L19 18.3532C19.6075 18.0025 20.112 17.4982 20.4631 16.8909C20.8141 16.2836 20.9993 15.5947 21 14.8932Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21.5029V12.0029"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5293 7.12305L3.9993 7.39305L7.9993 9.69305L11.9993 12.003L15.9993 9.69305L19.9993 7.39305L20.4693 7.12305"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "My Orders",
      des: "Check your orders details.",
      slug: "my-orders",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.56 19.92C12.1948 20.0301 11.8052 20.0301 11.44 19.92C8.83 19 3 15.32 3 9C3 7.95059 3.33019 6.92778 3.94379 6.07645C4.55739 5.22512 5.4233 4.58844 6.41886 4.25658C7.41442 3.92473 8.48916 3.91453 9.49084 4.22743C10.4925 4.54033 11.3704 5.16047 12 6C12.6296 5.16047 13.5075 4.54033 14.5092 4.22743C15.5108 3.91453 16.5856 3.92473 17.5811 4.25658C18.5767 4.58844 19.4426 5.22512 20.0562 6.07645C20.6698 6.92778 21 7.95059 21 9C21 15.32 15.17 19 12.56 19.92Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Wishlist",
      des: "Check,Add ,delete items from wishlist",
      slug: "wishlist",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 10H21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 15H11.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15H7"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Payment",
      des: "Provide and edit your payment details",
      slug: "payment",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9998 14C13.6511 14 14.9898 12.6614 14.9898 11.01C14.9898 9.35869 13.6511 8.02002 11.9998 8.02002C10.3484 8.02002 9.00977 9.35869 9.00977 11.01C9.00977 12.6614 10.3484 14 11.9998 14Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11C20 16.49 14 21 12 21C10 21 4 16.5 4 11C4 8.87827 4.84285 6.84344 6.34315 5.34315C7.84344 3.84285 9.87827 3 12 3C14.1217 3 16.1566 3.84285 17.6569 5.34315C19.1571 6.84344 20 8.87827 20 11Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Address book",
      des: "Provide and edit your address details",
      slug: "address-book",
    },
  ];

  return (
    <section className="flex-center relative min-h-[calc(100vh-81px)] w-full px-5 med:pb-20 med:pt-8">
      <div className="m-auto flex w-full max-w-[1020px] flex-col gap-12 med:gap-5">
        <h1 className="text-[35px] font-[500] leading-[40px]">My Account</h1>
        <div className="med:flex-center mt-3 flex flex-wrap gap-7 small:gap-8">
          {AccountDetails.map((it, index) => (
            <AccountCard
              name={it.name}
              des={it.des}
              svg={it.svg}
              key={index}
              slug={it.slug}
            />
          ))}
        </div>
        <button
          onClick={() => {
            delFunc();
            router.push("/");
          }}
          className="w-max border-none text-[17px] font-[600] underline underline-offset-2 outline-none"
        >
          Logout
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <FooterBlack slideLast={true} nav={false} />
      </div>
    </section>
  );
}

export default page;

const AccountCard = ({ svg, name, des, slug }) => {
  return (
    <Link
      href={"/account/" + slug}
      className="flex w-full max-w-[320px] cursor-pointer flex-col rounded-[15px] border border-[#E5E5E5] p-6 hover:shadow-lg"
    >
      <span className="w-max rounded-[10px] bg-[#F9F9F9] p-2.5 ">{svg}</span>
      <h2 className="mt-5 text-[18px] font-[600]">{name}</h2>
      <p className="mt-1 text-[15px] font-[400] text-[#707070]">{des}</p>
    </Link>
  );
};
