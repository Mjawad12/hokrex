import TopNavigator from "@/components/TopNavigator";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { customizeIcon } from "@/Consonats";
import ProductShower from "@/components/ProductShower";
import getProducts from "@/components/Funcs/getProducts";

export const dynamic = "force-dynamic";

async function page({ params }) {
  const products = await getProducts();
  let product = {};
  products.forEach((it) => {
    if (it.slug === params.slug) {
      product = it;
    }
  });
  const similarImages = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <TopNavigator />
      <div className="flex justify-center gap-10 px-10 pr-0 py-20 relative pb-0">
        <div className="flex-1 flex-grow-[0.5] flex  items-start h-[520px] ">
          <div className="flex flex-col gap-5">
            {similarImages.map((it) => (
              <div className="border border-borderP">
                <Image
                  key={it}
                  width={60}
                  height={60}
                  alt="More images"
                  src={"/TestImg2.jpg"}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center justify-start ">
            <Image
              src="/TestImg2.jpg"
              alt="shirt image"
              width={500}
              height={500}
            />
            <Link
              href={"/customize/1"}
              className={`flex-center rounded-[0.75rem] mt-6 w-[22rem] py-[0.9px] cust-btn hover:shadow-lg`}
            >
              <button className="w-[21.9rem] py-2 flex flex-center gap-2 bg-white text-[18px] font-[500] rounded-[0.7rem] ">
                {customizeIcon} Customize
              </button>
            </Link>
          </div>
        </div>
        <ProductShower product={product} products={products} />
      </div>
    </div>
  );
}

export default page;
