"use client";
import { arrowDown, block4, block6, filter, searchIcon } from "@/Consonats";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { SmallArrowDown } from "../page";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
import ProductCardTemp from "@/components/ProductCardTemp";
import LoadingCard from "@/components/LoadingCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notificationCaller from "@/components/NotificationCaller";

function page(slug) {
  const { getProducts, categoryProducts } = useContext(ContextStore);
  const [products, setproducts] = useState([]);
  const [selectedOption, setselectedOption] = useState("Default Sorting");
  const [smGrid, setsmGrid] = useState(false);
  const [PageState, setPageState] = useState(1);
  const [showingItems, setshowingItems] = useState(9);
  const slugMain = slug.params.slug;
  const liItems = [
    { name: "All", slug: "/categories/All" },
    { name: "Brand Appeal", slug: "/categories/brand-appeal" },
    { name: "Work Wear", slug: "/categories/work-wear" },
    { name: "Home & living", slug: "/categories/home-and-living" },
    { name: "Personal", slug: "/categories/personal" },
    { name: "Team & Sports", slug: "/categories/team-and-sports" },
    { name: "Pormotion items", slug: "/categories/pormotion-items" },
    { name: "Gift items", slug: "/categories/gift-items" },
    { name: "On Demand Service (ODS)", slug: "/categories/on-demand-service" },
  ];

  const NameGetter = () => {
    var name = "";
    liItems.forEach((it) => {
      if (it.slug.includes(slugMain)) {
        name = it.name;
      }
    });
    return name;
  };

  useEffect(() => {
    getProducts(NameGetter());
  }, []);

  const pageAdder = () => {
    if (categoryProducts) {
      setPageState((e) => e + 1);
      smGrid ? setshowingItems((e) => e + 12) : setshowingItems((e) => e + 9);
    }
  };

  const pageRemover = () => {
    if (PageState !== 1 && categoryProducts) {
      setPageState((e) => e - 1);
      smGrid ? setshowingItems((e) => e - 12) : setshowingItems((e) => e - 9);
    }
  };
  const notificationCall = (result, message) => {
    notificationCaller(
      result.success,
      result.success ? message : result.error,
      toast,
    );
  };

  useEffect(() => {
    if (categoryProducts) {
      if (selectedOption === "Default Sorting") {
        setproducts([...categoryProducts]);
      } else if (selectedOption === "Low to High") {
        let tempProducts = [...categoryProducts];
        let tempVal;
        for (let k = 0; k < tempProducts.length; k++) {
          for (let i = 0; i < tempProducts.length; i++) {
            if (
              tempProducts[i].productPrice > tempProducts[i + 1]?.productPrice
            ) {
              tempVal = tempProducts[i + 1];
              tempProducts[i + 1] = tempProducts[i];
              tempProducts[i] = tempVal;
            }
          }
        }
        setproducts([...tempProducts]);
      } else if (selectedOption === "High to Low") {
        let tempProducts = [...categoryProducts];
        let tempVal;
        for (let k = 0; k < tempProducts.length; k++) {
          for (let i = 0; i < tempProducts.length; i++) {
            if (
              tempProducts[i].productPrice < tempProducts[i + 1]?.productPrice
            ) {
              tempVal = tempProducts[i + 1];
              tempProducts[i + 1] = tempProducts[i];
              tempProducts[i] = tempVal;
            }
          }
        }
        setproducts([...tempProducts]);
      }
    }
  }, [selectedOption, categoryProducts]);

  return (
    <section className="min-h-[100vh] w-full">
      <ToastContainer />
      <div className="flex flex-col gap-3 ">
        <TopBar
          liItems={liItems}
          slug={slugMain}
          filterAdd={true}
          sticky={true}
        />
        <SearchFilter />
        <div className="flex items-start justify-between mt-6 small:flex-center px-11 small:mt-2">
          <Sorting
            selectedOption={selectedOption}
            setselectedOption={setselectedOption}
            sorting={[
              "Default Sorting",
              "Popularity",
              "Low to High",
              "High to Low",
            ]}
          />
          <MiddleTitle
            name={NameGetter()}
            items={categoryProducts?.length || 0}
          />
          <div className="mt-1 flex flex-1 flex-grow-[0.2] justify-end gap-[3rem] small:hidden">
            <Pagechanger
              pageNumber={PageState}
              totalItems={categoryProducts?.length || 0}
              smGrid={smGrid}
              pageAdder={pageAdder}
              pageRemover={pageRemover}
            />
            <div className="gap-3 flex-center">
              <div
                onClick={() => {
                  setsmGrid(false);
                  setshowingItems(9);
                  setPageState(1);
                }}
                className={`cursor-pointer ${
                  smGrid
                    ? "[&_svg]:fill-[#F5F5F5] [&_svg]:stroke-[#F5F5F5]"
                    : "[&_svg]:fill-black [&_svg]:stroke-black"
                }`}
              >
                {block4}
              </div>
              <div
                onClick={() => {
                  setsmGrid(true);
                  setshowingItems(12);
                  setPageState(1);
                }}
                className={`cursor-pointer ${
                  smGrid
                    ? "[&_svg]:fill-black [&_svg]:stroke-black"
                    : "[&_svg]:fill-[#F5F5F5] [&_svg]:stroke-[#F5F5F5]"
                }`}
              >
                {block6}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid ${smGrid ? "grid-cols-4" : "grid-cols-3"} mt-3 px-10 small:mt-1 smo:grid-cols-1 smo:px-5`}
        >
          {categoryProducts
            ? products
                ?.slice(showingItems - (smGrid ? 12 : 9), showingItems)
                .map((it, index) => (
                  <ProductCardTemp
                    name={it.productName}
                    slug={it.slug}
                    img={it.productImg}
                    key={index}
                    border={
                      smGrid
                        ? (index + 1) % 4 !== 0
                        : (index + 2) % 3 === 0 && index !== 0
                    }
                    smGrid={smGrid}
                    customizable={it.customizable}
                    notificationCall={notificationCall}
                  />
                ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((it, index) => (
                <LoadingCard
                  key={index}
                  height={"500px"}
                  width={"100%"}
                  border={
                    smGrid
                      ? (index + 1) % 4 !== 0
                      : (index + 2) % 3 === 0 && index !== 0
                  }
                  smGrid={smGrid}
                />
              ))}
        </div>
        <footer className="mb-10 flex w-full items-center justify-between border-b border-[#E5E5E5] px-10 py-5 smo:mb-1 smo:border-y smo:px-3">
          <span className="text-[14px] font-[300] smo:text-[13px]">
            ©2024, Sublimatics Inc. Made by Hokrex
          </span>
          <Pagechanger
            pageNumber={PageState}
            totalItems={categoryProducts?.length || 0}
            smGrid={smGrid}
            pageAdder={pageAdder}
            pageRemover={pageRemover}
          />
        </footer>
      </div>
    </section>
  );
}

export default page;

const TopBar = ({ slug, liItems, filterAdd, sticky }) => {
  return (
    <div
      style={{ boxShadow: "0px 5px 20px 0px #00000003" }}
      className={`${sticky ? "sticky smo:relative" : ""} top-0 z-20 flex items-center justify-between border-b border-[#E5E5E5] bg-white py-2 pl-5 pr-11 med:w-full med:overflow-y-scroll med:pr-5 smo:py-0`}
      id="scroll-none"
    >
      <div className="flex gap-5">
        {liItems?.map((it, index) => (
          <Link
            href={it.slug}
            key={index}
            className={`relative text-[17px] font-[500] larger:text-[15px] ${it.slug.includes(slug) ? "text-pmRed smo:text-black" : " text-black hover:text-pmRed "} whitespace-nowrap py-2 large:py-4 `}
          >
            {it.name}

            <span
              className={`absolute bottom-0 hidden h-[1.5px] w-full  smo:flex ${it.slug.includes(slug) ? "bg-black" : "bg-transparent"}`}
            ></span>
          </Link>
        ))}
      </div>
      {filterAdd && (
        <div className="flex-center cursor-pointer select-none gap-1.5 rounded-[12px] border border-[#CCCCCC] px-3 py-[0.5rem] large:hidden ">
          {filter}
          <span className="text-[15px] font-[500]">Filter</span>
        </div>
      )}
    </div>
  );
};

const Sorting = ({ selectedOption, setselectedOption, sorting, small }) => {
  const [show, setshow] = useState(false);

  return (
    <div className="flex-1 flex-grow-[0.2] small:hidden">
      <div
        onClick={() => setshow(!show)}
        className={`relative flex h-[2.25rem] w-[10.5rem] ${small ? "h-[2.1rem] rounded-[0.5rem]" : "rounded-[0.4rem]"} z-50 cursor-pointer items-center justify-between border border-[#DDDDDD] px-[0.85rem]
        outline-none transition duration-[100ms] hover:shadow-xl focus:border-black focus:text-black  ${
          show ? "rounded-bl-[0] rounded-br-[0] border-b-0" : ""
        } `}
      >
        <p className="text-[0.87rem] text-black ">
          {selectedOption ? selectedOption : "Default sorting"}
        </p>
        <div
          className={`transition-all duration-[0.7s] ${
            show ? "rotate-[180deg]" : ""
          }`}
        >
          {arrowDown}
        </div>
        <div
          className={`absolute ${
            show ? "flex" : "hidden"
          } ${small ? "left-[-0.5px] top-[33px]" : "left-[-1px] top-[35px]"} flex w-[10.5rem] flex-col items-start justify-start overflow-hidden rounded-bl-[0.3rem] rounded-br-[0.3rem] border border-[#DDDDDD] bg-white`}
        >
          {sorting.map((it, index) => (
            <span
              key={index}
              onClick={(e) => setselectedOption(e.target.innerText)}
              className="flex h-8 w-full cursor-pointer items-center border-b border-[#DDDDDD] px-[0.85rem] text-[0.87em] text-black hover:bg-gray-100 "
              value="pakistan"
              selected
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MiddleTitle = ({ name, items }) => {
  return (
    <div className="flex-col gap-4 flex-center small:gap-1 ">
      <div className="flex-col flex-center ">
        <h1 className="text-[30px] font-[500] leading-[30px] smo:text-[26px]">
          {name}
        </h1>
        <span className="text-[17px] font-[400]">{items} item found</span>
      </div>
      <div className="scale-[0.8]">
        <SmallArrowDown />
      </div>
    </div>
  );
};

const Pagechanger = ({
  pageNumber,
  totalItems,
  smGrid,
  pageAdder,
  pageRemover,
}) => {
  var totalNumbers = totalItems / (smGrid ? 12 : 9);

  totalNumbers =
    +totalNumbers.toString().slice(1) > 0
      ? (+totalNumbers.toString().slice(0, 1) + 1).toFixed()
      : totalNumbers.toFixed();
  console.log(totalNumbers);
  return (
    <div className="flex select-none gap-6 [&_svg]:w-[16px]">
      <span
        onClick={() => {
          pageRemover();
        }}
        className={`rotate-[90deg] cursor-pointer ${pageNumber === 1 && "cursor-not-allowed [&_svg]:stroke-[#707070]"}`}
      >
        {arrowDown}
      </span>
      <p className="text-[18px] font-[500]">
        <span className="text-pmRed">{pageNumber}</span>/
        {totalNumbers == 0 ? 1 : totalNumbers}
      </p>
      <span
        onClick={() => {
          if (pageNumber != totalNumbers) {
            pageAdder();
          }
        }}
        className={`rotate-[-90deg] cursor-pointer ${pageNumber == totalNumbers && "cursor-not-allowed [&_svg]:stroke-[#707070]"}`}
      >
        {arrowDown}
      </span>
    </div>
  );
};

export { TopBar, Sorting };

const SearchFilter = () => {
  return (
    <div className="small:flex-center top-0 z-[60] hidden w-full gap-6 bg-white px-5 pb-3.5 pt-1 smo:sticky smo:gap-2">
      <div
        className="flex w-full max-w-[28rem] items-center gap-1
      rounded-[0.7rem] border border-gray-200 py-[0.45rem] pr-3"
      >
        <input
          type="text"
          className="w-full border-none pl-4 outline-none placeholder:text-[0.8rem] placeholder:text-gray-300 "
          placeholder="Search for product"
        />
        <div className="cursor-pointer">{searchIcon}</div>
      </div>
      <span className="flex-center rounded-[12px] border border-[#E8E8E8] p-[0.7rem] [&_svg]:translate-y-[1.5px] ">
        {filter}
      </span>
    </div>
  );
};
