"use client";
import { arrowDown, block4, block6, filter } from "@/Consonats";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { SmallArrowDown } from "../page";
import { ContextStore } from "@/components/Mainstate(store)/Mainstatestore";
// import ProductCard from "@/components/ProductCard";
import ProductCardTemp from "@/components/ProductCardTemp";

function page(slug) {
  const { getProducts, categoryProducts } = useContext(ContextStore);
  const [selectedOption, setselectedOption] = useState("Default Sorting");
  const [smGrid, setsmGrid] = useState(false);
  const [PageState, setPageState] = useState(1);
  const [showingItems, setshowingItems] = useState(9);
  const slugMain = slug.params.slug;
  const liItems = [
    { name: "Brand Appeal", slug: "/categories/brand-appeal" },
    { name: "Work Wear", slug: "/categories/work-wear" },
    { name: "Home & living", slug: "/categories/home-and-living" },
    { name: "Personal", slug: "/categories/personal" },
    { name: "Team & Sports", slug: "/categories/team-and-sports" },
    { name: "Pormotion items", slug: "/categories/pormotion-items" },
    { name: "Gift items", slug: "/categories/gift-items" },
    { name: "Print on demand", slug: "/categories/print-on-demand" },
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
    // getProducts(NameGetter());
  }, []);

  const products = [
    {
      productColors: [],
      productSizes: [],
      _id: "662009b4d9edf8c7e70e6187",
      productName: "Black Shirt",
      productPrice: 80,
      productCategory: "Brand Appeal",
      productDescription:
        "Our black shirt is made from premium cotton fabric, offering exceptional comfort and breathability. Its timeless black color pairs effortlessly with any bottoms, while its tailored fit ensures a polished look. Whether you're dressing up for a night out or keeping it casual for brunch, our black shirt is the perfect choice.",
      productHeading:
        "Elevate your wardrobe with our sleek black shirt, a versatile essentia",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713375666/z2hgmsp2vtrpsz3hxhst.jpg",
      __v: 0,
      slug: "black-shirt",
    },
    {
      productColors: [],
      productSizes: [],
      _id: "66200a37d9edf8c7e70e618f",
      productName: "Winter Cap",
      productPrice: 58,
      productCategory: "Brand Appeal",
      productDescription:
        "Our winter cap is made from soft, insulating materials to keep you warm during the coldest months. Its classic design features ear flaps for extra protection, while its adjustable chin strap ensures a secure fit. Whether you're hitting the slopes or shoveling snow in the driveway, our winter cap will keep you cozy and stylish all season long.",
      productHeading:
        "Beat the cold in style with our cozy winter cap, designed for warmth a",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713375799/tdjuur5crcvmdjcnmnbi.jpg",
      __v: 0,
      slug: "winter-cap",
    },
    {
      _id: "662139c849e9a9792eb6b1eb",
      productName: "Half Sleeve Shirt",
      productPrice: 155,
      productCategory: "Brand Appeal",
      productDescription:
        "Our white half sleeve shirt is made from premium cotton fabric, offering superior comfort and breathability. Its classic design features a tailored fit and a versatile half sleeve length, making it ideal for both casual and formal occasions. Whether you're heading to the office or meeting friends for dinner, our white shirt will keep you looking sharp and stylish.",
      productHeading:
        "Add a touch of sophistication to your wardrobe with our crisp white ha",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713453506/xayv4wl2tkfdvbjbbzss.jpg",
      productColors: [
        "rgb(255, 10, 10)",
        "rgb(189, 16, 224)",
        "rgb(248, 231, 28)",
        "rgb(0, 0, 0)",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      __v: 0,
      slug: "half-sleeve-shirt",
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
    {
      _id: "662156e1ea8ea041afab8f24",
      productName: "test",
      productPrice: 250,
      productCategory: "Brand Appeal",
      productDescription: "testasdasdasd",
      productHeading: "test product",
      productImg:
        "http://res.cloudinary.com/dsqtzewyx/image/upload/v1713460960/b2mdzwcxqqpoyohutogq.jpg",
      productColors: [
        "rgb(255, 42, 42)",
        "rgb(2, 2, 2)",
        "rgb(65, 17, 17)",
        "",
      ],
      productSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL"],
      slug: "test",
      __v: 0,
    },
  ];

  const pageAdder = () => {
    setPageState((e) => e + 1);
    smGrid ? setshowingItems((e) => e + 11) : setshowingItems((e) => e + 9);
  };

  const pageRemover = () => {
    setPageState((e) => e - 1);
    smGrid ? setshowingItems((e) => e - 11) : setshowingItems((e) => e - 9);
  };

  return (
    <section className="min-h-[100vh] w-full">
      <div className="flex flex-col gap-3">
        <TopBar liItems={liItems} slug={slugMain} />
        <div className="mt-6 flex items-start justify-between px-10">
          <Sorting
            selectedOption={selectedOption}
            setselectedOption={setselectedOption}
          />
          <MiddleTitle name={NameGetter()} items={products?.length || 0} />
          <div className="mt-1 flex flex-1 flex-grow-[0.2] justify-end gap-[3rem]">
            <Pagechanger
              pageNumber={PageState}
              totalItems={products?.length || 0}
              smGrid={smGrid}
              pageAdder={pageAdder}
              pageRemover={pageRemover}
            />
            <div className="flex-center gap-3">
              <div
                onClick={() => setsmGrid(false)}
                className={`cursor-pointer ${
                  smGrid
                    ? "[&_svg]:fill-[#F5F5F5] [&_svg]:stroke-[#F5F5F5]"
                    : "[&_svg]:fill-black [&_svg]:stroke-black"
                }`}
              >
                {block4}
              </div>
              <div
                onClick={() => setsmGrid(true)}
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
        <div className="flex w-full flex-wrap px-10 ">
          {products
            ?.slice(showingItems - (smGrid ? 11 : 9), showingItems)
            .map((it, index) => (
              <ProductCardTemp
                name={it.productName}
                slug={it.slug}
                img={it.productImg}
                key={index}
                border={(index + 2) % 3 === 0 && index !== 0 ? true : false}
              />
            ))}
        </div>
        <footer className="mb-10 flex w-full items-center justify-between border-b border-[#E5E5E5] px-10 py-5">
          <span className="text-[14px] font-[300]">
            ©2024, Sublimatics Inc. Made by Hokrex
          </span>
          <Pagechanger
            pageNumber={PageState}
            totalItems={products?.length || 0}
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

const TopBar = ({ slug, liItems }) => {
  return (
    <div
      style={{ boxShadow: "0px 5px 20px 0px #00000003" }}
      className="sticky top-0 z-20 flex items-center justify-between border-b border-[#E5E5E5] bg-white px-10 py-2"
    >
      <div className="flex gap-5">
        {liItems.map((it, index) => (
          <Link
            href={it.slug}
            key={index}
            className={`text-[17px] font-[500] ${it.slug.includes(slug) ? "text-pmRed" : " text-black hover:text-pmRed "} `}
          >
            {it.name}
          </Link>
        ))}
      </div>
      <div className="flex-center cursor-pointer select-none gap-1.5 rounded-[12px] border border-[#CCCCCC] px-3 py-[0.5rem] ">
        {filter}
        <span className="text-[15px] font-[500]">Filter</span>
      </div>
    </div>
  );
};

const Sorting = ({ selectedOption, setselectedOption }) => {
  const [show, setshow] = useState(false);
  const sorting = [
    "Default Sorting",
    "Popularity",
    "Low to High",
    "High to Low",
  ];
  return (
    <div className="flex-1 flex-grow-[0.2]">
      <div
        onClick={() => setshow(!show)}
        className={`relative flex h-[2.25rem] w-[10.5rem] cursor-pointer items-center justify-between rounded-[0.4rem] border border-[#DDDDDD] px-[0.85rem] outline-none
        transition duration-[100ms] hover:shadow-xl focus:border-black focus:text-black  ${
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
          } left-[-1px] top-[35px] flex w-[10.5rem] flex-col items-start justify-start overflow-hidden rounded-bl-[0.3rem] rounded-br-[0.3rem] border border-[#DDDDDD] bg-white`}
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
    <div className="flex-center flex-col gap-4 ">
      <div className="flex-center flex-col ">
        <h1 className="text-[30px] font-[500] leading-[30px]">{name}</h1>
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
  const totalNumbers = (totalItems / (smGrid ? 11 : 9)).toFixed();
  return (
    <div className="flex gap-6 [&_svg]:w-[16px]">
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
          pageAdder();
        }}
        className={`rotate-[-90deg] cursor-pointer ${pageNumber == totalNumbers && "cursor-not-allowed [&_svg]:stroke-[#707070]"}`}
      >
        {arrowDown}
      </span>
    </div>
  );
};
